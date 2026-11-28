import { useState } from 'react';
import { ArrowRight, BookOpen, ChevronRight, Fingerprint, Folders, MapPin, ScanLine, ShieldCheck, Users } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import type { CaseData } from '../../types/game';
import { getLocalizedBadge, getLocalizedRank } from '../../i18n';
import { CaseCards, CaseBrief } from '../caseselect/CaseSelect';
import { CaseArtwork } from '../common/CaseArtwork';
import { BureauHeader } from '../common/BureauHeader';
import { ProfileModal } from './ProfileModal';
import { SettingsModal } from './SettingsModal';
import { CreditsModal } from './CreditsModal';

export function MainMenu() {
  const { profile, allCases, lastActiveCaseId, resumeLastCase, getLoc, formatNum, language, t, setCurrentView } = useGame();
  const [panel, setPanel] = useState<'profile' | 'settings' | 'credits' | null>(null);
  const [brief, setBrief] = useState<CaseData | null>(null);
  const bn = language === 'bn';
  const featured = allCases.find(c => c.id === lastActiveCaseId) ?? allCases[0];
  const ongoing = featured.id === lastActiveCaseId;
  const closed = profile.completedCaseIds.includes(featured.id);
  return <div className="desk-page">

    <BureauHeader onProfile={() => setPanel('profile')} onSettings={() => setPanel('settings')} />

    <main className="desk-wrap">

      <div className="desk-title">
        <div>
          <div className="eyebrow">
            <span className="tiny-rule" />
            {bn ? 'মহানগর পুলিশ' : 'Metropolitan Police'}
          </div>

          <h1>{bn ? 'তদন্ত ডেস্ক' : 'Investigation desk'}</h1>
        </div>

        <button className="officer" onClick={() => setPanel('profile')}>
          <ShieldCheck size={19} />
          <span>
            {profile.name}
            <small>{getLocalizedRank(profile.rank, language)}</small>
          </span>
        </button>

      </div>

      <section className="feature">

        <CaseArtwork file={featured} eager className="feature-art" />
        <div className="feature-shade" />

        <div className="feature-content">
          <div className="feature-tag">
            <span className="status-dot" />
            {closed ? t('solved') : ongoing ? (bn ? 'চলমান তদন্ত' : 'Current investigation') : (bn ? 'নির্বাচিত তদন্ত' : 'Featured investigation')}
          </div>

          <div className="feature-index">
            {formatNum(featured.caseNumber)}
            <i />
            {getLocalizedBadge(featured.badge, language)}
          </div>

          <h2>{getLoc(featured.title)}</h2>

          <p className="feature-subtitle">{getLoc(featured.subtitle)}</p>

          <div className="feature-meta">
            <span>
              <MapPin />
              {getLoc(featured.site)}
            </span>
            <span>
              <Users />
              {formatNum(featured.suspects.length)} {bn ? 'সন্দেহভাজন' : 'suspects'}
            </span>
          </div>

          <button className="gold-action" onClick={() => ongoing ? resumeLastCase() : setBrief(featured)}>
            {closed ? (bn ? 'মামলার নথি দেখুন' : 'Review case file') : ongoing ? t('continueInvestigation') : (bn ? 'মামলার বিবরণ' : 'Open case file')}
            <ArrowRight size={17} />
          </button>

        </div>

        <div className="photo-caption">
          <ScanLine size={15} />
          {getLoc(featured.crimeScene.roomTitle)}
        </div>

      </section>

      <section className="archive-section">
        <div className="section-heading">
          <h2>
            <Folders />
            {bn ? 'মামলার নথি' : 'Case archive'}
          </h2>

          <button className="archive-link" onClick={() => setCurrentView('cases')}>
            {bn ? 'সব নথি' : 'View all files'}
            <ChevronRight size={16} />
          </button>
        </div>

        <CaseCards onSelect={setBrief} />

      </section>

    </main>

    <footer className="desk-footer">
      <span>
        <Fingerprint size={17} />
        {bn ? 'সমাপ্ত মামলা' : 'Cases closed'}
        <b>
          {formatNum(profile.completedCaseIds.length)} /
          {formatNum(allCases.length)}
        </b>
      </span>

      <button onClick={() => setPanel('credits')}>
        <BookOpen size={14} />
        {t('productionCredits')}
      </button>
    </footer>

    {brief && <CaseBrief file={brief} onClose={() => setBrief(null)} />}

    {panel === 'profile' && <ProfileModal isOpen onClose={() => setPanel(null)} />}

    {panel === 'settings' && <SettingsModal isOpen onClose={() => setPanel(null)} />}

    {panel === 'credits' && <CreditsModal isOpen onClose={() => setPanel(null)} />}

  </div>;
}
