import React, { useEffect, useState } from 'react';
import {
  X,
  Search,
  CheckCircle2,
  BookmarkPlus,
  ArrowRight,
  Sparkles,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileSearch,
  Tag
} from 'lucide-react';
import { HotspotItem, EvidenceItem } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { getLocalizedCategory } from '../../i18n';

interface SceneHotspotModalProps {
  hotspot: HotspotItem | null;
  evidence: EvidenceItem | undefined;
  isAlreadyDiscovered: boolean;
  onClose: () => void;
  onAddEvidence: (evidenceId: string) => void;
  crimeSceneImage?: string;
}

export const SceneHotspotModal: React.FC<SceneHotspotModalProps> = ({
  hotspot,
  evidence,
  isAlreadyDiscovered,
  onClose,
  onAddEvidence,
  crimeSceneImage
}) => {
  const { setInvestigationTab, language, t, getLoc } = useGame();
  const [isMagnified, setIsMagnified] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!hotspot) return null;

  const isBengali = language === 'bn';

  // Calculate SVG ViewBox for 4K crop (3840 x 2160)
  const rect = hotspot.focusRect || {
    x: Math.max(0, hotspot.x - 6),
    y: Math.max(0, hotspot.y - 8),
    width: 12,
    height: 16
  };

  const fullW = 3840;
  const fullH = 2160;

  // Base bounding box from normalized percentages
  const baseW = (rect.width / 100) * fullW;
  const baseH = (rect.height / 100) * fullH;
  const centerX = (hotspot.x / 100) * fullW;
  const centerY = (hotspot.y / 100) * fullH;

  // Zoom / magnification scale factor
  const zoomFactor = isMagnified ? 0.65 : 1.0;
  const cropW = baseW * zoomFactor;
  const cropH = baseH * zoomFactor;
  const cropX = Math.max(0, Math.min(fullW - cropW, centerX - cropW / 2));
  const cropY = Math.max(0, Math.min(fullH - cropH, centerY - cropH / 2));

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md ${
        isBengali ? 'font-bengali' : 'font-mono'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hotspot-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-noir-900 border border-noir-700 rounded-lg shadow-2xl overflow-hidden text-noir-200 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-noir-950 px-5 py-3.5 border-b border-noir-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-amber-950/80 border border-amber-600/60 flex items-center justify-center text-amber-400">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-widest block">
                {t('crimeSceneInspection')}
              </span>
              <h2
                id="hotspot-modal-title"
                className="font-serif font-bold text-sm sm:text-base text-white tracking-wide"
              >
                {getLoc(hotspot.name)}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-noir-400 hover:text-white hover:bg-noir-800 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* REAL 4K IMAGE CROPPED VIEWPORT */}
          <div className="relative w-full aspect-[16/9] rounded-md bg-black border border-noir-750 overflow-hidden shadow-inner group">
            {crimeSceneImage ? (
              <>
                <svg
                  viewBox={`${cropX} ${cropY} ${cropW} ${cropH}`}
                  preserveAspectRatio="xMidYMid slice"
                  className="w-full h-full object-cover transition-all duration-300 select-none"
                >
                  <image href={crimeSceneImage} width="3840" height="2160" />
                  {/* Forensic target focus reticle */}
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={Math.min(cropW, cropH) * 0.16}
                    fill="none"
                    stroke="rgba(245, 158, 11, 0.75)"
                    strokeWidth={Math.max(2, cropW * 0.005)}
                    strokeDasharray="6 3"
                    className="animate-pulse"
                  />
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={Math.max(3, cropW * 0.01)}
                    fill="#f59e0b"
                  />
                </svg>

                {/* Forensic Glass Scanlines Effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                    backgroundSize: '100% 4px'
                  }}
                />

                {/* Viewport Overlay Controls */}
                <div className="absolute top-2.5 right-2.5 flex items-center space-x-1.5 z-10">
                  <button
                    onClick={() => setIsMagnified(!isMagnified)}
                    className="px-2.5 py-1 bg-noir-950/85 hover:bg-noir-900 border border-amber-600/50 hover:border-amber-400 text-amber-300 text-[10px] rounded flex items-center gap-1 backdrop-blur shadow transition-all"
                    title={isMagnified ? 'Zoom Out' : 'Forensic Magnifier (1.5x)'}
                  >
                    {isMagnified ? (
                      <>
                        <ZoomOut className="w-3 h-3" />
                        <span>1.0x</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-3 h-3" />
                        <span>1.5x {t('magnifierToggle')}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Viewport Coordinates Watermark */}
                <div className="absolute bottom-2 left-2 bg-black/75 px-2 py-0.5 rounded text-[9px] font-mono text-noir-400 border border-noir-800 pointer-events-none">
                  SECTOR: X {Math.round(hotspot.x)}% • Y {Math.round(hotspot.y)}% • 4K CROP
                </div>
              </>
            ) : (
              /* Fallback for cases without photographic background (Case 002/003) */
              <div className="w-full h-full flex flex-col items-center justify-center bg-noir-950 text-center p-4">
                <Search className="w-8 h-8 text-amber-400 animate-pulse mb-2" />
                <span className="font-serif font-bold text-xs text-white">
                  {getLoc(hotspot.name)}
                </span>
                <p className="text-[11px] text-noir-400 mt-1 max-w-sm">
                  {getLoc(hotspot.description)}
                </p>
              </div>
            )}
          </div>

          {/* Initial Physical Observation */}
          <div className="bg-[#12161f] p-3.5 rounded border border-[#232936] space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
              <FileSearch className="w-3.5 h-3.5" />
              {t('initialObservation')}
            </span>
            <p className="text-xs text-noir-200 leading-relaxed">
              {getLoc(hotspot.description)}
            </p>
          </div>

          {/* Detailed Forensic Field Note */}
          <div className="bg-[#141822] p-4 rounded border border-[#262c3b] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {t('forensicFieldNote')}
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
            <p className="text-xs text-amber-100/90 leading-relaxed italic bg-black/30 p-3 rounded border border-noir-800">
              "{getLoc(hotspot.discoveryNote)}"
            </p>
          </div>

          {/* Connected Evidence Card Preview */}
          {evidence && (
            <div className="bg-[#151923] p-3.5 rounded border border-[#272e3d] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-noir-400 font-bold">
                  {getLocalizedCategory(evidence.category, language)}
                </span>
                <div className="font-bold text-xs text-white mt-0.5">
                  {getLoc(evidence.name)}
                </div>
              </div>

              <span className="text-[10px] text-amber-400 font-mono">
                #{evidence.id}
              </span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-noir-950 px-5 py-3.5 border-t border-noir-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-noir-850 hover:bg-noir-800 text-noir-300 text-xs font-mono rounded transition-colors"
          >
            {t('returnToScene')}
          </button>

          {!isAlreadyDiscovered ? (
            <button
              onClick={() => onAddEvidence(hotspot.revealsEvidenceId)}
              className="px-5 py-2 bg-blood-800 hover:bg-blood-700 text-white text-xs font-bold font-mono rounded shadow flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
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
              className="px-4 py-2 bg-noir-850 hover:bg-noir-800 border border-noir-750 text-amber-300 text-xs font-mono rounded flex items-center space-x-1.5 transition-colors"
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