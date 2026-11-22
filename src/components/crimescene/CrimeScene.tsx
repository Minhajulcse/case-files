import React, { useState } from 'react';
import {
  Search,
  Eye,
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
  const [showHiddenHints, setShowHiddenHints] = useState<boolean>(false);
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

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-105px)] bg-noir-950 overflow-hidden select-none font-mono">
      {/* Interactive 2D Crime Scene Canvas Area */}
      <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-noir-800">
        {/* Crime Scene Top Overlay Controls */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
          <div className="bg-noir-900/95 border border-noir-750 px-3.5 py-1.5 rounded shadow backdrop-blur pointer-events-auto">
            <span className="text-[10px] uppercase font-bold text-blood-400 tracking-wider">
              {t('locationLog')}
            </span>
            <div className="font-serif font-bold text-xs sm:text-sm text-white">
              {getLoc(crimeScene.roomTitle)}
            </div>
          </div>

          <div className="flex items-center space-x-2 pointer-events-auto">
            <button
              onClick={() => setFlashlightOn(!flashlightOn)}
              className={`p-2 rounded border backdrop-blur transition-all ${
                flashlightOn
                  ? 'bg-brass-950/80 border-brass-600/70 text-brass-300'
                  : 'bg-noir-900/90 border-noir-750 text-noir-400 hover:text-white'
              }`}
              title={t('flashlightToggle')}
            >
              <Flashlight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setShowHiddenHints(!showHiddenHints)}
              className={`p-2 rounded border backdrop-blur transition-all ${
                showHiddenHints
                  ? 'bg-blood-950/80 border-blood-600/70 text-blood-300'
                  : 'bg-noir-900/90 border-noir-750 text-noir-400 hover:text-white'
              }`}
              title={t('revealZones')}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center bg-noir-900/95 border border-noir-750 rounded p-1">
              <button
                onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.25))}
                disabled={zoomLevel <= 1}
                className="p-1 text-noir-400 hover:text-white disabled:opacity-30"
                title={t('zoomOut')}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] px-1.5 text-noir-300">{formatNum(Math.round(zoomLevel * 100))}%</span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(2, prev + 0.25))}
                disabled={zoomLevel >= 2}
                className="p-1 text-noir-400 hover:text-white disabled:opacity-30"
                title={t('zoomIn')}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scalable Crime Scene Canvas */}
        <div
          className="relative w-full h-full max-w-5xl max-h-[700px] flex items-center justify-center transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Architectural Scene Artwork */}
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

            {/* THEME 1: Victorian Study */}
            {crimeScene.sceneTheme === 'victorian_study' && (
              <g>
                <rect x="0" y="0" width="1000" height="380" fill="#181310" />
                <polygon points="0,380 1000,380 920,600 80,600" fill="#241a13" />
                <rect x="180" y="400" width="640" height="170" rx="4" fill="url(#carpetGrad)" stroke="#63390c" strokeWidth="2" />

                {/* Bookshelves */}
                <rect x="40" y="60" width="220" height="280" fill="#271912" stroke="#3d251a" strokeWidth="3" />
                <line x1="40" y1="120" x2="260" y2="120" stroke="#3d251a" strokeWidth="2" />
                <line x1="40" y1="180" x2="260" y2="180" stroke="#3d251a" strokeWidth="2" />
                <line x1="40" y1="240" x2="260" y2="240" stroke="#3d251a" strokeWidth="2" />

                {/* Grandfather Clock */}
                <rect x="150" y="160" width="60" height="200" rx="3" fill="#130f0c" stroke="#682c0b" strokeWidth="2" />
                <circle cx="180" cy="210" r="22" fill="#fef3c7" stroke="#92400e" strokeWidth="2" />
                <line x1="180" y1="210" x2="180" y2="196" stroke="#451a03" strokeWidth="2" />
                <line x1="180" y1="210" x2="190" y2="216" stroke="#451a03" strokeWidth="2" />

                {/* Leaded Bay Window */}
                <rect x="290" y="70" width="120" height="180" rx="60" fill="#171f2c" stroke="#3b4759" strokeWidth="3" />
                <line x1="350" y1="70" x2="350" y2="250" stroke="#4d5c72" strokeWidth="1.5" />
                <line x1="290" y1="150" x2="410" y2="150" stroke="#4d5c72" strokeWidth="1.5" />

                {/* Fireplace */}
                <rect x="630" y="160" width="160" height="180" fill="#2d241f" stroke="#483a30" strokeWidth="4" />
                <rect x="660" y="220" width="100" height="120" rx="16" fill="#090706" />
                <ellipse cx="710" cy="320" rx="35" ry="12" fill="#c2410c" opacity="0.8" />
                <ellipse cx="710" cy="322" rx="20" ry="7" fill="#eab308" />

                {/* Liquor Sideboard */}
                <rect x="800" y="200" width="120" height="150" rx="3" fill="#251610" stroke="#4e2e1e" strokeWidth="3" />
                <rect x="825" y="235" width="25" height="40" fill="#b45309" opacity="0.7" rx="2" />
                <rect x="865" y="240" width="20" height="35" fill="#fef08a" opacity="0.6" rx="2" />

                {/* Mahogany Writing Desk & Victim */}
                <polygon points="360,320 640,320 680,440 320,440" fill="#321c12" stroke="#432618" strokeWidth="3" />
                <ellipse cx="500" cy="360" rx="36" ry="24" fill="#0c0908" />
                <circle cx="490" cy="335" r="16" fill="#17120e" stroke="#382920" strokeWidth="2" />
                <circle cx="560" cy="380" r="7" fill="#b45309" opacity="0.7" />
                <ellipse cx="575" cy="385" rx="14" ry="6" fill="#5c2b09" opacity="0.6" />

                <rect x="0" y="0" width="1000" height="600" fill="url(#studyLight)" />
              </g>
            )}

            {/* THEME 2: Safehouse Room 404 */}
            {crimeScene.sceneTheme === 'motel_safehouse' && (
              <g>
                <rect x="0" y="0" width="1000" height="360" fill="#10141a" />
                <polygon points="0,360 1000,360 900,600 100,600" fill="#171a22" />

                {/* Door Frame */}
                <rect x="90" y="100" width="110" height="260" fill="#1e2430" stroke="#2e3747" strokeWidth="3" />
                <line x1="180" y1="210" x2="200" y2="215" stroke="#dc2626" strokeWidth="3" />

                {/* Radiator */}
                <rect x="710" y="240" width="110" height="120" fill="#3a4556" stroke="#505f75" strokeWidth="2" />
                <line x1="730" y1="240" x2="730" y2="360" stroke="#252d3a" strokeWidth="2" />
                <line x1="750" y1="240" x2="750" y2="360" stroke="#252d3a" strokeWidth="2" />
                <line x1="770" y1="240" x2="770" y2="360" stroke="#252d3a" strokeWidth="2" />
                <line x1="790" y1="240" x2="790" y2="360" stroke="#252d3a" strokeWidth="2" />

                {/* Table */}
                <polygon points="300,240 450,240 470,330 280,330" fill="#2b3442" stroke="#3d495c" strokeWidth="2" />

                {/* Overturned Lamp & Synthetic Blood on Rug */}
                <ellipse cx="480" cy="460" rx="140" ry="70" fill="#221b1b" stroke="#3b0808" strokeWidth="1.5" />
                <ellipse cx="460" cy="465" rx="24" ry="12" fill="#7f1d1d" opacity="0.8" />
                <circle cx="490" cy="450" r="5" fill="#991b1b" />
                <circle cx="430" cy="475" r="4" fill="#991b1b" />
                <line x1="510" y1="410" x2="570" y2="470" stroke="#b45309" strokeWidth="3" />
                <polygon points="560,460 590,480 570,495" fill="#fde047" opacity="0.6" />

                {/* Kitchenette Hatch */}
                <rect x="850" y="160" width="80" height="90" fill="#18202b" stroke="#2a3545" strokeWidth="2" />
                <line x1="850" y1="160" x2="930" y2="250" stroke="#0a0e14" strokeWidth="2" />

                <rect x="0" y="0" width="1000" height="600" fill="url(#safehouseLight)" />
              </g>
            )}

            {/* THEME 3: Museum Sub-Level 2 Vault */}
            {crimeScene.sceneTheme === 'museum_vault' && (
              <g>
                <rect x="0" y="0" width="1000" height="340" fill="#090e1a" />
                <polygon points="0,340 1000,340 920,600 80,600" fill="#0c1222" stroke="#162035" strokeWidth="1.5" />

                {/* Laser Pillars */}
                <rect x="300" y="280" width="24" height="200" fill="#243044" stroke="#475569" strokeWidth="1.5" />
                <rect x="676" y="280" width="24" height="200" fill="#243044" stroke="#475569" strokeWidth="1.5" />
                <line x1="324" y1="330" x2="676" y2="330" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.8" />
                <line x1="324" y1="380" x2="676" y2="380" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.8" />
                <line x1="324" y1="430" x2="676" y2="430" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.8" />

                {/* Display Pedestal */}
                <rect x="440" y="280" width="120" height="150" fill="#162033" stroke="#0284c7" strokeWidth="2" />
                <rect x="450" y="200" width="100" height="90" fill="#0284c7" fillOpacity="0.08" stroke="#38bdf8" strokeWidth="1.5" />
                <ellipse cx="500" cy="275" rx="18" ry="9" fill="#0369a1" stroke="#bae6fd" strokeWidth="1" />

                {/* Breaker & Vent */}
                <rect x="780" y="90" width="100" height="90" fill="#162033" stroke="#475569" strokeWidth="2" />
                <line x1="790" y1="110" x2="870" y2="110" stroke="#334155" strokeWidth="1.5" />
                <line x1="790" y1="130" x2="870" y2="130" stroke="#334155" strokeWidth="1.5" />
                <line x1="790" y1="150" x2="870" y2="150" stroke="#334155" strokeWidth="1.5" />

                {/* Biometric Terminal */}
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

          {/* Forensic Evidence Numbered Marker Tents [1], [2], [3] on Crime Scene */}
          {crimeScene.hotspots.map((hotspot, idx) => {
            const isDiscovered = discoveredIds.includes(hotspot.revealsEvidenceId);
            const isExamined = caseState.examinedHotspotIds.includes(hotspot.id);

            if (hotspot.isHidden && !showHiddenHints && !isExamined) {
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
                className="absolute z-20 cursor-pointer group p-2"
              >
                {/* Authentic Yellow Forensic Evidence Marker Tent */}
                <div
                  className={`marker-tent transition-transform transform group-hover:scale-125 ${
                    isDiscovered ? 'opacity-70 saturate-50' : 'animate-bounce'
                  }`}
                  title={getLoc(hotspot.name)}
                >
                  {formatNum(idx + 1)}
                </div>

                {/* Marker Tooltip */}
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
      </div>

      {/* Right Inspection Sidebar: Hotspots & Investigation Log */}
      <div className="w-full lg:w-80 bg-noir-900 border-t lg:border-t-0 border-noir-800 flex flex-col justify-between overflow-y-auto">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-noir-800 pb-2">
            <span className="text-xs uppercase font-bold text-brass-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> {t('pointsOfInterest')}
            </span>
            <span className="text-[10px] text-noir-400 font-mono">
              {formatNum(caseState.examinedHotspotIds.length)} / {formatNum(crimeScene.hotspots.length)} {t('examined')}
            </span>
          </div>

          <p className="text-xs text-noir-400 leading-relaxed">
            {language === 'bn'
              ? 'অপরাধস্থলের প্রতিটি হলুদ মার্কার tent ক্লিক করে পুঙ্খানুপুঙ্খ ফরেনসিক নিরীক্ষা চালান।'
              : 'Click any numbered evidence marker tent to initiate a forensic examination.'}
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
                  className={`p-2.5 rounded border text-xs cursor-pointer transition-all flex items-center justify-between ${
                    isDiscovered
                      ? 'bg-noir-950 border-green-900/40 text-noir-300 hover:border-green-700'
                      : isExamined
                      ? 'bg-noir-950 border-brass-600/50 text-white hover:border-brass-500'
                      : 'bg-noir-950/60 border-noir-800 text-noir-400 hover:border-blood-700/60'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <span className="w-5 h-5 rounded bg-noir-850 border border-noir-700 flex items-center justify-center text-[10px] font-bold text-brass-400 flex-shrink-0">
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
            <Info className="w-3.5 h-3.5 text-brass-400" />
            <span>{t('directiveTip')}</span>
          </div>
          <p className="text-[11px] leading-relaxed text-noir-400">
            {t('directiveDesc')}
          </p>
        </div>
      </div>

      {/* Hotspot Inspection Modal */}
      <SceneHotspotModal
        hotspot={selectedHotspot}
        evidence={currentEvidence}
        isAlreadyDiscovered={isAlreadyDiscovered}
        onClose={() => setSelectedHotspot(null)}
        onAddEvidence={handleAddEvidence}
      />
    </div>
  );
};
