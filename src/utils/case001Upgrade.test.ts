import { describe, it, expect } from 'vitest';
import { case001 } from '../data/cases/case001';
import { case002 } from '../data/cases/case002';
import { case003 } from '../data/cases/case003';
import { evaluateFinalDeduction } from './deductionEngine';
import { createInitialCaseState } from './storage';
import { FinalReportAnswers, HotspotFocusRect, getLocalized, CASE_AVAILABILITY } from '../types/game';

describe('Case 001 4K Crime Scene & Mystery Rebalancing Tests', () => {
  it('Verifies image asset availability for Case 001 and SVG preservation for Case 002/003', () => {
    // Case 001 must have the new runtime image URL
    expect(case001.crimeScene.imageUrl).toBe('/assets/cases/case001.png');

    // Case 002 and Case 003 must retain their SVG configurations without image overrides
    expect(case002.crimeScene.imageUrl).toBeUndefined();
    expect(case003.crimeScene.imageUrl).toBeUndefined();
    expect(case002.crimeScene.sceneTheme).toBe('motel_safehouse');
    expect(case003.crimeScene.sceneTheme).toBe('museum_vault');
  });

  it('Verifies all Case 001 hotspot coordinates and focusRects are normalized and within 4K image bounds', () => {
    expect(case001.crimeScene.hotspots.length).toBeGreaterThanOrEqual(8);

    case001.crimeScene.hotspots.forEach(hotspot => {
      // Coordinate validity
      expect(hotspot.x).toBeGreaterThanOrEqual(0);
      expect(hotspot.x).toBeLessThanOrEqual(100);
      expect(hotspot.y).toBeGreaterThanOrEqual(0);
      expect(hotspot.y).toBeLessThanOrEqual(100);

      // Focus rect validity
      expect(hotspot.focusRect).toBeDefined();
      const rect = hotspot.focusRect as HotspotFocusRect;
      expect(rect.x).toBeGreaterThanOrEqual(0);
      expect(rect.y).toBeGreaterThanOrEqual(0);
      expect(rect.width).toBeGreaterThan(0);
      expect(rect.height).toBeGreaterThan(0);
      expect(rect.x + rect.width).toBeLessThanOrEqual(100.1);
      expect(rect.y + rect.height).toBeLessThanOrEqual(100.1);

      // Calculated 4K pixel bounds
      const fullW = 3840;
      const fullH = 2160;
      const pxX = (rect.x / 100) * fullW;
      const pxY = (rect.y / 100) * fullH;
      const pxW = (rect.width / 100) * fullW;
      const pxH = (rect.height / 100) * fullH;

      expect(pxX).toBeGreaterThanOrEqual(0);
      expect(pxY).toBeGreaterThanOrEqual(0);
      expect(pxX + pxW).toBeLessThanOrEqual(fullW + 1);
      expect(pxY + pxH).toBeLessThanOrEqual(fullH + 1);
    });
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

  it('Verifies balanced red herrings and canon connections for all 5 suspects', () => {
    const suspectIds = new Set(case001.suspects.map(s => s.id));
    expect(suspectIds.has('suspect-01-julian')).toBe(true);
    expect(suspectIds.has('suspect-02-evelyn')).toBe(true);
    expect(suspectIds.has('suspect-03-finch')).toBe(true);
    expect(suspectIds.has('suspect-04-beatrice')).toBe(true);
    expect(suspectIds.has('suspect-05-marcus')).toBe(true);

    // Verify connections cover both incriminating and exonerating links
    const connectedSuspectIds = new Set<string>();
    case001.canonConnections.forEach(conn => {
      if (suspectIds.has(conn.sourceId)) connectedSuspectIds.add(conn.sourceId);
      if (suspectIds.has(conn.targetId)) connectedSuspectIds.add(conn.targetId);
      expect(getLocalized(conn.label, 'en')).toBeTruthy();
      expect(getLocalized(conn.deductionNotes, 'en')).toBeTruthy();
      expect(getLocalized(conn.deductionNotes, 'bn')).toBeTruthy();
    });

    // Julian, Evelyn, Finch, and Marcus all have canon deductive connections
    expect(connectedSuspectIds.has('suspect-01-julian')).toBe(true);
    expect(connectedSuspectIds.has('suspect-02-evelyn')).toBe(true);
    expect(connectedSuspectIds.has('suspect-03-finch')).toBe(true);
    expect(connectedSuspectIds.has('suspect-05-marcus')).toBe(true);
  });

  it('Verifies 3 progressive hint tiers follow Direction -> Relationship -> Guidance without early spoilers', () => {
    expect(case001.hints.length).toBe(3);

    const [h1, h2, h3] = case001.hints;
    expect(h1.level).toBe(1);
    expect(h2.level).toBe(2);
    expect(h3.level).toBe(3);

    // Level 1: Direction only, does not mention Nawrin Sultana
    const h1En = getLocalized(h1.hintText, 'en');
    expect(h1En.toLowerCase()).toContain('direction');
    expect(h1En).not.toContain('Nawrin');

    // Level 2: Relationship between window and rose garden
    const h2En = getLocalized(h2.hintText, 'en');
    expect(h2En.toLowerCase()).toContain('relationship');
    expect(h2En).not.toContain('Nawrin');

    // Level 3: Strong investigative guidance
    const h3En = getLocalized(h3.hintText, 'en');
    expect(h3En.toLowerCase()).toContain('investigative guidance');
  });

  it('Verifies final report evaluation provides suspect-specific feedback when accusing red herrings', () => {
    const state = createInitialCaseState('case-001');

    // Accusing Arman
    const julianAnswers: FinalReportAnswers = {
      culpritId: 'suspect-01-julian',
      motiveId: 'm-gambling',
      methodId: 'met-decanter-thread',
      timeId: 't-2214',
      crucialEvidenceIds: ['clue-06-burnt-will', 'clue-09-pawn-receipt'],
      falseAlibiSuspectId: 'suspect-01-julian',
      detectiveTheory: 'Arman poisoned Mahmudul over gambling debts.'
    };
    const julianEval = evaluateFinalDeduction(case001, julianAnswers, state);
    expect(julianEval.isCulpritCorrect).toBe(false);
    expect(julianEval.performanceGrade).not.toBe('S+');
    const julianFeedback = julianEval.feedbackNotes.map(n => getLocalized(n, 'en')).join(' ');
    expect(julianFeedback).toContain('Arman Haque Chowdhury');

    // Accusing Rashed Karim
    const marcusAnswers: FinalReportAnswers = {
      culpritId: 'suspect-05-marcus',
      motiveId: 'm-codex',
      methodId: 'met-decanter-thread',
      timeId: 't-2214',
      crucialEvidenceIds: ['clue-05-window-latch'],
      falseAlibiSuspectId: 'suspect-05-marcus',
      detectiveTheory: 'Rashed killed Mahmudul for the codex.'
    };
    const marcusEval = evaluateFinalDeduction(case001, marcusAnswers, state);
    expect(marcusEval.isCulpritCorrect).toBe(false);
    const marcusFeedback = marcusEval.feedbackNotes.map(n => getLocalized(n, 'en')).join(' ');
    expect(marcusFeedback).toContain('Rashed Karim');
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
    expect(evalResult.pointsAwarded).toBeGreaterThan(0);
  });

  it('Verifies CASE_AVAILABILITY restricts Case 002 and Case 003 while keeping Case 001 playable', () => {
    expect(CASE_AVAILABILITY['case-001']).toBe('AVAILABLE');
    expect(CASE_AVAILABILITY['case-002']).toBe('COMING_SOON');
    expect(CASE_AVAILABILITY['case-003']).toBe('COMING_SOON');
  });

  it('Verifies official Bangladeshi names for all Case 001 suspects and victim', () => {
    // Victim
    expect(getLocalized(case001.victimOrSubject, 'en')).toContain('Mahmudul Haque Chowdhury');
    expect(getLocalized(case001.victimOrSubject, 'bn')).toContain('মাহমুদুল হক চৌধুরী');

    // Suspects
    const julian = case001.suspects.find(s => s.id === 'suspect-01-julian');
    expect(getLocalized(julian!.name, 'en')).toBe('Arman Haque Chowdhury');
    expect(getLocalized(julian!.name, 'bn')).toBe('আরমান হক চৌধুরী');

    const evelyn = case001.suspects.find(s => s.id === 'suspect-02-evelyn');
    expect(getLocalized(evelyn!.name, 'en')).toBe('Nawrin Sultana');
    expect(getLocalized(evelyn!.name, 'bn')).toBe('নওরীন সুলতানা');

    const finch = case001.suspects.find(s => s.id === 'suspect-03-finch');
    expect(getLocalized(finch!.name, 'en')).toBe('Dr. Farhan Rahman');
    expect(getLocalized(finch!.name, 'bn')).toBe('ডা. ফারহান রহমান');

    const beatrice = case001.suspects.find(s => s.id === 'suspect-04-beatrice');
    expect(getLocalized(beatrice!.name, 'en')).toBe('Shahana Begum');
    expect(getLocalized(beatrice!.name, 'bn')).toBe('শাহানা বেগম');

    const marcus = case001.suspects.find(s => s.id === 'suspect-05-marcus');
    expect(getLocalized(marcus!.name, 'en')).toBe('Rashed Karim');
    expect(getLocalized(marcus!.name, 'bn')).toBe('রাশেদ করিম');
  });

  it('Verifies natural Bangladeshi names for Case 002 and Case 003 characters', () => {
    // Case 002
    expect(getLocalized(case002.victimOrSubject, 'en')).toContain('Farzana Haque');
    expect(getLocalized(case002.victimOrSubject, 'bn')).toContain('ফারজানা হক');

    const navarro = case002.suspects.find(s => s.id === 'suspect-02-navarro');
    expect(getLocalized(navarro!.name, 'en')).toContain('Rayhan Kabir');
    expect(getLocalized(navarro!.name, 'bn')).toContain('রায়হান কবীর');

    const sterling = case002.suspects.find(s => s.id === 'suspect-02-sterling');
    expect(getLocalized(sterling!.name, 'en')).toBe('Tanvir Shikder');
    expect(getLocalized(sterling!.name, 'bn')).toBe('তানভীর শিকদার');

    const maya = case002.suspects.find(s => s.id === 'suspect-02-maya');
    expect(getLocalized(maya!.name, 'en')).toBe('Mousumi Das');
    expect(getLocalized(maya!.name, 'bn')).toBe('মৌসুমী দাস');

    const kozlov = case002.suspects.find(s => s.id === 'suspect-02-kozlov');
    expect(getLocalized(kozlov!.name, 'en')).toBe('Bakhtiar Alam');
    expect(getLocalized(kozlov!.name, 'bn')).toBe('বখতিয়ার আলম');

    const isaac = case002.suspects.find(s => s.id === 'suspect-02-isaac');
    expect(getLocalized(isaac!.name, 'en')).toBe('Iqbal Hossain');
    expect(getLocalized(isaac!.name, 'bn')).toBe('ইকবাল হোসেন');

    // Case 003
    const rossi = case003.suspects.find(s => s.id === 'suspect-03-rossi');
    expect(getLocalized(rossi!.name, 'en')).toBe('Dr. Humaira Rashid');
    expect(getLocalized(rossi!.name, 'bn')).toBe('ডা. হুমায়রা রশীদ');

    const cross = case003.suspects.find(s => s.id === 'suspect-03-cross');
    expect(getLocalized(cross!.name, 'en')).toBe('Nasir Uddin');
    expect(getLocalized(cross!.name, 'bn')).toBe('নাসির উদ্দিন');

    const chloe = case003.suspects.find(s => s.id === 'suspect-03-chloe');
    expect(getLocalized(chloe!.name, 'en')).toBe('Sharmin Jahan');
    expect(getLocalized(chloe!.name, 'bn')).toBe('শারমীন জাহান');

    const tariq = case003.suspects.find(s => s.id === 'suspect-03-tariq');
    expect(getLocalized(tariq!.name, 'en')).toBe('Tareq Al-Mamun');
    expect(getLocalized(tariq!.name, 'bn')).toBe('তারেক আল-মামুন');

    const simon = case003.suspects.find(s => s.id === 'suspect-03-simon');
    expect(getLocalized(simon!.name, 'en')).toBe('Shafiqul Islam');
    expect(getLocalized(simon!.name, 'bn')).toBe('শফিকুল ইসলাম');
  });
});
