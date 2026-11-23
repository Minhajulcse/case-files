import { CaseData } from '../../types/game';

export const case001: CaseData = {
  id: 'case-001',
  caseNumber: 'CASE 001',
  title: {
    en: 'THE LAST ALIBI',
    bn: 'শেষ অ্যালিবাই'
  },
  subtitle: {
    en: 'A Locked Manor, Five Suspects, and a Calculated Deception',
    bn: 'একটি বন্ধ প্রাসাদ, পাঁচজন সন্দেহভাজন এবং একটি সুপরিকল্পিত প্রতারণা'
  },
  badge: 'MURDER',
  difficulty: 'Hard',
  estimatedTime: '30-45 mins',
  victimOrSubject: {
    en: 'Mahmudul Haque Chowdhury (Age 64, Industrialist & Antiquities Collector)',
    bn: 'মাহমুদুল হক চৌধুরী (বয়স ৬৪, শিল্পপতি ও প্রাচীন প্রত্নতত্ত্ব সংগ্রাহক)'
  },
  incidentDate: {
    en: 'October 14, 2024 — 22:30 Hours',
    bn: '১৪ অক্টোবর, ২০২৪ — রাত ১০:৩০ টা'
  },
  location: {
    en: 'Chowdhury Mansion, Private Study, Blackthorn Ridge',
    bn: 'চৌধুরী ম্যানর, ব্যক্তিগত পড়ার ঘর, ব্ল্যাকথর্ন রিজ'
  },
  synopsis: {
    en: 'Mahmudul Haque Chowdhury was found slumped over his mahogany desk inside his private study, poisoned with potassium cyanide in his vintage brandy. The study door was heavy oak, bolted from the inside. The single bay window was latched shut from inside. Five people were inside the mansion during the storm. Each claims an ironclad alibi, but one of them orchestrated an impossible crime.',
    bn: 'মাহমুদুল হক চৌধুরীকে তার ব্যক্তিগত পড়ার ঘরের মেহগনি টেবিলের ওপর নিথর অবস্থায় পাওয়া যায়। তার ব্র্যান্ডির গ্লাসে মেশানো ছিল মারাত্মক পটাশিয়াম সায়ানাইড। মেহগনির ভারী দরজাটি ভেতর থেকে ছিটকিনি আটকানো ছিল এবং একমাত্র জানালাটিও ভেতর থেকেই বন্ধ ছিল। ঝড়ের রাতে প্রাসাদে মাত্র পাঁচজন লোক উপস্থিত ছিল। প্রত্যেকেরই রয়েছে নিশ্ছিদ্র অ্যালিবাই, কিন্তু তাদের একজনই ঘটিয়েছে এই আপাত অসম্ভব হত্যাকাণ্ড।'
  },
  briefing: {
    chiefMemo: {
      en: 'Detective, the local precinct is baffled. The coroner confirms Mahmudul Haque Chowdhury died between 22:00 and 22:30 from rapid cyanide intoxication. The study was locked tight; the staff had to break the door with an axe at 23:05 when he failed to answer. Meticulously examine the room, interrogate all five suspects, connect physical clues to shatter the false alibi, and deliver the indictment.',
      bn: 'গোয়েন্দা, স্থানীয় থানা এই রহস্যের কূলকিনারা করতে পারছে না। ময়নাতদন্তের রিপোর্ট অনুযায়ী রাত ১০:০০ থেকে ১০:৩০-এর মধ্যে সায়ানাইডের তীব্র বিষক্রিয়ায় মাহমুদুল হক চৌধুরীর মৃত্যু ঘটে। পড়ার ঘরটি ভেতর থেকে সম্পূর্ণ অবরুদ্ধ ছিল; কোনো সাড়াশব্দ না পেয়ে রাত ১১:০৫-এ কুঠার দিয়ে দরজা ভেঙে কর্মচারীরা ভেতরে ঢোকে। অপরাধস্থল খুঁটিয়ে দেখুন, পাঁচজন সন্দেহভাজনকে জেরা করুন এবং আলামতগুলো যুক্ত করে মিথ্যা অ্যালিবাই ভেঙে অপরাধীকে আইনের আওতায় আনুন।'
    },
    initialStatus: {
      en: 'Study sealed under police tape. Coroner report pending review.',
      bn: 'পড়ার ঘরটি পুলিশের টেপ দিয়ে সিলগালা করা। ময়নাতদন্ত রিপোর্ট পর্যালোচনার অপেক্ষায়।'
    },
    keyObjectives: [
      {
        en: 'Investigate Mahmudul Haque Chowdhury\'s locked study for hidden physical anomalies.',
        bn: 'মাহমুদুল হক চৌধুরীর তালাবদ্ধ পড়ার ঘরে কোনো শারীরিক বা যান্ত্রিক অসঙ্গতি আছে কিনা তা অনুসন্ধান করুন।'
      },
      {
        en: 'Uncover the source and delivery mechanism of the potassium cyanide.',
        bn: 'পটাশিয়াম সায়ানাইডের উৎস এবং তা কীভাবে পানীয়তে মেশানো হয়েছিল তা উদঘাটন করুন।'
      },
      {
        en: 'Examine the locked room mechanism — how did the killer seal it from the outside?',
        bn: 'বদ্ধ ঘরের রহস্য উন্মোচন করুন — বাইরে থেকে কীভাবে ছিটকিনি আটকানো সম্ভব হয়েছিল?'
      },
      {
        en: 'Cross-examine the 5 suspects and detect contradictions in their timelines.',
        bn: 'পাঁচজন সন্দেহভাজনকে জেরা করুন এবং তাদের সময়রেখার অসঙ্গতি ও মিথ্যা শনাক্ত করুন।'
      },
      {
        en: 'Identify the killer, the true motive, the method, and the false alibi.',
        bn: 'প্রকৃত খুনি, হত্যাকাণ্ডের আসল উদ্দেশ্য, ব্যবহৃত কৌশল এবং মিথ্যা অ্যালিবাই প্রমাণসহ দাখিল করুন।'
      }
    ]
  },
  crimeScene: {
    roomTitle: {
      en: 'Chowdhury Mansion — The Private Study',
      bn: 'চৌধুরী ম্যানর — ব্যক্তিগত পড়ার ঘর'
    },
    roomDescription: {
      en: 'A cavernous Victorian study lined with floor-to-ceiling bookshelves, a heavy Persian carpet, a blazing marble fireplace, an antique grandfather clock, a crystal liquor sideboard, and a large mahogany desk where Mahmudul Haque Chowdhury drew his last breath.',
      bn: 'একটি সুবিশাল ভিক্টোরিয়ান আমলের পড়ার ঘর। ছাদ পর্যন্ত বইয়ের তাক, মেঝেতে ভারী পারস্য গালিচা, মার্বেলের ফায়ারপ্লেস, প্রাচীন গ্র্যান্ডফাদার ক্লক, কাচের পানীয় সাইডবোর্ড এবং মেহগনি কাঠের তৈরি বিশাল টেবিল যেখানে মাহমুদুল হক চৌধুরী শেষ নিঃশ্বাস ত্যাগ করেন।'
    },
    sceneTheme: 'victorian_study',
    imageUrl: '/assets/cases/case001.png',
    hotspots: [
      {
        id: 'hs-01-clock',
        name: {
          en: 'Antique Grandfather Clock',
          bn: 'প্রাচীন গ্র্যান্ডফাদার ক্লক'
        },
        x: 9.5,
        y: 19.0,
        radius: 28,
        description: {
          en: 'A towering brass pendulum grandfather clock. The glass face is fractured, and the brass hands are frozen.',
          bn: 'পিতলের পেণ্ডুলামযুক্ত সুবিশাল ঘড়ি। কাচের ডায়ালটি চূর্ণবিচূর্ণ এবং কাঁটা দুটি স্থির হয়ে থেমে আছে।'
        },
        revealsEvidenceId: 'clue-03-stopped-clock',
        discoveryNote: {
          en: 'The clock hands are arrested precisely at 22:14. Inside the casing lies a heavy bronze paperweight, apparently hurled across the room during a sudden, violent motor convulsion.',
          bn: 'ঘড়ির কাঁটা ঠিক রাত ১০:১৪ মিনিটে স্থির হয়ে আছে। ঘড়ির খোলসের ভেতর একটি ভারী ব্রোঞ্জের পেপারওয়েট পাওয়া গেছে, যা বিষক্রিয়ার তীব্র খিঁচুনির সময় ছিটকে এসে ঘড়িতে আঘাত করেছিল।'
        },
        iconType: 'magnifier',
        focusRect: {
          x: 4.5,
          y: 7.0,
          width: 10.0,
          height: 28.0
        }
      },
      {
        id: 'hs-01-window',
        name: {
          en: 'Leaded Glass Bay Window',
          bn: 'কাচের খড়খড়িযুক্ত বে উইন্ডো'
        },
        x: 29.0,
        y: 34.5,
        radius: 26,
        description: {
          en: 'A leaded mullion window overlooking the rain-swept rose garden. The interior brass cam latch is in the locked horizontal position.',
          bn: 'বৃষ্টিস্নাত গোলাপ বাগানের দিকে মুখ করা একটি জানালা। ভেতরের পিতলের ছিটকিনিটি আনুভূমিকভাবে বন্ধ অবস্থায় রয়েছে।'
        },
        revealsEvidenceId: 'clue-05-window-latch',
        discoveryNote: {
          en: 'Inspection of the window frame reveals fine beeswax residue and microscopic scratch grooves along the brass latch axle, suggesting mechanical manipulation from outside the frame.',
          bn: 'জানালার ফ্রেমে মোমের সূক্ষ্ম অবশিষ্টাংশ এবং ছিটকিনির কব্জায় সূক্ষ্ম দাগ পাওয়া গেছে, যা বাইরে থেকে কোনো যান্ত্রিক কারসাজির ইঙ্গিত দেয়।'
        },
        iconType: 'magnifier',
        focusRect: {
          x: 23.0,
          y: 24.0,
          width: 12.0,
          height: 21.0
        }
      },
      {
        id: 'hs-01-garden-sill',
        name: {
          en: 'Exterior Window Sill (Rose Garden)',
          bn: 'বাইরের জানালার কার্নিশ (গোলাপ বাগান)'
        },
        x: 29.0,
        y: 46.5,
        radius: 22,
        description: {
          en: 'The muddy terrace bed immediately beneath the study window among the rose thorns.',
          bn: 'পড়ার ঘরের জানালার ঠিক নিচের ভেজা কাদা এবং গোলাপের ঝোপের মধ্যবর্তী অংশ।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-07-nylon-thread',
        discoveryNote: {
          en: 'Trapped on a rose thorn directly below the study window: a 40cm strand of high-tensile waxed nylon monofilament and a size 6 dress shoe print in the rain-softened earth.',
          bn: 'গোলাপের কাঁটায় আটকে থাকা ৪০ সেন্টিমিটার লম্বা মোম মাখানো শক্ত নাইলন সুতো এবং নরম কাদামাটিতে ৬ সাইজের একটি সরু জুতার ছাপ।'
        },
        iconType: 'footprint',
        focusRect: {
          x: 23.0,
          y: 41.0,
          width: 12.0,
          height: 18.0
        }
      },
      {
        id: 'hs-01-desk',
        name: {
          en: 'Mahmudul Haque Chowdhury (Victim)',
          bn: 'মাহমুদুল হক চৌধুরী (মরদেহ)'
        },
        x: 52.0,
        y: 51.0,
        radius: 30,
        description: {
          en: 'Mahmudul Haque Chowdhury is slumped face-forward over the polished mahogany desk. There are no signs of blunt trauma or struggle, but his fingers are stiffened in agony.',
          bn: 'মেহগনি টেবিলের ওপর মুখ থুবড়ে পড়ে আছেন মাহমুদুল হক চৌধুরী। মাথায় কোনো আঘাতের চিহ্ন নেই, তবে তার হাত ও মুখমণ্ডল তীব্র খিঁচুনির যন্ত্রণায় শক্ত হয়ে আছে।'
        },
        revealsEvidenceId: 'clue-01-brandy-snifter',
        discoveryNote: {
          en: 'The victim collapsed suddenly while writing. Beside his outstretched hand lies an overturned crystal snifter emitting the faint, bitter scent of potassium cyanide.',
          bn: 'লিখতে লিখতে হঠাৎই জ্ঞান হারিয়ে পড়ে যান তিনি। লাশের ডান হাতের কাছে পড়ে থাকা কাচের গ্লাস থেকে তেতো বাদামের গন্ধ ছড়াচ্ছে — পটাশিয়াম সায়ানাইড।'
        },
        iconType: 'magnifier',
        focusRect: {
          x: 45.0,
          y: 42.0,
          width: 14.0,
          height: 19.0
        }
      },
      {
        id: 'hs-01-glass',
        name: {
          en: 'Overturned Crystal Brandy Snifter',
          bn: 'উল্টে থাকা ক্রিস্টালের ব্র্যান্ডি গ্লাস'
        },
        x: 46.8,
        y: 60.0,
        radius: 20,
        description: {
          en: 'A heavy lead-crystal snifter lying on its side, surrounded by a shallow amber puddle on the varnished wood.',
          bn: 'টেবিলের ওপর কাত হয়ে পড়ে থাকা ভারী ক্রিস্টাল গ্লাস এবং চারপাশে ছড়িয়ে থাকা ব্র্যান্ডির তরল।'
        },
        revealsEvidenceId: 'clue-01-brandy-snifter',
        discoveryNote: {
          en: 'Forensic droplet swab confirms 120mg of potassium cyanide in the amber puddle. The crystal surface is wiped clean of fingerprints, indicating gloves were used.',
          bn: 'রাসায়নিক পরীক্ষায় তরলে ১২০ মিলিগ্রাম পটাশিয়াম সায়ানাইড নিশ্চিত হয়েছে। গ্লাসে কোনো আঙুলের ছাপ নেই, যা নির্দেশ করে এটি গ্লাভস পরে ধরা হয়েছিল।'
        },
        iconType: 'flask',
        focusRect: {
          x: 43.0,
          y: 54.0,
          width: 8.0,
          height: 12.0
        }
      },
      {
        id: 'hs-01-ledger',
        name: {
          en: 'Audited Financial Ledger',
          bn: 'আর্থিক হিসেবের খাতা (লেজার)'
        },
        x: 55.2,
        y: 57.5,
        radius: 25,
        description: {
          en: 'A leather-bound estate ledger with freshly annotated audit marks in red ink.',
          bn: 'চামড়ায় বাঁধানো এস্টেট লেজার, যাতে লাল কালিতে সদ্য নিরীক্ষার দাগ ও নোট দেওয়া আছে।'
        },
        revealsEvidenceId: 'clue-02-audited-ledger',
        discoveryNote: {
          en: 'Mahmudul\'s final notes highlight a massive $450,000 deficit in the endowment accounts across the archive and trust funds. Underneath is written: "Irregularities confirmed. Summons with Crown Prosecutor scheduled for morning."',
          bn: 'খোলা লেজারে সাড়ে চার লাখ ডলারের বড় তহবিল তছরুপের হিসাব লাল কালিতে চিহ্নিত। নিচে মাহমুদুল সাহেবের লেখা নোট: "অনিয়ম প্রমাণিত। সকালে সরকারি কৌঁসুলির সাথে বৈঠকের ব্যবস্থা করতে হবে।"'
        },
        iconType: 'document',
        focusRect: {
          x: 51.0,
          y: 52.0,
          width: 9.0,
          height: 13.0
        }
      },
      {
        id: 'hs-01-fireplace',
        name: {
          en: 'Marble Fireplace & Hearth',
          bn: 'মার্বেল পাথরের ফায়ারপ্লেস'
        },
        x: 77.5,
        y: 39.0,
        radius: 25,
        description: {
          en: 'Dying embers glow in the marble hearth. Among the gray ashes rests a partially charred sheet of parchment.',
          bn: 'ফায়ারপ্লেসে নিভে আসা কয়লা। ছাইয়ের স্তূপের মাঝে আধপোড়া একটি আইনি দলিলের টুকরো চোখে পড়ে।'
        },
        revealsEvidenceId: 'clue-06-burnt-will',
        discoveryNote: {
          en: 'Extracted a partially burnt codicil to the estate will cutting off nephew Arman Haque Chowdhury from his trust allowance. Soot patterns match the early evening fire stoking at approximately 17:00.',
          bn: 'ছাইয়ের ভেতর থেকে উদ্ধারকৃত আধপোড়া খসড়ায় ভাইপো আরমান হক চৌধুরীকে এস্টেটের ভাতা থেকে বঞ্চিত করার নির্দেশ রয়েছে। ছাইয়ের স্তর নিশ্চিত করে এটি বিকেল ৫টার দিকে আগুনে ফেলা হয়েছিল।'
        },
        iconType: 'document',
        focusRect: {
          x: 73.0,
          y: 28.0,
          width: 11.0,
          height: 22.0
        }
      },
      {
        id: 'hs-01-liquor',
        name: {
          en: 'Crystal Liquor Sideboard',
          bn: 'ক্রিস্টাল পানীয়ের সাইডবোর্ড'
        },
        x: 94.5,
        y: 53.0,
        radius: 26,
        description: {
          en: 'A silver tray holding an antique crystal decanter of vintage 1948 Armagnac and several clean glasses.',
          bn: 'রূপার ট্রেতে রাখা প্রাচীন ক্রিস্টাল ডিক্যান্টার ভর্তি ১৯৪৮ সালের আরমাগনাক ব্র্যান্ডি ও কয়েকটি পরিষ্কার গ্লাস।'
        },
        revealsEvidenceId: 'clue-04-poisoned-decanter',
        discoveryNote: {
          en: 'Spectroscopic chemical field analysis confirms cyanide salt was mixed directly into the decanter itself, proving the poison was introduced into the bottle before Mahmudul poured his nightcap.',
          bn: 'ল্যাব পরীক্ষায় দেখা গেছে পুরো ডিক্যান্টারের ব্র্যান্ডিতেই সায়ানাইড মেশানো ছিল। এটি প্রমাণ করে মাহমুদুল সাহেব গ্লাসে ঢালার আগেই বোতলে বিষ দেওয়া হয়েছিল।'
        },
        iconType: 'flask',
        focusRect: {
          x: 90.0,
          y: 46.0,
          width: 9.0,
          height: 16.0
        }
      },
      {
        id: 'hs-01-wastebasket',
        name: {
          en: 'Under-Desk Wastebasket',
          bn: 'টেবিলের নিচের ময়লার ঝুড়ি'
        },
        x: 65.5,
        y: 80.0,
        radius: 20,
        description: {
          en: 'A brass wastebasket tucked beneath the mahogany kneehole desk.',
          bn: 'মেহগনি টেবিলের নিচে রাখা একটি পিতলের ময়লা ফেলার পাত্র।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-08-torn-envelope',
        discoveryNote: {
          en: 'Found torn fragments of a commercial invoice from a chemical supplier for photographic toning reagents (potassium cyanide salt), shipped to an antiquarian PO Box in Blackthorn Ridge.',
          bn: 'টেবিলের নিচের ঝুড়িতে একটি ছেঁড়া বাণিজ্যিক রসিদ পাওয়া গেছে — যাতে ফটোগ্রাফিক রাসায়নিকের নামে পটাশিয়াম সায়ানাইড কেনার অর্ডার ও পোস্ট বক্স নম্বর রয়েছে।'
        },
        iconType: 'document',
        focusRect: {
          x: 61.0,
          y: 73.0,
          width: 11.0,
          height: 17.0
        }
      }
    ]
  },
  suspects: [
    {
      id: 'suspect-01-julian',
      name: {
        en: 'Arman Haque Chowdhury',
        bn: 'আরমান হক চৌধুরী'
      },
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
        en: 'Saddled with $300,000 in loan shark debts due at midnight; uncle threatened to disinherit him completely.',
        bn: 'মাঝরাতের মধ্যে ৩ লাখ ডলারের জুয়ার দেনা পরিশোধের চাপ ছিল; কাকা তাকে উইল থেকে সম্পূর্ণ বাদ দেওয়ার হুমকি দেন।'
      },
      alibi: {
        en: 'Claims he was locked in the mansion billiard room from 21:30 to 22:45 practicing his trick shots while drinking whiskey.',
        bn: 'তার দাবি রাত ৯:৩০ থেকে ১০:৪৫ পর্যন্ত সে বিলিয়ার্ড রুমে একা একা হুইস্কি খাচ্ছিল এবং খেলছিল।'
      },
      personality: {
        en: 'Nervous, arrogant, sweat beads on his brow, chain-smoker.',
        bn: 'নার্ভাস, দাম্ভিক, কপালে ঘামের ফোঁটা, ঘন ঘন সিগারেট টানে।'
      },
      secrets: {
        en: 'Stole Mahmudul\'s diamond signet ring earlier that afternoon to pawn it.',
        bn: 'সেদিন বিকেলে কাকার আলমারি থেকে পারিবারিক হীরার আংটি চুরি করে বন্ধক দিয়েছিল।'
      },
      avatarSeed: 'Arman',
      avatarColor: '#c2410c',
      dialogueTree: [
        {
          id: 'dlg-j-1',
          prompt: {
            en: 'Where were you between 22:00 and 22:30 tonight?',
            bn: 'রাত ১০:০০ থেকে ১০:৩০-এর মধ্যে আপনি কোথায় ছিলেন?'
          },
          response: {
            en: 'I already told your deputies! I was in the billiard room alone, playing nine-ball and trying to drown out the thunderstorm with Scotch. I didn\'t leave until Shahana started screaming at 23:00.',
            bn: 'আমি আপনার অফিসারদের আগেই বলেছি! আমি বিলিয়ার্ড রুমে একা ছিলাম, নাইন-বল খেলছিলাম আর স্কচ খাচ্ছিলাম। রাত ১১টায় শাহানার চিৎকার শোনার আগ পর্যন্ত আমি বের হইনি।'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-j-2',
          prompt: {
            en: 'Did your uncle threaten to cut you out of his will today?',
            bn: 'আপনার কাকা কি আজ আপনাকে উইল থেকে বাদ দেওয়ার হুমকি দিয়েছিলেন?'
          },
          response: {
            en: 'He... he was always threatening that! Uncle Mahmudul enjoyed holding the purse strings over my neck. But I wouldn\'t kill him! He was my only lifeline to the estate trustees!',
            bn: 'তিনি... তিনি প্রায়ই এই হুমকি দিতেন! কাকা মাহমুদুল হক চৌধুরী আমাকে সবসময় চাপে রাখতেন। কিন্তু তাই বলে আমি তাকে খুন করতে যাব কেন? তিনিই তো ছিলেন আমার একমাত্র ভরসা!'
          },
          reactionMood: 'nervous'
        },
        {
          id: 'dlg-j-3',
          prompt: {
            en: 'Did you enter Mahmudul\'s study at any point this evening?',
            bn: 'আজ সন্ধ্যায় কি আপনি পড়ার ঘরে ঢুকেছিলেন?'
          },
          response: {
            en: 'At 17:00, yes. We had a row about my debts. He locked the study door right behind me when I stormed out. I never stepped foot back in that room.',
            bn: 'বিকেল ৫টায় ঢুকেছিলাম। দেনা নিয়ে তুমুল ঝগড়া হয়। আমি বের হওয়ার পর তিনি দরজা বন্ধ করে দিয়েছিলেন। এরপর আর ওমুখো হইনি।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-j-4',
          prompt: {
            en: 'Did you know who had access to the liquor sideboard?',
            bn: 'সাইডবোর্ডের পানীয়তে কার কার হাত দেওয়ার সুযোগ ছিল?'
          },
          response: {
            en: 'Uncle never let me touch his vintage Armagnac. Shahana always brought it up at 21:45, and Nawrin handled all his correspondence and desk keys. If someone poisoned that bottle, they had to be close to his evening routine.',
            bn: 'কাকা আমাকে কখনই তার দামি আরমাগনাকে হাত দিতে দিতেন না। শাহানা প্রতি রাত ৯:৪৫-এ ওটা নিয়ে আসত, আর নওরীন কাকার যাবতীয় চিঠিপত্র ও টেবিলের চাবি দেখাশোনা করত।'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-06-burnt-will',
          reactionText: {
            en: 'Arman bluffs, his hands shaking: "That burnt codicil? Uncle Mahmudul threw it into the hearth right in front of me during our argument at five o\'clock! He shouted at me, but the fire wasn\'t hot enough to consume the seal."',
            bn: 'আরমান কেঁপে ওঠে: "ওই আধপোড়া উইল? বিকেল ৫টায় ঝগড়ার সময় কাকা নিজেই ওটা আগুনে ফেলে দিয়েছিলেন! তিনি চিৎকার করছিলেন, কিন্তু আগুনে ওটা পুরো পোড়েনি।"'
          },
          stressIncrease: 20,
          exposesLie: false
        },
        {
          evidenceId: 'clue-09-pawn-receipt',
          reactionText: {
            en: 'Arman pales: "Fine! I took his signet ring from the hallway coat! I was desperate for cash! But stealing jewelry doesn\'t make me a poisoner! The receipt was stamped at 16:15!"',
            bn: 'আরমান ফ্যাকাশে হয়ে বলে: "ঠিক আছে! আমি স্বীকার করছি কোটের পকেট থেকে আংটিটা আমিই নিয়েছিলাম! টাকার খুব দরকার ছিল! কিন্তু রসিদ দেখুন বিকেল ৪:১৫-র! চোর হলেই তো আর খুনি হওয়া যায় না!"'
          },
          stressIncrease: 35,
          exposesLie: true
        },
        {
          evidenceId: 'clue-01-brandy-snifter',
          reactionText: {
            en: 'Arman shudders: "Cyanide? God in heaven. I was begging him for money, not plotting to poison him in a locked room!"',
            bn: 'আরমান শিউরে ওঠে: "সায়ানাইড? আল্লাহ রক্ষা করুন! আমি তো শুধু টাকার জন্য কাকার কাছে চেয়েছিলাম, বিষ দিয়ে মারার কোনো ফন্দি আমার ছিল না!"'
          },
          stressIncrease: 15
        }
      ]
    },
    {
      id: 'suspect-02-evelyn',
      name: {
        en: 'Nawrin Sultana',
        bn: 'নওরীন সুলতানা'
      },
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
        en: 'Mahmudul discovered Nawrin was systematically siphoning funds from the Chowdhury Rare Books Endowment into private Swiss accounts.',
        bn: 'মাহমুদুল হক চৌধুরী আবিষ্কার করেছিলেন যে নওরীন ট্রাস্ট ফান্ডের সাড়ে চার লাখ ডলার গোপনে নিজের অ্যাকাউন্টে সরিয়ে নিচ্ছিলেন।'
      },
      alibi: {
        en: 'Claims she was in the library cataloging manuscripts until 22:40, then knocked on Mahmudul\'s door at 22:30 and heard him cough and grumble inside.',
        bn: 'দাবি করে যে রাত ১০:৪০ পর্যন্ত সে লাইব্রেরিতে ছিল, এবং রাত ১০:৩০-এ পড়ার ঘরের দরজায় নক করলে মাহমুদুল সাহেব ভেতর থেকে তাকে চলে যেতে বলেন।'
      },
      personality: {
        en: 'Composed, articulate, wearing prim spectacles, remarkably calm under pressure.',
        bn: 'অত্যন্ত শান্ত, মাপা কথা, চোখে চশমা, তীব্র চাপের মুখেও অবিচল।'
      },
      secrets: {
        en: 'An expert bookbinder who uses waxed nylon monofilament and specialized knotting tools.',
        bn: 'বই বাঁধাই ও সূচিকর্মে দক্ষ, যে মোম মাখানো শক্ত নাইলন সুতো ব্যবহার করে।'
      },
      avatarSeed: 'Nawrin',
      avatarColor: '#0284c7',
      dialogueTree: [
        {
          id: 'dlg-e-1',
          prompt: {
            en: 'Walk me through your movements around 22:00 to 22:30.',
            bn: 'রাত ১০:০০ থেকে ১০:৩০-এর মধ্যে আপনি কী করছিলেন?'
          },
          response: {
            en: 'I was in the east library cross-referencing auction receipts. At approximately 22:30, I walked past the study to deliver the evening mail. I tapped on the door. Mr. Chowdhury called out from inside: "Leave me, Nawrin, I am indisposed!" So I placed the letters on the credenza outside.',
            bn: 'আমি পূর্ব লাইব্রেরিতে নিলামের রসিদ মেলাচ্ছিলাম। প্রায় ১০:৩০ নাগাদ চিঠি দিতে এসে দরজায় মৃদু টোকা দিই। চৌধুরী সাহেব ভেতর থেকে গম্ভীর গলায় বললেন: "আমাকে একা থাকতে দাও নওরীন, আমি অসুস্থ বোধ করছি!" তাই চিঠিগুলো বাইরের টেবিলে রেখে যাই।'
          },
          reactionMood: 'calm',
          revealsContradictionId: 'contra-evelyn-time'
        },
        {
          id: 'dlg-e-2',
          prompt: {
            en: 'Did Mahmudul mention anything about the financial audit?',
            bn: 'মাহমুদুল সাহেব কি আর্থিক নিরীক্ষা বা অডিট নিয়ে কিছু বলেছিলেন?'
          },
          response: {
            en: 'He mentioned standard quarterly audits. Our records are impeccably maintained, detective. I have dedicated seven years of my life to preserving his archives.',
            bn: 'তিনি নিয়মিত ত্রৈমাসিক অডিটের কথা বলেছিলেন। আমাদের নথি সম্পূর্ণ নিখুঁত, গোয়েন্দা। আমি সাত বছর ধরে সততার সাথে তার কাজ করে আসছি।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-e-3',
          prompt: {
            en: 'Do you have keys to the study or the garden terrace?',
            bn: 'আপনার কাছে কি পড়ার ঘরের বা বাগানের টেরাসের চাবি আছে?'
          },
          response: {
            en: 'Only Mahmudul held the master key to the study deadbolt. When he locked himself in, not even Shahana or I could enter without him opening it.',
            bn: 'কেবলমাত্র মাহমুদুল সাহেবের কাছেই পড়ার ঘরের চাবি থাকত। তিনি ভেতর থেকে লক করলে কারও পক্ষেই ঢোকা সম্ভব ছিল না।'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-e-4',
          prompt: {
            en: 'What materials do you use in restoring rare books in the archive?',
            bn: 'লাইব্রেরিতে পুরনো বই বাঁধাইয়ের জন্য আপনি কী কী উপাদান ব্যবহার করেন?'
          },
          response: {
            en: 'Specialized acid-free paste, bone folders, calf leather, and high-tensile waxed bookbinding filaments. We take preservation very seriously here.',
            bn: 'বিশেষ অ্যাসিড-মুক্ত আঠা, হাড্ডির তৈরি ফোল্ডার, চামড়া এবং মোম মাখানো শক্ত নাইলন সুতো। আমরা ঐতিহ্যের সংরক্ষণকে অত্যন্ত গুরুত্ব দিই।'
          },
          reactionMood: 'calm',
          conditionClueId: 'clue-07-nylon-thread'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-stopped-clock',
          reactionText: {
            en: 'Nawrin\'s mask slips for a fraction of a second: "The grandfather clock stopped at 22:14? That... that must be a coincidence or a mechanical fault! I am certain I heard his voice at 22:30!"',
            bn: 'নওরীনের মুখ নিমেষে ফ্যাকাশে হয়ে যায়: "ঘড়ি রাত ১০:১৪ মিনিটে থেমে গেছে? ওটা নিশ্চয়ই কোনো কাকতালীয় যান্ত্রিক ত্রুটি! আমি শপথ করে বলছি রাত ১০:৩০-এ তার গলা শুনেছি!"'
          },
          stressIncrease: 35,
          exposesLie: true
        },
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: {
            en: 'Nawrin recoils slightly: "High-tensile waxed nylon thread? I... I use that thread for rebinding 18th-century leather folios in the archive. Why would that be on the garden sill?"',
            bn: 'নওরীন কিছুটা শিউরে ওঠে: "মোম মাখানো নাইলনের সুতো? ওটা তো আমি লাইব্রেরির পুরনো দুর্লভ বই বাঁধাইয়ের জন্য ব্যবহার করি। ওটা বাগানের কার্নিশে কীভাবে গেল?"'
          },
          stressIncrease: 50,
          exposesLie: true
        },
        {
          evidenceId: 'clue-02-audited-ledger',
          reactionText: {
            en: 'Nawrin tightens her lips: "Mr. Chowdhury was growing paranoid in his old age. Those red annotations are speculative figures, nothing more."',
            bn: 'নওরীন ঠোঁট চেপে ধরে: "বৃদ্ধ বয়সে চৌধুরী সাহেব সবাইকে সন্দেহ করতেন। লাল কালির ওই হিসেবগুলো কাল্পনিক অনুমান ছাড়া কিছুই নয়।"'
          },
          stressIncrease: 30
        },
        {
          evidenceId: 'clue-10-handwriting-sample',
          reactionText: {
            en: 'Nawrin pales, her hands clasping tightly: "My catalog cards? You cannot link legitimate archive records to a forged slip from an apothecary merchant!"',
            bn: 'নওরীন তীব্র নার্ভাস হয়ে হাত চেপে ধরে: "আমার ক্যাটালগ কার্ড? লাইব্রেরির বৈধ লেখার সাথে কোনো কালোবাজারি রসিদের মিল খুঁজলে সেটা ঘোর অন্যায় হবে!"'
          },
          stressIncrease: 40,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-03-finch',
      name: {
        en: 'Dr. Farhan Rahman',
        bn: 'ডা. ফারহান রহমান'
      },
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
        en: 'Mahmudul threatened to report Dr. Farhan to the medical board for illegally prescribing experimental narcotics.',
        bn: 'নিষিদ্ধ ও পরীক্ষামূলক ঘুমের ওষুধ প্রেসক্রাইব করার দায়ে মাহমুদুল সাহেব ডা. ফারহানকে মেডিকেল কাউন্সিলে রিপোর্ট করার হুঁশিয়ারি দিয়েছিলেন।'
      },
      alibi: {
        en: 'Claims he was in the mansion guest room reading medical journals from 21:00 onwards until alerted by the commotion.',
        bn: 'দাবি করেন রাত ৯টা থেকে তিনি গেস্টরুমে বসে গবেষণাপত্র পড়ছিলেন।'
      },
      personality: {
        en: 'Weary, dignified, smell of antiseptic and pipe tobacco, trembling fingers.',
        bn: 'ক্লান্ত কিন্তু গম্ভীর, অ্যান্টিসেপ্টিক ও পাইপের গন্ধযুক্ত, হাত সামান্য কাঁপে।'
      },
      secrets: {
        en: 'Keeps a locked travel bag containing pharmaceutical grade toxins and sedatives.',
        bn: 'তার ব্যাগে তীব্র বিষাক্ত ওষুধ ও ঘুমের ইনজেকশন লক করা আছে।'
      },
      avatarSeed: 'Farhan',
      avatarColor: '#16a34a',
      dialogueTree: [
        {
          id: 'dlg-f-1',
          prompt: {
            en: 'What was your professional assessment of Mahmudul\'s health recently?',
            bn: 'সাম্প্রতিক সময়ে মাহমুদুল সাহেবের শারীরিক অবস্থা কেমন ছিল?'
          },
          response: {
            en: 'Mahmudul suffered from chronic hypertension and mild angina. I prescribed digitalis and mild sedatives. He was irritable, under great stress from family disputes, but physically resilient.',
            bn: 'মাহমুদুল সাহেবের উচ্চ রক্তচাপ এবং অ্যানজাইনা ছিল। আমি তাকে হালকা সিডেটিভ দিতাম। পারিবারিক কলহের কারণে তিনি বেশ মানসিক চাপে ছিলেন।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-f-2',
          prompt: {
            en: 'Do you carry potassium cyanide in your medical kit?',
            bn: 'আপনার চিকিৎসা কিটে কি পটাশিয়াম সায়ানাইড থাকে?'
          },
          response: {
            en: 'Heavens, no! Cyanide has no legitimate therapeutic purpose in modern clinical medicine. As a chemist, I know its lethal nature — death occurs within minutes of ingestion via cellular asphyxiation.',
            bn: 'ঈশ্বরের দোহাই, কখনই না! আধুনিক চিকিৎসায় সায়ানাইডের কোনো বৈধ ব্যবহার নেই। এর বিষক্রিয়ায় কোষে অক্সিজেন পৌঁছানো বন্ধ হয়ে কয়েক মিনিটের মধ্যে মৃত্যু ঘটে।'
          },
          reactionMood: 'surprised'
        },
        {
          id: 'dlg-f-3',
          prompt: {
            en: 'Did you prepare or serve Mahmudul\'s drinks this evening?',
            bn: 'আজ সন্ধ্যায় কি আপনি মাহমুদুল সাহেবকে কোনো পানীয় পরিবেশন করেছিলেন?'
          },
          response: {
            en: 'Certainly not. Mahmudul was fiercely ritualistic. Every night at 21:50, Shahana set the crystal Armagnac decanter on his study sideboard, and he poured his own nightcap.',
            bn: 'একদমই না। মাহমুদুল সাহেবের নির্দিষ্ট নিয়ম ছিল। প্রতি রাতে ৯:৫০-এ শাহানা তার সাইডবোর্ডে ব্র্যান্ডির বোতল রেখে আসত, আর তিনি নিজে ঢেলে খেতেন।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-f-4',
          prompt: {
            en: 'What are the exact toxicological mechanics of potassium cyanide?',
            bn: 'পটাশিয়াম সায়ানাইড মানবদেহে কীভাবে কাজ করে এবং কত দ্রুত মৃত্যু ঘটায়?'
          },
          response: {
            en: 'It inhibits cytochrome c oxidase within mitochondrial cells. Within 3 to 5 minutes of ingestion, the patient suffers violent convulsive spasms and rapid respiratory arrest. Whoever was with him at 22:14 witnessed the end.',
            bn: 'এটি কোষের সাইটোক্রোম অক্সিডেজ নিষ্ক্রিয় করে। খাওয়ার ৩ থেকে ৫ মিনিটের মধ্যে তীব্র খিঁচুনি ও শ্বাসকষ্ট হয়ে মৃত্যু ঘটে। রাত ১০:১৪ মিনিটে যে ঘরে ছিল সে তার মৃত্যুচক্ষু দেখেছে।'
          },
          reactionMood: 'calm',
          conditionClueId: 'clue-01-brandy-snifter'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-04-poisoned-decanter',
          reactionText: {
            en: 'Dr. Farhan peers closely: "Remarkable. The poison was dissolved in the decanter itself, not merely smeared on the rim. Whoever did this had advance access to the study before it was sealed."',
            bn: 'ডা. ফারহান ঝুঁকে দেখেন: "ভয়াবহ কাণ্ড! বিষ সরাসরি ডিক্যান্টারের ভেতরের তরলে মেশানো হয়েছিল, গ্লাসে নয়। যে এটা করেছে সে ঘর বন্ধ হওয়ার আগেই ভেতরে ঢুকেছিল।"'
          },
          stressIncrease: 10
        },
        {
          evidenceId: 'clue-08-torn-envelope',
          reactionText: {
            en: 'Dr. Farhan inspects the apothecary slip: "This PO box is registered under \'N. S. Antiquarian Books\'. That isn\'t my signature, detective. That is Nawrin Sultana\'s handwriting."',
            bn: 'ডা. ফারহান রসিদটি দেখে বলেন: "এই পিও বক্সটি \'এন. এস. বুকস\'-এর নামে। এটা আমার সই নয়, এটি নিশ্চিতভাবেই নওরীন সুলতানার হাতের লেখা।"'
          },
          stressIncrease: 0,
          revealsClueId: 'clue-10-handwriting-sample'
        },
        {
          evidenceId: 'clue-01-brandy-snifter',
          reactionText: {
            en: 'Dr. Farhan shakes his head: "A lethal dose of potassium cyanide salt. It would have caused sudden violent muscle spasms — enough to overturn furniture or knock a heavy object across the room."',
            bn: 'ডা. ফারহান মাথা নাড়েন: "তীব্র মাত্রার পটাশিয়াম সায়ানাইড। এর খিঁচুনিতে মানুষ ছিটকে পড়ে ভারী জিনিস ভেঙে ফেলতে পারে — যেমনটি ঘড়ির ক্ষেত্রে ঘটেছে।"'
          },
          stressIncrease: 5
        }
      ]
    },
    {
      id: 'suspect-04-beatrice',
      name: {
        en: 'Shahana Begum',
        bn: 'শাহানা বেগম'
      },
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
        en: 'Mahmudul had recently drafted an amendment requiring all household staff to undergo lie detector tests following theft of antique silverware.',
        bn: 'রুপার বাসন চুরির ঘটনায় মাহমুদুল সাহেব সকল গৃহকর্মীকে দিয়ে লাই ডিটেক্টর টেস্ট করানোর ঘোষণা দিয়েছিলেন।'
      },
      alibi: {
        en: 'Was in the kitchen preparing midnight broth with the kitchen maid between 22:00 and 22:45.',
        bn: 'রাত ১০:০০ থেকে ১০:৪৫ পর্যন্ত রান্নাঘরে সুপ তৈরি করছিলেন।'
      },
      personality: {
        en: 'Fretful, religious, clutches a wooden rosary, speaks in hushed whispers.',
        bn: 'ভীতু, ধর্মপ্রাণ, হাতে তসবিহ, ফিসফিস করে কথা বলে।'
      },
      secrets: {
        en: 'Knew about the secret escape door behind the hallway tapestry, but insists it was locked with rusted iron bolts.',
        bn: 'দেওয়ালের গোপন দরজার কথা জানত, তবে সেটি বহু বছর ধরে জং ধরা ছিটকিনিতে বন্ধ।'
      },
      avatarSeed: 'Shahana',
      avatarColor: '#9333ea',
      dialogueTree: [
        {
          id: 'dlg-b-1',
          prompt: {
            en: 'Who was the last person you saw entering Mahmudul\'s study?',
            bn: 'মাহমুদুল সাহেবের পড়ার ঘরে শেষ কাকে ঢুকতে দেখেছিলেন?'
          },
          response: {
            en: 'I brought his hot water and Armagnac decanter to the study door at 21:45. Miss Nawrin was standing right outside with a stack of papers. She took the tray from my hands, saying she would set it inside for Sir.',
            bn: 'আমি রাত ৯:৪৫-এ ব্র্যান্ডির বোতল আর গরম পানির ট্রে নিয়ে যাচ্ছিলাম। মিস নওরীন বাইরে দাঁড়িয়ে ছিলেন। তিনি বললেন, "ট্রেটা আমাকে দাও, আমি স্যারের টেবিলে রেখে আসছি।"'
          },
          reactionMood: 'nervous',
          revealsClueId: 'clue-11-tray-handover'
        },
        {
          id: 'dlg-b-2',
          prompt: {
            en: 'How was the study door locked when you discovered him?',
            bn: 'মরদেহ উদ্ধারের সময় ঘরের দরজাটি কেমন অবস্থায় ছিল?'
          },
          response: {
            en: 'Oh merciful Allah, the brass deadbolt was turned all the way in! The heavy iron key was sitting on the inside keyhole! We had to strike the frame with the woodcutter\'s axe to breach it!',
            bn: 'হে আল্লাহ! ভেতরের ছিটকিনিটি পুরোপুরি লাগানো ছিল! চাবিটিও ভেতরের ফুটোতে ঝোলানো ছিল! কাঠ কাটার কুঠার দিয়ে কপাট ভেঙে আমাদের ভেতরে ঢুকতে হয়েছে!'
          },
          reactionMood: 'surprised'
        },
        {
          id: 'dlg-b-3',
          prompt: {
            en: 'Did you hear anything from inside the room around 22:15?',
            bn: 'রাত ১০:১৫ নাগাদ পড়ার ঘরের ভেতর থেকে কোনো আওয়াজ পেয়েছিলেন?'
          },
          response: {
            en: 'Around 22:15, there was a terrible crash — like heavy metal striking the grandfather clock! I knocked and called out, but there was only silence. Then Miss Nawrin came down the hall and told me Sir had ordered us not to disturb him.',
            bn: 'রাত ১০:১৫ নাগাদ বিকট এক ঝনঝন শব্দ হয় — যেন ভারী কোনো লোহা গিয়ে ঘড়িতে আছড়ে পড়েছে! আমি নক করেছিলাম, কিন্তু কোনো উত্তর মেলেনি। তখন মিস নওরীন এসে বললেন স্যারকে যেন বিরক্ত না করি।'
          },
          reactionMood: 'nervous'
        },
        {
          id: 'dlg-b-4',
          prompt: {
            en: 'Did you notice anyone near the bay window during the storm?',
            bn: 'ঝড়ের মধ্যে জানালার আশপাশে কাউকে দেখেছিলেন?'
          },
          response: {
            en: 'Earlier today, Miss Nawrin was dusting and oiling the latch on that very window. She claimed the hinges were squeaking and causing drafts. I didn\'t think anything of it at the time.',
            bn: 'আজ সকালেই তো মিস নওরীন ওই জানালার ছিটকিনিতে তেল দিচ্ছিলেন আর পরিষ্কার করছিলেন। বলছিলেন ছিটকিনি আটকে যাচ্ছে। তখন তো খারাপ কিছু ভাবিনি।'
          },
          reactionMood: 'calm',
          conditionClueId: 'clue-05-window-latch'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-05-window-latch',
          reactionText: {
            en: 'Shahana gasps: "The garden window! Miss Nawrin spent hours this morning polishing the brass hardware on that very window! She claimed the storm was causing damp drafts!"',
            bn: 'শাহানা চমকে উঠে বলে: "বাগানের ওই জানালাটা? আজ সকালেই তো মিস নওরীন অনেকক্ষণ ধরে ওই জানালার ছিটকিনি পরিষ্কার ও তেল মালিশ করছিলেন!"'
          },
          stressIncrease: 5
        },
        {
          evidenceId: 'clue-04-poisoned-decanter',
          reactionText: {
            en: 'Shahana sobs: "I swear by the Almighty, I took that decanter straight from the locked cellar pantry! I would never harm Mahmudul Sir! When I handed the tray to Miss Nawrin in the corridor, the decanter was unopened!"',
            bn: 'শাহানা কেঁদে ফেলে: "আল্লাহর কসম, আমি ভাঁড়ার ঘর থেকে বোতল এনেছিলাম! চৌধুরী স্যারের ক্ষতি করার কথা আমি স্বপ্নেও ভাবতে পারি না! করিডোরে যখন নওরীনকে দিয়েছিলাম তখন বোতল সিলগালা ছিল!"'
          },
          stressIncrease: 20
        }
      ]
    },
    {
      id: 'suspect-05-marcus',
      name: {
        en: 'Rashed Karim',
        bn: 'রাশেদ করিম'
      },
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
        en: 'Mahmudul outbid Rashed at auction for the Byzantine Codex; Rashed faced bankruptcy if he could not acquire the codex.',
        bn: 'বাইজেন্টাইন কোডেক্স নিলামে রাশেদকে হারিয়ে মাহমুদুল সাহেব কিনে নেন; কোডেক্স না পেলে রাশেদ দেউলিয়া হয়ে যেত।'
      },
      alibi: {
        en: 'Claims he departed the mansion grounds in his car at 21:15 after Mahmudul refused his buyout offer.',
        bn: 'দাবি করে রাত ৯:১৫-এ প্রস্তাব প্রত্যাখ্যানের পর সে নিজের গাড়িতে চড়ে প্রাসাদ ছেড়ে চলে যায়।'
      },
      personality: {
        en: 'Pompous, cigar-scented, sharp double-breasted suit, sneering demeanor.',
        bn: 'অহংকারী, সিগারের গন্ধ, দামি স্যুট পরিহিত, ব্যঙ্গাত্মক হাসি।'
      },
      secrets: {
        en: 'Parked his car down the driveway gate until 22:40 waiting to see if Mahmudul would change his mind.',
        bn: 'রাত ১০:৪০ পর্যন্ত গেটের বাইরে গাড়ি থামিয়ে অপেক্ষা করছিল যদি মাহমুদুল সাহেব মত বদলান।'
      },
      avatarSeed: 'Rashed',
      avatarColor: '#b45309',
      dialogueTree: [
        {
          id: 'dlg-m-1',
          prompt: {
            en: 'Why were you at Chowdhury Mansion on the night of the murder?',
            bn: 'হত্যাকাণ্ডের রাতে আপনি চৌধুরী ম্যানরে কেন এসেছিলেন?'
          },
          response: {
            en: 'Pure commerce. I made a generous final offer of £250,000 for the Byzantine Codex. Chowdhury laughed in my face and had his staff show me the door at 21:15.',
            bn: 'নিছক ব্যবসার কাজে। বাইজেন্টাইন কোডেক্সটির জন্য আড়াই লাখ পাউন্ডের প্রস্তাব দিয়েছিলাম। চৌধুরী সাহেব আমার মুখের ওপর হেসে আমাকে বের করে দেন।'
          },
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-m-2',
          prompt: {
            en: 'Security gate logs show your car didn\'t exit until 22:42. Explain the gap.',
            bn: 'গেটের লগবুকে দেখা যাচ্ছে আপনার গাড়ি রাত ১০:৪২-এর আগে বের হয়নি। এর ব্যাখ্যা দিন।'
          },
          response: {
            en: 'My tire had a slow leak, officer. I pulled over under the cypress trees to inspect the valve. Is having bad rubber a capital crime in this county?',
            bn: 'আমার গাড়ির চাকায় লিক ছিল। গাছের নিচে গাড়ি থামিয়ে চাকা ঠিক করছিলাম। গাড়ির চাকা নষ্ট হওয়া কি ফৌজদারি অপরাধ?'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-m-3',
          prompt: {
            en: 'Did you see anyone on the garden terrace while parked?',
            bn: 'গাড়িতে বসে থাকা অবস্থায় বাগানের দিকে কাউকে দেখতে পেয়েছিলেন?'
          },
          response: {
            en: 'Now that you mention it... around 22:20, through the rain, I saw a figure in a dark rain slicker slip out from the mansion terrace into the rose garden and re-enter through the side conservatory door.',
            bn: 'হ্যাঁ, মনে পড়েছে... রাত ১০:২০ নাগাদ বৃষ্টির মধ্যে রেইনকোট পরা একজন রোগা লোককে টেরাস থেকে বাগানে নামতে এবং কনজারভেটরির দরজা দিয়ে ভেতরে ঢুকতে দেখেছিলাম।'
          },
          reactionMood: 'calm',
          revealsClueId: 'clue-12-terrace-sighting'
        },
        {
          id: 'dlg-m-4',
          prompt: {
            en: 'What do you know about the missing endowment funds for antiquities?',
            bn: 'প্রাচীন প্রত্নতত্ত্ব ট্রাস্ট ফান্ডের লোপাট হওয়া অর্থ সম্পর্কে আপনি কী জানেন?'
          },
          response: {
            en: 'Chowdhury boasted that his archivist handled every purchase order. I dealt with Mahmudul directly, but the invoices always had Miss Sultana\'s stamp. If half a million went missing, search the archive ledger, not my pockets.',
            bn: 'চৌধুরী সাহেব বলতেন তার সমস্ত ক্রয়ের হিসাব তার সেক্রেটারি রাখে। আমি মাহমুদুল সাহেবের সাথে কথা বলতাম, কিন্তু নথিতে নওরীন সুলতানার সিল থাকত। অর্থ লোপাটের খোঁজ লাইব্রেরিতে গিয়ে করুন।'
          },
          reactionMood: 'calm',
          conditionClueId: 'clue-02-audited-ledger'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: {
            en: 'Rashed laughs coldly: "Size 6 woman\'s dress shoes? I wear custom Italian size 11 wingtips, detective. You are looking for a petite woman, not an art dealer."',
            bn: 'রাশেদ হেসে ওঠে: "৬ সাইজের মেয়েদের জুতো? আমার জুতার সাইজ ১১, গোয়েন্দা। আপনি কোনো খাটো মহিলার খোঁজ করুন, আমার নয়।"'
          },
          stressIncrease: 0
        },
        {
          evidenceId: 'clue-12-terrace-sighting',
          reactionText: {
            en: 'Rashed nods firmly: "That slicker figure was slender and hurried. Definitely not Arman or the old doctor. It had the precise, agile gait of a woman."',
            bn: 'রাশেদ দৃঢ়ভাবে বলে: "রেইনকোট পরা মানুষটি বেশ রোগা আর ক্ষিপ্র ছিল। আরমান বা বৃদ্ধ ডাক্তারের মতো মোটেই নয়। হাঁটার ধরণ দেখে একজন চটপটে মহিলা মনে হয়েছিল।"'
          },
          stressIncrease: 0
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-01-brandy-snifter',
      name: {
        en: 'Overturned Crystal Brandy Snifter',
        bn: 'উল্টে থাকা ক্রিস্টালের ব্র্যান্ডি গ্লাস'
      },
      category: 'Physical',
      description: {
        en: 'A heavy lead-crystal glass on Mahmudul\'s desk with 5ml of spilled amber liquid.',
        bn: 'মাহমুদুল সাহেবের টেবিলে পড়ে থাকা ভারী কাচের গ্লাস, যাতে সামান্য তরল লেগে আছে।'
      },
      discoveryLocation: {
        en: 'Study Desk, beside victim\'s right arm',
        bn: 'পড়ার টেবিল, লাশের ডান হাতের পাশে'
      },
      relevance: {
        en: 'The immediate ingestion vessel for the lethal toxin.',
        bn: 'মারাত্মক বিষ শরীরে প্রবেশের মূল পাত্র।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice', 'suspect-03-finch'],
      details: [
        {
          en: 'Mass spectrometer analysis confirms 120mg of potassium cyanide dissolved in the liquor.',
          bn: 'ল্যাব পরীক্ষায় তরলের ভেতরে ১২০ মিলিগ্রাম পটাশিয়াম সায়ানাইড পাওয়া গেছে।'
        },
        {
          en: 'No foreign fingerprints detected on the glass; wiped clean or handled with gloves.',
          bn: 'গ্লাসে কোনো আঙুলের ছাপ নেই; গ্লাভস পরে ধরা হয়েছিল বা মুছে ফেলা হয়েছে।'
        },
        {
          en: 'The vintage corresponds exactly to the decanter on the sideboard.',
          bn: 'তরলটি সাইডবোর্ডের ডিক্যান্টারের ব্র্যান্ডির সাথে সম্পূর্ণ মিলে যায়।'
        }
      ],
      iconKey: 'glass'
    },
    {
      id: 'clue-02-audited-ledger',
      name: {
        en: 'Audited Estate Ledger with Red Annotations',
        bn: 'নিরীক্ষিত এস্টেট লেজার (লাল কালির নোট)'
      },
      category: 'Documents',
      description: {
        en: 'Mahmudul\'s personal estate books, showing forensic audits of the endowment accounts.',
        bn: 'মাহমুদুল সাহেবের নিজস্ব হিসেবের খাতা, যেখানে ট্রাস্ট ফান্ডের হিসেব মেলানো হয়েছিল।'
      },
      discoveryLocation: {
        en: 'Open on study desk under victim\'s hands',
        bn: 'পড়ার টেবিলে লাশের হাতের নিচে খোলা'
      },
      relevance: {
        en: 'Establishes direct financial embezzlement and motive against the signing archivist.',
        bn: 'তহবিল তছরুপের আর্থিক গরমিল এবং হত্যার মূল উদ্দেশ্য উন্মোচন করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-01-julian'],
      isCrucial: true,
      details: [
        {
          en: 'Mahmudul noted a missing deficit of $450,000 between March and September across the endowment accounts.',
          bn: 'মার্চ থেকে সেপ্টেম্বরের মধ্যে ট্রাস্ট অ্যাকাউন্টে সাড়ে চার লাখ ডলারের বড় গরমিল ধরা পড়ে।'
        },
        {
          en: 'Final entry dated October 14, 21:00: "Irregularities confirmed across archive accounts. Summons with Crown Prosecutor scheduled for morning."',
          bn: '১৪ অক্টোবর রাত ৯টার শেষ এন্ট্রি: "আর্কাইভের হিসাবে গরমিল নিশ্চিত। সকালে সরকারি কৌঁসুলির হাতে এই প্রমাণ তুলে দেব।"'
        },
        {
          en: 'Presents an imminent, existential threat of criminal indictment to the authorized signing archivist, Nawrin Sultana.',
          bn: 'অনুমোদিত স্বাক্ষরকারী মহাফেজ নওরীন সুলতানার জন্য এটি ছিল জেল খাটার নিশ্চিত পরোয়ানা।'
        }
      ],
      iconKey: 'book'
    },
    {
      id: 'clue-03-stopped-clock',
      name: {
        en: 'Fractured Grandfather Clock (22:14)',
        bn: 'ভাঙা গ্র্যান্ডফাদার ক্লক (১০:১৪)'
      },
      category: 'Physical',
      description: {
        en: 'Antique clock with smashed glass face, stopped rigidly at 10:14 PM.',
        bn: 'কাচ ভাঙা প্রাচীন ঘড়ি, কাঁটা রাত ১০:১৪ মিনিটে স্থির হয়ে থেমে গেছে।'
      },
      discoveryLocation: {
        en: 'Study west corner',
        bn: 'পড়ার ঘরের পশ্চিম কোণ'
      },
      relevance: {
        en: 'Fixes the exact time of Mahmudul\'s terminal convulsions and challenges witness timeline statements.',
        bn: 'মাহমুদুল সাহেবের মৃত্যুর সুনির্দিষ্ট সময় নির্ধারণ করে এবং সাক্ষীদের দাবিকৃত সময়ের সত্যতা যাচাইয়ের ভিত্তি তৈরি করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-01-julian', 'suspect-04-beatrice'],
      isCrucial: true,
      details: [
        {
          en: 'Pendulum jammed by a heavy bronze paperweight knocked from the desk during violent muscle spasms.',
          bn: 'বিষক্রিয়ার তীব্র খিঁচুনির সময় টেবিল থেকে ছিটকে যাওয়া ব্রোঞ্জের পেপারওয়েটে পেণ্ডুলাম আটকে ঘড়ি থেমে যায়।'
        },
        {
          en: 'Proves Mahmudul suffered catastrophic convulsions and was incapacitated by 22:14.',
          bn: 'প্রমাণ করে রাত ১০:১৪ মিনিটের মধ্যেই মাহমুদুল সাহেব প্রাণঘাতী খিঁচুনিতে লুটিয়ে পড়েছিলেন।'
        },
        {
          en: 'Serves as an objective physical anchor to evaluate all claimed verbal alibis after 22:14.',
          bn: 'রাত ১০:১৪-এর পরবর্তী যেকোনো কথিত জবানবন্দি ও দাবির সত্যতা প্রমাণের অন্যতম চাবিকাঠি।'
        }
      ],
      iconKey: 'clock'
    },
    {
      id: 'clue-04-poisoned-decanter',
      name: {
        en: 'Vintage Armagnac Decanter',
        bn: 'আরমাগনাক ব্র্যান্ডির ডিক্যান্টার'
      },
      category: 'Physical',
      description: {
        en: 'A heavy crystal bottle holding approximately 400ml of vintage brandy.',
        bn: 'প্রায় ৪০০ মিলি ব্র্যান্ডিভর্তি ক্রিস্টালের একটি ভারী বোতল।'
      },
      discoveryLocation: {
        en: 'Study Liquor Sideboard',
        bn: 'পড়ার ঘরের লিকার সাইডবোর্ড'
      },
      relevance: {
        en: 'Demonstrates the poison was added to the decanter before Mahmudul poured his glass.',
        bn: 'প্রমাণ করে যে মাহমুদুল সাহেব গ্লাসে ঢালার আগেই গোটা বোতলে বিষ মেশানো হয়েছিল।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        {
          en: 'The entire decanter volume was laced with 2 grams of potassium cyanide salt.',
          bn: 'পুরো ডিক্যান্টারের ব্র্যান্ডিতে প্রায় ২ গ্রাম পটাশিয়াম সায়ানাইড মেশানো ছিল।'
        },
        {
          en: 'Whoever poisoned it knew Mahmudul drank a single snifter every evening at 22:00 sharp.',
          bn: 'খুনি ভালো করেই জানত মাহমুদুল সাহেব প্রতি রাত ১০টায় ঠিক এক গ্লাস ব্র্যান্ডি খান।'
        },
        {
          en: 'Placed in the study between 21:45 and 22:00 during the evening tea and drink service.',
          bn: 'রাত ৯:৪৫ থেকে ১০:০০-এর মধ্যে সান্ধ্যকালীন পানীয় পরিবেশনের সময় ঘরে রাখা হয়েছিল।'
        }
      ],
      iconKey: 'flask'
    },
    {
      id: 'clue-05-window-latch',
      name: {
        en: 'Rigged Leaded Window Cam-Latch',
        bn: 'কারসাজি করা জানালার ছিটকিনি'
      },
      category: 'Forensic Reports',
      description: {
        en: 'The locking mechanism of the study bay window.',
        bn: 'পড়ার ঘরের বে উইন্ডোর ছিটকিনির মেকানিজম।'
      },
      discoveryLocation: {
        en: 'Study Leaded Bay Window',
        bn: 'পড়ার ঘরের জানালার ফ্রেম'
      },
      relevance: {
        en: 'Reveals physical anomalies explaining how the room was sealed from the exterior.',
        bn: 'বাইরে থেকে ভেতর অবরুদ্ধ করার যান্ত্রিক কারসাজির রহস্য উন্মোচন করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-05-marcus'],
      isCrucial: true,
      details: [
        {
          en: 'Microscopic traces of beeswax lubricant and rub marks on the pivot arm.',
          bn: 'ছিটকিনির খাঁজে মোমের প্রলেপ এবং ঘর্ষণের সূক্ষ্ম দাগ রয়েছে।'
        },
        {
          en: 'By looping a thin nylon filament around the latch lever through the outer sill gap, a person outside can pull the thread to snap the latch closed, then pull the thread free.',
          bn: 'বাইরের কার্নিশ দিয়ে একটি সরু নাইলনের সুতো গলিয়ে ছিটকিনিতে ফাঁস লাগিয়ে টান দিলে ভেতর থেকে ছিটকিনি বন্ধ হয়ে যায় এবং পরে সুতো টেনে বের করে নেওয়া যায়।'
        },
        {
          en: 'Solves the "impossible" locked room illusion without requiring internal accomplices.',
          bn: 'কোনো অভ্যন্তরীণ সহায়তাকারী ছাড়াই তথাকথিত "অসম্ভব" বদ্ধ ঘরের বৈজ্ঞানিক সমাধান দেয়।'
        }
      ],
      iconKey: 'key'
    },
    {
      id: 'clue-06-burnt-will',
      name: {
        en: 'Charred Codicil to Will',
        bn: 'উইলের আধপোড়া সংযোজনী'
      },
      category: 'Documents',
      description: {
        en: 'Fragment of parchment pulled from the dying fireplace embers.',
        bn: 'ফায়ারপ্লেসের ছাই থেকে উদ্ধারকৃত আইনি দলিলের টুকরো।'
      },
      discoveryLocation: {
        en: 'Study Marble Fireplace',
        bn: 'পড়ার ঘরের ফায়ারপ্লেস'
      },
      relevance: {
        en: 'Presents Arman\'s initial disinheritance motive, but shows Mahmudul threw it into the hearth earlier in the evening.',
        bn: 'আরমানকে ত্যাজ্য করার প্রমাণ দেয়, তবে কাগজটি বিকেল ৫টার দিকেই আগুনে পোড়ানো হয়েছিল।'
      },
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        {
          en: 'Drafted to strip Arman Haque Chowdhury of his trust fund allowance.',
          bn: 'আরমান হক চৌধুরীর ট্রাস্ট ভাতা বন্ধের আইনি নির্দেশ।'
        },
        {
          en: 'The ink had already set hours prior; soot patterns match the 17:00 fire stoking.',
          bn: 'কালি ও পোড়ার দাগ নিশ্চিত করে এটি বিকেল ৫টার ঝগড়ার সময় আগুনে নিক্ষিপ্ত হয়েছিল।'
        }
      ],
      iconKey: 'scroll'
    },
    {
      id: 'clue-07-nylon-thread',
      name: {
        en: 'Waxed Nylon Thread & Size 6 Muddy Print',
        bn: 'মোমের নাইলন সুতো ও ৬ সাইজের পদচিহ্ন'
      },
      category: 'Physical',
      description: {
        en: 'A 40cm strand of high-tensile waxed monofilament caught on a rose thorn outside the window.',
        bn: 'জানালার নিচে গোলাপের কাঁটায় আটকে থাকা ৪০ সেমি মোম মাখানো নাইলন সুতো।'
      },
      discoveryLocation: {
        en: 'Rose Garden bed directly beneath study window',
        bn: 'পড়ার ঘরের জানালার ঠিক নিচের গোলাপ বাগান'
      },
      relevance: {
        en: 'Physical forensic proof tying the exterior window mechanism to a petite individual.',
        bn: 'বাইরে থেকে জানালা আটকানোর মেকানিজম এবং একজন ব্যক্তির পলায়নের অকাট্য শারীরিক প্রমাণ।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch', 'suspect-04-beatrice'],
      isCrucial: true,
      isHidden: true,
      details: [
        {
          en: 'Thread composition: 50-lb test waxed nylon bookbinder\'s thread.',
          bn: 'সুতোটি ৫০ পাউন্ড ধারণক্ষমতাসম্পন্ন মোম মাখানো বই বাঁধাইয়ের নাইলন সুতো।'
        },
        {
          en: 'Waxed nylon of this caliber is specifically used in leather folio restoration and bookbinding.',
          bn: 'এই মানের মোম মাখানো সুতো বিশেষ করে প্রাচীন চামড়ার বই বাঁধাই ও আর্কাইভে ব্যবহৃত হয়।'
        },
        {
          en: 'Footprint in the mud corresponds to a slender size 6 Oxford dress shoe, ruling out larger male footwear.',
          bn: 'কাদার ছাপটি ৬ সাইজের সরু মেয়েলি জুতার, যা পুরুষদের বড় আকারের জুতাকে নাকচ করে।'
        }
      ],
      iconKey: 'scissors'
    },
    {
      id: 'clue-08-torn-envelope',
      name: {
        en: 'Torn Black-Market Cyanide Invoice',
        bn: 'ছেঁড়া সায়ানাইড ক্রয়ের রসিদ'
      },
      category: 'Documents',
      description: {
        en: 'A shredded commercial invoice from a chemical supply house.',
        bn: 'একটি রাসায়নিক সাপ্লাই এজেন্সির ছেঁড়া বাণিজ্যিক রসিদ।'
      },
      discoveryLocation: {
        en: 'Under-desk wastebasket',
        bn: 'টেবিলের নিচের ময়লার ঝুড়ি'
      },
      relevance: {
        en: 'Traces the purchase of potassium cyanide to an antiquarian PO Box address.',
        bn: 'সায়ানাইড কেনার রেকর্ডটি একটি এন্টিক বুকশপের পোস্ট বক্সের সাথে যুক্ত করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch'],
      isCrucial: true,
      isHidden: true,
      details: [
        {
          en: 'Billed to: "N. S. Antiquarian Books, PO Box 412".',
          bn: 'ক্রেতার নাম: "এন. এস. বুকস, পোস্ট বক্স ৪১২"।'
        },
        {
          en: 'Item: 100g Potassium Cyanide Reagent Grade (ordered under photographic salts pretense).',
          bn: 'পণ্য: ১০০ গ্রাম পটাশিয়াম সায়ানাইড লবণ (ফটোগ্রাফির রাসায়নিকের নামে কেনা)।'
        },
        {
          en: 'Bearing a distinctive smudged cursive signature with initial "N. Sultana".',
          bn: 'নিচে "নওরীন সুলতানা" স্বাক্ষরিত একটি ঝাপসা হস্তাক্ষরের সই রয়েছে।'
        }
      ],
      iconKey: 'receipt'
    },
    {
      id: 'clue-09-pawn-receipt',
      name: {
        en: 'Arman\'s Pawn Ticket for Signet Ring',
        bn: 'আরমানের আংটি বন্ধকের রসিদ'
      },
      category: 'Documents',
      description: {
        en: 'A pawn ticket for an heirloom gold signet ring stamped at 16:15 today.',
        bn: 'একটি স্বর্ণের আংটি বন্ধক দেওয়ার রসিদ যা আজ বিকেল ৪:১৫ মিনিটে ইস্যু করা।'
      },
      discoveryLocation: {
        en: 'Arman\'s coat pocket in billiard room',
        bn: 'বিলিয়ার্ড রুমে ঝুলিয়ে রাখা আরমানের কোটের পকেট'
      },
      relevance: {
        en: 'Explains Arman\'s suspicious behavior and theft, but clears him of being the poisoner.',
        bn: 'আরমানের সন্দেহজনক আচরণের কারণ স্পষ্ট করে, তবে তাকে খুনের দায় থেকে খালাস দেয়।'
      },
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        {
          en: 'Arman pawned the ring hours before the murder to cover a poker debt.',
          bn: 'আরমান খুনের কয়েক ঘণ্টা আগে জুয়ার দেনা মেটাতে আংটি বন্ধক দিয়েছিল।'
        },
        {
          en: 'Proves petty opportunistic theft in the afternoon, not the calculated locked-room murder.',
          bn: 'এটি বিকেলে ঘটে যাওয়া ক্ষুদ্র চুরির প্রমাণ দেয়, রাতে পূর্বপরিকল্পিত খুনের নয়।'
        }
      ],
      iconKey: 'tag'
    },
    {
      id: 'clue-10-handwriting-sample',
      name: {
        en: 'Nawrin\'s Archival Catalog Cards',
        bn: 'নওরীনের ক্যাটালগ কার্ডের হাতের লেখা'
      },
      category: 'Documents',
      description: {
        en: 'Archival index cards written in Nawrin Sultana\'s neat calligraphic script.',
        bn: 'লাইব্রেরির ইনডেক্স কার্ডে নওরীন সুলতানার নিজস্ব হস্তাক্ষর।'
      },
      discoveryLocation: {
        en: 'Library Archive Desk',
        bn: 'লাইব্রেরি আর্কাইভ ডেস্ক'
      },
      relevance: {
        en: 'Forensic handwriting match to the black-market cyanide order.',
        bn: 'সায়ানাইড ক্রয়ের রসিদের সইয়ের সাথে শতভাগ মিলে যাওয়া হস্তাক্ষর।'
      },
      relatedSuspectIds: ['suspect-02-evelyn'],
      details: [
        {
          en: 'Loop structures and stroke pressure identical to the signature on the chemical invoice.',
          bn: 'অক্ষরের বাঁক ও কালির চাপ সায়ানাইডের রসিদের স্বাক্ষরের সাথে সম্পূর্ণ অভিন্ন।'
        },
        {
          en: 'Indisputable forensic proof establishing that Nawrin Sultana procured the potassium cyanide.',
          bn: 'অনস্বীকার্য প্রমাণ যে নওরীন সুলতানা নিজেই বিষ সংগ্রহ করেছিল।'
        }
      ],
      iconKey: 'pen'
    },
    {
      id: 'clue-11-tray-handover',
      name: {
        en: 'Shahana\'s Witness Statement: Tray Interception',
        bn: 'শাহানার জবানবন্দি: ট্রে হস্তান্তর'
      },
      category: 'Witness Statements',
      description: {
        en: 'Testimony from head housekeeper Shahana Begum regarding the drink tray.',
        bn: 'গৃহপরিচারিকা শাহানা বেগমের বক্তব্য অনুযায়ী পানীয়ের ট্রে নওরীনের হাতে তুলে দেওয়া হয়েছিল।'
      },
      discoveryLocation: {
        en: 'Kitchen Interrogation',
        bn: 'রান্নাঘরে নেওয়া জবানবন্দি'
      },
      relevance: {
        en: 'Confirms who had sole custody of the Armagnac decanter before it entered the locked study.',
        bn: 'নিশ্চিত করে যে পড়ার ঘরে ঢোকার ঠিক আগে কার কাছে বোতলটি ছিল।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        {
          en: 'At 21:45, Nawrin intercepted the tray from Shahana in the hallway.',
          bn: 'রাত ৯:৪৫ মিনিটে করিডোরে শাহানার কাছ থেকে ট্রেটি নওরীন নিজের হাতে নেয়।'
        },
        {
          en: 'Nawrin carried it into the study under the pretense of delivering evening correspondence.',
          bn: 'চিঠি দেওয়ার অজুহাতে নওরীন একাই ট্রেটি নিয়ে পড়ার ঘরে ঢোকে।'
        }
      ],
      iconKey: 'message'
    },
    {
      id: 'clue-12-terrace-sighting',
      name: {
        en: 'Rashed Karim\'s Terrace Witness Statement',
        bn: 'রাশেদ করিমের জবানবন্দি: বাগানের ছায়ামূর্তি'
      },
      category: 'Witness Statements',
      description: {
        en: 'Statement from Rashed Karim regarding a figure slipping into the garden at 22:20.',
        bn: 'রাত ১০:২০ নাগাদ জানালা দিয়ে বাগানে একজনের পলায়ন সম্পর্কে রাশেদ করিমের প্রত্যক্ষদর্শীর বিবরণ।'
      },
      discoveryLocation: {
        en: 'Driveway Interrogation',
        bn: 'ড্রাইভওয়েতে নেওয়া জবানবন্দি'
      },
      relevance: {
        en: 'Corroborates the killer\'s escape route through the study window into the rose garden.',
        bn: 'জানালা দিয়ে বাগানে পালিয়ে যাওয়ার পথ ও সময়ের প্রত্যক্ষ প্রমাণ দেয়।'
      },
      relatedSuspectIds: ['suspect-05-marcus', 'suspect-02-evelyn'],
      details: [
        {
          en: 'Rashed observed a slim figure in a dark slicker moving from the study window terrace to the conservatory door at 22:20.',
          bn: 'রাশেদ রাত ১০:২০-এ পড়ার ঘরের কার্নিশ থেকে একজনকে নেমে পাশের দরজা দিয়ে ভেতরে ঢুকতে দেখে।'
        }
      ],
      iconKey: 'eye'
    }
  ],
  canonConnections: [
    {
      id: 'conn-01',
      sourceId: 'clue-03-stopped-clock',
      targetId: 'suspect-02-evelyn',
      label: {
        en: 'Alibi Contradiction',
        bn: 'অ্যালিবাই অসঙ্গতি'
      },
      deductionNotes: {
        en: 'Mahmudul died at 22:14 when the clock was smashed by the convulsing victim. Nawrin\'s claim that she spoke to him at 22:30 is a manufactured lie to establish an alibi!',
        bn: 'মাহমুদুল সাহেব রাত ১০:১৪ মিনিটে খিঁচুনিতে পেপারওয়েট ছিটকে ঘড়ি ভাঙার সাথে সাথেই মারা যান। রাত ১০:৩০-এ তার সাথে কথা বলার দাবিটি নওরীনের সম্পূর্ণ সাজানো মিথ্যা!'
      },
      isContradiction: true,
      bonusPoints: 150
    },
    {
      id: 'conn-02',
      sourceId: 'clue-05-window-latch',
      targetId: 'clue-07-nylon-thread',
      label: {
        en: 'Locked Room Mechanism',
        bn: 'বদ্ধ ঘরের রহস্যের সমাধান'
      },
      deductionNotes: {
        en: 'The beeswax and micro-grooves on the window cam latch match the high-tensile waxed nylon thread found outside on the rose thorn. The killer latched the window from outside using a pull-string loop!',
        bn: 'জানালার ছিটকিনিতে পাওয়া মোম এবং গোলাপের কাঁটায় আটকে থাকা নাইলন সুতো হুবহু এক। খুনি বাইরে থেকে সুতোর ফাঁস টেনে ভেতরের ছিটকিনি আটকে দিয়েছিল!'
      },
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'conn-03',
      sourceId: 'clue-08-torn-envelope',
      targetId: 'clue-10-handwriting-sample',
      label: {
        en: 'Poison Acquisition',
        bn: 'বিষ সংগ্রহের প্রমাণ'
      },
      deductionNotes: {
        en: 'The signature on the chemical supply invoice for potassium cyanide matches Nawrin Sultana\'s archival catalog handwriting with 100% forensic precision.',
        bn: 'সায়ানাইড ক্রয়ের ইনভয়েসের সইটি নওরীন সুলতানার ক্যাটালগ কার্ডের হস্তাক্ষরের সাথে বৈজ্ঞানিকভাবে শতভাগ মিলে যায়।'
      },
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'conn-04',
      sourceId: 'clue-02-audited-ledger',
      targetId: 'suspect-02-evelyn',
      label: {
        en: 'Financial Motive',
        bn: 'আর্থিক তছরুপের উদ্দেশ্য'
      },
      deductionNotes: {
        en: 'Mahmudul Haque Chowdhury uncovered that Nawrin embezzled $450,000 from the foundation and wrote that he would turn her in to the Crown Prosecutor the very next morning.',
        bn: 'মাহমুদুল হক চৌধুরী আবিষ্কার করেছিলেন যে নওরীন ৪,৫০,০০০ ডলার তহবিল তছরুপ করেছে এবং পরদিন সকালেই তাকে পুলিশের হাতে তুলে দেওয়ার সিদ্ধান্ত নিয়েছিলেন।'
      },
      isContradiction: false,
      bonusPoints: 125
    },
    {
      id: 'conn-05',
      sourceId: 'clue-04-poisoned-decanter',
      targetId: 'clue-11-tray-handover',
      label: {
        en: 'Opportunity Window',
        bn: 'বিষ প্রয়োগের মোক্ষম সুযোগ'
      },
      deductionNotes: {
        en: 'Shahana handed the fresh decanter to Nawrin at 21:45. Nawrin had total privacy to spike the decanter before placing it on Mahmudul\'s desk.',
        bn: 'রাত ৯:৪৫ মিনিটে শাহানা বোতলটি নওরীনকে দেয়। নির্জন করিডোরে একাকী থাকার সময়েই নওরীন বোতলে সায়ানাইড মিশিয়ে দেয়।'
      },
      isContradiction: false,
      bonusPoints: 150
    },
    {
      id: 'conn-06',
      sourceId: 'clue-06-burnt-will',
      targetId: 'suspect-01-julian',
      label: {
        en: 'Arman\'s Quarrel Exoneration',
        bn: 'আরমানের কলহ ও অব্যাহতি'
      },
      deductionNotes: {
        en: 'Forensic soot depth proves the codicil was burned during the 17:00 argument. Arman is reckless, but did not poison his uncle hours later in the locked room.',
        bn: 'ফায়ারপ্লেসের ছাইয়ের বিশ্লেষণ প্রমাণ করে উইলটি বিকেল ৫টার ঝগড়ায় পোড়ানো হয়েছিল। আরমান বেপরোয়া হলেও রাতে বিষপ্রয়োগের সাথে জড়িত নয়।'
      },
      isContradiction: false,
      bonusPoints: 120
    },
    {
      id: 'conn-07',
      sourceId: 'clue-09-pawn-receipt',
      targetId: 'suspect-01-julian',
      label: {
        en: 'Theft Alibi',
        bn: 'চুরির সত্যতা ও খুনে নির্দোষ'
      },
      deductionNotes: {
        en: 'Arman pawned the ring at 16:15 to pay debts. This proves he committed petty theft earlier, rather than the calculated poisoning.',
        bn: 'আরমান বিকেল ৪:১৫-এ দেনার জন্য আংটি বন্ধক দিয়েছিল। এটি তার চুরির প্রমাণ হলেও রাতের হত্যাকাণ্ডে তাকে দায়মুক্ত করে।'
      },
      isContradiction: false,
      bonusPoints: 100
    },
    {
      id: 'conn-08',
      sourceId: 'clue-07-nylon-thread',
      targetId: 'suspect-05-marcus',
      label: {
        en: 'Physical Footwear Mismatch',
        bn: 'জুতার মাপের অসঙ্গতি'
      },
      deductionNotes: {
        en: 'Rashed Karim wears size 11 shoes, ruling him out from the slender size 6 footprint beneath the rigged bay window.',
        bn: 'রাশেদ করিমের জুতার সাইজ ১১, যা জানালার নিচে পাওয়া ৬ সাইজের মেয়েলি ছাপের সাথে অসম্ভব অমিল প্রমাণ করে।'
      },
      isContradiction: false,
      bonusPoints: 110
    },
    {
      id: 'conn-09',
      sourceId: 'clue-01-brandy-snifter',
      targetId: 'suspect-03-finch',
      label: {
        en: 'Toxicology Timeline Corroboration',
        bn: 'বিষক্রিয়ার সময় নির্ধারণ'
      },
      deductionNotes: {
        en: 'Dr. Farhan confirms potassium cyanide takes effect within 3-5 minutes, corroborating Mahmudul\'s collapse precisely at 22:14.',
        bn: 'ডা. ফারহান নিশ্চিত করেন সায়ানাইড ৩-৫ মিনিটে কাজ করে, যা ঘড়ির কাঁটা ১০:১৪-তে থামার সময়রেখাকে শতভাগ সমর্থন করে।'
      },
      isContradiction: false,
      bonusPoints: 110
    }
  ],
  timelineEvents: [
    {
      id: 'tl-01',
      timestamp: '17:00',
      timeSortValue: 1020,
      title: {
        en: 'Arman\'s Violent Argument with Mahmudul',
        bn: 'মাহমুদুল সাহেবের সাথে আরমানের উত্তপ্ত বাক্যবিনিময়'
      },
      description: {
        en: 'Arman demands money for his gambling debts. Mahmudul burns the trust fund codicil in anger and throws Arman out.',
        bn: 'আরমান জুয়ার দেনা মেটাতে টাকা দাবি করে। ক্ষুব্ধ মাহমুদুল সাহেব উইল পোড়ানোর হুমকি দিয়ে আরমানকে তাড়িয়ে দেন।'
      },
      source: {
        en: 'Arman\'s Admission & Hearth Soot Analysis',
        bn: 'আরমানের স্বীকারোক্তি ও ফায়ারপ্লেসের ছাইয়ের বিশ্লেষণ'
      },
      verifiedLocation: {
        en: 'Chowdhury Mansion Study',
        bn: 'ম্যানরের পড়ার ঘর'
      },
      relatedSuspectId: 'suspect-01-julian',
      correctIndex: 0
    },
    {
      id: 'tl-02',
      timestamp: '21:00',
      timeSortValue: 1260,
      title: {
        en: 'Mahmudul Completes Embezzlement Audit',
        bn: 'মাহমুদুল সাহেব অডিট সম্পন্ন করে নোট লেখেন'
      },
      description: {
        en: 'Mahmudul signs the final red-ink note in the estate ledger, marking $450,000 missing and pledging to call the Crown Prosecutor tomorrow.',
        bn: 'মাহমুদুল সাহেব লেজারে লাল কালিতে সই করেন এবং সাড়ে চার লাখ ডলার লোপাটের দায়ে সকালে মামলা করার সংকল্প লেখেন।'
      },
      source: {
        en: 'Victim\'s Audited Ledger Entry',
        bn: 'ভুক্তভোগীর অডিট লেজারের এন্ট্রি'
      },
      verifiedLocation: {
        en: 'Study Desk',
        bn: 'পড়ার টেবিল'
      },
      correctIndex: 1
    },
    {
      id: 'tl-03',
      timestamp: '21:15',
      timeSortValue: 1275,
      title: {
        en: 'Rashed Karim Ejected from Mansion',
        bn: 'রাশেদ করিমকে প্রাসাদ থেকে বিদায়'
      },
      description: {
        en: 'Rashed Karim is rebuffed in his attempt to buy the Byzantine Codex and retreats to his car at the front gates.',
        bn: 'কোডেক্স কেনার ব্যর্থ চেষ্টার পর রাশেদকে বিদায় দেওয়া হয় এবং সে গাড়িতে গিয়ে বসে থাকে।'
      },
      source: {
        en: 'Staff Log & Rashed\'s Statement',
        bn: 'লগবুক ও রাশেদের জবানবন্দি'
      },
      verifiedLocation: {
        en: 'Mansion Foyer / Driveway Gate',
        bn: 'প্রাসাদের ড্রাইভওয়ে'
      },
      relatedSuspectId: 'suspect-05-marcus',
      correctIndex: 2
    },
    {
      id: 'tl-04',
      timestamp: '21:45',
      timeSortValue: 1305,
      title: {
        en: 'Nawrin Intercepts the Drink Tray',
        bn: 'নওরীন পানীয়ের ট্রে নিজের হাতে নেয়'
      },
      description: {
        en: 'Nawrin intercepts the Armagnac decanter from Shahana Begum, poisons the decanter with potassium cyanide, and carries it into the study.',
        bn: 'নওরীন পরিচারিকার কাছ থেকে ট্রে নিয়ে বোতলে সায়ানাইড মেশায় এবং পড়ার ঘরে রেখে আসে।'
      },
      source: {
        en: 'Shahana\'s Eyewitness Statement',
        bn: 'শাহানার প্রত্যক্ষদর্শীর সাক্ষ্য'
      },
      verifiedLocation: {
        en: 'East Corridor / Study Entrance',
        bn: 'পূর্ব করিডোর / পড়ার ঘরের দরজা'
      },
      relatedSuspectId: 'suspect-02-evelyn',
      correctIndex: 3
    },
    {
      id: 'tl-05',
      timestamp: '22:00',
      timeSortValue: 1320,
      title: {
        en: 'Mahmudul Drinks the Laced Brandy',
        bn: 'মাহমুদুল সাহেব বিষাক্ত ব্র্যান্ডি পান করেন'
      },
      description: {
        en: 'Mahmudul locks his study deadbolt for the night, pours a snifter from the decanter, and begins drinking while reviewing the ledger.',
        bn: 'মাহমুদুল সাহেব দরজা লক করে ডিক্যান্টার থেকে ব্র্যান্ডি ঢেলে পান করা শুরু করেন।'
      },
      source: {
        en: 'Routine Habits & Toxicology Report',
        bn: 'দৈনন্দিন অভ্যাস ও বিষবিজ্ঞানের রিপোর্ট'
      },
      verifiedLocation: {
        en: 'Study Desk',
        bn: 'পড়ার টেবিল'
      },
      correctIndex: 4
    },
    {
      id: 'tl-06',
      timestamp: '22:14',
      timeSortValue: 1334,
      title: {
        en: 'Fatal Convulsions & Clock Arrest',
        bn: 'বিষক্রিয়ায় তীব্র খিঁচুনি ও ঘড়ি বন্ধ'
      },
      description: {
        en: 'Potassium cyanide induces violent convulsions. Mahmudul collapses, knocking a bronze weight into the grandfather clock, freezing its hands at 22:14.',
        bn: 'সায়ানাইডের বিষে তীব্র খিঁচুনিতে মাহমুদুল সাহেব লুটিয়ে পড়েন, তার ছিটকে যাওয়া পেপারওয়েটের আঘাতে ঘড়ির কাঁটা ১০:১৪-তে থেমে যায়।'
      },
      source: {
        en: 'Stopped Clock & Forensic Pathology',
        bn: 'স্থির ঘড়ি ও প্যাথলজি রিপোর্ট'
      },
      verifiedLocation: {
        en: 'Study West Corner',
        bn: 'পড়ার ঘরের পশ্চিম কোণ'
      },
      correctIndex: 5
    },
    {
      id: 'tl-07',
      timestamp: '22:20',
      timeSortValue: 1340,
      title: {
        en: 'The Killer Rigging the Window Latch',
        bn: 'জানালা বাইরে থেকে আটকে খুনির পলায়ন'
      },
      description: {
        en: 'Nawrin Sultana slips out the study window into the rose garden, threads her waxed nylon string through the jamb to flip the cam latch locked, and flees to the conservatory.',
        bn: 'নওরীন জানালা দিয়ে বাগানে নেমে মোম মাখানো সুতো দিয়ে জানালার ছিটকিনি বাইরে থেকে আটকে পালিয়ে যায়।'
      },
      source: {
        en: 'Window Wax Residue & Rashed\'s Sighting',
        bn: 'মোমের অবশিষ্টাংশ ও রাশেদের সাক্ষ্য'
      },
      verifiedLocation: {
        en: 'Garden Rose Terrace',
        bn: 'গোলাপ বাগান কার্নিশ'
      },
      relatedSuspectId: 'suspect-02-evelyn',
      correctIndex: 6
    },
    {
      id: 'tl-08',
      timestamp: '22:30',
      timeSortValue: 1350,
      title: {
        en: 'Nawrin Stages the False Voice Alibi',
        bn: 'নওরীনের সাজানো কণ্ঠস্বরের মিথ্যা অ্যালিবাই'
      },
      description: {
        en: 'Nawrin knocks on the locked study door in the corridor and speaks aloud, pretending Mahmudul responded to create an alibi after he was already dead.',
        bn: 'মাহমুদুল সাহেব ইতিপূর্বেই মারা যাওয়ার পরও নওরীন দরজায় নক করে একা একাই কথা বলে মিথ্যা অ্যালিবাই সাজায়।'
      },
      source: {
        en: 'Contradicted Alibi Statement',
        bn: 'খণ্ডিত অ্যালিবাই জবানবন্দি'
      },
      verifiedLocation: {
        en: 'Study Outer Door',
        bn: 'পড়ার ঘরের বাইরের করিডোর'
      },
      relatedSuspectId: 'suspect-02-evelyn',
      correctIndex: 7
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: {
        en: 'Timeline & Environmental Discrepancies',
        bn: 'সময়ের অসঙ্গতি ও অপরাধস্থল'
      },
      hintText: {
        en: 'Direction: Pay close attention to the physical time evidence inside the locked study. Compare the mechanical state of the antique grandfather clock with the various alibis and timestamps claimed by the suspects during questioning.',
        bn: 'দিকনির্দেশনা: পড়ার ঘরের ভেতরের সময় সংক্রান্ত ভৌত আলামতের দিকে নজর দিন। প্রাচীন গ্র্যান্ডফাদার ঘড়ির থেমে যাওয়া সময়টির সাথে সন্দেহভাজনদের জেরায় দেওয়া সময়রেখা ও অ্যালিবাই তুলনা করুন।'
      }
    },
    {
      level: 2,
      cost: 100,
      title: {
        en: 'The Sealed Room Mechanism',
        bn: 'বদ্ধ ঘরের কৌশলগত যোগসূত্র'
      },
      hintText: {
        en: 'Relationship: Consider how an ostensibly sealed room could be closed from the outside. Look at the leaded bay window latch and compare its mechanical marks with the physical filament recovered from the rose garden terrace.',
        bn: 'যোগসূত্র: ভেবে দেখুন আপাত দৃষ্টিতে ভেতর থেকে অবরুদ্ধ ঘর কীভাবে বাইরে থেকে বন্ধ করা সম্ভব। কাচের বে উইন্ডোর ছিটকিনির দাগের সাথে বাইরের গোলাপ বাগান থেকে উদ্ধারকৃত ফিলামেন্টের সম্পর্ক মেলাবার চেষ্টা করুন।'
      }
    },
    {
      level: 3,
      cost: 200,
      title: {
        en: 'Exposing the Fabricated Alibi',
        bn: 'সাজানো অ্যালিবাই উন্মোচন'
      },
      hintText: {
        en: 'Investigative Guidance: A witness claims to have spoken with the victim at 22:30, yet the convulsive impact in the study froze the mechanical clock at 22:14. Whoever claims the victim was alive and speaking at 22:30 is maintaining a fabricated alibi. Check who had custody of the bookbinding supplies and the drink tray.',
        bn: 'তদন্ত নির্দেশিকা: একজন প্রত্যক্ষদর্শী দাবি করেছেন যে তিনি রাত ১০:৩০-এ ভুক্তভোগীর সাথে কথা বলেছিলেন, অথচ তীব্র খিঁচুনির আঘাতে ঘড়িটি ১০:১৪-তে থেমে গিয়েছিল। যিনি ১০:৩০-এ ভুক্তভোগীকে জীবিত দেখার দাবি করছেন, তার অ্যালিবাই সাজানো। বই বাঁধাইয়ের সুতো এবং পানীয়ের ট্রে কার দায়িত্বে ছিল তা যাচাই করুন।'
      }
    }
  ],
  solution: {
    culpritId: 'suspect-02-evelyn',
    culpritName: {
      en: 'Nawrin Sultana',
      bn: 'নওরীন সুলতানা'
    },
    motiveDescription: {
      en: 'Covering up $450,000 in embezzled endowment funds that Mahmudul discovered and planned to report to prosecutors the next morning.',
      bn: 'ট্রাস্ট ফান্ডের সাড়ে চার লাখ ডলার আত্মসাৎ করার অপরাধ গোপন করা, যা মাহমুদুল সাহেব ধরে ফেলেছিলেন এবং পরদিন সকালে পুলিশের হাতে তুলে দিতে চেয়েছিলেন।'
    },
    methodDescription: {
      en: 'Poisoned the Armagnac decanter before delivering it, then escaped via the study window and locked the latch from outside using a loop of waxed nylon bookbinder\'s thread.',
      bn: 'পরিবেশনের আগেই ব্র্যান্ডির ডিক্যান্টারে সায়ানাইড মেশানো হয়। এরপর জানালা দিয়ে পালিয়ে মোম মাখানো শক্ত নাইলন সুতোর ফাঁস দিয়ে বাইরে থেকে জানালার ছিটকিনি আটকে দেওয়া হয়।'
    },
    approximateTime: {
      en: '22:14',
      bn: 'রাত ১০:১৪'
    },
    crucialEvidenceIds: [
      'clue-02-audited-ledger',
      'clue-03-stopped-clock',
      'clue-05-window-latch',
      'clue-07-nylon-thread',
      'clue-08-torn-envelope'
    ],
    falseAlibiSuspectId: 'suspect-02-evelyn',
    fullCaseDebriefing: {
      en: 'Nawrin Sultana spent months systematically transferring $450,000 from the Chowdhury Rare Books Endowment into private accounts. When Mahmudul Haque Chowdhury conducted a surprise quarterly audit on the evening of October 14, he discovered the massive shortfall and wrote in his ledger that he would summon the Crown Prosecutor at dawn.\n\nFaced with prison, Nawrin acted swiftly. Having previously acquired potassium cyanide under her antiquarian front company, she intercepted the evening Armagnac tray from housekeeper Shahana Begum at 21:45 and stirred the cyanide directly into the decanter. Mahmudul poured his drink at 22:00 and suffered fatal convulsions at 22:14, his falling body hurling a bronze paperweight into the grandfather clock and stopping it dead.\n\nNawrin had already prepared her "impossible" locked room trick: she entered the study, ensured Mahmudul was dead, bolted the corridor door from inside, and slipped out through the ground-floor leaded window into the rainy garden. Using her professional bookbinder\'s waxed nylon thread looped around the window latch arm, she pulled the thread from outside until the brass latch clicked locked, then pulled the string free. At 22:30, she conspicuously staged a conversation outside the study door for Shahana to hear, fabricating an alibi. But the frozen clock at 22:14, the thread on the rose thorns, and the cyanide purchase receipt irrevocably sealed her guilt.\n\nAlternative Suspect Debriefing:\n• Arman Haque Chowdhury: Deep in gambling debts, quarreled violently with Mahmudul, and stole the signet ring to pawn it at 16:15. However, soot analysis proved the codicil was burnt during his 17:00 quarrel, and he could not match the size 6 footprint.\n• Dr. Farhan Rahman: Feared exposure over experimental prescriptions, but had no access to the photographic reagent cyanide salt or the window thread mechanism.\n• Shahana Begum: Handled the tray originally, but her kitchen assistant corroborated her alibi from 22:00 to 22:45.\n• Rashed Karim: Desperate for the Byzantine Codex, but his size 11 shoes completely exonerated him from the garden footprint, and his 22:20 sighting of the fleeing figure helped corroborate the truth.',
      bn: 'নওরীন সুলতানা গত কয়েক মাস ধরে পরিকল্পিতভাবে চৌধুরী এস্টেটের ট্রাস্ট থেকে ৪,৫০,০০০ ডলার আত্মসাৎ করে ব্যক্তিগত গোপন অ্যাকাউন্টে পাঠিয়ে আসছিল। ১৪ অক্টোবর সন্ধ্যায় মাহমুদুল হক চৌধুরী আকস্মিক অডিটের মাধ্যমে এই বড় তছরুপ ধরে ফেলেন এবং খাতায় লেখেন যে তিনি পরদিন সকালেই পুলিশে অভিযোগ দায়ের করবেন।\n\nকারাগারে যাওয়ার ভয়ে নওরীন তাৎক্ষণিক হত্যার পরিকল্পনা করে। নিজের এন্টিক বুকশপের আড়ালে সে আগেই পটাশিয়াম সায়ানাইড সংগ্রহ করে রেখেছিল। রাত ৯:৪৫ মিনিটে সে গৃহপরিচারিকার কাছ থেকে ব্র্যান্ডির ট্রে নিয়ে নির্জনে পুরো বোতলে বিষ মিশিয়ে দেয়। রাত ১০:০০ টায় মাহমুদুল সাহেব সেই বিষাক্ত ব্র্যান্ডি পান করেন এবং রাত ১০:১৪ মিনিটে তীব্র খিঁচুনিতে মৃত্যুর কোলে ঢলে পড়েন। পড়ার সময় ছিটকে যাওয়া ব্রোঞ্জের পেপারওয়েটের আঘাতে গ্র্যান্ডফাদার ঘড়ির কাঁটা ১০:১৪-তে স্থায়ীভাবে থেমে যায়।\n\nএরপর নওরীন তার আপাত "অসম্ভব" বদ্ধ ঘরের কৌশল প্রয়োগ করে: ভেতর থেকে ভারী দরজার ছিটকিনি আটকে সে জানালা দিয়ে বাগানে নেমে পড়ে। এরপর নিজের বই বাঁধাইয়ের মোম মাখানো নাইলন সুতো দিয়ে বাইরে থেকে জানালার ছিটকিনি টেনে আটকে দেয় এবং সুতোটি নিজের দিকে টেনে বের করে নেয়। রাত ১০:৩০-এ করিডোরে দাঁড়িয়ে স্যারের সাথে একা একা কথা বলার ভান করে সে একটি মিথ্যা অ্যালিবাই সাজায়। কিন্তু রাত ১০:১৪-তে থেমে যাওয়া ঘড়ি, গোলাপের কাঁটায় আটকে থাকা সুতো এবং সায়ানাইড কেনার রসিদ তার সমস্ত অপরাধের প্রমাণ সন্দেহাতীতভাবে প্রতিষ্ঠিত করেছে।\n\nঅন্যান্য সন্দেহভাজনদের নিষ্পত্তি:\n• আরমান হক চৌধুরী: দেনাগ্রস্ত হয়ে কাকার সাথে ঝগড়া করেছিল এবং বিকেলে আংটি চুরি করে বন্ধক দিয়েছিল। তবে ছাইয়ের বিশ্লেষণ প্রমাণ করে উইলটি বিকেল ৫টার ঝগড়ায় পোড়ানো হয়েছিল এবং জানালার নিচের পদচিহ্ন তার বড় জুতার সাথে মেলেনি।\n• ডা. ফারহান রহমান: প্রেসক্রিপশন বিতর্ক নিয়ে শঙ্কিত ছিলেন, তবে তিনি কোনো বাণিজ্যিক ফটোগ্রাফিক সায়ানাইড কেনেননি।\n• শাহানা বেগম: ট্রে এনেছিলেন, তবে রান্নাঘরের সহকর্মী রাত ১০:০০ থেকে ১০:৪৫ পর্যন্ত তার উপস্থিতি নিশ্চিত করেছে।\n• রাশেদ করিম: বাইজেন্টাইন কোডেক্স নিয়ে ক্ষুব্ধ হলেও তার জুতার সাইজ ১১, যা কার্নিশের ৬ সাইজের মেয়েলি ছাপের সাথে একেবারেই মেলেনি।'
    },
    options: {
      motives: [
        {
          id: 'm-gambling',
          label: {
            en: 'Desperation to settle $300,000 in high-stakes gambling debts',
            bn: '৩ লাখ ডলারের জুয়ার জরুরি দেনা পরিশোধের মরিয়া চেষ্টা'
          }
        },
        {
          id: 'm-embezzle',
          label: {
            en: 'Concealing $450,000 in embezzled foundation funds about to be reported to police',
            bn: 'সাড়ে চার লাখ ডলার আত্মসাতের অপরাধ গোপন করা, যা পুলিশে জানানোর কথা ছিল'
          }
        },
        {
          id: 'm-codex',
          label: {
            en: 'Stealing the Byzantine Codex to prevent bankruptcy in the antiquities trade',
            bn: 'ব্যবসায় দেউলিয়া হওয়া ঠেকাতে বাইজেন্টাইন কোডেক্স চুরির চেষ্টা'
          }
        },
        {
          id: 'm-silence',
          label: {
            en: 'Silencing the victim regarding an illegal narcotics prescription',
            bn: 'নিষিদ্ধ ঘুমের ওষুধ ব্যবস্থাপত্রের ঘটনা ধামাচাপা দেওয়া'
          }
        }
      ],
      methods: [
        {
          id: 'met-decanter-thread',
          label: {
            en: 'Dissolved cyanide into decanter; escaped window and pulled latch shut with waxed nylon thread',
            bn: 'বোতলে সায়ানাইড মেশানো; জানালা দিয়ে পালিয়ে মোম মাখানো নাইলন সুতো টেনে ছিটকিনি বন্ধ করা'
          }
        },
        {
          id: 'met-hypodermic',
          label: {
            en: 'Injected lethal dose of morphine through keyhole while victim slept',
            bn: 'চাবির ছিদ্র দিয়ে মরফিনের প্রাণঘাতী ইনজেকশন প্রয়োগ করা'
          }
        },
        {
          id: 'met-cigar',
          label: {
            en: 'Laced Cuban cigars with cyanide gas in the fireplace',
            bn: 'সিগারে সায়ানাইড মিশিয়ে ফায়ারপ্লেসের ধোঁয়ায় বিষাক্ত গ্যাস তৈরি করা'
          }
        },
        {
          id: 'met-bludgeon',
          label: {
            en: 'Struck victim with brass paperweight and staged poisoning afterwards',
            bn: 'ব্রোঞ্জের পেপারওয়েট দিয়ে মাথায় আঘাত করে পরে বিষ প্রয়োগের নাটক সাজানো'
          }
        }
      ],
      times: [
        {
          id: 't-2115',
          label: {
            en: 'Between 21:00 and 21:30',
            bn: 'রাত ৯:০০ থেকে ৯:৩০-এর মধ্যে'
          }
        },
        {
          id: 't-2214',
          label: {
            en: 'Precisely at 22:14 (as recorded by the shattered grandfather clock)',
            bn: 'ঠিক রাত ১০:১৪ মিনিটে (যা ভাঙা গ্র্যান্ডফাদার ঘড়িতে রেকর্ড হয়েছিল)'
          }
        },
        {
          id: 't-2230',
          label: {
            en: 'At 22:30 (during the reported corridor conversation)',
            bn: 'রাত ১০:৩০ মিনিটে (করিডোরের কথিত কথোপকথনের সময়)'
          }
        },
        {
          id: 't-2300',
          label: {
            en: 'After 23:00 during the breaking of the door',
            bn: 'রাত ১১:০০ টার পর দরজা ভাঙার সময়'
          }
        }
      ]
    }
  }
};