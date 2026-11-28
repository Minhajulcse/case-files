import { describe, expect, it } from 'vitest';
import { ALL_CASES } from '../data/cases';
import { getLocalized, type HotspotItem, type UserConnection } from '../types/game';
import { createInitialCaseState } from './storage';
import { hitTest, vertices } from './hotspots';
import { evaluateFinalDeduction, reviewInquiries } from './deductionEngine';

const connections = (file: typeof ALL_CASES[number]): UserConnection[] =>
  file.deductions.map(d => {
    const link = file.canonConnections.find(c => c.id === d.connectionId)!;
    return { id: link.id, sourceId: link.targetId, targetId: link.sourceId, createdAt: 1 };
  });

type Point = [number, number];
const side = ([x, y]: Point, [x1, y1]: Point, [x2, y2]: Point) =>
  (x1 - x) * (y2 - y) - (y1 - y) * (x2 - x);

// Vertex hits include touching edges and containment. The segment check also catches
// crossing strips where neither polygon has a vertex inside the other.
function regionsIntersect(first: HotspotItem, second: HotspotItem) {
  const a = vertices(first), b = vertices(second);
  if (a.some(([x, y]) => hitTest([second], x, y, 100, 100)) ||
      b.some(([x, y]) => hitTest([first], x, y, 100, 100))) return true;
  return a.some((p, i) => {
    const q = a[(i + 1) % a.length];
    return b.some((r, j) => {
      const s = b[(j + 1) % b.length];
      return side(p, q, r) * side(p, q, s) < 0 && side(r, s, p) * side(r, s, q) < 0;
    });
  });
}

for (const file of ALL_CASES) {
  describe(getLocalized(file.title, 'en'), () => {
    for (const plate of file.crimeScene.plates) {
      it(`keeps neighboring objects independently selectable on the ${plate} image`, () => {
        const spots = file.crimeScene.hotspots.filter(h => h.plate === plate);
        const overlaps = spots.flatMap((spot, i) => spots.slice(i + 1)
          .filter(other => regionsIntersect(spot, other)).map(other => [spot.id, other.id]));
        expect(overlaps).toEqual([]);
      });
    }

    for (const spot of file.crimeScene.hotspots) {
      it(`selects ${spot.id} directly on its image at phone, landscape and tablet sizes`, () => {
        const regions = file.crimeScene.hotspots.filter(h => h.plate === spot.plate);
        expect(file.crimeScene.plates).toContain(spot.plate);
        expect(file.evidence.filter(e => e.id === spot.revealsEvidenceId)).toHaveLength(1);
        for (const point of vertices(spot)) for (const axis of point) {
          expect(axis).toBeGreaterThanOrEqual(0);
          expect(axis).toBeLessThanOrEqual(100);
        }
        const ratio = spot.plate === 'study' ? 16 / 9 : 5 / 3;
        for (const viewport of [288, 328, 640, 812, 1024]) for (const zoom of [1, 1.25, 1.5, 2]) {
          const w = viewport * zoom, h = w / ratio;
          const bounds = { left: 14 - (w - viewport) / 2, top: 92 - h / 4 };
          const clientX = bounds.left + spot.x * w / 100, clientY = bounds.top + spot.y * h / 100;
          for (const slop of [0, 13]) expect(hitTest(regions, (clientX - bounds.left) * 100 / w, (clientY - bounds.top) * 100 / h, w, h, slop)?.id).toBe(spot.id);
        }
        for (const lang of ['en', 'bn'] as const) for (const val of [spot.name, spot.description, spot.discoveryNote]) expect(getLocalized(val, lang)).toBeTruthy();
      });
    }

    it('every evidence item is reachable through a scene, interview or presentation from a blank file', () => {
      const known = new Set(file.crimeScene.hotspots.map(h => h.revealsEvidenceId));
      let previous = 0;
      while (previous !== known.size) {
        previous = known.size;
        for (const s of file.suspects) {
          for (const d of s.dialogueTree) if (d.revealsClueId && (!d.conditionClueId || known.has(d.conditionClueId))) known.add(d.revealsClueId);
          for (const r of s.evidenceReactions) if (known.has(r.evidenceId) && r.revealsClueId) known.add(r.revealsClueId);
        }
      }
      expect([...known].sort()).toEqual(file.evidence.map(e => e.id).sort());
      const ids = new Set([...known, ...file.suspects.map(s => s.id)]);
      for (const c of file.canonConnections) {
        expect(ids.has(c.sourceId)).toBe(true);
        expect(ids.has(c.targetId)).toBe(true);
      }
      for (const d of file.deductions) {
        expect(new Set(d.evidenceIds).size).toBeGreaterThanOrEqual(2);
        for (const id of [d.connectionId, ...d.alternativeConnectionIds ?? []]) {
          const pair = file.canonConnections.find(c => c.id === id)!;
          expect(d.evidenceIds).toContain(pair.sourceId);
          expect(d.evidenceIds).toContain(pair.targetId);
        }
      }
      for (const e of file.timelineEvents) expect(known.has(e.evidenceId)).toBe(true);
      expect([...file.timelineEvents].sort((a, b) => a.timeSortValue - b.timeSortValue).map(e => e.correctIndex)).toEqual(file.timelineEvents.map((_, i) => i));
    });

    it('requires corroboration, correct answers and discovered exhibits before releasing the debrief', () => {
      const s = file.solution;
      const answers = { ...s, detectiveTheory: '' };
      const state = createInitialCaseState(file.id);
      state.discoveredEvidenceIds = file.evidence.map(e => e.id);
      state.userConnections = connections(file);
      const success = evaluateFinalDeduction(file, answers, state);
      expect(success.accepted).toBe(true);
      expect(success.fullDebriefing).toEqual(s.fullCaseDebriefing);
      for (const id of s.crucialEvidenceIds) {
        const onlyOne = evaluateFinalDeduction(file, { ...answers, crucialEvidenceIds: [id, id, id] }, state);
        expect(onlyOne.accepted).toBe(false);
        expect(onlyOne.crucialEvidenceMatchedCount).toBe(1);
        expect(onlyOne.fullDebriefing).toBe('');
        const absent = { ...state, discoveredEvidenceIds: state.discoveredEvidenceIds.filter(e => e !== id) };
        expect(evaluateFinalDeduction(file, answers, absent).accepted).toBe(false);
      }
      const noLinks = { ...state, userConnections: [] };
      expect(evaluateFinalDeduction(file, answers, noLinks).accepted).toBe(false);
      for (const field of ['culpritId', 'methodId', 'motiveId', 'timeId', 'falseAlibiSuspectId']) {
        const failure = evaluateFinalDeduction(file, { ...answers, [field]: 'wrong' }, state);
        expect(failure.accepted).toBe(false);
        expect(failure.pointsAwarded).toBe(0);
        expect(failure.fullDebriefing).toBe('');
      }
      expect(evaluateFinalDeduction(file, answers, { ...state, unlockedHintLevels: [1, 2, 3] }).pointsAwarded).toBe(success.pointsAwarded - 350);
      for (const d of file.deductions) for (const id of d.alternativeConnectionIds ?? []) {
        const pair = file.canonConnections.find(c => c.id === id)!;
        expect(reviewInquiries(file, { ...state, userConnections: [{ ...pair, createdAt: 1 }] }).find(r => r.inquiry.id === d.id)?.linked).toBe(true);
      }
    });
  });
}

