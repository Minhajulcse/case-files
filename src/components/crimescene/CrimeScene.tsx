import { useRef, useState, type MouseEvent } from 'react';
import { Check, ChevronDown, Eye, Flashlight, Focus, MapPin, Minus, Plus, ScanLine, Search } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { type HotspotItem, type PlateId } from '../../types/game';
import { plateUrl, plates } from '../common/CaseArtwork';
import { hitTest, vertices } from '../../utils/hotspots';
import { sound } from '../../utils/audio';
import { SceneHotspotModal } from './SceneHotspotModal';

export function CrimeScene() {
  const { activeCase, caseState, examineHotspot, discoverClue, language, t, getLoc, formatNum } = useGame();
  const [plateId, setPlateId] = useState<PlateId>(activeCase?.crimeScene.plates[0] ?? 'study');
  const [selected, setSelected] = useState<HotspotItem | null>(null);
  const [zoom, setZoom] = useState(1);
  const [markers, setMarkers] = useState(false);
  const [light, setLight] = useState(false);
  const scroll = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0, touch: false, moved: false });
  if (!activeCase || !caseState) return null;
  const { crimeScene } = activeCase;
  const plate = plates[plateId];
  const spots = crimeScene.hotspots.filter(h => h.plate === plateId);
  const evidence = activeCase.evidence.find(e => e.id === selected?.revealsEvidenceId);
  const examined = (id: string) => caseState.examinedHotspotIds.includes(id);
  const recent = caseState.examinedHotspotIds.slice(-3).reverse()
    .map(id => crimeScene.hotspots.find(h => h.id === id))
    .filter((spot): spot is HotspotItem => !!spot);
  const bn = language === 'bn';
  const inspect = (spot: HotspotItem) => {
    if (selected) return;
    sound.playCamera();
    examineHotspot(spot.id);
    setSelected(spot);
  };
  const onImageClick = (event: MouseEvent<SVGSVGElement>) => {
    if (!event.detail) {
      const id = (event.target as Element).closest('[data-hotspot]')?.getAttribute('data-hotspot');
      const target = spots.find(h => h.id === id);
      if (target) inspect(target);
      return;
    }
    if (pointer.current.moved || event.detail > 1) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const spot = hitTest(spots, (event.clientX - rect.left) * 100 / rect.width, (event.clientY - rect.top) * 100 / rect.height,
      rect.width, rect.height, pointer.current.touch ? 13 : 0);
    if (spot) inspect(spot);
  };
  const choosePlate = (id: PlateId) => {
    setPlateId(id);
    setZoom(1);
    scroll.current?.scrollTo(0, 0);
  };
  return <div className="workspace-wrap scene-work">

    <div className="work-title">
      <div className="eyebrow">
        <MapPin size={14} />
        {t('locationLog')}
      </div>
      <h2>{getLoc(crimeScene.roomTitle)}</h2>
    </div>

    <div className="scene-layout">
      <section className="scene-viewer">

        <div className="scene-tools">
          <div className="plate-tabs">
            {crimeScene.plates.map(id => <button key={id} onClick={() => choosePlate(id)} aria-pressed={plateId === id}>{plates[id][language]}</button>)}
          </div>

          <div className="lens-tools">
            <button
              onClick={() => setLight(!light)}
              aria-label={t('flashlightToggle')}
              title={t('flashlightToggle')}
              aria-pressed={light}>
              <Flashlight />
            </button>

            <button
              onClick={() => setMarkers(!markers)}
              aria-label={t('revealZones')}
              title={t('revealZones')}
              aria-pressed={markers}>
              <Eye />
            </button>

            <button onClick={() => setZoom(z => Math.max(1, z - .25))} disabled={zoom <= 1} aria-label={t('zoomOut')}><Minus /></button>

            <span>
              {formatNum(zoom * 100)}%
            </span>
            <button onClick={() => setZoom(z => Math.min(2, z + .25))} disabled={zoom >= 2} aria-label={t('zoomIn')}><Plus /></button>

          </div>

        </div>

        <div className="plate-scroll" ref={scroll} style={{ aspectRatio: `${plate.width} / ${plate.height}` }}>

          <div className="plate-frame" style={{ width: `${zoom * 100}%` }}>

            <img
              src={plateUrl(plateId)}
              className={light ? 'light-on' : ''}
              width={plate.width}
              height={plate.height}
              alt={getLoc(crimeScene.roomDescription)}
              draggable={false} />

            <svg
              className="hit-layer"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-label={plate[language]}
              onPointerDown={e => { pointer.current = { x: e.clientX, y: e.clientY, touch: e.pointerType !== 'mouse', moved: false }; }}
              onPointerMove={e => { if (e.buttons && Math.hypot(e.clientX - pointer.current.x, e.clientY - pointer.current.y) > 9) pointer.current.moved = true; }}
              onPointerCancel={() => { pointer.current.moved = true; }}
              onClick={onImageClick}>

              <rect width="100" height="100" fill="transparent" pointerEvents="all" aria-hidden="true" />
              {spots.map(spot => <g
                key={spot.id}
                tabIndex={0}
                role="button"
                data-hotspot={spot.id}
                data-recent={(!selected && recent[0]?.id === spot.id) || undefined}
                aria-label={getLoc(spot.name)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (!e.repeat) inspect(spot);
                  }
                }}>

                <polygon
                  className="hit-area"
                  points={vertices(spot).map(p => p.join(',')).join(' ')}
                  vectorEffect="non-scaling-stroke" />

              </g>)}

            </svg>

            {markers && spots.map((spot, i) => <span
              key={spot.id}
              className={'plate-marker' + (examined(spot.id) ? ' seen' : '')}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}>
              {formatNum(i + 1)}
            </span>)}

          </div>

        </div>

        <div className="scene-caption">
          <span>
            <Focus size={16} />
            {bn ? 'খুঁটিনাটি দেখতে ছবিতে ট্যাপ করুন।' : 'Tap an object to examine it.'}
          </span>
          <span>
            {bn ? 'পরীক্ষিত' : 'Examined'}
            <b>
              {formatNum(spots.filter(h => examined(h.id)).length)} /
              {formatNum(spots.length)}
            </b>
          </span>
        </div>

      </section>

      <aside className="scene-log">
        <div className="eyebrow">
          <ScanLine size={15} />
          {bn ? 'পর্যবেক্ষণ' : 'Field observations'}
        </div>

        <h3>{plate[language]}</h3>
        <p>{getLoc(crimeScene.roomDescription)}</p>

        <details>
          <summary>
            {t('pointsOfInterest')}
            <ChevronDown size={16} />
          </summary>

          <div className="object-index">
            {spots.map((s, i) => <button key={s.id} onClick={() => inspect(s)}>
              <small>{formatNum(String(i + 1).padStart(2, '0'))}</small>
              {getLoc(s.name)}
              {examined(s.id) ? <Check /> : <Search />}
            </button>)}
          </div>
        </details>

        {recent.length > 0 && <div className="last-observation">
          <div className="lab-label">{bn ? 'সম্প্রতি পরীক্ষিত' : 'Recently examined'}</div>

          {recent.map(h => <button key={h.id} onClick={() => {
            choosePlate(h.plate);
            inspect(h);
          }}>
            <Check size={14} />
            {getLoc(h.name)}
          </button>)}
        </div>}

      </aside>
    </div>

    {selected && evidence && <SceneHotspotModal
      hotspot={selected}
      evidence={evidence}
      isAlreadyDiscovered={caseState.discoveredEvidenceIds.includes(evidence.id)}
      onClose={() => setSelected(null)}
      onAddEvidence={() => {
        discoverClue(evidence.id, selected.id);
        setSelected(null);
      }} />}

  </div>;
}
