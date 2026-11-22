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
  Award
} from 'lucide-react';
import { useGame, InvestigationTab } from '../../context/GameContext';
import { SoundToggle } from './SoundToggle';
import { NotebookModal } from './NotebookModal';
import { HintModal } from '../hints/HintModal';

export const Navbar: React.FC = () => {
  const {
    activeCase,
    caseState,
    investigationTab,
    setInvestigationTab,
    setCurrentView,
    profile
  } = useGame();

  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);

  if (!activeCase || !caseState) return null;

  // Calculate investigation progress percentage
  const totalClues = activeCase.evidence.length;
  const discoveredClues = caseState.discoveredEvidenceIds.length;
  const clueProgress = Math.round((discoveredClues / Math.max(1, totalClues)) * 100);

  const tabs: { id: InvestigationTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'scene', label: 'Crime Scene', icon: <Search className="w-4 h-4" /> },
    {
      id: 'evidence',
      label: 'Evidence Locker',
      icon: <FolderOpen className="w-4 h-4" />,
      badge: discoveredClues
    },
    { id: 'interrogation', label: 'Interrogation', icon: <Users className="w-4 h-4" /> },
    {
      id: 'board',
      label: 'Evidence Board',
      icon: <Network className="w-4 h-4" />,
      badge: caseState.userConnections.length
    },
    { id: 'timeline', label: 'Timeline', icon: <Clock className="w-4 h-4" /> },
    { id: 'report', label: 'Final Indictment', icon: <FileCheck2 className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 bg-noir-950/95 border-b border-noir-800/80 backdrop-blur-md shadow-xl select-none">
      {/* Top Bar: Case Dossier Title & Detective Metrics */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between border-b border-noir-900">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentView('cases')}
            title="Return to Case Files Archive"
            className="flex items-center space-x-1.5 px-2.5 py-1 bg-noir-900 hover:bg-noir-800 border border-noir-700/60 rounded text-xs text-noir-300 hover:text-white transition-all font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cases</span>
          </button>

          <div className="h-4 w-px bg-noir-800" />

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-blood-500">
                {activeCase.caseNumber}
              </span>
              <h1 className="font-serif font-bold text-sm sm:text-base tracking-wide text-noir-100">
                {activeCase.title}
              </h1>
              <span className="hidden md:inline-block px-1.5 py-0.2 bg-blood-950/80 border border-blood-800/60 text-[10px] text-blood-400 font-mono rounded uppercase">
                {activeCase.badge}
              </span>
            </div>
            <p className="text-[11px] text-noir-400 hidden lg:block truncate max-w-md">
              {activeCase.location}
            </p>
          </div>
        </div>

        {/* Right Info: Progress, Rank, Hints, Notebook, Audio */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Progress Gauge */}
          <div className="hidden sm:flex flex-col items-end text-right">
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-noir-400">
              <span>Clues Found:</span>
              <span className="text-amber-400 font-bold">
                {discoveredClues}/{totalClues}
              </span>
            </div>
            <div className="w-24 bg-noir-800 h-1.5 rounded-full overflow-hidden mt-1">
              <div
                className="bg-gradient-to-r from-amber-600 to-blood-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${clueProgress}%` }}
              />
            </div>
          </div>

          {/* Detective Rank Pill */}
          <div
            onClick={() => setCurrentView('profile')}
            className="cursor-pointer hidden md:flex items-center space-x-1.5 bg-noir-900 border border-noir-700/60 rounded px-2.5 py-1 text-xs font-mono text-noir-300 hover:border-amber-600/50 transition-colors"
            title="View Detective Profile"
          >
            <Shield className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-amber-200">{profile.rank}</span>
            <span className="text-[10px] text-noir-500">({profile.totalPoints} pts)</span>
          </div>

          {/* Hint System Button */}
          <button
            onClick={() => setIsHintOpen(true)}
            className="flex items-center space-x-1 px-2.5 py-1 bg-noir-900 hover:bg-amber-950/40 border border-noir-700/60 hover:border-amber-600/50 rounded text-xs font-mono text-amber-400 transition-colors"
            title="Consult Department Clues"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hints</span>
            {caseState.unlockedHintLevels.length > 0 && (
              <span className="text-[10px] bg-blood-900 text-blood-200 px-1 rounded-full">
                {caseState.unlockedHintLevels.length}
              </span>
            )}
          </button>

          {/* Notebook Button */}
          <button
            onClick={() => setIsNotebookOpen(true)}
            className="flex items-center space-x-1 px-2.5 py-1 bg-noir-900 hover:bg-noir-800 border border-noir-700/60 rounded text-xs font-mono text-noir-200 transition-colors"
            title="Open Detective Field Notebook"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Notebook</span>
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
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-blood-950/70 border border-blood-700/80 text-white font-bold shadow-sm'
                  : 'text-noir-400 hover:text-noir-200 hover:bg-noir-900/60'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge !== undefined && tab.badge > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-blood-600 text-white' : 'bg-noir-800 text-noir-300'
                  }`}
                >
                  {tab.badge}
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
