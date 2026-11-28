import { CaseData } from '../../types/game';
import { case001 } from './case001';
import { case002 } from './case002';
import { case003 } from './case003';

export const ALL_CASES: CaseData[] = [case001, case002, case003];
export const PLAYABLE_CASE_ID = case001.id;

export const getCaseById = (id: string): CaseData | undefined => {
  return ALL_CASES.find(c => c.id === id);
};
