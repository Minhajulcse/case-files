// Executed against the built app by the Chromium runner. Cases are passed by the test
// process so this suite, including the answer key, is never shipped in dist.
export async function runBrowserFlow(cases, drive) {
  const wait = () => new Promise(resolve => setTimeout(resolve, 18));
  const all = (tag, scope = document) => Array.from(scope.querySelectorAll(tag));
  const check = (value, message) => { if (!value) throw Error(message); };
  const dialog = () => all('dialog').find(d => d.open);
  const state = id => JSON.parse(localStorage.getItem('case_files_active_case_' + id));
  const label = el => el.getAttribute('aria-label') || el.textContent.trim();
  const button = (name, partial = false, scope = dialog() || document) => {
    const candidate = all('button', scope).find(el => partial ? label(el).includes(name) : label(el) === name);
    check(candidate, 'Missing button: ' + name);
    return candidate;
  };
  const click = async el => {
    check(!el.disabled, 'Disabled: ' + label(el));
    el.click();
    await wait();
  };
  const press = (name, partial, scope) => click(button(name, partial, scope));
  const choose = async (select, value) => {
    select.value = value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    await wait();
  };
  const noOverflow = () => {
    check(document.documentElement.scrollWidth <= window.innerWidth + 1, 'Page exceeds viewport');
    const panel = dialog();
    if (panel?.clientWidth) check(panel.scrollWidth <= panel.clientWidth + 1, label(panel) + ' exceeds dialog width');
  };
  const plateNames = { study: 'Private study', apartment: 'Room 404', conduit: 'Boiler passage', vault: 'Display vault', dispatch: 'Dispatch room' };
  const statistics = { files: 0, inspections: 0, enquiries: 0, viewportChecks: 0, lockedCardTaps: 0 };
  const firstCase = cases.find(file => file.id === 'case-001');
  const tapCard = async (card, kind) => {
    const title = all('h3', card)[0];
    title.scrollIntoView({ block: 'center', inline: 'center' });
    await wait();
    const rect = title.getBoundingClientRect();
    await drive.tap(rect.left + rect.width / 2, rect.top + rect.height / 2, kind, title);
    await wait();
  };
  const checkLockedCard = async file => {
    const card = button(file.caseNumber, true);
    check(card.disabled && card.textContent.includes('COMING SOON') && card.textContent.includes(file.title.en), 'Invalid upcoming card: ' + file.id);
    const before = localStorage.getItem('case_files_active_case_' + file.id);
    for (const [width, height, kind] of [[360, 740, 'touch'], [1100, 800, 'mouse']]) {
      await drive.resize(width, height);
      await tapCard(card, kind);
      card.click();
      await wait();
      check(!dialog() && document.body.contains(card), 'Locked card navigated: ' + file.id);
      check(localStorage.getItem('case_files_active_case_' + file.id) === before, 'Locked card changed its save');
      statistics.lockedCardTaps++;
    }
  };
  await drive.resize(360, 740);
  await wait();
  noOverflow();
  for (const name of ['Detective Profile', 'Settings & Audio', 'Production Credits']) {
    await press(name);
    check(dialog(), name + ' did not open');
    noOverflow();
    await press('Close');
  }
  await press('বাংলায় পরিবর্তন করুন');
  check(document.documentElement.lang === 'bn', 'Bengali selection');
  check(all('button').filter(card => card.disabled && card.textContent.includes('COMING SOON')).length === cases.length - 1, 'Missing upcoming status in Bangla');
  await press('Switch to English');
  for (const file of cases.filter(c => c !== firstCase)) await checkLockedCard(file);
  await press('Open case file');
  check(dialog()?.textContent.includes(firstCase.briefing.chiefMemo.en), 'Incorrect desk briefing');
  await press('Close');
  await press('View all files');
  noOverflow();
  for (const file of cases) {
    if (file !== firstCase) {
      await checkLockedCard(file);
      continue;
    }
    await drive.resize(360, 740);
    const card = button(file.caseNumber, true);
    check(!card.disabled, 'Level 001 is locked');
    await tapCard(card, 'touch');
    check(!dialog() && all('g').some(el => el.getAttribute('data-hotspot') === file.crimeScene.hotspots[0].id), 'Level 001 did not open its crime scene');
    noOverflow();
    check(state(file.id).discoveredEvidenceIds.length === 0, 'New investigation must start empty');
    await press('Timeline');
    for (const event of file.timelineEvents) check(!document.body.textContent.includes(event.title.en), 'Early timeline leak');
    await press('Accusation');
    check(button('Deliver Official Indictment').disabled, 'Early indictment');
    await press('Crime Scene');
    for (const plate of file.crimeScene.plates) {
      await press(plateNames[plate]);
      for (const [width, height, zoom, kind] of [[360, 740, 1, 'touch'], [740, 360, 1.5, 'touch'], [1100, 800, 2, 'mouse']]) {
        await drive.resize(width, height);
        const index = [1, 1.5, 2].indexOf(zoom);
        if (index) {
          await press('Zoom In');
          await press('Zoom In');
        }
        noOverflow();
        statistics.viewportChecks++;
        for (const spot of file.crimeScene.hotspots.filter(h => h.plate === plate)) {
          const target = all('g').find(el => el.getAttribute('data-hotspot') === spot.id);
          check(target, 'Missing image region ' + spot.id);
          target.scrollIntoView({ block: 'center', inline: 'center' });
          await wait();
          const svg = target.ownerSVGElement;
          const rect = svg.getBoundingClientRect();
          await drive.tap(rect.left + spot.x * rect.width / 100, rect.top + spot.y * rect.height / 100, kind, target);
          await wait();
          const panel = dialog();
          check(panel?.getAttribute('aria-label') === spot.name.en, 'Wrong inspection: ' + spot.id);
          check(panel.textContent.includes(spot.description.en) && panel.textContent.includes(spot.discoveryNote.en), 'Missing observation ' + spot.id);
          noOverflow();
          const exhibit = file.evidence.find(e => e.id === spot.revealsEvidenceId);
          check(panel.textContent.includes(exhibit.name.en), 'Wrong exhibit');
          const before = state(file.id).examinedHotspotIds;
          check(before[before.length - 1] === spot.id, 'Revisited object missing from recent observations');
          if (!index) await press('Collect into Evidence Locker');
          else await press('Return to Scene');
          check(!dialog() && JSON.stringify(state(file.id).examinedHotspotIds) === JSON.stringify(before), 'Popup activated another object');
          check(state(file.id).unlockedHintLevels.length === 0, 'Direct investigation consumed a hint');
          statistics.inspections++;
        }
      }
    }
    await drive.resize(360, 740);
    await press(plateNames[file.crimeScene.plates[0]]);
    const h = file.crimeScene.hotspots[0];
    const target = all('g').find(el => el.getAttribute('data-hotspot') === h.id);
    target.focus();
    target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await wait();
    await press('Examine in Evidence Locker');
    const first = file.evidence.find(e => e.id === h.revealsEvidenceId);
    check(dialog()?.getAttribute('aria-label') === first.name.en, 'Revisit opened the wrong locker record');
    noOverflow();
    await press('Examine lab record');
    await new Promise(resolve => setTimeout(resolve, 390));
    check(dialog().textContent.includes(first.forensicReport.labSummary.en), 'Missing exhibit-specific lab report');
    await press('Mark as Key Evidence');
    await press('Close');
    await press('Suspects');
    await press('Compare statements');
    noOverflow();
    const selects = all('select', dialog());
    await choose(selects[1], file.suspects[2].id);
    check(dialog().textContent.includes(file.suspects[2].alibi.en), 'Wrong comparison');
    await press('Close');
    for (const suspect of file.suspects) {
      await press(suspect.name.en, true);
      for (const line of suspect.dialogueTree) {
        if (line.conditionClueId && !state(file.id).discoveredEvidenceIds.includes(line.conditionClueId)) continue;
        await press(line.prompt.en, true);
        check(document.body.textContent.includes(line.response.en), 'Missing interview response');
        statistics.enquiries++;
      }
      for (const reaction of suspect.evidenceReactions.filter(r => r.revealsClueId || r.exposesLie)) {
        await press('Confront Suspect with Evidence');
        await press(file.evidence.find(e => e.id === reaction.evidenceId).name.en, true);
        await press('Confront', true);
        check(document.body.textContent.includes(reaction.reactionText.en), 'Incorrect presentation');
      }
    }
    check(state(file.id).discoveredEvidenceIds.length === file.evidence.length, 'Inaccessible record in ' + file.id);
    await press('Timeline');
    await press('Verify Sequence');
    noOverflow();
    await press('Evidence Board');
    noOverflow();
    for (const inquiry of file.deductions) {
      const link = file.canonConnections.find(c => c.id === inquiry.connectionId);
      await press('Link Nodes', true);
      const [a, b] = all('select', dialog());
      await choose(a, link.sourceId);
      await choose(b, link.targetId);
      await press('Pin String Connection');
      check(document.body.textContent.includes(link.deductionNotes.en), 'Link not recognised');
    }
    await press('Accusation');
    noOverflow();
    const s = file.solution;
    const chooseOption = async (name, text) => {
      const option = all('label').find(el => el.textContent.trim() === text && all('input', el).some(input => input.name === name));
      check(option, 'Missing report option: ' + text);
      await click(all('input', option)[0]);
    };
    if (s.statementQuestion) check(document.body.textContent.includes(s.statementQuestion.en), 'Missing case-specific alibi question');
    const wrong = (s.falseAlibiSuspectId === s.culpritId
      ? file.suspects.find(p => p.id !== s.culpritId)
      : file.suspects.find(p => p.id === s.falseAlibiSuspectId)).name.en;
    await chooseOption('culprit', wrong);
    for (const [name, group, id] of [['motive', 'motives', s.motiveId], ['method', 'methods', s.methodId], ['time', 'times', s.timeId]]) {
      await chooseOption(name, s.options[group].find(o => o.id === id).label.en);
    }
    await chooseOption('statement', file.suspects.find(p => p.id === s.falseAlibiSuspectId).name.en);
    for (const id of s.crucialEvidenceIds) {
      const exhibit = file.evidence.find(e => e.id === id);
      const row = all('label').find(el => el.textContent.trim() === exhibit.name.en);
      await click(all('input', row)[0]);
    }
    await press('Evidence Board');
    await press('Accusation');
    check(!button('Deliver Official Indictment').disabled, 'Draft or evidence support lost on navigation');
    await press('Deliver Official Indictment');
    check(!state(file.id).isCompleted && !dialog().textContent.includes(s.fullCaseDebriefing.en), 'Wrong answer closed the case');
    await press('Review Investigation');
    await chooseOption('culprit', file.suspects.find(p => p.id === s.culpritId).name.en);
    await press('Deliver Official Indictment');
    check(state(file.id).isCompleted && dialog().textContent.includes(s.fullCaseDebriefing.en), 'Supported solution rejected');
    noOverflow();
    await press('Cases');
    statistics.files++;
  }
  // Reopen the playable case from the archive and check its saved investigation.
  await press(firstCase.caseNumber, true);
  check(state(firstCase.id).isCompleted, 'Level 001 progress lost on reentry');
  await press('Hints');
  for (const level of [1, 2, 3]) {
    await press('Unlock Level ' + level, true);
    await press('Confirm & Reveal');
    check(dialog().textContent.includes(firstCase.hints[level - 1].hintText.en), 'Wrong hint tier');
  }
  await press('Close');
  await press('DETECTIVE FIELD NOTEBOOK');
  check(dialog().textContent.includes(firstCase.briefing.chiefMemo.en), 'Notebook');
  await press('Close Notebook');
  return statistics;
}
