import { Fingerprint, FolderOpen, LayoutDashboard, Settings2, Shield } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { LanguageToggle } from './LanguageToggle';

export function BureauHeader({ archive = false, onProfile, onSettings }: {
  archive?: boolean; onProfile?: () => void; onSettings?: () => void;
}) {
  const { setCurrentView, language, t } = useGame();
  const bn = language === 'bn';
  return <header className="bureau-header">
    <div className="bureau-bar">

      <button
        className="bureau-brand"
        onClick={() => setCurrentView('menu')}
        aria-label={bn ? 'প্রধান মেনু' : 'Case Files home'}>

        <span className="bureau-seal"><Fingerprint size={26} strokeWidth={1.6} /></span>

        <span className="wordmark">CASE FILES
          <span className="wordmark-sub">{bn ? 'প্রধান অপরাধ শাখা' : 'Major Crimes Division'}</span>
        </span>

      </button>

      <nav className="desk-nav" aria-label={bn ? 'প্রধান বিভাগ' : 'Department'}>

        <button aria-current={!archive ? 'page' : undefined} onClick={() => setCurrentView('menu')}>
          <LayoutDashboard />
          {bn ? 'তদন্ত ডেস্ক' : 'Investigation desk'}
        </button>

        <button aria-current={archive ? 'page' : undefined} onClick={() => setCurrentView('cases')}>
          <FolderOpen />
          {bn ? 'মামলার নথি' : 'Case archive'}
        </button>

      </nav>

      <div className="bureau-tools">
        <LanguageToggle />

        {onSettings && <button
          className="icon-tool"
          aria-label={t('settingsAudio')}
          title={t('settingsAudio')}
          onClick={onSettings}>
          <Settings2 />
        </button>}

        {onProfile && <button
          className="icon-tool profile-tool"
          aria-label={t('detectiveProfile')}
          title={t('detectiveProfile')}
          onClick={onProfile}>
          <Shield />
        </button>}

      </div>

    </div>
  </header>;
}
