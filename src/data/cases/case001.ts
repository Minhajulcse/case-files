import type { CaseData } from '../../types/game';
import { manorCast } from '../characters';

const { owner, heir, archivist, physician, housekeeper, dealer } = manorCast;

export const case001: CaseData = {
  id: 'case-001',
  caseNumber: 'CASE 001',
  title: {
    en: 'The Last Alibi',
    bn: 'শেষ অ্যালিবাই'
  },
  subtitle: {
    en: 'A sealed study. A voice heard through the door. Five people with something to lose.',
    bn: 'এক রুদ্ধ পাঠকক্ষ। দরজার ওপারে এক কণ্ঠ। পাঁচজনেরই কিছু হারানোর ভয়।'
  },
  badge: 'MURDER',
  difficulty: 'Hard',
  estimatedTime: '25-35 mins',
  victimOrSubject: {
    en: `${owner.name.en} (Age 64, Industrialist & Antiquities Collector)`,
    bn: `${owner.name.bn} (বয়স ৬৪, শিল্পপতি ও প্রাচীন প্রত্নতত্ত্ব সংগ্রাহক)`
  },
  incidentDate: {
    en: '14 October 2024 · Discovered 23:05',
    bn: '১৪ অক্টোবর ২০২৪ · সন্ধান ২৩:০৫'
  },
  location: {
    en: `${owner.family.en} Manor, Private Study, Blackthorn Ridge`,
    bn: `${owner.family.bn} বাড়ি, ব্যক্তিগত পড়ার ঘর, ব্ল্যাকথর্ন রিজ`
  },
  synopsis: {
    en: `At 23:05 the staff force the study door. ${owner.given.en} ${owner.family.en} lies over his accounts. Both the bolt and the garden catch are fastened. Someone says they heard him half an hour earlier.`,
    bn: `রাত ২৩:০৫-এ কর্মীরা দরজা ভেঙে ${owner.given.bn} ${owner.family.bn}কে হিসাবখাতার ওপর নিথর অবস্থায় পান। দরজার খিল ও বাগানের জানালার ছিটকিনি আটকানো। এক সাক্ষীর দাবি, আধঘণ্টা আগেও তাঁর কণ্ঠ শোনা গেছে।`
  },
  briefing: {
    chiefMemo: {
      en: 'Separate what the household heard from what anyone saw. The kitchen and the library kept their own receipts that evening.',
      bn: 'বাড়ির লোকেরা কী শুনেছে আর কী দেখেছে, আলাদা করুন। সে সন্ধ্যায় রান্নাঘর ও গ্রন্থাগার আলাদা রসিদ রেখেছিল।'
    },
    initialStatus: {
      en: 'Study sealed under police tape. Coroner report pending review.',
      bn: 'পড়ার ঘরটি পুলিশের টেপ দিয়ে সিলগালা করা। ময়নাতদন্ত রিপোর্ট পর্যালোচনার অপেক্ষায়।'
    },
    keyObjectives: [
      {
        en: 'Trace the bottle between the kitchen and study.',
        bn: 'রান্নাঘর থেকে পাঠকক্ষ পর্যন্ত বোতলের পথ খুঁজুন।'
      },
      {
        en: 'Test the time of the last reported conversation.',
        bn: 'শেষ কথোপকথনের সময় যাচাই করুন।'
      },
      {
        en: 'Account for the audit and the closed window.',
        bn: 'নিরীক্ষার হিসাব ও বন্ধ জানালার ব্যাখ্যা দিন।'
      }
    ]
  },
  crimeScene: {
    roomTitle: {
      en: 'Private study',
      bn: 'ব্যক্তিগত পাঠকক্ষ'
    },
    roomDescription: {
      en: 'Rain gathers on the rose garden sill. A lamp still burns over the open accounts.',
      bn: 'গোলাপবাগানের জানালায় বৃষ্টির জল। খোলা হিসাবখাতার ওপর বাতি জ্বলছে।'
    },
    sceneTheme: 'victorian_study',
    hotspots: [
      {
        id: 'hs-01-desk',
        name: {
          en: 'Overturned glass',
          bn: 'উল্টানো গ্লাস'
        },
        x: 47.2,
        y: 61,
        description: {
          en: `The overturned snifter rests beside ${owner.given.en}’s hand.`,
          bn: `${owner.given.bn}ের হাতের পাশে গ্লাসটি উল্টে আছে।`
        },
        revealsEvidenceId: 'clue-01-brandy-snifter',
        discoveryNote: {
          en: 'The spill cuts across a fresh entry. A service call is impressed in the blotter.',
          bn: 'সদ্য লেখা লাইনের ওপর পানীয় ছড়িয়েছে। কালি শোষকে সার্ভিস কলের ছাপ।'
        },
        iconType: 'magnifier',
        plate: 'study',
        shape: {
          type: 'polygon',
          points: [[45.6, 59.4], [46.5, 57.3], [47.4, 56.8], [48.7, 57.8], [49.4, 59.5],
            [49.3, 61.5], [48.5, 63.6], [46.4, 63.8], [45.6, 62.1]]
        }
      },
      {
        id: 'hs-01-ledger',
        name: {
          en: 'Open ledger',
          bn: 'খোলা খাতা'
        },
        x: 57,
        y: 56,
        description: {
          en: 'Two pages are held flat beneath the desk lamp.',
          bn: 'বাতির নিচে খাতার দুই পাতা খোলা।'
        },
        revealsEvidenceId: 'clue-02-audited-ledger',
        discoveryNote: {
          en: 'Six entries carry the same collection code. The margin names a morning appointment.',
          bn: 'ছয়টি হিসাবের সংগ্রহ কোড এক। পাশে সকালের সাক্ষাতের সময়।'
        },
        iconType: 'document',
        plate: 'study',
        shape: {
          type: 'polygon',
          points: [[47.5, 55.7], [51.4, 55.1], [54.8, 54.5], [56.2, 53.1], [60, 53.4],
            [65.8, 57], [65.7, 57.9], [51.6, 60.1]]
        }
      },
      {
        id: 'hs-01-clock',
        name: {
          en: 'Grandfather clock',
          bn: 'দেয়ালঘড়ি'
        },
        x: 9,
        y: 28,
        description: {
          en: 'The clock face is visible above the pendulum cabinet.',
          bn: 'দোলকের বাক্সের ওপরে ঘড়ির মুখ।'
        },
        revealsEvidenceId: 'clue-03-stopped-clock',
        discoveryNote: {
          en: 'The hands read 22:14. A separate paper strip continues inside the case.',
          bn: 'কাঁটায় ২২:১৪। বাক্সে আলাদা কাগজের ফিতা আরও এগিয়েছে।'
        },
        iconType: 'magnifier',
        plate: 'study',
        shape: {
          type: 'rect',
          width: 15,
          height: 54
        }
      },
      {
        id: 'hs-01-liquor',
        name: {
          en: 'Crystal decanter',
          bn: 'কাচের বোতল'
        },
        x: 95,
        y: 53,
        description: {
          en: 'A cut-glass bottle stands on the sideboard tray.',
          bn: 'সাইডবোর্ডের ট্রেতে খোদাই করা কাচের বোতল।'
        },
        revealsEvidenceId: 'clue-04-poisoned-decanter',
        discoveryNote: {
          en: 'The broken neck band still carries the delivery number B4.',
          bn: 'ছেঁড়া বন্ধনীতে এখনও সরবরাহ নম্বর B4।'
        },
        iconType: 'flask',
        plate: 'study',
        shape: {
          type: 'rect',
          width: 10,
          height: 26
        }
      },
      {
        id: 'hs-01-window',
        name: {
          en: 'Window catch',
          bn: 'জানালার ছিটকিনি'
        },
        x: 29,
        y: 26,
        description: {
          en: 'The brass arm sits across two rain-darkened panes.',
          bn: 'বৃষ্টিভেজা দুই পাল্লার ওপর পিতলের হাতল।'
        },
        revealsEvidenceId: 'clue-05-window-latch',
        discoveryNote: {
          en: 'Fresh arcs interrupt the polish beneath the catch.',
          bn: 'ছিটকিনির নিচের পালিশে নতুন বাঁকা দাগ।'
        },
        iconType: 'magnifier',
        plate: 'study',
        shape: {
          type: 'rect',
          width: 14,
          height: 17
        }
      },
      {
        id: 'hs-01-fireplace',
        name: {
          en: 'Fireplace hearth',
          bn: 'অগ্নিকুণ্ড'
        },
        x: 77,
        y: 39,
        description: {
          en: 'A cream corner shows through the ash under the grate.',
          bn: 'ঝাঁঝরির নিচে ছাইয়ের ভেতর সাদা এক কোণ।'
        },
        revealsEvidenceId: 'clue-06-burnt-will',
        discoveryNote: {
          en: 'The surviving clause has room for a signature. The space is empty.',
          bn: 'বেঁচে যাওয়া ধারায় স্বাক্ষরের জায়গাটি খালি।'
        },
        iconType: 'document',
        plate: 'study',
        shape: {
          type: 'rect',
          width: 15,
          height: 25
        }
      },
      {
        id: 'hs-01-garden-sill',
        name: {
          en: 'Rose garden sill',
          bn: 'গোলাপবাগানের কার্নিশ'
        },
        x: 25,
        y: 45,
        description: {
          en: 'A strand catches the light outside the lower pane.',
          bn: 'নিচের কাচের বাইরে এক টুকরো সুতোয় আলো পড়ছে।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-07-nylon-thread',
        discoveryNote: {
          en: 'The strand clings to a thorn just below the window hardware.',
          bn: 'জানালার যন্ত্রাংশের ঠিক নিচে কাঁটায় সুতোটি লেগে আছে।'
        },
        iconType: 'footprint',
        plate: 'study',
        shape: {
          type: 'rect',
          width: 16,
          height: 17
        }
      },
      {
        id: 'hs-01-wastebasket',
        name: {
          en: 'Wastebasket',
          bn: 'বর্জ্যের ঝুড়ি'
        },
        x: 66,
        y: 83,
        description: {
          en: 'A folded envelope sticks up through the wire basket.',
          bn: 'তারের ঝুড়ি থেকে ভাঁজ করা খাম বেরিয়ে আছে।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-08-torn-envelope',
        discoveryNote: {
          en: 'Inside is a neck band with a violet countermark and an uneven torn end.',
          bn: 'ভেতরে বেগুনি প্রতিচিহ্নসহ অসমভাবে ছেঁড়া বোতলের ফিতা।'
        },
        iconType: 'document',
        plate: 'study',
        shape: {
          type: 'rect',
          width: 12,
          height: 23
        }
      },
      {
        id: 'hs-case-001-pulse-strip',
        plate: 'study',
        x: 49,
        y: 49,
        shape: {
          type: 'polygon',
          points: [[36.8, 56.5], [43.5, 44.3], [47, 43], [51, 43], [54.6, 45.7], [56.1, 48.5],
            [55.9, 52.6], [54.6, 53.9], [51.4, 54.6], [47, 55.3], [45.1, 57.4], [42.2, 55.6],
            [40.1, 57.2], [40, 59.4], [37.8, 58.8]]
        },
        name: {
          en: `${owner.given.en}’s jacket`,
          bn: `${owner.given.bn}ের জামা`
        },
        description: {
          en: `A portable monitor is clipped beneath ${owner.given.en}’s jacket. Its trace ends one minute after a desk bell is heard on its sound channel.`,
          bn: `${owner.given.bn}ের জামার নিচে ছোট মনিটর। শব্দের চ্যানেলে ডেস্কের ঘণ্টা শোনার এক মিনিট পর স্পন্দন থেমেছে।`
        },
        discoveryNote: {
          en: 'The monitor has a time interval, but no wall-clock setting.',
          bn: 'মনিটরে সময়ের ব্যবধান আছে, ঘড়ির সময় নেই।'
        },
        revealsEvidenceId: 'case-001-pulse-strip',
        iconType: 'magnifier'
      },
      {
        id: 'hs-case-001-corridor-bolt',
        plate: 'study',
        x: 94,
        y: 22,
        shape: {
          type: 'rect',
          width: 10,
          height: 31
        },
        name: {
          en: 'Corridor door',
          bn: 'করিডোরের দরজা'
        },
        description: {
          en: 'The oak door bears a new split beside an old brass bolt.',
          bn: 'ওক দরজার পুরোনো পিতলের খিলের পাশে নতুন ফাটল।'
        },
        discoveryNote: {
          en: 'The rescue party recorded this damage before removing the bolt.',
          bn: 'খিল তোলার আগে উদ্ধারকারীরা ক্ষতিটি নথিভুক্ত করেন।'
        },
        revealsEvidenceId: 'case-001-corridor-bolt',
        iconType: 'magnifier'
      }
    ],
    plates: ['study']
  },
  otherCharacters: [owner],
  suspects: [
    {
      ...heir,
      alias: {
        en: 'The Disinherited Nephew',
        bn: 'সম্পত্তিচ্যুত ভাইপো'
      },
      role: {
        en: 'Nephew & Heir Apparent',
        bn: 'ভাইপো ও সাবেক উত্তরাধিকারী'
      },
      age: 29,
      occupation: {
        en: 'Socialite & High-Stakes Gambler',
        bn: 'উচ্চবিত্ত জুয়াড়ি'
      },
      relationshipToVictim: {
        en: 'Estranged nephew dependent on trust fund',
        bn: 'উইল ও ভাতার ওপর নির্ভরশীল দূরবর্তী ভাইপো'
      },
      motive: {
        en: `A loan instalment falls due at midnight. ${owner.given.en} threatened his inheritance that afternoon.`,
        bn: `মধ্যরাতে কিস্তি দিতে হবে। বিকেলে ${owner.given.bn} উত্তরাধিকার বাতিলের হুমকি দেন।`
      },
      alibi: {
        en: 'I spent the evening in the billiard room. Nobody kept score.',
        bn: 'সন্ধ্যাটা বিলিয়ার্ড ঘরে ছিলাম। কেউ স্কোর রাখেনি।'
      },
      personality: {
        en: 'Nervous, arrogant, sweat beads on his brow, chain-smoker.',
        bn: 'নার্ভাস, দাম্ভিক, কপালে ঘামের ফোঁটা, ঘন ঘন সিগারেট টানে।'
      },
      secrets: {
        en: `Stole ${owner.given.en}'s diamond signet ring earlier that afternoon to pawn it.`,
        bn: 'সেদিন বিকেলে কাকার আলমারি থেকে পারিবারিক হীরার আংটি চুরি করে বন্ধক দিয়েছিল।'
      },
      avatarSeed: 'Julian',
      avatarColor: '#c2410c',
      dialogueTree: [
        {
          id: 'dlg-j-1',
          prompt: {
            en: 'Who saw you in the billiard room?',
            bn: 'বিলিয়ার্ড ঘরে আপনাকে কে দেখেছে?'
          },
          response: {
            en: 'I played alone. I could hear the kitchen bell, but I never counted the strokes.',
            bn: 'একা খেলছিলাম। রান্নাঘরের ঘণ্টা শুনেছি, কয়বার বাজল গুনিনি।'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-j-2',
          prompt: {
            en: 'How did you meet tonight’s instalment?',
            bn: 'আজকের কিস্তি কীভাবে মেটালেন?'
          },
          response: {
            en: 'Take the ticket. I pawned his ring. I would rather he never learned that.',
            bn: 'রসিদটা নিন। তাঁর আংটি বন্ধক দিয়েছি। তিনি জানুন তা চাইনি।'
          },
          reactionMood: 'nervous',
          revealsClueId: 'clue-09-pawn-receipt'
        },
        {
          id: 'dlg-j-3',
          prompt: {
            en: 'When did you last enter the study?',
            bn: 'শেষ কবে পাঠকক্ষে ঢুকেছিলেন?'
          },
          response: {
            en: 'At five. He held that unsigned amendment over the fire until I left.',
            bn: 'পাঁচটায়। আমি বেরোবার সময়ও তিনি স্বাক্ষরহীন সংশোধনীটা আগুনের ওপর ধরে ছিলেন।'
          },
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-06-burnt-will',
          reactionText: {
            en: 'I recognised my name below the burned edge. I never saw him sign it.',
            bn: 'পোড়া অংশের নিচে আমার নাম চিনেছি। তাঁকে স্বাক্ষর করতে দেখিনি।'
          },
          stressIncrease: 25,
          exposesLie: false
        },
        {
          evidenceId: 'clue-09-pawn-receipt',
          reactionText: {
            en: 'The advance paid the instalment, not the entire debt. I still owed him an explanation.',
            bn: 'অগ্রিমে কিস্তি মিটেছে, পুরো ঋণ নয়। তাঁকে জবাব দেওয়ার ছিল।'
          },
          stressIncrease: 40,
          exposesLie: false
        }
      ]
    },
    {
      ...archivist,
      alias: {
        en: 'The Quiet Archivist',
        bn: 'শান্ত স্বভাবের মহাফেজ'
      },
      role: {
        en: 'Private Secretary & Estate Archivist',
        bn: 'ব্যক্তিগত সচিব ও মহাফেজ'
      },
      age: 34,
      occupation: {
        en: 'Confidential Secretary',
        bn: 'গোপনীয় সচিব'
      },
      relationshipToVictim: {
        en: 'Personal assistant and archivist for 7 years',
        bn: '৭ বছর ধরে বিশ্বস্ত ব্যক্তিগত সহকারী'
      },
      motive: {
        en: `${owner.given.en} had reopened accounts administered jointly by the library and household staff.`,
        bn: `গ্রন্থাগার ও গৃহকর্মীদের যৌথ হিসাব ${owner.given.bn} আবার খুলেছিলেন।`
      },
      alibi: {
        en: `I was at the library desk. At the half-hour I heard the study clock strike and ${owner.given.en} answer from inside.`,
        bn: `গ্রন্থাগারের ডেস্কে ছিলাম। সাড়ে দশটায় পাঠকক্ষের ঘণ্টা আর ভেতর থেকে ${owner.given.bn}ের জবাব শুনি।`
      },
      personality: {
        en: 'Composed, articulate, wearing prim spectacles, remarkably calm under pressure.',
        bn: 'অত্যন্ত শান্ত, মাপা কথা, চোখে চশমা, তীব্র চাপের মুখেও অবিচল।'
      },
      secrets: {
        en: 'An expert embroiderer who uses waxed nylon monofilament and specialized knotting tools.',
        bn: 'বই বাঁধাই ও সূচিকর্মে দক্ষ, যে মোম মাখানো শক্ত নাইলন সুতো ব্যবহার করে।'
      },
      avatarSeed: 'Evelyn',
      avatarColor: '#0284c7',
      dialogueTree: [
        {
          id: 'dlg-e-1',
          prompt: {
            en: 'How did you place the conversation at 22:30?',
            bn: 'কথোপকথনের সময় ২২:৩০ বুঝলেন কীভাবে?'
          },
          response: {
            en: 'The study chime marked the half-hour. I called through the oak and heard a voice. The maid was in the corridor.',
            bn: 'ঘড়িতে সাড়ে দশটা বাজে। দরজার বাইরে ডাকলে কণ্ঠ শুনি। পরিচারিকা করিডোরে ছিল।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-e-2',
          prompt: {
            en: 'Who handled reimbursements?',
            bn: 'খরচ ফেরতের কাজ কারা করতেন?'
          },
          response: {
            en: 'Three desks could authorise them. You need the quarter’s seal cards to separate our entries.',
            bn: 'তিন ডেস্ক অনুমোদন দিত। লেনদেন আলাদা করতে ত্রৈমাসিক সিল কার্ড লাগবে।'
          },
          reactionMood: 'calm',
          conditionClueId: 'clue-02-audited-ledger',
          revealsClueId: 'clue-10-handwriting-sample'
        },
        {
          id: 'dlg-e-3',
          prompt: {
            en: 'Was the terrace in use?',
            bn: 'টেরেস ব্যবহার হতো?'
          },
          response: {
            en: 'The gardener and the bindery share a store there. The windows had been polished that morning.',
            bn: 'সেখানে মালি আর বাঁধাইঘরের যৌথ গুদাম। সেদিন সকালে জানালা পালিশ হয়েছিল।'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-stopped-clock',
          reactionText: {
            en: 'I dated the voice by the chime. I did not see him at the door.',
            bn: 'ঘণ্টা শুনে সময় বলেছি। দরজায় তাঁকে দেখিনি।'
          },
          stressIncrease: 35,
          exposesLie: true,
          requiresEvidenceIds: ['clue-11-tray-handover']
        },
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: {
            en: 'That thread was in both stores. Ask which surface it last touched.',
            bn: 'সুতো দুটো গুদামেই ছিল। শেষে কোন পৃষ্ঠে লেগেছিল তা দেখুন।'
          },
          stressIncrease: 50,
          exposesLie: false
        },
        {
          evidenceId: 'clue-02-audited-ledger',
          reactionText: {
            en: 'The examiner was due in the morning. Everyone in the office knew.',
            bn: 'সকালে নিরীক্ষক আসবেন। অফিসের সবাই জানত।'
          },
          stressIncrease: 30,
          exposesLie: false
        }
      ]
    },
    {
      ...physician,
      alias: {
        en: 'The Family Physician',
        bn: 'পারিবারিক চিকিৎসক'
      },
      role: {
        en: 'Personal Physician',
        bn: 'ব্যক্তিগত চিকিৎসক'
      },
      age: 58,
      occupation: {
        en: 'Medical Doctor & Toxicologist',
        bn: 'চিকিৎসক ও বিষবিজ্ঞানী'
      },
      relationshipToVictim: {
        en: 'Lifelong friend and physician',
        bn: 'আজীবন বন্ধু ও চিকিৎসক'
      },
      motive: {
        en: `${owner.given.en} was considering reporting disputed prescriptions. ${physician.family.en} also signed for conservation supplies.`,
        bn: `বিতর্কিত ব্যবস্থাপত্র নিয়ে ${owner.given.bn} অভিযোগ করার কথা ভাবছিলেন। সংরক্ষণ সামগ্রীর জন্যও ${physician.family.bn} স্বাক্ষর করতেন।`
      },
      alibi: {
        en: 'I kept a telephone appointment from the guest room. The switchboard recorded the call, though earlier I was downstairs.',
        bn: 'অতিথিকক্ষ থেকে নির্ধারিত ফোন করি। সুইচবোর্ডে তা আছে, তবে আগে নিচে ছিলাম।'
      },
      personality: {
        en: 'Weary, dignified, smell of antiseptic and pipe tobacco, trembling fingers.',
        bn: 'ক্লান্ত কিন্তু গম্ভীর, অ্যান্টিসেপ্টিক ও পাইপের গন্ধযুক্ত, হাত সামান্য কাঁপে।'
      },
      secrets: {
        en: 'Keeps a locked travel bag containing pharmaceutical grade toxins and sedatives.',
        bn: 'তার ব্যাগে তীব্র বিষাক্ত ওষুধ ও ঘুমের ইনজেকশন লক করা আছে।'
      },
      avatarSeed: 'Finch',
      avatarColor: '#16a34a',
      dialogueTree: [
        {
          id: 'dlg-f-1',
          prompt: {
            en: `When was ${owner.given.en} last fit to write?`,
            bn: `${owner.given.bn} শেষ কখন লিখতে সক্ষম ছিলেন?`
          },
          response: {
            en: 'His hand was steady at supper. A blotter may tell you more about his last entry.',
            bn: 'রাতের খাবারে হাত কাঁপেনি। শেষ লেখার সময় কালি শোষক থেকে বুঝতে পারেন।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-f-2',
          prompt: {
            en: 'Who had access to the clinic case?',
            bn: 'চিকিৎসার বাক্স কার নাগালে ছিল?'
          },
          response: {
            en: 'It was on the landing. Its numbered seal is still intact in the porter’s photograph.',
            bn: 'সিঁড়ির চাতালে। দারোয়ানের ছবিতে নম্বর দেওয়া সিল অক্ষত।'
          },
          reactionMood: 'surprised'
        },
        {
          id: 'dlg-f-3',
          prompt: {
            en: 'Who laid out the drink?',
            bn: 'পানীয় কে সাজিয়েছিল?'
          },
          response: {
            en: 'I saw a sealed bottle at the kitchen hatch. Three of us could collect trays.',
            bn: 'রান্নাঘরের জানালায় সিল করা বোতল দেখি। আমাদের তিনজন ট্রে নিতে পারত।'
          },
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-04-poisoned-decanter',
          reactionText: {
            en: 'Two bottles make a good control. Check whether both samples agree.',
            bn: 'দুটি বোতল তুলনার সুযোগ দেয়। নমুনা মেলে কি না দেখুন।'
          },
          stressIncrease: 10,
          exposesLie: false
        },
        {
          evidenceId: 'clue-08-torn-envelope',
          reactionText: {
            en: 'The archive retains sample impressions. Here is the signed register.',
            bn: 'আর্কাইভে ছাপের নমুনা থাকে। স্বাক্ষর করা রেজিস্টারটি নিন।'
          },
          stressIncrease: 0,
          revealsClueId: 'clue-10-handwriting-sample',
          exposesLie: false
        }
      ]
    },
    {
      ...housekeeper,
      alias: {
        en: 'The Devoted Housekeeper',
        bn: 'একনিষ্ঠ গৃহপরিচারিকা'
      },
      role: {
        en: 'Head Housekeeper',
        bn: 'প্রধান গৃহপরিচারিকা'
      },
      age: 52,
      occupation: {
        en: 'Domestic Supervisor',
        bn: 'গৃহস্থালি তদারককারী'
      },
      relationshipToVictim: {
        en: 'Employee for 18 years',
        bn: '১৮ বছর ধরে কর্মরত গৃহপরিচারিকা'
      },
      motive: {
        en: 'A staff audit threatened her position. She prepared the tray and knew the household’s service routine.',
        bn: 'কর্মীদের নিরীক্ষায় তাঁর চাকরি ঝুঁকিতে। তিনি ট্রে সাজাতেন ও ঘরের সময়সূচি জানতেন।'
      },
      alibi: {
        en: 'I stayed by the kitchen hatch from the evening tray until the alarm. The maid was with me.',
        bn: 'সন্ধ্যার ট্রে থেকে সংকেত পর্যন্ত রান্নাঘরের জানালায় ছিলাম। পরিচারিকা সঙ্গে ছিল।'
      },
      personality: {
        en: 'Fretful, religious, clutches a wooden rosary, speaks in hushed whispers.',
        bn: 'ভীতু, ধর্মপ্রাণ, হাতে কাঠের জপমালা, ফিসফিস করে কথা বলে।'
      },
      secrets: {
        en: 'She let staff collect trays at the hatch and kept the maid’s counterfoil.',
        bn: 'তিনি কর্মীদের জানালা থেকে ট্রে নিতে দিতেন, পরিচারিকার কপিটি রেখেছিলেন।'
      },
      avatarSeed: 'Beatrice',
      avatarColor: '#9333ea',
      dialogueTree: [
        {
          id: 'dlg-b-1',
          prompt: {
            en: 'Who took the tray from the kitchen?',
            bn: 'রান্নাঘর থেকে ট্রে কে নিয়েছিল?'
          },
          response: {
            en: 'I saw a cuff, not a face. The maid watched the carrier all the way. Take her countersigned sheet.',
            bn: 'মুখ নয়, জামার হাতা দেখেছি। পরিচারিকা পুরো পথ বাহককে দেখেছে। তার স্বাক্ষর করা কপি নিন।'
          },
          reactionMood: 'nervous',
          revealsClueId: 'clue-11-tray-handover'
        },
        {
          id: 'dlg-b-2',
          prompt: {
            en: 'How did the staff enter at 23:05?',
            bn: '২৩:০৫-এ কর্মীরা কীভাবে ঢোকে?'
          },
          response: {
            en: 'We forced the oak door. The bolt landed on the rug, still in its keeper.',
            bn: 'দরজা ভেঙেছিলাম। খিল আটকানো অবস্থায় গালিচায় পড়ে।'
          },
          reactionMood: 'surprised'
        },
        {
          id: 'dlg-b-3',
          prompt: {
            en: 'What reached the kitchen after ten?',
            bn: 'দশটার পর কী শুনেছিলেন?'
          },
          response: {
            en: 'A crash, then much later a voice calling from the corridor. I heard no reply.',
            bn: 'আঘাতের শব্দ, অনেক পরে করিডোর থেকে ডাক। কোনো জবাব শুনিনি।'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-05-window-latch',
          reactionText: {
            en: 'I polished the plate before breakfast. The marks were not there when I finished.',
            bn: 'সকালের খাবারের আগে পাতটা পালিশ করেছি। তখন দাগ ছিল না।'
          },
          stressIncrease: 5,
          exposesLie: false
        }
      ]
    },
    {
      ...dealer,
      alias: {
        en: 'The Cutthroat Rival',
        bn: 'নিষ্ঠুর প্রতিদ্বন্দ্বী'
      },
      role: {
        en: 'Antiquities Dealer & Commercial Rival',
        bn: 'প্রাচীন শিল্প ব্যবসায়ী ও প্রতিদ্বন্দ্বী'
      },
      age: 46,
      occupation: {
        en: 'Private Art & Relic Dealer',
        bn: 'ব্যক্তিগত প্রত্নতত্ত্ব ডিলার'
      },
      relationshipToVictim: {
        en: 'Acrimonious business competitor',
        bn: 'ব্যবসায়িক শত্রু'
      },
      motive: {
        en: `His firm needed ${owner.given.en}’s codex to honour a sale already promised. He waited beyond the terrace after being dismissed.`,
        bn: `আগাম বিক্রির শর্ত পূরণে ${owner.given.bn}ের পুঁথি তাঁর দরকার ছিল। বিদায়ের পরও টেরেসের বাইরে অপেক্ষা করেন।`
      },
      alibi: {
        en: 'I left the house at 21:15. I did not say my car had left the grounds.',
        bn: '২১:১৫-তে বাড়ি থেকে বেরিয়েছি। গাড়ি চত্বর ছাড়ে বলিনি।'
      },
      personality: {
        en: 'Pompous, cigar-scented, sharp double-breasted suit, sneering demeanor.',
        bn: 'অহংকারী, সিগারের গন্ধ, দামি স্যুট পরিহিত, ব্যঙ্গাত্মক হাসি।'
      },
      secrets: {
        en: `Parked his Bentley down the driveway gate until 22:40 waiting to see if ${owner.given.en} would change his mind.`,
        bn: `রাত ১০:৪০ পর্যন্ত গেটের বাইরে গাড়ি থামিয়ে অপেক্ষা করছিল যদি ${owner.given.bn} মত বদলায়।`
      },
      avatarSeed: 'Marcus',
      avatarColor: '#b45309',
      dialogueTree: [
        {
          id: 'dlg-m-1',
          prompt: {
            en: 'Why were you at the manor?',
            bn: 'ম্যানরে এসেছিলেন কেন?'
          },
          response: {
            en: `I offered to buy the codex. ${owner.given.en} refused to let me handle it.`,
            bn: `পুঁথি কিনতে চেয়েছি। ${owner.given.bn} ধরতেও দেননি।`
          },
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-m-2',
          prompt: {
            en: 'Why does the gate book say 22:42?',
            bn: 'ফটকের খাতায় ২২:৪২ কেন?'
          },
          response: {
            en: 'I waited in the drive in case he changed his mind. The gate camera faces my car.',
            bn: 'মত পাল্টালে ফিরব বলে ড্রাইভওয়েতে ছিলাম। ফটকের ক্যামেরা আমার গাড়ির দিকে।'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-m-3',
          prompt: {
            en: 'What could you see from the drive?',
            bn: 'ড্রাইভওয়ে থেকে কী দেখা যেত?'
          },
          response: {
            en: 'Someone crossed the gravel. Rain turned the coat into a dark shape. You can have the gate still.',
            bn: 'কেউ নুড়িপথ পেরোয়। বৃষ্টিতে শুধু গাঢ় অবয়ব দেখা যায়। ফটকের ছবিটি নিন।'
          },
          reactionMood: 'calm',
          revealsClueId: 'clue-12-terrace-sighting'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: {
            en: 'The print has no toe. Anyone who claims a size from that is guessing.',
            bn: 'ছাপে জুতোর সামনের অংশ নেই। মাপ বললে তা অনুমান।'
          },
          stressIncrease: 0,
          exposesLie: false
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-01-brandy-snifter',
      name: {
        en: 'Overturned brandy glass',
        bn: 'উল্টানো ব্র্যান্ডির গ্লাস'
      },
      category: 'Physical',
      description: {
        en: `A narrow spill crosses ${owner.given.en}’s last entry. The ink had barely dried when the glass fell.`,
        bn: `${owner.given.bn}ের শেষ লেখার ওপর পানীয় ছড়িয়েছে। গ্লাস পড়ার সময় কালিও পুরো শুকায়নি।`
      },
      discoveryLocation: {
        en: 'Study Desk, beside victim\'s right arm',
        bn: 'পড়ার টেবিল, লাশের ডান হাতের পাশে'
      },
      relevance: {
        en: 'Did the contamination arrive before or after the drink was poured?',
        bn: 'ঢালার আগে নাকি পরে পানীয় দূষিত হয়?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch', 'suspect-04-beatrice'],
      details: [
        {
          en: 'The desk blotter carries a wet impression of the service bell tape at 22:13.',
          bn: 'ডেস্কের কালি শোষক কাগজে ২২:১৩-এর ঘণ্টার ফিতার ভেজা ছাপ।'
        },
        {
          en: `Only ${owner.given.en}’s ridge marks are clear on the rim.`,
          bn: `কিনারায় কেবল ${owner.given.bn}ের আঙুলের ছাপ স্পষ্ট।`
        }
      ],
      iconKey: 'glass',
      forensicReport: {
        labSummary: {
          en: 'The postmortem and the glass contain the same toxic residue. A spill alone cannot date the collapse.',
          bn: 'ময়নাতদন্ত ও গ্লাসে একই বিষাক্ত পদার্থের চিহ্ন। শুধু ছড়িয়ে পড়া পানীয় থেকে সময় নির্ধারণ করা যায় না।'
        }
      }
    },
    {
      id: 'clue-02-audited-ledger',
      name: {
        en: 'Endowment daybook',
        bn: 'তহবিলের দৈনিক খাতা'
      },
      category: 'Documents',
      description: {
        en: `Six reimbursements share one collection code, V6. ${owner.given.en} underlined their total and marked the page for the morning examiner.`,
        bn: `ছয়টি খরচ ফেরতের কোড V6। ${owner.given.bn} মোট অঙ্কের নিচে দাগ দিয়ে পাতাটি সকালের নিরীক্ষকের জন্য রেখেছেন।`
      },
      discoveryLocation: {
        en: `Open on ${owner.given.en}'s desk under his hands`,
        bn: `${owner.given.bn}ের হাতের নিচে টেবিলের ওপর খোলা`
      },
      relevance: {
        en: 'Who controlled the code when the money went missing?',
        bn: 'টাকা সরার সময় কোডটি কার নিয়ন্ত্রণে ছিল?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch', 'suspect-04-beatrice'],
      isCrucial: true,
      details: [
        {
          en: 'The six transfers total $450,000. Each receipt requires a personal countermark.',
          bn: 'ছয়বারে মোট ৪৫০,০০০ ডলার সরেছে। প্রতি রসিদে ব্যক্তিগত প্রতিচিহ্ন লাগে।'
        },
        {
          en: 'The entry was countersigned at 21:00. Names are kept on a separate library register.',
          bn: '২১:০০-এ দ্বিতীয় স্বাক্ষর হয়। নামের তালিকা আলাদা গ্রন্থাগার রেজিস্টারে।'
        }
      ],
      iconKey: 'book',
      forensicReport: {
        labSummary: {
          en: 'The receiving account repeats across all six leaves. The V6 mark is original on each.',
          bn: 'ছয় পাতাতেই প্রাপকের হিসাব এক। প্রতিটিতে V6-এর আসল ছাপ।'
        }
      }
    },
    {
      id: 'clue-03-stopped-clock',
      name: {
        en: 'Clock and bell tape',
        bn: 'ঘড়ি ও ঘণ্টার ফিতা'
      },
      category: 'Physical',
      description: {
        en: 'The grandfather clock and its chime train stopped at 22:14. A service recorder in the case continued on its own spring.',
        bn: 'ঘড়ি ও ঘণ্টাধ্বনির চাকা ২২:১৪-তে থেমেছে। তার বাক্সের আলাদা স্প্রিং চালিত রেকর্ডার পরে চলেছে।'
      },
      discoveryLocation: {
        en: 'Study west corner',
        bn: 'পড়ার ঘরের পশ্চিম কোণ'
      },
      relevance: {
        en: 'Which part of the reported half-hour call could the corridor actually hear?',
        bn: 'আধঘণ্টার কথিত ডাকে করিডোর থেকে কী শোনা সম্ভব ছিল?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      isCrucial: true,
      details: [
        {
          en: 'The recorder marks a desk call at 22:13 and a cabinet impact one minute later.',
          bn: 'রেকর্ডারে ২২:১৩-তে ডেস্ক থেকে ডাক ও এক মিনিট পর আঘাত ধরা আছে।'
        },
        {
          en: 'The half-hour hammer remained caught behind a loose strip of glass.',
          bn: 'আধঘণ্টার ঘণ্টার হাতুড়ি কাচে আটকে ছিল।'
        }
      ],
      iconKey: 'clock',
      forensicReport: {
        labSummary: {
          en: 'Fresh damage arrests both hands and the chime together. The separate bell tape agrees with the kitchen duplicate.',
          bn: 'নতুন আঘাতে কাঁটা ও ঘণ্টা একসঙ্গে থামে। ঘণ্টার ফিতার তথ্য রান্নাঘরের কপির সঙ্গে মেলে।'
        }
      }
    },
    {
      id: 'clue-04-poisoned-decanter',
      name: {
        en: 'Sideboard decanter B4',
        bn: 'সাইডবোর্ডের B4 বোতল'
      },
      category: 'Physical',
      description: {
        en: 'A paper band around the neck has separated at its seam. Its delivery number is B4.',
        bn: 'বোতলের গলার কাগজের বন্ধনী জোড়ায় ছেঁড়া। সরবরাহ নম্বর B4।'
      },
      discoveryLocation: {
        en: 'Study Liquor Sideboard',
        bn: 'পড়ার ঘরের লিকার সাইডবোর্ড'
      },
      relevance: {
        en: 'At which handover was the band last seen intact?',
        bn: 'শেষ কোন হস্তান্তরে বন্ধনী অক্ষত ছিল?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch', 'suspect-04-beatrice'],
      details: [
        {
          en: 'The sideboard holds two matching bottles. Only B4 has the residue found in the glass.',
          bn: 'দুটি একই রকম বোতলের শুধু B4-এ গ্লাসের মতো অবশিষ্টাংশ।'
        },
        {
          en: 'The kitchen retains a dated strip for each bottle it issues.',
          bn: 'প্রতিটি বোতলের তারিখযুক্ত ফিতা রান্নাঘরে থাকে।'
        },
        {
          en: 'A sealed kitchen sample drawn from B4 just before banding tests clear. A swab beneath the carrier’s fresh countermark on the returned strip matches the residue inside the bottle.',
          bn: 'বন্ধনী দেওয়ার ঠিক আগে B4 থেকে রাখা রান্নাঘরের সিল করা নমুনা পরিষ্কার। ফেরত ফিতায় বাহকের নতুন ছাপের নিচের নমুনা বোতলের অবশিষ্টাংশের সঙ্গে মেলে।'
        }
      ],
      iconKey: 'flask',
      forensicReport: {
        labSummary: {
          en: 'Residue in the bottle matches the glass. The other decanter tests clear.',
          bn: 'বোতল ও গ্লাসের নমুনা মেলে। অন্য বোতলটি পরিষ্কার।'
        }
      }
    },
    {
      id: 'clue-05-window-latch',
      name: {
        en: 'Window catch',
        bn: 'জানালার ছিটকিনি'
      },
      category: 'Forensic Reports',
      description: {
        en: 'The brass catch is closed. Beneath it are two pale arcs with a scrap of green wax between them.',
        bn: 'পিতলের ছিটকিনি বন্ধ। নিচে দুই ফিকে অর্ধবৃত্তের মাঝে সামান্য সবুজ মোম।'
      },
      discoveryLocation: {
        en: 'Study Leaded Bay Window',
        bn: 'পড়ার ঘরের জানালার ফ্রেম'
      },
      relevance: {
        en: 'Which side of the frame carries the matching trace?',
        bn: 'ফ্রেমের কোন দিকে একই চিহ্ন আছে?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice', 'suspect-05-marcus'],
      isCrucial: true,
      details: [
        {
          en: 'Both arcs cut through the polish applied that morning.',
          bn: 'সকালের পালিশের ওপর দুটি দাগ।'
        },
        {
          en: 'The oak door was bolted. No other opening connects the study to the terrace.',
          bn: 'ওক দরজায় খিল ছিল। ছাদে যাওয়ার আর কোনো পথ নেই।'
        }
      ],
      iconKey: 'key',
      forensicReport: {
        labSummary: {
          en: 'The catch moves freely. Green wax is present inside the fresh arcs.',
          bn: 'ছিটকিনি সহজে নড়ে। নতুন বাঁকা দাগের মধ্যে সবুজ মোম আছে।'
        }
      }
    },
    {
      id: 'clue-06-burnt-will',
      name: {
        en: 'Charred codicil',
        bn: 'পোড়া উইলের সংযোজন'
      },
      category: 'Documents',
      description: {
        en: 'An unsigned amendment would have removed the nephew from the trust. Its lower edge is ash.',
        bn: 'স্বাক্ষরহীন সংশোধনীতে ভাইপোকে ট্রাস্ট থেকে বাদ দেওয়ার প্রস্তাব। নিচের অংশ ছাই।'
      },
      discoveryLocation: {
        en: 'Study Marble Fireplace',
        bn: 'পড়ার ঘরের ফায়ারপ্লেস'
      },
      relevance: {
        en: 'Was this a threat for tonight or the remains of an earlier quarrel?',
        bn: 'এটি আজ রাতের হুমকি নাকি আগের ঝগড়ার অবশেষ?'
      },
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        {
          en: 'A 17:00 fire-tending entry records paper thrown in while the nephew was present.',
          bn: '১৭:০০-এর আগুন পরিচর্যার নথিতে ভাইপোর সামনে কাগজ পোড়ানোর উল্লেখ।'
        },
        {
          en: 'The clause carries neither a witness nor a seal.',
          bn: 'ধারাটিতে সাক্ষী বা সিল নেই।'
        }
      ],
      iconKey: 'scroll',
      forensicReport: {
        labSummary: {
          en: 'Soot from a later coal delivery lies over the paper. It predates the evening tray.',
          bn: 'পরে দেওয়া কয়লার কালি কাগজের ওপরে। কাগজটি সন্ধ্যার ট্রের আগের।'
        }
      }
    },
    {
      id: 'clue-07-nylon-thread',
      name: {
        en: 'Thread on the garden sill',
        bn: 'বাগানের কার্নিশের সুতো'
      },
      category: 'Physical',
      description: {
        en: 'Waxed binding thread hangs on a thorn outside the catch. A partial shoe impression ends in wet gravel.',
        bn: 'ছিটকিনির বাইরে কাঁটায় মোমযুক্ত বাঁধাইয়ের সুতো। ভেজা নুড়িতে অসম্পূর্ণ জুতোর ছাপ।'
      },
      discoveryLocation: {
        en: 'Rose Garden bed directly beneath study window',
        bn: 'পড়ার ঘরের জানালার ঠিক নিচের গোলাপ বাগান'
      },
      relevance: {
        en: 'Is the trace consistent with an ordinary walk through the garden?',
        bn: 'সাধারণভাবে বাগানে হাঁটলে কি এমন চিহ্ন হতো?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice', 'suspect-05-marcus'],
      isCrucial: true,
      isHidden: true,
      details: [
        {
          en: 'The thread is green under its outer coating of soot.',
          bn: 'কালির নিচে সুতোর মোম সবুজ।'
        },
        {
          en: 'The incomplete heel cannot give a shoe size. Garden and library stores both stock this thread.',
          bn: 'আংশিক গোড়ালির ছাপ থেকে মাপ বোঝা যায় না। বাগান ও গ্রন্থাগার দুই জায়গাতেই এই সুতো থাকে।'
        }
      ],
      iconKey: 'scissors',
      forensicReport: {
        labSummary: {
          en: 'Wax and fibre at the thorn match the fresh arcs inside the frame.',
          bn: 'কাঁটার মোম ও তন্তু ফ্রেমের ভেতরের নতুন বাঁকা দাগের সঙ্গে মেলে।'
        }
      }
    },
    {
      id: 'clue-08-torn-envelope',
      name: {
        en: 'Torn supplier envelope',
        bn: 'ছেঁড়া সরবরাহ খাম'
      },
      category: 'Documents',
      description: {
        en: 'A conservation supplier’s envelope holds the discarded neck strip from bottle B4. Its transfer tab bears the violet V6 countermark.',
        bn: 'সংরক্ষণ সামগ্রীর একটি খামে B4 বোতলের ফেলে দেওয়া ফিতা। হস্তান্তর অংশে বেগুনি V6 ছাপ।'
      },
      discoveryLocation: {
        en: 'Under-desk wastebasket',
        bn: 'টেবিলের নিচের ময়লার ঝুড়ি'
      },
      relevance: {
        en: 'Which records independently identify the person who broke this seal?',
        bn: 'কোন স্বাধীন নথি থেকে সিল ভাঙা ব্যক্তিকে চেনা যায়?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch', 'suspect-04-beatrice'],
      isHidden: true,
      details: [
        {
          en: 'The supplier serves the clinic, the bindery and the garden.',
          bn: 'সরবরাহকারী চিকিৎসাকক্ষ, বাঁধাইঘর ও বাগানে মাল দেয়।'
        },
        {
          en: 'The end of the strip has the same irregular tear as the band on B4.',
          bn: 'ফিতার শেষের ছেঁড়া দাগ B4-এর বন্ধনীর সঙ্গে মেলে।'
        }
      ],
      iconKey: 'receipt',
      forensicReport: {
        labSummary: {
          en: 'A fresh glass-neck impression crosses the violet mark. The stamp was already on the strip when the band broke.',
          bn: 'বেগুনি ছাপের ওপর বোতলের গলার নতুন দাগ। বন্ধনী ছেঁড়ার আগেই ফিতায় সিল ছিল।'
        }
      }
    },
    {
      id: 'clue-09-pawn-receipt',
      name: {
        en: 'Pawnbroker’s counterfoil',
        bn: 'বন্ধক দোকানের রসিদ'
      },
      category: 'Documents',
      description: {
        en: `The nephew pawned ${owner.given.en}’s ring that afternoon. The shop issued a cash advance against it.`,
        bn: `বিকেলে ভাইপো ${owner.given.bn}ের আংটি বন্ধক দিয়ে অগ্রিম টাকা পেয়েছেন।`
      },
      discoveryLocation: {
        en: `${heir.given.en}'s coat pocket in billiard room`,
        bn: `বিলিয়ার্ড রুমে ঝুলিয়ে রাখা ${heir.given.bn}ের কোটের পকেট`
      },
      relevance: {
        en: 'Which debt could the advance settle?',
        bn: 'অগ্রিম টাকায় কোন ঋণ শোধ করা সম্ভব?'
      },
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        {
          en: 'The 16:15 stamp predates the quarrel.',
          bn: '১৬:১৫-এর ছাপ ঝগড়ার আগের।'
        },
        {
          en: 'The advance covered the instalment due at midnight.',
          bn: 'অগ্রিম টাকা মধ্যরাতের কিস্তির সমান।'
        }
      ],
      iconKey: 'tag',
      forensicReport: {
        labSummary: {
          en: 'The shop copy confirms the payment. It provides no evening alibi.',
          bn: 'দোকানের কপিতে অর্থপ্রদান নিশ্চিত। রাতের অবস্থান সম্পর্কে এতে কিছু নেই।'
        }
      }
    },
    {
      id: 'clue-10-handwriting-sample',
      name: {
        en: 'Archive countermark register',
        bn: 'আর্কাইভের প্রতিচিহ্ন রেজিস্টার'
      },
      category: 'Documents',
      description: {
        en: 'Library cards assign personal seals to staff for the whole audit quarter. The signatures record continuous custody through tonight.',
        bn: 'গ্রন্থাগারের কার্ডে পুরো ত্রৈমাসিকের ব্যক্তিগত সিল বরাদ্দ। স্বাক্ষরে আজ রাত পর্যন্ত অবিচ্ছিন্ন হেফাজতের হিসাব আছে।'
      },
      discoveryLocation: {
        en: 'Library Archive Desk',
        bn: 'লাইব্রেরি আর্কাইভ ডেস্ক'
      },
      relevance: {
        en: 'Which impressions elsewhere in the house belong to this register?',
        bn: 'বাড়ির আর কোন ছাপ এই রেজিস্টারের অন্তর্ভুক্ত?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch', 'suspect-04-beatrice'],
      details: [
        {
          en: `V6 was signed to ${archivist.given.en}, B2 to ${housekeeper.given.en} and F1 to ${physician.family.en}. All three keys and seals were checked back after the alarm.`,
          bn: `V6 ${archivist.given.bn}র, B2 ${housekeeper.given.bn}র, F1 ${physician.family.bn}ের। সতর্কতার পর তিনটি চাবি ও সিল ফেরত মেলে।`
        },
        {
          en: 'Countermarks identify holders. They do not identify what was in a parcel.',
          bn: 'প্রতিচিহ্নে ধারক বোঝায়। প্যাকেটে কী ছিল তা বোঝায় না।'
        }
      ],
      iconKey: 'pen',
      forensicReport: {
        labSummary: {
          en: 'The quarterly cards and the embossed originals have matching signatures.',
          bn: 'ত্রৈমাসিক কার্ডের স্বাক্ষর মূল উঁচু ছাপের নথির সঙ্গে মেলে।'
        }
      }
    },
    {
      id: 'clue-11-tray-handover',
      name: {
        en: 'Kitchen handover sheet',
        bn: 'রান্নাঘরের হস্তান্তর নথি'
      },
      category: 'Witness Statements',
      description: {
        en: `${housekeeper.given.en} recorded B4 sealed at 21:45. A maid witnessed its return band being marked by the one person who carried it from the hatch to ${owner.given.en}.`,
        bn: `${housekeeper.given.bn} ২১:৪৫-এ B4 সিল করা অবস্থায় নথিভুক্ত করেন। এক পরিচারিকা দেখেন, জানালা থেকে ${owner.given.bn}ের কাছে একমাত্র বাহকই ফেরত ফিতায় ছাপ দেন।`
      },
      discoveryLocation: {
        en: 'Kitchen Interrogation',
        bn: 'রান্নাঘরে নেওয়া জবানবন্দি'
      },
      relevance: {
        en: 'Can the carrier be identified from the return strip?',
        bn: 'ফেরত ফিতা থেকে বাহককে চেনা যায় কি?'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        {
          en: 'The maid watched the tray continuously until it entered the study. She saw no second handover.',
          bn: 'পাঠকক্ষে ঢোকা পর্যন্ত পরিচারিকা ট্রেটি দেখেছেন। আর হাতবদল হয়নি।'
        },
        {
          en: 'The same maid logged the crash at 22:14. At 22:30 she heard one voice in the hall and no chime.',
          bn: 'তিনি ২২:১৪-র আঘাতও লিখেছেন। ২২:৩০-এ হলঘরে একটি কণ্ঠ শুনেছেন, ঘণ্টা নয়।'
        }
      ],
      iconKey: 'message',
      forensicReport: {
        labSummary: {
          en: 'The kitchen copy and the service recorder agree to the minute.',
          bn: 'রান্নাঘরের কপি ও সার্ভিস রেকর্ডারের সময় মিনিট পর্যন্ত মেলে।'
        }
      }
    },
    {
      id: 'clue-12-terrace-sighting',
      name: {
        en: 'Terrace sighting',
        bn: 'টেরেসের সাক্ষ্য'
      },
      category: 'Witness Statements',
      description: {
        en: `${dealer.family.en} waited outside after being shown out. At 22:20 a single figure crossed the gravel away from the study window.`,
        bn: `বের করে দেওয়ার পর ${dealer.family.bn} বাইরে অপেক্ষা করছিলেন। ২২:২০-তে জানালা থেকে এক অবয়ব নুড়িপথ পেরোয়।`
      },
      discoveryLocation: {
        en: 'Driveway Interrogation',
        bn: 'ড্রাইভওয়েতে নেওয়া জবানবন্দি'
      },
      relevance: {
        en: 'Which parts of the sighting can the driveway camera check?',
        bn: 'ড্রাইভওয়ের ক্যামেরায় সাক্ষ্যের কতটা যাচাই হয়?'
      },
      relatedSuspectIds: ['suspect-05-marcus'],
      details: [
        {
          en: 'Rain obscured the figure’s face and clothing.',
          bn: 'বৃষ্টিতে মুখ ও পোশাক দেখা যায়নি।'
        },
        {
          en: `A gate image confirms ${dealer.family.en} beside his car at the time of the sighting.`,
          bn: `ফটকের ছবিতে ওই সময়ে ${dealer.family.bn} নিজের গাড়ির পাশে।`
        }
      ],
      iconKey: 'eye',
      forensicReport: {
        labSummary: {
          en: 'The gate camera clock was set with the kitchen clock that afternoon.',
          bn: 'সেদিন বিকেলে ফটক ও রান্নাঘরের ঘড়ি একসঙ্গে মেলানো হয়েছিল।'
        }
      }
    },
    {
      id: 'case-001-pulse-strip',
      name: {
        en: 'Cardiac monitor strip',
        bn: 'হৃদ্‌যন্ত্রের ফিতা'
      },
      category: 'Forensic Reports',
      description: {
        en: `A portable monitor is clipped beneath ${owner.given.en}’s jacket. Its trace ends one minute after a desk bell is heard on its sound channel.`,
        bn: `${owner.given.bn}ের জামার নিচে ছোট মনিটর। শব্দের চ্যানেলে ডেস্কের ঘণ্টা শোনার এক মিনিট পর স্পন্দন থেমেছে।`
      },
      discoveryLocation: {
        en: 'Desk chair, jacket pocket',
        bn: 'ডেস্কের চেয়ার, জামার পকেট'
      },
      relevance: {
        en: 'Which household record can put a time to the final trace?',
        bn: 'ঘরের কোন নথিতে শেষ স্পন্দনের সময় মেলানো যায়?'
      },
      relatedSuspectIds: ['suspect-03-finch'],
      details: [
        {
          en: 'The unit records elapsed time only. Its battery and leads were intact.',
          bn: 'যন্ত্রটি কেবল অতিবাহিত সময় রাখে। ব্যাটারি ও সংযোগ অক্ষত।'
        }
      ],
      forensicReport: {
        labSummary: {
          en: 'The last pulse coincides with the sharp impact on the sound channel. The case clock supplies the absolute minute.',
          bn: 'শেষ স্পন্দন ও তীক্ষ্ণ আঘাতের শব্দ একসঙ্গে। সময়ের মিনিটটি দেয় ঘড়ি।'
        }
      },
      iconKey: 'file'
    },
    {
      id: 'case-001-corridor-bolt',
      name: {
        en: 'Corridor bolt photograph',
        bn: 'করিডোরের খিলের ছবি'
      },
      category: 'Physical',
      description: {
        en: 'The oak door bears a new split beside an old brass bolt.',
        bn: 'ওক দরজার পুরোনো পিতলের খিলের পাশে নতুন ফাটল।'
      },
      discoveryLocation: {
        en: 'Study corridor door',
        bn: 'পাঠকক্ষের করিডোর দরজা'
      },
      relevance: {
        en: 'Does the break belong to the discovery or the earlier interval?',
        bn: 'ফাটলটি সন্ধানের সময়ের নাকি আগের?'
      },
      relatedSuspectIds: ['suspect-04-beatrice'],
      details: [
        {
          en: 'The porter photographed the keeper at 23:05 with the bolt still inside it.',
          bn: '২৩:০৫-এ দারোয়ানের ছবিতে খিল তখনও আটকানো।'
        }
      ],
      forensicReport: {
        labSummary: {
          en: 'The fresh split follows the outward movement described by the rescue party. The keeper was intact until entry.',
          bn: 'নতুন ফাটল উদ্ধারকারীদের বর্ণিত নড়াচড়ার সঙ্গে মেলে। ঢোকার আগে খিলের ধারক অক্ষত ছিল।'
        }
      },
      iconKey: 'file'
    }
  ],
  canonConnections: [
    {
      id: 'conn-01',
      sourceId: 'clue-03-stopped-clock',
      targetId: 'clue-11-tray-handover',
      label: {
        en: 'The missing half-hour chime',
        bn: 'আধঘণ্টার নীরব ঘণ্টা'
      },
      deductionNotes: {
        en: 'The kitchen duplicate and stopped chime narrow what anyone could have heard from the corridor.',
        bn: 'রান্নাঘরের কপি ও থেমে যাওয়া ঘণ্টা থেকে করিডোরে কী শোনা সম্ভব ছিল বোঝা যায়।'
      },
      isContradiction: true,
      bonusPoints: 150
    },
    {
      id: 'conn-02',
      sourceId: 'clue-05-window-latch',
      targetId: 'clue-07-nylon-thread',
      label: {
        en: 'Both sides of the catch',
        bn: 'ছিটকিনির দুই দিক'
      },
      deductionNotes: {
        en: 'The exterior fibre and the interior arcs share a wax deposit. A closed catch alone cannot establish where the last handler stood.',
        bn: 'বাইরের তন্তু ও ভেতরের দাগে একই মোম। শুধু বন্ধ ছিটকিনি দিয়ে শেষ ব্যক্তি কোথায় ছিলেন বোঝা যায় না।'
      },
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'conn-03',
      sourceId: 'clue-08-torn-envelope',
      targetId: 'clue-10-handwriting-sample',
      label: {
        en: 'Countermark in custody',
        bn: 'প্রতিচিহ্নের হেফাজত'
      },
      deductionNotes: {
        en: 'The personal seal register gives the mark on the return strip an owner. Check the same code in the accounts.',
        bn: 'ফেরত ফিতার ছাপ কার, ব্যক্তিগত রেজিস্টারে তা আছে। হিসাবে একই কোড খুঁজুন।'
      },
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'conn-04',
      sourceId: 'clue-02-audited-ledger',
      targetId: 'clue-10-handwriting-sample',
      label: {
        en: 'Quarterly assignments',
        bn: 'ত্রৈমাসিক বরাদ্দ'
      },
      deductionNotes: {
        en: 'The account code refers to a personal seal held for the full audit period.',
        bn: 'হিসাবের কোড পুরো নিরীক্ষাকাল এক ব্যক্তির হেফাজতে থাকা সিলের।'
      },
      isContradiction: false,
      bonusPoints: 125
    },
    {
      id: 'conn-05',
      sourceId: 'clue-04-poisoned-decanter',
      targetId: 'clue-11-tray-handover',
      label: {
        en: 'A break in custody',
        bn: 'হেফাজতের ফাঁক'
      },
      deductionNotes: {
        en: 'The kitchen documented an intact band. The bottle in the study had lost it.',
        bn: 'রান্নাঘরে বন্ধনী অক্ষত ছিল। পাঠকক্ষে তা ছেঁড়া।'
      },
      isContradiction: false,
      bonusPoints: 150
    },
    {
      id: 'case-001-link-6',
      sourceId: 'clue-04-poisoned-decanter',
      targetId: 'clue-08-torn-envelope',
      label: {
        en: 'The B4 return strip',
        bn: 'B4 ফেরত ফিতা'
      },
      deductionNotes: {
        en: 'The tear fits the bottle and the violet impression is genuine. Read the register for its holder.',
        bn: 'ছেঁড়া অংশ বোতলে মেলে, বেগুনি ছাপ আসল। ধারককে জানতে রেজিস্টার দেখুন।'
      },
      isContradiction: false,
      bonusPoints: 60
    },
    {
      id: 'case-001-link-7',
      sourceId: 'clue-03-stopped-clock',
      targetId: 'case-001-pulse-strip',
      label: {
        en: 'The minute of collapse',
        bn: 'নিথর হওয়ার মিনিট'
      },
      deductionNotes: {
        en: 'The service bell anchors the elapsed-time trace to the household clock.',
        bn: 'সার্ভিস ঘণ্টা অতিবাহিত সময়কে ঘরের ঘড়ির সঙ্গে মেলায়।'
      },
      isContradiction: false,
      bonusPoints: 60
    },
    {
      id: 'manor-chime',
      sourceId: 'clue-03-stopped-clock',
      targetId: 'suspect-02-evelyn',
      requiresEvidenceIds: ['clue-11-tray-handover'],
      label: {
        en: 'The corridor statement',
        bn: 'করিডোরের বিবৃতি'
      },
      deductionNotes: {
        en: 'The maid and the recorder agree about the half-hour. Read the claimed timing again.',
        bn: 'পরিচারিকা ও রেকর্ডার আধঘণ্টার বিষয়ে একমত। বয়ানের সময় আবার পড়ুন।'
      },
      isContradiction: true,
      bonusPoints: 60
    },
    {
      id: 'manor-debt',
      sourceId: 'clue-06-burnt-will',
      targetId: 'suspect-01-julian',
      requiresEvidenceIds: ['clue-09-pawn-receipt'],
      label: {
        en: 'An earlier quarrel',
        bn: 'আগের ঝগড়া'
      },
      deductionNotes: {
        en: 'The pawn advance covered the immediate instalment and the unsigned amendment predates the tray.',
        bn: 'বন্ধকে তাৎক্ষণিক কিস্তি মেটে। স্বাক্ষরহীন সংশোধনীটি ট্রের আগের।'
      },
      isContradiction: false,
      bonusPoints: 60
    }
  ],
  timelineEvents: [
    {
      id: 'tl-01',
      timestamp: '17:00',
      timeSortValue: 1020,
      title: {
        en: 'Paper in the hearth',
        bn: 'চুল্লিতে কাগজ'
      },
      description: {
        en: 'The fire-tending book records an argument.',
        bn: 'আগুন পরিচর্যার খাতায় ঝগড়ার উল্লেখ।'
      },
      source: {
        en: 'Charred codicil',
        bn: 'পোড়া উইলের সংযোজন'
      },
      verifiedLocation: {
        en: 'Study Marble Fireplace',
        bn: 'পড়ার ঘরের ফায়ারপ্লেস'
      },
      correctIndex: 0,
      evidenceId: 'clue-06-burnt-will'
    },
    {
      id: 'tl-02',
      timestamp: '21:00',
      timeSortValue: 1260,
      title: {
        en: 'Accounts countersigned',
        bn: 'হিসাবে দ্বিতীয় স্বাক্ষর'
      },
      description: {
        en: 'The examiner’s appointment is entered.',
        bn: 'নিরীক্ষকের সাক্ষাৎ লেখা হয়।'
      },
      source: {
        en: 'Endowment daybook',
        bn: 'তহবিলের দৈনিক খাতা'
      },
      verifiedLocation: {
        en: `Open on ${owner.given.en}'s desk under his hands`,
        bn: `${owner.given.bn}ের হাতের নিচে টেবিলের ওপর খোলা`
      },
      correctIndex: 1,
      evidenceId: 'clue-02-audited-ledger'
    },
    {
      id: 'tl-03',
      timestamp: '21:15',
      timeSortValue: 1275,
      title: {
        en: 'Visitor leaves the house',
        bn: 'অতিথি বাড়ি ছাড়েন'
      },
      description: {
        en: 'The driveway still records a waiting car later.',
        bn: 'পরে ছবিতে অপেক্ষমাণ গাড়ি দেখা যায়।'
      },
      source: {
        en: 'Terrace sighting',
        bn: 'টেরেসের সাক্ষ্য'
      },
      verifiedLocation: {
        en: 'Driveway Interrogation',
        bn: 'ড্রাইভওয়েতে নেওয়া জবানবন্দি'
      },
      correctIndex: 2,
      evidenceId: 'clue-12-terrace-sighting'
    },
    {
      id: 'tl-04',
      timestamp: '21:45',
      timeSortValue: 1305,
      title: {
        en: 'Bottle issued',
        bn: 'বোতল দেওয়া হয়'
      },
      description: {
        en: 'A maid watches the evening tray.',
        bn: 'পরিচারিকা সন্ধ্যার ট্রে দেখেন।'
      },
      source: {
        en: 'Kitchen handover sheet',
        bn: 'রান্নাঘরের হস্তান্তর নথি'
      },
      verifiedLocation: {
        en: 'Kitchen Interrogation',
        bn: 'রান্নাঘরে নেওয়া জবানবন্দি'
      },
      correctIndex: 3,
      evidenceId: 'clue-11-tray-handover'
    },
    {
      id: 'tl-05',
      timestamp: '22:13',
      timeSortValue: 1333,
      title: {
        en: 'Desk call',
        bn: 'ডেস্কের ডাক'
      },
      description: {
        en: 'The blotter takes a wet impression.',
        bn: 'কালি শোষকে ভেজা ছাপ পড়ে।'
      },
      source: {
        en: 'Overturned brandy glass',
        bn: 'উল্টানো ব্র্যান্ডির গ্লাস'
      },
      verifiedLocation: {
        en: 'Study Desk, beside victim\'s right arm',
        bn: 'পড়ার টেবিল, লাশের ডান হাতের পাশে'
      },
      correctIndex: 4,
      evidenceId: 'clue-01-brandy-snifter'
    },
    {
      id: 'tl-06',
      timestamp: '22:14',
      timeSortValue: 1334,
      title: {
        en: 'Cabinet impact',
        bn: 'বাক্সে আঘাত'
      },
      description: {
        en: 'The service recorder registers a shock.',
        bn: 'সার্ভিস রেকর্ডারে আঘাত ধরা পড়ে।'
      },
      source: {
        en: 'Clock and bell tape',
        bn: 'ঘড়ি ও ঘণ্টার ফিতা'
      },
      verifiedLocation: {
        en: 'Study west corner',
        bn: 'পড়ার ঘরের পশ্চিম কোণ'
      },
      correctIndex: 5,
      evidenceId: 'clue-03-stopped-clock'
    },
    {
      id: 'tl-07',
      timestamp: '22:20',
      timeSortValue: 1340,
      title: {
        en: 'Figure on gravel',
        bn: 'নুড়িতে অবয়ব'
      },
      description: {
        en: 'The gate still confirms the witness position.',
        bn: 'ফটকের ছবিতে সাক্ষীর অবস্থান নিশ্চিত।'
      },
      source: {
        en: 'Terrace sighting',
        bn: 'টেরেসের সাক্ষ্য'
      },
      verifiedLocation: {
        en: 'Driveway Interrogation',
        bn: 'ড্রাইভওয়েতে নেওয়া জবানবন্দি'
      },
      correctIndex: 6,
      evidenceId: 'clue-12-terrace-sighting'
    },
    {
      id: 'tl-08',
      timestamp: '22:30',
      timeSortValue: 1350,
      title: {
        en: 'Call in the corridor',
        bn: 'করিডোরে ডাক'
      },
      description: {
        en: 'A maid hears a voice in the hall.',
        bn: 'পরিচারিকা হলে একটি কণ্ঠ শোনেন।'
      },
      source: {
        en: 'Kitchen handover sheet',
        bn: 'রান্নাঘরের হস্তান্তর নথি'
      },
      verifiedLocation: {
        en: 'Kitchen Interrogation',
        bn: 'রান্নাঘরে নেওয়া জবানবন্দি'
      },
      correctIndex: 7,
      evidenceId: 'clue-11-tray-handover'
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: {
        en: 'Surface marks',
        bn: 'পৃষ্ঠের দাগ'
      },
      hintText: {
        en: 'Inspect the glass, paper and hardware separately. Listen for what each witness used as a clock.',
        bn: 'কাচ, কাগজ ও যন্ত্রাংশ আলাদা দেখুন। কে সময় বুঝতে কী ব্যবহার করেছে শুনুন।'
      }
    },
    {
      level: 2,
      cost: 100,
      title: {
        en: 'A divided record',
        bn: 'দুই জায়গার নথি'
      },
      hintText: {
        en: 'The kitchen recorded a handover. Libraries keep samples of the marks their staff use.',
        bn: 'রান্নাঘরে হস্তান্তরের নথি আছে। গ্রন্থাগারে কর্মীদের ব্যবহৃত ছাপের নমুনা থাকে।'
      }
    },
    {
      level: 3,
      cost: 200,
      title: {
        en: 'Independent checks',
        bn: 'স্বাধীন যাচাই'
      },
      hintText: {
        en: 'Test the half-hour against both recorders. Compare the return strip with a seal sample, then look for its number elsewhere.',
        bn: 'দুই রেকর্ডারে আধঘণ্টা যাচাই করুন। ফেরত ফিতা সিলের নমুনার সঙ্গে মিলিয়ে অন্যত্র তার নম্বর খুঁজুন।'
      }
    }
  ],
  solution: {
    culpritId: 'suspect-02-evelyn',
    culpritName: archivist.name,
    motiveDescription: {
      en: 'Suppress an audit of diverted funds',
      bn: 'সরানো অর্থের নিরীক্ষা চাপা দেওয়া'
    },
    methodDescription: {
      en: 'Contaminated bottle and a catch closed from the garden',
      bn: 'দূষিত বোতল ও বাগানের দিক থেকে বন্ধ ছিটকিনি'
    },
    approximateTime: {
      en: 'Around 22:14',
      bn: '২২:১৪ নাগাদ'
    },
    crucialEvidenceIds: [
      'clue-02-audited-ledger',
      'clue-08-torn-envelope',
      'clue-10-handwriting-sample',
      'clue-04-poisoned-decanter',
      'clue-03-stopped-clock',
      'clue-11-tray-handover',
      'clue-01-brandy-snifter',
      'case-001-pulse-strip',
      'clue-05-window-latch',
      'clue-07-nylon-thread'
    ],
    falseAlibiSuspectId: 'suspect-02-evelyn',
    fullCaseDebriefing: {
      en: `${archivist.name.en} controlled V6 throughout the six transfers. ${owner.given.en}’s morning audit threatened to expose her. The same personal seal marks the torn B4 band. The kitchen witness followed its sole carrier from the sealed handover to the study. The kitchen control was clean. B4, the glass and the marked return strip share the trace.\n\n${owner.given.en} made his last desk call at 22:13. The monitor records his last pulse one minute later, at the impact that stopped the chime. ${archivist.given.en} stayed inside, bolted the door and left through the garden window. Matching binding wax on the catch and the thorn accounts for the closed window. Her half-hour chime was impossible and the kitchen heard only the voice outside. ${heir.given.en}’s pawn advance and ${dealer.family.en}’s waiting car explain their separate evasions.`,
      bn: `ছয়টি লেনদেনের সময় V6 ${archivist.name.bn}ের হেফাজতে ছিল। ${owner.given.bn}ের সকালের নিরীক্ষায় তা ধরা পড়ত। ছেঁড়া B4 ফিতাতেও তাঁর ব্যক্তিগত সিল। পরিচারিকা সিল করা হস্তান্তর থেকে পাঠকক্ষ পর্যন্ত একমাত্র বাহককে দেখেছেন। রান্নাঘরের নমুনা পরিষ্কার। B4, গ্লাস ও প্রতিচিহ্নযুক্ত ফেরত ফিতায় একই অবশিষ্টাংশ।\n\n২২:১৩-তে ${owner.given.bn}ের শেষ ডাক। এক মিনিট পর মনিটরে শেষ স্পন্দন, একই আঘাতে ঘণ্টা থেমে যায়। ভেতরে থাকা ${archivist.given.bn} দরজায় খিল দিয়ে বাগানের জানালা দিয়ে বের হন। ছিটকিনি ও কাঁটার মোম তার প্রমাণ। তাঁর কথিত আধঘণ্টার ঘণ্টা বাজেনি, রান্নাঘরে শুধু বাইরের কণ্ঠ শোনা যায়। ${heir.given.bn}ের বন্ধক ও ${dealer.family.bn}ের অপেক্ষমাণ গাড়ি তাঁদের গোপন আচরণের ব্যাখ্যা দেয়।`
    },
    options: {
      motives: [
        {
          id: 'm-gambling',
          label: {
            en: 'Settle a gambling instalment',
            bn: 'জুয়ার কিস্তি মেটানো'
          }
        },
        {
          id: 'm-embezzle',
          label: {
            en: 'Suppress an audit of diverted funds',
            bn: 'সরানো অর্থের নিরীক্ষা চাপা দেওয়া'
          }
        },
        {
          id: 'm-codex',
          label: {
            en: 'Secure a promised manuscript sale',
            bn: 'পুঁথির প্রতিশ্রুত বিক্রি নিশ্চিত করা'
          }
        },
        {
          id: 'm-silence',
          label: {
            en: 'Hide a disputed prescription',
            bn: 'বিতর্কিত ব্যবস্থাপত্র লুকানো'
          }
        }
      ],
      methods: [
        {
          id: 'met-decanter-thread',
          label: {
            en: 'Contaminated bottle and a catch closed from the garden',
            bn: 'দূষিত বোতল ও বাগানের দিক থেকে বন্ধ ছিটকিনি'
          }
        },
        {
          id: 'met-hypodermic',
          label: {
            en: 'Contaminated glass already on the desk',
            bn: 'ডেস্কে আগে থেকে দূষিত গ্লাস'
          }
        },
        {
          id: 'met-cigar',
          label: {
            en: 'A substitution from the clinic after the tray arrived',
            bn: 'ট্রে পৌঁছানোর পর চিকিৎসাকক্ষের বোতল বদল'
          }
        },
        {
          id: 'met-bludgeon',
          label: {
            en: 'A later assault after the door was forced',
            bn: 'দরজা ভাঙার পর আঘাত'
          }
        }
      ],
      times: [
        {
          id: 't-2115',
          label: {
            en: '21:00–21:30',
            bn: '২১:০০–২১:৩০'
          }
        },
        {
          id: 't-2214',
          label: {
            en: 'Around 22:14',
            bn: '২২:১৪ নাগাদ'
          }
        },
        {
          id: 't-2230',
          label: {
            en: 'Around 22:30',
            bn: '২২:৩০ নাগাদ'
          }
        },
        {
          id: 't-2300',
          label: {
            en: 'After 23:00',
            bn: '২৩:০০-র পর'
          }
        }
      ]
    },
    motiveId: 'm-embezzle',
    methodId: 'met-decanter-thread',
    timeId: 't-2214'
  },
  site: {
    en: `${owner.family.en} Manor`,
    bn: `${owner.family.bn} বাড়ি`
  },
  deductions: [
    {
      id: 'inquiry-1',
      question: {
        en: 'Whose account mark travelled with the bottle?',
        bn: 'কার হিসাবের ছাপ বোতলের সঙ্গে গিয়েছিল?'
      },
      connectionId: 'conn-03',
      evidenceIds: [
        'clue-02-audited-ledger',
        'clue-08-torn-envelope',
        'clue-10-handwriting-sample',
        'clue-04-poisoned-decanter'
      ],
      alternativeConnectionIds: ['conn-04', 'case-001-link-6']
    },
    {
      id: 'inquiry-2',
      question: {
        en: 'Could the corridor account be timed as claimed?',
        bn: 'করিডোরের বয়ানের সময় কি মেলে?'
      },
      connectionId: 'conn-01',
      evidenceIds: ['clue-03-stopped-clock', 'clue-11-tray-handover', 'clue-01-brandy-snifter', 'case-001-pulse-strip'],
      alternativeConnectionIds: ['case-001-link-7']
    },
    {
      id: 'inquiry-3',
      question: {
        en: 'How was the room closed at the garden side?',
        bn: 'বাগানের দিক থেকে ঘরটি কীভাবে বন্ধ ছিল?'
      },
      connectionId: 'conn-02',
      evidenceIds: ['clue-05-window-latch', 'clue-07-nylon-thread']
    }
  ]
};
