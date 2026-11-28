import { Dialog } from '../common/Dialog';
import React, { useState } from 'react';
import { X, AlertOctagon } from 'lucide-react';
import { Suspect } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { getLocalizedCategory } from '../../i18n';

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
  const { activeCase, caseState, language, t, getLoc } = useGame();
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
    <Dialog label={t('confrontEvidenceTitle')} onClose={onClose}>
      <div className="relative w-full max-w-2xl bg-noir-900 border border-noir-700 rounded shadow-2xl overflow-hidden text-noir-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#12161f] px-6 py-4 border-b border-noir-750 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-blood-950 border border-blood-800 flex items-center justify-center">
              <AlertOctagon className="w-4 h-4 text-blood-400" />
            </div>
            <div>
              <span className="text-[10px] text-blood-400 uppercase font-bold tracking-widest">
                {t('confrontEvidenceTitle')}
              </span>
              <h2 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide">
                {getLoc(suspect.name)}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose} aria-label={t('closeBtn')}
            className="p-1 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Advisory */}
        <div className="bg-[#0f1218] px-6 py-2.5 border-b border-noir-800 text-xs text-noir-400">
          {t('confrontEvidenceDesc')}
        </div>

        {/* Evidence Selection List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {discoveredClues.length === 0 ? (
            <div className="text-center py-10 text-xs text-noir-500">
              {t('noEvidenceYet')}
            </div>
          ) : (
            discoveredClues.map(clue => {
              const isSelected = selectedClueId === clue.id;
              const hasBeenPresented = presentedAlready.includes(clue.id);

              return (
                <button type="button" aria-pressed={isSelected}
                  key={clue.id}
                  onClick={() => handleSelect(clue.id)}
                  className={`w-full text-left p-3.5 rounded border text-xs cursor-pointer transition-all flex items-start justify-between ${
                    isSelected
                      ? 'bg-blood-950/70 border-blood-500 shadow-sm'
                      : 'bg-[#12151c] border-[#252b38] hover:border-[#384256]'
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.2 rounded bg-noir-850 text-brass-400 border border-noir-750">
                        {getLocalizedCategory(clue.category, language)}
                      </span>
                      <span className="font-bold text-white text-xs">{getLoc(clue.name)}</span>
                      {hasBeenPresented && (
                        <span className="text-[10px] text-noir-500 italic">
                          {t('alreadyConfronted')}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-noir-400 line-clamp-2 leading-relaxed">
                      {getLoc(clue.description)}
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
                </button>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-noir-950 px-6 py-4 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-noir-850 hover:bg-noir-800 text-noir-300 text-xs font-mono rounded transition-colors"
          >
            {t('cancelBtn')}
          </button>

          <button
            onClick={handleConfirm}
            disabled={!selectedClueId}
            className="px-5 py-2 bg-blood-800 hover:bg-blood-700 disabled:opacity-40 disabled:hover:bg-blood-800 text-white text-xs font-bold font-mono rounded shadow transition-all"
          >
            {t('confrontBtn')}
          </button>
        </div>
      </div>
    </Dialog>
  );
};
