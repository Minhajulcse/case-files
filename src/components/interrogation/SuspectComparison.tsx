import { useState } from 'react';
import { ArrowLeftRight, X } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { Dialog } from '../common/Dialog';

export function SuspectComparison({ initialId, onClose }: { initialId: string; onClose: () => void }) {
  const { activeCase, caseState, t, getLoc, formatNum, language } = useGame();
  const suspects = activeCase!.suspects;
  const [left, setLeft] = useState(initialId);
  const [right, setRight] = useState(suspects.find(s => s.id !== initialId)!.id);
  const bn = language === 'bn';
  const title = bn ? 'বয়ান তুলনা' : 'Compare statements';
  return <Dialog label={title} onClose={onClose}>
    <article className="compare-sheet">

      <header className="compare-title">
        <ArrowLeftRight size={20} />
        <h2>{title}</h2>
        <button aria-label={t('closeBtn')} className="icon-tool" onClick={onClose}><X /></button>
      </header>

      <div className="compare-grid">
        {[left, right].map((id, i) => {
          const suspect = suspects.find(s => s.id === id)!;
          const asked = caseState!.askedDialogueIds[id] ?? [];
          return <section key={i}>
            <label>
              <span className="lab-label">
                {bn ? 'সন্দেহভাজন' : 'Suspect'} {formatNum(i + 1)}
              </span>

              <select value={id} onChange={e => i ? setRight(e.target.value) : setLeft(e.target.value)}>

                {suspects.map(s => <option key={s.id} value={s.id} disabled={s.id === (i ? left : right)}>{getLoc(s.name)}</option>)}

              </select>
            </label>
            <h3>{t('statedAlibi')}</h3>
            <p>{getLoc(suspect.alibi)}</p>

            <h3>{t('potentialMotive')}</h3>
            <p>{getLoc(suspect.motive)}</p>

            <h3>{t('transcriptLog')}</h3>
            {asked.length ? suspect.dialogueTree.filter(d => asked.includes(d.id)).map(d => <blockquote key={d.id}>{getLoc(d.response)}</blockquote>) : <p>{t('noQuestionsYet')}</p>}

            {(caseState!.presentedClueIds[id] ?? []).map(clueId => {
              const reaction = suspect.evidenceReactions.find(r => r.evidenceId === clueId);
              return reaction && <blockquote key={clueId}>
                <strong>{getLoc(activeCase!.evidence.find(e => e.id === clueId)?.name)}</strong>
                <br />
                {getLoc(reaction.reactionText)}
              </blockquote>;
            })}

          </section>;
        })}
      </div>
    </article>
  </Dialog>;
}
