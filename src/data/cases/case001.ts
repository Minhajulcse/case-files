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
  difficulty: 'Standard',
  estimatedTime: '25-35 mins',
  victimOrSubject: {
    en: 'Lord Arthur Pendelton (Age 64, Industrialist & Antiquities Collector)',
    bn: 'লর্ড আর্থার পেন্ডেলটন (বয়স ৬৪, শিল্পপতি ও প্রাচীন প্রত্নতত্ত্ব সংগ্রাহক)'
  },
  incidentDate: {
    en: 'October 14, 2024 — 22:30 Hours',
    bn: '১৪ অক্টোবর, ২০২৪ — রাত ১০:৩০ টা'
  },
  location: {
    en: 'Pendelton Manor, Private Study, Blackthorn Ridge',
    bn: 'পেন্ডেলটন ম্যানর, ব্যক্তিগত পড়ার ঘর, ব্ল্যাকথর্ন রিজ'
  },
  synopsis: {
    en: 'Lord Arthur Pendelton was found slumped over his mahogany desk inside his private study, poisoned with potassium cyanide in his vintage brandy. The study door was heavy oak, bolted from the inside. The single bay window was latched shut from inside. Five people were inside the manor during the storm. Each claims an ironclad alibi, but one of them orchestrated an impossible crime.',
    bn: 'লর্ড আর্থার পেন্ডেলটনকে তার ব্যক্তিগত পড়ার ঘরের মেহগনি টেবিলের ওপর নিথর অবস্থায় পাওয়া যায়। তার ব্র্যান্ডির গ্লাসে মেশানো ছিল মারাত্মক পটাশিয়াম সায়ানাইড। মেহগনির ভারী দরজাটি ভেতর থেকে ছিটকিনি আটকানো ছিল এবং একমাত্র জানালাটিও ভেতর থেকেই বন্ধ ছিল। ঝড়ের রাতে প্রাসাদে মাত্র পাঁচজন লোক উপস্থিত ছিল। প্রত্যেকেরই রয়েছে নিশ্ছিদ্র অ্যালিবাই, কিন্তু তাদের একজনই ঘটিয়েছে এই আপাত অসম্ভব হত্যাকাণ্ড।'
  },
  briefing: {
    chiefMemo: {
      en: 'Detective, the local precinct is baffled. The coroner confirms Arthur died between 22:00 and 22:30 from rapid cyanide intoxication. The study was locked tight; the servants had to break the door with an axe at 23:05 when Arthur failed to answer. Meticulously examine the room, interrogate all five suspects, connect physical clues to shatter the false alibi, and deliver the indictment.',
      bn: 'গোয়েন্দা, স্থানীয় থানা এই রহস্যের কূলকিনারা করতে পারছে না। ময়নাতদন্তের রিপোর্ট অনুযায়ী রাত ১০:০০ থেকে ১০:৩০-এর মধ্যে সায়ানাইডের তীব্র বিষক্রিয়ায় আর্থারের মৃত্যু ঘটে। পড়ার ঘরটি ভেতর থেকে সম্পূর্ণ অবরুদ্ধ ছিল; কোনো সাড়াশব্দ না পেয়ে রাত ১১:০৫-এ কুঠার দিয়ে দরজা ভেঙে কর্মচারীরা ভেতরে ঢোকে। অপরাধস্থল খুঁটিয়ে দেখুন, পাঁচজন সন্দেহভাজনকে জেরা করুন এবং আলামতগুলো যুক্ত করে মিথ্যা অ্যালিবাই ভেঙে অপরাধীকে আইনের আওতায় আনুন।'
    },
    initialStatus: {
      en: 'Study sealed under police tape. Coroner report pending review.',
      bn: 'পড়ার ঘরটি পুলিশের টেপ দিয়ে সিলগালা করা। ময়নাতদন্ত রিপোর্ট পর্যালোচনার অপেক্ষায়।'
    },
    keyObjectives: [
      {
        en: 'Investigate Arthur Pendelton\'s locked study for hidden physical anomalies.',
        bn: 'আর্থার পেন্ডেলটনের তালাবদ্ধ পড়ার ঘরে কোনো শারীরিক বা যান্ত্রিক অসঙ্গতি আছে কিনা তা অনুসন্ধান করুন।'
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
      en: 'Pendelton Manor — The Private Study',
      bn: 'পেন্ডেলটন ম্যানর — ব্যক্তিগত পড়ার ঘর'
    },
    roomDescription: {
      en: 'A cavernous Victorian study lined with floor-to-ceiling bookshelves, a heavy Persian carpet, a blazing marble fireplace, an antique grandfather clock, a crystal liquor sideboard, and a large mahogany desk where Lord Pendelton drew his last breath.',
      bn: 'একটি সুবিশাল ভিক্টোরিয়ান আমলের পড়ার ঘর। ছাদ পর্যন্ত বইয়ের তাক, মেঝেতে ভারী পারস্য গালিচা, মার্বেলের ফায়ারপ্লেস, প্রাচীন গ্র্যান্ডফাদার ক্লক, কাচের পানীয় সাইডবোর্ড এবং মেহগনি কাঠের তৈরি বিশাল টেবিল যেখানে লর্ড পেন্ডেলটন শেষ নিঃশ্বাস ত্যাগ করেন।'
    },
    sceneTheme: 'victorian_study',
    hotspots: [
      {
        id: 'hs-01-desk',
        name: {
          en: 'Mahogany Writing Desk & Victim',
          bn: 'মেহগনি টেবিল ও ভুক্তভোগীর মরদেহ'
        },
        x: 48,
        y: 52,
        radius: 30,
        description: {
          en: 'Lord Arthur is slumped over an open leather ledger. An overturned crystal snifter of brandy sits beside his right hand.',
          bn: 'একটি খোলা লেজারের ওপর লর্ড আর্থার নুয়ে পড়ে আছেন। তার ডান হাতের পাশেই উল্টে থাকা একটি ক্রিস্টালের ব্র্যান্ডি গ্লাস।'
        },
        revealsEvidenceId: 'clue-01-brandy-snifter',
        discoveryNote: {
          en: 'Recovered the crystal snifter. The amber residue emits an unmistakable bitter almond scent: potassium cyanide.',
          bn: 'ক্রিস্টালের গ্লাসটি পরীক্ষা করে দেখা গেল। তলায় থাকা তরল থেকে তিক্ত বাদামের তীব্র গন্ধ বের হচ্ছে: নিশ্চিতভাবেই পটাশিয়াম সায়ানাইড।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-01-ledger',
        name: {
          en: 'Victim\'s Financial Ledger',
          bn: 'আর্থারের আর্থিক হিসেবের খাতা (লেজার)'
        },
        x: 54,
        y: 48,
        radius: 25,
        description: {
          en: 'A leather-bound estate ledger with freshly annotated audit marks in red ink.',
          bn: 'চামড়ায় বাঁধানো এস্টেট লেজার, যাতে লাল কালিতে সদ্য নিরীক্ষার দাগ ও নোট দেওয়া আছে।'
        },
        revealsEvidenceId: 'clue-02-audited-ledger',
        discoveryNote: {
          en: 'Found an opened estate ledger with recent audit annotations flagging $450,000 missing from the charity fund.',
          bn: 'খোলা লেজারে দেখা গেল চার লাখ পঞ্চাশ হাজার ডলারের গরমিল চিহ্নিত করে লাল কালিতে সতর্কবার্তা লেখা আছে।'
        },
        iconType: 'document'
      },
      {
        id: 'hs-01-clock',
        name: {
          en: 'Antique Grandfather Clock',
          bn: 'প্রাচীন গ্র্যান্ডফাদার ক্লক'
        },
        x: 18,
        y: 38,
        radius: 28,
        description: {
          en: 'A towering brass pendulum grandfather clock. The glass face is fractured, and the brass hands are frozen.',
          bn: 'পিতলের পেণ্ডুলামযুক্ত সুবিশাল ঘড়ি। কাচের ডায়ালটি চূর্ণবিচূর্ণ এবং কাঁটা দুটি স্থির হয়ে থেমে আছে।'
        },
        revealsEvidenceId: 'clue-03-stopped-clock',
        discoveryNote: {
          en: 'The clock hands are arrested precisely at 22:14. Inside the casing lies a heavy bronze paperweight knocked from the side table during Arthur\'s violent convulsions.',
          bn: 'ঘড়ির কাঁটা ঠিক রাত ১০:১৪ মিনিটে স্থির হয়ে আছে। ঘড়ির খোলসের ভেতর একটি ভারী ব্রোঞ্জের পেপারওয়েট পাওয়া গেছে, যা বিষক্রিয়ার খিঁচুনির সময় ছিটকে এসে ঘড়িতে আঘাত করেছিল।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-01-liquor',
        name: {
          en: 'Crystal Liquor Sideboard',
          bn: 'ক্রিস্টাল পানীয়ের সাইডবোর্ড'
        },
        x: 82,
        y: 45,
        radius: 26,
        description: {
          en: 'A silver tray holding an antique crystal decanter of vintage 1948 Armagnac and several clean glasses.',
          bn: 'রূপার ট্রেতে রাখা প্রাচীন ক্রিস্টাল ডিক্যান্টার ভর্তি ১৯৪৮ সালের আরমাগনাক ব্র্যান্ডি ও কয়েকটি পরিষ্কার গ্লাস।'
        },
        revealsEvidenceId: 'clue-04-poisoned-decanter',
        discoveryNote: {
          en: 'The crystal decanter contains trace residue of cyanide powder mixed directly into the liquor stock, not just the glass.',
          bn: 'ডিক্যান্টারে সংরক্ষিত গোটা ব্র্যান্ডির বোতলেই সায়ানাইড মেশানো ছিল, শুধুমাত্র গ্লাসে নয়।'
        },
        iconType: 'flask'
      },
      {
        id: 'hs-01-window',
        name: {
          en: 'Leaded Glass Bay Window',
          bn: 'কাচের খড়খড়িযুক্ত বে উইন্ডো'
        },
        x: 32,
        y: 28,
        radius: 26,
        description: {
          en: 'A leaded mullion window overlooking the rain-swept rose garden. The interior brass cam latch is in the locked horizontal position.',
          bn: 'বৃষ্টিস্নাত গোলাপ বাগানের দিকে মুখ করা একটি জানালা। ভেতরের পিতলের ছিটকিনিটি আনুভূমিকভাবে বন্ধ অবস্থায় রয়েছে।'
        },
        revealsEvidenceId: 'clue-05-window-latch',
        discoveryNote: {
          en: 'Inspection of the window frame reveals fine beeswax residue and micro-grooves along the brass latch axle, suggesting a mechanical trick latch.',
          bn: 'জানালার ফ্রেমে মোমের সূক্ষ্ম অবশিষ্টাংশ এবং ছিটকিনির কব্জায় সূক্ষ্ম দাগ পাওয়া গেছে, যা যান্ত্রিক কারসাজির ইঙ্গিত দেয়।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-01-fireplace',
        name: {
          en: 'Marble Fireplace & Hearth',
          bn: 'মার্বেল পাথরের ফায়ারপ্লেস'
        },
        x: 68,
        y: 65,
        radius: 25,
        description: {
          en: 'Dying embers glow in the marble hearth. Among the gray ashes rests a partially charred sheet of parchment.',
          bn: 'ফায়ারপ্লেসে নিভে আসা কয়লা। ছাইয়ের স্তূপের মাঝে আধপোড়া একটি আইনি দলিলের টুকরো চোখে পড়ে।'
        },
        revealsEvidenceId: 'clue-06-burnt-will',
        discoveryNote: {
          en: 'Extracted a partially burnt legal document: a drafted codicil to Arthur\'s will, cutting off nephew Julian Pendelton and ordering an immediate audit of secretary Evelyn Vance.',
          bn: 'উদ্ধারকৃত দলিলটি লর্ড আর্থারের উইলের খসড়া; যেখানে ভাইপো জুলিয়ানকে ত্যাজ্য করার এবং সেক্রেটারি ইভলিন ভ্যান্সের হিসাব তদন্তের নির্দেশ ছিল।'
        },
        iconType: 'document'
      },
      {
        id: 'hs-01-garden-sill',
        name: {
          en: 'Exterior Window Sill (Garden Terrace)',
          bn: 'বাইরের জানালার কার্নিশ (গোলাপ বাগান)'
        },
        x: 31,
        y: 68,
        radius: 22,
        description: {
          en: 'The muddy terrace bed immediately beneath the study window among the rose thorns.',
          bn: 'পড়ার ঘরের জানালার ঠিক নিচের ভেজা কাদা এবং গোলাপের ঝোপের মধ্যবর্তী অংশ।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-07-nylon-thread',
        discoveryNote: {
          en: 'Trapped on a rose thorn directly below the study window: a 40cm strand of high-tensile waxed nylon monofilament and a size 6 dress shoe print.',
          bn: 'গোলাপের কাঁটায় আটকে থাকা ৪০ সেন্টিমিটার লম্বা মোম মাখানো শক্ত নাইলন সুতো এবং ৬ সাইজের একটি মেয়েলি জুতার ছাপ।'
        },
        iconType: 'footprint'
      },
      {
        id: 'hs-01-wastebasket',
        name: {
          en: 'Under-Desk Wastebasket',
          bn: 'টেবিলের নিচের ময়লার ঝুড়ি'
        },
        x: 44,
        y: 72,
        radius: 20,
        description: {
          en: 'A brass wastebasket tucked beneath the mahogany kneehole desk.',
          bn: 'মেহগনি টেবিলের নিচে রাখা একটি পিতলের ময়লা ফেলার পাত্র।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-08-torn-envelope',
        discoveryNote: {
          en: 'Found a torn black-market apothecary receipt for photographic toning chemicals (potassium cyanide salt) shipped to a post office box in town.',
          bn: 'ফটোগ্রাফির রাসায়নিক নামে কালোবাজার থেকে কেনা পটাশিয়াম সায়ানাইডের ছেঁড়া রসিদ পাওয়া গেছে।'
        },
        iconType: 'document'
      }
    ]
  },
  suspects: [
    {
      id: 'suspect-01-julian',
      name: {
        en: 'Julian Pendelton',
        bn: 'জুলিয়ান পেন্ডেলটন'
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
        en: 'Claims he was locked in the Manor billiard room from 21:30 to 22:45 practicing his trick shots while drinking whiskey.',
        bn: 'তার দাবি রাত ৯:৩০ থেকে ১০:৪৫ পর্যন্ত সে বিলিয়ার্ড রুমে একা একা হুইস্কি খাচ্ছিল এবং খেলছিল।'
      },
      personality: {
        en: 'Nervous, arrogant, sweat beads on his brow, chain-smoker.',
        bn: 'নার্ভাস, দাম্ভিক, কপালে ঘামের ফোঁটা, ঘন ঘন সিগারেট টানে।'
      },
      secrets: {
        en: 'Stole Arthur\'s diamond signet ring earlier that afternoon to pawn it.',
        bn: 'সেদিন বিকেলে কাকার আলমারি থেকে পারিবারিক হীরার আংটি চুরি করে বন্ধক দিয়েছিল।'
      },
      avatarSeed: 'Julian',
      avatarColor: '#c2410c',
      dialogueTree: [
        {
          id: 'dlg-j-1',
          prompt: {
            en: 'Where were you between 22:00 and 22:30 tonight?',
            bn: 'রাত ১০:০০ থেকে ১০:৩০-এর মধ্যে আপনি কোথায় ছিলেন?'
          },
          response: {
            en: 'I already told your deputies! I was in the billiard room alone, playing nine-ball and trying to drown out the thunderstorm with Scotch. I didn\'t leave until Beatrice started screaming at 23:00.',
            bn: 'আমি আপনার অফিসারদের আগেই বলেছি! আমি বিলিয়ার্ড রুমে একা ছিলাম, নাইন-বল খেলছিলাম আর স্কচ খাচ্ছিলাম। রাত ১১টায় বিয়াট্রিসের চিৎকার শোনার আগ পর্যন্ত আমি বের হইনি।'
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
            en: 'He... he was always threatening that! Arthur enjoyed holding the purse strings over my neck. But I wouldn\'t kill him! He was my only lifeline to the estate trustees!',
            bn: 'তিনি... তিনি প্রায়ই এই হুমকি দিতেন! কিন্তু তাই বলে আমি তাকে খুন করতে যাব কেন? তিনিই তো ছিলেন আমার একমাত্র ভরসা!'
          },
          reactionMood: 'nervous'
        },
        {
          id: 'dlg-j-3',
          prompt: {
            en: 'Did you enter Arthur\'s study at any point this evening?',
            bn: 'আজ সন্ধ্যায় কি আপনি পড়ার ঘরে ঢুকেছিলেন?'
          },
          response: {
            en: 'At 17:00, yes. We had a row about my debts. He locked the study door right behind me when I stormed out. I never stepped foot back in that cursed room.',
            bn: 'বিকেল ৫টায় ঢুকেছিলাম। দেনা নিয়ে তুমুল ঝগড়া হয়। আমি বের হওয়ার পর তিনি দরজা বন্ধ করে দিয়েছিলেন। এরপর আর ওমুখো হইনি।'
          },
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-06-burnt-will',
          reactionText: {
            en: 'Julian bluffs, his hands shaking: "That burnt codicil? Arthur threw it into the hearth right in front of me during our argument at five o\'clock! He said, \'Look what you\'ve brought upon yourself, Julian!\' But the fire wasn\'t hot enough to consume the seal."',
            bn: 'জুলিয়ান কেঁপে ওঠে: "ওই আধপোড়া উইল? বিকেল ৫টায় ঝগড়ার সময় কাকা নিজেই ওটা আগুনে ফেলে দিয়েছিলেন! তিনি বলেছিলেন, \'দেখ তোর জন্য কী অপেক্ষা করছে!\' কিন্তু আগুনে ওটা পুরো পোড়েনি।"'
          },
          stressIncrease: 25,
          exposesLie: false
        },
        {
          evidenceId: 'clue-09-pawn-receipt',
          reactionText: {
            en: 'Julian pales: "Fine! I took his signet ring from the hallway coat! I was desperate for cash! But stealing jewelry doesn\'t make me a poisoner!"',
            bn: 'জুলিয়ান ফ্যাকাশে হয়ে বলে: "ঠিক আছে! আমি স্বীকার করছি কোটের পকেট থেকে আংটিটা আমিই নিয়েছিলাম! টাকার খুব দরকার ছিল! কিন্তু চোর হলেই তো আর খুনি হওয়া যায় না!"'
          },
          stressIncrease: 40,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-02-evelyn',
      name: {
        en: 'Evelyn Vance',
        bn: 'ইভলিন ভ্যান্স'
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
        en: 'Arthur discovered Evelyn was systematically siphoning funds from the Pendelton Rare Books Endowment into private Swiss accounts.',
        bn: 'আর্থার আবিষ্কার করেছিলেন যে ইভলিন ট্রাস্ট ফান্ডের সাড়ে চার লাখ ডলার গোপনে নিজের সুইস অ্যাকাউন্টে সরিয়ে নিচ্ছিলেন।'
      },
      alibi: {
        en: 'Claims she was in the library cataloging manuscripts until 22:40, then knocked on Arthur\'s door at 22:30 and heard him cough and grumble inside.',
        bn: 'দাবি করে যে রাত ১০:৪০ পর্যন্ত সে লাইব্রেরিতে ছিল, এবং রাত ১০:৩০-এ পড়ার ঘরের দরজায় নক করলে আর্থার ভেতর থেকে তাকে চলে যেতে বলেন।'
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
            en: 'Walk me through your movements around 22:00 to 22:30.',
            bn: 'রাত ১০:০০ থেকে ১০:৩০-এর মধ্যে আপনি কী করছিলেন?'
          },
          response: {
            en: 'I was in the east library cross-referencing auction receipts. At approximately 22:30, I walked past the study to deliver the evening mail. I tapped on the door. Arthur called out from inside: "Leave me, Evelyn, I am indisposed!" So I placed the letters on the credenza outside.',
            bn: 'আমি পূর্ব লাইব্রেরিতে নিলামের রসিদ মেলাচ্ছিলাম। প্রায় ১০:৩০ নাগাদ চিঠি দিতে এসে দরজায় মৃদু টোকা দিই। আর্থার ভেতর থেকে গম্ভীর গলায় বললেন: "আমাকে একা থাকতে দাও ইভলিন, আমি অসুস্থ বোধ করছি!" তাই চিঠিগুলো বাইরের টেবিলে রেখে যাই।'
          },
          reactionMood: 'calm',
          revealsContradictionId: 'contra-evelyn-time'
        },
        {
          id: 'dlg-e-2',
          prompt: {
            en: 'Did Lord Pendelton mention anything about the financial audit?',
            bn: 'লর্ড পেন্ডেলটন কি আর্থিক নিরীক্ষা বা অডিট নিয়ে কিছু বলেছিলেন?'
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
            en: 'Only Lord Arthur held the master key to the study deadbolt. When he locked himself in, not even Beatrice or I could enter without him opening it.',
            bn: 'কেবলমাত্র লর্ড আর্থারের কাছেই পড়ার ঘরের চাবি থাকত। তিনি ভেতর থেকে লক করলে কারও পক্ষেই ঢোকা সম্ভব ছিল না।'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-stopped-clock',
          reactionText: {
            en: 'Evelyn\'s mask slips for a fraction of a second: "The grandfather clock stopped at 22:14? That... that must be a coincidence or a mechanical fault! I am certain I heard his voice at 22:30!"',
            bn: 'ইভলিনের মুখ নিমেষে ফ্যাকাশে হয়ে যায়: "ঘড়ি রাত ১০:১৪ মিনিটে থেমে গেছে? ওটা নিশ্চয়ই কোনো কাকতালীয় যান্ত্রিক ত্রুটি! আমি শপথ করে বলছি রাত ১০:৩০-এ তার গলা শুনেছি!"'
          },
          stressIncrease: 35,
          exposesLie: true
        },
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: {
            en: 'Evelyn recoils slightly: "High-tensile waxed nylon thread? I... I use that thread for rebinding 18th-century leather folios in the archive. Why would that be on the garden sill?"',
            bn: 'ইভলিন কিছুটা শিউরে ওঠে: "মোম মাখানো নাইলনের সুতো? ওটা তো আমি লাইব্রেরির পুরনো দুর্লভ বই বাঁধাইয়ের জন্য ব্যবহার করি। ওটা বাগানের কার্নিশে কীভাবে গেল?"'
          },
          stressIncrease: 50,
          exposesLie: true
        },
        {
          evidenceId: 'clue-02-audited-ledger',
          reactionText: {
            en: 'Evelyn tightens her lips: "Arthur was growing paranoid in his old age. Those red annotations are speculative figures, nothing more."',
            bn: 'ইভলিন ঠোঁট চেপে ধরে: "বৃদ্ধ বয়সে আর্থার সবাইকে সন্দেহ করতেন। লাল কালির ওই হিসেবগুলো কাল্পনিক অনুমান ছাড়া কিছুই নয়।"'
          },
          stressIncrease: 30
        }
      ]
    },
    {
      id: 'suspect-03-finch',
      name: {
        en: 'Dr. Alistair Finch',
        bn: 'ডা. অ্যালিস্টার ফিঞ্চ'
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
        en: 'Arthur threatened to report Dr. Finch to the medical board for illegally prescribing experimental narcotics.',
        bn: 'নিষিদ্ধ ও পরীক্ষামূলক ঘুমের ওষুধ প্রেসক্রাইব করার দায়ে আর্থার ফিঞ্চকে মেডিকেল কাউন্সিলে রিপোর্ট করার হুঁশিয়ারি দিয়েছিলেন।'
      },
      alibi: {
        en: 'Claims he was in the manor guest room reading medical journals from 21:00 onwards until alerted by the commotion.',
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
      avatarSeed: 'Finch',
      avatarColor: '#16a34a',
      dialogueTree: [
        {
          id: 'dlg-f-1',
          prompt: {
            en: 'What was your professional assessment of Arthur\'s health recently?',
            bn: 'সাম্প্রতিক সময়ে আর্থারের শারীরিক অবস্থা কেমন ছিল?'
          },
          response: {
            en: 'Arthur suffered from chronic hypertension and mild angina. I prescribed digitalis and mild sedatives. He was irritable, under great stress from family disputes, but physically resilient.',
            bn: 'আর্থারের উচ্চ রক্তচাপ এবং অ্যানজাইনা ছিল। আমি তাকে হালকা সিডেটিভ দিতাম। পারিবারিক কলহের কারণে তিনি বেশ মানসিক চাপে ছিলেন।'
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
            en: 'Did you prepare or serve Arthur\'s drinks this evening?',
            bn: 'আজ সন্ধ্যায় কি আপনি আর্থারকে কোনো পানীয় পরিবেশন করেছিলেন?'
          },
          response: {
            en: 'Certainly not. Arthur was fiercely ritualistic. Every night at 21:50, Beatrice set the crystal Armagnac decanter on his study sideboard, and Arthur poured his own nightcap.',
            bn: 'একদমই না। আর্থারের নির্দিষ্ট নিয়ম ছিল। প্রতি রাতে ৯:৫০-এ বিয়াট্রিস তার সাইডবোর্ডে ব্র্যান্ডির বোতল রেখে আসত, আর আর্থার নিজে ঢেলে খেতেন।'
          },
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-04-poisoned-decanter',
          reactionText: {
            en: 'Dr. Finch peers closely: "Remarkable. The poison was dissolved in the decanter itself, not merely smeared on the rim. Whoever did this had advance access to the study before it was sealed."',
            bn: 'ডা. ফিঞ্চ ঝুঁকে দেখেন: "ভয়াবহ কাণ্ড! বিষ সরাসরি ডিক্যান্টারের ভেতরের তরলে মেশানো হয়েছিল, গ্লাসে নয়। যে এটা করেছে সে ঘর বন্ধ হওয়ার আগেই ভেতরে ঢুকেছিল।"'
          },
          stressIncrease: 10
        },
        {
          evidenceId: 'clue-08-torn-envelope',
          reactionText: {
            en: 'Dr. Finch inspects the apothecary slip: "This PO box is registered under \'E. V. Antiquarian Books\'. That isn\'t my signature, detective. That is Evelyn Vance\'s handwriting."',
            bn: 'ডা. ফিঞ্চ রসিদটি দেখে বলেন: "এই পিও বক্সটি \'ই. ভি. বুকস\'-এর নামে। এটা আমার সই নয়, এটি নিশ্চিতভাবেই ইভলিন ভ্যান্সের হাতের লেখা।"'
          },
          stressIncrease: 0,
          revealsClueId: 'clue-10-handwriting-sample'
        }
      ]
    },
    {
      id: 'suspect-04-beatrice',
      name: {
        en: 'Beatrice Morales',
        bn: 'বিয়াট্রিস মোরালেস'
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
        en: 'Arthur had recently drafted an amendment requiring all household staff to undergo lie detector tests following theft of antique silverware.',
        bn: 'রুপার বাসন চুরির ঘটনায় আর্থার সকল গৃহকর্মীকে দিয়ে লাই ডিটেক্টর টেস্ট করানোর ঘোষণা দিয়েছিলেন।'
      },
      alibi: {
        en: 'Was in the kitchen preparing midnight broth with the kitchen maid between 22:00 and 22:45.',
        bn: 'রাত ১০:০০ থেকে ১০:৪৫ পর্যন্ত রান্নাঘরে সুপ তৈরি করছিলেন।'
      },
      personality: {
        en: 'Fretful, religious, clutches a wooden rosary, speaks in hushed whispers.',
        bn: 'ভীতু, ধর্মপ্রাণ, হাতে কাঠের জপমালা, ফিসফিস করে কথা বলে।'
      },
      secrets: {
        en: 'Knew about the secret escape door behind the hallway tapestry, but insists it was locked with rusted iron bolts.',
        bn: 'দেওয়ালের গোপন দরজার কথা জানত, তবে সেটি বহু বছর ধরে জং ধরা ছিটকিনিতে বন্ধ।'
      },
      avatarSeed: 'Beatrice',
      avatarColor: '#9333ea',
      dialogueTree: [
        {
          id: 'dlg-b-1',
          prompt: {
            en: 'Who was the last person you saw entering Lord Pendelton\'s study?',
            bn: 'লর্ড পেন্ডেলটনের পড়ার ঘরে শেষ কাকে ঢুকতে দেখেছিলেন?'
          },
          response: {
            en: 'I brought his hot water and Armagnac decanter to the study door at 21:45. Miss Evelyn was standing right outside with a stack of papers. She took the tray from my hands, saying she would set it inside for his Lordship.',
            bn: 'আমি রাত ৯:৪৫-এ ব্র্যান্ডির বোতল আর গরম পানির ট্রে নিয়ে যাচ্ছিলাম। মিস ইভলিন বাইরে দাঁড়িয়ে ছিলেন। তিনি বললেন, "ট্রেটা আমাকে দাও, আমি স্যারের টেবিলে রেখে আসছি।"'
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
            en: 'Oh sweet Jesus, the brass deadbolt was turned all the way in! The heavy iron key was sitting on the inside keyhole! We had to strike the frame with the woodcutter\'s axe to breach it!',
            bn: 'হে ঈশ্বর! ভেতরের ছিটকিনিটি পুরোপুরি লাগানো ছিল! চাবিটিও ভেতরের ফুটোতে ঝোলানো ছিল! কাঠ কাটার কুঠার দিয়ে কপাট ভেঙে আমাদের ভেতরে ঢুকতে হয়েছে!'
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
            en: 'Around 22:15, there was a terrible crash — like heavy metal striking the grandfather clock! I knocked and called out, but there was only silence. Then Miss Evelyn came down the hall and told me Arthur had ordered us not to disturb him.',
            bn: 'রাত ১০:১৫ নাগাদ বিকট এক ঝনঝন শব্দ হয় — যেন ভারী কোনো লোহা গিয়ে ঘড়িতে আছড়ে পড়েছে! আমি নক করেছিলাম, কিন্তু কোনো উত্তর মেলেনি। তখন মিস ইভলিন এসে বললেন স্যারকে যেন বিরক্ত না করি।'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-05-window-latch',
          reactionText: {
            en: 'Beatrice gasps: "The garden window! Miss Evelyn spent hours this morning polishing the brass hardware on that very window! She claimed the storm was causing damp drafts!"',
            bn: 'বিয়াট্রিস চমকে উঠে বলে: "বাগানের ওই জানালাটা? আজ সকালেই তো মিস ইভলিন অনেকক্ষণ ধরে ওই জানালার ছিটকিনি পরিষ্কার ও তেল মালিশ করছিলেন!"'
          },
          stressIncrease: 5
        }
      ]
    },
    {
      id: 'suspect-05-marcus',
      name: {
        en: 'Marcus Kane',
        bn: 'মার্কাস কেন'
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
        en: 'Arthur outbid Kane at auction for the Byzantine Codex; Kane faced bankruptcy if he could not acquire the codex.',
        bn: 'বাইজেন্টাইন কোডেক্স নিলামে কেনকে হারিয়ে আর্থার কিনে নেন; কোডেক্স না পেলে কেন দেউলিয়া হয়ে যেত।'
      },
      alibi: {
        en: 'Claims he departed the manor grounds in his Bentley at 21:15 after Arthur refused his buyout offer.',
        bn: 'দাবি করে রাত ৯:১৫-এ প্রস্তাব প্রত্যাখ্যানের পর সে নিজের বেন্টলি গাড়িতে চড়ে প্রাসাদ ছেড়ে চলে যায়।'
      },
      personality: {
        en: 'Pompous, cigar-scented, sharp double-breasted suit, sneering demeanor.',
        bn: 'অহংকারী, সিগারের গন্ধ, দামি স্যুট পরিহিত, ব্যঙ্গাত্মক হাসি।'
      },
      secrets: {
        en: 'Parked his Bentley down the driveway gate until 22:40 waiting to see if Arthur would change his mind.',
        bn: 'রাত ১০:৪০ পর্যন্ত গেটের বাইরে গাড়ি থামিয়ে অপেক্ষা করছিল যদি আর্থার মত বদলায়।'
      },
      avatarSeed: 'Marcus',
      avatarColor: '#b45309',
      dialogueTree: [
        {
          id: 'dlg-m-1',
          prompt: {
            en: 'Why were you at Pendelton Manor on the night of the murder?',
            bn: 'হত্যাকাণ্ডের রাতে আপনি পেন্ডেলটন ম্যানরে কেন এসেছিলেন?'
          },
          response: {
            en: 'Pure commerce. I made a generous final offer of £250,000 for the Byzantine Codex. Pendelton laughed in my face and had his butler show me the door at 21:15.',
            bn: 'নিছক ব্যবসার কাজে। বাইজেন্টাইন কোডেক্সটির জন্য আড়াই লাখ পাউন্ডের প্রস্তাব দিয়েছিলাম। পেন্ডেলটন আমার মুখের ওপর হেসে আমাকে বের করে দেয়।'
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
            en: 'Now that you mention it... around 22:20, through the rain, I saw a figure in a dark rain slicker slip out from the manor terrace into the rose garden and re-enter through the side conservatory door.',
            bn: 'হ্যাঁ, মনে পড়েছে... রাত ১০:২০ নাগাদ বৃষ্টির মধ্যে রেইনকোট পরা একজন রোগা লোককে টেরাস থেকে বাগানে নামতে এবং কনজারভেটরির দরজা দিয়ে ভেতরে ঢুকতে দেখেছিলাম।'
          },
          reactionMood: 'calm',
          revealsClueId: 'clue-12-terrace-sighting'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: {
            en: 'Marcus laughs coldly: "Size 6 woman\'s dress shoes? I wear custom Italian size 11 wingtips, detective. You are looking for a petite woman, not an overweight art dealer."',
            bn: 'কেন হেসে ওঠে: "৬ সাইজের মেয়েদের জুতো? আমার জুতার সাইজ ১১, গোয়েন্দা। আপনি কোনো খাটো মহিলার খোঁজ করুন, আমার নয়।"'
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
        en: 'A heavy lead-crystal glass on Arthur\'s desk with 5ml of spilled amber liquid.',
        bn: 'আর্থারের টেবিলে পড়ে থাকা ভারী কাচের গ্লাস, যাতে সামান্য তরল লেগে আছে।'
      },
      discoveryLocation: {
        en: 'Study Desk, beside victim\'s right arm',
        bn: 'পড়ার টেবিল, লাশের ডান হাতের পাশে'
      },
      relevance: {
        en: 'The immediate ingestion vessel for the lethal toxin.',
        bn: 'মারাত্মক বিষ শরীরে প্রবেশের মূল পাত্র।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
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
        en: 'Arthur\'s personal estate books, showing forensic audits of the endowment accounts.',
        bn: 'আর্থারের নিজস্ব হিসেবের খাতা, যেখানে ট্রাস্ট ফান্ডের হিসেব মেলানো হয়েছিল।'
      },
      discoveryLocation: {
        en: 'Open on Arthur\'s desk under his hands',
        bn: 'আর্থারের হাতের নিচে টেবিলের ওপর খোলা'
      },
      relevance: {
        en: 'Establishes direct financial embezzlement and motive against the private archivist.',
        bn: 'ইভলিন ভ্যান্সের তহবিল তছরুপের প্রমাণ এবং হত্যার মূল উদ্দেশ্য উন্মোচন করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn'],
      isCrucial: true,
      details: [
        {
          en: 'Arthur wrote in margin: "Discrepancy of $450,000 between March and September. Evelyn has sole signing authority."',
          bn: 'আর্থার মার্জিনে লিখেছেন: "মার্চ থেকে সেপ্টেম্বরের মধ্যে ৪,৫০,০০০ ডলার উধাও। ইভলিনের একক স্বাক্ষর ক্ষমতা ছিল।"'
        },
        {
          en: 'Final entry dated October 14, 21:00: "Will present to the Crown Prosecutor tomorrow morning."',
          bn: '১৪ অক্টোবর রাত ৯টার শেষ এন্ট্রি: "আগামীকাল সকালে সরকারি কৌঁসুলির হাতে এই প্রমাণ তুলে দেব।"'
        },
        {
          en: 'Provides an imminent existential threat to Evelyn Vance.',
          bn: 'ইভলিন ভ্যান্সের জন্য এটি জেল খাটার নিশ্চিত পরোয়ানা ছিল।'
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
        en: 'Fixes the exact time of Arthur\'s terminal convulsions and shatters Evelyn\'s alibi.',
        bn: 'আর্থারের মৃত্যুর সুনির্দিষ্ট সময় নির্ধারণ করে এবং ইভলিনের অ্যালিবাই সম্পূর্ণ চূর্ণ করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn'],
      isCrucial: true,
      details: [
        {
          en: 'Pendulum jammed by a heavy bronze paperweight knocked during violent muscle spasms.',
          bn: 'বিষক্রিয়ার তীব্র খিঁচুনির সময় ছিটকে যাওয়া ব্রোঞ্জের পেপারওয়েটে পেণ্ডুলাম আটকে ঘড়ি থেমে যায়।'
        },
        {
          en: 'Proves Arthur was incapacitated or deceased by 22:14.',
          bn: 'প্রমাণ করে রাত ১০:১৪ মিনিটের মধ্যেই আর্থার প্রাণ হারিয়েছিলেন।'
        },
        {
          en: 'Directly contradicts Evelyn Vance\'s statement that she spoke to Arthur at 22:30.',
          bn: 'ইভলিনের সেই দাবিকে সরাসরি মিথ্যা প্রমাণ করে যেখানে সে দাবি করেছিল রাত ১০:৩০-এ আর্থারের সাথে কথা বলেছিল।'
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
        en: 'Demonstrates the poison was added to the decanter before Arthur poured his glass.',
        bn: 'প্রমাণ করে যে আর্থার গ্লাসে ঢালার আগেই গোটা বোতলে বিষ মেশানো হয়েছিল।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        {
          en: 'The entire decanter volume was laced with 2 grams of potassium cyanide salt.',
          bn: 'পুরো ডিক্যান্টারের ব্র্যান্ডিতে প্রায় ২ গ্রাম পটাশিয়াম সায়ানাইড মেশানো ছিল।'
        },
        {
          en: 'Whoever poisoned it knew Arthur drank a single snifter every evening at 22:00 sharp.',
          bn: 'খুনি ভালো করেই জানত আর্থার প্রতি রাত ১০টায় ঠিক এক গ্লাস ব্র্যান্ডি খান।'
        },
        {
          en: 'Placed in the study by Evelyn Vance at 21:45.',
          bn: 'রাত ৯:৪৫ মিনিটে ইভলিন ভ্যান্স ট্রেটি বিয়াট্রিসের কাছ থেকে নিয়ে ঘরে রেখেছিল।'
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
        en: 'Explains how the room was sealed from the exterior.',
        bn: 'বাইরে থেকে ভেতর অবরুদ্ধ করার রহস্য উন্মোচন করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn'],
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
          en: 'Solves the "impossible" locked room illusion.',
          bn: 'বদ্ধ ঘরের তথাকথিত "অসম্ভব" ধাঁধার বৈজ্ঞানিক সমাধান দেয়।'
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
        en: 'Presents Julian\'s initial disinheritance motive, but shows Arthur threw it into the hearth earlier in the evening.',
        bn: 'জুলিয়ানকে ত্যাজ্য করার প্রমাণ দেয়, তবে কাগজটি বিকেল ৫টার দিকেই আগুনে পোড়ানো হয়েছিল।'
      },
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        {
          en: 'Drafted to strip Julian Pendelton of his trust fund allowance.',
          bn: 'জুলিয়ান পেন্ডেলটনের ট্রাস্ট ভাতা বন্ধের আইনি নির্দেশ।'
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
        en: 'Physical forensic proof tying the exterior window mechanism to a petite woman.',
        bn: 'বাইরে থেকে জানালা আটকানোর মেকানিজম এবং একজন মহিলার উপস্থিতির অকাট্য প্রমাণ।'
      },
      relatedSuspectIds: ['suspect-02-evelyn'],
      isCrucial: true,
      isHidden: true,
      details: [
        {
          en: 'Thread composition: 50-lb test waxed nylon bookbinder\'s thread.',
          bn: 'সুতোটি ৫০ পাউন্ড ধারণক্ষমতাসম্পন্ন মোম মাখানো বই বাঁধাইয়ের নাইলন সুতো।'
        },
        {
          en: 'Matches the exact spools kept in Evelyn Vance\'s archival desk.',
          bn: 'ইভলিন ভ্যান্সের টেবিলের সুতোর স্পুলের সাথে হুবহু মিলে যায়।'
        },
        {
          en: 'Footprint matches a woman\'s size 6 Oxford shoe, the exact shoe worn by Evelyn Vance.',
          bn: 'কাদার ছাপটি ৬ সাইজের মেয়েলি জুতার, যা ইভলিন ভ্যান্সের জুতার সাইজের সমান।'
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
        en: 'Traces the purchase of potassium cyanide to Evelyn\'s registered business address.',
        bn: 'সায়ানাইড কেনার রেকর্ডটি ইভলিনের বুকশপের সাথে যুক্ত করে।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch'],
      isHidden: true,
      details: [
        {
          en: 'Billed to: "E. V. Antiquarian Books, PO Box 412".',
          bn: 'ক্রেতার নাম: "ই. ভি. বুকস, পোস্ট বক্স ৪১২"।'
        },
        {
          en: 'Item: 100g Potassium Cyanide Reagent Grade.',
          bn: 'পণ্য: ১০০ গ্রাম পটাশিয়াম সায়ানাইড লবণ।'
        },
        {
          en: 'Signed: "E. Vance".',
          bn: 'স্বাক্ষর: "ই. ভ্যান্স"।'
        }
      ],
      iconKey: 'receipt'
    },
    {
      id: 'clue-09-pawn-receipt',
      name: {
        en: 'Julian\'s Pawn Ticket for Signet Ring',
        bn: 'জুলিয়ানের আংটি বন্ধকের রসিদ'
      },
      category: 'Documents',
      description: {
        en: 'A pawn ticket for an heirloom gold signet ring stamped at 16:15 today.',
        bn: 'একটি স্বর্ণের আংটি বন্ধক দেওয়ার রসিদ যা আজ বিকেল ৪:১৫ মিনিটে ইস্যু করা।'
      },
      discoveryLocation: {
        en: 'Julian\'s coat pocket in billiard room',
        bn: 'বিলিয়ার্ড রুমে ঝুলিয়ে রাখা জুলিয়ানের কোটের পকেট'
      },
      relevance: {
        en: 'Explains Julian\'s suspicious behavior and theft, but clears him of being the poisoner.',
        bn: 'জুলিয়ানের সন্দেহজনক আচরণের কারণ স্পষ্ট করে, তবে তাকে খুনের দায় থেকে খালাস দেয়।'
      },
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        {
          en: 'Julian pawned the ring hours before the murder to cover a poker debt.',
          bn: 'জুলিয়ান খুনের কয়েক ঘণ্টা আগে জুয়ার দেনা মেটাতে আংটি বন্ধক দিয়েছিল।'
        },
        {
          en: 'Proves petty theft, not the calculated locked-room murder.',
          bn: 'এটি ক্ষুদ্র চুরির প্রমাণ দেয়, পূর্বপরিকল্পিত খুনের নয়।'
        }
      ],
      iconKey: 'tag'
    },
    {
      id: 'clue-10-handwriting-sample',
      name: {
        en: 'Evelyn\'s Archival Catalog Cards',
        bn: 'ইভলিনের ক্যাটালগ কার্ডের হাতের লেখা'
      },
      category: 'Documents',
      description: {
        en: 'Archival index cards written in Evelyn Vance\'s neat calligraphic script.',
        bn: 'লাইব্রেরির ইনডেক্স কার্ডে ইভলিন ভ্যান্সের নিজস্ব হস্তাক্ষর।'
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
          en: 'Indisputable proof that Evelyn Vance procured the poison.',
          bn: 'অনস্বীকার্য প্রমাণ যে ইভলিন ভ্যান্স নিজেই বিষ সংগ্রহ করেছিল।'
        }
      ],
      iconKey: 'pen'
    },
    {
      id: 'clue-11-tray-handover',
      name: {
        en: 'Beatrice\'s Witness Statement: Tray Interception',
        bn: 'বিয়াট্রিসের জবানবন্দি: ট্রে হস্তান্তর'
      },
      category: 'Witness Statements',
      description: {
        en: 'Testimony from head housekeeper Beatrice Morales regarding the drink tray.',
        bn: 'গৃহপরিচারিকা বিয়াট্রিসের বক্তব্য অনুযায়ী পানীয়ের ট্রে ইভলিনের হাতে তুলে দেওয়া হয়েছিল।'
      },
      discoveryLocation: {
        en: 'Kitchen Interrogation',
        bn: 'রান্নাঘরে নেওয়া জবানবন্দি'
      },
      relevance: {
        en: 'Confirms Evelyn Vance had sole custody of the Armagnac decanter before it entered the locked study.',
        bn: 'নিশ্চিত করে যে পড়ার ঘরে ঢোকার ঠিক আগে ইভলিনের কাছেই বোতলটি ছিল।'
      },
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        {
          en: 'At 21:45, Evelyn intercepted the tray from Beatrice in the hallway.',
          bn: 'রাত ৯:৪৫ মিনিটে করিডোরে বিয়াট্রিসের কাছ থেকে ট্রেটি ইভলিন নিজের হাতে নেয়।'
        },
        {
          en: 'Evelyn carried it into the study under the pretense of delivering evening correspondence.',
          bn: 'চিঠি দেওয়ার অজুহাতে ইভলিন একাই ট্রেটি নিয়ে পড়ার ঘরে ঢোকে।'
        }
      ],
      iconKey: 'message'
    },
    {
      id: 'clue-12-terrace-sighting',
      name: {
        en: 'Marcus Kane\'s Terrace Witness Statement',
        bn: 'মার্কাস কেনের জবানবন্দি: বাগানের ছায়ামূর্তি'
      },
      category: 'Witness Statements',
      description: {
        en: 'Statement from Marcus Kane regarding a figure slipping into the garden at 22:20.',
        bn: 'রাত ১০:২০ নাগাদ জানালা দিয়ে বাগানে একজনের পলায়ন সম্পর্কে মার্কাস কেনের প্রত্যক্ষদর্শীর বিবরণ।'
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
          en: 'Kane observed a slim figure in a dark slicker moving from the study window terrace to the conservatory door at 22:20.',
          bn: 'কেন রাত ১০:২০-এ পড়ার ঘরের কার্নিশ থেকে একজনকে নেমে পাশের দরজা দিয়ে ভেতরে ঢুকতে দেখে।'
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
        en: 'Arthur died at 22:14 when the clock was smashed by the convulsing victim. Evelyn\'s claim that she spoke to him at 22:30 is a manufactured lie to establish an alibi!',
        bn: 'আর্থার রাত ১০:১৪ মিনিটে খিঁচুনিতে পেপারওয়েট ছিটকে ঘড়ি ভাঙার সাথে সাথেই মারা যান। রাত ১০:৩০-এ তার সাথে কথা বলার দাবিটি ইভলিনের সম্পূর্ণ সাজানো মিথ্যা!'
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
        en: 'The signature on the chemical supply invoice for potassium cyanide matches Evelyn Vance\'s archival catalog handwriting with 100% forensic precision.',
        bn: 'সায়ানাইড ক্রয়ের ইনভয়েসের সইটি ইভলিন ভ্যান্সের ক্যাটালগ কার্ডের হস্তাক্ষরের সাথে বৈজ্ঞানিকভাবে শতভাগ মিলে যায়।'
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
        en: 'Lord Arthur uncovered that Evelyn embezzled $450,000 from the foundation and wrote that he would turn her in to the Crown Prosecutor the very next morning.',
        bn: 'লর্ড আর্থার আবিষ্কার করেছিলেন যে ইভলিন ৪,৫০,০০০ ডলার তহবিল তছরুপ করেছে এবং পরদিন সকালেই তাকে পুলিশের হাতে তুলে দেওয়ার সিদ্ধান্ত নিয়েছিলেন।'
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
        en: 'Beatrice handed the fresh decanter to Evelyn at 21:45. Evelyn had total privacy to spike the decanter before placing it on Arthur\'s desk.',
        bn: 'রাত ৯:৪৫ মিনিটে বিয়াট্রিস বোতলটি ইভলিনকে দেয়। নির্জন করিডোরে একাকী থাকার সময়েই ইভলিন বোতলে সায়ানাইড মিশিয়ে দেয়।'
      },
      isContradiction: false,
      bonusPoints: 150
    }
  ],
  timelineEvents: [
    {
      id: 'tl-01',
      timestamp: '17:00',
      timeSortValue: 1020,
      title: {
        en: 'Julian\'s Violent Argument with Arthur',
        bn: 'আর্থারের সাথে জুলিয়ানের উত্তপ্ত বাক্যবিনিময়'
      },
      description: {
        en: 'Julian demands money for his gambling debts. Arthur burns the trust fund codicil in anger and throws Julian out.',
        bn: 'জুলিয়ান জুয়ার দেনা মেটাতে টাকা দাবি করে। ক্ষুব্ধ আর্থার উইল পোড়ানোর হুমকি দিয়ে জুলিয়ানকে তাড়িয়ে দেন।'
      },
      source: {
        en: 'Julian\'s Admission & Hearth Soot Analysis',
        bn: 'জুলিয়ানের স্বীকারোক্তি ও ফায়ারপ্লেসের ছাইয়ের বিশ্লেষণ'
      },
      verifiedLocation: {
        en: 'Pendelton Manor Study',
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
        en: 'Arthur Completes Embezzlement Audit',
        bn: 'আর্থার অডিট সম্পন্ন করে নোট লেখেন'
      },
      description: {
        en: 'Arthur signs the final red-ink note in the estate ledger, marking $450,000 missing and pledging to call the Crown Prosecutor tomorrow.',
        bn: 'আর্থার লেজারে লাল কালিতে সই করেন এবং সাড়ে চার লাখ ডলার লোপাটের দায়ে সকালে মামলা করার সংকল্প লেখেন।'
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
        en: 'Marcus Kane Ejected from Manor',
        bn: 'মার্কাস কেনকে প্রাসাদ থেকে বিদায়'
      },
      description: {
        en: 'Marcus Kane is rebuffed in his attempt to buy the Byzantine Codex and retreats to his Bentley at the front gates.',
        bn: 'কোডেক্স কেনার ব্যর্থ চেষ্টার পর কেনকে বিদায় দেওয়া হয় এবং সে গাড়িতে গিয়ে বসে থাকে।'
      },
      source: {
        en: 'Butler Log & Kane Statement',
        bn: 'লগবুক ও কেনের জবানবন্দি'
      },
      verifiedLocation: {
        en: 'Manor Foyer / Driveway Gate',
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
        en: 'Evelyn Intercepts the Drink Tray',
        bn: 'ইভলিন পানীয়ের ট্রে নিজের হাতে নেয়'
      },
      description: {
        en: 'Evelyn intercepts the Armagnac decanter from Beatrice Morales, poisons the decanter with potassium cyanide, and carries it into the study.',
        bn: 'ইভলিন পরিচারিকার কাছ থেকে ট্রে নিয়ে বোতলে সায়ানাইড মেশায় এবং পড়ার ঘরে রেখে আসে।'
      },
      source: {
        en: 'Beatrice\'s Eyewitness Statement',
        bn: 'বিয়াট্রিসের প্রত্যক্ষদর্শীর সাক্ষ্য'
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
        en: 'Arthur Drinks the Laced Brandy',
        bn: 'আর্থার বিষাক্ত ব্র্যান্ডি পান করেন'
      },
      description: {
        en: 'Arthur locks his study deadbolt for the night, pours a snifter from the decanter, and begins drinking while reviewing the ledger.',
        bn: 'আর্থার দরজা লক করে ডিক্যান্টার থেকে ব্র্যান্ডি ঢেলে পান করা শুরু করেন।'
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
        en: 'Potassium cyanide induces violent convulsions. Arthur collapses, knocking a bronze weight into the grandfather clock, freezing its hands at 22:14.',
        bn: 'সায়ানাইডের বিষে তীব্র খিঁচুনিতে আর্থার লুটিয়ে পড়েন, তার ছিটকে যাওয়া পেপারওয়েটের আঘাতে ঘড়ির কাঁটা ১০:১৪-তে থেমে যায়।'
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
        en: 'Evelyn Vance slips out the study window into the rose garden, threads her waxed nylon string through the jamb to flip the cam latch locked, and flees to the conservatory.',
        bn: 'ইভলিন জানালা দিয়ে বাগানে নেমে মোম মাখানো সুতো দিয়ে জানালার ছিটকিনি বাইরে থেকে আটকে পালিয়ে যায়।'
      },
      source: {
        en: 'Window Wax Residue & Marcus Kane\'s Sighting',
        bn: 'মোমের অবশিষ্টাংশ ও কেনের সাক্ষ্য'
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
        en: 'Evelyn Stages the False Voice Alibi',
        bn: 'ইভলিনের সাজানো কণ্ঠস্বরের মিথ্যা অ্যালিবাই'
      },
      description: {
        en: 'Evelyn knocks on the locked study door in the corridor and speaks aloud, pretending Arthur responded to create an alibi after he was already dead.',
        bn: 'আর্থার ইতিপূর্বেই মারা যাওয়ার পরও ইভলিন দরজায় নক করে একা একাই কথা বলে মিথ্যা অ্যালিবাই সাজায়।'
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
        en: 'Discrepancy in Time',
        bn: 'সময়ের গুরুতর অসঙ্গতি'
      },
      hintText: {
        en: 'Pay close attention to the grandfather clock in the study. Compare the physical time the clock stopped with the time Evelyn Vance claims she spoke with Arthur through the door.',
        bn: 'পড়ার ঘরের গ্র্যান্ডফাদার ঘড়িটির দিকে গভীরভাবে নজর দিন। ঘড়িটি থামার বাস্তব সময়ের সাথে ইভলিনের কথিত রাত ১০:৩০-এ কথা বলার দাবি তুলনা করুন।'
      }
    },
    {
      level: 2,
      cost: 100,
      title: {
        en: 'The Sealed Window Illusion',
        bn: 'আটকানো জানালার যান্ত্রিক ফাঁক'
      },
      hintText: {
        en: 'Check the outside rose garden beneath the window. The killer didn\'t use a secret tunnel; they used a common artisan tool that leaves high-tensile waxed thread.',
        bn: 'জানালার নিচের গোলাপ বাগান পরীক্ষা করুন। খুনি কোনো গোপন সুড়ঙ্গ ব্যবহার করেনি; সাধারণ কিন্তু বিশেষ ধরনের মোমযুক্ত নাইলন সুতো ব্যবহার করে বাইরে থেকেই ছিটকিনি টেনে আটকে দেওয়া হয়েছিল।'
      }
    },
    {
      level: 3,
      cost: 200,
      title: {
        en: 'The True Embezzler',
        bn: 'আসল তছরুপকারী'
      },
      hintText: {
        en: 'Match the handwriting on the chemical apothecary receipt with the documents in the archive. The person who ordered the potassium cyanide had $450,000 reasons to silence Arthur tonight.',
        bn: 'সায়ানাইড কেনার রসিদের সইয়ের সাথে লাইব্রেরির নথির হাতের লেখা মেলান। যার স্বাক্ষর মিলবে, সেই ব্যক্তির সাড়ে চার লাখ ডলারের অপরাধ আড়াল করার মোক্ষম উদ্দেশ্য ছিল।'
      }
    }
  ],
  solution: {
    culpritId: 'suspect-02-evelyn',
    culpritName: {
      en: 'Evelyn Vance',
      bn: 'ইভলিন ভ্যান্স'
    },
    motiveDescription: {
      en: 'Covering up $450,000 in embezzled endowment funds that Arthur discovered and planned to report to prosecutors the next morning.',
      bn: 'ট্রাস্ট ফান্ডের সাড়ে চার লাখ ডলার আত্মসাৎ করার অপরাধ গোপন করা, যা আর্থার ধরে ফেলেছিলেন এবং পরদিন সকালে পুলিশের হাতে তুলে দিতে চেয়েছিলেন।'
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
      en: 'Evelyn Vance spent months systematically transferring $450,000 from the Pendelton Rare Books Endowment into private accounts. When Arthur conducted a surprise quarterly audit on the evening of October 14, he discovered the massive shortfall and wrote in his ledger that he would summon the Crown Prosecutor at dawn.\n\nFaced with prison, Evelyn acted swiftly. Having previously acquired potassium cyanide under her antiquarian front company, she intercepted the evening Armagnac tray from housekeeper Beatrice Morales at 21:45 and stirred the cyanide directly into the decanter. Arthur poured his drink at 22:00 and suffered fatal convulsions at 22:14, his falling body hurling a bronze paperweight into the grandfather clock and stopping it dead.\n\nEvelyn had already prepared her "impossible" locked room trick: she entered the study, ensured Arthur was dead, bolted the corridor door from inside, and slipped out through the ground-floor leaded window into the rainy garden. Using her professional bookbinder\'s waxed nylon thread looped around the window latch arm, she pulled the thread from outside until the brass latch clicked locked, then pulled the string free. At 22:30, she conspicuously staged a conversation outside the study door for Beatrice to hear, fabricating an alibi. But the frozen clock at 22:14, the thread on the rose thorns, and the cyanide purchase receipt irrevocably sealed her guilt.',
      bn: 'ইভলিন ভ্যান্স গত কয়েক মাস ধরে পরিকল্পিতভাবে পেন্ডেলটন ট্রাস্ট থেকে ৪,৫০,০০০ ডলার আত্মসাৎ করে ব্যক্তিগত গোপন অ্যাকাউন্টে পাঠিয়ে আসছিল। ১৪ অক্টোবর সন্ধ্যায় লর্ড আর্থার আকস্মিক অডিটের মাধ্যমে এই বড় তছরুপ ধরে ফেলেন এবং খাতায় লেখেন যে তিনি পরদিন সকালেই পুলিশে অভিযোগ দায়ের করবেন।\n\nকারাগারে যাওয়ার ভয়ে ইভলিন তাৎক্ষণিক হত্যার পরিকল্পনা করে। নিজের এন্টিক বুকশপের আড়ালে সে আগেই পটাশিয়াম সায়ানাইড সংগ্রহ করে রেখেছিল। রাত ৯:৪৫ মিনিটে সে গৃহপরিচারিকার কাছ থেকে ব্র্যান্ডির ট্রে নিয়ে নির্জনে পুরো বোতলে বিষ মিশিয়ে দেয়। রাত ১০:০০ টায় আর্থার সেই বিষাক্ত ব্র্যান্ডি পান করেন এবং রাত ১০:১৪ মিনিটে তীব্র খিঁচুনিতে মৃত্যুর কোলে ঢলে পড়েন। পড়ার সময় ছিটকে যাওয়া ব্রোঞ্জের পেপারওয়েটের আঘাতে গ্র্যান্ডফাদার ঘড়ির কাঁটা ১০:১৪-তে স্থায়ীভাবে থেমে যায়।\n\nএরপর ইভলিন তার আপাত "অসম্ভব" বদ্ধ ঘরের কৌশল প্রয়োগ করে: ভেতর থেকে ভারী দরজার ছিটকিনি আটকে সে জানালা দিয়ে বাগানে নেমে পড়ে। এরপর নিজের বই বাঁধাইয়ের মোম মাখানো নাইলন সুতো দিয়ে বাইরে থেকে জানালার ছিটকিনি টেনে আটকে দেয় এবং সুতোটি নিজের দিকে টেনে বের করে নেয়। রাত ১০:৩০-এ করিডোরে দাঁড়িয়ে আর্থারের সাথে একা একা কথা বলার ভান করে সে একটি মিথ্যা অ্যালিবাই সাজায়। কিন্তু রাত ১০:১৪-তে থেমে যাওয়া ঘড়ি, গোলাপের কাঁটায় আটকে থাকা সুতো এবং সায়ানাইড কেনার রসিদ তার সমস্ত অপরাধের প্রমাণ সন্দেহাতীতভাবে প্রতিষ্ঠিত করেছে।'
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
            en: 'Silencing Arthur regarding an illegal narcotics prescription',
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
            en: 'Laced Arthur\'s Cuban cigars with cyanide gas in the fireplace',
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
