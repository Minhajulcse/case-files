import React, { useState } from 'react';
import {
  Search,
  Eye,
  EyeOff,
  ZoomIn,
  ZoomOut,
  CheckCircle2,
  Sparkles,
  Info,
  Layers,
  Flashlight
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { HotspotItem } from '../../types/game';
import { SceneHotspotModal } from './SceneHotspotModal';
import { sound } from '../../utils/audio';

export const CrimeScene: React.FC = () => {
  const { activeCase, caseState, discoverClue, examineHotspot, language, t, getLoc, formatNum } = useGame();
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showClues, setShowClues] = useState<boolean>(false);
  const [flashlightOn, setFlashlightOn] = useState<boolean>(true);

  if (!activeCase || !caseState) return null;

  const { crimeScene } = activeCase;
  const discoveredIds = caseState.discoveredEvidenceIds;

  const handleHotspotClick = (hotspot: HotspotItem) => {
    sound.playCamera();
    examineHotspot(hotspot.id);
    setSelectedHotspot(hotspot);
  };

  const handleAddEvidence = (evidenceId: string) => {
    if (selectedHotspot) {
      discoverClue(evidenceId, selectedHotspot.id);
      setSelectedHotspot(null);
    }
  };

  const currentEvidence = selectedHotspot
    ? activeCase.evidence.find(e => e.id === selectedHotspot.revealsEvidenceId)
    : undefined;

  const isAlreadyDiscovered = selectedHotspot
    ? discoveredIds.includes(selectedHotspot.revealsEvidenceId)
    : false;

  const isBengali = language === 'bn';

  return (
    <div className={`flex flex-col lg:flex-row h-[calc(100vh-105px)] bg-noir-950 overflow-hidden select-none ${isBengali ? 'font-bengali' : 'font-mono'}`}>
      {/* Crime Scene Visual Canvas Area */}
      <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-noir-800 p-2 sm:p-4">
        {/* Crime Scene Top Overlay Controls */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
          {/* Location Title */}
          <div className="bg-noir-950/95 border border-noir-750 px-3.5 py-1.5 rounded-lg shadow-xl backdrop-blur pointer-events-auto">
            <span className="text-[10px] uppercase font-bold text-blood-400 tracking-wider block">
              {t('locationLog')}
            </span>
            <div className="font-serif font-bold text-xs sm:text-sm text-white truncate max-w-xs sm:max-w-md">
              {getLoc(crimeScene.roomTitle)}
            </div>
          </div>

          {/* Action Controls: Eye Clue Reveal, Flashlight, Zoom */}
          <div className="flex items-center space-x-2 pointer-events-auto">
            {/* Primary Eye Button for Reveal/Hide Clues */}
            <button
              onClick={() => {
                sound.playPaper();
                setShowClues(prev => !prev);
              }}
              className={`px-3 py-1.5 rounded-lg border backdrop-blur transition-all flex items-center space-x-1.5 shadow-md ${
                showClues
                  ? 'bg-amber-950/90 border-amber-500 text-amber-300 ring-1 ring-amber-400/50'
                  : 'bg-noir-900/90 border-noir-700 text-amber-400 hover:text-white hover:border-amber-500'
              }`}
              title={showClues ? t('hideClues') : t('revealClues')}
            >
              {showClues ? (
                <>
                  <EyeOff className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold font-mono">{t('hideClues')}</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-xs font-bold font-mono text-amber-300">{t('revealClues')}</span>
                </>
              )}
            </button>

            {/* Flashlight Toggle */}
            <button
              onClick={() => setFlashlightOn(!flashlightOn)}
              className={`p-2 rounded-lg border backdrop-blur transition-all ${
                flashlightOn
                  ? 'bg-amber-950/90 border-amber-600/70 text-amber-300 shadow-md'
                  : 'bg-noir-900/90 border-noir-750 text-noir-400 hover:text-white'
              }`}
              title={t('flashlightToggle')}
            >
              <Flashlight className="w-3.5 h-3.5" />
            </button>

            {/* Zoom Controls */}
            <div className="flex items-center bg-noir-900/95 border border-noir-750 rounded-lg p-1">
              <button
                onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.25))}
                disabled={zoomLevel <= 1}
                className="p-1 text-noir-400 hover:text-white disabled:opacity-30 transition-colors"
                title={t('zoomOut')}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] px-1.5 text-noir-300 font-mono">
                {formatNum(Math.round(zoomLevel * 100))}%
              </span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(2, prev + 0.25))}
                disabled={zoomLevel >= 2}
                className="p-1 text-noir-400 hover:text-white disabled:opacity-30 transition-colors"
                title={t('zoomIn')}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scalable Crime Scene Canvas Wrapper */}
        <div
          className="relative w-full h-full max-w-6xl max-h-[780px] flex items-center justify-center transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* CASE 001: 4K HIGH RES CINEMATIC IMAGE CRIME SCENE */}
          {crimeScene.imageUrl ? (
            <div
              className="relative w-full aspect-[16/9] max-h-full rounded-lg overflow-hidden shadow-2xl border border-noir-750 bg-black flex items-center justify-center select-none"
              style={{
                maxHeight: '100%',
                maxWidth: 'calc(100vh * 16 / 9)'
              }}
            >
              <img
                src={crimeScene.imageUrl}
                alt={getLoc(crimeScene.roomTitle)}
                className="w-full h-full object-cover pointer-events-none select-none transition-opacity duration-300"
                draggable={false}
              />

              {/* Atmospheric lighting & flashlight overlay */}
              {flashlightOn && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.75) 100%)'
                  }}
                />
              )}

              {/* Clean View Notice (Fades out when clues revealed) */}
              {!showClues && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-noir-950/85 border border-amber-600/30 text-noir-300 text-[11px] px-3.5 py-1.5 rounded-full backdrop-blur shadow-lg pointer-events-none animate-fadeIn flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t('cleanSceneNotice')}</span>
                </div>
              )}

              {/* Interactive Hotspot Markers on the 16:9 Image - RENDERED ONLY WHEN showClues IS TRUE! */}
              {showClues &&
                crimeScene.hotspots.map((hotspot, idx) => {
                  const isDiscovered = discoveredIds.includes(hotspot.revealsEvidenceId);
                  const isExamined = caseState.examinedHotspotIds.includes(hotspot.id);

                  if (hotspot.isHidden && !isExamined) {
                    return null;
                  }

                  return (
                    <div
                      key={hotspot.id}
                      onClick={() => handleHotspotClick(hotspot)}
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className="absolute z-20 cursor-pointer group p-2 focus:outline-none animate-fadeIn"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleHotspotClick(hotspot);
                        }
                      }}
                      aria-label={getLoc(hotspot.name)}
                    >
                      {/* Authentic Forensic Evidence Marker Tent */}
                      <div
                        className={`marker-tent transition-all transform duration-200 group-hover:scale-125 group-hover:shadow-xl ${
                          isDiscovered
                            ? 'opacity-80 saturate-75 border-green-500/50'
                            : 'ring-2 ring-amber-400/90 shadow-amber-900/60'
                        }`}
                        title={getLoc(hotspot.name)}
                      >
                        {formatNum(idx + 1)}
                      </div>

                      {/* Subtle pulse indicator on undiscovered clues */}
                      {!isDiscovered && (
                        <span className="absolute inset-1 rounded-full border border-amber-400/40 animate-ping pointer-events-none" />
                      )}

                      {/* Marker Tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-noir-950/95 border border-noir-700 text-white text-[11px] font-mono px-2.5 py-1 rounded-md shadow-2xl z-30 backdrop-blur-sm">
                        <div className="font-bold flex items-center gap-1.5">
                          {isDiscovered ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          )}
                          <span>{getLoc(hotspot.name)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            /* CASE 002 & CASE 003: PRESERVED ARCHITECTURAL SVG SCENE ARTWORK */
            <div className="relative w-full h-full flex items-center justify-center">
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              >
                <defs>
                  <radialGradient id="studyLight" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.22" />
                    <stop offset="60%" stopColor="#1a1410" stopOpacity="0.82" />
                    <stop offset="100%" stopColor="#0a0807" stopOpacity="0.98" />
                  </radialGradient>
                  <radialGradient id="safehouseLight" cx="40%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.18" />
                    <stop offset="70%" stopColor="#11151c" stopOpacity="0.86" />
                    <stop offset="100%" stopColor="#07090c" stopOpacity="0.98" />
                  </radialGradient>
                  <radialGradient id="vaultLight" cx="50%" cy="45%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.22" />
                    <stop offset="65%" stopColor="#0b1120" stopOpacity="0.86" />
                    <stop offset="100%" stopColor="#020617" stopOpacity="0.98" />
                  </radialGradient>
                  <linearGradient id="carpetGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4a1515" />
                    <stop offset="100%" stopColor="#240a0a" />
                  </linearGradient>
                </defs>

                {/* THEME 2: Safehouse Room 404 (Case 002) */}
                {crimeScene.sceneTheme === 'motel_safehouse' && (
                  <g>
                    <rect x="0" y="0" width="1000" height="360" fill="#10141a" />
                    <polygon points="0,360 1000,360 900,600 100,600" fill="#171a22" />
                    <rect x="90" y="100" width="110" height="260" fill="#1e2430" stroke="#2e3747" strokeWidth="3" />
                    <line x1="180" y1="210" x2="200" y2="215" stroke="#dc2626" strokeWidth="3" />
                    <rect x="710" y="240" width="110" height="120" fill="#3a4556" stroke="#505f75" strokeWidth="2" />
                    <line x1="730" y1="240" x2="730" y2="360" stroke="#252d3a" strokeWidth="2" />
                    <line x1="750" y1="240" x2="750" y2="360" stroke="#252d3a" strokeWidth="2" />
                    <polygon points="300,240 450,240 470,330 280,330" fill="#2b3442" stroke="#3d495c" strokeWidth="2" />
                    <ellipse cx="480" cy="460" rx="140" ry="70" fill="#221b1b" stroke="#3b0808" strokeWidth="1.5" />
                    <ellipse cx="460" cy="465" rx="24" ry="12" fill="#7f1d1d" opacity="0.8" />
                    <circle cx="490" cy="450" r="5" fill="#991b1b" />
                    <circle cx="430" cy="475" r="4" fill="#991b1b" />
                    <line x1="510" y1="410" x2="570" y2="470" stroke="#b45309" strokeWidth="3" />
                    <polygon points="560,460 590,480 570,495" fill="#fde047" opacity="0.6" />
                    <rect x="850" y="160" width="80" height="90" fill="#18202b" stroke="#2a3545" strokeWidth="2" />
                    <line x1="850" y1="160" x2="930" y2="250" stroke="#0a0e14" strokeWidth="2" />
                    <rect x="0" y="0" width="1000" height="600" fill="url(#safehouseLight)" />
                  </g>
                )}

                {/* THEME 3: Museum Sub-Level 2 Vault (Case 003) */}
                {crimeScene.sceneTheme === 'museum_vault' && (
                  <g>
                    <rect x="0" y="0" width="1000" height="340" fill="#090e1a" />
                    <polygon points="0,340 1000,340 920,600 80,600" fill="#0c1222" stroke="#162035" strokeWidth="1.5" />
                    <rect x="300" y="280" width="24" height="200" fill="#243044" stroke="#475569" strokeWidth="1.5" />
                    <rect x="676" y="280" width="24" height="200" fill="#243044" stroke="#475569" strokeWidth="1.5" />
                    <line x1="324" y1="330" x2="676" y2="330" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.8" />
                    <line x1="324" y1="380" x2="676" y2="380" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.8" />
                    <line x1="324" y1="430" x2="676" y2="430" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.8" />
                    <rect x="440" y="280" width="120" height="150" fill="#162033" stroke="#0284c7" strokeWidth="2" />
                    <rect x="450" y="200" width="100" height="90" fill="#0284c7" fillOpacity="0.08" stroke="#38bdf8" strokeWidth="1.5" />
                    <ellipse cx="500" cy="275" rx="18" ry="9" fill="#0369a1" stroke="#bae6fd" strokeWidth="1" />
                    <rect x="780" y="90" width="100" height="90" fill="#162033" stroke="#475569" strokeWidth="2" />
                    <line x1="790" y1="110" x2="870" y2="110" stroke="#334155" strokeWidth="1.5" />
                    <line x1="790" y1="130" x2="870" y2="130" stroke="#334155" strokeWidth="1.5" />
                    <line x1="790" y1="150" x2="870" y2="150" stroke="#334155" strokeWidth="1.5" />
                    <rect x="180" y="220" width="70" height="100" fill="#162033" stroke="#0284c7" strokeWidth="1.5" />
                    <rect x="195" y="235" width="40" height="30" fill="#0284c7" fillOpacity="0.25" />
                    <rect x="0" y="0" width="1000" height="600" fill="url(#vaultLight)" />
                  </g>
                )}

                {/* Flashlight Spotlight Effect */}
                {flashlightOn && (
                  <circle
                    cx="500"
                    cy="300"
                    r="450"
                    fill="none"
                    stroke="rgba(255,255,255,0.02)"
                    strokeWidth="100"
                    pointerEvents="none"
                  />
                )}
              </svg>

              {/* Forensic Evidence Numbered Marker Tents on SVG Crime Scene */}
              {showClues &&
                crimeScene.hotspots.map((hotspot, idx) => {
                  const isDiscovered = discoveredIds.includes(hotspot.revealsEvidenceId);
                  const isExamined = caseState.examinedHotspotIds.includes(hotspot.id);

                  if (hotspot.isHidden && !isExamined) {
                    return null;
                  }

                  return (
                    <div
                      key={hotspot.id}
                      onClick={() => handleHotspotClick(hotspot)}
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className="absolute z-20 cursor-pointer group p-2 animate-fadeIn"
                    >
                      <div
                        className={`marker-tent transition-transform transform group-hover:scale-125 ${
                          isDiscovered ? 'opacity-70 saturate-50' : 'animate-bounce'
                        }`}
                        title={getLoc(hotspot.name)}
                      >
                        {formatNum(idx + 1)}
                      </div>

                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-noir-900 border border-noir-700 text-white text-[11px] font-mono px-2 py-0.5 rounded shadow z-30">
                        <div className="font-bold flex items-center gap-1">
                          {isDiscovered ? (
                            <CheckCircle2 className="w-3 h-3 text-green-400" />
                          ) : (
                            <Sparkles className="w-3 h-3 text-brass-400" />
                          )}
                          <span>{getLoc(hotspot.name)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>

      {/* Right Inspection Sidebar: Hotspots & Investigation Log (Revealed ONLY when showClues is true!) */}
      {showClues ? (
        <div className="w-full lg:w-80 bg-noir-900 border-t lg:border-t-0 border-noir-800 flex flex-col justify-between overflow-y-auto animate-fadeIn transition-all duration-300">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-noir-800 pb-2">
              <span className="text-xs uppercase font-bold text-amber-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> {t('pointsOfInterest')}
              </span>
              <span className="text-[10px] text-noir-400 font-mono">
                {formatNum(caseState.examinedHotspotIds.length)} / {formatNum(crimeScene.hotspots.length)} {t('examined')}
              </span>
            </div>

            <p className="text-xs text-noir-400 leading-relaxed">
              {language === 'bn'
                ? 'অপরাধস্থলের প্রতিটি মার্কার বা তালিকাভুক্ত পয়েন্ট ক্লিক করে পুঙ্খানুপুঙ্খ ফরেনসিক নিরীক্ষা চালান।'
                : 'Click any numbered evidence marker tent or item below to initiate a forensic examination.'}
            </p>

            {/* Hotspot List */}
            <div className="space-y-2">
              {crimeScene.hotspots.map((hs, idx) => {
                const isDiscovered = discoveredIds.includes(hs.revealsEvidenceId);
                const isExamined = caseState.examinedHotspotIds.includes(hs.id);

                return (
                  <div
                    key={hs.id}
                    onClick={() => handleHotspotClick(hs)}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${
                      isDiscovered
                        ? 'bg-noir-950 border-green-900/40 text-noir-300 hover:border-green-700'
                        : isExamined
                        ? 'bg-noir-950 border-amber-600/50 text-white hover:border-amber-500'
                        : 'bg-noir-950/60 border-noir-800 text-noir-400 hover:border-blood-700/60'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <span className="w-5 h-5 rounded bg-noir-850 border border-noir-700 flex items-center justify-center text-[10px] font-bold text-amber-400 flex-shrink-0">
                        {formatNum(idx + 1)}
                      </span>
                      <div className="min-w-0">
                        <div className="font-bold truncate text-noir-100">{getLoc(hs.name)}</div>
                        <div className="text-[10px] text-noir-500 truncate">{getLoc(hs.description)}</div>
                      </div>
                    </div>

                    <span className="text-[10px] text-noir-500 font-mono flex-shrink-0 ml-2">
                      {t('inspectAction')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scene Guidance Memo */}
          <div className="p-4 bg-noir-950 border-t border-noir-800 text-xs text-noir-400 space-y-1">
            <div className="flex items-center gap-1.5 text-noir-300 font-bold">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('directiveTip')}</span>
            </div>
            <p className="text-[11px] leading-relaxed text-noir-400">
              {t('directiveDesc')}
            </p>
          </div>
        </div>
      ) : (
        /* Minimized Collapsed Bar in Clean Mode */
        <div className="hidden lg:flex w-12 bg-noir-950/80 border-l border-noir-800/60 items-center justify-center py-6">
          <button
            onClick={() => {
              sound.playPaper();
              setShowClues(true);
            }}
            className="transform -rotate-90 whitespace-nowrap text-xs text-noir-500 hover:text-amber-400 font-mono flex items-center gap-2 transition-colors py-2"
            title={t('revealClues')}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('revealClues')}</span>
          </button>
        </div>
      )}

      {/* Hotspot Inspection Modal */}
      <SceneHotspotModal
        hotspot={selectedHotspot}
        evidence={currentEvidence}
        isAlreadyDiscovered={isAlreadyDiscovered}
        onClose={() => setSelectedHotspot(null)}
        onAddEvidence={handleAddEvidence}
        crimeSceneImage={crimeScene.imageUrl}
      />
    </div>
  );
};