import type { LocalizedString, NamedCharacter } from '../types/game';

// Case prose also uses given names and surnames independently. Keep those forms
// available to the author so each language can supply its own endings in context.
function person(id: string, given: LocalizedString, family: LocalizedString, title?: LocalizedString) {
  return {
    id, given, family,
    name: {
      en: [title?.en, given.en, family.en].filter(Boolean).join(' '),
      bn: [title?.bn, given.bn, family.bn].filter(Boolean).join(' ')
    }
  };
}

export const playerDetective: NamedCharacter = {
  id: 'player-detective',
  name: { en: 'Detective Cole', bn: 'গোয়েন্দা আদিল হাসান' }
};

const manorFamily = { en: 'Pendelton', bn: 'রায়চৌধুরী' };
export const manorCast = {
  owner: person('victim-01-arthur', { en: 'Arthur', bn: 'অনিরুদ্ধ' }, manorFamily, { en: 'Lord', bn: 'লর্ড' }),
  heir: person('suspect-01-julian', { en: 'Julian', bn: 'অর্ক' }, manorFamily),
  archivist: person('suspect-02-evelyn', { en: 'Evelyn', bn: 'মাধবী' }, { en: 'Vance', bn: 'বৈদ্য' }),
  physician: person('suspect-03-finch', { en: 'Alistair', bn: 'আনিস' }, { en: 'Finch', bn: 'ফারুক' }, { en: 'Dr.', bn: 'ডা.' }),
  housekeeper: person('suspect-04-beatrice', { en: 'Beatrice', bn: 'বীণা' }, { en: 'Moore', bn: 'গোমেজ' }),
  dealer: person('suspect-05-marcus', { en: 'Marcus', bn: 'কামাল' }, { en: 'Kane', bn: 'করিম' })
};

export const safehouseCast = {
  witness: person('witness-02-clara', { en: 'Clara', bn: 'নুসরাত' }, { en: 'Thorne', bn: 'হক' }),
  officer: person('suspect-02-navarro', { en: 'Ray', bn: 'রাশেদ' }, { en: 'Nolan', bn: 'খান' }, { en: 'Detective', bn: 'গোয়েন্দা' }),
  counsel: person('suspect-02-sterling', { en: 'Thomas', bn: 'অমিতাভ' }, { en: 'Sterling', bn: 'সেন' }),
  sister: person('suspect-02-maya', { en: 'Lily', bn: 'তুলি' }, { en: 'Foster', bn: 'দাশ' }),
  enforcer: person('suspect-02-kozlov', { en: 'Victor', bn: 'বিপ্লব' }, { en: 'Shaw', bn: 'শিকদার' }),
  superintendent: person('suspect-02-isaac', { en: 'Isaac', bn: 'ইদ্রিস' }, { en: 'Vance', bn: 'মণ্ডল' }),
  defendant: { id: 'defendant-02-blackwood', name: { en: 'Blackwood', bn: 'মজুমদার' } }
};

export const museumCast = {
  curator: person('suspect-03-rossi', { en: 'Helena', bn: 'লাবণী' }, { en: 'Ross', bn: 'বসু' }, { en: 'Dr.', bn: 'ড.' }),
  securityChief: person('suspect-03-cross', { en: 'Nathan', bn: 'প্রদীপ' }, { en: 'Cross', bn: 'পাল' }),
  engineer: person('suspect-03-chloe', { en: 'Chloe', bn: 'তন্বী' }, { en: 'Bennett', bn: 'ঘোষ' }),
  collector: person('suspect-03-tariq', { en: 'Edmund', bn: 'মাহবুব' }, { en: 'Ashford', bn: 'সিদ্দিকী' }),
  custodian: person('suspect-03-simon', { en: 'Simon', bn: 'হরিপদ' }, { en: 'Bell', bn: 'নন্দী' })
};
