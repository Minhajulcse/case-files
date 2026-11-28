import { useState } from 'react';
import { ArrowLeft, BookOpen, Clock3, FileCheck2, FolderOpen, GitBranch, HelpCircle, Search, Settings2, Shield, Users } from 'lucide-react';
import { useGame, type InvestigationTab } from '../../context/GameContext';
import { NotebookModal } from './NotebookModal';
import { HintModal } from '../hints/HintModal';
import { ProfileModal } from '../mainmenu/ProfileModal';
import { SettingsModal } from '../mainmenu/SettingsModal';

export function Navbar() {
  const { activeCase, caseState, investigationTab, setInvestigationTab, setCurrentView, t, getLoc, formatNum, language } = useGame();
  const [panel, setPanel] = useState<'notes' | 'hints' | 'profile' | 'settings' | null>(null);
  if (!activeCase || !caseState) return null;
  const bn = language === 'bn';
  const tabs = [
    ['scene', t('crimeScene'), Search], ['evidence', t('evidenceLocker'), FolderOpen], ['interrogation', bn ? 'সন্দেহভাজন' : 'Suspects', Users],
    ['board', t('evidenceBoard'), GitBranch], ['timeline', t('timeline'), Clock3], ['report', bn ? 'অভিযোগ' : 'Accusation', FileCheck2]
  ] as const;
  return <header className="case-nav">
    <div className="case-nav-top">

      <button className="icon-tool" aria-label={t('cases')} onClick={() => setCurrentView('cases')}><ArrowLeft /></button>

      <div className="nav-file">
        <small>{formatNum(activeCase.caseNumber)}</small>
        <h1>{getLoc(activeCase.title)}</h1>
      </div>

      <span className="nav-logged">
        {t('evidenceLogged')}
        <b>
          {formatNum(caseState.discoveredEvidenceIds.length)} /
          {formatNum(activeCase.evidence.length)}
        </b>
      </span>

      <div className="case-tools">

        <button
          className="icon-tool"
          aria-label={t('notebookTitle')}
          title={t('notebookTitle')}
          onClick={() => setPanel('notes')}>
          <BookOpen />
        </button>

        <button className="icon-tool" aria-label={t('hints')} title={t('hints')} onClick={() => setPanel('hints')}><HelpCircle /></button>

        <button
          className="icon-tool"
          aria-label={t('settingsAudio')}
          title={t('settingsAudio')}
          onClick={() => setPanel('settings')}>
          <Settings2 />
        </button>

        <button
          className="icon-tool nav-profile"
          aria-label={t('detectiveProfile')}
          title={t('detectiveProfile')}
          onClick={() => setPanel('profile')}>
          <Shield />
        </button>

      </div>
    </div>

    <nav className="case-tabs" aria-label={bn ? 'তদন্ত' : 'Investigation'}>
      {tabs.map(([id, label, Icon]) =>
        <button
          key={id}
          aria-current={id === investigationTab ? 'page' : undefined}
          onClick={() => setInvestigationTab(id as InvestigationTab)}>
          <Icon />
          {label}
        </button>)}
    </nav>

    {panel === 'notes' && <NotebookModal isOpen onClose={() => setPanel(null)} />}

    {panel === 'hints' && <HintModal isOpen onClose={() => setPanel(null)} />}

    {panel === 'settings' && <SettingsModal isOpen onClose={() => setPanel(null)} />}

    {panel === 'profile' && <ProfileModal isOpen onClose={() => setPanel(null)} />}

  </header>;
}
