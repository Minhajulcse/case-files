import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { runBrowserFlow } from './browser-flow.mjs';
import { runnerImport } from 'vite';

// Load the same case modules and character references used by the game.
const { module: { ALL_CASES: cases } } = await runnerImport('./src/data/cases/index.ts');

const dist = path.resolve('dist');
await readFile(path.join(dist, 'index.html'));
const profile = await mkdtemp(path.join(tmpdir(), 'case-files-chrome-'));
const browser = spawn(process.env.CHROME_BIN || 'google-chrome', [
  '--headless', '--remote-debugging-pipe', '--disable-background-networking', '--disable-dev-shm-usage',
  '--autoplay-policy=no-user-gesture-required', '--no-first-run', '--no-default-browser-check',
  '--user-data-dir=' + profile, 'about:blank'
], { stdio: ['ignore', 'ignore', 'inherit', 'pipe', 'pipe'] });
const requests = new Map();
let id = 0, session, buffer = '';
const issues = [];
function cdp(method, params = {}, sessionId) {
  return new Promise((resolve, reject) => {
    const requestId = ++id;
    requests.set(requestId, { resolve, reject });
    browser.stdio[3].write(JSON.stringify({ id: requestId, method, params, sessionId }) + '\0', err => {
      if (err) {
        requests.delete(requestId);
        reject(err);
      }
    });
  });
}
const page = (method, params) => cdp(method, params, session);
function receive(message) {
  if (message.id) {
    const pending = requests.get(message.id);
    requests.delete(message.id);
    if (pending) message.error ? pending.reject(Error(message.error.message)) : pending.resolve(message.result);
  } else if (message.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(message.params.type)) {
    issues.push(message.params.args.map(a => a.value || a.description).join(' '));
  } else if (message.method === 'Runtime.exceptionThrown') {
    issues.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
  } else if (message.method === 'Runtime.bindingCalled') {
    performInput(JSON.parse(message.params.payload)).catch(err => issues.push(String(err)));
  }
}
async function performInput({ token, kind, x, y, width, height }) {
  let error = '';
  try {
    if (kind === 'resize') {
      await page('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 900 });
      await page('Emulation.setTouchEmulationEnabled', { enabled: width < 900 });
    } else if (kind === 'touch') {
      await page('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
      await page('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    } else {
      await page('Input.dispatchMouseEvent', { type: 'mousePressed', button: 'left', clickCount: 1, x, y });
      await page('Input.dispatchMouseEvent', { type: 'mouseReleased', button: 'left', clickCount: 1, x, y });
    }
  } catch (err) { error = String(err); }
  await page('Runtime.evaluate', { expression: `window.acknowledgeInput(${JSON.stringify(token)},${JSON.stringify(error)})` });
}
function stopPending(error) {
  for (const pending of requests.values()) pending.reject(error);
  requests.clear();
}
browser.on('error', stopPending);
browser.on('exit', (code, signal) => stopPending(Error('Chromium exited: ' + (signal || code))));
browser.stdio[3].on('error', stopPending);
browser.stdio[4].setEncoding('utf8');
browser.stdio[4].on('data', chunk => {
  buffer += chunk;
  let index;
  while ((index = buffer.indexOf('\0')) >= 0) {
    receive(JSON.parse(buffer.slice(0, index)));
    buffer = buffer.slice(index + 1);
  }
});
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const file = path.resolve(dist, '.' + (url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname)));
    if (!file.startsWith(dist + path.sep)) throw Error();
    const bytes = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(bytes);
  } catch {
    res.writeHead(404);
    res.end();
  }
});
const timeout = setTimeout(() => {
  stopPending(Error('Browser flow timed out'));
  browser.kill();
}, 120000);
try {
  await cdp('Browser.getVersion');
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const { targetId } = await cdp('Target.createTarget', { url: 'about:blank' });
  session = (await cdp('Target.attachToTarget', { targetId, flatten: true })).sessionId;
  await page('Runtime.enable');
  await page('Page.enable');
  await page('Runtime.addBinding', { name: 'nativeCaseInput' });
  await page('Page.navigate', { url: 'http://127.0.0.1:' + server.address().port });
  let ready = false;
  while (!ready) {
    const { result } = await page('Runtime.evaluate', { expression: 'Boolean(document.querySelector(".feature"))' });
    ready = result.value;
    if (!ready) await new Promise(resolve => setTimeout(resolve, 30));
  }
  const expression = `(async()=>{
    const pending=new Map();let serial=0;
    window.acknowledgeInput=(key,error)=>{const p=pending.get(key);pending.delete(key);error?p.reject(Error(error)):p.resolve();};
    function input(args){return new Promise((resolve,reject)=>{const token=++serial;pending.set(token,{resolve,reject});window.nativeCaseInput(JSON.stringify({token,...args}));});}
    return (${runBrowserFlow})(${JSON.stringify(cases)},{
      resize:(width,height)=>input({kind:'resize',width,height}),tap:(x,y,kind)=>input({kind,x,y})
    });
  })()`;
  const result = await page('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  if (issues.length) throw Error(issues.join('\n'));
  console.log('Chromium investigation checks passed', result.result.value);
} finally {
  clearTimeout(timeout);
  server.close();
  browser.kill();
  await rm(profile, { recursive: true, force: true, maxRetries: 3 });
}
