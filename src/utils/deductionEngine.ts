import {
  CaseData,
  FinalReportAnswers,
  FinalReportEvaluation,
  ActiveCaseState,
  LocalizableText,
  getLocalized
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
  let accuracyPoints = 0;
  if (isCulpritCorrect) accuracyPoints += 35;
  if (isMotiveCorrect) accuracyPoints += 15;
  if (isMethodCorrect) accuracyPoints += 20;
  if (isTimeCorrect) accuracyPoints += 10;
  if (isFalseAlibiCorrect) accuracyPoints += 10;
  accuracyPoints += Math.round(crucialRatio * 10);

  const accuracyScore = Math.min(100, Math.max(0, accuracyPoints));

  // Points Calculation
  const basePoints = caseData.difficulty === 'Master' ? 1800 : caseData.difficulty === 'Hard' ? 1400 : 1000;
  const clueBonus = caseState.discoveredEvidenceIds.length * 20;
  const connectionsBonus = (caseState.userConnections.length) * 35;

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

  // Localized Feedback Notes
  const feedbackNotes: LocalizableText[] = [];

  const enCulprit = getLocalized(solution.culpritName, 'en');
  const bnCulprit = getLocalized(solution.culpritName, 'bn');

  if (isCulpritCorrect) {
    feedbackNotes.push({
      en: `✓ Primary Culprit Correct: You accurately identified ${enCulprit}.`,
      bn: `✓ মূল অপরাধী সঠিক: আপনি নির্ভুলভাবে ${bnCulprit}-কে শনাক্ত করেছেন।`
    });
  } else {
    feedbackNotes.push({
      en: `✗ Incorrect Culprit Identified: The evidence pointed to someone else.`,
      bn: `✗ ভুল অপরাধী শনাক্ত হয়েছে: সংগৃহীত প্রমাণ অন্য কারও দিকে ইঙ্গিত করছে।`
    });
  }

  if (isMotiveCorrect) {
    feedbackNotes.push({
      en: `✓ Motive Confirmed: Your theory aligns with the physical and financial records.`,
      bn: `✓ অপরাধের উদ্দেশ্য প্রমাণিত: আপনার যুক্তি আর্থিক ও শারীরিক প্রমাণের সাথে মিলেছে।`
    });
  } else {
    feedbackNotes.push({
      en: `✗ Flawed Motive: The suspect had a far more pressing and provable motivation.`,
      bn: `✗ উদ্দেশ্য অনুমান ভুল: অপরাধীর আরও গুরুতর ও প্রমাণিত উদ্দেশ্য বিদ্যমান ছিল।`
    });
  }

  if (isMethodCorrect) {
    feedbackNotes.push({
      en: `✓ Modus Operandi Verified: You deduced the exact mechanics of how the crime was executed.`,
      bn: `✓ অপরাধের কৌশল ও মোডাস অপারেন্ডি প্রমাণিত: অপরাধ সংঘটনের সঠিক উপায় আপনি বের করেছেন।`
    });
  } else {
    feedbackNotes.push({
      en: `✗ Inaccurate Modus Operandi: Physical evidence disproves your assumed method.`,
      bn: `✗ অপরাধের পদ্ধতি ভুল: শারীরিক আলামত আপনার অনুমান করা কৌশলকে নাকচ করে।`
    });
  }

  if (isTimeCorrect) {
    feedbackNotes.push({
      en: `✓ Incident Time Window Confirmed: Physical timestamps match your reconstructed timeline.`,
      bn: `✓ সময়রেখা নির্ভুল: শারীরিক আলামতের ঘড়ি ও সময় আপনার তদন্তের সাথে মিলে গেছে।`
    });
  } else {
    feedbackNotes.push({
      en: `✗ Timeline Inaccuracy: Key forensic timestamps do not corroborate this time window.`,
      bn: `✗ সময়রেখা অসঙ্গতিপূর্ণ: ফরেনসিক প্রমাণ এই সময়ের দাবির সাথে মেলে না।`
    });
  }

  if (isFalseAlibiCorrect) {
    feedbackNotes.push({
      en: `✓ Fabricated Alibi Exposed: You shattered the false statement of the perpetrator.`,
      bn: `✓ সাজানো অ্যালিবাই উন্মোচিত: অপরাধীর মিথ্যা অবস্থান ও বয়ান সফলভাবে খণ্ডন করেছেন।`
    });
  } else {
    feedbackNotes.push({
      en: `✗ False Alibi Missed: The real perpetrator's alibi contained an unaddressed lie.`,
      bn: `✗ মিথ্যা অ্যালিবাই ধরতে পারেননি: মূল অপরাধীর বয়ানে একটি উন্মোচনযোগ্য মিথ্যা ছিল।`
    });
  }

  feedbackNotes.push({
    en: `• Crucial Evidence Corroboration: ${matchedCrucial} of ${totalCrucial} key items correctly cited in your indictment.`,
    bn: `• মূল আলামতের সঠিকতা: অভিযোগপত্রে ${totalCrucial}-টির মধ্যে ${matchedCrucial}-টি মূল প্রমাণ সঠিকভাবে উদ্ধৃত হয়েছে।`
  });

  if (hintPenalty > 0) {
    feedbackNotes.push({
      en: `• Department Deduction: -${hintPenalty} points due to ${caseState.unlockedHintLevels.length} consultation hint(s) used.`,
      bn: `• বিভাগীয় পয়েন্ট কর্তন: ${caseState.unlockedHintLevels.length}টি ইঙ্গিত গ্রহণের কারণে -${hintPenalty} পয়েন্ট কর্তন করা হয়েছে।`
    });
  } else {
    feedbackNotes.push({
      en: `★ Flawless Deduction: No department hints used! +200 commendation rating.`,
      bn: `★ নিখুঁত তদন্ত: কোনো বিভাগীয় ইঙ্গিত ছাড়াই সমাধান! +২০০ বিশেষ সম্মাননা রেটিং।`
    });
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
