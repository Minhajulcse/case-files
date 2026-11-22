import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
  DetectiveProfile,
  ActiveCaseState,
  CaseData,
  FinalReportAnswers,
  FinalReportEvaluation,
  CanonConnection,
  UserConnection,
  Language,
  LocalizableText,
  getLocalized
} from '../types/game';
import { ALL_CASES, getCaseById } from '../data/cases';
import {
  loadProfile,
  saveProfile,
  loadCaseState,
  saveCaseState,
  clearCaseState,
  clearAllGameData,
  calculateDetectiveRank,
  getLastActiveCaseId
} from '../utils/storage';
import { evaluateFinalDeduction } from '../utils/deductionEngine';
import { sound } from '../utils/audio';
import { translations, TranslationDict, getTranslation, formatNumber } from '../i18n';

export type MainView =
  | 'menu'
  | 'cases'
  | 'investigation'
  | 'archive'
  | 'profile'
  | 'settings'
  | 'credits';

export type InvestigationTab =
  | 'scene'
  | 'evidence'
  | 'interrogation'
  | 'board'
  | 'timeline'
  | 'report';

const LANG_STORAGE_KEY = 'case_files_language_pref';

interface GameContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDict) => string;
  formatNum: (val: number | string) => string;
  getLoc: (val: LocalizableText | undefined) => string;
  profile: DetectiveProfile;
  activeCase: CaseData | null;
  caseState: ActiveCaseState | null;
  currentView: MainView;
  investigationTab: InvestigationTab;
  allCases: CaseData[];
  lastActiveCaseId: string | null;
  selectedClueForInspection: string | null;
  // Navigation
  setCurrentView: (view: MainView) => void;
  setInvestigationTab: (tab: InvestigationTab) => void;
  startCase: (caseId: string) => void;
  resumeLastCase: () => void;
  setSelectedClueForInspection: (clueId: string | null) => void;
  // Case Actions
  discoverClue: (clueId: string, hotspotId?: string) => void;
  examineHotspot: (hotspotId: string) => void;
  toggleMarkImportant: (clueId: string) => void;
  askDialogue: (suspectId: string, dialogueId: string) => void;
  presentClueToSuspect: (suspectId: string, clueId: string) => { reaction: string; lieExposed: boolean };
  addUserConnection: (sourceId: string, targetId: string, note?: string) => { isCanon: boolean; canon?: CanonConnection };
  removeUserConnection: (connectionId: string) => void;
  updateTimelineOrder: (newOrder: string[]) => void;
  unlockHint: (level: 1 | 2 | 3) => void;
  updateCaseNotes: (notes: string) => void;
  submitFinalReport: (answers: FinalReportAnswers) => FinalReportEvaluation;
  resetCurrentCase: () => void;
  resetEntireGame: () => void;
  updateProfileName: (name: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === 'bn' || stored === 'en') return stored;
      return 'en';
    } catch {
      return 'en';
    }
  });

  const [profile, setProfile] = useState<DetectiveProfile>(() => loadProfile());
  const [activeCase, setActiveCase] = useState<CaseData | null>(null);
  const [caseState, setCaseState] = useState<ActiveCaseState | null>(null);
  const [currentView, setCurrentView] = useState<MainView>('menu');
  const [investigationTab, setInvestigationTab] = useState<InvestigationTab>('scene');
  const [lastActiveCaseId, setLastActiveCaseId] = useState<string | null>(() => getLastActiveCaseId());
  const [selectedClueForInspection, setSelectedClueForInspection] = useState<string | null>(null);

  // Sync language to html document tag and localStorage
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch (e) {
      console.error('Failed to save language preference', e);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: keyof TranslationDict): string => {
    return getTranslation(key, language);
  }, [language]);

  const formatNum = useCallback((val: number | string): string => {
    return formatNumber(val, language);
  }, [language]);

  const getLoc = useCallback((val: LocalizableText | undefined): string => {
    return getLocalized(val, language);
  }, [language]);

  // Sync profile to localStorage
  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  // Sync caseState to localStorage
  useEffect(() => {
    if (caseState && activeCase) {
      saveCaseState(caseState);
      setLastActiveCaseId(caseState.caseId);
    }
  }, [caseState, activeCase]);

  // Start or switch to a case
  const startCase = useCallback((caseId: string) => {
    const foundCase = getCaseById(caseId);
    if (!foundCase) return;

    const initialTimelineIds = [...foundCase.timelineEvents]
      .sort(() => Math.random() - 0.5)
      .map(e => e.id);

    const loadedState = loadCaseState(caseId, initialTimelineIds);

    if (loadedState.discoveredEvidenceIds.length === 0) {
      const initialClues = foundCase.evidence.slice(0, 2).map(e => e.id);
      loadedState.discoveredEvidenceIds = initialClues;
    }

    setActiveCase(foundCase);
    setCaseState(loadedState);
    setCurrentView('investigation');
    setInvestigationTab('scene');
    sound.playPaper();
  }, []);

  const resumeLastCase = useCallback(() => {
    const targetId = lastActiveCaseId || 'case-001';
    startCase(targetId);
  }, [lastActiveCaseId, startCase]);

  const discoverClue = useCallback((clueId: string, hotspotId?: string) => {
    if (!caseState || !activeCase) return;

    if (caseState.discoveredEvidenceIds.includes(clueId)) {
      sound.playPaper();
      return;
    }

    sound.playClueFound();
    const updatedDiscovered = [...caseState.discoveredEvidenceIds, clueId];
    const updatedExamined = hotspotId && !caseState.examinedHotspotIds.includes(hotspotId)
      ? [...caseState.examinedHotspotIds, hotspotId]
      : caseState.examinedHotspotIds;

    const clueObj = activeCase.evidence.find(e => e.id === clueId);
    const isOptional = clueObj?.isOptional || clueObj?.isHidden;

    setCaseState(prev => prev ? {
      ...prev,
      discoveredEvidenceIds: updatedDiscovered,
      examinedHotspotIds: updatedExamined
    } : null);

    if (isOptional) {
      setProfile(prev => ({
        ...prev,
        totalOptionalCluesFound: prev.totalOptionalCluesFound + 1,
        totalPoints: prev.totalPoints + 25
      }));
    }
  }, [caseState, activeCase]);

  const examineHotspot = useCallback((hotspotId: string) => {
    if (!caseState || !activeCase) return;
    if (!caseState.examinedHotspotIds.includes(hotspotId)) {
      setCaseState(prev => prev ? {
        ...prev,
        examinedHotspotIds: [...prev.examinedHotspotIds, hotspotId]
      } : null);
    }
  }, [caseState, activeCase]);

  const toggleMarkImportant = useCallback((clueId: string) => {
    if (!caseState) return;
    sound.playPin();
    setCaseState(prev => {
      if (!prev) return null;
      const isMarked = prev.markedImportantClueIds.includes(clueId);
      return {
        ...prev,
        markedImportantClueIds: isMarked
          ? prev.markedImportantClueIds.filter(id => id !== clueId)
          : [...prev.markedImportantClueIds, clueId]
      };
    });
  }, [caseState]);

  const askDialogue = useCallback((suspectId: string, dialogueId: string) => {
    if (!caseState || !activeCase) return;
    sound.playTypewriter();

    const suspect = activeCase.suspects.find(s => s.id === suspectId);
    const dialogue = suspect?.dialogueTree.find(d => d.id === dialogueId);

    setCaseState(prev => {
      if (!prev) return null;
      const currentAsked = prev.askedDialogueIds[suspectId] || [];
      if (currentAsked.includes(dialogueId)) return prev;

      return {
        ...prev,
        askedDialogueIds: {
          ...prev.askedDialogueIds,
          [suspectId]: [...currentAsked, dialogueId]
        }
      };
    });

    if (dialogue?.revealsClueId && !caseState.discoveredEvidenceIds.includes(dialogue.revealsClueId)) {
      discoverClue(dialogue.revealsClueId);
    }
  }, [caseState, activeCase, discoverClue]);

  const presentClueToSuspect = useCallback((suspectId: string, clueId: string) => {
    if (!caseState || !activeCase) return { reaction: 'No response.', lieExposed: false };

    const suspect = activeCase.suspects.find(s => s.id === suspectId);
    const reactionObj = suspect?.evidenceReactions.find(r => r.evidenceId === clueId);

    const existingPresented = caseState.presentedClueIds[suspectId] || [];
    const updatedPresented = existingPresented.includes(clueId)
      ? existingPresented
      : [...existingPresented, clueId];

    const currentStress = caseState.suspectStressLevels[suspectId] || 10;
    const addedStress = reactionObj ? reactionObj.stressIncrease : 5;
    const newStress = Math.min(100, currentStress + addedStress);

    setCaseState(prev => prev ? {
      ...prev,
      presentedClueIds: {
        ...prev.presentedClueIds,
        [suspectId]: updatedPresented
      },
      suspectStressLevels: {
        ...prev.suspectStressLevels,
        [suspectId]: newStress
      }
    } : null);

    if (reactionObj?.exposesLie) {
      sound.playDeductionSuccess();
      setProfile(prev => ({
        ...prev,
        totalContradictionsFound: prev.totalContradictionsFound + 1,
        totalPoints: prev.totalPoints + 50
      }));
    } else {
      sound.playTypewriter();
    }

    if (reactionObj?.revealsClueId && !caseState.discoveredEvidenceIds.includes(reactionObj.revealsClueId)) {
      discoverClue(reactionObj.revealsClueId);
    }

    const reactionText = reactionObj
      ? getLocalized(reactionObj.reactionText, language)
      : language === 'bn'
      ? `${getLocalized(suspect?.name, 'bn')} কোনো মন্তব্য না করে স্বাভাবিকভাবে তাকিয়ে রইল।`
      : `${getLocalized(suspect?.name, 'en')} looks at the evidence with mild disinterest and offers no new comment.`;

    return {
      reaction: reactionText,
      lieExposed: !!reactionObj?.exposesLie
    };
  }, [caseState, activeCase, discoverClue, language]);

  const addUserConnection = useCallback((sourceId: string, targetId: string, note?: string) => {
    if (!caseState || !activeCase) return { isCanon: false };

    const exists = caseState.userConnections.some(
      c => (c.sourceId === sourceId && c.targetId === targetId) ||
           (c.sourceId === targetId && c.targetId === sourceId)
    );
    if (exists) {
      sound.playContradictionBuzz();
      return { isCanon: false };
    }

    const canon = activeCase.canonConnections.find(
      c => (c.sourceId === sourceId && c.targetId === targetId) ||
           (c.sourceId === targetId && c.targetId === sourceId)
    );

    const newConn: UserConnection = {
      id: `conn-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      sourceId,
      targetId,
      note: note || (canon ? getLocalized(canon.label, language) : undefined),
      createdAt: Date.now()
    };

    setCaseState(prev => prev ? {
      ...prev,
      userConnections: [...prev.userConnections, newConn]
    } : null);

    if (canon) {
      sound.playDeductionSuccess();
      setProfile(prev => ({
        ...prev,
        totalPoints: prev.totalPoints + canon.bonusPoints
      }));
      return { isCanon: true, canon };
    } else {
      sound.playPin();
      return { isCanon: false };
    }
  }, [caseState, activeCase, language]);

  const removeUserConnection = useCallback((connectionId: string) => {
    if (!caseState) return;
    sound.playPaper();
    setCaseState(prev => prev ? {
      ...prev,
      userConnections: prev.userConnections.filter(c => c.id !== connectionId)
    } : null);
  }, [caseState]);

  const updateTimelineOrder = useCallback((newOrder: string[]) => {
    if (!caseState) return;
    setCaseState(prev => prev ? {
      ...prev,
      timelineOrder: newOrder
    } : null);
  }, [caseState]);

  const unlockHint = useCallback((level: 1 | 2 | 3) => {
    if (!caseState || !activeCase) return;
    if (caseState.unlockedHintLevels.includes(level)) return;

    const hint = activeCase.hints.find(h => h.level === level);
    if (!hint) return;

    sound.playTypewriter();
    setCaseState(prev => prev ? {
      ...prev,
      unlockedHintLevels: [...prev.unlockedHintLevels, level]
    } : null);

    setProfile(prev => ({
      ...prev,
      totalHintsUsed: prev.totalHintsUsed + 1
    }));
  }, [caseState, activeCase]);

  const updateCaseNotes = useCallback((notes: string) => {
    if (!caseState) return;
    setCaseState(prev => prev ? {
      ...prev,
      caseNotes: notes
    } : null);
  }, [caseState]);

  const submitFinalReport = useCallback((answers: FinalReportAnswers): FinalReportEvaluation => {
    if (!caseState || !activeCase) {
      throw new Error('No active case loaded');
    }

    const evaluation = evaluateFinalDeduction(activeCase, answers, caseState);

    const isFirstTimeCompletion = !profile.completedCaseIds.includes(activeCase.id);
    const existingHighScore = profile.caseHighScores[activeCase.id] || 0;
    const newHighScore = Math.max(existingHighScore, evaluation.pointsAwarded);

    const updatedCompleted = isFirstTimeCompletion
      ? [...profile.completedCaseIds, activeCase.id]
      : profile.completedCaseIds;

    const updatedTotalPoints = profile.totalPoints + (isFirstTimeCompletion ? evaluation.pointsAwarded : Math.max(0, evaluation.pointsAwarded - existingHighScore));
    const newRank = calculateDetectiveRank(updatedTotalPoints, updatedCompleted.length);

    const newAchievements = [...profile.achievements];
    if (evaluation.accuracyScore === 100 && !newAchievements.includes('Master Deductive Mind')) {
      newAchievements.push('Master Deductive Mind');
    }
    if (caseState.unlockedHintLevels.length === 0 && !newAchievements.includes('Independent Inquirer (No Hints)')) {
      newAchievements.push('Independent Inquirer (No Hints)');
    }
    if (updatedCompleted.length >= 3 && !newAchievements.includes('Trilogy of Justice')) {
      newAchievements.push('Trilogy of Justice');
    }

    setProfile(prev => ({
      ...prev,
      totalPoints: updatedTotalPoints,
      completedCaseIds: updatedCompleted,
      caseHighScores: {
        ...prev.caseHighScores,
        [activeCase.id]: newHighScore
      },
      rank: newRank,
      achievements: newAchievements
    }));

    setCaseState(prev => prev ? {
      ...prev,
      isCompleted: true,
      evaluation,
      completedAt: Date.now()
    } : null);

    if (evaluation.accuracyScore >= 80) {
      sound.playStamp();
      sound.playDeductionSuccess();
    } else {
      sound.playStamp();
    }

    return evaluation;
  }, [caseState, activeCase, profile]);

  const resetCurrentCase = useCallback(() => {
    if (!activeCase) return;
    clearCaseState(activeCase.id);
    startCase(activeCase.id);
  }, [activeCase, startCase]);

  const resetEntireGame = useCallback(() => {
    clearAllGameData();
    window.location.reload();
  }, []);

  const updateProfileName = useCallback((name: string) => {
    setProfile(prev => ({ ...prev, name: name.trim() || 'Detective' }));
  }, []);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    formatNum,
    getLoc,
    profile,
    activeCase,
    caseState,
    currentView,
    investigationTab,
    allCases: ALL_CASES,
    lastActiveCaseId,
    selectedClueForInspection,
    setCurrentView,
    setInvestigationTab,
    startCase,
    resumeLastCase,
    setSelectedClueForInspection,
    discoverClue,
    examineHotspot,
    toggleMarkImportant,
    askDialogue,
    presentClueToSuspect,
    addUserConnection,
    removeUserConnection,
    updateTimelineOrder,
    unlockHint,
    updateCaseNotes,
    submitFinalReport,
    resetCurrentCase,
    resetEntireGame,
    updateProfileName
  }), [
    language,
    setLanguage,
    t,
    formatNum,
    getLoc,
    profile,
    activeCase,
    caseState,
    currentView,
    investigationTab,
    lastActiveCaseId,
    selectedClueForInspection,
    startCase,
    resumeLastCase,
    discoverClue,
    examineHotspot,
    toggleMarkImportant,
    askDialogue,
    presentClueToSuspect,
    addUserConnection,
    removeUserConnection,
    updateTimelineOrder,
    unlockHint,
    updateCaseNotes,
    submitFinalReport,
    resetCurrentCase,
    resetEntireGame,
    updateProfileName
  ]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
