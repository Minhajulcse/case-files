// Core Game Types for CASE FILES

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
  name: string;
  category: EvidenceCategory;
  description: string;
  discoveryLocation: string;
  relevance: string;
  relatedSuspectIds: string[];
  isHidden?: boolean;
  isCrucial?: boolean;
  isOptional?: boolean;
  forensicReport?: {
    labSummary: string;
    chemicalOrBiologicalTrace?: string;
    microscopicDetails?: string;
  };
  details: string[];
  iconKey: string;
  dateDiscovered?: string;
}

export interface HotspotItem {
  id: string;
  name: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  radius?: number;
  description: string;
  detailViewImage?: string;
  revealsEvidenceId: string;
  isHidden?: boolean;
  requiresClueIdToNotice?: string;
  discoveryNote: string;
  iconType: 'magnifier' | 'footprint' | 'document' | 'key' | 'flask' | 'camera' | 'safe';
}

export interface DialogueOption {
  id: string;
  prompt: string;
  response: string;
  reactionMood?: 'calm' | 'nervous' | 'hostile' | 'defensive' | 'surprised';
  revealsClueId?: string;
  revealsContradictionId?: string;
  contradictionAlert?: string;
  conditionClueId?: string; // only shows if player has discovered this clue
}

export interface EvidenceReaction {
  evidenceId: string;
  reactionText: string;
  revealsClueId?: string;
  stressIncrease: number; // 0 to 100
  unlocksDialogueIds?: string[];
  exposesLie?: boolean;
}

export interface Suspect {
  id: string;
  name: string;
  alias?: string;
  role: string;
  age: number;
  occupation: string;
  relationshipToVictim: string;
  motive: string;
  alibi: string;
  personality: string;
  secrets: string;
  avatarSeed: string; // Used for unique portrait generation
  avatarColor: string;
  dialogueTree: DialogueOption[];
  evidenceReactions: EvidenceReaction[];
}

export interface EvidenceBoardNode {
  id: string;
  type: 'evidence' | 'suspect';
  targetId: string; // evidenceId or suspectId
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
  label: string;
  deductionNotes: string;
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
  timeSortValue: number; // 24-hr minutes e.g. 21:30 = 1290
  title: string;
  description: string;
  source: string; // e.g. "CCTV Cam #4", "Housekeeper Statement", "Smart Watch Log"
  verifiedLocation: string;
  relatedSuspectId?: string;
  correctIndex: number; // 0-based target index
}

export interface CaseHint {
  level: 1 | 2 | 3;
  cost: number;
  title: string;
  hintText: string;
}

export interface CaseSolution {
  culpritId: string;
  culpritName: string;
  motiveDescription: string;
  methodDescription: string;
  approximateTime: string;
  crucialEvidenceIds: string[];
  falseAlibiSuspectId: string;
  fullCaseDebriefing: string;
  options: {
    motives: { id: string; label: string }[];
    methods: { id: string; label: string }[];
    times: { id: string; label: string }[];
  };
}

export interface CaseData {
  id: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  badge: 'MURDER' | 'ABDUCTION' | 'GRAND HEIST';
  difficulty: 'Standard' | 'Hard' | 'Master';
  estimatedTime: string;
  victimOrSubject: string;
  incidentDate: string;
  location: string;
  synopsis: string;
  briefing: {
    chiefMemo: string;
    initialStatus: string;
    keyObjectives: string[];
  };
  crimeScene: {
    roomTitle: string;
    roomDescription: string;
    sceneTheme: 'victorian_study' | 'motel_safehouse' | 'museum_vault';
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
  accuracyScore: number; // 0 - 100%
  pointsAwarded: number;
  performanceGrade: 'S+' | 'A' | 'B' | 'C' | 'F';
  feedbackNotes: string[];
  fullDebriefing: string;
}

export interface ActiveCaseState {
  caseId: string;
  discoveredEvidenceIds: string[];
  examinedHotspotIds: string[];
  markedImportantClueIds: string[];
  askedDialogueIds: Record<string, string[]>; // suspectId -> dialogueId[]
  presentedClueIds: Record<string, string[]>; // suspectId -> clueId[]
  suspectStressLevels: Record<string, number>; // suspectId -> 0-100
  userConnections: UserConnection[];
  timelineOrder: string[]; // eventIds in current proposed order
  unlockedHintLevels: number[];
  revealedHiddenHotspots: string[];
  caseNotes: string;
  isCompleted: boolean;
  evaluation?: FinalReportEvaluation;
  startedAt: number;
  completedAt?: number;
}
