import React from 'react';
import { X, Search, CheckCircle2, BookmarkPlus, ArrowRight, Sparkles } from 'lucide-react';
import { HotspotItem, EvidenceItem } from '../../types/game';
import { useGame } from '../../context/GameContext';

interface SceneHotspotModalProps {
  hotspot: HotspotItem | null;
  evidence: EvidenceItem | undefined;
  isAlreadyDiscovered: boolean;
  onClose: () => void;
  onAddEvidence: (evidenceId: string) => void;
}

export const SceneHotspotModal: React.FC<SceneHotspotModalProps> = ({
  hotspot,
  evidence,
  isAlreadyDiscovered,
  onClose,
  onAddEvidence
}) => {
  const { setInvestigationTab } = useGame();

  if (!hotspot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-noir-900 border-2 border-noir-700 rounded-lg shadow-2xl overflow-hidden font-mono text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blood-950/80 border border-blood-800 flex items-center justify-center">
              <Search className="w-4 h-4 text-blood-400" />
            </div>
            <div>
              <span className="text-[10px] text-blood-500 uppercase font-bold tracking-widest">
                CRIME SCENE INSPECTION
              </span>
              <h2 className="font-serif font-bold text-base text-white tracking-wide">
                {hotspot.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Visual Close-up Simulation Graphic */}
          <div className="relative w-full h-44 rounded-lg bg-gradient-to-b from-noir-950 via-noir-900 to-black border border-noir-800 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,56,0.1),transparent_70%)]" />

            {/* Close-up Forensic graphic / icon */}
            <div className="text-center space-y-2 z-10 p-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-noir-800/80 border border-amber-600/50 flex items-center justify-center shadow-lg">
                <Search className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>
              <div className="font-serif font-bold text-sm text-amber-200">
                {hotspot.name} — Macrophotographic Scan
              </div>
              <p className="text-[11px] text-noir-400 max-w-sm mx-auto">
                {hotspot.description}
              </p>
            </div>
          </div>

          {/* Discovery Note */}
          <div className="bg-noir-950 p-4 rounded-lg border border-amber-600/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Forensic Field Note
              </span>
              {isAlreadyDiscovered ? (
                <span className="text-[10px] text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Logged in Evidence Locker
                </span>
              ) : (
                <span className="text-[10px] text-blood-400 font-bold uppercase tracking-wider animate-pulse">
                  New Clue Uncovered!
                </span>
              )}
            </div>
            <p className="text-xs text-noir-200 leading-relaxed italic">
              "{hotspot.discoveryNote}"
            </p>
          </div>

          {/* Connected Evidence Card Preview */}
          {evidence && (
            <div className="bg-noir-850 p-3.5 rounded border border-noir-700/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-noir-400 font-bold">
                  {evidence.category} Item
                </span>
                <div className="font-bold text-xs text-white mt-0.5">{evidence.name}</div>
              </div>

              <span className="text-[10px] text-amber-400 font-mono">
                ID #{evidence.id}
              </span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-noir-950 px-6 py-4 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-noir-800 hover:bg-noir-700 text-noir-300 text-xs font-mono rounded transition-colors"
          >
            Return to Scene
          </button>

          {!isAlreadyDiscovered ? (
            <button
              onClick={() => onAddEvidence(hotspot.revealsEvidenceId)}
              className="px-5 py-2 bg-blood-600 hover:bg-blood-500 text-white text-xs font-bold font-mono rounded shadow-lg flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <BookmarkPlus className="w-4 h-4" />
              <span>Collect into Evidence Locker</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                setInvestigationTab('evidence');
              }}
              className="px-4 py-2 bg-noir-800 hover:bg-noir-700 border border-noir-700 text-amber-300 text-xs font-mono rounded flex items-center space-x-1.5 transition-colors"
            >
              <span>Examine in Evidence Locker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
