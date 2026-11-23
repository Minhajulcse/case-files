// Core Game Types for CASE FILES

export type Language = 'en' | 'bn';

export interface LocalizedString {
  en: string;
  bn: string;
}

export type LocalizableText = LocalizedString | string;

export function getLocalized(val: LocalizableText | undefined, lang: Language): string {
  if (!val) return '';
  if (typeof val === 'string') return val;
  return val[lang] || val.en || '';
}

export type DetectiveRank =
  | 'Rookie Detective'
  | 'Junior Investigator'
  | 'Field Detective'
  | 'Senior Detective'
  | 'Master Detective'
  | 'Legendary Investigator';

export interface DetectiveProfile {
  name: string;
  badgeNumber: string;
  rank: DetectiveRank;
  totalPoints: number;
  completedCaseIds: string[];
  caseHighScores: Record<string, number>;
  totalHintsUsed: number;
  totalOptionalCluesFound: number;
  totalContradictionsFound: number;
  averageAccuracy: number;
  achievements: string[];
}

export type EvidenceCategory =
  | 'Physical'
  | 'Digital'
  | 'Documents'
  | 'Witness Statements'
  | 'Photographs'
  | 'Forensic Reports';

export interface EvidenceItem {
  id: string;
  name: LocalizableText;
  category: EvidenceCategory;
  description: LocalizableText;
  discoveryLocation: LocalizableText;
  relevance: LocalizableText;
  relatedSuspectIds: string[];
  isHidden?: boolean;
  isCrucial?: boolean;
  isOptional?: boolean;
  forensicReport?: {
    labSummary: LocalizableText;
    chemicalOrBiologicalTrace?: LocalizableText;
    microscopicDetails?: LocalizableText;
  };
  details: LocalizableText[];
  iconKey: string;
  dateDiscovered?: string;
}

export interface HotspotFocusRect {
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  width: number; // percentage 0 - 100
  height: number; // percentage 0 - 100
}

export interface HotspotItem {
  id: string;
  name: LocalizableText;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  radius?: number;
  description: LocalizableText;
  detailViewImage?: string;
  revealsEvidenceId: string;
  isHidden?: boolean;
  requiresClueIdToNotice?: string;
  discoveryNote: LocalizableText;
  iconType: 'magnifier' | 'footprint' | 'document' | 'key' | 'flask' | 'camera' | 'safe';
  focusRect?: HotspotFocusRect;
}

export interface DialogueOption {
  id: string;
  prompt: LocalizableText;
  response: LocalizableText;
  reactionMood?: 'calm' | 'nervous' | 'hostile' | 'defensive' | 'surprised';
  revealsClueId?: string;
  revealsContradictionId?: string;
  contradictionAlert?: LocalizableText;
  conditionClueId?: string;
}

export interface EvidenceReaction {
  evidenceId: string;
  reactionText: LocalizableText;
  revealsClueId?: string;
  stressIncrease: number; // 0 to 100
  unlocksDialogueIds?: string[];
  exposesLie?: boolean;
}

export interface Suspect {
  id: string;
  name: LocalizableText;
  alias?: LocalizableText;
  role: LocalizableText;
  age: number;
  occupation: LocalizableText;
  relationshipToVictim: LocalizableText;
  motive: LocalizableText;
  alibi: LocalizableText;
  personality: LocalizableText;
  secrets: LocalizableText;
  avatarSeed: string;
  avatarColor: string;
  dialogueTree: DialogueOption[];
  evidenceReactions: EvidenceReaction[];
}

export interface EvidenceBoardNode {
  id: string;
  type: 'evidence' | 'suspect';
  targetId: string;
  title: string;
  subtitle: string;
  category?: EvidenceCategory;
  x: number;
  y: number;
}

export interface CanonConnection {
  id: string;
  sourceId: string;
  targetId: string;
  label: LocalizableText;
  deductionNotes: LocalizableText;
  isContradiction: boolean;
  bonusPoints: number;
}

