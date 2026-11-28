import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, expect, it, vi } from 'vitest';
import { ALL_CASES } from '../data/cases';
import { sound } from '../utils/audio';
import * as storage from '../utils/storage';
import { GameProvider, useGame } from './GameContext';

function readNavigation() {
  let navigation!: ReturnType<typeof useGame>;
  function ReadContext() {
    navigation = useGame();
    return null;
  }
  renderToStaticMarkup(<GameProvider><ReadContext /></GameProvider>);
  return navigation;
}

afterEach(() => vi.restoreAllMocks());

const unavailableIds = [...ALL_CASES.filter(file => file.id !== 'case-001').map(file => file.id), 'case-999'];

it.each(unavailableIds)('ignores direct entry to %s and resumes Level 001 from its stale shortcut', id => {
  vi.spyOn(storage, 'getLastActiveCaseId').mockReturnValue(id);
  const load = vi.spyOn(storage, 'loadCaseState');
  const paper = vi.spyOn(sound, 'playPaper').mockImplementation(() => {});
  const navigation = readNavigation();

  expect(navigation.lastActiveCaseId).toBeNull();
  navigation.startCase(id);
  expect(load).not.toHaveBeenCalled();
  expect(paper).not.toHaveBeenCalled();

  navigation.resumeLastCase();
  expect(load).toHaveBeenCalledTimes(1);
  expect(load).toHaveBeenCalledWith('case-001', expect.any(Array));
});
