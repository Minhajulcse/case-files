import React from 'react';
import { Languages, Globe } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';

interface LanguageToggleProps {
  variant?: 'compact' | 'segmented';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'compact',
  className = ''
}) => {
  const { language, setLanguage } = useGame();

  const handleSwitch = (lang: 'en' | 'bn') => {
    if (lang !== language) {
      sound.playPaper();
      setLanguage(lang);
    }
  };

  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 bg-noir-900 border border-noir-700/80 rounded font-mono text-xs shadow-inner ${className}`}
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => handleSwitch('en')}
          className={`px-3 py-1 rounded transition-all font-bold ${
            language === 'en'
              ? 'bg-blood-700 text-white shadow-sm'
              : 'text-noir-400 hover:text-noir-200 hover:bg-noir-800'
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => handleSwitch('bn')}
          className={`px-3 py-1 rounded transition-all font-bold font-bengali ${
            language === 'bn'
              ? 'bg-blood-700 text-white shadow-sm'
              : 'text-noir-400 hover:text-noir-200 hover:bg-noir-800'
          }`}
        >
          বাংলা
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center bg-noir-900/90 border border-noir-700/70 rounded px-1.5 py-0.5 text-xs font-mono shadow-sm ${className}`}>
      <Globe className="w-3.5 h-3.5 text-brass-400 mr-1.5" />
      <button
        onClick={() => handleSwitch('en')}
        className={`px-1.5 py-0.5 rounded transition-colors text-[11px] font-bold ${
          language === 'en' ? 'text-white bg-blood-800/80' : 'text-noir-400 hover:text-noir-200'
        }`}
        title="Switch to English"
      >
        EN
      </button>
      <span className="text-noir-600 px-0.5">/</span>
      <button
        onClick={() => handleSwitch('bn')}
        className={`px-1.5 py-0.5 rounded transition-colors text-[11px] font-bold font-bengali ${
          language === 'bn' ? 'text-white bg-blood-800/80' : 'text-noir-400 hover:text-noir-200'
        }`}
        title="বাংলায় পরিবর্তন করুন"
      >
        বাং
      </button>
    </div>
  );
};
