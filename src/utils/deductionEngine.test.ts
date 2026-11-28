import { describe, it, expect } from 'vitest';
import { evaluateFinalDeduction } from './deductionEngine';
import { case001 } from '../data/cases/case001';
import { case002 } from '../data/cases/case002';
import { case003 } from '../data/cases/case003';
import { createInitialCaseState, calculateDetectiveRank } from './storage';
import { FinalReportAnswers, getLocalized } from '../types/game';
import { formatNumber, getLocalizedRank } from '../i18n';

describe('Detective Investigation Game Logic Tests', () => {
  it('Evaluates Case 001 (The Last Alibi) with 100% accuracy for canonical deduction', () => {
    const state = createInitialCaseState('case-001');
    state.discoveredEvidenceIds = case001.evidence.map(e => e.id);
    state.userConnections = case001.canonConnections.map(link=>({ ...link, createdAt: 1 }));
    
    const answers: FinalReportAnswers = {
      culpritId: 'suspect-02-evelyn',
      motiveId: 'm-embezzle',
      methodId: 'met-decanter-thread',
      timeId: 't-2214',
      crucialEvidenceIds: [
        'clue-01-brandy-snifter',
        'clue-02-audited-ledger',
        'clue-03-stopped-clock',
        'clue-04-poisoned-decanter',
        'clue-05-window-latch',
        'clue-07-nylon-thread',
        'clue-08-torn-envelope',
        'clue-10-handwriting-sample',
        'clue-11-tray-handover',
        'case-001-pulse-strip'
      ],
      falseAlibiSuspectId: 'suspect-02-evelyn',
      detectiveTheory: 'Evelyn poisoned Arthur to prevent disclosure of $450k embezzlement and rigged the window with thread.'
    };

    const evaluation = evaluateFinalDeduction(case001, answers, state);

    expect(evaluation.accepted).toBe(true);
    expect(evaluation.isCulpritCorrect).toBe(true);
    expect(evaluation.isMotiveCorrect).toBe(true);
    expect(evaluation.isMethodCorrect).toBe(true);
    expect(evaluation.isTimeCorrect).toBe(true);
    expect(evaluation.isFalseAlibiCorrect).toBe(true);
    expect(evaluation.accuracyScore).toBe(100);
    expect(evaluation.performanceGrade).toBe('S+');
  });

  it('Evaluates Case 002 (The Missing Witness) canonical deduction', () => {
    const state = createInitialCaseState('case-002');
    state.discoveredEvidenceIds = case002.evidence.map(e => e.id);
    state.userConnections = case002.canonConnections.map(link=>({ ...link, createdAt: 1 }));

    const answers: FinalReportAnswers = {
      culpritId: 'suspect-02-navarro',
      motiveId: 'm-syndicate-bribe',
      methodId: 'met-staged-escape',
      timeId: 't-2320',
      crucialEvidenceIds: [
        'clue-02-forced-door',
        'clue-02-staged-blood',
        'clue-02-burner-phone',
        'clue-02-vent-grate',
        'clue-02-torn-ticket',
        'clue-02-tunnel-footprints',
        'case-002-gate-strip',
        'case-002-parcel-counterfoil',
        'clue-02-navarro-deposit',
        'clue-02-escape-plan-memo'
      ],
      falseAlibiSuspectId: 'suspect-02-isaac',
      detectiveTheory: 'Navarro betrayed the safehouse. Clara staged her kidnapping and fled through the steam tunnel.'
    };

    const evaluation = evaluateFinalDeduction(case002, answers, state);

    expect(evaluation.accepted).toBe(true);
    expect(evaluation.isCulpritCorrect).toBe(true);
    expect(evaluation.isMotiveCorrect).toBe(true);
    expect(evaluation.isMethodCorrect).toBe(true);
    expect(evaluation.isTimeCorrect).toBe(true);
    expect(evaluation.accuracyScore).toBe(100);
  });

  it('Evaluates Case 003 (The Museum Heist) canonical deduction', () => {
    const state = createInitialCaseState('case-003');
    state.discoveredEvidenceIds = case003.evidence.map(e => e.id);
    state.userConnections = case003.canonConnections.map(link=>({ ...link, createdAt: 1 }));

    const answers: FinalReportAnswers = {
      culpritId: 'suspect-03-rossi',
      motiveId: 'm-rossi-debt',
      methodId: 'met-rossi-swap',
      timeId: 't-1800',
      crucialEvidenceIds: [
        'clue-03-cracked-scarf',
        'clue-03-emp-capacitor',
        'clue-03-vault-access-logs',
        'clue-03-rossi-invoice',
        'clue-03-lead-box',
        'clue-03-janitor-testimony'
      ],
      falseAlibiSuspectId: 'suspect-03-rossi',
      detectiveTheory: 'Rossi swapped the scarab with a Florence replica at 18:00 and used an EMP capacitor to stage the 02:15 blackout.'
    };

    const evaluation = evaluateFinalDeduction(case003, answers, state);

    expect(evaluation.accepted).toBe(true);
    expect(evaluation.isCulpritCorrect).toBe(true);
    expect(evaluation.isMotiveCorrect).toBe(true);
    expect(evaluation.isMethodCorrect).toBe(true);
    expect(evaluation.accuracyScore).toBe(100);
  });

  it('Correctly calculates detective rank progression', () => {
    expect(calculateDetectiveRank(0, 0)).toBe('Rookie Detective');
    expect(calculateDetectiveRank(400, 1)).toBe('Junior Investigator');
    expect(calculateDetectiveRank(900, 1)).toBe('Field Detective');
    expect(calculateDetectiveRank(1600, 2)).toBe('Senior Detective');
    expect(calculateDetectiveRank(2500, 2)).toBe('Master Detective');
    expect(calculateDetectiveRank(3600, 3)).toBe('Legendary Investigator');
  });

  it('Ensures all 3 cases have at least 5 suspects, discoverable clues, and canon contradictions', () => {
    [case001, case002, case003].forEach(c => {
      expect(c.suspects.length).toBeGreaterThanOrEqual(5);
      expect(c.evidence.length).toBeGreaterThanOrEqual(7);
      expect(c.canonConnections.length).toBeGreaterThanOrEqual(4);
      expect(c.timelineEvents.length).toBeGreaterThanOrEqual(6);
      expect(c.hints.length).toBe(3);
    });
  });

  it('Validates full bilingual English & Bangla localization integrity for all 3 cases', () => {
    [case001, case002, case003].forEach(c => {
      // Case titles and synopsis
      expect(getLocalized(c.title, 'en')).toBeTruthy();
      expect(getLocalized(c.title, 'bn')).toBeTruthy();
      expect(getLocalized(c.synopsis, 'en')).toBeTruthy();
      expect(getLocalized(c.synopsis, 'bn')).toBeTruthy();
      expect(getLocalized(c.crimeScene.roomTitle, 'bn')).toBeTruthy();

      // Suspects
      c.suspects.forEach(s => {
        expect(getLocalized(s.name, 'en')).toBeTruthy();
        expect(getLocalized(s.name, 'bn')).toBeTruthy();
        expect(getLocalized(s.alibi, 'bn')).toBeTruthy();
        expect(getLocalized(s.motive, 'bn')).toBeTruthy();

        // Dialogue trees
        s.dialogueTree.forEach(d => {
          expect(getLocalized(d.prompt, 'en')).toBeTruthy();
          expect(getLocalized(d.prompt, 'bn')).toBeTruthy();
          expect(getLocalized(d.response, 'en')).toBeTruthy();
          expect(getLocalized(d.response, 'bn')).toBeTruthy();
        });
      });

      // Evidence
      c.evidence.forEach(e => {
        expect(getLocalized(e.name, 'en')).toBeTruthy();
        expect(getLocalized(e.name, 'bn')).toBeTruthy();
        expect(getLocalized(e.description, 'bn')).toBeTruthy();
        expect(getLocalized(e.relevance, 'bn')).toBeTruthy();
      });

      // Timeline
      c.timelineEvents.forEach(t => {
        expect(getLocalized(t.title, 'en')).toBeTruthy();
        expect(getLocalized(t.title, 'bn')).toBeTruthy();
        expect(getLocalized(t.description, 'bn')).toBeTruthy();
      });
    });
  });

  it('Formats numerals correctly for English and Bengali', () => {
    expect(formatNumber(12345, 'en')).toBe('12345');
    expect(formatNumber(12345, 'bn')).toBe('১২৩৪৫');
    expect(formatNumber(0, 'bn')).toBe('০');
    expect(formatNumber('Case 001', 'bn')).toBe('Case ০০১');
  });

  it('Localizes detective ranks accurately in both languages', () => {
    expect(getLocalizedRank('Rookie Detective', 'en')).toBe('Rookie Detective');
    expect(getLocalizedRank('Rookie Detective', 'bn')).toBe('নবীন গোয়েন্দা');
    expect(getLocalizedRank('Legendary Investigator', 'bn')).toBe('কিংবদন্তি তদন্তকারী');
  });
});
