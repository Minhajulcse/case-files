import { ArrowLeft, ArrowRight, Check, Clock3, FileText, LockKeyhole, MapPin, X } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { PLAYABLE_CASE_ID } from '../../data/cases';
import type { CaseData } from '../../types/game';
import { getLocalizedBadge, getLocalizedDifficulty } from '../../i18n';
import { BureauHeader } from '../common/BureauHeader';
import { CaseArtwork } from '../common/CaseArtwork';
import { Dialog } from '../common/Dialog';
import { sound } from '../../utils/audio';

export function CaseBrief({ file, onClose }: { file: CaseData; onClose: () => void }) {
  const { startCase, language, getLoc, formatNum, t } = useGame();
  const bn = language === 'bn';
  return <Dialog label={bn ? 'মামলার পরিচিতি' : 'Case briefing'} onClose={onClose}>

    <article className="brief-sheet">

      <div className="brief-image">
        <CaseArtwork file={file} eager />
        <button className="icon-tool" onClick={onClose} aria-label={t('closeBtn')}><X /></button>
      </div>

      <div className="sheet-body">
        <div className="eyebrow">
          {formatNum(file.caseNumber)}
          <i />
          {getLocalizedBadge(file.badge, language)}
        </div>

        <h2>{getLoc(file.title)}</h2>
        <p className="place-line">
          <MapPin size={15} />
          {getLoc(file.location)}
        </p>

        <dl className="brief-meta">

          <div>
            <dt>{t('targetVictim')}</dt>
            <dd>{getLoc(file.victimOrSubject)}</dd>
          </div>

          <div>
            <dt>{t('incidentDate')}</dt>
            <dd>{getLoc(file.incidentDate)}</dd>
          </div>

        </dl>
        <p>{getLoc(file.synopsis)}</p>

        <h3>{bn ? 'তদন্তের নির্দেশ' : 'Briefing from the chief'}</h3>
        <p>{getLoc(file.briefing.chiefMemo)}</p>

        <h3>{t('objectives')}</h3>
        <ul>{file.briefing.keyObjectives.map((o, i) => <li key={i}>{getLoc(o)}</li>)}</ul>

      </div>

      <footer className="sheet-actions">
        <button className="minor-action" onClick={onClose}>{t('closeBtn')}</button>

        <button className="gold-action" onClick={() => startCase(file.id)}>
          {bn ? 'ঘটনাস্থলে প্রবেশ' : 'Enter crime scene'}
          <ArrowRight size={17} />
        </button>
      </footer>

    </article>

  </Dialog>;
}

export function CaseCards({ onSelect }: { onSelect?: (file: CaseData) => void }) {
  const { allCases, profile, lastActiveCaseId, startCase, formatNum, getLoc, language, t } = useGame();
  const bn = language === 'bn';
  const openFile = (file: CaseData) => {
    if (onSelect) {
      sound.playPaper();
      onSelect(file);
    } else {
      startCase(file.id);
    }
  };
  return <div className="case-grid">
    {allCases.map(file => {
      const playable = file.id === PLAYABLE_CASE_ID;
      const solved = profile.completedCaseIds.includes(file.id);
      return <button key={file.id} type="button" className="file-card" disabled={!playable}
        onClick={playable ? () => openFile(file) : undefined}>

        <div className="file-still">
          <CaseArtwork file={file} />
          <span className="file-number">{formatNum(file.caseNumber)}</span>

          <span className={'file-status' + (playable && solved ? ' complete' : '')}>
            {playable ? <>
              {solved ? <Check size={12} /> : <i />}
              {solved ? t('solved') : file.id === lastActiveCaseId ? (bn ? 'চলমান' : 'In progress') : (bn ? 'খোলা' : 'Open')}
            </> : <>
              <span lang="en" aria-hidden={bn || undefined}>COMING SOON</span>
              {bn && <span className="sr-only">শীঘ্রই আসছে</span>}
            </>}
          </span>
        </div>

        <div className="file-summary">
          <div className="eyebrow">{getLocalizedBadge(file.badge, language)}</div>

          <div className="file-title">
            <h3>{getLoc(file.title)}</h3>
            {playable ? <ArrowRight size={18} /> : <LockKeyhole size={16} aria-hidden="true" />}
          </div>

          <p>{getLoc(file.site)}</p>

          <div className="file-meta">
            <span>
              <Clock3 />
              {formatNum(file.estimatedTime.replace(' mins', ''))} {bn ? 'মিনিট' : 'min'}
            </span>

            <span>{getLocalizedDifficulty(file.difficulty, language)}</span>
          </div>

          {solved && <small>
            {formatNum(profile.caseHighScores[file.id] ?? 0)} {t('pts')}
          </small>}

        </div>
      </button>;
    })}
  </div>;
}

export function CaseSelect() {
  const { language, setCurrentView, allCases, formatNum } = useGame();
  const bn = language === 'bn';
  return <div className="desk-page">
    <BureauHeader archive />

    <main className="desk-wrap archive-page">
      <button className="back-link" onClick={() => setCurrentView('menu')}>
        <ArrowLeft size={16} />
        {bn ? 'তদন্ত ডেস্ক' : 'Investigation desk'}
      </button>

      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <FileText size={14} />
            {bn ? 'মহানগর পুলিশ' : 'Metropolitan Police'}
          </div>
          <h1>{bn ? 'মামলার নথি' : 'Case archive'}</h1>
        </div>

        <span className="archive-count">
          {formatNum(allCases.length)}{bn ? 'টি নথি' : ' case files'}
        </span>
      </div>

      <CaseCards />

    </main>

  </div>;
}
