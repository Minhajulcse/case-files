import type { ActiveCaseState, CanonConnection, CaseData, FinalReportAnswers, FinalReportEvaluation, UserConnection } from '../types/game';

export function sameLink(a: Pick<UserConnection, 'sourceId' | 'targetId'>, b: Pick<CanonConnection, 'sourceId' | 'targetId'>) {
  return (a.sourceId === b.sourceId && a.targetId === b.targetId) || (a.sourceId === b.targetId && a.targetId === b.sourceId);
}

export function hasLinkSources(link: CanonConnection, discovered: readonly string[]) {
  return (link.requiresEvidenceIds ?? []).every(id => discovered.includes(id));
}

export function reviewInquiries(file: CaseData, state: ActiveCaseState, citations: readonly string[] = []) {
  return file.deductions.map(inquiry => {
    const acceptedIds = [inquiry.connectionId, ...(inquiry.alternativeConnectionIds ?? [])];
    const pairs = file.canonConnections.filter(c => acceptedIds.includes(c.id));
    const available = inquiry.evidenceIds.every(id => state.discoveredEvidenceIds.includes(id));
    const linked = pairs.some(pair => state.userConnections.some(link => sameLink(link, pair)));
    const cited = available && inquiry.evidenceIds.every(id => citations.includes(id));
    return { inquiry, available, linked, cited };
  });
}

export function evaluateFinalDeduction(file: CaseData, answers: FinalReportAnswers, state: ActiveCaseState): FinalReportEvaluation {
  const s = file.solution;
  const isCulpritCorrect = answers.culpritId === s.culpritId;
  const isMotiveCorrect = answers.motiveId === s.motiveId;
  const isMethodCorrect = answers.methodId === s.methodId;
  const isTimeCorrect = answers.timeId === s.timeId;
  const isFalseAlibiCorrect = answers.falseAlibiSuspectId === s.falseAlibiSuspectId;
  const citations = new Set(answers.crucialEvidenceIds.filter(id => state.discoveredEvidenceIds.includes(id)));
  const matched = s.crucialEvidenceIds.filter(id => citations.has(id)).length;
  const inquiries = reviewInquiries(file, state, [...citations]);
  const accepted = isCulpritCorrect && isMotiveCorrect && isMethodCorrect && isTimeCorrect && isFalseAlibiCorrect &&
    inquiries.every(line => line.cited && line.linked);
  // Requiring a focused citation list makes adding every locker card a poor report.
  const precision = citations.size ? matched / citations.size : 0;
  const accuracyScore = 35 * Number(isCulpritCorrect) + 15 * Number(isMotiveCorrect) + 20 * Number(isMethodCorrect) + 10 * Number(isTimeCorrect) +
    10 * Number(isFalseAlibiCorrect) + Math.round(10 * matched / s.crucialEvidenceIds.length * precision);
  const base = file.difficulty === 'Master' ? 1800 : file.difficulty === 'Hard' ? 1400 : 1000;
  const cost = file.hints.filter(h => state.unlockedHintLevels.includes(h.level)).reduce((sum, h) => sum + h.cost, 0);
  const connections = file.canonConnections.filter(c => hasLinkSources(c, state.discoveredEvidenceIds) && state.userConnections.some(u => sameLink(u, c))).length;
  const pointsAwarded = accepted ? Math.round(base * accuracyScore / 100) + state.discoveredEvidenceIds.length * 20 + connections * 35 - cost : 0;
  let performanceGrade: FinalReportEvaluation['performanceGrade'] = 'F';
  if (accepted) {
    if (!cost && precision === 1) performanceGrade = 'S+';
    else if (cost < 150) performanceGrade = 'A';
    else if (cost < 350) performanceGrade = 'B';
    else performanceGrade = 'C';
  }
  const feedbackNotes = accepted ? [
    {
      en: `The report substantiates all ${inquiries.length} lines of inquiry with recorded links and exhibits.`,
      bn: `নথিভুক্ত সংযোগ ও আলামতে তদন্তের ${inquiries.length}টি প্রশ্নের সমর্থন মিলেছে।`
    },
    {
      en: `Verified exhibits cited: ${matched}. Consultation cost: ${cost} points.`,
      bn: `যাচাইকৃত উদ্ধৃত আলামত: ${matched}। পরামর্শের খরচ: ${cost} পয়েন্ট।`
    }
  ] : [{
    en: 'The account does not fit the filed evidence. Recheck the statements, the timing and the exhibits cited for each board inquiry.',
    bn: 'বয়ানের সঙ্গে দাখিল করা প্রমাণ মেলেনি। বিবৃতি, সময় ও বোর্ডের প্রতি প্রশ্নের উদ্ধৃত আলামত আবার দেখুন।'
  }];
  return {
    accepted,
    isCulpritCorrect,
    isMotiveCorrect,
    isMethodCorrect,
    isTimeCorrect,
    isFalseAlibiCorrect,
    crucialEvidenceMatchedCount: matched,
    totalCrucialEvidenceCount: s.crucialEvidenceIds.length,
    accuracyScore,
    pointsAwarded,
    performanceGrade,
    feedbackNotes,
    fullDebriefing: accepted ? s.fullCaseDebriefing : ''
  };
}
