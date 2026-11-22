import React, { useState } from 'react';
import {
  FolderOpen,
  Play,
  History,
  Shield,
  Sliders,
  Feather,
  Award,
  ChevronRight,
  Flame,
  FileText
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { ProfileModal } from './ProfileModal';
import { SettingsModal } from './SettingsModal';
import { CreditsModal } from './CreditsModal';
import { SoundToggle } from '../common/SoundToggle';
import { ALL_CASES } from '../../data/cases';
import { sound } from '../../utils/audio';

export const MainMenu: React.FC = () => {
  const {
    profile,
    setCurrentView,
    lastActiveCaseId,
    startCase,
    resumeLastCase
  } = useGame();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);

  const activeCaseObj = ALL_CASES.find(c => c.id === lastActiveCaseId) || ALL_CASES[0];

  const handleNewGame = () => {
    sound.playPaper();
    setCurrentView('cases');
  };

  const handleContinue = () => {
    sound.playPaper();
    resumeLastCase();
  };

  return (
    <div className="relative min-h-screen bg-noir-950 flex flex-col justify-between overflow-hidden select-none">
      {/* Background Cinematic Atmosphere & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-900/60 via-noir-950 to-black z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-vignette z-0 pointer-events-none opacity-80" />
      <div className="absolute inset-0 scanline-effect z-10 pointer-events-none" />

      {/* Subtle Fog/Rain Canvas Overlay */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_30%,rgba(220,38,56,0.15),transparent_60%)] z-0 pointer-events-none" />

      {/* Top Header / Audio Toggle */}
      <header className="relative z-20 max-w-7xl w-full mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-blood-500 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-noir-400 uppercase">
            Metropolitan Homicide Division • Case Intelligence
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <SoundToggle />
        </div>
      </header>

      {/* Center Cinematic Noir Title & Primary Actions */}
      <main className="relative z-20 max-w-5xl w-full mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left Column: Game Title & Detective Noir Branding */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-blood-950/80 border border-blood-800/60 text-blood-400 font-mono text-xs uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" />
            <span>Detective Investigation Simulator</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-wider text-noir-50 leading-none">
            CASE <span className="text-blood-600">FILES</span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-noir-400 max-w-md leading-relaxed">
            Examine forensic crime scenes, cross-examine suspects for contradictions, connect threads on the evidence board, and deliver the final indictment.
          </p>

          {/* Quick Active Case Summary Card */}
          {lastActiveCaseId && (
            <div className="mt-6 p-4 rounded-lg bg-noir-900/80 border border-noir-700/60 backdrop-blur max-w-md">
              <div className="flex items-center justify-between text-xs font-mono text-noir-400 mb-1">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5" /> Ongoing Investigation
                </span>
                <span className="text-blood-400 font-bold">{activeCaseObj.caseNumber}</span>
              </div>
              <div className="font-serif font-bold text-sm text-noir-100">
                {activeCaseObj.title}
              </div>
              <p className="text-[11px] font-mono text-noir-400 truncate mt-0.5">
                {activeCaseObj.location}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Menu Actions */}
        <div className="w-full sm:w-80 space-y-3 font-mono text-sm">
          {/* Continue Investigation Button */}
          {lastActiveCaseId && (
            <button
              onClick={handleContinue}
              className="group w-full py-3.5 px-5 bg-gradient-to-r from-blood-700 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-bold rounded-lg shadow-lg border border-blood-500/60 flex items-center justify-between transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center space-x-3">
                <Play className="w-4 h-4 fill-white" />
                <span className="tracking-wide">Continue Investigation</span>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {/* New Investigation */}
          <button
            onClick={handleNewGame}
            className="group w-full py-3.5 px-5 bg-noir-900/90 hover:bg-noir-850 hover:border-blood-600/60 border border-noir-700/80 text-noir-100 font-bold rounded-lg shadow-md flex items-center justify-between transition-all transform hover:-translate-y-0.5"
          >
            <div className="flex items-center space-x-3">
              <FolderOpen className="w-4 h-4 text-amber-500" />
              <span className="tracking-wide">Select Case File</span>
            </div>
            <ChevronRight className="w-4 h-4 text-noir-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Detective Profile Dossier */}
          <button
            onClick={() => setIsProfileOpen(true)}
            className="group w-full py-3 px-5 bg-noir-900/60 hover:bg-noir-850 hover:border-noir-600 border border-noir-800 text-noir-300 hover:text-white rounded-lg flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-3">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Detective Profile</span>
            </div>
            <span className="text-[10px] text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded uppercase">
              {profile.rank}
            </span>
          </button>

          {/* Settings */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="group w-full py-3 px-5 bg-noir-900/60 hover:bg-noir-850 hover:border-noir-600 border border-noir-800 text-noir-300 hover:text-white rounded-lg flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-3">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Settings & Audio</span>
            </div>
            <ChevronRight className="w-4 h-4 text-noir-600 group-hover:text-noir-300 transition-colors" />
          </button>

          {/* Production Credits */}
          <button
            onClick={() => setIsCreditsOpen(true)}
            className="group w-full py-3 px-5 bg-noir-900/60 hover:bg-noir-850 hover:border-noir-600 border border-noir-800 text-noir-300 hover:text-white rounded-lg flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-3">
              <Feather className="w-4 h-4 text-noir-400" />
              <span>Production Credits</span>
            </div>
            <ChevronRight className="w-4 h-4 text-noir-600 group-hover:text-noir-300 transition-colors" />
          </button>
        </div>
      </main>

      {/* Bottom Bar: Detective Career Overview Status */}
      <footer className="relative z-20 max-w-7xl w-full mx-auto px-6 py-6 border-t border-noir-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-noir-400">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-noir-500">Detective:</span>
            <span className="text-white font-bold">{profile.name}</span>
          </div>
          <div className="h-3 w-px bg-noir-800" />
          <div className="flex items-center space-x-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-bold">{profile.totalPoints} PTS</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-[11px]">
          <span>
            Closed Cases:{' '}
            <strong className="text-green-400 font-mono">
              {profile.completedCaseIds.length} / {ALL_CASES.length}
            </strong>
          </span>
          <span>
            Rank: <strong className="text-amber-200">{profile.rank}</strong>
          </span>
        </div>
      </footer>

      {/* Modals */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <CreditsModal isOpen={isCreditsOpen} onClose={() => setIsCreditsOpen(false)} />
    </div>
  );
};
