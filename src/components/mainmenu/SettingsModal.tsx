import { Dialog } from '../common/Dialog';
import React, { useState } from 'react';
import { X, Sliders, Volume2, AlertOctagon, RefreshCw, Languages } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';
import { LanguageToggle } from '../common/LanguageToggle';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const {
    resetEntireGame,
    resetCurrentCase,
    activeCase,
    language,
    t,
    formatNum
  } = useGame();

  const [confirmResetAll, setConfirmResetAll] = useState(false);
  const [confirmResetCase, setConfirmResetCase] = useState(false);

  const [masterVol, setMasterVol] = useState(()=>sound.getSettings().masterVolume);
  const [sfxVol, setSfxVol] = useState(()=>sound.getSettings().sfxVolume);
  const [ambienceVol, setAmbienceVol] = useState(()=>sound.getSettings().ambienceVolume);

  const [muted,setMuted]=useState(()=>sound.getMuted());
  const [ambience,setAmbience]=useState(()=>sound.getSettings().ambiencePlaying);
  if (!isOpen) return null;

  const isBengali = language === 'bn';

  return (
    <Dialog label={t('settingsTitle')} onClose={onClose}>
      <div className="relative w-full max-w-lg bg-noir-900 border border-noir-700 rounded-lg shadow-2xl overflow-hidden text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sliders className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-serif font-bold text-base text-amber-200 tracking-wide">
                {t('settingsTitle')}
              </h2>
              <span className="text-xs text-noir-400">{t('settingsSubtitle')}</span>
            </div>
          </div>
          <button
            onClick={onClose} aria-label={t('closeBtn')}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-xs max-h-[75vh] overflow-y-auto">
          {/* Language Selection Card */}
          <div className="bg-noir-950 p-4 rounded-lg border border-noir-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4 text-blood-400" />
                <span className="font-bold text-white text-xs uppercase tracking-wider">
                  {t('languageSelectLabel')}
                </span>
              </div>
              <span className="text-[10px] text-amber-400 uppercase font-mono">
                {language === 'bn' ? 'বাংলা সক্রিয়' : 'English Active'}
              </span>
            </div>
            <p className="text-[11px] text-noir-400 leading-relaxed">
              {isBengali
                ? 'তদন্ত চলাকালীন যেকোনো সময় ভাষা পরিবর্তন করা যায়। কোনো অগ্রগতি নষ্ট হবে না।'
                : 'Switch languages anytime during the investigation without resetting clues, connections, or notes.'}
            </p>
            <div className="pt-1">
              <LanguageToggle variant="segmented" />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button className="minor-action" aria-pressed={muted} onClick={()=>{sound.setMuted(!muted);setMuted(!muted);}}>{muted?(isBengali?'সাউন্ড চালু করুন':'Unmute sound'):(isBengali?'সাউন্ড বন্ধ করুন':'Mute sound')}</button>
            <button className="minor-action" aria-pressed={ambience} onClick={()=>{if(ambience)sound.stopAmbience();else sound.startAmbience();setAmbience(sound.getSettings().ambiencePlaying);}}>{ambience?t('ambienceActive'):t('ambienceOff')}</button>
          </div>
          {/* Audio Synthesizer Levels */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4" /> {t('synthSoundLevels')}
            </h4>

            <div>
              <div className="flex justify-between text-noir-400 mb-1">
                <span>{t('masterOutput')}</span>
                <span className="font-mono">{formatNum(Math.round(masterVol * 100))}%</span>
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
                <span>{t('noirAmbience')}</span>
                <span className="font-mono">{formatNum(Math.round(ambienceVol * 100))}%</span>
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
                <span>{t('sfxVolume')}</span>
                <span className="font-mono">{formatNum(Math.round(sfxVol * 100))}%</span>
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
              <AlertOctagon className="w-4 h-4" /> {t('progressionMgmt')}
            </h4>

            {activeCase && (
              <div className="bg-noir-950 p-3 rounded border border-noir-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-noir-200">{t('resetCaseTitle')}</div>
                  <div className="text-[11px] text-noir-500">
                    {t('resetCaseDesc')}
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
                      {t('confirmBtn')}
                    </button>
                    <button
                      onClick={() => setConfirmResetCase(false)}
                      className="px-2.5 py-1 bg-noir-800 text-noir-300 rounded text-[11px]"
                    >
                      {t('cancelBtn')}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmResetCase(true)}
                    className="px-3 py-1 bg-noir-800 hover:bg-noir-700 border border-noir-700 rounded text-amber-300 text-[11px] flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" /> {t('resetCaseBtn')}
                  </button>
                )}
              </div>
            )}

            <div className="bg-blood-950/30 p-3 rounded border border-blood-900/50 flex items-center justify-between">
              <div>
                <div className="font-bold text-blood-300">{t('wipeAllTitle')}</div>
                <div className="text-[11px] text-noir-400">
                  {t('wipeAllDesc')}
                </div>
              </div>
              {confirmResetAll ? (
                <div className="flex gap-2">
                  <button
                    onClick={resetEntireGame}
                    className="px-2.5 py-1 bg-blood-600 hover:bg-blood-700 text-white rounded text-[11px]"
                  >
                    {t('confirmBtn')}
                  </button>
                  <button
                    onClick={() => setConfirmResetAll(false)}
                    className="px-2.5 py-1 bg-noir-800 text-noir-300 rounded text-[11px]"
                  >
                    {t('cancelBtn')}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmResetAll(true)}
                  className="px-3 py-1 bg-blood-900/60 hover:bg-blood-800 border border-blood-700 text-white rounded text-[11px]"
                >
                  {t('wipeAllBtn')}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-noir-950 px-6 py-3 border-t border-noir-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-noir-800 hover:bg-noir-700 text-noir-200 text-xs rounded transition-colors"
          >
            {t('closeSettings')}
          </button>
        </div>
      </div>
    </Dialog>
  );
};
