import { ArrowRight, BookmarkPlus, Check, ScanLine, X } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { HotspotItem, EvidenceItem } from '../../types/game';
import { getLocalizedCategory } from '../../i18n';
import { plateUrl } from '../common/CaseArtwork';
import { Dialog } from '../common/Dialog';

export function SceneHotspotModal({ hotspot, evidence, isAlreadyDiscovered, onClose, onAddEvidence }: {
  hotspot: HotspotItem; evidence: EvidenceItem; isAlreadyDiscovered: boolean; onClose: () => void; onAddEvidence: () => void;
}) {
  const { language, t, getLoc, setInvestigationTab, setSelectedClueForInspection } = useGame();
  return <Dialog label={getLoc(hotspot.name)} onClose={onClose}>
    <article className="field-sheet">

      <div
        className="inspection-crop"
        style={{ backgroundImage: `url(${plateUrl(hotspot.plate)})`, backgroundPosition: `${hotspot.x}% ${hotspot.y}%` }}>

        <span className="inspection-tag">
          <ScanLine size={15} />
          {t('crimeSceneInspection')}
        </span>

        <button className="icon-tool" aria-label={t('closeBtn')} onClick={onClose}><X /></button>

      </div>

      <div className="sheet-body">
        <div className="eyebrow">{getLocalizedCategory(evidence.category, language)}</div>
        <h2>{getLoc(hotspot.name)}</h2>

        <p>{getLoc(hotspot.description)}</p>
        <div className="field-observation">
          <h3>{t('forensicFieldNote')}</h3>
          <p>{getLoc(hotspot.discoveryNote)}</p>
        </div>

        <h3>{getLoc(evidence.name)}</h3>
        <p>{getLoc(evidence.description)}</p>

        {isAlreadyDiscovered && <span className="place-line">
          <Check size={15} />
          {t('loggedInLocker')}
        </span>}

      </div>
      <footer className="sheet-actions">
        <button className="minor-action" onClick={onClose}>{t('returnToScene')}</button>

        {isAlreadyDiscovered ? <button
          className="gold-action"
          onClick={() => {
            setSelectedClueForInspection(evidence.id);
            onClose();
            setInvestigationTab('evidence');
          }}>
          {t('examineInLocker')}
          <ArrowRight size={16} />
        </button>
          : <button className="gold-action" onClick={onAddEvidence}>
            <BookmarkPlus size={16} />
            {t('collectEvidence')}
          </button>}
      </footer>

    </article>
  </Dialog>;
}
