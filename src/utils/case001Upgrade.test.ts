import { describe, it, expect } from 'vitest';
import { plates, plateUrl } from '../components/common/CaseArtwork';
import { ALL_CASES, PLAYABLE_CASE_ID } from '../data/cases';
import { case001 } from '../data/cases/case001';
import { case002 } from '../data/cases/case002';
import { case003 } from '../data/cases/case003';
import { evaluateFinalDeduction } from './deductionEngine';
import { hitTest, vertices } from './hotspots';
import { createInitialCaseState } from './storage';
import { getLocalized } from '../types/game';

describe('Case files and the Level 001 investigation', () => {
  it('uses the study photograph for Case 001 and the illustrated plates for Cases 002 and 003', () => {
    const scenes = `${import.meta.env.BASE_URL}scenes/`;
    expect(case001.crimeScene.plates.map(plateUrl)).toEqual([scenes + 'study.webp']);
    expect(case002.crimeScene.plates.map(plateUrl)).toEqual([scenes + 'safehouse.svg', scenes + 'conduit.svg']);
    expect(case003.crimeScene.plates.map(plateUrl)).toEqual([scenes + 'vault.svg', scenes + 'dispatch.svg']);
    expect(case002.crimeScene.sceneTheme).toBe('motel_safehouse');
    expect(case003.crimeScene.sceneTheme).toBe('museum_vault');
  });

  it('keeps Case 001 hit regions inside the study image and selectable at their markers', () => {
    const { hotspots } = case001.crimeScene;
    const { width, height } = plates.study;
    expect(hotspots.length).toBeGreaterThanOrEqual(8);
    for (const hotspot of hotspots) {
      expect(hotspot.plate).toBe('study');
      for (const [x, y] of vertices(hotspot)) {
        expect(x).toBeGreaterThanOrEqual(0);
        expect(x).toBeLessThanOrEqual(100);
        expect(y).toBeGreaterThanOrEqual(0);
        expect(y).toBeLessThanOrEqual(100);
      }
      expect(hitTest(hotspots, hotspot.x, hotspot.y, width, height)?.id).toBe(hotspot.id);
    }
  });

  it('Verifies hotspot-to-evidence mappings resolve to valid evidence items', () => {
    const evidenceIds = new Set(case001.evidence.map(e => e.id));

    case001.crimeScene.hotspots.forEach(hotspot => {
      expect(evidenceIds.has(hotspot.revealsEvidenceId)).toBe(true);
    });

    // Check crucial evidence items are discoverable
    case001.solution.crucialEvidenceIds.forEach(crucialId => {
      expect(evidenceIds.has(crucialId)).toBe(true);
    });
  });

  it('Verifies hidden clue progression and flag configuration', () => {
    const gardenSill = case001.crimeScene.hotspots.find(h => h.id === 'hs-01-garden-sill');
    const wastebasket = case001.crimeScene.hotspots.find(h => h.id === 'hs-01-wastebasket');

    expect(gardenSill).toBeDefined();
    expect(gardenSill?.isHidden).toBe(true);
    expect(gardenSill?.revealsEvidenceId).toBe('clue-07-nylon-thread');

    expect(wastebasket).toBeDefined();
    expect(wastebasket?.isHidden).toBe(true);
    expect(wastebasket?.revealsEvidenceId).toBe('clue-08-torn-envelope');
  });

  it('Verifies dialogue condition clues reference existing evidence', () => {
    case001.suspects.forEach(suspect => {
      suspect.dialogueTree.forEach(dialogue => {
        if (dialogue.conditionClueId) {
          const exists = case001.evidence.some(e => e.id === dialogue.conditionClueId);
          expect(exists).toBe(true);
        }
      });
    });
  });

  it('corroborates the false alibi and the debt red herring with separate exhibits', () => {
    expect(case001.canonConnections).toEqual(expect.arrayContaining([
      expect.objectContaining({
        targetId: 'suspect-02-evelyn',
        sourceId: 'clue-03-stopped-clock',
        requiresEvidenceIds: ['clue-11-tray-handover'],
        isContradiction: true
      }),
      expect.objectContaining({
        targetId: 'suspect-01-julian',
        sourceId: 'clue-06-burnt-will',
        requiresEvidenceIds: ['clue-09-pawn-receipt'],
        isContradiction: false
      })
    ]));
    for (const connection of case001.canonConnections) {
      for (const language of ['en', 'bn'] as const) {
        expect(getLocalized(connection.label, language)).toBeTruthy();
        expect(getLocalized(connection.deductionNotes, language)).toBeTruthy();
      }
    }
  });

  it('offers three increasingly costly hints without naming the culprit', () => {
    expect(case001.hints.map(hint => [hint.level, hint.cost])).toEqual([[1, 50], [2, 100], [3, 200]]);
    for (const hint of case001.hints) {
      for (const language of ['en', 'bn'] as const) {
        const text = getLocalized(hint.hintText, language);
        const culprit = getLocalized(case001.solution.culpritName, language);
        expect(text).toBeTruthy();
        expect(text).not.toContain(culprit.split(' ')[0]);
      }
    }
  });

  it.each(['suspect-01-julian', 'suspect-05-marcus'])('returns an accusation against %s for review', culpritId => {
    const state = createInitialCaseState(case001.id);
    state.discoveredEvidenceIds = case001.evidence.map(e => e.id);
    state.userConnections = case001.canonConnections.map(link => ({ ...link, createdAt: 1 }));
    const answers = { ...case001.solution, culpritId, detectiveTheory: '' };
    const result = evaluateFinalDeduction(case001, answers, state);

    expect(result.isCulpritCorrect).toBe(false);
    expect(result.accepted).toBe(false);
    expect(result.pointsAwarded).toBe(0);
    expect(result.fullDebriefing).toBe('');
    for (const language of ['en', 'bn'] as const) {
      const feedback = result.feedbackNotes.map(note => getLocalized(note, language)).join(' ');
      expect(feedback).toContain(language === 'en' ? 'evidence' : 'প্রমাণ');
      expect(feedback).not.toContain(getLocalized(case001.solution.culpritName, language));
    }
  });

  it('Verifies save state compatibility with existing stored structures', () => {
    // Simulate legacy save file
    const legacyState = {
      caseId: 'case-001',
      discoveredEvidenceIds: ['clue-01-brandy-snifter', 'clue-03-stopped-clock'],
      examinedHotspotIds: ['hs-01-desk', 'hs-01-clock'],
      markedImportantClueIds: ['clue-03-stopped-clock'],
      askedDialogueIds: { 'suspect-01-julian': ['dlg-j-1'] },
      presentedClueIds: {},
      suspectStressLevels: { 'suspect-01-julian': 20 },
      userConnections: [],
      timelineOrder: ['tl-01', 'tl-02'],
      unlockedHintLevels: [1],
      revealedHiddenHotspots: [],
      caseNotes: 'Legacy detective notes',
      isCompleted: false,
      startedAt: Date.now() - 3600000
    };

    // The legacy state should work seamlessly with evaluateFinalDeduction
    const evalResult = evaluateFinalDeduction(case001, {
      culpritId: 'suspect-02-evelyn',
      motiveId: 'm-embezzle',
      methodId: 'met-decanter-thread',
      timeId: 't-2214',
      crucialEvidenceIds: ['clue-02-audited-ledger'],
      falseAlibiSuspectId: 'suspect-02-evelyn',
      detectiveTheory: 'Testing legacy save compatibility'
    }, legacyState);

    expect(evalResult.isCulpritCorrect).toBe(true);
    expect(evalResult.crucialEvidenceMatchedCount).toBe(0);
    expect(evalResult.accepted).toBe(false);
    expect(evalResult.pointsAwarded).toBe(0);
  });

  it('lists Cases 002 and 003 in the archive with only Case 001 playable', () => {
    expect(PLAYABLE_CASE_ID).toBe('case-001');
    expect(ALL_CASES.map(file => file.id)).toEqual(expect.arrayContaining(['case-001', 'case-002', 'case-003']));
  });

  it.each([
    {
      file: case001,
      subject: ['Lord Arthur Pendelton', 'লর্ড আর্থার পেন্ডেলটন'],
      suspects: [
        ['suspect-01-julian', 'Julian Pendelton', 'জুলিয়ান পেন্ডেলটন'],
        ['suspect-02-evelyn', 'Evelyn Vance', 'ইভলিন ভ্যান্স'],
        ['suspect-03-finch', 'Dr. Alistair Finch', 'ডা. অ্যালিস্টার ফিঞ্চ'],
        ['suspect-04-beatrice', 'Beatrice Morales', 'বিয়াট্রিস মোরালেস'],
        ['suspect-05-marcus', 'Marcus Kane', 'মার্কাস কেন']
      ]
    },
    {
      file: case002,
      subject: ['Clara Thorne', 'ক্লারা থর্ন'],
      suspects: [
        ['suspect-02-navarro', 'Detective Ray Navarro', 'ডিটেকটিভ রে নাভারো'],
        ['suspect-02-sterling', 'Thomas Sterling', 'টমাস স্টার্লিং'],
        ['suspect-02-maya', 'Maya Lin', 'মায়া লিন'],
        ['suspect-02-kozlov', 'Viktor Kozlov', 'ভিক্টর কজলভ'],
        ['suspect-02-isaac', 'Isaac Vance', 'আইজ্যাক ভ্যান্স']
      ]
    },
    {
      file: case003,
      subject: ['The Eye of Osiris', 'আই অব ওসাইরিস'],
      suspects: [
        ['suspect-03-rossi', 'Dr. Helena Rossi', 'ডা. হেলেনা রসি'],
        ['suspect-03-cross', 'Nathan Cross', 'নাথান ক্রস'],
        ['suspect-03-chloe', 'Chloe Dupuis', 'ক্লোয়ি দুপুই'],
        ['suspect-03-tariq', 'Tariq Al-Mansoor', 'তারিক আল-মনসুর'],
        ['suspect-03-simon', 'Simon Bell', 'সাইমন বেল']
      ]
    }
  ])('preserves the English and Bengali names in $file.id', ({ file, subject, suspects }) => {
    expect(getLocalized(file.victimOrSubject, 'en')).toContain(subject[0]);
    expect(getLocalized(file.victimOrSubject, 'bn')).toContain(subject[1]);
    for (const [id, en, bn] of suspects) {
      const name = file.suspects.find(suspect => suspect.id === id)?.name;
      expect(getLocalized(name, 'en')).toBe(en);
      expect(getLocalized(name, 'bn')).toBe(bn);
    }
  });
});