it('requires separate proof for the safehouse disclosure and the false platform alibi', () => {
  const file = ALL_CASES.find(c => c.id === 'case-002')!;
  const answers = { ...file.solution, detectiveTheory: '' };
  const state = createInitialCaseState(file.id);
  state.discoveredEvidenceIds = file.evidence.map(e => e.id);
  state.userConnections = connections(file);
  expect(evaluateFinalDeduction(file, answers, state).accepted).toBe(true);
  expect(evaluateFinalDeduction(file, { ...answers, culpritId: answers.falseAlibiSuspectId }, state).accepted).toBe(false);
  expect(evaluateFinalDeduction(file, { ...answers, falseAlibiSuspectId: answers.culpritId }, state).accepted).toBe(false);

  const crossing = file.canonConnections.find(c => c.id === 'c2-link-porter-alibi')!;
  state.userConnections = [{ ...crossing, createdAt: 1 }];
  const inquiries = reviewInquiries(file, state);
  expect(inquiries.filter(i => i.linked).map(i => i.inquiry.id)).toEqual(['inquiry-3']);
  expect(evaluateFinalDeduction(file, answers, state).accepted).toBe(false);
});

it('gives exact shapes priority over proximity and resolves shared edges deterministically', () => {
  const shape = (id: string, x: number, w: number): HotspotItem => ({ ...ALL_CASES[0].crimeScene.hotspots[0], id, x, y: 50, shape: { type: 'rect', width: w, height: 10 } });
  const big = shape('large', 50, 30), small = shape('small', 50, 6), next = shape('next', 70, 10);
  expect(hitTest([small, big], 50, 50, 400, 240)?.id).toBe('small');
  expect(hitTest([big, small], 50, 50, 400, 240)?.id).toBe('small');
  expect(hitTest([big, next], 65, 50, 400, 240)?.id).toBe('next');
  expect(hitTest([big, next], 64.9, 50, 400, 240, 13)?.id).toBe('large');
  expect(hitTest([shape('a', 40, 10), shape('b', 52, 10)], 46, 50, 400, 240, 13)).toBeUndefined();
  expect(hitTest([big], 50, 58, 400, 240, 13)?.id).toBe('large');
  expect(hitTest([big], 50, 58, 400, 240)).toBeUndefined();
  expect(hitTest([big], 0, 0, 400, 240, 13)).toBeUndefined();
});
