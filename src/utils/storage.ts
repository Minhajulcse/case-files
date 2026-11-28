import { DetectiveProfile, ActiveCaseState, DetectiveRank } from '../types/game';
import { playerDetective } from '../data/characters';

const PROFILE_KEY = 'case_files_detective_profile_v1';
const CASE_STATE_PREFIX = 'case_files_active_case_';
const LAST_ACTIVE_CASE_KEY = 'case_files_last_active_case_id';

export const INITIAL_PROFILE: DetectiveProfile = {
  name: playerDetective.name.en,
  usesDefaultName: true,
  badgeNumber: 'SH-8409',
  rank: 'Rookie Detective',
  totalPoints: 0,
  completedCaseIds: [],
  caseHighScores: {},
  totalHintsUsed: 0,
  totalOptionalCluesFound: 0,
  totalContradictionsFound: 0,
  averageAccuracy: 0,
  achievements: ['Badge Issued']
};

export function loadProfile(): DetectiveProfile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return INITIAL_PROFILE;
    const stored = JSON.parse(raw);
    // Older profiles stored the English default directly in the editable field.
    const usesDefaultName = stored.usesDefaultName ??
      (!stored.name || stored.name === 'Detective Cole' || stored.name === 'Detective');
    return { ...INITIAL_PROFILE, ...stored, usesDefaultName };
  } catch {
    return INITIAL_PROFILE;
  }
}

export function saveProfile(profile: DetectiveProfile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save detective profile', err);
  }
}

export function createInitialCaseState(caseId: string, initialTimelineIds: string[] = []): ActiveCaseState {
  return {
    caseId,
    discoveredEvidenceIds: [],
    examinedHotspotIds: [],
    markedImportantClueIds: [],
    askedDialogueIds: {},
    presentedClueIds: {},
    suspectStressLevels: {},
    userConnections: [],
    timelineOrder: [...initialTimelineIds],
    unlockedHintLevels: [],
    revealedHiddenHotspots: [],
    caseNotes: '',
    isCompleted: false,
    startedAt: Date.now()
  };
}

export function loadCaseState(caseId: string, initialTimelineIds: string[] = []): ActiveCaseState {
  try {
    const raw = localStorage.getItem(`${CASE_STATE_PREFIX}${caseId}`);
    if (!raw) return createInitialCaseState(caseId, initialTimelineIds);
    const parsed = JSON.parse(raw);
    return {
      ...createInitialCaseState(caseId, initialTimelineIds),
      ...parsed
    };
  } catch {
    return createInitialCaseState(caseId, initialTimelineIds);
  }
}

export function saveCaseState(state: ActiveCaseState): void {
  try {
    localStorage.setItem(`${CASE_STATE_PREFIX}${state.caseId}`, JSON.stringify(state));
    localStorage.setItem(LAST_ACTIVE_CASE_KEY, state.caseId);
  } catch (err) {
    console.error('Failed to save case state', err);
  }
}

export function getLastActiveCaseId(): string | null {
  try {
    return localStorage.getItem(LAST_ACTIVE_CASE_KEY);
  } catch {
    return null;
  }
}

export function clearCaseState(caseId: string): void {
  try {
    localStorage.removeItem(`${CASE_STATE_PREFIX}${caseId}`);
  } catch (err) {
    console.error('Failed to reset case state', err);
  }
}

export function clearAllGameData(): void {
  try {
    localStorage.clear();
  } catch (err) {
    console.error('Failed to clear storage', err);
  }
}

export function calculateDetectiveRank(totalPoints: number, completedCasesCount: number): DetectiveRank {
  if (totalPoints >= 3500 && completedCasesCount >= 3) return 'Legendary Investigator';
  if (totalPoints >= 2400 && completedCasesCount >= 2) return 'Master Detective';
  if (totalPoints >= 1500) return 'Senior Detective';
  if (totalPoints >= 800) return 'Field Detective';
  if (totalPoints >= 300) return 'Junior Investigator';
  return 'Rookie Detective';
}
