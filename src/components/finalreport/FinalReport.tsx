import { useState, type FormEvent } from 'react';
import { CheckCircle2, ClipboardCheck, Send } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import type { FinalReportAnswers, FinalReportEvaluation, LocalizableText } from '../../types/game';
import { CaseSolvedModal } from './CaseSolvedModal';
import { InquiryList } from '../evidenceboard/InquiryList';
import { reviewInquiries } from '../../utils/deductionEngine';

function Choice({ name, title, options, value, onChange }: {
  name: string; title: string; options: { id: string; label: LocalizableText }[]; value: string; onChange: (id: string) => void;
}) {
  const { getLoc } = useGame();
  return <fieldset className="report-section">
    <legend>{title}</legend>
    <div className="report-choices">

      {options.map(o => <label key={o.id} className={value === o.id ? 'checked' : ''}>
        <input name={name} type="radio" checked={value === o.id}
          onChange={() => onChange(o.id)} required />
        <span>{getLoc(o.label)}</span>
      </label>)}
    </div>
  </fieldset>;
}

const emptyAnswers: FinalReportAnswers = { culpritId: '', motiveId: '', methodId: '', timeId: '', crucialEvidenceIds: [], falseAlibiSuspectId: '', detectiveTheory: '' };

export function FinalReport() {
  const { activeCase, caseState, draftReport, submitFinalReport, language, t, getLoc, formatNum, setInvestigationTab } = useGame();
  const [answers, setAnswers] = useState<FinalReportAnswers>(caseState?.reportDraft ?? emptyAnswers);
  const [result, setResult] = useState<FinalReportEvaluation | null>(null);
  if (!activeCase || !caseState) return null;
  const bn = language === 'bn';
  const suspects = activeCase.suspects.map(s => ({ id: s.id, label: s.name }));
  const set = <K extends keyof FinalReportAnswers>(key: K, value: FinalReportAnswers[K]) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    draftReport(next);
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setResult(submitFinalReport(answers));
  };
  const progress = reviewInquiries(activeCase, caseState, answers.crucialEvidenceIds);
  const ready = progress.every(p => p.linked && p.cited);
  return <div className="workspace-wrap report-work">
    <div className="work-title">
      <div className="eyebrow">
        <ClipboardCheck size={14} />
        {formatNum(activeCase.caseNumber)}
      </div>

      <h2>{bn ? 'চূড়ান্ত অভিযোগ' : 'Final accusation'}</h2>
      <p>{getLoc(activeCase.briefing.chiefMemo)}</p>
    </div>

    {caseState.isCompleted && caseState.evaluation && <button className="minor-action" onClick={() => setResult(caseState.evaluation!)}>
      <CheckCircle2 size={16} />
      {t('reviewVerdictBtn')}
    </button>}

    <div className="report-layout">
      <form onSubmit={submit}>

        <Choice
          name="culprit"
          title={activeCase.id === 'case-002' ? (bn ? 'ঠিকানা ফাঁসের দায় কার?' : 'Who disclosed the protected address?') : t('q1Culprit')}
          options={suspects}
          value={answers.culpritId}
          onChange={v => set('culpritId', v)} />

        <Choice
          name="motive"
          title={t('q2Motive')}
          options={activeCase.solution.options.motives}
          value={answers.motiveId}
          onChange={v => set('motiveId', v)} />

        <Choice
          name="method"
          title={activeCase.id === 'case-002' ? (bn ? 'সাক্ষী কীভাবে বেরোলেন?' : 'How did the witness leave?') : t('q3Method')}
          options={activeCase.solution.options.methods}
          value={answers.methodId}
          onChange={v => set('methodId', v)} />

        <Choice
          name="time"
          title={activeCase.id === 'case-002' ? (bn ? 'সাক্ষী কখন বেরোলেন?' : 'When did the witness leave?') : t('q4Time')}
          options={activeCase.solution.options.times}
          value={answers.timeId}
          onChange={v => set('timeId', v)} />

        <fieldset className="report-section">
          <legend>{t('q5Evidence')}</legend>
          <p>{t('q5Desc')}</p>
          <div className="report-choices">
            {activeCase.evidence.filter(e => caseState.discoveredEvidenceIds.includes(e.id)).map(e =>
              <label key={e.id} className={answers.crucialEvidenceIds.includes(e.id) ? 'checked' : ''}>
                <input
                  type="checkbox"
                  checked={answers.crucialEvidenceIds.includes(e.id)}
                  onChange={event => set('crucialEvidenceIds', event.target.checked ? [...answers.crucialEvidenceIds, e.id] : answers.crucialEvidenceIds.filter(id => id !== e.id))} />
                {getLoc(e.name)}
              </label>)}
          </div>
        </fieldset>

        <Choice
          name="statement"
          title={activeCase.solution.statementQuestion ? getLoc(activeCase.solution.statementQuestion) :
            (bn ? 'কোন সাক্ষীর মূল বিবৃতি প্রমাণের সঙ্গে মেলে না?' : 'Whose account of the incident conflicts with the record?')}
          options={suspects}
          value={answers.falseAlibiSuspectId}
          onChange={v => set('falseAlibiSuspectId', v)} />

        <label className="theory-input">
          {t('detectiveTheoryLabel')}
          <textarea rows={3} value={answers.detectiveTheory} onChange={e => set('detectiveTheory', e.target.value)} />
        </label>

        <button type="submit" className="gold-action" disabled={!ready}>
          <Send size={15} />
          {t('deliverIndictmentBtn')}
        </button>

        {!ready && <p className="report-guidance">
          {bn ? 'দাখিলের আগে বোর্ডের তিন প্রশ্নে সংযোগ ও সহায়ক আলামত দিন।' : 'Document the three board inquiries and cite their supporting exhibits before filing.'}
        </p>}

      </form>
      <aside>
        <InquiryList citations={answers.crucialEvidenceIds} />
        <button className="minor-action" onClick={() => setInvestigationTab('board')}>{t('evidenceBoard')}</button>
      </aside>
    </div>

    {result && <CaseSolvedModal isOpen evaluation={result} activeCase={activeCase} onClose={() => setResult(null)} />}

  </div>;
}
