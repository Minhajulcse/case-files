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

    if (caseData.id === 'case-001') {
      if (answers.culpritId === 'suspect-01-julian') {
        feedbackNotes.push({
          en: `• Indictment Feedback (Arman Haque Chowdhury): Arman had high debts and quarreled violently with Mahmudul, but forensic soot analysis proves the codicil was thrown into the fire at 17:00, and the muddy print beneath the window was a petite size 6. He stole the signet ring to pawn it, but was not the poisoner.`,
          bn: `• অভিযোগপত্র পর্যালোচনা (আরমান হক চৌধুরী): দেনার দায়ে আরমানের সাথে মাহমুদুল হকের উত্তপ্ত বিতর্ক হয়েছিল, কিন্তু ফায়ারপ্লেসের ছাইয়ের স্তর প্রমাণ করে উইলটি বিকেল ৫টাতেই পোড়ানো হয়েছিল। এছাড়া জানালার নিচের জুতার ছাপটি ছিল ৬ সাইজের (মেয়েলি জুতা)। সে আংটি চুরি করেছিল কিন্তু বিষপ্রয়োগের সাথে জড়িত ছিল না।`
        });
      } else if (answers.culpritId === 'suspect-03-finch') {
        feedbackNotes.push({
          en: `• Indictment Feedback (Dr. Farhan Rahman): Dr. Farhan possessed advanced toxicology knowledge and feared disclosure of prescription irregularities, but the cyanide was commercial photographic toning reagent from a local PO box, not clinical pharmaceutical supplies.`,
          bn: `• অভিযোগপত্র পর্যালোচনা (ডা. ফারহান রহমান): ডা. ফারহানের বিষবিজ্ঞানের গভীর জ্ঞান ছিল এবং তিনি প্রেসক্রিপশন বিতর্ক নিয়ে শঙ্কিত ছিলেন, কিন্তু ব্যবহৃত সায়ানাইড কোনো হাসপাতালের ওষুধ ছিল না বরং স্থানীয় পোস্ট বক্স থেকে কেনা বাণিজ্যিক ফটোগ্রাফিক লবণ ছিল।`
        });
      } else if (answers.culpritId === 'suspect-04-beatrice') {
        feedbackNotes.push({
          en: `• Indictment Feedback (Shahana Begum): Shahana carried the evening drink tray from the kitchen, but her kitchen assistant corroborated her movements between 22:00 and 22:45, and she had no reason to rig the exterior window latch mechanism.`,
          bn: `• অভিযোগপত্র পর্যালোচনা (শাহানা বেগম): শাহানা পানীয়ের ট্রে আনলেও রান্নাঘরের সহকর্মী রাত ১০:০০ থেকে ১০:৪৫ পর্যন্ত তার উপস্থিতি নিশ্চিত করেছে এবং জানালার কার্নিশ দিয়ে সুতো টেনে পালানোর কোনো আলামত তার সাথে মেলেনি।`
        });
      } else if (answers.culpritId === 'suspect-05-marcus') {
        feedbackNotes.push({
          en: `• Indictment Feedback (Rashed Karim): Rashed Karim desperately wanted the ancient manuscript and lingered at the manor gates, but he wears size 11 shoes, incompatible with the slender size 6 footprint beneath the rigged bay window.`,
          bn: `• অভিযোগপত্র পর্যালোচনা (রাশেদ করিম): রাশেদ করিম প্রাচীন পাণ্ডুলিপি নিয়ে মরিয়া ছিল, তবে তার জুতার সাইজ ১১, যা জানালার নিচে পাওয়া ৬ সাইজের সরু পদচিহ্নের সাথে সম্পূর্ণ অসঙ্গতিপূর্ণ।`
        });
      }
    }
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
