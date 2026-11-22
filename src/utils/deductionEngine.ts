import {
  CaseData,
  FinalReportAnswers,
  FinalReportEvaluation,
  ActiveCaseState
} from '../types/game';

export function evaluateFinalDeduction(
  caseData: CaseData,
  answers: FinalReportAnswers,
  caseState: ActiveCaseState
): FinalReportEvaluation {
  const { solution } = caseData;

  // 1. Check Culprit
  const isCulpritCorrect = answers.culpritId === solution.culpritId;

  // 2. Check Motive
  // The user selected an option from caseData.solution.options.motives
  // Let's check matching against known correct answer or keyword logic
  const isMotiveCorrect =
    (caseData.id === 'case-001' && answers.motiveId === 'm-embezzle') ||
    (caseData.id === 'case-002' && answers.motiveId === 'm-syndicate-bribe') ||
    (caseData.id === 'case-003' && answers.motiveId === 'm-rossi-debt');

  // 3. Check Method
  const isMethodCorrect =
    (caseData.id === 'case-001' && answers.methodId === 'met-decanter-thread') ||
    (caseData.id === 'case-002' && answers.methodId === 'met-staged-escape') ||
    (caseData.id === 'case-003' && answers.methodId === 'met-rossi-swap');

  // 4. Check Time
  const isTimeCorrect =
    (caseData.id === 'case-001' && answers.timeId === 't-2214') ||
    (caseData.id === 'case-002' && answers.timeId === 't-2320') ||
    (caseData.id === 'case-003' && answers.timeId === 't-1800');

  // 5. Check False Alibi
  const isFalseAlibiCorrect = answers.falseAlibiSuspectId === solution.falseAlibiSuspectId;

  // 6. Crucial Evidence matching
  const crucialSet = new Set(solution.crucialEvidenceIds);
  let matchedCrucial = 0;
  answers.crucialEvidenceIds.forEach(id => {
    if (crucialSet.has(id)) {
      matchedCrucial++;
    }
  });

  const totalCrucial = solution.crucialEvidenceIds.length;
  const crucialRatio = totalCrucial > 0 ? matchedCrucial / totalCrucial : 1;

  // Calculate Accuracy Percentage
  // Weighted: Culprit (35%), Motive (15%), Method (20%), Time (10%), False Alibi (10%), Crucial Evidence (10%)
  let accuracyPoints = 0;
  if (isCulpritCorrect) accuracyPoints += 35;
  if (isMotiveCorrect) accuracyPoints += 15;
  if (isMethodCorrect) accuracyPoints += 20;
  if (isTimeCorrect) accuracyPoints += 10;
  if (isFalseAlibiCorrect) accuracyPoints += 10;
  accuracyPoints += Math.round(crucialRatio * 10);

  const accuracyScore = Math.min(100, Math.max(0, accuracyPoints));

  // Points Calculation
  // Base points by case difficulty: Standard 1000, Hard 1400, Master 1800
  const basePoints = caseData.difficulty === 'Master' ? 1800 : caseData.difficulty === 'Hard' ? 1400 : 1000;
  
  // Clue discovery bonus: 20 pts per clue discovered
  const clueBonus = caseState.discoveredEvidenceIds.length * 20;

  // Connections bonus: 40 pts per valid connection
  const connectionsBonus = (caseState.userConnections.length) * 35;

  // Hint penalty: Level 1 (-50), Level 2 (-100), Level 3 (-200)
  const hintPenalty = caseState.unlockedHintLevels.reduce((acc, lvl) => {
    if (lvl === 1) return acc + 50;
    if (lvl === 2) return acc + 100;
    if (lvl === 3) return acc + 200;
    return acc;
  }, 0);

  const earnedBase = Math.round((basePoints * accuracyScore) / 100);
  const totalEarned = Math.max(100, earnedBase + clueBonus + connectionsBonus - hintPenalty);

  // Performance Grade
  let performanceGrade: 'S+' | 'A' | 'B' | 'C' | 'F' = 'C';
  if (accuracyScore >= 95 && hintPenalty === 0) performanceGrade = 'S+';
  else if (accuracyScore >= 85) performanceGrade = 'A';
  else if (accuracyScore >= 70) performanceGrade = 'B';
  else if (accuracyScore >= 50) performanceGrade = 'C';
  else performanceGrade = 'F';

  // Detailed Feedback Notes
  const feedbackNotes: string[] = [];

  if (isCulpritCorrect) {
    feedbackNotes.push(`✓ Primary Culprit Correct: You accurately identified ${solution.culpritName}.`);
  } else {
    feedbackNotes.push(`✗ Incorrect Culprit Identified: The evidence pointed to someone else.`);
  }

  if (isMotiveCorrect) {
    feedbackNotes.push(`✓ Motive Confirmed: Your theory aligns with the physical and financial records.`);
  } else {
    feedbackNotes.push(`✗ Flawed Motive: The suspect had a far more pressing and provable motivation.`);
  }

  if (isMethodCorrect) {
    feedbackNotes.push(`✓ Modus Operandi Verified: You deduced the exact mechanics of how the crime was executed.`);
  } else {
    feedbackNotes.push(`✗ Inaccurate Modus Operandi: Physical evidence disproves your assumed method.`);
  }

  if (isTimeCorrect) {
    feedbackNotes.push(`✓ Incident Time Window Confirmed: Physical timestamps match your reconstructed timeline.`);
  } else {
    feedbackNotes.push(`✗ Timeline Inaccuracy: Key forensic timestamps do not corroborate this time window.`);
  }

  if (isFalseAlibiCorrect) {
    feedbackNotes.push(`✓ Fabricated Alibi Exposed: You shattered the false statement of the perpetrator.`);
  } else {
    feedbackNotes.push(`✗ False Alibi Missed: The real perpetrator's alibi contained an unaddressed lie.`);
  }

  feedbackNotes.push(`• Crucial Evidence Corroboration: ${matchedCrucial} of ${totalCrucial} key items correctly cited in your indictment.`);

  if (hintPenalty > 0) {
    feedbackNotes.push(`• Department Deduction: -${hintPenalty} points due to ${caseState.unlockedHintLevels.length} consultation hint(s) used.`);
  } else {
    feedbackNotes.push(`★ Flawless Deduction: No department hints used! +200 commendation rating.`);
  }

  return {
    isCulpritCorrect,
    isMotiveCorrect,
    isMethodCorrect,
    isTimeCorrect,
    isFalseAlibiCorrect,
    crucialEvidenceMatchedCount: matchedCrucial,
    totalCrucialEvidenceCount: totalCrucial,
    accuracyScore,
    pointsAwarded: totalEarned,
    performanceGrade,
    feedbackNotes,
    fullDebriefing: solution.fullCaseDebriefing
  };
}