export interface UserConnection {
  id: string;
  sourceId: string;
  targetId: string;
  note?: string;
  createdAt: number;
}

export interface TimelineEvent {
  id: string;
  timestamp: string;
  timeSortValue: number;
  title: LocalizableText;
  description: LocalizableText;
  source: LocalizableText;
  verifiedLocation: LocalizableText;
  relatedSuspectId?: string;
  correctIndex: number;
}

export interface CaseHint {
  level: 1 | 2 | 3;
  cost: number;
  title: LocalizableText;
  hintText: LocalizableText;
}

export interface CaseSolution {
  culpritId: string;
  culpritName: LocalizableText;
  motiveDescription: LocalizableText;
  methodDescription: LocalizableText;
  approximateTime: LocalizableText;
  crucialEvidenceIds: string[];
  falseAlibiSuspectId: string;
  fullCaseDebriefing: LocalizableText;
  options: {
    motives: { id: string; label: LocalizableText }[];
    methods: { id: string; label: LocalizableText }[];
    times: { id: string; label: LocalizableText }[];
  };
}

export type CaseAvailability = 'AVAILABLE' | 'COMING_SOON';

export const CASE_AVAILABILITY: Record<string, CaseAvailability> = {
  'case-001': 'AVAILABLE',
  'case-002': 'COMING_SOON',
  'case-003': 'COMING_SOON'
};

export interface CaseData {
  id: string;
  caseNumber: string;
  title: LocalizableText;
  subtitle: LocalizableText;
  badge: 'MURDER' | 'ABDUCTION' | 'GRAND HEIST';
  difficulty: 'Standard' | 'Hard' | 'Master';
  estimatedTime: string;
  victimOrSubject: LocalizableText;
  incidentDate: LocalizableText;
  location: LocalizableText;
  synopsis: LocalizableText;
  briefing: {
    chiefMemo: LocalizableText;
    initialStatus: LocalizableText;
    keyObjectives: LocalizableText[];
  };
  crimeScene: {
    roomTitle: LocalizableText;
    roomDescription: LocalizableText;
    sceneTheme: 'victorian_study' | 'motel_safehouse' | 'museum_vault';
    imageUrl?: string;
    hotspots: HotspotItem[];
  };
  suspects: Suspect[];
  evidence: EvidenceItem[];
  canonConnections: CanonConnection[];
  timelineEvents: TimelineEvent[];
  hints: CaseHint[];
  solution: CaseSolution;
}

export interface FinalReportAnswers {
  culpritId: string;
  motiveId: string;
  methodId: string;
  timeId: string;
  crucialEvidenceIds: string[];
  falseAlibiSuspectId: string;
  detectiveTheory: string;
}

export interface FinalReportEvaluation {
  isCulpritCorrect: boolean;
  isMotiveCorrect: boolean;
  isMethodCorrect: boolean;
  isTimeCorrect: boolean;
  isFalseAlibiCorrect: boolean;
  crucialEvidenceMatchedCount: number;
  totalCrucialEvidenceCount: number;
  accuracyScore: number;
  pointsAwarded: number;
  performanceGrade: 'S+' | 'A' | 'B' | 'C' | 'F';
  feedbackNotes: LocalizableText[];
  fullDebriefing: LocalizableText;
}

export interface ActiveCaseState {
  caseId: string;
  discoveredEvidenceIds: string[];
  examinedHotspotIds: string[];
  markedImportantClueIds: string[];
  askedDialogueIds: Record<string, string[]>;
  presentedClueIds: Record<string, string[]>;
  suspectStressLevels: Record<string, number>;
  userConnections: UserConnection[];
  timelineOrder: string[];
  unlockedHintLevels: number[];
  revealedHiddenHotspots: string[];
  caseNotes: string;
  isCompleted: boolean;
  evaluation?: FinalReportEvaluation;
  startedAt: number;
  completedAt?: number;
}
