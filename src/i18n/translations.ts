import { Language } from '../types/game';

export interface TranslationDict {
  // Navigation & Top Bar
  gameTitle: string;
  gameSubtitle: string;
  cases: string;
  cluesFound: string;
  hints: string;
  notebook: string;
  audioSettings: string;
  crimeScene: string;
  evidenceLocker: string;
  interrogation: string;
  evidenceBoard: string;
  timeline: string;
  finalIndictment: string;
  solved: string;
  active: string;
  pts: string;
  // Main Menu
  metropolitanPolice: string;
  newInvestigation: string;
  continueInvestigation: string;
  selectCaseFile: string;
  detectiveProfile: string;
  settingsAudio: string;
  productionCredits: string;
  ongoingInvestigation: string;
  closedCases: string;
  detectiveRank: string;
  detectiveLabel: string;
  badgeNo: string;
  // Case Select
  caseArchivesTitle: string;
  caseArchivesSubtitle: string;
  openCaseFile: string;
  reopenCaseFile: string;
  unsolvedMystery: string;
  targetVictim: string;
  incidentLocation: string;
  incidentDate: string;
  objectives: string;
  difficultyStandard: string;
  difficultyHard: string;
  difficultyMaster: string;
  badgeMurder: string;
  badgeAbduction: string;
  badgeHeist: string;
  comingSoonTitle: string;
  comingSoonDesc: string;
  // Crime Scene
  locationLog: string;
  flashlightToggle: string;
  revealZones: string;
  zoomIn: string;
  zoomOut: string;
  pointsOfInterest: string;
  examined: string;
  inspectAction: string;
  crimeSceneInspection: string;
  forensicFieldNote: string;
  newClueUncovered: string;
  loggedInLocker: string;
  collectEvidence: string;
  examineInLocker: string;
  returnToScene: string;
  directiveTip: string;
  directiveDesc: string;
  // Evidence Room
  evidenceRepoTitle: string;
  evidenceRepoSubtitle: string;
  searchPlaceholder: string;
  catAll: string;
  catPhysical: string;
  catDigital: string;
  catDocuments: string;
  catWitness: string;
  catPhotographs: string;
  catForensic: string;
  undiscoveredEvidence: string;
  undiscoveredHint: string;
  crucialEvidence: string;
  markCrucial: string;
  unmarkCrucial: string;
  examinePrompt: string;
  labObservations: string;
  reagentAnalysis: string;
  runReagentTest: string;
  runningReagentTest: string;
  reagentVerified: string;
  associatedSuspects: string;
  connectOnBoard: string;
  doneBtn: string;
  slotLabel: string;
  relevanceLabel: string;
  // Interrogation
  suspectRoster: string;
  detainedLabel: string;
  observationMirror: string;
  recordingLive: string;
  subjectDossier: string;
  occupationLabel: string;
  relationLabel: string;
  stressLevel: string;
  stressComposed: string;
  stressEdge: string;
  stressBreakdown: string;
  stressHint: string;
  statedAlibi: string;
  potentialMotive: string;
  personalityMannerisms: string;
  presentEvidenceBtn: string;
  transcriptLog: string;
  questionsAnswered: string;
  noQuestionsYet: string;
  noQuestionsHint: string;
  inquiryLabel: string;
  inquireAction: string;
  askedAction: string;
  contradictionExposed: string;
  directInquiries: string;
  confrontEvidenceTitle: string;
  confrontEvidenceDesc: string;
  confrontBtn: string;
  cancelBtn: string;
  alreadyConfronted: string;
  noEvidenceYet: string;
  // Evidence Board
  investigationWall: string;
  linkMatrix: string;
  selectSecondPin: string;
  linkNodesBtn: string;
  deductionConnections: string;
  activeStrings: string;
  contradictionDetected: string;
  corroboratedLink: string;
  investigativeLink: string;
  severConnection: string;
  boardTip: string;
  boardTipDesc: string;
  noConnectionsYet: string;
  noConnectionsHint: string;
  connectCluesTitle: string;
  connectCluesDesc: string;
  sourceItem: string;
  targetItem: string;
  hypothesisNote: string;
  hypothesisPlaceholder: string;
  pinStringBtn: string;
  suspectTag: string;
  clueTag: string;
  // Timeline
  timelineTitle: string;
  timelineSubtitle: string;
  shuffleBtn: string;
  verifySequenceBtn: string;
  moveEarlier: string;
  moveLater: string;
  sourceLabel: string;
  timelineTip: string;
  // Final Indictment
  indictmentTitle: string;
  indictmentSubtitle: string;
  reviewVerdictBtn: string;
  q1Culprit: string;
  q1Desc: string;
  q2Motive: string;
  q2Desc: string;
  q3Method: string;
  q3Desc: string;
  q4Time: string;
  q4Desc: string;
  q5Evidence: string;
  q5Desc: string;
  q6FalseAlibi: string;
  q6Desc: string;
  detectiveTheoryLabel: string;
  detectiveTheoryPlaceholder: string;
  deliverIndictmentBtn: string;
  caseClosedVerdict: string;
  insufficientEvidenceVerdict: string;
  verdictTitle: string;
  gradeLabel: string;
  accuracyRating: string;
  investigationPoints: string;
  bureauAudit: string;
  canonicalDebriefing: string;
  reviewInvestigationBtn: string;
  proceedToArchiveBtn: string;
  requiredField: string;
  selectedCount: string;
  // Notebook
  notebookTitle: string;
  notebookDirective: string;
  notebookFieldNotes: string;
  notebookNotesPlaceholder: string;
  closeNotebook: string;
  autoSaved: string;
  evidenceLogged: string;
  boardConnectionsCount: string;
  hintsUsedCount: string;
  caseStatusLabel: string;
  // Hints
  hintConsultationTitle: string;
  hintConsultationSubtitle: string;
  hintNotice: string;
  tierClue: string;
  confirmDeductionTitle: string;
  confirmDeductionText: string;
  confirmAndReveal: string;
  unlockTierBtn: string;
  requiresPriorTier: string;
  closeBtn: string;
  // Profile
  profileTitle: string;
  profileSubtitle: string;
  departmentHomicide: string;
  totalScoreStat: string;
  casesSolvedStat: string;
  hintsUsedStat: string;
  bonusCluesStat: string;
  commendationsTitle: string;
  awardedLabel: string;
  dismissDossier: string;
  saveName: string;
  // Settings
  settingsTitle: string;
  settingsSubtitle: string;
  languageSelectLabel: string;
  synthSoundLevels: string;
  masterOutput: string;
  noirAmbience: string;
  sfxVolume: string;
  ambienceActive: string;
  ambienceOff: string;
  progressionMgmt: string;
  resetCaseTitle: string;
  resetCaseDesc: string;
  resetCaseBtn: string;
  wipeAllTitle: string;
  wipeAllDesc: string;
  wipeAllBtn: string;
  confirmBtn: string;
  closeSettings: string;
  // Credits
  creditsTitle: string;
  creditsSubtitle: string;
  gameDesignRole: string;
  leadArchitect: string;
  leadArchitectDesc: string;
  narrativeTitle: string;
  audioEngineTitle: string;
  audioEngineDesc: string;
  allRightsReserved: string;
  // Ranks
  rankRookie: string;
  rankJunior: string;
  rankField: string;
  rankSenior: string;
  rankMaster: string;
  rankLegendary: string;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    gameTitle: 'CASE FILES',
    gameSubtitle: 'Detective Investigation Simulator',
    cases: 'Cases',
    cluesFound: 'Clues Found',
    hints: 'Hints',
    notebook: 'Notebook',
    audioSettings: 'Sound Settings',
    crimeScene: 'Crime Scene',
    evidenceLocker: 'Evidence Locker',
    interrogation: 'Interrogation',
    evidenceBoard: 'Evidence Board',
    timeline: 'Timeline',
    finalIndictment: 'Final Indictment',
    solved: 'Solved',
    active: 'Active',
    pts: 'PTS',
    metropolitanPolice: 'Metropolitan Homicide Division • Case Intelligence',
    newInvestigation: 'New Investigation',
    continueInvestigation: 'Continue Investigation',
    selectCaseFile: 'Select Case File',
    detectiveProfile: 'Detective Profile',
    settingsAudio: 'Settings & Audio',
    productionCredits: 'Production Credits',
    ongoingInvestigation: 'Ongoing Investigation',
    closedCases: 'Closed Cases',
    detectiveRank: 'Detective Rank',
    detectiveLabel: 'Detective',
    badgeNo: 'Badge',
    caseArchivesTitle: 'CASE ARCHIVES & ACTIVE DOSSIERS',
    caseArchivesSubtitle: 'Select an open investigation file to review scene logs and begin field operations.',
    openCaseFile: 'Open Case File',
    reopenCaseFile: 'Re-open Case File',
    unsolvedMystery: 'Unsolved Mystery',
    targetVictim: 'Target / Victim',
    incidentLocation: 'Location',
    incidentDate: 'Date & Time',
    objectives: 'Case Objectives',
    difficultyStandard: 'Standard',
    difficultyHard: 'Hard',
    difficultyMaster: 'Master',
    badgeMurder: 'HOMICIDE',
    badgeAbduction: 'ABDUCTION',
    badgeHeist: 'GRAND HEIST',
    comingSoonTitle: 'Coming Soon',
    comingSoonDesc: 'This case is currently under development. Stay tuned for its release!',
    locationLog: 'LOCATION LOG',
    flashlightToggle: 'Toggle Flashlight',
    revealZones: 'Reveal Investigation Points',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    pointsOfInterest: 'Scene Points of Interest',
    examined: 'Examined',
    inspectAction: 'Inspect',
    crimeSceneInspection: 'CRIME SCENE INSPECTION',
    forensicFieldNote: 'Forensic Field Note',
    newClueUncovered: 'New Clue Uncovered!',
    loggedInLocker: 'Logged in Evidence Locker',
    collectEvidence: 'Collect into Evidence Locker',
    examineInLocker: 'Examine in Evidence Locker',
    returnToScene: 'Return to Scene',
    directiveTip: 'Detective Directive:',
    directiveDesc: 'Inspect physical items carefully. Some clues are concealed beneath furniture, behind panels, or in outdoor perimeters.',
    evidenceRepoTitle: 'EVIDENCE REPOSITORY & FORENSIC ARCHIVE',
    evidenceRepoSubtitle: 'Catalogued materials seized from crime scene and investigative interviews.',
    searchPlaceholder: 'Search clues, locations, descriptions...',
    catAll: 'All',
    catPhysical: 'Physical',
    catDigital: 'Digital',
    catDocuments: 'Documents',
    catWitness: 'Witness Statements',
    catPhotographs: 'Photographs',
    catForensic: 'Forensic Reports',
    undiscoveredEvidence: 'Undiscovered Evidence Slot',
    undiscoveredHint: 'Inspect the crime scene or interrogate suspects to uncover this evidence',
    crucialEvidence: 'Crucial Key Evidence',
    markCrucial: 'Mark as Key Evidence',
    unmarkCrucial: 'Unmark Key Evidence',
    examinePrompt: 'Examine Record →',
    labObservations: 'Laboratory Observations',
    reagentAnalysis: 'State Crime Lab Reagent Analysis',
    runReagentTest: 'Run Reagent Test',
    runningReagentTest: 'Running Mass Spectrometry & Chemical Analysis...',
    reagentVerified: 'Reagent Scan Verified',
    associatedSuspects: 'Associated Suspects',
    connectOnBoard: 'Connect on Evidence Board',
    doneBtn: 'Done',
    slotLabel: 'Slot #',
    relevanceLabel: 'Investigative Relevance:',
    suspectRoster: 'Suspect Roster',
    detainedLabel: 'Persons Detained',
    observationMirror: 'Observation Mirror: ACTIVE',
    recordingLive: '● RECORDING',
    subjectDossier: 'SUBJECT DOSSIER',
    occupationLabel: 'Occupation',
    relationLabel: 'Relation to Victim',
    stressLevel: 'Psychological Stress Level',
    stressComposed: 'COMPOSED',
    stressEdge: 'ON EDGE',
    stressBreakdown: 'NERVOUS BREAKDOWN',
    stressHint: 'Confronting suspects with contradictory evidence spikes their stress and forces confessions.',
    statedAlibi: 'Stated Alibi',
    potentialMotive: 'Potential Motive',
    personalityMannerisms: 'Personality & Mannerisms',
    presentEvidenceBtn: 'Confront Suspect with Evidence',
    transcriptLog: 'INTERROGATION TRANSCRIPT LOG',
    questionsAnswered: 'Questions Answered',
    noQuestionsYet: 'No questions asked to this suspect yet.',
    noQuestionsHint: 'Choose an inquiry below or present relevant evidence to interrogate the subject.',
    inquiryLabel: 'Detective Inquiry:',
    inquireAction: 'Inquire →',
    askedAction: 'Asked',
    contradictionExposed: 'Contradiction Exposed!',
    directInquiries: 'Direct Interrogation Inquiries',
    confrontEvidenceTitle: 'Confront Suspect with Evidence',
    confrontEvidenceDesc: 'Present a logged exhibit to hear the witness account. Compare it with independent records on the board.',
    confrontBtn: 'Confront Suspect',
    cancelBtn: 'Cancel',
    alreadyConfronted: '(Already Confronted)',
    noEvidenceYet: 'No evidence collected yet. Explore the crime scene first.',
    investigationWall: 'INVESTIGATION WALL',
    linkMatrix: 'Red Thread Link Matrix',
    selectSecondPin: 'Select 2nd pin to connect...',
    linkNodesBtn: 'Link Nodes',
    deductionConnections: 'Deduction Connections',
    activeStrings: 'Active Strings',
    contradictionDetected: 'Contradiction Detected',
    corroboratedLink: 'Corroborated Link',
    investigativeLink: 'Investigative Link',
    severConnection: 'Sever String Connection',
    boardTip: 'Detective Tip:',
    boardTipDesc: 'Link physical evidence with suspect statements to uncover lies and false alibis before submitting your indictment.',
    noConnectionsYet: 'No connections pinned yet.',
    noConnectionsHint: 'Click a pin, then click another to thread a connection string.',
    connectCluesTitle: 'Connect Two Clues or Suspects',
    connectCluesDesc: 'Link two pieces of evidence or a suspect to analyze potential contradictions, opportunity windows, or forensic correlations.',
    sourceItem: 'Source Item A',
    targetItem: 'Target Item B',
    hypothesisNote: 'Deductive Hypothesis Note (Optional)',
    hypothesisPlaceholder: 'e.g. Alibi contradiction, forensic match, secret motive...',
    pinStringBtn: 'Pin String Connection',
    suspectTag: 'SUSPECT',
    clueTag: 'CLUE',
    timelineTitle: 'CHRONOLOGICAL TIMELINE RECONSTRUCTION',
    timelineSubtitle: 'Sequence all critical events leading up to and following the crime using timestamps and evidence logs.',
    shuffleBtn: 'Shuffle',
    verifySequenceBtn: 'Verify Sequence',
    moveEarlier: 'Move Earlier in Timeline',
    moveLater: 'Move Later in Timeline',
    sourceLabel: 'Source',
    timelineTip: 'Arranging the timeline correctly provides critical deductions for your Final Indictment. Pay close attention to discrepancies between the physical evidence timestamps and suspect statements.',
    indictmentTitle: 'Final accusation',
    indictmentSubtitle: 'Submit your formal findings to the District Attorney.',
    reviewVerdictBtn: 'Review Solved Verdict',
    q1Culprit: '1. Identify the Primary Perpetrator / Culprit',
    q1Desc: 'Based on the physical clues, witness statements, and contradictions, who is responsible?',
    q2Motive: '2. True Underlying Motive',
    q2Desc: 'What compelled the perpetrator to execute this crime at this exact moment?',
    q3Method: '3. Modus Operandi (Execution Method & Technique)',
    q3Desc: 'How did the perpetrator overcome security, poison the victim, or stage the impossible scenario?',
    q4Time: '4. Verified Crime / Execution Time Window',
    q4Desc: 'Pinpoint the authentic time of the critical event based on physical evidence and timeline reconstruction.',
    q5Evidence: '5. Corroborating Physical & Digital Evidence',
    q5Desc: 'Select all key pieces of evidence from your locker that substantiate this indictment in a court of law.',
    q6FalseAlibi: '6. False Alibi Exposure',
    q6Desc: 'Which suspect presented an alibi that was directly shattered by contradictions in the evidence?',
    detectiveTheoryLabel: 'Detective Theory & Closing Argument (Optional)',
    detectiveTheoryPlaceholder: 'Draft your overarching deductive closing argument summarizing how the evidence seals the verdict...',
    deliverIndictmentBtn: 'Deliver Official Indictment',
    caseClosedVerdict: 'CASE CLOSED',
    insufficientEvidenceVerdict: 'INSUFFICIENT EVIDENCE',
    verdictTitle: 'DEPARTMENT INDICTMENT VERDICT',
    gradeLabel: 'GRADE',
    accuracyRating: 'Accuracy Rating',
    investigationPoints: 'Investigation Points',
    bureauAudit: 'Bureau Audit Verification',
    canonicalDebriefing: 'Case reconstruction',
    reviewInvestigationBtn: 'Review Investigation',
    proceedToArchiveBtn: 'Proceed to Case Files Archive',
    requiredField: 'Required',
    selectedCount: 'Selected',
    notebookTitle: 'DETECTIVE FIELD NOTEBOOK',
    notebookDirective: 'Official Department Directive',
    notebookFieldNotes: 'Personal Field Observations & Theories',
    notebookNotesPlaceholder: 'Record suspect discrepancies, timeline doubts, and evidence correlations here...',
    closeNotebook: 'Close Notebook',
    autoSaved: 'Auto-saved to file',
    evidenceLogged: 'Evidence Logged',
    boardConnectionsCount: 'Board Connections',
    hintsUsedCount: 'Hints Used',
    caseStatusLabel: 'Case Status',
    hintConsultationTitle: 'BUREAU INVESTIGATION CONSULTATION',
    hintConsultationSubtitle: 'Progressive Investigative Assistance',
    hintNotice: 'Field observations are free. Each optional consultation deducts the displayed points once.',
    tierClue: 'Level',
    confirmDeductionTitle: 'Confirm Deduction of Points?',
    confirmDeductionText: 'This hint will permanently deduct points from this case\'s score.',
    confirmAndReveal: 'Confirm & Reveal',
    unlockTierBtn: 'Unlock Level',
    requiresPriorTier: 'Requires unlocking prior tier first.',
    closeBtn: 'Close',
    profileTitle: 'BUREAU PERSONNEL DOSSIER',
    profileSubtitle: 'Official Credential File',
    departmentHomicide: 'Department of Homicide & Major Crimes Investigation Division',
    totalScoreStat: 'Total Score',
    casesSolvedStat: 'Cases Solved',
    hintsUsedStat: 'Hints Used',
    bonusCluesStat: 'Bonus Clues',
    commendationsTitle: 'Official Commendations & Medals',
    awardedLabel: 'Awarded',
    dismissDossier: 'Dismiss Dossier',
    saveName: 'Save',
    settingsTitle: 'BUREAU CONFIGURATION',
    settingsSubtitle: 'Language, Audio, and Game State Settings',
    languageSelectLabel: 'Language / ভাষা',
    synthSoundLevels: 'Synthesizer Sound Levels',
    masterOutput: 'Master Output',
    noirAmbience: 'Procedural Noir Ambience (Rain / Bass Drone)',
    sfxVolume: 'Sound Effects (Typewriter, Clues, Pins)',
    ambienceActive: 'Active',
    ambienceOff: 'Off',
    progressionMgmt: 'Evidence & Progression Management',
    resetCaseTitle: 'Reset Current Case Progress',
    resetCaseDesc: 'Clears discovered clues and connections for this case.',
    resetCaseBtn: 'Reset Case',
    wipeAllTitle: 'Wipe All Game Data',
    wipeAllDesc: 'Resets detective rank, all case files, and career scores.',
    wipeAllBtn: 'Clear All Data',
    confirmBtn: 'Confirm',
    closeSettings: 'Close Settings',
    creditsTitle: 'CASE FILES — PRODUCTION CREDITS',
    creditsSubtitle: 'Design, Narrative & Systems Architecture',
    gameDesignRole: 'Game Direction & Systems Architecture',
    leadArchitect: 'Senior Game Developer & Narrative Systems Architect',
    leadArchitectDesc: 'Engineered with React, TypeScript, Tailwind CSS, and Web Audio API synthesis.',
    narrativeTitle: 'Narrative Mysteries',
    audioEngineTitle: 'Audio Engine',
    audioEngineDesc: '100% procedural Web Audio API synthesis: rain noise, sub-bass drones, mechanical typewriter keys, and deduction chords.',
    allRightsReserved: 'All Rights Reserved — CASE FILES',
    rankRookie: 'Rookie Detective',
    rankJunior: 'Junior Investigator',
    rankField: 'Field Detective',
    rankSenior: 'Senior Detective',
    rankMaster: 'Master Detective',
    rankLegendary: 'Legendary Investigator',
  },
  bn: {
    gameTitle: 'কেস ফাইলস',
    gameSubtitle: 'গোয়েন্দা তদন্ত সিমুলেটর',
    cases: 'মামলার নথি',
    cluesFound: 'উদ্ধারকৃত সূত্র',
    hints: 'ইঙ্গিত',
    notebook: 'নোটবুক',
    audioSettings: 'শব্দ নিয়ন্ত্রণ',
    crimeScene: 'অপরাধস্থল',
    evidenceLocker: 'প্রমাণাগার',
    interrogation: 'জিজ্ঞাসাবাদ',
    evidenceBoard: 'প্রমাণ বোর্ড',
    timeline: 'ঘটনাক্রম',
    finalIndictment: 'চূড়ান্ত অভিযোগপত্র',
    solved: 'নিষ্পন্ন',
    active: 'চলমান',
    pts: 'পয়েন্ট',
    metropolitanPolice: 'মেট্রোপলিটন গোয়েন্দা বিভাগ • তদন্ত শাখা',
    newInvestigation: 'নতুন তদন্ত',
    continueInvestigation: 'তদন্তে ফিরুন',
    selectCaseFile: 'মামলা নির্বাচন করুন',
    detectiveProfile: 'গোয়েন্দা প্রোফাইল',
    settingsAudio: 'সেটিংস ও সাউন্ড',
    productionCredits: 'কৃতজ্ঞতা স্বীকার',
    ongoingInvestigation: 'চলমান মামলা',
    closedCases: 'নিষ্পন্ন মামলা',
    detectiveRank: 'গোয়েন্দা পদমর্যাদা',
    detectiveLabel: 'গোয়েন্দা',
    badgeNo: 'ব্যাজ নং',
    caseArchivesTitle: 'মামলার মহাফেজখানা ও নথিপত্র',
    caseArchivesSubtitle: 'অপরাধের স্থান পরিদর্শন ও তদন্ত কার্যক্রম শুরু করতে একটি মামলা নির্বাচন করুন।',
    openCaseFile: 'মামলার নথি খুলুন',
    reopenCaseFile: 'মামলা পুনরায় খুলুন',
    unsolvedMystery: 'অমীমাংসিত রহস্য',
    targetVictim: 'ভুক্তভোগী / লক্ষ্য',
    incidentLocation: 'ঘটনাস্থল',
    incidentDate: 'তারিখ ও সময়',
    objectives: 'তদন্তের মূল লক্ষ্য',
    difficultyStandard: 'সাধারণ',
    difficultyHard: 'কঠিন',
    difficultyMaster: 'জটিল',
    badgeMurder: 'হত্যাকাণ্ড',
    badgeAbduction: 'অপহরণ',
    badgeHeist: 'দুর্ধর্ষ চুরি',
    comingSoonTitle: 'খুব শীঘ্রই আসছে',
    comingSoonDesc: 'এই কেসটি বর্তমানে তৈরি হচ্ছে। খুব শীঘ্রই আসছে!',
    locationLog: 'ঘটনাস্থল বিবরণ',
    flashlightToggle: 'টর্চলাইট অন/অফ',
    revealZones: 'তদন্ত এলাকা চিহ্নিত করুন',
    zoomIn: 'বড় করুন',
    zoomOut: 'ছোট করুন',
    pointsOfInterest: 'গুরুত্বপূর্ণ তদন্ত কেন্দ্র',
    examined: 'নিরীক্ষিত',
    inspectAction: 'পরীক্ষা',
    crimeSceneInspection: 'অপরাধস্থল পুঙ্খানুপুঙ্খ পর্যবেক্ষণ',
    forensicFieldNote: 'ফরেনসিক মাঠপর্যায় নোট',
    newClueUncovered: 'নতুন সূত্র উদঘাটিত হয়েছে!',
    loggedInLocker: 'প্রমাণাগারে সংরক্ষিত হয়েছে',
    collectEvidence: 'প্রমাণ হিসেবে সংগ্রহ করুন',
    examineInLocker: 'প্রমাণাগারে পর্যবেক্ষণ করুন',
    returnToScene: 'ঘটনাস্থলে ফিরুন',
    directiveTip: 'গোয়েন্দা পরামর্শ:',
    directiveDesc: 'প্রতিটি বস্তুকে সূক্ষ্মভাবে পর্যবেক্ষণ করুন। কিছু প্রমাণ আসবাবের নিচে, ভেন্টিলেটরে বা বাগানে লুকিয়ে থাকতে পারে।',
    evidenceRepoTitle: 'প্রমাণাগার ও ফরেনসিক আর্কাইভ',
    evidenceRepoSubtitle: 'ঘটনাস্থল ও জিজ্ঞাসাবাদ থেকে উদ্ধারকৃত সমস্ত আলামতের সুবিন্যস্ত তালিকা।',
    searchPlaceholder: 'প্রমাণ, স্থান বা সূত্র খুঁজুন...',
    catAll: 'সকল',
    catPhysical: 'শারীরিক আলামত',
    catDigital: 'ডিজিটাল প্রমাণ',
    catDocuments: 'নথিপত্র ও দলিল',
    catWitness: 'সাক্ষীর জবানবন্দি',
    catPhotographs: 'আলোকচিত্র',
    catForensic: 'ফরেনসিক রিপোর্ট',
    undiscoveredEvidence: 'অনাবিষ্কৃত আলামত স্থান',
    undiscoveredHint: 'এই প্রমাণটি উদ্ধার করতে অপরাধস্থল খুঁটিয়ে দেখুন অথবা সন্দেহভাজনদের জেরা করুন',
    crucialEvidence: 'অত্যন্ত গুরুত্বপূর্ণ প্রমাণ',
    markCrucial: 'মূল প্রমাণ হিসেবে চিহ্নিত করুন',
    unmarkCrucial: 'চিহ্ন তুলে নিন',
    examinePrompt: 'নথি পরীক্ষা করুন →',
    labObservations: 'ল্যাবরেটরি বিশ্লেষণ ও পর্যবেক্ষণ',
    reagentAnalysis: 'রাসায়নিক রিএজেন্ট পরীক্ষা',
    runReagentTest: 'রিএজেন্ট পরীক্ষা চালান',
    runningReagentTest: 'রাসায়নিক ও বর্ণালী বিশ্লেষণ চলছে...',
    reagentVerified: 'রিএজেন্ট পরীক্ষা সফলভাবে যাচাইকৃত',
    associatedSuspects: 'সংশ্লিষ্ট সন্দেহভাজন',
    connectOnBoard: 'প্রমাণ বোর্ডে যুক্ত করুন',
    doneBtn: 'সম্পন্ন',
    slotLabel: 'স্থান নং',
    relevanceLabel: 'তদন্তে তাৎপর্য:',
    suspectRoster: 'সন্দেহভাজনদের তালিকা',
    detainedLabel: 'আটককৃত ব্যক্তি',
    observationMirror: 'পর্যবেক্ষণ কক্ষ: সক্রিয়',
    recordingLive: '● রেকর্ড চলছে',
    subjectDossier: 'সন্দেহভাজনের নথি',
    occupationLabel: 'পেশা',
    relationLabel: 'ভুক্তভোগীর সাথে সম্পর্ক',
    stressLevel: 'মানসিক চাপের মাত্রা',
    stressComposed: 'শান্ত ও সংযত',
    stressEdge: 'উদ্বিগ্ন ও নার্ভাস',
    stressBreakdown: 'মানসিকভাবে ভেঙে পড়েছে',
    stressHint: 'সন্দেহভাজনের বক্তব্যের বিপরীতে অকাট্য প্রমাণ পেশ করলে তাদের প্রতিরোধ ভেঙে পড়ে এবং তারা সত্য বলতে বাধ্য হয়।',
    statedAlibi: 'দাবিকৃত অ্যালিবাই (অবস্থান)',
    potentialMotive: 'সম্ভাব্য উদ্দেশ্য',
    personalityMannerisms: 'ব্যক্তিত্ব ও আচরণ',
    presentEvidenceBtn: 'সন্দেহভাজনের সামনে প্রমাণ পেশ করুন',
    transcriptLog: 'জিজ্ঞাসাবাদের প্রতিলিপি রেকর্ড',
    questionsAnswered: 'প্রশ্নের উত্তর নেওয়া হয়েছে',
    noQuestionsYet: 'এই সন্দেহভাজনকে এখনও কোনো প্রশ্ন করা হয়নি।',
    noQuestionsHint: 'নিচের প্রশ্নতালিকা থেকে জেরা শুরু করুন অথবা সরাসরি প্রমাণ পেশ করে জেরা করুন।',
    inquiryLabel: 'গোয়েন্দা প্রশ্ন:',
    inquireAction: 'জিজ্ঞেস করুন →',
    askedAction: 'জিজ্ঞাসিত',
    contradictionExposed: 'মিথ্যা ধরা পড়েছে!',
    directInquiries: 'সরাসরি জবানবন্দি গ্রহণ',
    confrontEvidenceTitle: 'প্রমাণ দিয়ে সরাসরি জেরা',
    confrontEvidenceDesc: 'আপনার প্রমাণাগার থেকে একটি আলামত নির্বাচন করুন। যদি আলামতটি তাদের বক্তব্যের সাথে অসঙ্গতিপূর্ণ হয়, তাদের মিথ্যার মুখোশ উন্মোচিত হবে।',
    confrontBtn: 'প্রমাণ পেশ করুন',
    cancelBtn: 'বাতিল',
    alreadyConfronted: '(ইতিমধ্যে পেশ করা হয়েছে)',
    noEvidenceYet: 'এখনও কোনো প্রমাণ পাওয়া যায়নি। প্রথমে অপরাধস্থল অনুসন্ধান করুন।',
    investigationWall: 'তদন্ত বোর্ড',
    linkMatrix: 'লাল সুতোর সংযোগ ম্যাট্রিক্স',
    selectSecondPin: 'যুক্ত করতে দ্বিতীয় পিনটি বেছে নিন...',
    linkNodesBtn: 'সূত্র যুক্ত করুন',
    deductionConnections: 'যৌক্তিক সংযোগ তালিকা',
    activeStrings: 'সক্রিয় সংযোগ সুতো',
    contradictionDetected: 'অসঙ্গতি ও মিথ্যা চিহ্নিত!',
    corroboratedLink: 'প্রমাণিত যোগসূত্র',
    investigativeLink: 'তদন্তমূলক যোগসূত্র',
    severConnection: 'সংযোগ ছিন্ন করুন',
    boardTip: 'গোয়েন্দা কৌশল:',
    boardTipDesc: 'চূড়ান্ত অভিযোগপত্র পেশ করার পূর্বে সন্দেহভাজনের বক্তব্য এবং শারীরিক আলামতের মধ্যে সংযোগ স্থাপন করে তাদের মিথ্যা ও সাজানো অ্যালিবাই উন্মোচন করুন।',
    noConnectionsYet: 'এখনও কোনো সংযোগ পিন করা হয়নি।',
    noConnectionsHint: 'একটি পিন নির্বাচন করে অপর একটি পিনের সাথে যুক্ত করতে লাল সুতো টানুন।',
    connectCluesTitle: 'দুটি সূত্র বা সন্দেহভাজন যুক্ত করুন',
    connectCluesDesc: 'অসঙ্গতি, সুযোগ বা যোগসূত্র আবিষ্কার করতে দুটি আলামত অথবা সন্দেহভাজনের মধ্যে রেখা টানুন।',
    sourceItem: 'উৎস সূত্র বা ব্যক্তি (ক)',
    targetItem: 'লক্ষ্য সূত্র বা ব্যক্তি (খ)',
    hypothesisNote: 'তদন্তমূলক অনুমান বা নোট (ঐচ্ছিক)',
    hypothesisPlaceholder: 'যেমন: অ্যালিবাইয়ের অসঙ্গতি, রাসায়নিক মিল, গোপন উদ্দেশ্য...',
    pinStringBtn: 'সুতো পিন করুন',
    suspectTag: 'সন্দেহভাজন',
    clueTag: 'সূত্র',
    timelineTitle: 'ঘটনাক্রম ও সময়রেখা পুনর্নির্মাণ',
    timelineSubtitle: 'টাইমস্ট্যাম্প, নজরদারি ক্যামেরা এবং সাক্ষ্যের ভিত্তিতে ঘটনার পূর্বাপর সঠিক ক্রমানুসারে সাজান।',
    shuffleBtn: 'এলোমেলো করুন',
    verifySequenceBtn: 'ঘটনাক্রম যাচাই করুন',
    moveEarlier: 'আগে আনুন',
    moveLater: 'পিছনে নিন',
    sourceLabel: 'উৎস',
    timelineTip: 'সঠিক ঘটনাক্রম সাজানো আপনার চূড়ান্ত সিদ্ধান্তের ভিত্তি হিসেবে কাজ করবে। শারীরিক প্রমাণের সময় এবং সাক্ষীর দাবিকৃত সময়ের অমিলগুলোর ওপর সতর্ক নজর দিন।',
    indictmentTitle: 'আনুষ্ঠানিক অভিযোগপত্র ও চূড়ান্ত সিদ্ধান্ত',
    indictmentSubtitle: 'আদালত ও প্রসিকিউশনের নিকট আপনার আনুষ্ঠানিক তদন্তের ফলাফল জমা দিন।',
    reviewVerdictBtn: 'নিষ্পন্ন রায় দেখুন',
    q1Culprit: '১. মূল অপরাধীকে শনাক্ত করুন',
    q1Desc: 'শারীরিক আলামত, সাক্ষীর জবানবন্দি ও অসঙ্গতি বিশ্লেষণ করে কে এই অপরাধ সংঘটিত করেছে?',
    q2Motive: '২. অপরাধের প্রকৃত উদ্দেশ্য কী ছিল?',
    q2Desc: 'কী কারণে অপরাধী এই নির্দিষ্ট সময়ে অপরাধটি করতে বাধ্য হয়েছিল?',
    q3Method: '৩. অপরাধের পদ্ধতি ও কৌশল (মোডাস অপারেন্ডি)',
    q3Desc: 'অপরাধী কীভাবে নিরাপত্তা এড়িয়ে, বিষ প্রয়োগ করে বা দৃশ্য সাজিয়ে অপরাধটি সম্পন্ন করেছিল?',
    q4Time: '৪. অপরাধ সংঘটনের সঠিক সময়রেখা',
    q4Desc: 'ভৌত প্রমাণ ও ঘড়ির সময় অনুযায়ী অপরাধটি ঠিক কখন ঘটেছিল?',
    q5Evidence: '৫. অভিযোগ প্রমাণের জন্য মূল আলামতসমূহ',
    q5Desc: 'আপনার প্রমাণাগার থেকে এমন আলামতগুলো নির্বাচন করুন যা আদালতে অভিযোগ সন্দেহাতীতভাবে প্রমাণ করবে।',
    q6FalseAlibi: '৬. কার অ্যালিবাইটি সাজানো ও মিথ্যা ছিল?',
    q6Desc: 'কোন সন্দেহভাজনের দাবিকৃত অবস্থান ও বক্তব্য প্রমাণের মাধ্যমে সরাসরি খণ্ডিত হয়েছে?',
    detectiveTheoryLabel: 'গোয়েন্দার ব্যক্তিগত তদন্ত যুক্তি ও সমাপনী বক্তব্য (ঐচ্ছিক)',
    detectiveTheoryPlaceholder: 'প্রমাণ কীভাবে সন্দেহাতীতভাবে অপরাধ প্রমাণ করে তার একটি সংক্ষিপ্ত যুক্তিপূর্ণ সারসংক্ষেপ লিখুন...',
    deliverIndictmentBtn: 'আনুষ্ঠানিক অভিযোগপত্র দাখিল করুন',
    caseClosedVerdict: 'মামলা নিষ্পত্তি',
    insufficientEvidenceVerdict: 'অপ্রতুল প্রমাণ',
    verdictTitle: 'বিভাগীয় তদন্তের চূড়ান্ত মূল্যায়ন',
    gradeLabel: 'গ্রেড',
    accuracyRating: 'সঠিকতার হার',
    investigationPoints: 'অর্জিত তদন্ত পয়েন্ট',
    bureauAudit: 'বিভাগীয় নিরীক্ষা ও পর্যালোচনা',
    canonicalDebriefing: 'মামলার পূর্ণাঙ্গ সত্য উন্মোচন ও বিস্তারিত বিবরণ',
    reviewInvestigationBtn: 'তদন্ত পর্যালোচনা করুন',
    proceedToArchiveBtn: 'মামলার মহাফেজখানায় ফিরুন',
    requiredField: 'আবশ্যক',
    selectedCount: 'নির্বাচিত',
    notebookTitle: 'গোয়েন্দা ফিল্ড নোটবুক',
    notebookDirective: 'বিভাগীয় প্রধানের নির্দেশিকা',
    notebookFieldNotes: 'ব্যক্তিগত তদন্ত পর্যবেক্ষণ ও তত্ত্ব',
    notebookNotesPlaceholder: 'সন্দেহভাজনদের অসঙ্গতি, সময়রেখার গড়মিল এবং প্রমাণের মিল এখানে লিখে রাখুন...',
    closeNotebook: 'নোটবুক বন্ধ করুন',
    autoSaved: 'স্বয়ংক্রিয়ভাবে সংরক্ষিত',
    evidenceLogged: 'সংগৃহীত প্রমাণ',
    boardConnectionsCount: 'বোর্ড সংযোগ',
    hintsUsedCount: 'ব্যবহৃত ইঙ্গিত',
    caseStatusLabel: 'মামলার স্থিতি',
    hintConsultationTitle: 'বিভাগীয় তদন্ত পরামর্শ ও ইঙ্গিত',
    hintConsultationSubtitle: 'ধাপে ধাপে তদন্তে সহায়তা গ্রহণ',
    hintNotice: 'ঘটনাস্থল পরীক্ষা বিনামূল্যে। প্রতিটি ঐচ্ছিক পরামর্শে দেখানো পয়েন্ট একবার কাটা হবে।',
    tierClue: 'স্তরের ইঙ্গিত',
    confirmDeductionTitle: 'পয়েন্ট কর্তন নিশ্চিত করুন',
    confirmDeductionText: 'এই ইঙ্গিতটি উন্মোচন করলে এই মামলার স্কোর থেকে নির্দিষ্ট পয়েন্ট স্থায়ীভাবে কর্তন করা হবে।',
    confirmAndReveal: 'নিশ্চিত করুন ও দেখুন',
    unlockTierBtn: 'ইঙ্গিত উন্মোচন করুন',
    requiresPriorTier: 'পূর্ববর্তী স্তরের ইঙ্গিত আগে উন্মোচন করা আবশ্যক।',
    closeBtn: 'বন্ধ করুন',
    profileTitle: 'গোয়েন্দা ব্যক্তিগত নথি ও রেকর্ড',
    profileSubtitle: 'আনুষ্ঠানিক পরিচিতিপত্র ফাইল',
    departmentHomicide: 'মেট্রোপলিটন গোয়েন্দা বিভাগ • গুরুতর অপরাধ তদন্ত শাখা',
    totalScoreStat: 'মোট স্কোর',
    casesSolvedStat: 'সমাধানকৃত মামলা',
    hintsUsedStat: 'ব্যবহৃত ইঙ্গিত',
    bonusCluesStat: 'বিশেষ সূত্র',
    commendationsTitle: 'বিভাগীয় পদক ও বিশেষ স্বীকৃতি',
    awardedLabel: 'অর্জিত',
    dismissDossier: 'প্রোফাইল বন্ধ করুন',
    saveName: 'সংরক্ষণ',
    settingsTitle: 'বিভাগীয় কনফিগারেশন ও সেটিংস',
    settingsSubtitle: 'ভাষা, অডিও এবং গেম প্রগ্রেস সেটিংস',
    languageSelectLabel: 'ভাষা নির্বাচন (Language)',
    synthSoundLevels: 'সিন্থেসাইজার সাউন্ড ভলিউম',
    masterOutput: 'মূল ভলিউম',
    noirAmbience: 'নয়ার বৃষ্টি ও ড্রোন ব্যাকগ্রাউন্ড সাউন্ড',
    sfxVolume: 'সাউন্ড ইফেক্টস (টাইপরাইটার, পিন, ক্যামেরা)',
    ambienceActive: 'চালু',
    ambienceOff: 'বন্ধ',
    progressionMgmt: 'প্রমাণ ও অগ্রগতি ব্যবস্থাপনা',
    resetCaseTitle: 'বর্তমান মামলার প্রগ্রেস রিসেট করুন',
    resetCaseDesc: 'এই মামলার সমস্ত উদ্ধারকৃত আলামত এবং সংযোগ মুছে ফেলা হবে।',
    resetCaseBtn: 'মামলা রিসেট',
    wipeAllTitle: 'সমস্ত গেম ডাটা মুছে ফেলুন',
    wipeAllDesc: 'গোয়েন্দা পদমর্যাদা, সকল মামলার ফলাফল এবং সামগ্রিক স্কোর সম্পূর্ণ মুছে যাবে।',
    wipeAllBtn: 'সকল ডাটা মুছুন',
    confirmBtn: 'নিশ্চিত করুন',
    closeSettings: 'সেটিংস বন্ধ করুন',
    creditsTitle: 'কেস ফাইলস — প্রোডাকশন ক্রেডিট',
    creditsSubtitle: 'ডিজাইন, আখ্যান ও গেম সিস্টেম আর্কিটেকচার',
    gameDesignRole: 'গেম ডিরেকশন ও সিস্টেমস আর্কিটেকচার',
    leadArchitect: 'সিনিয়র গেম ডেভেলপার ও ন্যারেটিভ সিস্টেম আর্কিটেক্ট',
    leadArchitectDesc: 'রিঅ্যাক্ট, টাইপস্ক্রিপ্ট, টেইলউইন্ড সিএসএস এবং ওয়েব অডিও এপিআই দিয়ে নির্মিত।',
    narrativeTitle: 'রহস্য আখ্যানসমূহ',
    audioEngineTitle: 'অডিও ইঞ্জিন',
    audioEngineDesc: '১০০% প্রসিডিউরাল ওয়েব অডিও সিন্থেসাইজার: বৃষ্টির শব্দ, সাব-বেস ড্রোন, মেকানিক্যাল টাইপরাইটার এবং ডিডাকশন কর্ড।',
    allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত — কেস ফাইলস',
    rankRookie: 'নবীন গোয়েন্দা',
    rankJunior: 'জুনিয়র তদন্তকারী',
    rankField: 'ফিল্ড গোয়েন্দা',
    rankSenior: 'সিনিয়র গোয়েন্দা',
    rankMaster: 'মাস্টার গোয়েন্দা',
    rankLegendary: 'কিংবদন্তি তদন্তকারী',
  }
};
