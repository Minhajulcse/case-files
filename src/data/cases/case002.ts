import type { CaseData } from '../../types/game';
import { safehouseCast } from '../characters';

const { witness, defendant, officer, counsel, sister, enforcer, superintendent } = safehouseCast;

export const case002: CaseData = {
  id: 'case-002',
  caseNumber: 'CASE 002',
  title: {
    en: 'The Missing Witness',
    bn: 'নিখোঁজ সাক্ষী'
  },
  subtitle: {
    en: 'A witness vanishes before dawn. The fourth-floor door tells only part of the story.',
    bn: 'ভোরের আগে সাক্ষী নিখোঁজ। চারতলার দরজা গল্পের একাংশই বলে।'
  },
  badge: 'ABDUCTION',
  difficulty: 'Hard',
  estimatedTime: '30-40 mins',
  victimOrSubject: {
    en: `${witness.name.en} (Age 31, Chief Forensic Accountant & Crown Whistleblower)`,
    bn: `${witness.name.bn} (বয়স ৩১, প্রধান ফরেনসিক হিসাবরক্ষক ও সরকারি হুইসেলব্লোয়ার)`
  },
  incidentDate: {
    en: 'November 03, 2024 — 01:15 Hours',
    bn: '৩ নভেম্বর, ২০২৪ — রাত ০১:১৫ টা'
  },
  location: {
    en: 'Federal Safehouse 404, St. Jude Apartments, East Docks',
    bn: 'ফেডারেল সেফহাউস ৪০৪, সেন্ট জুড অ্যাপার্টমেন্টস, ইস্ট ডকস'
  },
  synopsis: {
    en: `${witness.name.en} is missing from Room 404 on the eve of the ${defendant.name.en} trial. A guard lies in the hall. Inside the room a lamp has fallen across a dark stain.`,
    bn: `${defendant.name.bn}ের বিচারের আগের রাতে ৪০৪ থেকে ${witness.name.bn} নিখোঁজ। করিডোরে এক প্রহরী পড়ে আছেন। ঘরে গাঢ় দাগের ওপর বাতি উল্টে আছে।`
  },
  briefing: {
    chiefMemo: {
      en: 'Establish whether the address was sold, and who was responsible for that disclosure. Account separately for how and when the witness left. A breached door dates only one event.',
      bn: 'ঠিকানা বিক্রি হয়েছিল কি না এবং সেই ফাঁসের জন্য কে দায়ী, খুঁজুন। সাক্ষী কখন ও কীভাবে বেরোলেন, আলাদাভাবে যাচাই করুন। দরজা ভাঙা কেবল একটি ঘটনা।'
    },
    initialStatus: {
      en: 'Safehouse cordoned off by State Marshals. Syndicate trial scheduled for 10:00 AM.',
      bn: 'সেফহাউস ঘিরে রেখেছে স্টেট মার্শালরা। সকাল ১০টায় আদালতের বিচার শুরু হওয়ার কথা।'
    },
    keyObjectives: [
      {
        en: 'Reconcile the duty roster with the message traffic.',
        bn: 'ডিউটির তালিকা ও বার্তার সময় মেলান।'
      },
      {
        en: 'Follow the physical trail beyond the apartment.',
        bn: 'ফ্ল্যাটের বাইরেও ভৌত চিহ্ন অনুসরণ করুন।'
      },
      {
        en: 'Date the exit independently of the alarm.',
        bn: 'সতর্কতার সময় থেকে আলাদা করে বেরোনোর সময় নির্ণয় করুন।'
      }
    ]
  },
  crimeScene: {
    roomTitle: {
      en: 'Safehouse 404',
      bn: 'সেফহাউস ৪০৪'
    },
    roomDescription: {
      en: 'The fourth-floor flat overlooks the railway cutting. A service passage connects the basement to the old platform.',
      bn: 'চারতলার ফ্ল্যাট থেকে রেলপথ দেখা যায়। বেসমেন্ট থেকে পুরোনো প্ল্যাটফর্মে একটি পরিষেবা পথ রয়েছে।'
    },
    sceneTheme: 'motel_safehouse',
    hotspots: [
      {
        id: 'hs-02-door',
        name: {
          en: 'Door and strike plate',
          bn: 'দরজা ও ধাতব পাত'
        },
        x: 13,
        y: 35.5,
        description: {
          en: 'A bright splinter interrupts the dark frame.',
          bn: 'গাঢ় ফ্রেমে উজ্জ্বল ভাঙা অংশ।'
        },
        revealsEvidenceId: 'clue-02-forced-door',
        discoveryNote: {
          en: 'A clipped duty sheet is folded behind the plate.',
          bn: 'পাতের পেছনে ডিউটির তালিকা ভাঁজ করা।'
        },
        iconType: 'magnifier',
        plate: 'apartment',
        shape: {
          type: 'rect',
          width: 16.4,
          height: 51.6
        }
      },
      {
        id: 'hs-02-rug',
        name: {
          en: 'Stained rug',
          bn: 'দাগ লাগা গালিচা'
        },
        x: 45,
        y: 77,
        description: {
          en: 'Dark pigment breaks across the woven pattern.',
          bn: 'বোনা নকশার ওপর গাঢ় রঙের ছোপ।'
        },
        revealsEvidenceId: 'clue-02-staged-blood',
        discoveryNote: {
          en: 'Dry red pigment lies beneath a flake of door paint.',
          bn: 'দরজার রঙের কণার নিচে শুকনো লাল রং।'
        },
        iconType: 'flask',
        plate: 'apartment',
        shape: {
          type: 'polygon',
          points: [[40, 74], [46, 72], [50, 74], [50, 78], [46, 81], [40, 80]]
        }
      },
      {
        id: 'hs-02-radiator',
        name: {
          en: 'Steam radiator',
          bn: 'রেডিয়েটর'
        },
        x: 76,
        y: 50,
        description: {
          en: 'Something flat is caught behind the last fin.',
          bn: 'শেষ খাঁজের পেছনে চ্যাপ্টা কিছু আটকানো।'
        },
        revealsEvidenceId: 'clue-02-burner-phone',
        discoveryNote: {
          en: 'The receiver contains a cached dispatch receipt.',
          bn: 'রিসিভারে ডিসপ্যাচ রসিদের অনুলিপি আছে।'
        },
        iconType: 'magnifier',
        plate: 'apartment',
        shape: {
          type: 'rect',
          width: 14,
          height: 23
        }
      },
      {
        id: 'hs-02-vent',
        name: {
          en: 'Kitchenette hatch',
          bn: 'রান্নাঘরের ফাঁক'
        },
        x: 90,
        y: 34,
        description: {
          en: 'The mesh cover hangs at a slight angle.',
          bn: 'জালির ঢাকনা সামান্য কাত।'
        },
        revealsEvidenceId: 'clue-02-vent-grate',
        discoveryNote: {
          en: 'The hinge-side dust has been brushed toward the stair.',
          bn: 'কবজার পাশের ধুলো সিঁড়ির দিকে সরেছে।'
        },
        iconType: 'key',
        plate: 'apartment',
        shape: {
          type: 'rect',
          width: 12,
          height: 21
        }
      },
      {
        id: 'hs-02-desk',
        name: {
          en: 'Folding desk',
          bn: 'ভাঁজ টেবিল'
        },
        x: 37,
        y: 45,
        description: {
          en: 'One corner of the timetable sits higher than the rest.',
          bn: 'সময়সূচির এক কোণ একটু উঁচু।'
        },
        revealsEvidenceId: 'clue-02-torn-ticket',
        discoveryNote: {
          en: 'The paper underneath is the passenger half of a rail voucher.',
          bn: 'নিচের কাগজটি রেল ভাউচারের যাত্রী অংশ।'
        },
        iconType: 'document',
        plate: 'apartment',
        shape: {
          type: 'polygon',
          points: [[31, 40], [45, 40], [48, 51], [28, 52]]
        }
      },
      {
        id: 'hs-02-coat',
        name: {
          en: 'Coat pegs',
          bn: 'কাপড় রাখার খুঁটি'
        },
        x: 24.8,
        y: 24,
        description: {
          en: 'A scarf is looped over an empty peg by the door.',
          bn: 'দরজার পাশে খালি খুঁটিতে স্কার্ফ।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-02-sister-scarf',
        discoveryNote: {
          en: 'There is transfer colour in the hem, beside two stitched initials.',
          bn: 'পাড়ের দুই আদ্যক্ষরের পাশে ছাপার রং।'
        },
        iconType: 'magnifier',
        plate: 'apartment',
        shape: {
          type: 'polygon',
          points: [[21.6, 16.9], [29.3, 16.9], [29.3, 19.2], [25.6, 19.2], [27.3, 27.5],
            [25.6, 29.2], [25.2, 25], [25.2, 32.7], [23.5, 33], [22.6, 27.4], [23.5, 19.2], [21.6, 19.2]]
        }
      },
      {
        id: 'hs-02-boiler',
        name: {
          en: 'Soot on the passage floor',
          bn: 'পথের মেঝেতে কালি'
        },
        x: 46,
        y: 79,
        description: {
          en: 'Two trails cross the fresh sweep marks.',
          bn: 'নতুন ঝাড়ুর দাগের ওপর দুই সারি ছাপ।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-02-tunnel-footprints',
        discoveryNote: {
          en: 'One repaired heel appears again at the platform gate.',
          bn: 'তালি দেওয়া এক গোড়ালির ছাপ প্ল্যাটফর্মের ফটকেও আছে।'
        },
        iconType: 'footprint',
        plate: 'conduit',
        shape: {
          type: 'polygon',
          points: [[28, 89], [30, 81], [54, 70], [62, 64], [67, 67], [56, 76], [36, 90]]
        }
      },
      {
        id: 'hs-case-002-lamp-shade',
        plate: 'apartment',
        x: 56,
        y: 77,
        shape: {
          type: 'polygon',
          points: [[49, 67], [52, 66], [57, 74], [59, 75], [61, 83], [55, 82], [54, 78]]
        },
        name: {
          en: 'Fallen floor lamp',
          bn: 'পড়ে থাকা বাতি'
        },
        description: {
          en: 'The floor lamp lies on its side. The shaded side of its rim bears a rectangular transfer mark.',
          bn: 'বাতিটি পাশে কাত। কিনারার ছায়ার দিকে আয়তাকার রঙের ছাপ।'
        },
        discoveryNote: {
          en: 'The underside preserves an impression that the rug no longer shows.',
          bn: 'ঢাকনার নিচে এমন ছাপ আছে যা গালিচায় আর নেই।'
        },
        revealsEvidenceId: 'case-002-lamp-shade',
        iconType: 'magnifier'
      },
      {
        id: 'hs-02-platform-gate',
        plate: 'conduit',
        x: 51,
        y: 38,
        shape: {
          type: 'polygon',
          points: [[37.5, 53.8], [37.5, 28.4], [41, 23], [46, 19.5], [50, 19], [55, 22.5], [58.5, 28.4], [58.5, 53.8]]
        },
        name: { en: 'Platform gate', bn: 'প্ল্যাটফর্মের ফটক' },
        description: {
          en: 'A narrow paper strip hangs beneath the brass gate recorder. Two pens share the drum.',
          bn: 'ফটকের পিতলের রেকর্ডার থেকে সরু কাগজ ঝুলছে। একই ড্রামে দুটি কলম।'
        },
        discoveryNote: {
          en: 'The final mark before midnight lies on the lower track. The calibration card identifies which way the gate swung.',
          bn: 'মধ্যরাতের আগের শেষ চিহ্নটি নিচের সারিতে। পাশের পরীক্ষার কার্ডে লেখা কোন সারি কোন দিক বোঝায়।'
        },
        revealsEvidenceId: 'case-002-gate-strip',
        iconType: 'document'
      },
      {
        id: 'hs-02-platform-notice',
        plate: 'conduit',
        x: 78.5,
        y: 24.5,
        shape: { type: 'polygon', points: [[73.5, 23], [83.5, 17.5], [83.5, 28], [75.5, 33], [73.5, 30.5]] },
        name: { en: 'Platform notice', bn: 'প্ল্যাটফর্মের বিজ্ঞপ্তি' },
        description: {
          en: 'A porter has tucked a pink parcel counterfoil under the platform sign.',
          bn: 'প্ল্যাটফর্মের ফলকের নিচে গোলাপি রঙের একটি পার্সেল রসিদ গোঁজা।'
        },
        discoveryNote: {
          en: 'The porter stamped the collection just after the evening delivery. The space for the collector’s name is blank.',
          bn: 'সন্ধ্যার সরবরাহের কিছু পরেই মাল তোলার সিল পড়েছে। সংগ্রহকারীর নামের ঘর খালি।'
        },
        revealsEvidenceId: 'case-002-parcel-counterfoil',
        iconType: 'document'
      }
    ],
    plates: ['apartment', 'conduit']
  },
  otherCharacters: [witness, defendant],
  suspects: [
    {
      ...officer,
      alias: {
        en: 'The duty officer',
        bn: 'ডিউটি অফিসার'
      },
      role: {
        en: 'Assigned Protection Detail Leader',
        bn: 'নিরাপত্তা দলের প্রধান'
      },
      age: 41,
      occupation: {
        en: 'State Police Detective Sergeant',
        bn: 'পুলিশ গোয়েন্দা সার্জেন্ট'
      },
      relationshipToVictim: {
        en: 'Assigned police officer guarding safehouse',
        bn: 'সেফহাউস পাহারায় নিয়োজিত পুলিশ কর্মকর্তা'
      },
      motive: {
        en: 'A betting creditor had called the station. The duty leader controlled protected traffic alongside a relief desk.',
        bn: 'বাজির পাওনাদার থানায় ফোন করেছিল। ডিউটি প্রধান ও বিকল্প ডেস্ক সুরক্ষিত বার্তা নিয়ন্ত্রণ করত।'
      },
      alibi: {
        en: `I saw ${witness.given.en} inside just before I went down at 00:45. The door was still undamaged then.`,
        bn: `০০:৪৫-এ পড়ে যাওয়ার ঠিক আগে ${witness.given.bn}কে ঘরে দেখি। তখনও দরজা অক্ষত।`
      },
      personality: {
        en: 'Defensive, rubbing the back of his neck, aggressive posture, evasive eyes.',
        bn: 'উদ্ধত কিন্তু চোখে ভীতি, ঘাড় চুলকাচ্ছে, বারবার নজর এড়িয়ে যাচ্ছে।'
      },
      secrets: {
        en: 'The K31 settlement cleared a personal betting debt.',
        bn: 'K31 নিষ্পত্তিতে তাঁর ব্যক্তিগত বাজির ঋণ মেটে।'
      },
      avatarSeed: 'Navarro',
      avatarColor: '#dc2626',
      dialogueTree: [
        {
          id: 'dlg-n-1',
          prompt: {
            en: 'What fixed the time of the ambush?',
            bn: 'হামলার সময় কীভাবে বুঝলেন?'
          },
          response: {
            en: 'The quarter-hour recall sounded. I remember the door shut behind me. I woke when backup arrived.',
            bn: 'পনেরো মিনিটের সংকেত শুনি। পেছনে দরজা বন্ধ ছিল। সাহায্য এলে জ্ঞান ফেরে।'
          },
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-n-2',
          prompt: {
            en: 'Who kept the dispatch seals?',
            bn: 'ডিসপ্যাচ সিল কার কাছে ছিল?'
          },
          response: {
            en: 'The supervisor checked twice. We each retained our own. A receiver in the room could hear releases.',
            bn: 'তদারককারী দুবার দেখেন। সবার সিল নিজের কাছে ছিল। ঘরের রিসিভারে বার্তা শোনা যেত।'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-n-3',
          prompt: {
            en: 'Was any debt paid that evening?',
            bn: 'সন্ধ্যায় কোনো ঋণ শোধ হয়েছিল?'
          },
          response: {
            en: 'Internal affairs already obtained the clearing slip. I said the money was a family loan.',
            bn: 'অভ্যন্তরীণ তদন্ত রসিদ নিয়েছে। আমি বলেছি সেটা পরিবারের ঋণ।'
          },
          reactionMood: 'nervous',
          revealsClueId: 'clue-02-navarro-deposit',
          conditionClueId: 'clue-02-burner-phone'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-navarro-deposit',
          reactionText: {
            en: 'The bank redacted the beneficiary, so you cannot read a name there.',
            bn: 'ব্যাংক প্রাপকের নাম ঢেকেছে, সেখানে নাম পড়তে পারবেন না।'
          },
          stressIncrease: 45,
          exposesLie: true,
          requiresEvidenceIds: ['clue-02-burner-phone', 'clue-02-forced-door']
        },
        {
          evidenceId: 'clue-02-burner-phone',
          reactionText: {
            en: 'Those sets store other people’s traffic as well as ours.',
            bn: 'ওই যন্ত্রে আমাদের পাশাপাশি অন্যের বার্তাও জমে।'
          },
          stressIncrease: 50,
          exposesLie: false
        }
      ]
    },
    {
      ...counsel,
      alias: {
        en: 'The Syndicate Consigliere',
        bn: 'সিন্ডিকেটের কৌশলী আইনজীবী'
      },
      role: {
        en: `Chief Defense Counsel for ${defendant.name.en}`,
        bn: `${defendant.name.bn}ের প্রধান আইনজীবী`
      },
      age: 55,
      occupation: {
        en: 'High-Profile Criminal Defense Attorney',
        bn: 'প্রভাবশালী ফৌজদারি আইনজীবী'
      },
      relationshipToVictim: {
        en: `Adversary in court; cross-examined ${witness.given.en} in depositions`,
        bn: `আদালতে প্রতিপক্ষের আইনজীবী। জবানবন্দির সময় ${witness.given.bn}কে জেরা করেছিলেন।`
      },
      motive: {
        en: 'His client stood to lose the trial and his retainer with it. He could authorise the courier fund.',
        bn: 'মক্কেল হারলে তাঁর পারিশ্রমিকও যাবে। কুরিয়ার তহবিল অনুমোদনের ক্ষমতা ছিল।'
      },
      alibi: {
        en: 'My associates saw me drafting motions. They cannot say what I signed before they arrived.',
        bn: 'সহকারীরা আমাকে আবেদন লিখতে দেখেছে। তারা আসার আগে কী স্বাক্ষর করেছি বলতে পারবে না।'
      },
      personality: {
        en: 'Suave, condescending, immaculate bespoke suit, sneering smile.',
        bn: 'মার্জিত, দামি স্যুট পরা, মুখে বাঁকা বিদ্রূপের হাসি।'
      },
      secrets: {
        en: 'His office authorised the courier float that financed the K31 transfer.',
        bn: 'তাঁর অফিসের কুরিয়ার অগ্রিম থেকে K31-এর টাকা যায়।'
      },
      avatarSeed: 'Sterling',
      avatarColor: '#475569',
      dialogueTree: [
        {
          id: 'dlg-s-1',
          prompt: {
            en: 'Who can verify your evening?',
            bn: 'আপনার সন্ধ্যার অবস্থান কে জানেন?'
          },
          response: {
            en: 'The filing clerk stamped a motion at midnight with me present.',
            bn: 'মধ্যরাতে কর্মী আমার সামনে আবেদনে সিল দেন।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-s-2',
          prompt: {
            en: 'What did the courier fund cover?',
            bn: 'কুরিয়ার তহবিলে কী খরচ চলত?'
          },
          response: {
            en: 'I approved a weekly float. The individual remittances came back to me after settlement.',
            bn: 'আমি সাপ্তাহিক অগ্রিম অনুমোদন করি। লেনদেন মেটার পর আলাদা রসিদ পাই।'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-burner-phone',
          reactionText: {
            en: 'I could release money from the office. I had no duty seal for the fourth floor.',
            bn: 'অফিস থেকে অর্থ অনুমোদন করতে পারতাম। চারতলার ডিউটি সিল আমার ছিল না।'
          },
          stressIncrease: 10,
          exposesLie: false
        }
      ]
    },
    {
      ...sister,
      alias: {
        en: 'The Loyal Sister',
        bn: 'বিশ্বস্ত বোন'
      },
      role: {
        en: `${witness.name.en}'s Half-Sister`,
        bn: `${witness.given.bn}ের সৎ বোন`
      },
      age: 27,
      occupation: {
        en: 'Graphic Designer & Freelance Pilot',
        bn: 'গ্রাফিক ডিজাইনার ও পাইলট'
      },
      relationshipToVictim: {
        en: 'Close sibling and confidante',
        bn: 'অত্যন্ত ঘনিষ্ঠ সহোদরা'
      },
      motive: {
        en: `${witness.given.en} had asked for clothes and wanted her evidence delivered without a police escort.`,
        bn: `${witness.given.bn} পোশাক চেয়েছিলেন এবং পুলিশ পাহারা ছাড়া প্রমাণ পৌঁছাতে চেয়েছিলেন।`
      },
      alibi: {
        en: 'No visit appears under my name. My sister was frightened that people were reading the visitor book.',
        bn: 'আমার নামে সাক্ষাতের নথি নেই। দর্শনার্থীর খাতা অন্যরা পড়ছে বলে বোনের ভয় ছিল।'
      },
      personality: {
        en: `Guarded, anxious, highly protective of ${witness.given.en}, sharp-witted.`,
        bn: `উদ্বিগ্ন, ${witness.given.bn}ের প্রতি নিবেদিতপ্রাণ, তীব্র উপস্থিত বুদ্ধি সম্পন্ন।`
      },
      secrets: {
        en: 'She delivered clothes and pigment under a courier booking.',
        bn: 'কুরিয়ার বুকিংয়ে তিনি পোশাক ও রং দেন।'
      },
      avatarSeed: 'Maya',
      avatarColor: '#ec4899',
      dialogueTree: [
        {
          id: 'dlg-ml-1',
          prompt: {
            en: 'Did you sign in to see your sister?',
            bn: 'বোনকে দেখতে গিয়ে নাম লিখেছিলেন?'
          },
          response: {
            en: 'Nobody asked the courier to sign a family name.',
            bn: 'কুরিয়ারকে পরিবারের নাম লিখতে বলা হয়নি।'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-ml-2',
          prompt: {
            en: `What did ${witness.given.en} fear losing?`,
            bn: `${witness.given.bn} কী হারাতে ভয় করতেন?`
          },
          response: {
            en: 'The original drive. She wanted a clerk to receive it in person.',
            bn: 'মূল ড্রাইভটি। তিনি চেয়েছিলেন আদালতের কর্মী নিজে তা নিন।'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-sister-scarf',
          reactionText: {
            en: 'That is the hem I repaired. I visited my sister. The court clerk has since sent my lawyer a certified receipt. Here is the copy.',
            bn: 'পাড়টি আমি সেলাই করেছি। বোনের কাছে গিয়েছিলাম। পরে আদালতের কর্মী আমার আইনজীবীকে প্রত্যয়িত রসিদ পাঠিয়েছেন। এই নিন কপি।'
          },
          stressIncrease: 35,
          exposesLie: false,
          revealsClueId: 'clue-02-escape-plan-memo'
        },
        {
          evidenceId: 'clue-02-tunnel-footprints',
          reactionText: {
            en: 'We both had soot on our shoes. Nobody carried either of us.',
            bn: 'আমাদের দুজনের জুতাতেই কালি ছিল। কেউ আমাদের বহন করেনি।'
          },
          stressIncrease: 50,
          exposesLie: false
        }
      ]
    },
    {
      ...enforcer,
      alias: {
        en: 'The Syndicate Enforcer',
        bn: 'সিন্ডিকেটের ভাড়াটে খুনি'
      },
      role: {
        en: `${defendant.name.en} Enforcer`,
        bn: `${defendant.name.bn}ের সিন্ডিকেটের শুটার ও জল্লাদ`
      },
      age: 38,
      occupation: {
        en: 'Private "Security Consultant"',
        bn: 'পেশাদার হিটম্যান'
      },
      relationshipToVictim: {
        en: 'Worked security for the defendant’s organisation',
        bn: 'আসামিপক্ষের প্রতিষ্ঠানে নিরাপত্তার কাজ করতেন'
      },
      motive: {
        en: `His employer wanted ${witness.given.en} absent from court. A street camera placed his car outside after midnight.`,
        bn: `তাঁর নিয়োগকর্তা চেয়েছিলেন ${witness.given.bn} আদালতে অনুপস্থিত থাকুন। মধ্যরাতের পর বাইরে তাঁর গাড়ির ছবি আছে।`
      },
      alibi: {
        en: 'I reached the building after midnight. The street camera can give you the minute.',
        bn: 'মধ্যরাতের পরে ভবনে যাই। রাস্তার ক্যামেরা থেকে মিনিটও পাবেন।'
      },
      personality: {
        en: 'Scarred cheek, muscular, leather jacket, heavy Russian accent, completely cold.',
        bn: 'গালে কাটা দাগ, সুঠাম দেহ, চামড়ার জ্যাকেট, অত্যন্ত শীতল ও নিষ্ঠুর।'
      },
      secrets: {
        en: 'He forced the door after receiving an address through a courier.',
        bn: 'কুরিয়ারের কাছ থেকে ঠিকানা পেয়ে তিনি দরজা ভাঙেন।'
      },
      avatarSeed: 'Kozlov',
      avatarColor: '#0f766e',
      dialogueTree: [
        {
          id: 'dlg-k-1',
          prompt: {
            en: 'What brought you to St. Jude?',
            bn: 'সেন্ট জুডে কেন এসেছিলেন?'
          },
          response: {
            en: 'A courier sent the room number. I kept the message, not the name of the person behind it.',
            bn: 'এক কুরিয়ার ঘরের নম্বর পাঠায়। বার্তা রেখেছি, উৎসের নাম নয়।'
          },
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-k-2',
          prompt: {
            en: 'Was the apartment occupied?',
            bn: 'ফ্ল্যাটে কেউ ছিল?'
          },
          response: {
            en: 'I heard nobody inside when the frame gave. Your alarm should record when that was.',
            bn: 'ফ্রেম ভাঙার সময় ভেতরে কাউকে শুনিনি। অ্যালার্মে সময় থাকবে।'
          },
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-forced-door',
          reactionText: {
            en: 'I reached an empty doorway. The alarm records the time of the impact.',
            bn: 'খালি দরজায় পৌঁছেছিলাম। অ্যালার্মে আঘাতের সময় আছে।'
          },
          stressIncrease: 20,
          exposesLie: false
        }
      ]
    },
    {
      ...superintendent,
      alias: {
        en: 'The Building Superintendent',
        bn: 'ভবনের বয়োবৃদ্ধ তত্ত্বাবধায়ক'
      },
      role: {
        en: 'Building Superintendent & Landlord',
        bn: 'ভবনের তত্ত্বাবধায়ক'
      },
      age: 63,
      occupation: {
        en: 'Building Manager',
        bn: 'কেয়ারটেকার'
      },
      relationshipToVictim: {
        en: 'Superintendent of safehouse apartment building',
        bn: 'সেফহাউস ভবনের ম্যানেজার'
      },
      motive: {
        en: 'He sold tenant lists and held both service keys. A visitor was seen at his workshop.',
        bn: 'তিনি ভাড়াটিয়ার তালিকা বিক্রি করতেন, সার্ভিস চাবি দুটিও তাঁর। কর্মশালায় একজন দর্শনার্থী এসেছিলেন।'
      },
      alibi: {
        en: 'I was collecting the evening parcel when the platform gate last swung out before midnight. The porter was still putting his stamp on the slip.',
        bn: 'মধ্যরাতের আগে প্ল্যাটফর্মের ফটক শেষবার বাইরে খোলার সময় আমি সন্ধ্যার পার্সেলটা নিচ্ছিলাম। কর্মী তখনও রসিদে সিল দিচ্ছিলেন।'
      },
      personality: {
        en: 'Shabby work overalls, smelling of stale coffee and grease, ring of brass skeleton keys.',
        bn: 'তেলচিটে ওভারঅল পরা, হাতে চাবির গোছা, কাশির আওয়াজ।'
      },
      secrets: {
        en: `Gave ${witness.name.en} the master padlock key to the underground boiler steam conduit.`,
        bn: `${witness.given.bn}ের কান্নাকাটি দেখে তাকে মাটির নিচের বয়লার সুড়ঙ্গের তালা খোলার চাবি দিয়েছিলেন।`
      },
      avatarSeed: 'Isaac',
      avatarColor: '#ca8a04',
      dialogueTree: [
        {
          id: 'dlg-iv-1',
          prompt: {
            en: 'Where does the service stair lead?',
            bn: 'সার্ভিস সিঁড়ি কোথায় যায়?'
          },
          response: {
            en: 'Past the boiler to a platform gate. The passenger exit has a time contact.',
            bn: 'বয়লার পেরিয়ে প্ল্যাটফর্মের ফটকে। যাত্রীপথে সময় রেকর্ড হয়।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-iv-2',
          prompt: {
            en: 'Was a key missing?',
            bn: 'কোনো চাবি হারিয়েছিল?'
          },
          response: {
            en: 'I lent one to a courier for a parcel pickup. The spare stayed on the board.',
            bn: 'পার্সেল নিতে কুরিয়ারকে একটি দিই। অন্যটি বোর্ডে ছিল।'
          },
          reactionMood: 'nervous'
        },
        {
          id: 'dlg-iv-key-slip',
          conditionClueId: 'clue-02-escape-plan-memo',
          prompt: { en: 'Who initialled the slip around the returned key?', bn: 'ফেরত চাবির কাগজে কার আদ্যক্ষর?' },
          response: {
            en: `I did. After the courier brought it back, I lent it to ${witness.given.en}. A second loan outside the log would cost me my post.`,
            bn: `আমার। কুরিয়ার চাবি ফেরত দিলে আমি ${witness.given.bn}কে দিই। খাতায় না লিখে দ্বিতীয়বার চাবি দেওয়ার কথা জানলে আমার চাকরি যেত।`
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-tunnel-footprints',
          reactionText: {
            en: 'I sweep at 23:15. The steps cut across my broom lines.',
            bn: '২৩:১৫-তে ঝাড়ু দিই। ছাপগুলো ঝাড়ুর দাগের ওপরে।'
          },
          stressIncrease: 30,
          exposesLie: false
        },
        {
          evidenceId: 'case-002-parcel-counterfoil',
          requiresEvidenceIds: ['case-002-gate-strip'],
          reactionText: {
            en: 'The porter put a time on the parcel. He never signed for anyone passing through the gate.',
            bn: 'কর্মী পার্সেল তোলার সময় লিখেছেন। ফটক দিয়ে কেউ গেলে তিনি তার জন্য সই করতেন না।'
          },
          stressIncrease: 15,
          exposesLie: true
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-02-forced-door',
      name: {
        en: 'Door frame and duty sheet',
        bn: 'দরজার ফ্রেম ও ডিউটির তালিকা'
      },
      category: 'Physical',
      description: {
        en: 'A loose strike plate covers the building alarm contact. The duty sheet is still clipped to the corridor side.',
        bn: 'ঢিলে ধাতব পাতের নিচে অ্যালার্মের সংযোগ। করিডোরের দিকে এখনও ডিউটির কাগজ আটকানো।'
      },
      discoveryLocation: {
        en: '4th Floor Corridor Entrance',
        bn: '৪র্থ তলার করিডোরের মুখ'
      },
      relevance: {
        en: 'Does the alarm say when anyone left the flat?',
        bn: 'ফ্ল্যাট ছেড়ে যাওয়ার সময় কি অ্যালার্ম দেখায়?'
      },
      relatedSuspectIds: ['suspect-02-navarro', 'suspect-02-kozlov'],
      details: [
        {
          en: 'The contact first registered a forced opening at 00:30. It does not register ordinary visits.',
          bn: '০০:৩০-এ প্রথম জোর করে খোলার সংকেত ধরা পড়ে। স্বাভাবিক প্রবেশে এই যন্ত্রের সংকেত হয় না।'
        },
        {
          en: `At the roster check ${officer.family.en} retained personal dispatch seal 6, relief seal 8 stayed in the safe. The supervisor witnessed both at 23:00 and 23:15.`,
          bn: `২৩:০০ ও ২৩:১৫-র তদারকিতে ${officer.family.bn}ের ব্যক্তিগত ডিসপ্যাচ সিল ৬ তাঁর কাছে, বিকল্প সিল ৮ সিন্দুকে ছিল।`
        }
      ],
      iconKey: 'door',
      forensicReport: {
        labSummary: {
          en: 'The frame records an impact from the hall. The alarm contact has its own clock and battery.',
          bn: 'ফ্রেমে করিডোরের দিক থেকে আঘাতের চিহ্ন। সংযোগটির নিজস্ব ঘড়ি ও ব্যাটারি আছে।'
        }
      }
    },
    {
      id: 'clue-02-staged-blood',
      name: {
        en: 'Rug swab and lamp',
        bn: 'গালিচার নমুনা ও বাতি'
      },
      category: 'Forensic Reports',
      description: {
        en: 'The stain has a hard square edge beneath the fallen lamp. Broken door paint rests on its dry surface.',
        bn: 'পড়ে থাকা বাতির নিচে দাগের এক কিনারা চৌকো। শুকনো দাগের ওপরে দরজার ভাঙা রং।'
      },
      discoveryLocation: {
        en: 'Living room linoleum rug',
        bn: 'ঘরের মেঝের গালিচা'
      },
      relevance: {
        en: 'Which came first, the stain or the door damage?',
        bn: 'আগে কোনটি ঘটেছে, দাগ নাকি দরজার ক্ষতি?'
      },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-kozlov'],
      isCrucial: true,
      details: [
        {
          en: 'A textile transfer sheet would leave that straight edge.',
          bn: 'কাপড়ে নকশা তোলার পাত এমন সোজা কিনারা রাখতে পারে।'
        },
        {
          en: 'No blood cells are present. The material is a water-soluble stage pigment.',
          bn: 'রক্তকণিকা নেই। এটি জলে দ্রবণীয় মঞ্চের রং।'
        }
      ],
      iconKey: 'flask',
      forensicReport: {
        labSummary: {
          en: 'Door paint landed after the pigment dried. The two traces need separate timestamps.',
          bn: 'রং শুকোনোর পর দরজার রং খসে পড়ে। দুই চিহ্নের সময় আলাদা।'
        }
      }
    },
    {
      id: 'clue-02-burner-phone',
      name: {
        en: 'Radiator handset',
        bn: 'রেডিয়েটরের ফোন'
      },
      category: 'Digital',
      description: {
        en: 'A shared dispatch receiver cached an outgoing room assignment at 23:10. The address includes an east-stair label used only on the protected roster.',
        bn: 'যৌথ ডিসপ্যাচ রিসিভারে ২৩:১০-এ পাঠানো ঘরের অবস্থান আছে। পূর্ব সিঁড়ির নামটি শুধু সুরক্ষিত তালিকায় ছিল।'
      },
      discoveryLocation: {
        en: 'Behind kitchenette radiator',
        bn: 'হিটারের পেছনের ফাঁকা স্থান'
      },
      relevance: {
        en: 'Who authenticated the outgoing release, and who financed it?',
        bn: 'বহির্গামী বার্তাটিতে কে অনুমোদন দিলেন, আর অর্থ এল কোথা থেকে?'
      },
      relatedSuspectIds: ['suspect-02-navarro', 'suspect-02-sterling', 'suspect-02-kozlov'],
      isCrucial: true,
      details: [
        {
          en: 'The source was personal seal 6. The receiver is only a mirror of the traffic.',
          bn: 'উৎস ব্যক্তিগত সিল ৬। রিসিভার কেবল বার্তার অনুলিপি রাখে।'
        },
        {
          en: 'The address was acknowledged with remittance reference K31. No sender name is stored.',
          bn: 'ঠিকানা পাওয়ার রসিদে অর্থপ্রেরণ কোড K31। প্রেরকের নাম সংরক্ষিত নেই।'
        }
      ],
      iconKey: 'phone',
      forensicReport: {
        labSummary: {
          en: 'The dispatch office confirms that the numbered seal required its holder’s live identity check for each release.',
          bn: 'ডিসপ্যাচ দপ্তর নিশ্চিত করেছে, প্রতিবার পাঠাতে সিলধারীর পরিচয় সরাসরি যাচাই হয়।'
        }
      }
    },
    {
      id: 'clue-02-vent-grate',
      name: {
        en: 'Maintenance hatch',
        bn: 'রক্ষণাবেক্ষণ ফাঁক'
      },
      category: 'Physical',
      description: {
        en: 'The kitchenette opens onto the service stair. Loose dust lies on top of the cover, except for a clean handspan.',
        bn: 'রান্নার জায়গা থেকে সার্ভিস সিঁড়ি খোলে। ঢাকনার ধুলোয় হাতের সমান একখণ্ড পরিষ্কার।'
      },
      discoveryLocation: {
        en: 'Kitchenette baseboard',
        bn: 'রান্নাঘরের দেয়ালের নিচে'
      },
      relevance: {
        en: 'Which direction did the traffic move?',
        bn: 'চলাচল কোন দিকে হয়েছিল?'
      },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        {
          en: 'A bead of blue pigment continues from the inner lip onto the first stair.',
          bn: 'নীল রঙের ফোঁটা ভেতরের কিনারা থেকে প্রথম ধাপে গেছে।'
        },
        {
          en: 'The service plan labels this stair P. The same letter appears beside the platform gate on the plan.',
          bn: 'নকশায় এই সিঁড়ির চিহ্ন P। প্ল্যাটফর্মের ফটকের পাশেও একই অক্ষর।'
        }
      ],
      iconKey: 'key',
      forensicReport: {
        labSummary: {
          en: 'Dust was displaced toward the stair. No inward trail disturbs the return edge.',
          bn: 'ধুলো সিঁড়ির দিকে সরেছে। ফেরার কিনারায় ভেতরমুখী দাগ নেই।'
        }
      }
    },
    {
      id: 'clue-02-torn-ticket',
      name: {
        en: 'Sleeper ticket stub',
        bn: 'শয়নযানের টিকিটের অংশ'
      },
      category: 'Documents',
      description: {
        en: 'A ticket for Montreal has been torn along a rail voucher numbered 71. The passenger field is blank on this half.',
        bn: 'মন্ট্রিয়লের টিকিট ৭১ নম্বর রেল ভাউচার বরাবর ছেঁড়া। এ অংশে যাত্রীর নাম খালি।'
      },
      discoveryLocation: {
        en: 'Folding desk, under the timetable',
        bn: 'ভাঁজ টেবিলে সময়সূচির নিচে'
      },
      relevance: {
        en: 'Was the ticket merely bought, or was the other half used?',
        bn: 'টিকিট শুধু কেনা হয়েছিল, নাকি অন্য অংশ ব্যবহারও হয়েছিল?'
      },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        {
          en: 'The train departed at 23:45. The platform carbon records voucher 71 accepted at boarding.',
          bn: 'ট্রেন ছাড়ে ২৩:৪৫-তে। প্ল্যাটফর্ম কপিতে ওঠার সময় ৭১ গ্রহণ করা হয়েছে।'
        },
        {
          en: 'The booking was made before the door alarm, with a return message for the court clerk.',
          bn: 'দরজার অ্যালার্মের আগে বুকিং হয়েছিল, আদালতের কর্মীর জন্য ফেরত বার্তাসহ।'
        }
      ],
      iconKey: 'document',
      forensicReport: {
        labSummary: {
          en: 'The fibres along the tear fit the clerk’s retained voucher. A used fare alone gives no passenger identity.',
          bn: 'ছেঁড়া অংশ কর্মীর রাখা ভাউচারের সঙ্গে মেলে। ভাড়া ব্যবহারে যাত্রীর পরিচয় জানা যায় না।'
        }
      }
    },
    {
      id: 'clue-02-sister-scarf',
      name: {
        en: 'Floral scarf',
        bn: 'ফুলের নকশার স্কার্ফ'
      },
      category: 'Physical',
      description: {
        en: 'A lavender scarf on the peg carries blue transfer pigment in a hem. The lobby camera shows a scarf in a delivery bag at 19:30.',
        bn: 'খুঁটির ল্যাভেন্ডার স্কার্ফের পাড়ে নীল ছাপার রং। ১৯:৩০-এর লবি ক্যামেরায় সরবরাহ ব্যাগে স্কার্ফ দেখা যায়।'
      },
      discoveryLocation: {
        en: 'Hallway coat rack inside Room 404',
        bn: 'রুম ৪০৪-এর কোট হ্যাঙ্গার'
      },
      relevance: {
        en: 'Why would a visitor want a delivery kept off the register?',
        bn: 'এক দর্শনার্থী কেন সরবরাহের কথা গোপন রাখবেন?'
      },
      relatedSuspectIds: ['suspect-02-maya'],
      details: [
        {
          en: `The hem bears ${sister.given.en}’s initials. The fibres have no tears.`,
          bn: `পাড়ে ${sister.given.bn}র আদ্যক্ষর। তন্তু ছেঁড়েনি।`
        },
        {
          en: 'The bag carried clothing as well as printed sheets.',
          bn: 'ব্যাগে ছাপা পাতা ছাড়াও পোশাক ছিল।'
        }
      ],
      iconKey: 'scissors',
      forensicReport: {
        labSummary: {
          en: 'The pigment and scarf travelled together before the recorded evening breach.',
          bn: 'রাতের দরজা ভাঙার আগেই রং ও স্কার্ফ একসঙ্গে এসেছিল।'
        }
      }
    },
    {
      id: 'clue-02-tunnel-footprints',
      name: {
        en: 'Boiler passage tracks',
        bn: 'বয়লার পথের পদচিহ্ন'
      },
      category: 'Forensic Reports',
      description: {
        en: 'Two sets of prints lead from the service stair to the platform. One heel has a small triangular repair.',
        bn: 'সার্ভিস সিঁড়ি থেকে প্ল্যাটফর্মে দুই সারি ছাপ। একটি গোড়ালিতে ত্রিভুজাকার তালি।'
      },
      discoveryLocation: {
        en: 'Sub-basement steam tunnel to rail yard',
        bn: 'রেল ইয়ার্ডে যাওয়া ভূগর্ভস্থ সুড়ঙ্গ'
      },
      relevance: {
        en: 'Does the trail end at the point named in the booking?',
        bn: 'টিকিটে লেখা জায়গাতেই কি পথ শেষ?'
      },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        {
          en: 'Dry soot overlies the 23:15 sweep marks. No wheel or dragging trail accompanies the steps.',
          bn: 'শুকনো কালির নিচে ২৩:১৫-র ঝাড়ুর দাগ। চাকা বা টানার চিহ্ন নেই।'
        },
        {
          en: 'A blue fleck sits inside the repaired heel print by the stair.',
          bn: 'সিঁড়ির পাশে তালি দেওয়া গোড়ালির ছাপে নীল রং।'
        }
      ],
      iconKey: 'footprint',
      forensicReport: {
        labSummary: {
          en: 'The same repaired tread reaches the platform gate before the 23:45 train.',
          bn: '২৩:৪৫-এর ট্রেনের আগে একই তালি দেওয়া জুতোর ছাপ প্ল্যাটফর্মের ফটকে পৌঁছেছে।'
        }
      }
    },
    {
      id: 'clue-02-navarro-deposit',
      name: {
        en: 'Clearinghouse remittance',
        bn: 'লেনদেন নিষ্পত্তির রসিদ'
      },
      category: 'Documents',
      description: {
        en: `Internal affairs obtained a $25,000 transfer authorised at 23:00 against a betting balance. The payer was the ${defendant.name.en} courier fund.`,
        bn: `অভ্যন্তরীণ তদন্তে বাজির বকেয়া মেটাতে ২৩:০০-তে অনুমোদিত ২৫,০০০ ডলারের লেনদেন পাওয়া গেছে। প্রেরক ${defendant.name.bn}ের কুরিয়ার তহবিল।`
      },
      discoveryLocation: {
        en: 'State Police Internal Affairs Intercept',
        bn: 'পুলিশের অভ্যন্তরীণ গোয়েন্দা ইন্টারসেপ্ট'
      },
      relevance: {
        en: 'Which exchange used the same reference as this payment?',
        bn: 'এই অর্থের রেফারেন্স আর কোন লেনদেনে ব্যবহৃত?'
      },
      relatedSuspectIds: ['suspect-02-navarro', 'suspect-02-sterling', 'suspect-02-kozlov'],
      details: [
        {
          en: 'The settlement carries reference K31. The account holder is redacted on the court copy.',
          bn: 'রসিদে K31। আদালতের কপিতে হিসাবধারীর নাম ঢাকা।'
        },
        {
          en: 'The transfer settled on acknowledgement of a room assignment.',
          bn: 'একটি ঘরের অবস্থান পাওয়ার স্বীকৃতিতে অর্থ নিষ্পত্তি হয়েছে।'
        }
      ],
      iconKey: 'receipt',
      forensicReport: {
        labSummary: {
          en: 'The bank and dispatch references were issued independently and match in full.',
          bn: 'ব্যাংক ও ডিসপ্যাচে স্বাধীনভাবে নথিভুক্ত রেফারেন্স পুরোপুরি মেলে।'
        }
      }
    },
    {
      id: 'clue-02-escape-plan-memo',
      name: {
        en: 'Clerk’s receipt and drive',
        bn: 'আদালতের রসিদ ও ড্রাইভ'
      },
      category: 'Digital',
      description: {
        en: 'A prosecutor kept the other half of voucher 71 with the original fraud drive. The travelling witness signed in person.',
        bn: 'সরকারি কৌঁসুলি মূল জালিয়াতির ড্রাইভের সঙ্গে ভাউচার ৭১-এর অন্য অংশ রেখেছেন। যাত্রী সাক্ষী নিজে স্বাক্ষর করেন।'
      },
      discoveryLocation: {
        en: 'Court receipt supplied during interview',
        bn: 'জিজ্ঞাসাবাদে পাওয়া আদালতের রসিদ'
      },
      relevance: {
        en: 'Whose journey does the clerk’s receipt authenticate?',
        bn: 'কর্মীর রসিদ কার যাত্রা প্রমাণ করে?'
      },
      relatedSuspectIds: ['suspect-02-maya'],
      details: [
        {
          en: `The clerk verified ${witness.given.en}’s identity on the departing train and saw her board on foot by choice.`,
          bn: `ট্রেন ছাড়ার সময় কর্মী ${witness.given.bn}ের পরিচয় যাচাই করেন, তাঁকে স্বেচ্ছায় হেঁটে উঠতে দেখেন।`
        },
        {
          en: 'The accompanying note records an overheard room release. It gives no sender’s name.',
          bn: 'সঙ্গে থাকা নোটে ঘরের অবস্থান ফাঁস হতে শোনার উল্লেখ। প্রেরকের নাম নেই।'
        },
        {
          en: `The clerk also logged the return of service key P, wrapped in a loan slip initialled ${superintendent.given.en[0]}.${superintendent.family.en[0]}.`,
          bn: `কর্মী P চিহ্নিত সার্ভিস চাবি ফেরতের কথাও লিখেছেন। চাবি ধার দেওয়ার কাগজে ‘${superintendent.given.bn[0]}. ${superintendent.family.bn[0]}.’ আদ্যক্ষর।`
        }
      ],
      iconKey: 'usb',
      forensicReport: {
        labSummary: {
          en: `The signature on the receipt matches ${witness.given.en}’s court deposition.`,
          bn: `রসিদের স্বাক্ষর ${witness.given.bn}ের আদালতের জবানবন্দির সঙ্গে মেলে।`
        }
      }
    },
    {
      id: 'case-002-lamp-shade',
      name: {
        en: 'Dust on the lamp shade',
        bn: 'বাতির ঢাকনার ধুলো'
      },
      category: 'Physical',
      description: {
        en: 'The floor lamp lies on its side. The shaded side of its rim bears a rectangular transfer mark.',
        bn: 'বাতিটি পাশে কাত। কিনারার ছায়ার দিকে আয়তাকার রঙের ছাপ।'
      },
      discoveryLocation: {
        en: 'Room 404, lamp shade',
        bn: 'কক্ষ ৪০৪, বাতির ঢাকনা'
      },
      relevance: {
        en: 'Did the lamp fall onto wet or dry pigment?',
        bn: 'বাতিটি ভেজা নাকি শুকনো রঙে পড়েছিল?'
      },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-kozlov'],
      details: [
        {
          en: 'The smear ends at the edge of a transfer sheet. The shade has no impact dent.',
          bn: 'ছাপটি রং তোলার কাগজের কিনারায় শেষ। ঢাকনায় আঘাতের গর্ত নেই।'
        }
      ],
      forensicReport: {
        labSummary: {
          en: 'Pigment transferred while wet and dried on the flattened rim. The disturbance in the room preceded the flakes of door paint.',
          bn: 'ভেজা রং চ্যাপ্টা কিনারায় লেগে শুকিয়েছে। ঘরের ওলটপালট দরজার রং খসার আগের।'
        }
      },
      iconKey: 'file'
    },
    {
      id: 'case-002-gate-strip',
      name: { en: 'Gate recorder strip', bn: 'ফটকের রেকর্ডার ফিতা' },
      category: 'Documents',
      description: {
        en: 'The last mark before midnight sits at 23:20 on the lower row of the platform gate strip.',
        bn: 'মধ্যরাতের আগের শেষ চিহ্নটি প্ল্যাটফর্মের ফটকের ফিতায় ২৩:২০-তে নিচের সারিতে।'
      },
      discoveryLocation: { en: 'Boiler passage, platform gate', bn: 'বয়লার পথ, প্ল্যাটফর্মের ফটক' },
      relevance: { en: 'Which journey could fit after this opening?', bn: 'এবার ফটক খোলার পর কোন যাত্রার সময় মেলে?' },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        {
          en: 'The porter marked a test swing in each direction. The lower pen records swings toward the tracks.',
          bn: 'কর্মী দুদিকে ফটক খুলে পরীক্ষার চিহ্ন দিয়েছেন। রেললাইনের দিকে খুললে নিচের কলমটি লেখে।'
        },
        {
          en: 'One swing can admit several people. The recorder counts neither tickets nor passengers.',
          bn: 'একবার খুললে একাধিক লোক যেতে পারেন। যাত্রী বা টিকিট গোনার ব্যবস্থা এতে নেই।'
        }
      ],
      forensicReport: { labSummary: {
        en: 'The calibration marks agree with the station clock. The strip runs continuously past the 23:20 mark.',
        bn: 'পরীক্ষার চিহ্নগুলি স্টেশনের ঘড়ির সঙ্গে মেলে। ২৩:২০-এর চিহ্নের পরেও ফিতা অক্ষত।'
      } },
      iconKey: 'file'
    },
    {
      id: 'case-002-parcel-counterfoil',
      name: { en: 'Porter’s parcel counterfoil', bn: 'মালের রসিদের মুড়ি' },
      category: 'Documents',
      description: {
        en: 'The porter receipted a parcel at 19:34. Its collection slip is stamped for the evening round.',
        bn: '১৯:৩৪-এ একটি পার্সেল তোলার রসিদ দিয়েছেন কর্মী। সিলটি সন্ধ্যার পালার।'
      },
      discoveryLocation: { en: 'Boiler passage, platform sign', bn: 'বয়লার পথ, প্ল্যাটফর্মের ফলক' },
      relevance: { en: 'Does the parcel account for the early visitor or the late tracks?', bn: 'পার্সেলটি আগের দর্শনার্থীর ব্যাখ্যা দেয়, নাকি পরের পদচিহ্নের?' },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [{
        en: 'The counterfoil records a collection from the platform stores. Its reference belongs to the parcel book.',
        bn: 'রসিদে প্ল্যাটফর্মের গুদাম থেকে মাল তোলার উল্লেখ আছে। নম্বরটি পার্সেলের খাতার।'
      }],
      forensicReport: { labSummary: {
        en: 'Pressure marks match the porter’s 19:34 entry on the duplicate. The counterfoil carries no passenger voucher number.',
        bn: 'চাপের দাগ কর্মীর ১৯:৩৪-এর কার্বন কপির সঙ্গে মেলে। রসিদে যাত্রীর ভাউচার নম্বর নেই।'
      } },
      iconKey: 'file'
    }
  ],
  canonConnections: [
    {
      id: 'c2-link-porter-alibi',
      sourceId: 'case-002-parcel-counterfoil',
      targetId: 'case-002-gate-strip',
      label: { en: 'Two visits to the platform', bn: 'প্ল্যাটফর্মে দুই সময়' },
      deductionNotes: {
        en: 'The collection was stamped at 19:34. The gate swung out at 23:20. The porter could witness a collection without witnessing the later crossing.',
        bn: 'পার্সেল তোলার সিল ১৯:৩৪-এ। ফটক বাইরে খোলে ২৩:২০-তে। পার্সেল তোলার সাক্ষী হলেও পরেরবার কে পার হয়েছেন তা কর্মীর দেখার কথা নয়।'
      },
      isContradiction: true,
      bonusPoints: 100
    },
    {
      id: 'c2-link-parcel-visit',
      sourceId: 'case-002-parcel-counterfoil',
      targetId: 'clue-02-sister-scarf',
      label: { en: 'The evening collection', bn: 'সন্ধ্যার পার্সেল সংগ্রহ' },
      deductionNotes: {
        en: 'The 19:30 lobby image and the 19:34 receipt allow time for a real parcel call. The scarf in that image cannot date the later journey.',
        bn: 'লবির ১৯:৩০-এর ছবি এবং ১৯:৩৪-এর রসিদ মিলিয়ে পার্সেল তোলার সময় পাওয়া যায়। ছবির স্কার্ফ দিয়ে পরের যাত্রার সময় স্থির করা যায় না।'
      },
      isContradiction: false,
      bonusPoints: 60
    },
    {
      id: 'c2-link-platform-clock',
      sourceId: 'case-002-gate-strip',
      targetId: 'clue-02-torn-ticket',
      label: { en: 'The platform interval', bn: 'প্ল্যাটফর্মে সময়ের ব্যবধান' },
      deductionNotes: {
        en: 'The outward swing precedes boarding by twenty-five minutes. Neither record alone identifies who crossed.',
        bn: 'যাত্রী ওঠার পঁচিশ মিনিট আগে ফটক বাইরে খোলে। কে পার হয়েছিল তা কোনও একক নথিতে নেই।'
      },
      isContradiction: false,
      bonusPoints: 90
    },
    {
      id: 'c2-conn-01',
      sourceId: 'clue-02-forced-door',
      targetId: 'clue-02-staged-blood',
      label: {
        en: 'Two events at the doorway',
        bn: 'দরজায় দুটি ঘটনা'
      },
      deductionNotes: {
        en: 'Dry pigment beneath fresh paint puts the stain before the breach.',
        bn: 'নতুন রঙের কণার নিচে শুকনো দাগ, অর্থাৎ দাগটি দরজা ভাঙার আগের।'
      },
      isContradiction: true,
      bonusPoints: 200
    },
    {
      id: 'c2-conn-02',
      sourceId: 'clue-02-burner-phone',
      targetId: 'clue-02-navarro-deposit',
      label: {
        en: 'A remittance acknowledged',
        bn: 'লেনদেনের স্বীকৃতি'
      },
      deductionNotes: {
        en: 'K31 appears on the payment and the dispatch acknowledgement. The duty register identifies which live seal was in use.',
        bn: 'অর্থ ও ডিসপ্যাচ স্বীকৃতি দুটিতেই K31। কোন সিল চালু ছিল ডিউটি খাতায় আছে।'
      },
      isContradiction: true,
      bonusPoints: 200
    },
    {
      id: 'c2-conn-03',
      sourceId: 'clue-02-vent-grate',
      targetId: 'clue-02-tunnel-footprints',
      label: {
        en: 'The service stair and platform',
        bn: 'সার্ভিস সিঁড়ি ও প্ল্যাটফর্ম'
      },
      deductionNotes: {
        en: 'Dust direction and a continuous tread connect two floors with the rail exit.',
        bn: 'ধুলোর দিক ও একই জুতোর ছাপ দুই তলা থেকে রেলপথ যুক্ত করে।'
      },
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'c2-conn-04',
      sourceId: 'clue-02-torn-ticket',
      targetId: 'clue-02-escape-plan-memo',
      label: {
        en: 'Two halves of voucher 71',
        bn: '৭১ নম্বর ভাউচারের দুই অংশ'
      },
      deductionNotes: {
        en: 'A booked seat becomes a witnessed journey once the clerk’s half is placed alongside the passenger stub.',
        bn: 'কর্মীর কপি ও যাত্রীর টুকরো মেলালে বুক করা আসনের যাত্রীর সাক্ষ্য মেলে।'
      },
      isContradiction: false,
      bonusPoints: 150
    },
    {
      id: 'case-002-link-5',
      sourceId: 'clue-02-burner-phone',
      targetId: 'clue-02-forced-door',
      label: {
        en: 'A numbered release',
        bn: 'নম্বরযুক্ত অনুমোদন'
      },
      deductionNotes: {
        en: 'The roster identifies the custodian of the live dispatch seal. The bank copy can test its purpose.',
        bn: 'সচল ডিসপ্যাচ সিলের ধারক তালিকায় আছে। ব্যাংকের কপি থেকে উদ্দেশ্য যাচাই করুন।'
      },
      isContradiction: false,
      bonusPoints: 60
    },
    {
      id: 'case-002-link-6',
      sourceId: 'clue-02-forced-door',
      targetId: 'clue-02-escape-plan-memo',
      label: {
        en: 'The clerk and the corridor',
        bn: 'কর্মী ও করিডোর'
      },
      deductionNotes: {
        en: 'A witnessed boarding and a separately timed breach test the order of the two events.',
        bn: 'সাক্ষীর সামনে ট্রেনে ওঠা ও আলাদা সময়ে দরজা ভাঙা থেকে ঘটনাক্রম যাচাই হয়।'
      },
      isContradiction: false,
      bonusPoints: 60
    },
    {
      id: 'safehouse-loan',
      sourceId: 'clue-02-navarro-deposit',
      targetId: 'suspect-02-navarro',
      requiresEvidenceIds: ['clue-02-forced-door', 'clue-02-burner-phone'],
      label: {
        en: 'The family-loan account',
        bn: 'পারিবারিক ঋণের বয়ান'
      },
      deductionNotes: {
        en: 'The dispatch acknowledgement and the paying fund give a way to test the loan explanation.',
        bn: 'বার্তার স্বীকৃতি ও অর্থদাতা তহবিল থেকে ঋণের ব্যাখ্যা যাচাই করা যায়।'
      },
      isContradiction: true,
      bonusPoints: 60
    },
    {
      id: 'safehouse-courier',
      sourceId: 'clue-02-sister-scarf',
      targetId: 'suspect-02-maya',
      requiresEvidenceIds: ['clue-02-escape-plan-memo'],
      label: {
        en: 'A private delivery',
        bn: 'ব্যক্তিগত সরবরাহ'
      },
      deductionNotes: {
        en: 'The visitor who identified the scarf supplied a later court receipt. It gives the concealed visit a purpose independent of the door damage.',
        bn: 'স্কার্ফ চেনা দর্শনার্থী পরের আদালতের রসিদটি দিলেন। দরজার ক্ষতি থেকে আলাদাভাবে গোপন সাক্ষাতের উদ্দেশ্য বোঝা যায়।'
      },
      isContradiction: false,
      bonusPoints: 60
    }
  ],
  timelineEvents: [
    {
      id: 'tl2-01',
      timestamp: '19:30',
      timeSortValue: 1170,
      title: {
        en: 'Courier at the lobby',
        bn: 'লবিতে কুরিয়ার'
      },
      description: {
        en: 'A delivery bag crosses the camera.',
        bn: 'ক্যামেরায় সরবরাহ ব্যাগ দেখা যায়।'
      },
      source: {
        en: 'Floral scarf',
        bn: 'ফুলের নকশার স্কার্ফ'
      },
      verifiedLocation: {
        en: 'Hallway coat rack inside Room 404',
        bn: 'রুম ৪০৪-এর কোট হ্যাঙ্গার'
      },
      correctIndex: 0,
      evidenceId: 'clue-02-sister-scarf'
    },
    {
      id: 'tl2-02',
      timestamp: '23:00',
      timeSortValue: 1380,
      title: {
        en: 'Transfer authorised',
        bn: 'লেনদেন অনুমোদিত'
      },
      description: {
        en: 'The courier fund authorises a payment subject to acknowledgement.',
        bn: 'প্রাপ্তির স্বীকৃতি সাপেক্ষে কুরিয়ার তহবিল অর্থ অনুমোদন করে।'
      },
      source: {
        en: 'Clearinghouse remittance',
        bn: 'লেনদেন নিষ্পত্তির রসিদ'
      },
      verifiedLocation: {
        en: 'State Police Internal Affairs Intercept',
        bn: 'পুলিশের অভ্যন্তরীণ গোয়েন্দা ইন্টারসেপ্ট'
      },
      correctIndex: 1,
      evidenceId: 'clue-02-navarro-deposit'
    },
    {
      id: 'tl2-03',
      timestamp: '23:10',
      timeSortValue: 1390,
      title: {
        en: 'Room assignment released',
        bn: 'ঘরের তথ্য পাঠানো'
      },
      description: {
        en: 'A numbered source receives an acknowledgement.',
        bn: 'নম্বরযুক্ত উৎস স্বীকৃতি পায়।'
      },
      source: {
        en: 'Radiator handset',
        bn: 'রেডিয়েটরের ফোন'
      },
      verifiedLocation: {
        en: 'Behind kitchenette radiator',
        bn: 'হিটারের পেছনের ফাঁকা স্থান'
      },
      correctIndex: 2,
      evidenceId: 'clue-02-burner-phone'
    },
    {
      id: 'tl2-04',
      timestamp: '23:20',
      timeSortValue: 1400,
      title: {
        en: 'Service door opened',
        bn: 'সার্ভিস দরজা খোলে'
      },
      description: {
        en: 'The lower pen records the gate opening toward the tracks.',
        bn: 'রেললাইনের দিকে ফটক খোলার চিহ্ন নিচের কলমে ধরা পড়ে।'
      },
      source: {
        en: 'Gate recorder strip',
        bn: 'ফটকের রেকর্ডার ফিতা'
      },
      verifiedLocation: {
        en: 'Boiler passage, platform gate',
        bn: 'বয়লার পথ, প্ল্যাটফর্মের ফটক'
      },
      correctIndex: 3,
      evidenceId: 'case-002-gate-strip'
    },
    {
      id: 'tl2-05',
      timestamp: '23:45',
      timeSortValue: 1425,
      title: {
        en: 'Night express departs',
        bn: 'রাতের ট্রেন ছাড়ে'
      },
      description: {
        en: 'A rail voucher is accepted.',
        bn: 'রেল ভাউচার গ্রহণ করা হয়।'
      },
      source: {
        en: 'Sleeper ticket stub',
        bn: 'শয়নযানের টিকিটের অংশ'
      },
      verifiedLocation: {
        en: 'Folding desk, under the timetable',
        bn: 'ভাঁজ টেবিলে সময়সূচির নিচে'
      },
      correctIndex: 4,
      evidenceId: 'clue-02-torn-ticket'
    },
    {
      id: 'tl2-06',
      timestamp: '00:30',
      timeSortValue: 1470,
      title: {
        en: 'Door contact triggered',
        bn: 'দরজার সংকেত'
      },
      description: {
        en: 'The strike separates from the frame.',
        bn: 'ধাতব পাত ফ্রেম থেকে সরে যায়।'
      },
      source: {
        en: 'Door frame and duty sheet',
        bn: 'দরজার ফ্রেম ও ডিউটির তালিকা'
      },
      verifiedLocation: {
        en: '4th Floor Corridor Entrance',
        bn: '৪র্থ তলার করিডোরের মুখ'
      },
      correctIndex: 5,
      evidenceId: 'clue-02-forced-door'
    },
    {
      id: 'tl2-07',
      timestamp: '00:45',
      timeSortValue: 1485,
      title: {
        en: 'Quarter-hour recall',
        bn: 'পনেরো মিনিটের সংকেত'
      },
      description: {
        en: 'The roster records the next unanswered recall.',
        bn: 'তালিকায় পরের ডাকে সাড়া নেই।'
      },
      source: {
        en: 'Door frame and duty sheet',
        bn: 'দরজার ফ্রেম ও ডিউটির তালিকা'
      },
      verifiedLocation: {
        en: '4th Floor Corridor Entrance',
        bn: '৪র্থ তলার করিডোরের মুখ'
      },
      correctIndex: 6,
      evidenceId: 'clue-02-forced-door'
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: {
        en: 'Different clocks',
        bn: 'আলাদা ঘড়ি'
      },
      hintText: {
        en: 'Keep separate times for the stain, impact and passenger journey.',
        bn: 'দাগ, আঘাত ও যাত্রার সময় আলাদা রাখুন।'
      }
    },
    {
      level: 2,
      cost: 100,
      title: {
        en: 'Ownership and custody',
        bn: 'মালিকানা ও হেফাজত'
      },
      hintText: {
        en: 'Ask who held the numbered seals. A receiver can retain traffic sent by someone else.',
        bn: 'নম্বর দেওয়া সিল কার কাছে ছিল জিজ্ঞেস করুন। রিসিভারে অন্যের পাঠানো বার্তাও থাকে।'
      }
    },
    {
      level: 3,
      cost: 200,
      title: {
        en: 'Paired paperwork',
        bn: 'জোড়া নথি'
      },
      hintText: {
        en: 'Check the remittance against the outgoing acknowledgement. Then put both halves of the rail voucher together.',
        bn: 'অর্থের রসিদ ও পাঠানোর স্বীকৃতি মেলান। এরপর রেল ভাউচারের দুই অংশ পাশাপাশি রাখুন।'
      }
    }
  ],
  solution: {
    culpritId: 'suspect-02-navarro',
    culpritName: {
      en: `${officer.name.en} (Betrayal & Corruption)`,
      bn: `${officer.name.bn} (ঘুষ ও বিশ্বাসঘাতকতা)`
    },
    motiveDescription: {
      en: 'A paid disclosure to a creditor',
      bn: 'পাওনা মেটাতে অর্থের বিনিময়ে তথ্য ফাঁস'
    },
    methodDescription: {
      en: 'Voluntary rail departure after a staged struggle',
      bn: 'সাজানো ধস্তাধস্তির পর স্বেচ্ছায় রেলযাত্রা'
    },
    approximateTime: {
      en: '23:20–23:45',
      bn: '২৩:২০–২৩:৪৫'
    },
    crucialEvidenceIds: [
      'clue-02-forced-door',
      'clue-02-burner-phone',
      'clue-02-navarro-deposit',
      'clue-02-vent-grate',
      'clue-02-tunnel-footprints',
      'clue-02-staged-blood',
      'case-002-parcel-counterfoil',
      'case-002-gate-strip',
      'clue-02-torn-ticket',
      'clue-02-escape-plan-memo'
    ],
    falseAlibiSuspectId: 'suspect-02-isaac',
    statementQuestion: {
      en: 'Whose alibi for the platform crossing fails the time check?',
      bn: 'প্ল্যাটফর্মের ফটক পার হওয়ার সময় মিলিয়ে দেখলে কার অ্যালিবাই খণ্ডিত হয়?'
    },
    fullCaseDebriefing: {
      en: `${officer.family.en} sold the protected room assignment. Only his live seal 6 authenticated the 23:10 release. Its K31 acknowledgement matches the syndicate payment to a betting creditor. ${counsel.family.en} could fund a payment and ${enforcer.family.en} could receive the address. Neither controlled that seal.\n\n${witness.given.en} overheard the traffic. ${sister.given.en} brought clothes and pigment. ${superintendent.given.en} hid a second loan of key P to ${witness.given.en}. The porter stamped his parcel at 19:34, hours before the crossing he claimed to have witnessed. The dry stain predates the forced opening. Two people left tracks down the service passage. At 23:20 the gate opened toward the platform. Voucher 71 and the clerk place ${witness.given.en} voluntarily on the 23:45 train with her drive. ${enforcer.family.en} arrived at 00:30. ${officer.family.en}’s account of an undamaged door and ${witness.given.en} still inside at 00:45 cannot stand.`,
      bn: `${officer.family.bn} সুরক্ষিত ঘরের তথ্য বিক্রি করেন। ২৩:১০-এর বার্তা তাঁর ব্যক্তিগত ৬ নম্বর সিলে অনুমোদিত। K31 স্বীকৃতি সিন্ডিকেটের বাজির পাওনা মেটানোর রসিদের সঙ্গে মেলে। ${counsel.family.bn} অর্থ দিতে এবং ${enforcer.family.bn} ঠিকানা পেতে পারতেন, সিলটি তাঁদের ছিল না।\n\n${witness.given.bn} বার্তা শুনেছিলেন। ${sister.given.bn} পোশাক ও রং আনেন। ${superintendent.given.bn} P চাবিটি দ্বিতীয়বার ${witness.given.bn}কে ধার দেওয়ার কথা লুকিয়েছিলেন। কর্মী তাঁর পার্সেলে ১৯:৩৪-এ সিল দেন, ফটক পার হওয়ার যে সময়ের কথা তিনি দাবি করেছিলেন তার কয়েক ঘণ্টা আগে। দরজা ভাঙার আগেই দাগ শুকিয়েছে। সার্ভিস পথে দুজনের হাঁটার ছাপ পাওয়া গেছে। ২৩:২০-তে ফটকটি প্ল্যাটফর্মের দিকে খোলে। ভাউচার ৭১ ও কর্মীর সাক্ষ্যে ${witness.given.bn} ড্রাইভ নিয়ে ২৩:৪৫-এর ট্রেনে স্বেচ্ছায় ওঠেন। ${enforcer.family.bn} আসেন ০০:৩০-এ। ০০:৪৫-এ অক্ষত দরজা ও ঘরে ${witness.given.bn}কে দেখার যে দাবি ${officer.family.bn} করেছেন, তা মিথ্যা।`
    },
    options: {
      motives: [
        {
          id: 'm-syndicate-bribe',
          label: {
            en: 'A paid disclosure to a creditor',
            bn: 'পাওনা মেটাতে অর্থের বিনিময়ে তথ্য ফাঁস'
          }
        },
        {
          id: 'm-revenge',
          label: {
            en: 'Retaliation over an earlier conviction',
            bn: 'পুরোনো দণ্ডের প্রতিশোধ'
          }
        },
        {
          id: 'm-silence-witness',
          label: {
            en: 'Suppress testimony about local officers',
            bn: 'স্থানীয় অফিসারদের নিয়ে সাক্ষ্য বন্ধ করা'
          }
        },
        {
          id: 'm-extortion',
          label: {
            en: 'Collect a ransom from the family',
            bn: 'পরিবারের কাছে মুক্তিপণ আদায়'
          }
        }
      ],
      methods: [
        {
          id: 'met-staged-escape',
          label: {
            en: 'Voluntary rail departure after a staged struggle',
            bn: 'সাজানো ধস্তাধস্তির পর স্বেচ্ছায় রেলযাত্রা'
          }
        },
        {
          id: 'met-forced-abduction',
          label: {
            en: 'Forced removal through the breached door',
            bn: 'ভাঙা দরজা দিয়ে জোর করে নেওয়া'
          }
        },
        {
          id: 'met-poisoned-vent',
          label: {
            en: 'Planned transfer arranged by court officials',
            bn: 'আদালতের কর্মীদের পরিকল্পিত স্থানান্তর'
          }
        },
        {
          id: 'met-corridor-bludgeon',
          label: {
            en: 'Abduction by car from the service exit',
            bn: 'সার্ভিস দরজা থেকে গাড়িতে অপহরণ'
          }
        }
      ],
      times: [
        {
          id: 't-2320',
          label: {
            en: '23:20–23:45',
            bn: '২৩:২০–২৩:৪৫'
          }
        },
        {
          id: 't-0030',
          label: {
            en: '00:25–00:35',
            bn: '০০:২৫–০০:৩৫'
          }
        },
        {
          id: 't-0045',
          label: {
            en: '00:40–00:50',
            bn: '০০:৪০–০০:৫০'
          }
        },
        {
          id: 't-0115',
          label: {
            en: '01:10–01:20',
            bn: '০১:১০–০১:২০'
          }
        }
      ]
    },
    motiveId: 'm-syndicate-bribe',
    methodId: 'met-staged-escape',
    timeId: 't-2320'
  },
  site: {
    en: 'St. Jude Apartments',
    bn: 'সেন্ট জুড অ্যাপার্টমেন্ট'
  },
  deductions: [
    {
      id: 'inquiry-1',
      question: {
        en: 'Who authenticated the paid release?',
        bn: 'অর্থের বিনিময়ে বার্তাটি কে অনুমোদন দেন?'
      },
      connectionId: 'c2-conn-02',
      evidenceIds: ['clue-02-forced-door', 'clue-02-burner-phone', 'clue-02-navarro-deposit'],
      alternativeConnectionIds: ['case-002-link-5']
    },
    {
      id: 'inquiry-2',
      question: {
        en: 'Which route fits the marked floor?',
        bn: 'মেঝের চিহ্ন কোন পথ সমর্থন করে?'
      },
      connectionId: 'c2-conn-03',
      evidenceIds: ['clue-02-vent-grate', 'clue-02-tunnel-footprints', 'clue-02-staged-blood']
    },
    {
      id: 'inquiry-3',
      question: {
        en: 'Which records date the parcel visit, the passenger crossing and the breach?',
        bn: 'কোন নথিতে পার্সেল তোলা, যাত্রীর ফটক পার হওয়া ও দরজা ভাঙার আলাদা সময় মেলে?'
      },
      connectionId: 'c2-conn-04',
      evidenceIds: ['clue-02-torn-ticket', 'clue-02-escape-plan-memo', 'clue-02-forced-door', 'case-002-parcel-counterfoil', 'case-002-gate-strip'],
      alternativeConnectionIds: ['case-002-link-6', 'c2-link-platform-clock', 'c2-link-porter-alibi']
    }
  ]
};
