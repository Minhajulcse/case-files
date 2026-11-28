import type { CaseData } from '../../types/game';
import { museumCast } from '../characters';

const { curator, securityChief, engineer, collector, custodian } = museumCast;

export const case003: CaseData = {
  id: 'case-003',
  caseNumber: 'CASE 003',
  title: {
    en: 'The Museum Heist',
    bn: 'জাদুঘরে চুরি'
  },
  subtitle: {
    en: 'Four minutes without power. A cracked scarab under an unbroken seal.',
    bn: 'চার মিনিট বিদ্যুৎ নেই। অক্ষত সিলের নিচে ফাটা স্কারাব।'
  },
  badge: 'GRAND HEIST',
  difficulty: 'Master',
  estimatedTime: '35-45 mins',
  victimOrSubject: {
    en: 'The Eye of Osiris (3,000-Year-Old Sapphire & Lapis Lazuli Scarab, Valued at $18,000,000)',
    bn: 'আই অব ওসাইরিস (৩০০০ বছরের প্রাচীন নীলমণি ও লাপিস লাজুলির স্কারাব, মূল্য ১৮০ কোটি টাকা)'
  },
  incidentDate: {
    en: 'November 18, 2024 — 02:15 Hours',
    bn: '১৮ নভেম্বর, ২০২৪ — রাত ০২:১৫ টা'
  },
  location: {
    en: 'Metropolitan Museum of Antiquities, Sub-Level 2 High-Security Vault',
    bn: 'মেট্রোপলিটন প্রত্নতাত্ত্বিক জাদুঘর, মাটির নিচে সাব-লেভেল ২ এর সুরক্ষিত ভল্ট'
  },
  synopsis: {
    en: 'At the gala, the lights fail for four minutes. When security checks the Eye of Osiris, a hairline crack runs through the blue stone. The night crew, a collector and the curator all had business downstairs.',
    bn: 'অনুষ্ঠানে চার মিনিট আলো নিভে যায়। পরে নিরাপত্তাকর্মীরা ওসিরিসের চোখের নীল পাথরে সরু ফাটল দেখেন। রাতের কর্মী, সংগ্রাহক ও কিউরেটর সকলেরই নিচে কাজ ছিল।'
  },
  briefing: {
    chiefMemo: {
      en: 'A display alarm and a room access log measure different things. Establish when the item on the cushion changed and trace the outgoing packing case.',
      bn: 'প্রদর্শনীর অ্যালার্ম আর ঘরে প্রবেশের লগ আলাদা তথ্য দেয়। কুশনের জিনিস কখন পাল্টেছে ও প্যাকিং বাক্স কোথায় গেছে খুঁজুন।'
    },
    initialStatus: {
      en: 'Sub-Level 2 sealed by SWAT. All 5 persons with vault clearance detained on site.',
      bn: 'সোয়াট টিম সাব-লেভেল ২ সিলগালা করেছে। ভল্টের অনুমোদনপ্রাপ্ত পাঁচজন ব্যক্তিকে ঘটনাস্থলে আটকে জেরা করা হচ্ছে।'
    },
    keyObjectives: [
      {
        en: 'Identify what the display actually held.',
        bn: 'প্রদর্শনীতে আসলে কী ছিল শনাক্ত করুন।'
      },
      {
        en: 'Test the lighting failure against the independent recorder.',
        bn: 'আলোর ত্রুটি আলাদা রেকর্ডারের সঙ্গে মেলান।'
      },
      {
        en: 'Trace the parcel through dispatch.',
        bn: 'মাল পাঠানোর ঘরে পার্সেলের পথ অনুসরণ করুন।'
      }
    ]
  },
  crimeScene: {
    roomTitle: {
      en: 'Egyptian antiquities vault',
      bn: 'মিশরীয় প্রত্নসম্পদের ভল্ট'
    },
    roomDescription: {
      en: 'A case stands between two optical pillars. Staff share the dispatch room across the freight corridor.',
      bn: 'দুই অপটিক্যাল স্তম্ভের মাঝে প্রদর্শনী বাক্স। মালবাহী করিডোরের ওপারে কর্মীদের যৌথ ঘর।'
    },
    sceneTheme: 'museum_vault',
    hotspots: [
      {
        id: 'hs-03-pedestal',
        name: {
          en: 'Display pedestal',
          bn: 'প্রদর্শনী স্তম্ভ'
        },
        x: 50,
        y: 48,
        description: {
          en: 'A pale line interrupts the surface of the blue scarab.',
          bn: 'নীল স্কারাবের ওপর ফিকে দাগ।'
        },
        revealsEvidenceId: 'clue-03-cracked-scarf',
        discoveryNote: {
          en: 'The underside carries a casting nick and the object weighs 42 g.',
          bn: 'নিচে ঢালাইয়ের খুঁত, বস্তুটির ওজন ৪২ গ্রাম।'
        },
        iconType: 'magnifier',
        plate: 'vault',
        shape: {
          type: 'polygon',
          points: [[43, 32], [55, 31], [58, 34], [58, 70], [46, 73], [43, 70]]
        }
      },
      {
        id: 'hs-03-breaker',
        name: {
          en: 'Relay housing',
          bn: 'রিলের বাক্স'
        },
        x: 82,
        y: 24,
        description: {
          en: 'An extra label projects below the grille.',
          bn: 'জালির নিচে অতিরিক্ত লেবেল বেরিয়ে আছে।'
        },
        revealsEvidenceId: 'clue-03-emp-capacitor',
        discoveryNote: {
          en: 'The lighting module retains its own event times.',
          bn: 'আলোর মডিউলে ঘটনার সময় থাকে।'
        },
        iconType: 'flask',
        plate: 'vault',
        shape: {
          type: 'rect',
          width: 15,
          height: 19
        }
      },
      {
        id: 'hs-03-terminal',
        name: {
          en: 'Access terminal',
          bn: 'প্রবেশ টার্মিনাল'
        },
        x: 21,
        y: 44,
        description: {
          en: 'Two thin green traces run down the terminal display.',
          bn: 'পর্দায় দুটি সরু সবুজ রেখা।'
        },
        revealsEvidenceId: 'clue-03-vault-access-logs',
        discoveryNote: {
          en: 'One column belongs to the door. The other records weight at the pedestal.',
          bn: 'এক কলাম দরজার, অন্যটি স্তম্ভের ওজনের।'
        },
        iconType: 'document',
        plate: 'vault',
        shape: {
          type: 'rect',
          width: 11,
          height: 25
        }
      },
      {
        id: 'hs-03-lasers',
        name: {
          en: 'Optical pillar three',
          bn: 'তিন নম্বর অপটিক্যাল স্তম্ভ'
        },
        x: 31,
        y: 62.2,
        description: {
          en: 'A sliver of quartz catches the overhead light.',
          bn: 'ওপরের আলো কোয়ার্টজের টুকরোয় পড়ছে।'
        },
        revealsEvidenceId: 'clue-03-optical-prism',
        discoveryNote: {
          en: 'The taped reference carries a photo work-order number.',
          bn: 'ফিতায় ছবির কাজের নথির নম্বর।'
        },
        iconType: 'magnifier',
        plate: 'vault',
        shape: {
          type: 'rect',
          width: 3.8,
          height: 34.2
        }
      },
      {
        id: 'hs-03-lockers',
        name: {
          en: 'Staff lockers',
          bn: 'কর্মীদের লকার'
        },
        x: 23,
        y: 37,
        description: {
          en: 'Paper protrudes from the second locker door.',
          bn: 'দ্বিতীয় লকারের দরজা থেকে কাগজ বেরিয়ে আছে।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-03-rossi-invoice',
        discoveryNote: {
          en: 'An education invoice has a second document attached to it.',
          bn: 'শিক্ষামূলক চালানের সঙ্গে আরেকটি নথি আটকানো।'
        },
        iconType: 'document',
        plate: 'dispatch',
        shape: {
          type: 'rect',
          width: 27,
          height: 40
        }
      },
      {
        id: 'hs-03-janitor-cart',
        name: {
          en: 'Freight trolley',
          bn: 'মালবাহী ট্রলি'
        },
        x: 70,
        y: 57,
        description: {
          en: 'A rigid case sits beneath the folded cover.',
          bn: 'ভাঁজ করা ঢাকনার নিচে শক্ত বাক্স।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-03-lead-box',
        discoveryNote: {
          en: 'Its paper seal carries both a private lot and a dispatch session.',
          bn: 'কাগজের সিলে ব্যক্তিগত লট ও ডিসপ্যাচ পর্ব দুটিই আছে।'
        },
        iconType: 'magnifier',
        plate: 'dispatch',
        shape: {
          type: 'polygon',
          points: [[56, 44], [75, 43], [83, 51], [82, 73], [63, 76], [57, 64]]
        }
      },
      {
        id: 'hs-case-003-photo-call',
        plate: 'dispatch',
        x: 58,
        y: 25,
        shape: {
          type: 'rect',
          width: 17,
          height: 17
        },
        name: {
          en: 'Dispatch noticeboard',
          bn: 'ডিসপ্যাচ বোর্ড'
        },
        description: {
          en: 'A work order is pinned to the dispatch noticeboard. Teaching casts and originals appear on separate delivery lines.',
          bn: 'ডিসপ্যাচ বোর্ডে কাজের কাগজ। শিক্ষামূলক ঢালাই ও আসল বস্তু আলাদা সরবরাহ লাইনে।'
        },
        discoveryNote: {
          en: 'A signed daytime work order lists the optical pillar.',
          bn: 'স্বাক্ষরিত দিনের কাজের নথিতে অপটিক্যাল স্তম্ভের উল্লেখ।'
        },
        revealsEvidenceId: 'case-003-photo-call',
        iconType: 'magnifier'
      }
    ],
    plates: ['vault', 'dispatch']
  },
  otherCharacters: [],
  suspects: [
    {
      ...curator,
      alias: {
        en: 'The keynote speaker',
        bn: 'প্রধান বক্তা'
      },
      role: {
        en: 'Chief Curator of Egyptian Antiquities',
        bn: 'মিশরীয় প্রত্নতত্ত্বের প্রধান কিউরেটর'
      },
      age: 48,
      occupation: {
        en: 'Egyptologist & Senior Curator',
        bn: 'মিশরবিদ ও জ্যেষ্ঠ কিউরেটর'
      },
      relationshipToVictim: {
        en: 'Responsible for condition reports and loans',
        bn: 'অবস্থা নিরীক্ষা ও ধার দেওয়ার দায়িত্বে'
      },
      motive: {
        en: 'Her Cairo excavation faces foreclosure. The museum commissioned a teaching cast while she was curator.',
        bn: 'তাঁর কায়রো খনন প্রকল্পে সম্পত্তি বাজেয়াপ্ত হওয়ার আশঙ্কা। তাঁর মেয়াদে জাদুঘর একটি শিক্ষামূলক মডেল কেনে।'
      },
      alibi: {
        en: 'The scarab remained genuine throughout my condition check. Two hundred guests saw me speak when the lights failed.',
        bn: 'আমার পরীক্ষার পুরো সময় স্কারাব আসল ছিল। আলো নেভার সময় দু’শো অতিথি আমাকে বক্তৃতা দিতে দেখেছেন।'
      },
      personality: {
        en: 'Sophisticated, haughty, immaculate evening gown, condescending tone.',
        bn: 'অভিজাত, গর্বিত, দামী গাউন পরিহিতা, নাক উঁচু স্বভাব।'
      },
      secrets: {
        en: 'Her excavation creditor was named in the Q9 settlement.',
        bn: 'Q9 নিষ্পত্তিতে তাঁর খননের পাওনাদারের নাম ছিল।'
      },
      avatarSeed: 'Rossi',
      avatarColor: '#8b5cf6',
      dialogueTree: [
        {
          id: 'dlg-r-1',
          prompt: {
            en: 'What did you certify at the inspection?',
            bn: 'পরীক্ষায় কী প্রত্যয়ন করেছিলেন?'
          },
          response: {
            en: 'I signed for the blue mount. My report says the original remained on display. Other staff were downstairs too.',
            bn: 'নীল মাউন্টের জন্য স্বাক্ষর করেছি। রিপোর্টে আসলটি প্রদর্শনীতে থাকার কথা আছে। অন্য কর্মীরাও নিচে ছিলেন।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-r-2',
          prompt: {
            en: 'Where were you during the outage?',
            bn: 'বিভ্রাটের সময় কোথায় ছিলেন?'
          },
          response: {
            en: 'At the lectern from 01:45. The keynote was recorded in full.',
            bn: '০১:৪৫ থেকে মঞ্চে। পুরো বক্তৃতা রেকর্ড হয়েছিল।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-r-3',
          prompt: {
            en: 'Why order a cast?',
            bn: 'ঢালাইয়ের মডেল কেনা হয়েছিল কেন?'
          },
          response: {
            en: 'For the travelling exhibition. The teaching invoice was approved and paid by the museum.',
            bn: 'ভ্রাম্যমাণ প্রদর্শনীর জন্য। শিক্ষামূলক চালান জাদুঘর অনুমোদন করে মূল্য দেয়।'
          },
          reactionMood: 'defensive',
          conditionClueId: 'clue-03-rossi-invoice'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-cracked-scarf',
          reactionText: {
            en: 'A cast in the education store would be ordinary. You must establish when this one reached the case.',
            bn: 'শিক্ষা বিভাগে মডেল থাকা স্বাভাবিক। এটি কখন বাক্সে এল দেখুন।'
          },
          stressIncrease: 45,
          exposesLie: true,
          requiresEvidenceIds: ['clue-03-vault-access-logs', 'clue-03-janitor-testimony']
        },
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: {
            en: 'We use these boxes for loans. That trolley went through several hands.',
            bn: 'ধার দেওয়ার সময় এসব বাক্স ব্যবহৃত হয়। ট্রলিটি বহুজন ধরেছেন।'
          },
          stressIncrease: 60,
          exposesLie: false
        }
      ]
    },
    {
      ...securityChief,
      alias: {
        en: 'The Security Chief',
        bn: 'নিরাপত্তা প্রধান'
      },
      role: {
        en: 'Head of Museum Security & Surveillance',
        bn: 'নিরাপত্তা ও নজরদারি প্রধান'
      },
      age: 50,
      occupation: {
        en: 'Former Secret Service, Chief Security Officer',
        bn: 'সাবেক গোয়েন্দা কর্মকর্তা ও সিকিউরিটি হেড'
      },
      relationshipToVictim: {
        en: 'Responsible for vault security protocols',
        bn: 'ভল্টের সার্বিক সুরক্ষার দায়িত্বে নিয়োজিত'
      },
      motive: {
        en: 'He faced a pension cut, held a vault credential and had approved a temporary delay on the audible alarm.',
        bn: 'তাঁর পেনশন কাটার কথা ছিল। ভল্টে প্রবেশাধিকার ও শব্দের অ্যালার্মে সাময়িক বিলম্বের অনুমোদন তাঁর ছিল।'
      },
      alibi: {
        en: 'I logged the failure upstairs. I also handled a dispatch session earlier that night.',
        bn: 'ওপরে বিভ্রাট নথিভুক্ত করেছি। রাতের আগে একটি ডিসপ্যাচ পর্বও সামলেছি।'
      },
      personality: {
        en: 'Brusque, sharp military haircut, dark suit, clipboard in hand, irritated.',
        bn: 'সামরিক মেজাজ, ছোট চুল, হাতে ক্লিপবোর্ড, খিটখিটে স্বভাব।'
      },
      secrets: {
        en: 'Was caught sleeping on duty 3 weeks ago; disabled sensor alert sounders to avoid false alarms.',
        bn: 'কয়েক সপ্তাহ আগে অ্যালার্মের শব্দ বন্ধ করে রেখেছিল যাতে মিথ্যা অ্যালার্মে ঘুম না ভাঙে।'
      },
      avatarSeed: 'Cross',
      avatarColor: '#1e293b',
      dialogueTree: [
        {
          id: 'dlg-c-1',
          prompt: {
            en: 'Why did the lights take four minutes to return?',
            bn: 'আলো ফিরতে চার মিনিট লাগল কেন?'
          },
          response: {
            en: 'The diagnostic timer sent a scheduled event. The safety check took until 02:19.',
            bn: 'পরীক্ষার টাইমার নির্ধারিত সংকেত দেয়। নিরাপত্তা পরীক্ষা ০২:১৯ পর্যন্ত চলে।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-c-2',
          prompt: {
            en: 'Was the whole vault blind?',
            bn: 'পুরো ভল্টে কি রেকর্ড বন্ধ ছিল?'
          },
          response: {
            en: 'The sounder was under maintenance. The load roll has its own battery. Ask dispatch for custody, not my alarm notes.',
            bn: 'শব্দের অ্যালার্ম মেরামত চলছিল। ওজনের ফিতার নিজস্ব ব্যাটারি আছে। হেফাজতের হিসাব ডিসপ্যাচে।'
          },
          reactionMood: 'surprised'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-emp-capacitor',
          reactionText: {
            en: 'I signed the daytime diagnostic order. The night run is absent from that order.',
            bn: 'দিনের পরীক্ষায় স্বাক্ষর করেছিলাম। রাতের পরীক্ষা তাতে নেই।'
          },
          stressIncrease: 10,
          exposesLie: false
        }
      ]
    },
    {
      ...engineer,
      alias: {
        en: 'The Laser Systems Engineer',
        bn: 'লেজার অপটিক্যাল ইঞ্জিনিয়ার'
      },
      role: {
        en: 'Contract Optical Security Technician',
        bn: 'লেজার গ্রিডের কারিগরি বিশেষজ্ঞ'
      },
      age: 32,
      occupation: {
        en: 'Optoelectronic Systems Specialist',
        bn: 'অপটিক্যাল সিস্টেম স্পেশালিস্ট'
      },
      relationshipToVictim: {
        en: 'Installed and calibrated the vault laser defense grid',
        bn: 'ভল্টের লেজার প্রতিরক্ষা ব্যবস্থা নিয়ন্ত্রণকারী'
      },
      motive: {
        en: 'Her contract was ending and an unpaid photographic job gave her access to the pillar and the freight desk.',
        bn: 'চুক্তি শেষ হচ্ছিল। ছবির এক বকেয়া কাজের জন্য স্তম্ভ ও মালবাহী ডেস্কে যেতেন।'
      },
      alibi: {
        en: 'I calibrated the beam that afternoon. During the gala I was in the lobby, away from the display.',
        bn: 'বিকেলে রশ্মি ঠিক করি। অনুষ্ঠানের সময় প্রদর্শনী থেকে দূরে লবিতে ছিলাম।'
      },
      personality: {
        en: 'Nerdy, talkative, fidgeting with an Allen wrench, wearing technician lanyard.',
        bn: 'অতিরিক্ত কথা বলে, হাতে রেঞ্চ নিয়ে নাড়াচাড়া করে, সামান্য চঞ্চল।'
      },
      secrets: {
        en: 'She left a reference prism in place for the photography session.',
        bn: 'ছবির কাজের জন্য প্রিজম যথাস্থানে রেখেছিলেন।'
      },
      avatarSeed: 'Chloe',
      avatarColor: '#06b6d4',
      dialogueTree: [
        {
          id: 'dlg-cd-1',
          prompt: {
            en: 'What does the beam log certify?',
            bn: 'রশ্মির লগ কী প্রত্যয়ন করে?'
          },
          response: {
            en: 'Continuity at the receiver. A steady line says nothing about the weight on the cushion.',
            bn: 'রিসিভারে ধারাবাহিকতা। রেখা স্থির থাকলে কুশনের ওজন জানা যায় না।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-cd-2',
          prompt: {
            en: 'Who authorised the photographic work?',
            bn: 'ছবির কাজ কে অনুমোদন দেন?'
          },
          response: {
            en: 'The exhibition office ordered glare references at 14:00. The drawer and freight credentials were shared by shift.',
            bn: 'প্রদর্শনী দপ্তর ১৪:০০-তে আলোর রেফারেন্স চায়। পালা অনুযায়ী ড্রয়ার ও পার্সেলের দায়িত্ব বদলাত।'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-optical-prism',
          reactionText: {
            en: 'That is the reference I left for photography. The work order predates the gala.',
            bn: 'ছবির জন্য এই রেফারেন্স রেখেছি। কাজের নথি অনুষ্ঠানের আগের।'
          },
          stressIncrease: 20,
          exposesLie: false
        }
      ]
    },
    {
      ...collector,
      alias: {
        en: 'The Billionaire Collector',
        bn: 'ধনকুবের প্রত্নতত্ত্ব সংগ্রাহক'
      },
      role: {
        en: 'Private Antiquities Collector & Gala Sponsor',
        bn: 'ব্যক্তিগত সংগ্রাহক ও গালার প্রধান দাতা'
      },
      age: 44,
      occupation: {
        en: 'Private Equity Titan & Relic Collector',
        bn: 'আন্তর্জাতিক ইনভেস্টর ও সংগ্রাহক'
      },
      relationshipToVictim: {
        en: 'Offered $25M private purchase last year, rejected by board',
        bn: 'গত বছর ২৫ মিলিয়ন ডলারে রত্নটি কেনার প্রস্তাব দিয়েছিলেন'
      },
      motive: {
        en: 'The trustees rejected his bid. His office could settle private lots and his passes covered dispatch.',
        bn: 'ট্রাস্টিরা তাঁর প্রস্তাব ফেরান। তাঁর অফিস ব্যক্তিগত লট মেটাতে পারত, পাসে ডিসপ্যাচে প্রবেশাধিকার ছিল।'
      },
      alibi: {
        en: 'I was filmed at Table One during the blackout. My staff had already sent bids for the evening lots.',
        bn: 'আলো নেভার সময় এক নম্বর টেবিলে ক্যামেরায় আছি। কর্মীরা আগেই লটের প্রস্তাব পাঠিয়েছিল।'
      },
      personality: {
        en: 'Flamboyant, silk tuxedo, gold watch, confident, amused by police questions.',
        bn: 'অভিজাত রেশমি স্যুট, সোনার ঘড়ি, আত্মবিশ্বাসী, পুলিশের প্রশ্নে মুচকি হাসে।'
      },
      secrets: {
        en: 'His office agreed to settle a debt on delivery of the private lot.',
        bn: 'ব্যক্তিগত লট পৌঁছালে তাঁর অফিস একটি ঋণ মেটাতে রাজি হয়েছিল।'
      },
      avatarSeed: 'Tariq',
      avatarColor: '#eab308',
      dialogueTree: [
        {
          id: 'dlg-t-1',
          prompt: {
            en: 'Was the scarab for sale?',
            bn: 'স্কারাব বিক্রির জন্য ছিল?'
          },
          response: {
            en: 'The board refused my public bid. My office still accepts private consignments.',
            bn: 'বোর্ড প্রকাশ্য প্রস্তাব ফেরায়। আমার অফিস এখনও ব্যক্তিগত চালান নেয়।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-t-2',
          prompt: {
            en: 'What was the settlement arrangement?',
            bn: 'নিষ্পত্তির ব্যবস্থা কী ছিল?'
          },
          response: {
            en: 'A delivery lot had to reach dispatch before any creditor was paid. I never packed a crate.',
            bn: 'পাওনা মেটানোর আগে লট ডিসপ্যাচে পৌঁছানো দরকার। কোনো বাক্স আমি ভরিনি।'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: {
            en: 'Q9 is a private lot. Look at who signed for the freight session, not just who offered to buy.',
            bn: 'Q9 ব্যক্তিগত লট। ক্রেতার পাশাপাশি পার্সেল পর্বে কার স্বাক্ষর দেখুন।'
          },
          stressIncrease: 35,
          exposesLie: false
        }
      ]
    },
    {
      ...custodian,
      alias: {
        en: 'The Night Janitor',
        bn: 'রাতের পরিচ্ছন্নতাকর্মী'
      },
      role: {
        en: 'Head Custodian (Sub-Levels)',
        bn: 'পাতাল তলার প্রধান ক্লিনার'
      },
      age: 58,
      occupation: {
        en: 'Museum Janitor for 22 years',
        bn: '২২ বছর ধরে জাদুঘরের কর্মচারী'
      },
      relationshipToVictim: {
        en: 'Cleans the vault corridors nightly',
        bn: 'প্রতি রাতে ভল্টের করিডোর পরিষ্কার করেন'
      },
      motive: {
        en: 'His daughter’s medical bills were due. His key opened the freight lift and his cart collected every outgoing box.',
        bn: 'মেয়ের চিকিৎসার খরচ বাকি। তাঁর চাবিতে মালবাহী লিফট খুলত। সব বাক্স তাঁর ট্রলিতে উঠত।'
      },
      alibi: {
        en: 'I pushed the sealed trolley after the lights returned. I had used the same route during the afternoon shift.',
        bn: 'আলো ফেরার পর সিল করা ট্রলি ঠেলি। বিকেলের পালাতেও একই পথে গিয়েছি।'
      },
      personality: {
        en: 'Humble, worn hands, timid, wearing blue custodial jumpsuit.',
        bn: 'নম্র, খাঁটুনি খাওয়া হাত, ভয়ার্ত দৃষ্টি, নীল জাম্পস্যুট পরা।'
      },
      secrets: {
        en: 'Found the lead box hidden in his laundry bin 20 minutes ago and was terrified he would be framed.',
        bn: 'ট্রলিতে ভারী সিসার বাক্স দেখে ভয়ে পাথর হয়ে গিয়েছিলেন যেন তাকে চোর না বানানো হয়।'
      },
      avatarSeed: 'Simon',
      avatarColor: '#14b8a6',
      dialogueTree: [
        {
          id: 'dlg-sb-1',
          prompt: {
            en: 'Who could reach the vault that afternoon?',
            bn: 'বিকেলে ভল্টে কারা যেতে পারতেন?'
          },
          response: {
            en: 'The curator, the engineer and the security chief. My key opens the freight lift, not the display hood.',
            bn: 'কিউরেটর, প্রকৌশলী ও নিরাপত্তাপ্রধান। আমার চাবিতে মালবাহী লিফট খোলে, প্রদর্শনী বাক্স নয়।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-sb-2',
          prompt: {
            en: 'Who signed for freight sessions?',
            bn: 'মালবাহী পর্বের দায়িত্ব কে নিয়েছিলেন?'
          },
          response: {
            en: 'We kept the pressure copy at the desk. Take it. A session changes hands at each signed handover.',
            bn: 'ডেস্কে চাপের কপি রেখেছি। নিন। প্রতিবার স্বাক্ষর করে দায়িত্ব বদল হয়।'
          },
          reactionMood: 'surprised',
          revealsClueId: 'clue-03-janitor-testimony'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: {
            en: 'The seal was intact at pickup. The box was in the cart before I took its handle.',
            bn: 'তোলার সময় সিল অক্ষত। হাতল ধরার আগেই বাক্স ট্রলিতে ছিল।'
          },
          stressIncrease: 10,
          exposesLie: false
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-03-cracked-scarf',
      name: {
        en: 'Fractured display scarab',
        bn: 'প্রদর্শনীর ফাটা স্কারাব'
      },
      category: 'Forensic Reports',
      description: {
        en: 'The blue object looks convincing through glass. A pale seam crosses its underside. It weighs 42 g.',
        bn: 'কাচের ওপার থেকে নীল বস্তুটি আসলের মতো। নিচে ফিকে জোড়ার দাগ। ওজন ৪২ গ্রাম।'
      },
      discoveryLocation: {
        en: 'Pedestal inside Vault Display Hood',
        bn: 'ভল্টের কাচের শোকেসের ভেতরে'
      },
      relevance: {
        en: 'When did the cushion last support this weight?',
        bn: 'কুশনে এই ওজন কখন থেকে ছিল?'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-cross', 'suspect-03-chloe'],
      isCrucial: true,
      details: [
        {
          en: 'The catalogue mass for the original mount is 86 g.',
          bn: 'মূল বস্তুসহ মাউন্টের তালিকাভুক্ত ওজন ৮৬ গ্রাম।'
        },
        {
          en: 'A tiny casting nick resembles the workshop’s teaching models.',
          bn: 'ঢালাইয়ের ছোট খুঁতটি কর্মশালার শিক্ষামূলক মডেলের মতো।'
        }
      ],
      iconKey: 'gem',
      forensicReport: {
        labSummary: {
          en: 'Resin under the blue finish confirms a cast. The crack alone cannot date its placement.',
          bn: 'নীল প্রলেপের নিচে রেজিন, বস্তুটি ঢালাইয়ের। শুধু ফাটল থেকে রাখার সময় বোঝা যায় না।'
        }
      }
    },
    {
      id: 'clue-03-emp-capacitor',
      name: {
        en: 'Relay timer record',
        bn: 'রিলের টাইমার রেকর্ড'
      },
      category: 'Physical',
      description: {
        en: 'The breaker housing contains a timed surge module. Its isolated event counter records a scheduled change at 02:15.',
        bn: 'ব্রেকারে সময়নির্ধারিত সার্জ মডিউল। স্বাধীন কাউন্টারে ০২:১৫-তে নির্ধারিত পরিবর্তন আছে।'
      },
      discoveryLocation: {
        en: 'HVAC Vent beside Breaker Panel',
        bn: 'ব্রেকার প্যানেলের পাশের এসি ভেন্ট'
      },
      relevance: {
        en: 'Which instruments kept recording while the lamps were dark?',
        bn: 'আলো নিভলেও কোন যন্ত্র রেকর্ড করেছিল?'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-cross', 'suspect-03-chloe'],
      isCrucial: true,
      details: [
        {
          en: 'A work order from 10:00 authorised a diagnostic module. No overnight run was listed.',
          bn: '১০:০০-এর কাজের নথিতে পরীক্ষামূলক মডিউলের অনুমতি। রাতের পরীক্ষা ছিল না।'
        },
        {
          en: 'Lighting resumed at 02:19. The display load recorder ran from its separate cell throughout.',
          bn: '০২:১৯-তে আলো ফেরে। প্রদর্শনীর ওজন রেকর্ডার আলাদা ব্যাটারিতে চলেছিল।'
        },
        {
          en: 'The change to the overnight schedule was authorised in F17’s live session at 18:00.',
          bn: 'রাতের সূচির পরিবর্তন ১৮:০০-তে সচল F17 পর্বে অনুমোদিত হয়।'
        }
      ],
      iconKey: 'zap',
      forensicReport: {
        labSummary: {
          en: 'The scheduled event preceded the loss of light, without disturbing the independent load record.',
          bn: 'নির্ধারিত ঘটনার পর আলো যায়, স্বাধীন ওজনের নথিতে ছেদ নেই।'
        }
      }
    },
    {
      id: 'clue-03-vault-access-logs',
      name: {
        en: 'Vault access and load roll',
        bn: 'ভল্টের প্রবেশ ও ওজনের ফিতা'
      },
      category: 'Digital',
      description: {
        en: 'Two print columns share a clock. The room admitted three people that afternoon. The cushion trace steps from 86 to 42 at 18:00 during parcel session F17.',
        bn: 'দুই কলামের ঘড়ি এক। বিকেলে তিনজন ঢুকেছিলেন। ১৮:০০-তে F17 পার্সেল পর্বে কুশনের ওজন ৮৬ থেকে ৪২ হয়।'
      },
      discoveryLocation: {
        en: 'Vault Entrance Terminal',
        bn: 'ভল্টের মূল প্রবেশদ্বার'
      },
      relevance: {
        en: 'Which record identifies the holder of that session at that hour?',
        bn: 'ওই ঘণ্টায় পর্বটির দায়িত্ব কার ছিল কোন নথি দেখায়?'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-cross', 'suspect-03-chloe'],
      isCrucial: true,
      details: [
        {
          en: 'The load remains at 42 through the 02:15–02:19 outage. The roll gives no object name or staff name.',
          bn: '০২:১৫–০২:১৯-র বিভ্রাটেও ওজন ৪২। ফিতায় বস্তু বা কর্মীর নাম নেই।'
        },
        {
          en: 'Each opening requires a live check of the current session holder. The freight desk keeps the assignment carbon.',
          bn: 'প্রতিবার খোলার জন্য বর্তমান ধারকের পরিচয় যাচাই হয়। মালবাহী ডেস্ক বরাদ্দের কপি রাখে।'
        }
      ],
      iconKey: 'lock',
      forensicReport: {
        labSummary: {
          en: 'There are no missing pulses between the 18:00 step and the morning check.',
          bn: '১৮:০০-র পরিবর্তন থেকে সকালের পরীক্ষা পর্যন্ত কোনো সংকেত বাদ যায়নি।'
        }
      }
    },
    {
      id: 'clue-03-optical-prism',
      name: {
        en: 'Service prism',
        bn: 'পরিষেবা প্রিজম'
      },
      category: 'Physical',
      description: {
        en: 'An alignment prism sits at pillar three. A strip of old tape carries yesterday’s maintenance date.',
        bn: 'তিন নম্বর স্তম্ভে সমীকরণের প্রিজম। পুরোনো ফিতায় আগের দিনের তারিখ।'
      },
      discoveryLocation: {
        en: 'Laser Emitter Pillar #3',
        bn: 'লেজার পিলার ৩'
      },
      relevance: {
        en: 'What does a steady beam actually certify?',
        bn: 'স্থির আলোকরশ্মি কী নিশ্চিত করে?'
      },
      relatedSuspectIds: ['suspect-03-cross', 'suspect-03-chloe'],
      details: [
        {
          en: 'The 14:00 photo work order requested a static alignment reference.',
          bn: '১৪:০০-র ছবির কাজে স্থির সমীকরণ চিহ্নের অনুরোধ ছিল।'
        },
        {
          en: 'Three staff signed the shared tool drawer. Its contents do not identify a handler.',
          bn: 'যৌথ যন্ত্রের ড্রয়ারে তিনজন স্বাক্ষর করেছেন। যন্ত্র দেখে ব্যবহারকারী চেনা যায় না।'
        }
      ],
      iconKey: 'prism',
      forensicReport: {
        labSummary: {
          en: 'With the reference still in place, the beam trace stays level during a normal case opening.',
          bn: 'প্রিজম যথাস্থানে থাকলে স্বাভাবিকভাবে বাক্স খুললেও রশ্মির রেখা স্থির থাকে।'
        }
      }
    },
    {
      id: 'clue-03-rossi-invoice',
      name: {
        en: 'Florence packing invoice',
        bn: 'ফ্লোরেন্সের প্যাকিং চালান'
      },
      category: 'Documents',
      description: {
        en: 'Staff locker four holds an education invoice for a blue teaching cast. Someone attached a private settlement for an original consignment, earmarked for the Cairo excavation debt.',
        bn: 'চার নম্বর যৌথ লকারে নীল শিক্ষামূলক ঢালাইয়ের চালান। সঙ্গে মূল শিল্পবস্তুর ব্যক্তিগত নিষ্পত্তিপত্র, কায়রোর খননের ঋণ মেটানোর জন্য।'
      },
      discoveryLocation: {
        en: 'Shared dispatch locker 4',
        bn: 'যৌথ ডিসপ্যাচ লকার ৪'
      },
      relevance: {
        en: 'Was the settlement tied to the educational order or to another parcel?',
        bn: 'নিষ্পত্তিটি শিক্ষামূলক চালানের জন্য, নাকি অন্য পার্সেলের জন্য?'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-chloe', 'suspect-03-tariq'],
      isCrucial: true,
      details: [
        {
          en: 'The teaching model was paid for by the museum. The separate settlement becomes payable only on receipt of lot Q9.',
          bn: 'মডেলের দাম জাদুঘর দিয়েছে। আলাদা অর্থ শুধু Q9 লট পেলে দেওয়া হবে।'
        },
        {
          en: 'The debt is $2.4 million. The locked packing room was shared by security, conservation and dispatch.',
          bn: 'ঋণ ২৪ লক্ষ ডলার। প্যাকিং ঘর নিরাপত্তা, সংরক্ষণ ও মাল পাঠানোর কর্মীরা ভাগ করে ব্যবহার করতেন।'
        }
      ],
      iconKey: 'receipt',
      forensicReport: {
        labSummary: {
          en: 'The Florence cast has the same underside nick as the display piece. Neither document names the person who packed Q9.',
          bn: 'ফ্লোরেন্সের ছাঁচে প্রদর্শনীর বস্তুর মতোই খুঁত। Q9 কে প্যাক করেছেন কোনো নথিতে নাম নেই।'
        }
      }
    },
    {
      id: 'clue-03-lead-box',
      name: {
        en: 'Lined transport box',
        bn: 'আস্তরণযুক্ত পরিবহন বাক্স'
      },
      category: 'Physical',
      description: {
        en: 'A lined box in the trolley is sealed for private lot Q9 under session F17. Inside is a blue scarab in a gold mount.',
        bn: 'ট্রলির বাক্সে ব্যক্তিগত Q9 লট ও F17 পর্বের সিল। ভেতরে সোনার মাউন্টে নীল স্কারাব।'
      },
      discoveryLocation: {
        en: 'Janitor\'s Laundry Cart, Freight Elevator',
        bn: 'মালবাহী লিফটের সামনে লন্ড্রি ট্রলি'
      },
      relevance: {
        en: 'Who had custody when this dispatch session was used?',
        bn: 'এই পর্ব ব্যবহারের সময় হেফাজত কার ছিল?'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-tariq', 'suspect-03-simon'],
      isCrucial: true,
      details: [
        {
          en: 'The seal was applied before the box went into the trolley. Porters carry sealed consignments by route number.',
          bn: 'ট্রলিতে তোলার আগেই সিল দেওয়া। বাহকেরা রুট নম্বর অনুযায়ী বন্ধ মাল বহন করেন।'
        },
        {
          en: 'The worn mount matches the catalogue’s repair photograph and weighs 86 g.',
          bn: 'ক্ষয়প্রাপ্ত মাউন্টটি ক্যাটালগের মেরামতের ছবির সঙ্গে মেলে, ওজন ৮৬ গ্রাম।'
        }
      ],
      iconKey: 'gem',
      forensicReport: {
        labSummary: {
          en: 'The recovered scarab is the museum original. The cart’s collection label records a route, not a packer.',
          bn: 'উদ্ধার হওয়া স্কারাবটি আসল। ট্রলির লেবেলে পথ লেখা, প্যাকারের নাম নয়।'
        }
      }
    },
    {
      id: 'clue-03-janitor-testimony',
      name: {
        en: 'Freight desk shift carbon',
        bn: 'মালবাহী ডেস্কের পালার কপি'
      },
      category: 'Witness Statements',
      description: {
        en: `${custodian.family.en} kept the original shift carbon. Freight sessions change hands during the day. The times on this copy are independent of the display roll.`,
        bn: `${custodian.family.bn} পালার মূল কপি রেখেছেন। দিনের মধ্যে পার্সেলের দায়িত্ব বদলায়। এই কপির সময় প্রদর্শনীর ফিতা থেকে স্বাধীন।`
      },
      discoveryLocation: {
        en: 'Security Holding Room',
        bn: 'নিরাপত্তা কক্ষে নেওয়া সাক্ষ্য'
      },
      relevance: {
        en: 'Who could authenticate F17 at the time shown on the load roll?',
        bn: 'ওজনের ফিতায় লেখা সময়ে F17 কে অনুমোদন করতে পারতেন?'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-cross', 'suspect-03-chloe', 'suspect-03-simon'],
      details: [
        {
          en: `F17 was assigned to ${engineer.family.en} until 17:40, ${curator.family.en} from 17:40 to 18:20 and ${securityChief.family.en} thereafter. Each handover was witnessed.`,
          bn: `১৭:৪০ পর্যন্ত F17 ${engineer.family.bn}ের, ১৭:৪০–১৮:২০ ${curator.family.bn}র, পরে ${securityChief.family.bn}ের। প্রতিটি হস্তান্তরে সাক্ষী ছিল।`
        },
        {
          en: `${custodian.family.en} collected sealed carts at 02:45. The gala roll places the keynote speaker upstairs from 01:45.`,
          bn: `${custodian.family.bn} ০২:৪৫-এ সিল করা ট্রলি নেন। অনুষ্ঠানের খাতায় প্রধান বক্তা ০১:৪৫ থেকে ওপরে।`
        }
      ],
      iconKey: 'message',
      forensicReport: {
        labSummary: {
          en: 'Carbon pressure and signed duplicates agree. There was one live holder per session at a time.',
          bn: 'কার্বনের চাপ ও স্বাক্ষরিত কপি মেলে। একসঙ্গে এক পর্বে একজনই অনুমোদিত ছিলেন।'
        }
      }
    },
    {
      id: 'case-003-photo-call',
      name: {
        en: 'Photography call sheet',
        bn: 'ছবির কাজের তালিকা'
      },
      category: 'Documents',
      description: {
        en: 'A work order is pinned to the dispatch noticeboard. Teaching casts and originals appear on separate delivery lines.',
        bn: 'ডিসপ্যাচ বোর্ডে কাজের কাগজ। শিক্ষামূলক ঢালাই ও আসল বস্তু আলাদা সরবরাহ লাইনে।'
      },
      discoveryLocation: {
        en: 'Dispatch noticeboard',
        bn: 'ডিসপ্যাচ বোর্ড'
      },
      relevance: {
        en: 'Which job legitimately called for an optical reference?',
        bn: 'কোন কাজে বৈধভাবে আলোর রেফারেন্স লাগত?'
      },
      relatedSuspectIds: ['suspect-03-cross', 'suspect-03-chloe'],
      details: [
        {
          en: 'The engineer signed for a 14:00 photography call. The order included a reference prism and access to the pillar.',
          bn: 'প্রকৌশলী ১৪:০০-র ছবির কাজে স্বাক্ষর করেন। নথিতে রেফারেন্স প্রিজম ও স্তম্ভে প্রবেশের অনুমতি আছে।'
        }
      ],
      forensicReport: {
        labSummary: {
          en: 'The order’s serial and the pillar tape match. The optical service visit had an independent booking.',
          bn: 'কাজের নম্বর ও স্তম্ভের ফিতা মেলে। আলোকযন্ত্রের পরিষেবার স্বাধীন বুকিং ছিল।'
        }
      },
      iconKey: 'file'
    }
  ],
  canonConnections: [
    {
      id: 'c3-conn-01',
      sourceId: 'clue-03-vault-access-logs',
      targetId: 'clue-03-cracked-scarf',
      label: {
        en: 'A change of load',
        bn: 'ওজনের পরিবর্তন'
      },
      deductionNotes: {
        en: 'The two measured masses give the step on the roll a physical meaning.',
        bn: 'দুটি মাপা ওজন ফিতার পরিবর্তনটির অর্থ দেয়।'
      },
      isContradiction: true,
      bonusPoints: 200
    },
    {
      id: 'c3-conn-02',
      sourceId: 'clue-03-vault-access-logs',
      targetId: 'clue-03-emp-capacitor',
      label: {
        en: 'Independent power',
        bn: 'স্বাধীন বিদ্যুৎ'
      },
      deductionNotes: {
        en: 'The four-minute lighting gap has no matching gap in the pedestal record.',
        bn: 'চার মিনিটের আলোহীন সময়েও স্তম্ভের রেকর্ডে বিরতি নেই।'
      },
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'c3-conn-03',
      sourceId: 'clue-03-rossi-invoice',
      targetId: 'clue-03-lead-box',
      label: {
        en: 'The payable lot',
        bn: 'অর্থপ্রাপ্য লট'
      },
      deductionNotes: {
        en: 'Only Q9 triggers the private settlement. The teaching invoice covered a separate, already paid order.',
        bn: 'শুধু Q9-এ ব্যক্তিগত অর্থপ্রদান হয়। শিক্ষামূলক চালানের দাম আগেই দেওয়া।'
      },
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'c3-conn-04',
      sourceId: 'clue-03-janitor-testimony',
      targetId: 'clue-03-lead-box',
      label: {
        en: 'A changing freight session',
        bn: 'বদলানো মালবাহী পর্ব'
      },
      deductionNotes: {
        en: 'The session on the sealed box passed through several hands. Its owner depends on the time of the display change.',
        bn: 'সিল করা বাক্সের পর্ব বহুজনের হাতে ছিল। প্রদর্শনীর পরিবর্তনের সময়ই সংশ্লিষ্ট ধারক নির্ধারণ করে।'
      },
      isContradiction: true,
      bonusPoints: 175
    },
    {
      id: 'case-003-link-5',
      sourceId: 'clue-03-vault-access-logs',
      targetId: 'clue-03-janitor-testimony',
      label: {
        en: 'Hourly custody',
        bn: 'ঘণ্টাভিত্তিক হেফাজত'
      },
      deductionNotes: {
        en: 'The carbon identifies the person permitted to authenticate the session at each hour on the roll.',
        bn: 'ফিতার প্রতি ঘণ্টায় পর্ব অনুমোদনের অধিকার কার ছিল, কার্বন কপি জানায়।'
      },
      isContradiction: false,
      bonusPoints: 60
    },
    {
      id: 'museum-condition',
      sourceId: 'clue-03-cracked-scarf',
      targetId: 'suspect-03-rossi',
      requiresEvidenceIds: ['clue-03-vault-access-logs', 'clue-03-janitor-testimony'],
      label: {
        en: 'The condition report',
        bn: 'অবস্থা পরীক্ষার নথি'
      },
      deductionNotes: {
        en: 'The signed condition statement can now be compared to the load roll during the holder’s session.',
        bn: 'এখন ধারকের পর্বে ওজনের ফিতার সঙ্গে স্বাক্ষরিত বিবৃতি মেলানো যায়।'
      },
      isContradiction: true,
      bonusPoints: 60
    },
    {
      id: 'museum-service',
      sourceId: 'clue-03-optical-prism',
      targetId: 'suspect-03-chloe',
      requiresEvidenceIds: ['case-003-photo-call'],
      label: {
        en: 'An authorised service visit',
        bn: 'অনুমোদিত পরিষেবা'
      },
      deductionNotes: {
        en: 'The work order accounts for the reference on pillar three. It gives no evidence about the load on the cushion.',
        bn: 'কাজের নথিতে স্তম্ভের প্রিজমের ব্যাখ্যা আছে। কুশনের ওজন সম্পর্কে এতে তথ্য নেই।'
      },
      isContradiction: false,
      bonusPoints: 60
    }
  ],
  timelineEvents: [
    {
      id: 'tl3-01',
      timestamp: '10:00',
      timeSortValue: 600,
      title: {
        en: 'Diagnostic work order',
        bn: 'পরীক্ষার কাজের নথি'
      },
      description: {
        en: 'A daytime test is authorised.',
        bn: 'দিনের পরীক্ষার অনুমোদন হয়।'
      },
      source: {
        en: 'Relay timer record',
        bn: 'রিলের টাইমার রেকর্ড'
      },
      verifiedLocation: {
        en: 'HVAC Vent beside Breaker Panel',
        bn: 'ব্রেকার প্যানেলের পাশের এসি ভেন্ট'
      },
      correctIndex: 0,
      evidenceId: 'clue-03-emp-capacitor'
    },
    {
      id: 'tl3-02',
      timestamp: '14:00',
      timeSortValue: 840,
      title: {
        en: 'Photography reference issued',
        bn: 'ছবির রেফারেন্স দেওয়া হয়'
      },
      description: {
        en: 'A work order lists pillar three.',
        bn: 'নথিতে তিন নম্বর স্তম্ভ লেখা।'
      },
      source: {
        en: 'Service prism',
        bn: 'পরিষেবা প্রিজম'
      },
      verifiedLocation: {
        en: 'Laser Emitter Pillar #3',
        bn: 'লেজার পিলার ৩'
      },
      correctIndex: 1,
      evidenceId: 'clue-03-optical-prism'
    },
    {
      id: 'tl3-03',
      timestamp: '18:00',
      timeSortValue: 1080,
      title: {
        en: 'Cushion load changes',
        bn: 'কুশনের ওজন বদলায়'
      },
      description: {
        en: 'Two successive readings differ.',
        bn: 'পরপর দুটি মাপ আলাদা।'
      },
      source: {
        en: 'Vault access and load roll',
        bn: 'ভল্টের প্রবেশ ও ওজনের ফিতা'
      },
      verifiedLocation: {
        en: 'Vault Entrance Terminal',
        bn: 'ভল্টের মূল প্রবেশদ্বার'
      },
      correctIndex: 2,
      evidenceId: 'clue-03-vault-access-logs'
    },
    {
      id: 'tl3-04',
      timestamp: '01:45',
      timeSortValue: 1545,
      title: {
        en: 'Keynote begins',
        bn: 'বক্তৃতা শুরু'
      },
      description: {
        en: 'The gala roll places the speaker upstairs.',
        bn: 'অনুষ্ঠানের খাতায় বক্তা ওপরে।'
      },
      source: {
        en: 'Freight desk shift carbon',
        bn: 'মালবাহী ডেস্কের পালার কপি'
      },
      verifiedLocation: {
        en: 'Security Holding Room',
        bn: 'নিরাপত্তা কক্ষে নেওয়া সাক্ষ্য'
      },
      correctIndex: 3,
      evidenceId: 'clue-03-janitor-testimony'
    },
    {
      id: 'tl3-05',
      timestamp: '02:15',
      timeSortValue: 1575,
      title: {
        en: 'Lighting outage',
        bn: 'আলোর বিভ্রাট'
      },
      description: {
        en: 'The scheduled event appears on the relay counter.',
        bn: 'নির্ধারিত ঘটনা রিলের কাউন্টারে দেখা যায়।'
      },
      source: {
        en: 'Relay timer record',
        bn: 'রিলের টাইমার রেকর্ড'
      },
      verifiedLocation: {
        en: 'HVAC Vent beside Breaker Panel',
        bn: 'ব্রেকার প্যানেলের পাশের এসি ভেন্ট'
      },
      correctIndex: 4,
      evidenceId: 'clue-03-emp-capacitor'
    },
    {
      id: 'tl3-06',
      timestamp: '02:19',
      timeSortValue: 1579,
      title: {
        en: 'Lights return',
        bn: 'আলো ফেরে'
      },
      description: {
        en: 'The safety check ends.',
        bn: 'নিরাপত্তা পরীক্ষা শেষ।'
      },
      source: {
        en: 'Relay timer record',
        bn: 'রিলের টাইমার রেকর্ড'
      },
      verifiedLocation: {
        en: 'HVAC Vent beside Breaker Panel',
        bn: 'ব্রেকার প্যানেলের পাশের এসি ভেন্ট'
      },
      correctIndex: 5,
      evidenceId: 'clue-03-emp-capacitor'
    },
    {
      id: 'tl3-07',
      timestamp: '02:45',
      timeSortValue: 1605,
      title: {
        en: 'Freight collection',
        bn: 'মাল সংগ্রহ'
      },
      description: {
        en: 'The porter collects a sealed trolley.',
        bn: 'বাহক সিল করা ট্রলি নেন।'
      },
      source: {
        en: 'Freight desk shift carbon',
        bn: 'মালবাহী ডেস্কের পালার কপি'
      },
      verifiedLocation: {
        en: 'Security Holding Room',
        bn: 'নিরাপত্তা কক্ষে নেওয়া সাক্ষ্য'
      },
      correctIndex: 6,
      evidenceId: 'clue-03-janitor-testimony'
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: {
        en: 'Two instruments',
        bn: 'দুটি যন্ত্র'
      },
      hintText: {
        en: 'Look for a record that measures something other than light.',
        bn: 'আলো ছাড়া আর কী মাপা হয়েছে দেখুন।'
      }
    },
    {
      level: 2,
      cost: 100,
      title: {
        en: 'Weight and time',
        bn: 'ওজন ও সময়'
      },
      hintText: {
        en: 'Compare the object on the cushion with both readings on the roll.',
        bn: 'কুশনের বস্তুর সঙ্গে ফিতার দুই মাপ মেলান।'
      }
    },
    {
      level: 3,
      cost: 200,
      title: {
        en: 'A shift changes hands',
        bn: 'পালাবদল'
      },
      hintText: {
        en: 'Read the dispatch carbon at the hour of the weight change. Check the private lot separately from the teaching order.',
        bn: 'ওজন বদলের সময়ে ডিসপ্যাচের কপি পড়ুন। শিক্ষামূলক চালান থেকে ব্যক্তিগত লট আলাদা যাচাই করুন।'
      }
    }
  ],
  solution: {
    culpritId: 'suspect-03-rossi',
    culpritName: {
      en: `${curator.name.en} (Chief Curator)`,
      bn: `${curator.name.bn} (প্রধান কিউরেটর)`
    },
    motiveDescription: {
      en: 'Pay off an excavation debt through a private lot',
      bn: 'ব্যক্তিগত লটের টাকায় খননের ঋণ শোধ'
    },
    methodDescription: {
      en: 'Substitution during inspection with a later lighting diversion',
      bn: 'পরীক্ষার সময়ে বদল ও পরে আলোর বিভ্রাট দিয়ে মনোযোগ সরানো'
    },
    approximateTime: {
      en: '18:00 condition check',
      bn: '১৮:০০-এর অবস্থা পরীক্ষা'
    },
    crucialEvidenceIds: [
      'clue-03-cracked-scarf',
      'clue-03-vault-access-logs',
      'clue-03-emp-capacitor',
      'clue-03-janitor-testimony',
      'clue-03-lead-box',
      'clue-03-rossi-invoice'
    ],
    falseAlibiSuspectId: 'suspect-03-rossi',
    fullCaseDebriefing: {
      en: `${curator.family.en} certified that the original remained during her inspection. The display roll records the only 86-to-42 g change at 18:00. The crack identifies resin; the genuine 86 g mount was sealed in Q9. The live F17 check and the separately witnessed freight carbon put that session in ${curator.family.en}’s hands then, between ${engineer.family.en} and ${securityChief.family.en}. The Q9 settlement would discharge her excavation debt.\n\nThe teaching order explains the existence of a cast, the photo work explains the prism, and ${custodian.family.en} collected a box that had already been sealed. The scheduled lighting failure drew attention eight hours later while ${curator.family.en} was genuinely on stage. Her whereabouts at the gala were true. Her condition report was false.`,
      bn: `${curator.family.bn} নিজের পরীক্ষার সময় আসলটি প্রদর্শনীতে ছিল বলে প্রত্যয়ন করেন। ৮৬ থেকে ৪২ গ্রাম হওয়ার একমাত্র রেকর্ড ১৮:০০-তে। ফাটলে রেজিন ধরা পড়ে, আসল ৮৬ গ্রামের মাউন্ট Q9-এ সিল করা। সচল F17 যাচাই ও স্বতন্ত্র সাক্ষরিত কপি অনুযায়ী ${engineer.family.bn} ও ${securityChief.family.bn}ের মাঝের ওই পালায় ${curator.family.bn}র দায়িত্ব ছিল। Q9-এর অর্থে তাঁর খননের ঋণ মিটত।\n\nশিক্ষামূলক কাজ মডেলটির, আর ছবির কাজ প্রিজমটির ব্যাখ্যা দেয়। ${custodian.family.bn} আগেই সিল করা বাক্স তুলেছেন। আট ঘণ্টা পরে ${curator.family.bn} সত্যিই মঞ্চে থাকার সময়ে নির্ধারিত আলোর বিভ্রাট সবার মনোযোগ টানে। অনুষ্ঠানে তাঁর অবস্থান সত্য, পরীক্ষার রিপোর্ট মিথ্যা।`
    },
    options: {
      motives: [
        {
          id: 'm-rossi-debt',
          label: {
            en: 'Pay off an excavation debt through a private lot',
            bn: 'ব্যক্তিগত লটের টাকায় খননের ঋণ শোধ'
          }
        },
        {
          id: 'm-security-revenge',
          label: {
            en: 'Retaliate for a pension cut',
            bn: 'পেনশন কাটার প্রতিশোধ'
          }
        },
        {
          id: 'm-janitor-medical',
          label: {
            en: 'Meet overdue family medical bills',
            bn: 'পরিবারের বকেয়া চিকিৎসা খরচ মেটানো'
          }
        },
        {
          id: 'm-insurance-fraud',
          label: {
            en: 'Collect an insurance settlement',
            bn: 'বিমার অর্থ আদায়'
          }
        }
      ],
      methods: [
        {
          id: 'met-rossi-swap',
          label: {
            en: 'Substitution during inspection with a later lighting diversion',
            bn: 'পরীক্ষার সময়ে বদল ও পরে আলোর বিভ্রাট দিয়ে মনোযোগ সরানো'
          }
        },
        {
          id: 'met-hvac-ninja',
          label: {
            en: 'Removal while the gallery lights were out',
            bn: 'আলো নিভে থাকার সময় সরানো'
          }
        },
        {
          id: 'met-cloned-keycard',
          label: {
            en: 'Substitution during the overnight freight collection',
            bn: 'রাতে মাল সংগ্রহের সময় বদল'
          }
        },
        {
          id: 'met-laser-glitch',
          label: {
            en: 'Removal during the earlier photography session',
            bn: 'আগের ছবি তোলার সময় সরানো'
          }
        }
      ],
      times: [
        {
          id: 't-1800',
          label: {
            en: '18:00 condition check',
            bn: '১৮:০০-এর অবস্থা পরীক্ষা'
          }
        },
        {
          id: 't-0215',
          label: {
            en: '02:15 lighting failure',
            bn: '০২:১৫-র বিভ্রাট'
          }
        },
        {
          id: 't-0245',
          label: {
            en: '02:45 freight collection',
            bn: '০২:৪৫-র মাল সংগ্রহ'
          }
        },
        {
          id: 't-yesterday',
          label: {
            en: '14:00 photography session',
            bn: '১৪:০০-র ছবির কাজ'
          }
        }
      ]
    },
    motiveId: 'm-rossi-debt',
    methodId: 'met-rossi-swap',
    timeId: 't-1800'
  },
  site: {
    en: 'Metropolitan Museum of Antiquities',
    bn: 'মেট্রোপলিটন প্রত্নতত্ত্ব জাদুঘর'
  },
  deductions: [
    {
      id: 'inquiry-1',
      question: {
        en: 'When did the display’s contents change?',
        bn: 'প্রদর্শনীর বস্তু কখন বদলেছে?'
      },
      connectionId: 'c3-conn-01',
      evidenceIds: ['clue-03-cracked-scarf', 'clue-03-vault-access-logs', 'clue-03-emp-capacitor']
    },
    {
      id: 'inquiry-2',
      question: {
        en: 'Who held the live packing session then?',
        bn: 'তখন সচল প্যাকিং পর্ব কার হাতে ছিল?'
      },
      connectionId: 'c3-conn-04',
      evidenceIds: ['clue-03-janitor-testimony', 'clue-03-lead-box', 'clue-03-vault-access-logs'],
      alternativeConnectionIds: ['case-003-link-5']
    },
    {
      id: 'inquiry-3',
      question: {
        en: 'Which shipment would release the private payment?',
        bn: 'কোন চালানে ব্যক্তিগত অর্থ ছাড় হতো?'
      },
      connectionId: 'c3-conn-03',
      evidenceIds: ['clue-03-rossi-invoice', 'clue-03-lead-box']
    }
  ]
};
