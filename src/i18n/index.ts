import { Language, DetectiveRank, EvidenceCategory } from '../types/game';
import { translations, TranslationDict } from './translations';

export { translations };
export type { TranslationDict };

export function formatNumber(val: number | string, lang: Language): string {
  if (lang === 'en') return String(val);
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(val).replace(/[0-9]/g, d => bnDigits[parseInt(d, 10)]);
}

export function getTranslation(key: keyof TranslationDict, lang: Language): string {
  const dict = translations[lang] || translations.en;
  return dict[key] || translations.en[key] || String(key);
}

export function getLocalizedRank(rank: DetectiveRank, lang: Language): string {
  if (lang === 'en') return rank;
  switch (rank) {
    case 'Rookie Detective':
      return translations.bn.rankRookie;
    case 'Junior Investigator':
      return translations.bn.rankJunior;
    case 'Field Detective':
      return translations.bn.rankField;
    case 'Senior Detective':
      return translations.bn.rankSenior;
    case 'Master Detective':
      return translations.bn.rankMaster;
    case 'Legendary Investigator':
      return translations.bn.rankLegendary;
    default:
      return rank;
  }
}

export function getLocalizedCategory(cat: EvidenceCategory, lang: Language): string {
  if (lang === 'en') return cat;
  switch (cat) {
    case 'Physical':
      return translations.bn.catPhysical;
    case 'Digital':
      return translations.bn.catDigital;
    case 'Documents':
      return translations.bn.catDocuments;
    case 'Witness Statements':
      return translations.bn.catWitness;
    case 'Photographs':
      return translations.bn.catPhotographs;
    case 'Forensic Reports':
      return translations.bn.catForensic;
    default:
      return cat;
  }
}

export function getLocalizedDifficulty(diff: 'Standard' | 'Hard' | 'Master', lang: Language): string {
  if (lang === 'en') return diff;
  switch (diff) {
    case 'Standard':
      return translations.bn.difficultyStandard;
    case 'Hard':
      return translations.bn.difficultyHard;
    case 'Master':
      return translations.bn.difficultyMaster;
    default:
      return diff;
  }
}

export function getLocalizedBadge(badge: 'MURDER' | 'ABDUCTION' | 'GRAND HEIST', lang: Language): string {
  if (lang === 'en') {
    return badge === 'MURDER' ? 'HOMICIDE' : badge;
  }
  switch (badge) {
    case 'MURDER':
      return translations.bn.badgeMurder;
    case 'ABDUCTION':
      return translations.bn.badgeAbduction;
    case 'GRAND HEIST':
      return translations.bn.badgeHeist;
    default:
      return badge;
  }
}
