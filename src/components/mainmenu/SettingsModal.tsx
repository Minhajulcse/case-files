import React, { useState } from 'react';
import { X, Sliders, Volume2, AlertOctagon, RefreshCw } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { resetEntireGame, resetCurrentCase, activeCase } = useGame();
  const [confirmResetAll, setConfirmResetAll] = useState(false);
  const [confirmResetCase, setConfirmResetCase] = useState(false);

  const [masterVol, setMasterVol] = useState(0.7);
  const [sfxVol, setSfxVol] = useState(0.8);
  const [ambienceVol, setAmbienceVol] = useState(0.3);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-noir-900 border border-noir-700 rounded-lg shadow-2xl overflow-hidden font-mono text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sliders className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-serif font-bold text-base text-amber-200 tracking-wide">
                BUREAU CONFIGURATION
              </h2>
              <span className="text-xs text-noir-400">Audio, Visual, and Game State Settings</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-xs">
          {/* Audio Synthesizer Levels */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4" /> Synthesizer Sound Levels
            </h4>

            <div>
              <div className="flex justify-between text-noir-400 mb-1">
                <span>Master Output</span>
                <span>{Math.round(masterVol * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={masterVol}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  setMasterVol(v);
                  sound.setMasterVolume(v);
                }}
                className="w-full accent-blood-600 bg-noir-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-noir-400 mb-1">
                <span>Procedural Noir Ambience (Rain / Bass Drone)</span>
                <span>{Math.round(ambienceVol * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={ambienceVol}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  setAmbienceVol(v);
                  sound.setAmbienceVolume(v);
                }}
                className="w-full accent-amber-500 bg-noir-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-noir-400 mb-1">
                <span>Sound Effects (Typewriter, Clues, Pins)</span>
                <span>{Math.round(sfxVol * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={sfxVol}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  setSfxVol(v);
                  sound.setSfxVolume(v);
                }}
                className="w-full accent-cyan-500 bg-noir-800 h-1.5 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Danger Zone: Reset Case / Reset All */}
          <div className="pt-4 border-t border-noir-800 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-blood-400 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4" /> Evidence & Progression Management
            </h4>

            {activeCase && (
              <div className="bg-noir-950 p-3 rounded border border-noir-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-noir-200">Reset Current Case Progress</div>
                  <div className="text-[11px] text-noir-500">
                    Clears discovered clues and connections for {activeCase.title}.
                  </div>
                </div>
                {confirmResetCase ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        resetCurrentCase();
                        setConfirmResetCase(false);
                        onClose();
                      }}
                      className="px-2.5 py-1 bg-blood-600 hover:bg-blood-700 text-white rounded text-[11px]"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setConfirmResetCase(false)}
                      className="px-2.5 py-1 bg-noir-800 text-noir-300 rounded text-[11px]"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmResetCase(true)}
                    className="px-3 py-1 bg-noir-800 hover:bg-noir-700 border border-noir-700 rounded text-amber-300 text-[11px] flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset Case
                  </button>
                )}
              </div>
            )}

            <div className="bg-blood-950/30 p-3 rounded border border-blood-900/50 flex items-center justify-between">
              <div>
                <div className="font-bold text-blood-300">Wipe All Game Data</div>
                <div className="text-[11px] text-noir-400">
                  Resets detective rank, all case files, and career scores.
                </div>
              </div>
              {confirmResetAll ? (
                <div className="flex gap-2">
                  <button
                    onClick={resetEntireGame}
                    className="px-2.5 py-1 bg-blood-600 hover:bg-blood-700 text-white rounded text-[11px]"
                  >
                    Wipe Data
                  </button>
                  <button
                    onClick={() => setConfirmResetAll(false)}
                    className="px-2.5 py-1 bg-noir-800 text-noir-300 rounded text-[11px]"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmResetAll(true)}
                  className="px-3 py-1 bg-blood-900/60 hover:bg-blood-800 border border-blood-700 text-white rounded text-[11px]"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-noir-950 px-6 py-3 border-t border-noir-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-noir-800 hover:bg-noir-700 text-noir-200 text-xs font-mono rounded transition-colors"
          >
            Close Settings
          </button>
        </div>
      </div>
    </div>
  );
};
