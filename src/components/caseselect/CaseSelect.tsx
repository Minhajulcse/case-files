import React from 'react';
import {
  ArrowLeft,
  FolderLock,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  Shield,
  FileQuestion,
  Target
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { ALL_CASES } from '../../data/cases';
import { sound } from '../../utils/audio';

export const CaseSelect: React.FC = () => {
  const { setCurrentView, startCase, profile } = useGame();

  const handleSelectCase = (caseId: string) => {
    sound.playPaper();
    startCase(caseId);
  };

  return (
    <div className="min-h-screen bg-noir-950 text-noir-200 flex flex-col font-mono select-none">
      {/* Top Header */}
      <header className="bg-noir-900 border-b border-noir-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                sound.playPaper();
                setCurrentView('menu');
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-noir-800 hover:bg-noir-700 border border-noir-700 rounded text-xs text-noir-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Main Menu</span>
            </button>
            <div className="h-4 w-px bg-noir-800" />
            <div>
              <h1 className="font-serif font-bold text-lg text-white tracking-wide">
                CASE ARCHIVES & ACTIVE DOSSIERS
              </h1>
              <p className="text-[11px] text-noir-400">
                Select an open investigation file to review scene logs and begin field operations.
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-3 text-xs">
            <span className="text-noir-500">Solved Files:</span>
            <span className="text-green-400 font-bold">
              {profile.completedCaseIds.length} / {ALL_CASES.length}
            </span>
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
                className={`relative rounded-lg border flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden ${
                  isCompleted
                    ? 'bg-noir-900/95 border-green-800/50 hover:border-green-600/70'
                    : 'bg-noir-900 border-noir-700/80 hover:border-amber-600/70 hover:shadow-2xl'
                }`}
              >
                {/* Dossier Folder Top Tab */}
                <div className="bg-noir-950 px-5 py-3 border-b border-noir-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FolderLock className="w-4 h-4 text-amber-500" />
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
                        : 'bg-noir-800 text-noir-300 border border-noir-700'
                    }`}
                  >
                    {caseItem.difficulty}
                  </span>
                </div>

                {/* Dossier Body */}
                <div className="p-5 flex-1 space-y-4">
                  {/* Title & Badge */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-amber-400 uppercase tracking-wider font-bold">
                        {caseItem.badge}
                      </span>
                      <span className="text-[10px] text-noir-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {caseItem.estimatedTime}
                      </span>
                    </div>
                    <h2 className="font-serif font-bold text-xl text-white tracking-wide mt-1">
                      {caseItem.title}
                    </h2>
                    <p className="text-xs text-noir-400 italic mt-0.5">
                      {caseItem.subtitle}
                    </p>
                  </div>

                  {/* Incident Date & Location */}
                  <div className="text-[11px] bg-noir-950 p-2.5 rounded border border-noir-800/80 space-y-1">
                    <div className="text-noir-400 truncate">
                      <strong className="text-noir-300">Target/Victim:</strong> {caseItem.victimOrSubject}
                    </div>
                    <div className="text-noir-400 truncate">
                      <strong className="text-noir-300">Location:</strong> {caseItem.location}
                    </div>
                  </div>

                  {/* Synopsis */}
                  <p className="text-xs text-noir-300 leading-relaxed line-clamp-3">
                    {caseItem.synopsis}
                  </p>

                  {/* Key Objectives Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-noir-800/60">
                    <span className="text-[10px] uppercase font-bold text-noir-400 flex items-center gap-1">
                      <Target className="w-3 h-3 text-blood-400" /> Case Objectives
                    </span>
                    <ul className="text-[11px] text-noir-400 space-y-1">
                      {caseItem.briefing.keyObjectives.slice(0, 2).map((obj, i) => (
                        <li key={i} className="truncate">
                          • {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dossier Footer / Action */}
                <div className="bg-noir-950 p-4 border-t border-noir-800 flex items-center justify-between">
                  <div>
                    {isCompleted ? (
                      <div className="flex items-center space-x-1.5 text-xs text-green-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Solved ({highScore || 1000} PTS)</span>
                      </div>
                    ) : (
                      <div className="text-xs text-amber-400 flex items-center gap-1">
                        <FileQuestion className="w-3.5 h-3.5" />
                        <span>Unsolved Mystery</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleSelectCase(caseItem.id)}
                    className="px-4 py-2 bg-blood-700 hover:bg-blood-600 text-white rounded text-xs font-bold font-mono shadow-md flex items-center space-x-1.5 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{isCompleted ? 'Re-open Case' : 'Open Case File'}</span>
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
