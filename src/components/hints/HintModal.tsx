import React, { useState } from 'react';
import { X, HelpCircle, AlertTriangle, Lock, Unlock, ShieldAlert } from 'lucide-react';
import { useGame } from '../../context/GameContext';

interface HintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HintModal: React.FC<HintModalProps> = ({ isOpen, onClose }) => {
  const { activeCase, caseState, unlockHint } = useGame();
  const [confirmLevel, setConfirmLevel] = useState<number | null>(null);

  if (!isOpen || !activeCase || !caseState) return null;

  const handleUnlockClick = (level: 1 | 2 | 3) => {
    unlockHint(level);
    setConfirmLevel(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-noir-900 border border-noir-700 rounded-lg shadow-2xl overflow-hidden font-mono text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-serif font-bold text-base text-amber-200 tracking-wide">
                BUREAU INVESTIGATION CONSULTATION
              </h2>
              <span className="text-xs text-noir-400">
                Progressive Investigative Assistance — Case #{activeCase.caseNumber}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Advisory Warning */}
        <div className="bg-blood-950/40 border-b border-blood-900/60 px-6 py-2.5 flex items-center space-x-2 text-xs text-blood-300">
          <ShieldAlert className="w-4 h-4 flex-shrink-0 text-blood-400" />
          <span>
            Notice: Requesting departmental hints deducts points from your final investigation evaluation score.
          </span>
        </div>

        {/* Hint Levels */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {activeCase.hints.map((hint) => {
            const isUnlocked = caseState.unlockedHintLevels.includes(hint.level);
            const isPriorUnlocked = hint.level === 1 || caseState.unlockedHintLevels.includes((hint.level - 1) as 1 | 2 | 3);

            return (
              <div
                key={hint.level}
                className={`p-4 rounded-lg border transition-all ${
                  isUnlocked
                    ? 'bg-noir-850 border-amber-600/40'
                    : isPriorUnlocked
                    ? 'bg-noir-950 border-noir-700'
                    : 'bg-noir-950/50 border-noir-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-bold uppercase ${
                        isUnlocked
                          ? 'bg-amber-950 text-amber-300 border border-amber-700/50'
                          : 'bg-noir-800 text-noir-400'
                      }`}
                    >
                      Tier {hint.level} Clue
                    </span>
                    <span className="text-sm font-bold text-noir-200">{hint.title}</span>
                  </div>

                  <div className="text-xs font-mono">
                    {isUnlocked ? (
                      <span className="text-amber-400 flex items-center gap-1">
                        <Unlock className="w-3.5 h-3.5" /> Unlocked
                      </span>
                    ) : (
                      <span className="text-blood-400 flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5" /> -{hint.cost} PTS
                      </span>
                    )}
                  </div>
                </div>

                {isUnlocked ? (
                  <p className="text-xs text-amber-100/90 leading-relaxed bg-noir-900/80 p-3 rounded border border-noir-800">
                    {hint.hintText}
                  </p>
                ) : isPriorUnlocked ? (
                  confirmLevel === hint.level ? (
                    <div className="bg-blood-950/60 border border-blood-800 rounded p-3 text-xs space-y-2 mt-2">
                      <div className="flex items-center space-x-1.5 text-blood-300 font-bold">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Confirm Deduction of {hint.cost} Points?</span>
                      </div>
                      <p className="text-noir-300">
                        This hint will permanently deduct {hint.cost} points from this case's score.
                      </p>
                      <div className="flex space-x-2 pt-1">
                        <button
                          onClick={() => handleUnlockClick(hint.level as 1 | 2 | 3)}
                          className="px-3 py-1 bg-blood-600 hover:bg-blood-700 text-white rounded font-bold text-xs transition-colors"
                        >
                          Confirm & Reveal
                        </button>
                        <button
                          onClick={() => setConfirmLevel(null)}
                          className="px-3 py-1 bg-noir-800 hover:bg-noir-700 text-noir-300 rounded text-xs transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmLevel(hint.level)}
                      className="mt-2 w-full py-2 bg-noir-800 hover:bg-noir-700 hover:border-amber-600/50 border border-noir-700 text-amber-300 rounded text-xs font-mono transition-colors flex items-center justify-center space-x-2"
                    >
                      <Unlock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Unlock Tier {hint.level} Clue (-{hint.cost} PTS)</span>
                    </button>
                  )
                ) : (
                  <p className="text-xs text-noir-600 italic">
                    Requires unlocking Tier {hint.level - 1} first.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-noir-950 px-6 py-3 border-t border-noir-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-noir-800 hover:bg-noir-700 text-noir-200 text-xs font-mono rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
