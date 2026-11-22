import React from 'react';
import { X, Feather, ShieldCheck } from 'lucide-react';

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreditsModal: React.FC<CreditsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-noir-900 border border-noir-700 rounded-lg shadow-2xl overflow-hidden font-mono text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Feather className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-serif font-bold text-base text-amber-200 tracking-wide">
                CASE FILES — PRODUCTION CREDITS
              </h2>
              <span className="text-xs text-noir-400">Design, Narrative & Systems Architecture</span>
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
              Game Direction & Systems Architecture
            </span>
            <p className="text-white font-serif text-sm font-bold">
              Senior Game Developer & Narrative Systems Architect
            </p>
            <p className="text-noir-400 text-[11px] leading-relaxed">
              Engineered with clean React, TypeScript, Tailwind CSS, and Web Audio API synthesis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-noir-950 p-3 rounded border border-noir-800">
              <span className="text-[10px] text-blood-400 uppercase font-bold tracking-wider">
                Narrative Mysteries
              </span>
              <ul className="mt-1 space-y-1 text-noir-300 text-[11px]">
                <li>• Case 001: The Last Alibi</li>
                <li>• Case 002: The Missing Witness</li>
                <li>• Case 003: The Museum Heist</li>
              </ul>
            </div>

            <div className="bg-noir-950 p-3 rounded border border-noir-800">
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                Audio Engine
              </span>
              <p className="mt-1 text-noir-300 text-[11px] leading-relaxed">
                100% procedural Web Audio API synthesis: rain noise, sub-bass drones, mechanical typewriter keys, and deduction chords.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-noir-800 flex items-center justify-between text-[11px] text-noir-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-500" /> All Rights Reserved — CASE FILES 2026
            </span>
            <span>Version 1.0.0</span>
          </div>
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
