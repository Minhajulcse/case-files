import type { CaseData, PlateId } from '../../types/game';

export const plates = {
  study: { file: 'study.webp', width: 1536, height: 864, en: 'Private study', bn: 'পড়ার ঘর' },
  apartment: { file: 'safehouse.svg', width: 1000, height: 600, en: 'Room 404', bn: 'কক্ষ ৪০৪' },
  conduit: { file: 'conduit.svg', width: 1000, height: 600, en: 'Boiler passage', bn: 'বয়লার পথ' },
  vault: { file: 'vault.svg', width: 1000, height: 600, en: 'Display vault', bn: 'প্রদর্শনী ভল্ট' },
  dispatch: { file: 'dispatch.svg', width: 1000, height: 600, en: 'Dispatch room', bn: 'মাল পাঠানোর ঘর' }
} as const satisfies Record<PlateId, { file: string; width: number; height: number; en: string; bn: string }>;

export const plateUrl = (id: PlateId) => `${import.meta.env.BASE_URL}scenes/${plates[id].file}`;
export function CaseArtwork({ file, className = '', eager = false }: { file: CaseData; className?: string; eager?: boolean }) {
  const id = file.crimeScene.plates[0];
  return <img
    src={plateUrl(id)}
    width={plates[id].width}
    height={plates[id].height}
    alt=""
    draggable={false}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    className={className} />;
}
