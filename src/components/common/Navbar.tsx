import React, { useState } from 'react';
import {
  Search,
  FolderOpen,
  Users,
  Network,
  Clock,
  FileCheck2,
  BookOpen,
  HelpCircle,
  ArrowLeft,
  Shield,
  FileText
} from 'lucide-react';
import { useGame, InvestigationTab } from '../../context/GameContext';
import { SoundToggle } from './SoundToggle';
import { LanguageToggle } from './LanguageToggle';
import { NotebookModal } from './NotebookModal';
import { HintModal } from '../hints/HintModal';
import { getLocalizedRank, getLocalizedBadge } from '../../i18n';

export const Navbar: React.FC = () => {
  const {
    activeCase,
    caseState,
    investigationTab,
    setInvestigationTab,
    setCurrentView,
    profile,
    language,
    t,
    getLoc,
    formatNum
  } = useGame();

  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);

  if (!activeCase || !caseState) return null;

  const totalClues = activeCase.evidence.length;
  const discoveredClues = caseState.discoveredEvidenceIds.length;
  const clueProgress = Math.round((discoveredClues / Math.max(1, totalClues)) * 100);

  const tabs: { id: InvestigationTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'scene', label: t('crimeScene'), icon: <Search className="w-3.5 h-3.5" /> },
    {
      id: 'evidence',
      label: t('evidenceLocker'),
      icon: <FolderOpen className="w-3.5 h-3.5" />,
      badge: discoveredClues
    },
    { id: 'interrogation', label: t('interrogation'), icon: <Users className="w-3.5 h-3.5" /> },
    {
      id: 'board',
      label: t('evidenceBoard'),
      icon: <Network className="w-3.5 h-3.5" />,
      badge: caseState.userConnections.length
    },
    { id: 'timeline', label: t('timeline'), icon: <Clock className="w-3.5 h-3.5" /> },
    { id: 'report', label: t('finalIndictment'), icon: <FileCheck2 className="w-3.5 h-3.5" /> }
  ];

  return (
    <header className="sticky top-0 z-40 bg-noir-950/98 border-b border-noir-800 backdrop-blur-md select-none font-mono">
      {/* Top Bar: Case Dossier Title & Detective Metrics */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between border-b border-noir-900/80">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentView('cases')}
            title="Return to Case Files Archive"
            className="flex items-center space-x-1.5 px-2.5 py-1 bg-noir-900 hover:bg-noir-850 border border-noir-750 rounded text-xs text-noir-300 hover:text-white transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('cases')}</span>
          </button>

          <div className="h-4 w-px bg-noir-800" />

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-blood-400 uppercase">
                {activeCase.caseNumber}
              </span>
              <h1 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-noir-100">
                {getLoc(activeCase.title)}
              </h1>
              <span className="hidden md:inline-block px-1.5 py-0.2 bg-blood-950 border border-blood-800 text-[10px] text-blood-300 font-mono rounded uppercase">
                {getLocalizedBadge(activeCase.badge, language)}
              </span>
            </div>
            <p className="text-[11px] text-noir-400 hidden lg:block truncate max-w-md">
              {getLoc(activeCase.location)}
            </p>
          </div>
        </div>

        {/* Right Info: Language, Progress, Rank, Hints, Notebook, Audio */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Language Toggle Switch */}
          <LanguageToggle variant="compact" />

          {/* Progress Gauge */}
          <div className="hidden sm:flex flex-col items-end text-right">
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-noir-400">
              <span>{t('cluesFound')}:</span>
              <span className="text-brass-400 font-bold">
                {formatNum(discoveredClues)}/{formatNum(totalClues)}
              </span>
            </div>
            <div className="w-20 bg-noir-850 h-1.5 rounded-full overflow-hidden mt-0.5 border border-noir-750">
              <div
                className="bg-blood-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${clueProgress}%` }}
              />
            </div>
          </div>

          {/* Detective Rank Pill */}
          <div
            onClick={() => setCurrentView('profile')}
            className="cursor-pointer hidden md:flex items-center space-x-1.5 bg-noir-900 border border-noir-750 rounded px-2.5 py-1 text-xs font-mono text-noir-300 hover:border-brass-600/50 transition-colors"
            title={t('detectiveProfile')}
          >
            <Shield className="w-3.5 h-3.5 text-brass-400" />
            <span className="text-noir-200">{getLocalizedRank(profile.rank, language)}</span>
            <span className="text-[10px] text-noir-500">({formatNum(profile.totalPoints)} {t('pts')})</span>
          </div>

          {/* Hint System Button */}
          <button
            onClick={() => setIsHintOpen(true)}
            className="flex items-center space-x-1 px-2.5 py-1 bg-noir-900 hover:bg-noir-850 border border-noir-750 hover:border-brass-600/50 rounded text-xs font-mono text-brass-400 transition-colors"
            title="Consult Department Clues"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('hints')}</span>
            {caseState.unlockedHintLevels.length > 0 && (
              <span className="text-[10px] bg-blood-900 text-blood-200 px-1 rounded">
                {formatNum(caseState.unlockedHintLevels.length)}
              </span>
            )}
          </button>

          {/* Notebook Button */}
          <button
            onClick={() => setIsNotebookOpen(true)}
            className="flex items-center space-x-1 px-2.5 py-1 bg-noir-900 hover:bg-noir-850 border border-noir-750 rounded text-xs font-mono text-noir-200 transition-colors"
            title={t('notebookTitle')}
          >
            <BookOpen className="w-3.5 h-3.5 text-brass-400" />
            <span className="hidden sm:inline">{t('notebook')}</span>
          </button>

          {/* Audio Synthesizer Controls */}
          <SoundToggle />
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center overflow-x-auto scrollbar-none py-1 gap-1 sm:gap-2">
        {tabs.map(tab => {
          const isActive = investigationTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setInvestigationTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-blood-900/90 border border-blood-700 text-white font-bold shadow-sm'
                  : 'text-noir-400 hover:text-noir-200 hover:bg-noir-900'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge !== undefined && tab.badge > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-blood-600 text-white' : 'bg-noir-800 text-noir-300'
                  }`}
                >
                  {formatNum(tab.badge)}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Modals */}
      <NotebookModal isOpen={isNotebookOpen} onClose={() => setIsNotebookOpen(false)} />
      <HintModal isOpen={isHintOpen} onClose={() => setIsHintOpen(false)} />
    </header>
  );
};
