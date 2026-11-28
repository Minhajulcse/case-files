import { afterEach, describe, expect, it, vi } from 'vitest';
import { ALL_CASES } from './cases';
import { playerDetective } from './characters';
import { loadProfile } from '../utils/storage';
import type { LocalizedString } from '../types/game';

function* translations(value: unknown): Generator<LocalizedString> {
  if (!value || typeof value !== 'object') return;
  if ('en' in value && typeof value.en === 'string' && 'bn' in value && typeof value.bn === 'string') {
    yield { en: value.en, bn: value.bn };
  } else {
    for (const child of Object.values(value)) yield* translations(child);
  }
}

const retiredEnglishNames = /\b(?:Morales|Navarro|Maya|Lin|Viktor|Kozlov|Rossi|Dupuis|Tariq|Mansoor)\b/;
const people = [playerDetective, ...ALL_CASES.flatMap(file => [...file.suspects, ...file.otherCharacters])];
const englishNameParts = new Set(people.flatMap(p => p.name.en.replace(/^(Lord |Detective |Dr\. )/, '').split(' ')));
// Include variant spellings used in testimony and inflected forms used in prose.
const retiredBengaliNames = /(?<!\p{Script=Bengali})(?:আর্থার|পেন্ডেলটন|জুলিয়ান|ইভলিন|ভ্যান্স|অ্যালিস্টার|ফিঞ্চ|বিয়াট্রিস|বিট্রিস|মোরালেস|মার্কাস|কেইন|ক্লারা|থর্ন|নাভারো|স্টার্লিং|মায়া|কজলভ|কোজলভ|আইজ্যাক|ব্ল্যাকউড|হেলেনা|রসি|ক্রস|ক্লোয়ি|দুপুই|ডুপুই|মনসুর|সাইমন|বেল)(?:কে|য়ের|ের|র)?(?!\p{Script=Bengali})/u;

it('gives every named person a unique identity and two distinct display names', () => {
  expect(people).toHaveLength(19);
  expect(new Set(people.map(p => p.id)).size).toBe(people.length);
  for (const language of ['en', 'bn'] as const) {
    expect(new Set(people.map(p => p.name[language])).size).toBe(people.length);
  }
  for (const { name } of people) {
    expect(name.en).toMatch(/^[A-Za-z .'-]+$/);
    expect(name.bn).toMatch(/^[\p{Script=Bengali} .]+$/u);
  }
  expect(ALL_CASES.flatMap(file => file.otherCharacters.map(p => [p.id, p.name.en, p.name.bn]))).toEqual([
    ['victim-01-arthur', 'Lord Arthur Pendelton', 'লর্ড অনিরুদ্ধ রায়চৌধুরী'],
    ['witness-02-clara', 'Clara Thorne', 'নুসরাত হক'],
    ['defendant-02-blackwood', 'Blackwood', 'মজুমদার']
  ]);
});

it.each(ALL_CASES)('checks both languages throughout $id, including evidence and reconstruction text', file => {
  for (const { en, bn } of translations(file)) {
    expect(en.trim()).toBeTruthy();
    expect(bn.trim()).toBeTruthy();
    expect(en).not.toMatch(/\p{Script=Bengali}/u);
    expect(en).not.toMatch(retiredEnglishNames);
    expect(bn.normalize('NFC')).not.toMatch(retiredBengaliNames);
    expect(bn).not.toMatch(retiredEnglishNames);
    for (const word of bn.match(/[A-Za-z]+/g) ?? []) expect(englishNameParts.has(word)).toBe(false);
  }
});

it('keeps the key-slip initials identifiable in each language', () => {
  const file = ALL_CASES.find(f => f.id === 'case-002')!;
  const receipt = file.evidence.find(e => e.id === 'clue-02-escape-plan-memo')!;
  const text = [...translations(receipt.details)];
  expect(text.some(line => line.en.includes('I.V.') && line.bn.includes('ই. ম.'))).toBe(true);
});

describe('detective profiles saved before name localization', () => {
  afterEach(() => vi.unstubAllGlobals());
  it.each([
    [{ name: 'Detective Cole' }, true],
    [{ name: 'Detective' }, true],
    [{ name: 'নিজের নাম' }, false],
    [{ name: 'Detective Cole', usesDefaultName: false }, false]
  ] as const)('preserves the name and career in %j', (profile, usesDefaultName) => {
    vi.stubGlobal('localStorage', { getItem: () => JSON.stringify({ ...profile, totalPoints: 1250 }) });
    expect(loadProfile()).toMatchObject({ name: profile.name, totalPoints: 1250, usesDefaultName });
  });
});
