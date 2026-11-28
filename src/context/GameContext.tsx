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
import { ALL_CASES, PLAYABLE_CASE_ID, getCaseById } from '../data/cases';
import { playerDetective } from '../data/characters';
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
import { evaluateFinalDeduction, sameLink, hasLinkSources } from '../utils/deductionEngine';
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
  detectiveName: string;
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
  presentClueToSuspect: (suspectId: string, clueId: string) => { reaction: LocalizableText; lieExposed: boolean };
  addUserConnection: (sourceId: string, targetId: string, note?: string) => { isCanon: boolean; canon?: CanonConnection };
  removeUserConnection: (connectionId: string) => void;
  updateTimelineOrder: (newOrder: string[]) => void;
  unlockHint: (level: 1 | 2 | 3) => void;
  updateCaseNotes: (notes: string) => void;
  draftReport: (answers: FinalReportAnswers) => void;
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
  const [lastActiveCaseId, setLastActiveCaseId] = useState<string | null>(() =>
    getLastActiveCaseId() === PLAYABLE_CASE_ID ? PLAYABLE_CASE_ID : null
  );
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
    if (caseId !== PLAYABLE_CASE_ID) return;
    const foundCase = getCaseById(caseId);
    if (!foundCase) return;

    const initialTimelineIds = [...foundCase.timelineEvents]
      .sort(() => Math.random() - 0.5)
      .map(e => e.id);

    const loadedState = loadCaseState(caseId, initialTimelineIds);

    // Earlier saves may have already played an interview that now yields a record.
    const known = new Set(loadedState.discoveredEvidenceIds);
    for (const suspect of foundCase.suspects) {
      for (const line of suspect.dialogueTree) {
        if (line.revealsClueId && loadedState.askedDialogueIds[suspect.id]?.includes(line.id)) known.add(line.revealsClueId);
      }
      for (const reaction of suspect.evidenceReactions) {
        if (reaction.revealsClueId && loadedState.presentedClueIds[suspect.id]?.includes(reaction.evidenceId)) known.add(reaction.revealsClueId);
      }
    }
    loadedState.discoveredEvidenceIds = [...known];
    if (!loadedState.rewardedConnectionIds) {
      loadedState.rewardedConnectionIds = foundCase.canonConnections.filter(c => hasLinkSources(c,loadedState.discoveredEvidenceIds) && loadedState.userConnections.some(u => sameLink(u,c))).map(c => c.id);
    }
    setSelectedClueForInspection(null);
    setActiveCase(foundCase);
    setCaseState(loadedState);
    setCurrentView('investigation');
    setInvestigationTab('scene');
    sound.playPaper();
  }, []);

  const resumeLastCase = useCallback(() => {
    const targetId = lastActiveCaseId ?? PLAYABLE_CASE_ID;
    startCase(targetId);
  }, [lastActiveCaseId, startCase]);

  const discoverClue = useCallback((clueId: string, hotspotId?: string) => {
    if (!caseState || !activeCase) return;

    if (!activeCase.evidence.some(e => e.id === clueId)) return;
    if (caseState.discoveredEvidenceIds.includes(clueId)) {
      sound.playPaper();
      return;
    }

    sound.playClueFound();
    const clueObj = activeCase.evidence.find(e => e.id === clueId);
    const isOptional = clueObj?.isOptional || clueObj?.isHidden;
    const discovered = [...caseState.discoveredEvidenceIds,clueId];
    const newlySupported = activeCase.canonConnections.filter(link =>
      !caseState.rewardedConnectionIds?.includes(link.id) && hasLinkSources(link,discovered) &&
      caseState.userConnections.some(connection=>sameLink(connection,link))
    );

    setCaseState(prev => prev ? {
      ...prev,
      discoveredEvidenceIds: [...new Set([...prev.discoveredEvidenceIds, clueId])],
      rewardedConnectionIds: [...(prev.rewardedConnectionIds ?? []), ...newlySupported.map(link=>link.id)],
      examinedHotspotIds: hotspotId ? [...new Set([...prev.examinedHotspotIds, hotspotId])] : prev.examinedHotspotIds
    } : null);

    if (isOptional || newlySupported.length) {
      setProfile(prev => ({
        ...prev,
        totalOptionalCluesFound: prev.totalOptionalCluesFound + Number(!!isOptional),
        totalContradictionsFound: prev.totalContradictionsFound + newlySupported.filter(link=>link.isContradiction).length,
        totalPoints: prev.totalPoints + (isOptional ? 25 : 0) + newlySupported.reduce((sum,link)=>sum+link.bonusPoints,0)
      }));
    }
  }, [caseState, activeCase]);

  const examineHotspot = useCallback((hotspotId: string) => {
    if (!activeCase?.crimeScene.hotspots.some(h => h.id === hotspotId)) return;
    setCaseState(prev => {
      if (!prev || prev.examinedHotspotIds[prev.examinedHotspotIds.length - 1] === hotspotId) return prev;
      return {
        ...prev,
        examinedHotspotIds: [...prev.examinedHotspotIds.filter(id => id !== hotspotId), hotspotId]
      };
    });
  }, [activeCase]);

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

    if (!dialogue || (dialogue.conditionClueId && !caseState.discoveredEvidenceIds.includes(dialogue.conditionClueId))) return;
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
    if (!caseState || !activeCase) return { reaction: { en: 'No response.', bn: 'কোনো জবাব নেই।' }, lieExposed: false };

    const suspect = activeCase.suspects.find(s => s.id === suspectId);
    if (!suspect || !caseState.discoveredEvidenceIds.includes(clueId)) return { reaction: '', lieExposed: false };
    const reactionObj = suspect.evidenceReactions.find(r => r.evidenceId === clueId);

    const existingPresented = caseState.presentedClueIds[suspectId] || [];
    const updatedPresented = existingPresented.includes(clueId)
      ? existingPresented
      : [...existingPresented, clueId];

    const confirmationId = suspectId + '/' + clueId;
    const lieExposed = !!reactionObj?.exposesLie && (reactionObj.requiresEvidenceIds ?? []).every(id=>caseState.discoveredEvidenceIds.includes(id));
    const currentStress = caseState.suspectStressLevels[suspectId] || 15;
    const addedStress = existingPresented.includes(clueId) ? 0 : reactionObj?.stressIncrease ?? 5;
    const newStress = Math.min(100, currentStress + addedStress);

    setCaseState(prev => prev ? {
      ...prev,
      confirmedStatementIds: lieExposed ? [...new Set([...(prev.confirmedStatementIds ?? []), confirmationId])] : prev.confirmedStatementIds,
      presentedClueIds: {
        ...prev.presentedClueIds,
        [suspectId]: updatedPresented
      },
      suspectStressLevels: {
        ...prev.suspectStressLevels,
        [suspectId]: newStress
      }
    } : null);

    if (lieExposed && !caseState.confirmedStatementIds?.includes(confirmationId)) {
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

    const reactionText = reactionObj?.reactionText ?? {
      en: `${suspect.name.en} looks at the evidence with mild disinterest and offers no new comment.`,
      bn: `${suspect.name.bn} আলামতটির দিকে নির্লিপ্তভাবে তাকিয়ে রইলেন। কোনো মন্তব্য করলেন না।`
    };

    return {
      reaction: reactionText,
      lieExposed
    };
  }, [caseState, activeCase, discoverClue]);

  const addUserConnection = useCallback((sourceId: string, targetId: string, note?: string) => {
    if (!caseState || !activeCase) return { isCanon: false };

    const available = (id: string) => caseState.discoveredEvidenceIds.includes(id) || activeCase.suspects.some(s => s.id === id);
    if (sourceId === targetId || !available(sourceId) || !available(targetId)) return { isCanon: false };
    const exists = caseState.userConnections.some(
      c => (c.sourceId === sourceId && c.targetId === targetId) ||
           (c.sourceId === targetId && c.targetId === sourceId)
    );
    if (exists) {
      sound.playContradictionBuzz();
      return { isCanon: false };
    }

    const canon = activeCase.canonConnections.find(
      c => hasLinkSources(c,caseState.discoveredEvidenceIds) && sameLink(c,{sourceId,targetId})
    );

    const newConn: UserConnection = {
      id: `conn-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      sourceId,
      targetId,
      note: note || undefined,
      createdAt: Date.now()
    };

    setCaseState(prev => prev ? {
      ...prev,
      userConnections: [...prev.userConnections, newConn],
      rewardedConnectionIds: canon ? [...new Set([...(prev.rewardedConnectionIds ?? []), canon.id])] : prev.rewardedConnectionIds
    } : null);

    if (canon) {
      sound.playDeductionSuccess();
      if (!caseState.rewardedConnectionIds?.includes(canon.id)) setProfile(prev => ({
        ...prev,
        totalPoints: prev.totalPoints + canon.bonusPoints,
        totalContradictionsFound: prev.totalContradictionsFound + Number(canon.isContradiction)
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
    if (!hint || (level > 1 && !caseState.unlockedHintLevels.includes(level - 1))) return;

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

  const draftReport = useCallback((reportDraft: FinalReportAnswers) => {
    setCaseState(prev => prev ? { ...prev, reportDraft } : prev);
  }, []);

  const submitFinalReport = useCallback((answers: FinalReportAnswers): FinalReportEvaluation => {
    if (!caseState || !activeCase) {
      throw new Error('No active case loaded');
    }

    const evaluation = evaluateFinalDeduction(activeCase, answers, caseState);

    if (!evaluation.accepted) {
      sound.playContradictionBuzz();
      return evaluation;
    }

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
    const customName = name.trim();
    setProfile(prev => ({ ...prev, name: customName || playerDetective.name.en, usesDefaultName: !customName }));
  }, []);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    formatNum,
    getLoc,
    profile,
    detectiveName: profile.usesDefaultName ? playerDetective.name[language] : profile.name,
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
    draftReport,
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
    draftReport,
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
