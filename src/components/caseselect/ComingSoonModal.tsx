import React, { useEffect } from 'react';
import { X, Clock, Lock, Sparkles, ShieldAlert } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseTitle?: string;
  caseNumber?: string;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
  caseTitle,
  caseNumber
}) => {
  const { language, t } = useGame();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isBengali = language === 'bn';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn select-none ${
        isBengali ? 'font-bengali' : 'font-mono'
      }`}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-noir-950 border border-amber-600/40 rounded-xl shadow-2xl overflow-hidden text-noir-200 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top gold accent bar */}
        <div className="h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />

        {/* Header */}
        <div className="px-6 pt-5 pb-2 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-amber-400 shadow-inner">
              <Clock className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                {caseNumber || (isBengali ? 'কেস ফাইল' : 'CASE FILE')}
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide">
                {caseTitle || t('comingSoonTitle')}
              </h3>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playPaper();
              onClose();
            }}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-850 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-noir-900 border border-amber-500/40 flex items-center justify-center shadow-lg relative">
            <Lock className="w-7 h-7 text-amber-400" />
            <span className="absolute -bottom-1 -right-1 p-1 bg-noir-950 rounded-full border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            </span>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-amber-200 tracking-wide">
              {t('comingSoonTitle')}
            </h4>
            <p className="text-xs text-noir-300 mt-2 leading-relaxed max-w-xs mx-auto">
              {t('comingSoonDesc')}
            </p>
          </div>

          <div className="bg-noir-900/80 border border-noir-800 rounded-lg p-3 text-[11px] text-noir-400 space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 font-bold">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{isBengali ? 'তদন্ত প্রস্তুতি চলছে' : 'Investigation In Development'}</span>
            </div>
            <p className="text-[10px] text-noir-500">
              {isBengali
                ? 'বর্তমানে শুধুমাত্র "কেস ০০১: শেষ অ্যালিবাই" সম্পূর্ণ খেলাযোগ্য।'
                : 'Currently only "Case 001: The Last Alibi" is active and playable.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-noir-900/90 px-6 py-3.5 border-t border-noir-850 flex justify-end">
          <button
            onClick={() => {
              sound.playPaper();
              onClose();
            }}
            className="px-5 py-2 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg text-xs shadow-md border border-amber-500/40 transition-all"
          >
            {isBengali ? 'বুঝেছি' : 'Understood'}
          </button>
        </div>
      </div>
    </div>
  );
};