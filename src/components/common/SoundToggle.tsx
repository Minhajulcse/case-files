import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Sliders } from 'lucide-react';
import { sound } from '../../utils/audio';

export const SoundToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [masterVol, setMasterVol] = useState(0.7);
  const [ambienceVol, setAmbienceVol] = useState(0.3);
  const [isAmbienceOn, setIsAmbienceOn] = useState(false);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    sound.setMuted(next);
  };

  const toggleAmbience = () => {
    if (isAmbienceOn) {
      sound.stopAmbience();
      setIsAmbienceOn(false);
    } else {
      sound.startAmbience();
      setIsAmbienceOn(true);
    }
  };

  const handleMasterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setMasterVol(val);
    sound.setMasterVolume(val);
    if (isMuted) {
      setIsMuted(false);
      sound.setMuted(false);
    }
  };

  const handleAmbienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setAmbienceVol(val);
    sound.setAmbienceVolume(val);
    if (!isAmbienceOn && val > 0) {
      sound.startAmbience();
      setIsAmbienceOn(true);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 bg-noir-900/90 border border-noir-700/60 rounded px-2 py-1 shadow-md">
        <button
          onClick={toggleMute}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          className="p-1 text-noir-400 hover:text-white transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-blood-500" /> : <Volume2 className="w-4 h-4 text-noir-200" />}
        </button>

        <button
          onClick={toggleAmbience}
          title={isAmbienceOn ? 'Stop Noir Ambience' : 'Start Noir Rain & Drone Ambience'}
          className={`p-1 transition-colors ${isAmbienceOn ? 'text-amber-400' : 'text-noir-500 hover:text-noir-300'}`}
        >
          <Music className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          title="Sound Settings"
          className="p-1 text-noir-500 hover:text-noir-300 transition-colors"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-noir-900/95 border border-noir-700 rounded-lg p-4 shadow-2xl z-50 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3 border-b border-noir-800 pb-2">
            <span className="font-mono text-xs uppercase tracking-wider text-noir-300">Audio Channels</span>
            <span className="text-[10px] text-amber-500 font-mono">SYNTH ENGINE</span>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div>
              <div className="flex justify-between text-noir-400 mb-1">
                <span>Master Volume</span>
                <span>{Math.round(masterVol * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={masterVol}
                onChange={handleMasterChange}
                className="w-full accent-blood-600 bg-noir-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-noir-400 mb-1">
                <span>Noir Ambience (Rain & Drone)</span>
                <span>{Math.round(ambienceVol * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={ambienceVol}
                onChange={handleAmbienceChange}
                className="w-full accent-amber-500 bg-noir-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-noir-800 flex justify-between items-center text-[11px] text-noir-400">
              <span>Noir Drone State:</span>
              <button
                onClick={toggleAmbience}
                className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                  isAmbienceOn ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-noir-800 text-noir-400'
                }`}
              >
                {isAmbienceOn ? 'Active' : 'Off'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
