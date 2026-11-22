import React from 'react';
import { X, Search, CheckCircle2, BookmarkPlus, ArrowRight, Sparkles } from 'lucide-react';
import { HotspotItem, EvidenceItem } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { getLocalizedCategory } from '../../i18n';

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
  const { setInvestigationTab, language, t, getLoc } = useGame();

  if (!hotspot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-mono">
      <div className="relative w-full max-w-xl bg-noir-900 border border-noir-700 rounded shadow-2xl overflow-hidden text-noir-200">
        {/* Header */}
        <div className="bg-noir-950 px-6 py-4 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-blood-950 border border-blood-800 flex items-center justify-center">
              <Search className="w-4 h-4 text-blood-400" />
            </div>
            <div>
              <span className="text-[10px] text-blood-400 uppercase font-bold tracking-widest">
                {t('crimeSceneInspection')}
              </span>
              <h2 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide">
                {getLoc(hotspot.name)}
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
        <div className="p-6 space-y-4">
          {/* Visual Close-up Simulation Graphic */}
          <div className="relative w-full h-36 rounded bg-[#0d0f14] border border-[#232936] flex items-center justify-center overflow-hidden">
            <div className="text-center space-y-1.5 z-10 p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-noir-850 border border-brass-600/50 flex items-center justify-center shadow-lg">
                <Search className="w-6 h-6 text-brass-400 animate-pulse" />
              </div>
              <div className="font-serif font-bold text-xs text-brass-200">
                {getLoc(hotspot.name)}
              </div>
              <p className="text-[11px] text-noir-400 max-w-sm mx-auto">
                {getLoc(hotspot.description)}
              </p>
            </div>
          </div>

          {/* Discovery Note */}
          <div className="bg-[#12151c] p-4 rounded border border-[#282f3d] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brass-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> {t('forensicFieldNote')}
              </span>
              {isAlreadyDiscovered ? (
                <span className="text-[10px] text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {t('loggedInLocker')}
                </span>
              ) : (
                <span className="text-[10px] text-blood-400 font-bold uppercase tracking-wider animate-pulse">
                  {t('newClueUncovered')}
                </span>
              )}
            </div>
            <p className="text-xs text-noir-200 leading-relaxed italic">
              "{getLoc(hotspot.discoveryNote)}"
            </p>
          </div>

          {/* Connected Evidence Card Preview */}
          {evidence && (
            <div className="bg-[#161a22] p-3.5 rounded border border-[#262c38] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-noir-400 font-bold">
                  {getLocalizedCategory(evidence.category, language)}
                </span>
                <div className="font-bold text-xs text-white mt-0.5">{getLoc(evidence.name)}</div>
              </div>

              <span className="text-[10px] text-brass-400 font-mono">
                #{evidence.id}
              </span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-noir-950 px-6 py-4 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-noir-850 hover:bg-noir-800 text-noir-300 text-xs font-mono rounded transition-colors"
          >
            {t('returnToScene')}
          </button>

          {!isAlreadyDiscovered ? (
            <button
              onClick={() => onAddEvidence(hotspot.revealsEvidenceId)}
              className="px-5 py-2 bg-blood-800 hover:bg-blood-700 text-white text-xs font-bold font-mono rounded shadow flex items-center space-x-2 transition-all"
            >
              <BookmarkPlus className="w-4 h-4" />
              <span>{t('collectEvidence')}</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                setInvestigationTab('evidence');
              }}
              className="px-4 py-2 bg-noir-850 hover:bg-noir-800 border border-noir-750 text-brass-300 text-xs font-mono rounded flex items-center space-x-1.5 transition-colors"
            >
              <span>{t('examineInLocker')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
