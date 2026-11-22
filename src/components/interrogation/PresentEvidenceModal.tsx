import React, { useState } from 'react';
import { X, Search, ShieldAlert, Pin, CheckCircle2, AlertOctagon } from 'lucide-react';
import { EvidenceItem, Suspect } from '../../types/game';
import { useGame } from '../../context/GameContext';

interface PresentEvidenceModalProps {
  isOpen: boolean;
  suspect: Suspect | null;
  onClose: () => void;
  onConfront: (evidenceId: string) => void;
}

export const PresentEvidenceModal: React.FC<PresentEvidenceModalProps> = ({
  isOpen,
  suspect,
  onClose,
  onConfront
}) => {
  const { activeCase, caseState } = useGame();
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);

  if (!isOpen || !suspect || !activeCase || !caseState) return null;

  const discoveredClues = activeCase.evidence.filter(e =>
    caseState.discoveredEvidenceIds.includes(e.id)
  );

  const presentedAlready = caseState.presentedClueIds[suspect.id] || [];

  const handleSelect = (id: string) => {
    setSelectedClueId(id);
  };

  const handleConfirm = () => {
    if (selectedClueId) {
      onConfront(selectedClueId);
      setSelectedClueId(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-noir-900 border-2 border-noir-700 rounded-lg shadow-2xl overflow-hidden font-mono text-noir-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blood-950 border border-blood-800 flex items-center justify-center">
              <AlertOctagon className="w-4 h-4 text-blood-400" />
            </div>
            <div>
              <span className="text-[10px] text-blood-400 uppercase font-bold tracking-widest">
                CROSS-EXAMINATION CONFRONTATION
              </span>
              <h2 className="font-serif font-bold text-base text-white tracking-wide">
                Confront {suspect.name} with Evidence
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

        {/* Advisory */}
        <div className="bg-noir-950/80 px-6 py-2.5 border-b border-noir-800 text-xs text-noir-400">
          Select an item from your evidence locker to present directly to{' '}
          <strong className="text-white">{suspect.name}</strong>. If the evidence exposes a contradiction in their testimony, their defense will crack.
        </div>

        {/* Evidence Selection List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {discoveredClues.length === 0 ? (
            <div className="text-center py-10 text-xs text-noir-500">
              No evidence collected yet. Explore the crime scene first.
            </div>
          ) : (
            discoveredClues.map(clue => {
              const isSelected = selectedClueId === clue.id;
              const hasBeenPresented = presentedAlready.includes(clue.id);

              return (
                <div
                  key={clue.id}
                  onClick={() => handleSelect(clue.id)}
                  className={`p-3.5 rounded-lg border text-xs cursor-pointer transition-all flex items-start justify-between ${
                    isSelected
                      ? 'bg-blood-950/70 border-blood-500 shadow-md'
                      : 'bg-noir-950 border-noir-800 hover:border-noir-700'
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.2 rounded bg-noir-850 text-amber-400 border border-noir-800">
                        {clue.category}
                      </span>
                      <span className="font-bold text-white text-xs">{clue.name}</span>
                      {hasBeenPresented && (
                        <span className="text-[10px] text-noir-500 italic">
                          (Already Confronted)
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-noir-400 line-clamp-2 leading-relaxed">
                      {clue.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 pt-1">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-blood-500 bg-blood-600'
                          : 'border-noir-700 bg-noir-800'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-noir-950 px-6 py-4 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-noir-800 hover:bg-noir-700 text-noir-300 text-xs font-mono rounded transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            disabled={!selectedClueId}
            className="px-5 py-2 bg-blood-600 hover:bg-blood-500 disabled:opacity-40 disabled:hover:bg-blood-600 text-white text-xs font-bold font-mono rounded shadow-lg transition-all"
          >
            Confront Suspect
          </button>
        </div>
      </div>
    </div>
  );
};
