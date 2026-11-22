import React from 'react';
import { X, Feather, ShieldCheck } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { case001 } from '../../data/cases/case001';
import { case002 } from '../../data/cases/case002';
import { case003 } from '../../data/cases/case003';

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreditsModal: React.FC<CreditsModalProps> = ({ isOpen, onClose }) => {
  const { language, t, getLoc } = useGame();

  if (!isOpen) return null;

  const isBengali = language === 'bn';

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm ${isBengali ? 'font-bengali' : 'font-mono'}`}>
      <div className="relative w-full max-w-xl bg-noir-900 border border-noir-700 rounded-lg shadow-2xl overflow-hidden text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Feather className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-serif font-bold text-base text-amber-200 tracking-wide">
                {t('creditsTitle')}
              </h2>
              <span className="text-xs text-noir-400">{t('creditsSubtitle')}</span>
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
        <div className="p-6 space-y-5 text-xs text-noir-300 max-h-[60vh] overflow-y-auto">
          <div className="bg-noir-950 p-4 rounded border border-noir-800 space-y-2">
            <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold">
              {t('gameDesignRole')}
            </span>
            <p className="text-white font-serif text-sm font-bold">
              {t('leadArchitect')}
            </p>
            <p className="text-noir-400 text-[11px] leading-relaxed">
              {t('leadArchitectDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-noir-950 p-3 rounded border border-noir-800">
              <span className="text-[10px] text-blood-400 uppercase font-bold tracking-wider">
                {t('narrativeTitle')}
              </span>
              <ul className="mt-1 space-y-1 text-noir-300 text-[11px]">
                <li>• {getLoc(case001.title)}</li>
                <li>• {getLoc(case002.title)}</li>
                <li>• {getLoc(case003.title)}</li>
              </ul>
            </div>

            <div className="bg-noir-950 p-3 rounded border border-noir-800">
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                {t('audioEngineTitle')}
              </span>
              <p className="mt-1 text-noir-400 text-[11px] leading-relaxed">
                {t('audioEngineDesc')}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-noir-800 flex items-center justify-between text-[11px] text-noir-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-500" /> {t('allRightsReserved')} 2026
            </span>
            <span className="font-mono">v2.0.0 (Bilingual Edition)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-noir-950 px-6 py-3 border-t border-noir-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-noir-800 hover:bg-noir-700 text-noir-200 text-xs rounded transition-colors"
          >
            {t('closeBtn')}
          </button>
        </div>
      </div>
    </div>
  );
};
