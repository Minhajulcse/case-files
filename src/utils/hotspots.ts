import type { HotspotItem } from '../types/game';

type Point = [number, number];

// All authored geometry lives in 0–100 image space. Distances for touch assistance
// use rendered pixels so zoom, rotation and differing plate ratios need no offsets.
export function vertices(hotspot: HotspotItem): Point[] {
  const { shape, x, y } = hotspot;
  if (shape.type === 'polygon') return shape.points;
  const w = shape.width / 2, h = shape.height / 2;
  return [[x - w, y - h], [x + w, y - h], [x + w, y + h], [x - w, y + h]];
}

function measure(points: Point[], x: number, y: number, width: number, height: number) {
  let inside = false, distance = Infinity, doubleArea = 0;
  for (let i = 0; i < points.length; i++) {
    const [ax, ay] = points[i];
    const [bx, by] = points[(i + 1) % points.length];
    doubleArea += ax * by - bx * ay;
    if ((ay > y) !== (by > y) && x < ax + (bx - ax) * (y - ay) / (by - ay)) inside = !inside;
    const dx = (bx - ax) * width / 100, dy = (by - ay) * height / 100;
    const px = (x - ax) * width / 100, py = (y - ay) * height / 100;
    const length = dx * dx + dy * dy;
    const t = length ? Math.max(0, Math.min(1, (px * dx + py * dy) / length)) : 0;
    distance = Math.min(distance, Math.hypot(px - t * dx, py - t * dy));
  }
  return { inside: inside || distance < 0.001, distance, area: Math.abs(doubleArea) };
}

export function hitTest(hotspots: HotspotItem[], x: number, y: number, width: number, height: number, slop = 0) {
  if (width <= 0 || height <= 0 || x < 0 || y < 0 || x > 100 || y > 100) return undefined;
  const hits = hotspots.map(spot => ({ spot, ...measure(vertices(spot), x, y, width, height) }));
  // A smaller object drawn over a larger surface owns their shared pixels.
  const exact = hits.filter(h => h.inside).sort((a, b) => a.area - b.area || a.spot.id.localeCompare(b.spot.id));
  if (exact.length) return exact[0].spot;
  const near = hits.filter(h => h.distance <= slop).sort((a, b) => a.distance - b.distance);
  if (near.length && (!near[1] || near[1].distance - near[0].distance > 2)) return near[0].spot;
  return undefined;
}
