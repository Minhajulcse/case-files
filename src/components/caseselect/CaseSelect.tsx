import React from 'react';
import {
  ArrowLeft,
  FolderLock,
  CheckCircle2,
  Clock,
  ChevronRight,
  FileQuestion,
  Target
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { ALL_CASES } from '../../data/cases';
import { sound } from '../../utils/audio';
import { LanguageToggle } from '../common/LanguageToggle';
import { getLocalizedDifficulty, getLocalizedBadge } from '../../i18n';

export const CaseSelect: React.FC = () => {
  const { setCurrentView, startCase, profile, language, t, getLoc, formatNum } = useGame();

  const handleSelectCase = (caseId: string) => {
    sound.playPaper();
    startCase(caseId);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-noir-200 flex flex-col font-mono select-none">
      {/* Top Header */}
      <header className="bg-noir-900 border-b border-noir-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                sound.playPaper();
                setCurrentView('menu');
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-noir-850 hover:bg-noir-800 border border-noir-750 rounded text-xs text-noir-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'bn' ? 'মেনু' : 'Menu'}</span>
            </button>
            <div className="h-4 w-px bg-noir-800" />
            <div>
              <h1 className="font-serif font-bold text-base sm:text-lg text-white tracking-wide">
                {t('caseArchivesTitle')}
              </h1>
              <p className="text-[11px] text-noir-400">
                {t('caseArchivesSubtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <LanguageToggle variant="compact" />
            <div className="hidden sm:flex items-center space-x-1.5 text-noir-400">
              <span>{t('closedCases')}:</span>
              <span className="text-green-400 font-bold">
                {formatNum(profile.completedCaseIds.length)} / {formatNum(ALL_CASES.length)}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Case Dossiers Grid */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALL_CASES.map((caseItem) => {
            const isCompleted = profile.completedCaseIds.includes(caseItem.id);
            const highScore = profile.caseHighScores[caseItem.id];

            return (
              <div
                key={caseItem.id}
                className={`relative rounded border flex flex-col justify-between transition-all duration-200 shadow-case-folder overflow-hidden ${
                  isCompleted
                    ? 'bg-[#12151b] border-[#1e482d] hover:border-[#2b6942]'
                    : 'bg-[#12151b] border-[#292f3c] hover:border-[#825f27]'
                }`}
              >
                {/* Dossier Folder Top Tab */}
                <div className="bg-[#181d26] px-5 py-3 border-b border-[#292f3c] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FolderLock className="w-4 h-4 text-brass-400" />
                    <span className="text-xs font-bold tracking-widest text-blood-400 uppercase">
                      {caseItem.caseNumber}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      caseItem.difficulty === 'Master'
                        ? 'bg-purple-950 text-purple-300 border border-purple-800'
                        : caseItem.difficulty === 'Hard'
                        ? 'bg-blood-950 text-blood-300 border border-blood-800'
                        : 'bg-noir-850 text-noir-300 border border-noir-700'
                    }`}
                  >
                    {getLocalizedDifficulty(caseItem.difficulty, language)}
                  </span>
                </div>

                {/* Dossier Body */}
                <div className="p-5 flex-1 space-y-4">
                  {/* Title & Badge */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-brass-400 uppercase tracking-wider font-bold">
                        {getLocalizedBadge(caseItem.badge, language)}
                      </span>
                      <span className="text-[10px] text-noir-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {caseItem.estimatedTime}
                      </span>
                    </div>
                    <h2 className="font-serif font-bold text-lg text-white tracking-wide mt-1">
                      {getLoc(caseItem.title)}
                    </h2>
                    <p className="text-xs text-noir-400 italic mt-0.5">
                      {getLoc(caseItem.subtitle)}
                    </p>
                  </div>

                  {/* Incident Date & Location */}
                  <div className="text-[11px] bg-[#0c0e12] p-2.5 rounded border border-[#202530] space-y-1">
                    <div className="text-noir-400 truncate">
                      <strong className="text-noir-300">{t('targetVictim')}:</strong> {getLoc(caseItem.victimOrSubject)}
                    </div>
                    <div className="text-noir-400 truncate">
                      <strong className="text-noir-300">{t('incidentLocation')}:</strong> {getLoc(caseItem.location)}
                    </div>
                  </div>

                  {/* Synopsis */}
                  <p className="text-xs text-noir-300 leading-relaxed line-clamp-3">
                    {getLoc(caseItem.synopsis)}
                  </p>

                  {/* Key Objectives Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-[#202530]">
                    <span className="text-[10px] uppercase font-bold text-noir-400 flex items-center gap-1">
                      <Target className="w-3 h-3 text-blood-400" /> {t('objectives')}
                    </span>
                    <ul className="text-[11px] text-noir-400 space-y-1">
                      {caseItem.briefing.keyObjectives.slice(0, 2).map((obj, i) => (
                        <li key={i} className="truncate">
                          • {getLoc(obj)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dossier Footer / Action */}
                <div className="bg-[#161a22] p-4 border-t border-[#292f3c] flex items-center justify-between">
                  <div>
                    {isCompleted ? (
                      <div className="flex items-center space-x-1.5 text-xs text-green-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{t('solved')} ({formatNum(highScore || 1000)} {t('pts')})</span>
                      </div>
                    ) : (
                      <div className="text-xs text-brass-400 flex items-center gap-1">
                        <FileQuestion className="w-3.5 h-3.5" />
                        <span>{t('unsolvedMystery')}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleSelectCase(caseItem.id)}
                    className="px-4 py-2 bg-blood-800 hover:bg-blood-700 text-white rounded text-xs font-bold font-mono shadow-md flex items-center space-x-1.5 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{isCompleted ? t('reopenCaseFile') : t('openCaseFile')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
