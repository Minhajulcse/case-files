import React, { useState } from 'react';
import {
  Search,
  Eye,
  ZoomIn,
  ZoomOut,
  Maximize2,
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
  const { activeCase, caseState, discoverClue, examineHotspot } = useGame();
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
          <div className="bg-noir-900/90 border border-noir-700/80 px-3.5 py-1.5 rounded-lg backdrop-blur shadow-lg pointer-events-auto">
            <span className="text-[10px] uppercase font-bold text-blood-400 tracking-wider">
              LOCATION LOG
            </span>
            <div className="font-serif font-bold text-xs sm:text-sm text-white">
              {crimeScene.roomTitle}
            </div>
          </div>

          <div className="flex items-center space-x-2 pointer-events-auto">
            <button
              onClick={() => setFlashlightOn(!flashlightOn)}
              className={`p-2 rounded-lg border backdrop-blur transition-all ${
                flashlightOn
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                  : 'bg-noir-900/90 border-noir-700 text-noir-400 hover:text-white'
              }`}
              title="Toggle Investigation Flashlight"
            >
              <Flashlight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowHiddenHints(!showHiddenHints)}
              className={`p-2 rounded-lg border backdrop-blur transition-all ${
                showHiddenHints
                  ? 'bg-blood-500/20 border-blood-500/60 text-blood-300'
                  : 'bg-noir-900/90 border-noir-700 text-noir-400 hover:text-white'
              }`}
              title="Reveal All Hotspot Zones"
            >
              <Eye className="w-4 h-4" />
            </button>

            <div className="flex items-center bg-noir-900/90 border border-noir-700 rounded-lg p-1 backdrop-blur">
              <button
                onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.25))}
                disabled={zoomLevel <= 1}
                className="p-1 text-noir-400 hover:text-white disabled:opacity-40"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] px-1.5 text-noir-300">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(2, prev + 0.25))}
                disabled={zoomLevel >= 2}
                className="p-1 text-noir-400 hover:text-white disabled:opacity-40"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scalable Interactive Crime Scene SVG Canvas */}
        <div
          className="relative w-full h-full max-w-5xl max-h-[700px] flex items-center justify-center transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Architectural Scene SVG Artwork */}
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full object-contain filter drop-shadow-2xl"
          >
            <defs>
              <radialGradient id="studyLight" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#1e1814" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0c0908" stopOpacity="0.98" />
              </radialGradient>
              <radialGradient id="safehouseLight" cx="40%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.2" />
                <stop offset="70%" stopColor="#141820" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#080a0e" stopOpacity="0.98" />
              </radialGradient>
              <radialGradient id="vaultLight" cx="50%" cy="45%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="65%" stopColor="#0f172a" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#020617" stopOpacity="0.98" />
              </radialGradient>
              <linearGradient id="carpetGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#581c1c" />
                <stop offset="100%" stopColor="#310d0d" />
              </linearGradient>
            </defs>

            {/* THEME 1: Victorian Study */}
            {crimeScene.sceneTheme === 'victorian_study' && (
              <g>
                {/* Walls & Parquet Flooring */}
                <rect x="0" y="0" width="1000" height="380" fill="#1c1613" />
                <polygon points="0,380 1000,380 920,600 80,600" fill="#291e17" />
                <rect x="180" y="400" width="640" height="170" rx="8" fill="url(#carpetGrad)" stroke="#854d0e" strokeWidth="3" />

                {/* Bookshelves Background */}
                <rect x="40" y="60" width="220" height="280" fill="#2e1f18" stroke="#452c20" strokeWidth="4" />
                <line x1="40" y1="120" x2="260" y2="120" stroke="#452c20" strokeWidth="3" />
                <line x1="40" y1="180" x2="260" y2="180" stroke="#452c20" strokeWidth="3" />
                <line x1="40" y1="240" x2="260" y2="240" stroke="#452c20" strokeWidth="3" />

                {/* Grandfather Clock (hs-01-clock at 18%, 38%) */}
                <rect x="150" y="160" width="60" height="200" rx="4" fill="#17120f" stroke="#78350f" strokeWidth="3" />
                <circle cx="180" cy="210" r="22" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
                <line x1="180" y1="210" x2="180" y2="196" stroke="#451a03" strokeWidth="2" />
                <line x1="180" y1="210" x2="190" y2="216" stroke="#451a03" strokeWidth="2" />

                {/* Leaded Bay Window (hs-01-window at 32%, 28%) */}
                <rect x="290" y="70" width="120" height="180" rx="60" fill="#1e293b" stroke="#475569" strokeWidth="4" />
                <line x1="350" y1="70" x2="350" y2="250" stroke="#64748b" strokeWidth="2" />
                <line x1="290" y1="150" x2="410" y2="150" stroke="#64748b" strokeWidth="2" />

                {/* Fireplace (hs-01-fireplace at 68%, 65%) */}
                <rect x="630" y="160" width="160" height="180" fill="#332a24" stroke="#57483d" strokeWidth="6" />
                <rect x="660" y="220" width="100" height="120" rx="20" fill="#0c0a09" />
                <ellipse cx="710" cy="320" rx="35" ry="12" fill="#ea580c" opacity="0.8" />
                <ellipse cx="710" cy="322" rx="20" ry="7" fill="#facc15" />

                {/* Liquor Cabinet (hs-01-liquor at 82%, 45%) */}
                <rect x="800" y="200" width="120" height="150" rx="4" fill="#2d1c14" stroke="#5c3826" strokeWidth="4" />
                <rect x="825" y="235" width="25" height="40" fill="#ca8a04" opacity="0.7" rx="2" />
                <rect x="865" y="240" width="20" height="35" fill="#fef08a" opacity="0.6" rx="2" />

                {/* Large Mahogany Desk (hs-01-desk at 48%, 52%) */}
                <polygon points="360,320 640,320 680,440 320,440" fill="#3b2317" stroke="#523120" strokeWidth="4" />
                {/* Victim Silhouette Slumped over desk */}
                <ellipse cx="500" cy="360" rx="36" ry="24" fill="#0f0c0b" />
                <circle cx="490" cy="335" r="16" fill="#1c1613" stroke="#443329" strokeWidth="2" />
                {/* Spilled Brandy Snifter */}
                <circle cx="560" cy="380" r="7" fill="#ca8a04" opacity="0.7" />
                <ellipse cx="575" cy="385" rx="14" ry="6" fill="#78350f" opacity="0.6" />

                {/* Room Lighting Overlay */}
                <rect x="0" y="0" width="1000" height="600" fill="url(#studyLight)" />
              </g>
            )}

            {/* THEME 2: Motel Safehouse Room 404 */}
            {crimeScene.sceneTheme === 'motel_safehouse' && (
              <g>
                <rect x="0" y="0" width="1000" height="360" fill="#13171f" />
                <polygon points="0,360 1000,360 900,600 100,600" fill="#1a1e27" />

                {/* Splintered Entry Door (hs-02-door at 15%, 42%) */}
                <rect x="90" y="100" width="110" height="260" fill="#242b38" stroke="#374151" strokeWidth="4" />
                <line x1="180" y1="210" x2="200" y2="215" stroke="#ef4444" strokeWidth="3" />

                {/* Radiator (hs-02-radiator at 75%, 52%) */}
                <rect x="710" y="240" width="110" height="120" fill="#475569" stroke="#64748b" strokeWidth="3" />
                <line x1="730" y1="240" x2="730" y2="360" stroke="#334155" strokeWidth="3" />
                <line x1="750" y1="240" x2="750" y2="360" stroke="#334155" strokeWidth="3" />
                <line x1="770" y1="240" x2="770" y2="360" stroke="#334155" strokeWidth="3" />
                <line x1="790" y1="240" x2="790" y2="360" stroke="#334155" strokeWidth="3" />

                {/* Folding Desk & Laptop (hs-02-desk at 35%, 30%) */}
                <polygon points="300,240 450,240 470,330 280,330" fill="#334155" stroke="#475569" strokeWidth="3" />

                {/* Overturned Floor Lamp & Bloodied Rug (hs-02-rug at 45%, 60%) */}
                <ellipse cx="480" cy="460" rx="140" ry="70" fill="#292020" stroke="#450a0a" strokeWidth="2" />
                {/* Theatrical Blood Splatter */}
                <ellipse cx="460" cy="465" rx="24" ry="12" fill="#991b1b" opacity="0.8" />
                <circle cx="490" cy="450" r="5" fill="#b91c1c" />
                <circle cx="430" cy="475" r="4" fill="#b91c1c" />
                {/* Fallen Lamp */}
                <line x1="510" y1="410" x2="570" y2="470" stroke="#ca8a04" strokeWidth="4" />
                <polygon points="560,460 590,480 570,495" fill="#fef08a" opacity="0.7" />

                {/* Kitchenette Maintenance Panel (hs-02-vent at 88%, 35%) */}
                <rect x="850" y="160" width="80" height="90" fill="#1e293b" stroke="#334155" strokeWidth="3" />
                <line x1="850" y1="160" x2="930" y2="250" stroke="#0f172a" strokeWidth="2" />

                <rect x="0" y="0" width="1000" height="600" fill="url(#safehouseLight)" />
              </g>
            )}

            {/* THEME 3: Museum Sub-Level 2 Vault */}
            {crimeScene.sceneTheme === 'museum_vault' && (
              <g>
                <rect x="0" y="0" width="1000" height="340" fill="#0b1120" />
                <polygon points="0,340 1000,340 920,600 80,600" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />

                {/* Laser Grid Pillars (Optical perimeter) */}
                <rect x="300" y="280" width="24" height="200" fill="#334155" stroke="#64748b" strokeWidth="2" />
                <rect x="676" y="280" width="24" height="200" fill="#334155" stroke="#64748b" strokeWidth="2" />
                {/* Red Security Laser Lines */}
                <line x1="324" y1="330" x2="676" y2="330" stroke="#ef4444" strokeWidth="2" strokeDasharray="8 4" opacity="0.85" />
                <line x1="324" y1="380" x2="676" y2="380" stroke="#ef4444" strokeWidth="2" strokeDasharray="8 4" opacity="0.85" />
                <line x1="324" y1="430" x2="676" y2="430" stroke="#ef4444" strokeWidth="2" strokeDasharray="8 4" opacity="0.85" />

                {/* Central Display Pedestal & Acrylic Vitrine (hs-03-pedestal at 50%, 45%) */}
                <rect x="440" y="280" width="120" height="150" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
                {/* Acrylic Case */}
                <rect x="450" y="200" width="100" height="90" fill="#38bdf8" fillOpacity="0.1" stroke="#38bdf8" strokeWidth="2" />
                {/* Scarab on Black Velvet */}
                <ellipse cx="500" cy="275" rx="18" ry="9" fill="#0284c7" stroke="#e0f2fe" strokeWidth="1.5" />

                {/* Breaker & HVAC Vent (hs-03-breaker at 82%, 22%) */}
                <rect x="780" y="90" width="100" height="90" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
                <line x1="790" y1="110" x2="870" y2="110" stroke="#475569" strokeWidth="2" />
                <line x1="790" y1="130" x2="870" y2="130" stroke="#475569" strokeWidth="2" />
                <line x1="790" y1="150" x2="870" y2="150" stroke="#475569" strokeWidth="2" />

                {/* Biometric Wall Terminal (hs-03-terminal at 22%, 48%) */}
                <rect x="180" y="220" width="70" height="100" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
                <rect x="195" y="235" width="40" height="30" fill="#0284c7" fillOpacity="0.3" />

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
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="100"
                pointerEvents="none"
              />
            )}
          </svg>

          {/* Clickable Interactive Hotspot Markers Positioned over SVG */}
          {crimeScene.hotspots.map((hotspot) => {
            const isDiscovered = discoveredIds.includes(hotspot.revealsEvidenceId);
            const isExamined = caseState.examinedHotspotIds.includes(hotspot.id);

            // Hide if marked hidden and player hasn't toggled showHiddenHints
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
                className="absolute z-20 cursor-pointer group p-3"
              >
                {/* Hotspot Outer Pulsing Ring */}
                <div
                  className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 shadow-xl ${
                    isDiscovered
                      ? 'bg-green-950/80 border-green-500 text-green-300'
                      : isExamined
                      ? 'bg-amber-950/80 border-amber-500 text-amber-300 animate-pulse'
                      : 'bg-blood-950/90 border-blood-500 text-blood-300 animate-bounce'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />

                  {/* Pulsing Glow Ring */}
                  {!isDiscovered && (
                    <span className="absolute -inset-1 rounded-full border border-blood-400 opacity-75 animate-ping pointer-events-none" />
                  )}
                </div>

                {/* Hotspot Hover Tooltip Label */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-noir-900/95 border border-noir-700 text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-xl z-30">
                  <div className="font-bold flex items-center gap-1">
                    {isDiscovered ? (
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                    ) : (
                      <Sparkles className="w-3 h-3 text-amber-400" />
                    )}
                    <span>{hotspot.name}</span>
                  </div>
                  <div className="text-[10px] text-noir-400">{hotspot.description.slice(0, 45)}...</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Inspection Sidebar: Hotspots & Investigation Log */}
      <div className="w-full lg:w-80 bg-noir-900/95 border-t lg:border-t-0 border-noir-800 flex flex-col justify-between overflow-y-auto">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-noir-800 pb-2">
            <span className="text-xs uppercase font-bold text-amber-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Scene Points of Interest
            </span>
            <span className="text-[10px] text-noir-400 font-mono">
              {caseState.examinedHotspotIds.length} / {crimeScene.hotspots.length} Examined
            </span>
          </div>

          <p className="text-xs text-noir-400 leading-relaxed">
            Click any point on the scene canvas to initiate a detailed forensic inspection.
          </p>

          {/* Hotspot List */}
          <div className="space-y-2">
            {crimeScene.hotspots.map((hs) => {
              const isDiscovered = discoveredIds.includes(hs.revealsEvidenceId);
              const isExamined = caseState.examinedHotspotIds.includes(hs.id);

              return (
                <div
                  key={hs.id}
                  onClick={() => handleHotspotClick(hs)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${
                    isDiscovered
                      ? 'bg-noir-950/70 border-green-800/40 text-noir-300 hover:border-green-600'
                      : isExamined
                      ? 'bg-noir-950 border-amber-600/40 text-white hover:border-amber-500'
                      : 'bg-noir-950/40 border-noir-800 text-noir-400 hover:border-blood-700/60'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isDiscovered
                          ? 'bg-green-950 text-green-400 border border-green-700'
                          : isExamined
                          ? 'bg-amber-950 text-amber-400 border border-amber-700'
                          : 'bg-noir-800 text-noir-400'
                      }`}
                    >
                      {isDiscovered ? '✓' : '?'}
                    </div>
                    <div>
                      <div className="font-bold">{hs.name}</div>
                      <div className="text-[10px] text-noir-500 line-clamp-1">{hs.description}</div>
                    </div>
                  </div>

                  <span className="text-[10px] text-noir-500 font-mono">Inspect</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scene Guidance Memo */}
        <div className="p-4 bg-noir-950 border-t border-noir-800 text-xs text-noir-400 space-y-1">
          <div className="flex items-center gap-1.5 text-noir-300 font-bold">
            <Info className="w-3.5 h-3.5 text-amber-500" />
            <span>Detective Directive:</span>
          </div>
          <p className="text-[11px] leading-relaxed text-noir-400">
            Some physical clues are concealed. Use the Eye button to highlight hidden investigation points or inspect suspect statements for environmental clues.
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
