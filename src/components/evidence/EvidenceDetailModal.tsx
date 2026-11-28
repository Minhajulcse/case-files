import { useEffect, useState } from 'react';
import { ArrowRight, Check, Microscope, Pin, X } from 'lucide-react';
import { EvidenceItem } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { Dialog } from '../common/Dialog';
import { getLocalizedCategory } from '../../i18n';
import { sound } from '../../utils/audio';

export function EvidenceDetailModal({ evidence, onClose }: { evidence: EvidenceItem; onClose: () => void }) {
  const { activeCase, caseState, toggleMarkImportant, setInvestigationTab, language, t, getLoc, formatNum } = useGame();
  const [lab, setLab] = useState<'idle' | 'working' | 'done'>('idle');
  useEffect(() => {
    if (lab !== 'working') return;
    const timer = window.setTimeout(() => {
      setLab('done');
      sound.playClueFound();
    }, 350);
    return () => clearTimeout(timer);
  }, [lab]);
  if (!activeCase || !caseState) return null;
  const marked = caseState.markedImportantClueIds.includes(evidence.id);
  const bn = language === 'bn';
  const related = activeCase.suspects.filter(suspect =>
    caseState.presentedClueIds[suspect.id]?.includes(evidence.id) ||
    suspect.dialogueTree.some(line => line.revealsClueId === evidence.id && caseState.askedDialogueIds[suspect.id]?.includes(line.id))
  );
  return <Dialog label={getLoc(evidence.name)} onClose={onClose}>
    <article className="field-sheet">

      <header className="record-heading">
        <span className="eyebrow">
          {bn ? 'আলামত' : 'Exhibit'} {formatNum(String(activeCase.evidence.indexOf(evidence) + 1).padStart(2, '0'))}
          <i />
          {getLocalizedCategory(evidence.category, language)}
        </span>

        <button className="icon-tool" onClick={onClose} aria-label={t('closeBtn')}><X /></button>
      </header>

      <div className="sheet-body">
        <h2>{getLoc(evidence.name)}</h2>
        <span className="place-line">{getLoc(evidence.discoveryLocation)}</span>

        <p>{getLoc(evidence.description)}</p>
        <div className="field-observation">
          <h3>{bn ? 'খোলা প্রশ্ন' : 'Open question'}</h3>
          <p>{getLoc(evidence.relevance)}</p>
        </div>

        <h3>{t('labObservations')}</h3>
        <ul>{evidence.details.map((d, i) => <li key={i}>{getLoc(d)}</li>)}</ul>

        {evidence.forensicReport && <div className="lab-review">
          <button
            className="minor-action"
            disabled={lab !== 'idle'}
            onClick={() => {
              sound.playTypewriter();
              setLab('working');
            }}>

            {lab === 'done' ? <Check size={16} /> : <Microscope size={16} />}

            {lab === 'idle' ? (bn ? 'পরীক্ষার নথি খুলুন' : 'Examine lab record') : lab === 'working' ? (bn ? 'পরীক্ষা চলছে…' : 'Examining…') : (bn ? 'যাচাই করা হয়েছে' : 'Record examined')}

          </button>
          <p aria-live="polite">{lab === 'done' && getLoc(evidence.forensicReport.labSummary)}</p>
        </div>}

        {!!related.length && <div>
          <h3>{bn ? 'জিজ্ঞাসাবাদের সূত্র' : 'Interview cross-references'}</h3>
          <p>{related.map(s => getLoc(s.name)).join(' · ')}</p>
        </div>}

      </div>
      <footer className="sheet-actions">
        <button className="minor-action" aria-pressed={marked} onClick={() => toggleMarkImportant(evidence.id)}>
          <Pin size={15} />
          {marked ? t('unmarkCrucial') : t('markCrucial')}
        </button>

        <button className="gold-action" onClick={() => {
          onClose();
          setInvestigationTab('board');
        }}>
          {t('connectOnBoard')}
          <ArrowRight size={16} />
        </button>
      </footer>

    </article>
  </Dialog>;
}
