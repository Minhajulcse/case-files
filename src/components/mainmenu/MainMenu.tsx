import React, { useState } from 'react';
import {
  FolderOpen,
  Play,
  Shield,
  Sliders,
  Feather,
  ChevronRight,
  FileText,
  Briefcase,
  Award
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { ProfileModal } from './ProfileModal';
import { SettingsModal } from './SettingsModal';
import { CreditsModal } from './CreditsModal';
import { SoundToggle } from '../common/SoundToggle';
import { LanguageToggle } from '../common/LanguageToggle';
import { ALL_CASES } from '../../data/cases';
import { sound } from '../../utils/audio';
import { getLocalizedRank } from '../../i18n';

export const MainMenu: React.FC = () => {
  const {
    profile,
    setCurrentView,
    lastActiveCaseId,
    resumeLastCase,
    language,
    t,
    getLoc,
    formatNum
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
    <div className="relative min-h-screen bg-[#0a0b0e] flex flex-col justify-between overflow-hidden select-none font-mono">
      {/* Background Architectural Vignette & Scanline */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#11141a]/60 via-[#0a0b0e] to-black z-0 pointer-events-none" />
      <div className="absolute inset-0 scanline-effect z-10 pointer-events-none opacity-40" />

      {/* Top Header / Bureau Title & Language Toggle */}
      <header className="relative z-20 max-w-7xl w-full mx-auto px-6 py-6 flex items-center justify-between border-b border-noir-850">
        <div className="flex items-center space-x-2.5">
          <div className="w-2 h-2 rounded-full bg-blood-500 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-noir-400 uppercase">
            {t('metropolitanPolice')}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <LanguageToggle variant="segmented" />
          <SoundToggle />
        </div>
      </header>

      {/* Center Cinematic Noir Opening */}
      <main className="relative z-20 max-w-5xl w-full mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left Column: Game Title & Detective Office Atmosphere */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-noir-900 border border-noir-750 text-blood-400 font-mono text-xs uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-brass-400" />
            <span>{t('gameSubtitle')}</span>
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-wider text-noir-50 leading-none">
              {language === 'bn' ? (
                <>কেস <span className="text-blood-500 font-serif">ফাইলস</span></>
              ) : (
                <>CASE <span className="text-blood-500">FILES</span></>
              )}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-noir-400 max-w-md leading-relaxed mt-3">
              {language === 'bn'
                ? 'ফরেনসিক অপরাধস্থল অনুসন্ধান করুন, সাক্ষীদের জিজ্ঞাসাবাদে অসঙ্গতি ধরুন, প্রমাণ বোর্ডে সুতোর সংযোগ টানুন এবং আদালতে অভিযোগপত্র পেশ করুন।'
                : 'Examine forensic crime scenes, cross-examine suspects for contradictions, connect threads on the evidence board, and deliver the final indictment.'}
            </p>
          </div>

          {/* Quick Active Case Manila Envelope Preview */}
          {lastActiveCaseId && (
            <div className="mt-6 p-4 rounded bg-[#13161c] border border-[#2b313d] max-w-md shadow-dossier text-left">
              <div className="flex items-center justify-between text-xs font-mono text-noir-400 mb-1 border-b border-noir-750 pb-1.5">
                <span className="flex items-center gap-1.5 text-brass-400 font-bold uppercase tracking-wider text-[11px]">
                  <FileText className="w-3.5 h-3.5" /> {t('ongoingInvestigation')}
                </span>
                <span className="text-blood-400 font-bold text-[11px]">{activeCaseObj.caseNumber}</span>
              </div>
              <div className="font-serif font-bold text-sm text-noir-100 mt-2">
                {getLoc(activeCaseObj.title)}
              </div>
              <p className="text-[11px] font-mono text-noir-400 truncate mt-0.5">
                {getLoc(activeCaseObj.location)}
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
              className="group w-full py-3.5 px-5 bg-blood-800 hover:bg-blood-700 text-white font-bold rounded shadow-lg border border-blood-600 flex items-center justify-between transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center space-x-3">
                <Play className="w-4 h-4 fill-white" />
                <span className="tracking-wide">{t('continueInvestigation')}</span>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {/* New / Select Case File */}
          <button
            onClick={handleNewGame}
            className="group w-full py-3.5 px-5 bg-noir-900 hover:bg-noir-850 hover:border-blood-600/70 border border-noir-750 text-noir-100 font-bold rounded shadow-md flex items-center justify-between transition-all transform hover:-translate-y-0.5"
          >
            <div className="flex items-center space-x-3">
              <FolderOpen className="w-4 h-4 text-brass-400" />
              <span className="tracking-wide">{t('selectCaseFile')}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-noir-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Detective Profile Dossier */}
          <button
            onClick={() => setIsProfileOpen(true)}
            className="group w-full py-3 px-5 bg-noir-900 hover:bg-noir-850 hover:border-noir-600 border border-noir-800 text-noir-300 hover:text-white rounded flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-3">
              <Shield className="w-4 h-4 text-brass-400" />
              <span>{t('detectiveProfile')}</span>
            </div>
            <span className="text-[10px] text-brass-300 bg-brass-950 border border-brass-800 px-2 py-0.5 rounded uppercase">
              {getLocalizedRank(profile.rank, language)}
            </span>
          </button>

          {/* Settings */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="group w-full py-3 px-5 bg-noir-900 hover:bg-noir-850 hover:border-noir-600 border border-noir-800 text-noir-300 hover:text-white rounded flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-3">
              <Sliders className="w-4 h-4 text-noir-400" />
              <span>{t('settingsAudio')}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-noir-500 group-hover:text-noir-300 transition-colors" />
          </button>

          {/* Production Credits */}
          <button
            onClick={() => setIsCreditsOpen(true)}
            className="group w-full py-3 px-5 bg-noir-900 hover:bg-noir-850 hover:border-noir-600 border border-noir-800 text-noir-400 hover:text-white rounded flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-3">
              <Feather className="w-4 h-4 text-noir-500" />
              <span>{t('productionCredits')}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-noir-600 group-hover:text-noir-300 transition-colors" />
          </button>
        </div>
      </main>

      {/* Bottom Bar: Detective Career Overview Status */}
      <footer className="relative z-20 max-w-7xl w-full mx-auto px-6 py-5 border-t border-noir-850 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-noir-400">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-noir-500">{t('detectiveLabel')}:</span>
            <span className="text-white font-bold">{profile.name}</span>
          </div>
          <div className="h-3 w-px bg-noir-800" />
          <div className="flex items-center space-x-1.5">
            <Award className="w-3.5 h-3.5 text-brass-400" />
            <span className="text-brass-300 font-bold">{formatNum(profile.totalPoints)} {t('pts')}</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-[11px]">
          <span>
            {t('closedCases')}:{' '}
            <strong className="text-green-400 font-mono">
              {formatNum(profile.completedCaseIds.length)} / {formatNum(ALL_CASES.length)}
            </strong>
          </span>
          <span>
            {t('detectiveRank')}: <strong className="text-parchment-100">{getLocalizedRank(profile.rank, language)}</strong>
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
