import { Award, ArrowRight, RotateCcw } from 'lucide-react';
import { FinalReportEvaluation, CaseData } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { getLocalizedRank } from '../../i18n';
import { Dialog } from '../common/Dialog';

export function CaseSolvedModal({ isOpen, evaluation, activeCase, onClose }: { isOpen: boolean; evaluation: FinalReportEvaluation | null; activeCase: CaseData; onClose: () => void }) {
  const { setCurrentView, profile, language, t, formatNum, getLoc } = useGame();
  if (!isOpen || !evaluation) return null;
  const accepted = evaluation.accepted ?? true; // Previously completed files retain their original review.
  const heading = accepted ? t('caseClosedVerdict') : t('insufficientEvidenceVerdict');
  return <Dialog label={heading} onClose={onClose}>
    <article className="field-sheet verdict-sheet">

      <div className="sheet-body">
        <div className="eyebrow">
          <Award size={17} />
          {formatNum(activeCase.caseNumber)}
        </div>

        <span className={accepted ? 'rubber-stamp-green' : 'rubber-stamp'}>{heading}</span>

        <h2>{getLoc(activeCase.title)}</h2>

        {accepted && <div className="verdict-metrics">
          <div>
            {t('gradeLabel')}
            <b>{evaluation.performanceGrade}</b>
          </div>

          <div>
            {t('accuracyRating')}
            <b>
              {formatNum(evaluation.accuracyScore)}%
            </b>
          </div>
          <div>
            {t('investigationPoints')}
            <b>+
              {formatNum(evaluation.pointsAwarded)}
            </b>
          </div>
        </div>}

        {evaluation.feedbackNotes.map((note, i) => <p key={i}>{getLoc(note)}</p>)}

        {accepted && <><h3>{t('canonicalDebriefing')}</h3><p className="whitespace-pre-line">{getLoc(evaluation.fullDebriefing)}</p><small>{getLocalizedRank(profile.rank, language)}</small></>}

      </div>
      <footer className="sheet-actions">
        <button onClick={onClose} className="minor-action">
          <RotateCcw size={15} />
          {t('reviewInvestigationBtn')}
        </button>

        {accepted && <button className="gold-action" onClick={() => setCurrentView('cases')}>
          {t('cases')}
          <ArrowRight size={16} />
        </button>}
      </footer>

    </article>
  </Dialog>;
}
