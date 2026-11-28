import React from 'react';
import { Globe } from 'lucide-react';
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

  return <button className={'language-switch '+className} onClick={()=>handleSwitch(language==='en'?'bn':'en')}
    aria-label={language==='en'?'বাংলায় পরিবর্তন করুন':'Switch to English'}><Globe size={15}/>{language==='en'?'বাংলা':'English'}</button>;
};
