import { CaseData } from '../../types/game';

export const case003: CaseData = {
  id: 'case-003',
  caseNumber: 'CASE 003',
  title: {
    en: 'THE MUSEUM HEIST',
    bn: 'জাদুঘরের দুর্ধর্ষ চুরি'
  },
  subtitle: {
    en: 'A Sapphire Relic, an EMP Pulse, and the Curator\'s Swap',
    bn: 'একটি নীলমণি রত্ন, ইএমপি ব্ল্যাকআউট এবং কিউরেটরের চাল'
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
    en: 'During the museum\'s annual VIP Gala, a sudden 4-minute blackout plunged Sub-Level 2 into pitch darkness. When the auxiliary generators kicked in at 02:19, the glass display case was intact, but the pedestal held only a cracked resin counterfeit! With biometric seals, laser grids, and 24/7 armed security, how did an $18,000,000 ancient relic vanish into thin air?',
    bn: 'জাদুঘরের বার্ষিক ভিআইপি গালা অনুষ্ঠানের মাঝখানে আকস্মিক ৪ মিনিটের বিদ্যুৎ বিভ্রাটে মাটির নিচের ২য় তলার ভল্ট সম্পূর্ণ অন্ধকারে ডুবে যায়। রাত ২:১৯ মিনিটে জেনারেটর চালু হলে দেখা যায় কাচের আবরণটি সম্পূর্ণ অক্ষত, কিন্তু বেদিটির ওপর আসল রত্নটির বদলে পড়ে আছে একটি ফাটল ধরা প্লাস্টিকের নকল রেপ্লিকা! বায়োমেট্রিক লক, লেজার গ্রিড ও সার্বক্ষণিক নিরাপত্তার মাঝে ১৮ মিলিয়ন ডলারের প্রাচীন রত্ন কীভাবে উধাও হলো?'
  },
  briefing: {
    chiefMemo: {
      en: 'Detective, the Board of Trustees and Interpol are breathing down our necks. The Eye of Osiris is the crown jewel of world antiquities. The vault was protected by biometric keycards, thermal sensors, and an optical laser grid. The power went dead for exactly 240 seconds. When power returned, the scarab was a fake. The thief had to be someone with intimate insider knowledge of the sensors and access codes.',
      bn: 'গোয়েন্দা, জাদুঘরের ট্রাস্টি বোর্ড এবং ইন্টারপোল আমাদের ওপর কঠোর নজর রাখছে। "আই অব ওসাইরিস" পৃথিবীর অমূল্য প্রাচীন প্রত্নতত্ত্বের একটি। ভল্টটি বায়োমেট্রিক কি-কার্ড, থার্মাল সেন্সর ও লেজার গ্রিড দিয়ে সুরক্ষিত ছিল। ঠিক ২৪০ সেকেন্ডের জন্য বিদ্যুৎ বন্ধ ছিল। বিদ্যুৎ ফিরে এলে দেখা যায় রত্নটি বদলে গেছে। চোর নিশ্চিতভাবেই এমন কেউ যার সিকিউরিটি কোড ও সেন্সর সম্পর্কে ভেতরের গভীর জ্ঞান রয়েছে।'
    },
    initialStatus: {
      en: 'Sub-Level 2 sealed by SWAT. All 5 persons with vault clearance detained on site.',
      bn: 'সোয়াট টিম সাব-লেভেল ২ সিলগালা করেছে। ভল্টের অনুমোদনপ্রাপ্ত পাঁচজন ব্যক্তিকে ঘটনাস্থলে আটকে জেরা করা হচ্ছে।'
    },
    keyObjectives: [
      {
        en: 'Examine the Sub-Level 2 Vault, display pedestal, and thermal laser grid.',
        bn: 'সাব-লেভেল ২ এর ভল্ট, প্রদর্শন বেদি ও লেজার গ্রিড খুঁটিয়ে পরীক্ষা করুন।'
      },
      {
        en: 'Analyze the cracked counterfeit scarab using forensic spectroscopy.',
        bn: 'ফরেনসিক স্পেকট্রোস্কোপির মাধ্যমে ভাঙা নকল স্কারাবটির উপাদান ও বয়স বিশ্লেষণ করুন।'
      },
      {
        en: 'Investigate the cause of the electrical blackout in the breaker control room.',
        bn: 'ব্রেকার রুমে বিদ্যুৎ বিভ্রাট ও পাওয়ার ফেইলিউরের প্রকৃত কারণ উদঘাটন করুন।'
      },
      {
        en: 'Interrogate the chief curator, head of security, laser engineer, private collector, and janitor.',
        bn: 'প্রধান কিউরেটর, নিরাপত্তা প্রধান, লেজার ইঞ্জিনিয়ার, ধনকুবের সংগ্রাহক ও পরিচ্ছন্নতাকর্মীকে জেরা করুন।'
      },
      {
        en: 'Determine when the real swap occurred and unmask the mastermind behind the heist.',
        bn: 'আসল বদলটি ঠিক কখন ঘটেছিল তা বের করুন এবং চুরির মূল পরিকল্পনাকারীকে গ্রেপ্তার করুন।'
      }
    ]
  },
  crimeScene: {
    roomTitle: {
      en: 'Sub-Level 2 — Egyptian Antiquities Vault',
      bn: 'সাব-লেভেল ২ — মিশরীয় প্রত্নতাত্ত্বিক ভল্ট'
    },
    roomDescription: {
      en: 'A subterranean reinforced vault with polished granite floors, optical laser emitter pillars, a central temperature-controlled display pedestal under reinforced acrylic glass, an HVAC ventilation shaft overhead, and a wall-mounted electronic access terminal.',
      bn: 'গ্রানাইট পাথরের মেঝের সুরক্ষিত পাতাল ভল্ট। চারপাশে অপটিক্যাল লেজারের লাল রশ্মির পিলার, মাঝখানে তাপমাত্রা নিয়ন্ত্রিত বেদিতে অ্যাক্রিলিক গ্লাসের শোকেস, মাথার ওপর ভেন্টিলেশন ডাক্ট এবং দেয়ালে ডিজিটাল বায়োমেট্রিক স্ক্রিন।'
    },
    sceneTheme: 'museum_vault',
    hotspots: [
      {
        id: 'hs-03-pedestal',
        name: {
          en: 'Central Display Pedestal & Acrylic Case',
          bn: 'মূল প্রদর্শন বেদি ও অ্যাক্রিলিক শোকেস'
        },
        x: 50,
        y: 45,
        radius: 30,
        description: {
          en: 'The reinforced acrylic display hood sits locked over the black velvet pedestal. Resting on the cushion is the cracked blue scarab.',
          bn: 'কালো ভেলভেটের কুশনের ওপর মজবুত কাচের শোকেস। কুশনের ওপর পড়ে আছে নীল রঙের ফাটল ধরা স্কারাব।'
        },
        revealsEvidenceId: 'clue-03-cracked-scarf',
        discoveryNote: {
          en: 'Forensic inspection of the acrylic cover: the biometric lock was never opened during the 02:15 blackout! The scarab inside is a polymer fake that cracked from UV display heat.',
          bn: 'ফরেনসিক পরীক্ষায় দেখা গেল রাত ২:১৫ এর ব্ল্যাকআউটের সময় কাচের লকটি খোলাই হয়নি! ভেতরের স্কারাবটি প্লাস্টিক পলিমারের নকল যা হ্যালোজেন বাতির তাপে ফেটে গেছে।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-03-breaker',
        name: {
          en: 'HVAC Air Shaft & Electrical Junction',
          bn: 'এসি ডাক্ট ও প্রধান বিদ্যুৎ সংযোগ জংশন'
        },
        x: 82,
        y: 22,
        radius: 26,
        description: {
          en: 'An open metal vent grate beside the primary breaker junction box.',
          bn: 'প্রধান ব্রেকার বক্সের পাশে থাকা ভেন্টিলেশনের খোলা টিনের ঢাকনা।'
        },
        revealsEvidenceId: 'clue-03-emp-capacitor',
        discoveryNote: {
          en: 'Found a scorched high-voltage pulse capacitor connected with alligator clips to the backup power relay, programmed on a digital kitchen timer.',
          bn: 'ডিজিটাল টাইমার লাগানো একটি উচ্চ ক্ষমতার ভোল্টেজ ক্যাপাসিটর পাওয়া গেছে যা ব্যাকআপ পাওয়ার লাইনে ক্লিপ দিয়ে লাগানো ছিল।'
        },
        iconType: 'flask'
      },
      {
        id: 'hs-03-terminal',
        name: {
          en: 'Biometric RFID Access Terminal',
          bn: 'বায়োমেট্রিক প্রবেশ নিয়ন্ত্রণ স্ক্রিন'
        },
        x: 22,
        y: 48,
        radius: 25,
        description: {
          en: 'The digital touch-panel recording keycard entries and retina scans into the vault chamber.',
          bn: 'ডিজিটাল স্ক্রিন যাতে রেটিনা স্ক্যান ও কি-কার্ড প্রবেশের সময় স্বয়ংক্রিয়ভাবে রেকর্ড হয়।'
        },
        revealsEvidenceId: 'clue-03-vault-access-logs',
        discoveryNote: {
          en: 'Terminal audit log shows only ONE person accessed the pedestal lock today: Chief Curator Dr. Humaira Rashid at 18:00 for "curatorial inspection".',
          bn: 'টার্মিনাল লগ বলছে আজ সারাদিনে শুধুমাত্র একজনই বেদিটি খুলেছিলেন: সন্ধ্যা ৬টায় প্রধান কিউরেটর ডা. হুমায়রা রশীদ।'
        },
        iconType: 'document'
      },
      {
        id: 'hs-03-lasers',
        name: {
          en: 'Optical Laser Emitter Pillar #3',
          bn: 'লেজার পিলার ৩ (অপটিক্যাল সেন্সর)'
        },
        x: 35,
        y: 65,
        radius: 24,
        description: {
          en: 'One of the six infrared laser emitters guarding the perimeter around the pedestal.',
          bn: 'বেদির চারপাশে পাহারা দেওয়া ছয়টি লাল লেজার রশ্মির অন্যতম একটি পিলার।'
        },
        revealsEvidenceId: 'clue-03-optical-prism',
        discoveryNote: {
          en: 'Tucked into the laser aperture: a miniature optical quartz prism designed to deflect the laser beam into the sensor continuously, spoofing an uninterrupted grid.',
          bn: 'লেজারের মুখে একটি ছোট কোয়ার্টজ অপটিক্যাল প্রিজম আটকানো ছিল, যা রশ্মি বাঁকিয়ে অ্যালার্ম না বাজিয়েই ভেতরে হাত ঢুকানোর ব্যবস্থা করে দেয়।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-03-lockers',
        name: {
          en: 'Curatorial Staff Locker Room',
          bn: 'কর্মকর্তাদের ব্যক্তিগত লকার রুম'
        },
        x: 12,
        y: 75,
        radius: 24,
        description: {
          en: 'A row of steel employee lockers in the airlock foyer outside the vault.',
          bn: 'ভল্টের বাইরের করিডোরে রাখা লোহার লকার।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-03-rossi-invoice',
        discoveryNote: {
          en: 'Inside Dr. Humaira Rashid\'s locker: an invoice from an artisan resin casting workshop in Florence, Italy, for a "museum-grade lapis lazuli scarab replica".',
          bn: 'ডা. হুমায়রা রশীদর লকার থেকে ইতালির ফ্লোরেন্সের একটি কর্মশালা থেকে হুবহু নকল স্কারাব তৈরির একটি হুমায়রাদ পাওয়া গেছে।'
        },
        iconType: 'document'
      },
      {
        id: 'hs-03-janitor-cart',
        name: {
          en: 'Janitorial Waste Trolley',
          bn: 'পরিচ্ছন্নতাকর্মীর লন্ড্রি ট্রলি'
        },
        x: 72,
        y: 72,
        radius: 22,
        description: {
          en: 'A gray plastic cleaning cart parked near the freight elevator doors.',
          bn: 'মালবাহী লিফটের সামনে রাখা ময়লা কাপড় ও ট্রলি।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-03-lead-box',
        discoveryNote: {
          en: 'Concealed at the bottom of the laundry hamper: a lead-lined jewelry travel case containing the authentic 3,000-year-old Eye of Osiris!',
          bn: 'লন্ড্রি ট্রলির ময়লা কাপড়ের নিচে সিসার তৈরি এক্স-রে সুরক্ষিত একটি বাক্স পাওয়া গেছে, যার ভেতর আসল ১৮০ কোটির রত্নটি লুকানো ছিল!'
        },
        iconType: 'magnifier'
      }
    ]
  },
  suspects: [
    {
      id: 'suspect-03-rossi',
      name: {
        en: 'Dr. Humaira Rashid',
        bn: 'ডা. হুমায়রা রশীদ'
      },
      alias: {
        en: 'The Disgraced Curator',
        bn: 'মর্যাদাহারা প্রধান কিউরেটর'
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
        en: 'Sole conservator with physical access to the relic',
        bn: 'রত্নটি স্পর্শ করার একমাত্র বৈধ অনুমতিপ্রাপ্ত ব্যক্তি'
      },
      motive: {
        en: 'Her archaeological excavation company in Cairo went bankrupt with $2.4M in debt; university cancelled her research tenure.',
        bn: 'কায়রোতে তার প্রত্নতাত্ত্বিক খনন প্রকল্পের কারণে ২৪ লাখ ডলার দেনা হয়েছিল এবং বিশ্ববিদ্যালয় তার চাকরি বাতিলের ঘোষণা দেয়।'
      },
      alibi: {
        en: 'Claims she was delivering her keynote speech on Egyptian mythology in the Main Gala Hall upstairs from 01:45 to 02:30.',
        bn: 'দাবি করে রাত ১:৪৫ থেকে ২:৩০ পর্যন্ত সে দোতলার বলরুমে ২০০ জন অতিথির সামনে ভাষণ দিচ্ছিল।'
      },
      personality: {
        en: 'Sophisticated, haughty, immaculate evening gown, condescending tone.',
        bn: 'অভিজাত, গর্বিত, দামী গাউন পরিহিতা, নাক উঁচু স্বভাব।'
      },
      secrets: {
        en: 'Had a master replica fabricated in Florence 3 months ago and swapped it hours before the gala.',
        bn: '৩ মাস আগেই ইতালি থেকে নকল রত্ন বানিয়ে রেখেছিল এবং গালা শুরুর আগেই সন্ধ্যা ৬টায় আসলটা বদলে ফেলেছিল।'
      },
      avatarSeed: 'Humaira',
      avatarColor: '#8b5cf6',
      dialogueTree: [
        {
          id: 'dlg-r-1',
          prompt: {
            en: 'When was the last time you handled the Eye of Osiris?',
            bn: 'সর্বশেষ কখন আপনি রত্নটি স্পর্শ করেছিলেন?'
          },
          response: {
            en: 'At 18:00 sharp, during my mandatory pre-gala condition inspection. The scarab was pristine. I sealed the case, activated the biometric lock, and joined our donors on the terrace.',
            bn: 'সন্ধ্যা ঠিক ৬টায়, গালা শুরুর আগের নিয়মমাফিক পরিদর্শনে। রত্নটি অক্ষত ছিল। আমি কাচ বন্ধ করে বায়োমেট্রিক লক চালু করে অতিথিদের সাথে যুক্ত হই।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-r-2',
          prompt: {
            en: 'Where were you during the 4-minute blackout at 02:15?',
            bn: 'রাত ২:১৫ মিনিটে যখন ৪ মিনিটের ব্ল্যাকআউট হয় তখন আপনি কোথায় ছিলেন?'
          },
          response: {
            en: 'On stage in the Grand Ballroom under emergency candlelight, addressing over 200 high-society benefactors. I have 200 witnesses, detective. My alibi is unshakeable.',
            bn: 'বলরুমের মঞ্চে ২০০ জন ধনী অতিথির সামনে বক্তব্য দিচ্ছিলাম। আমার পক্ষে ২০০ জন চাক্ষুষ সাক্ষী আছে, গোয়েন্দা। আমার অ্যালিবাইয়ে কোনো ফাঁক নেই।'
          },
          reactionMood: 'calm',
          revealsContradictionId: 'contra-rossi-time'
        },
        {
          id: 'dlg-r-3',
          prompt: {
            en: 'Why was an invoice for an artisan resin scarab found in your locker?',
            bn: 'আপনার লকারে ইতালি থেকে নকল স্কারাব তৈরির বিল পাওয়া গেল কেন?'
          },
          response: {
            en: 'That was... for our educational traveling exhibition in Chicago! Museums routinely commission replicas for child hands-on workshops!',
            bn: 'ওটা... ওটা তো শিশুদের প্রদর্শনীর জন্য অর্ডার দেওয়া হয়েছিল! জাদুঘরে দর্শনার্থীদের স্পর্শ করার জন্য প্রায়ই ডুপ্লিকেট বানানো হয়!'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-cracked-scarf',
          reactionText: {
            en: 'Dr. Humaira stumbles: "The counterfeit cracked from the display lighting? That... that is impossible, the artisan guaranteed it withstood 40 degrees Celsius!" She instantly catches herself and falls silent.',
            bn: 'ডা. হুমায়রা তোতলিয়ে ফেলে: "বাতির তাপে নকলটা ফেটে গেছে? কিন্তু ওটা তো ৪০ ডিগ্রি তাপমাত্রা সহ্য করার কথা ছিল!" সে হঠাৎ নিজের ভুল বুঝতে পেরে চুপ হয়ে যায়।'
          },
          stressIncrease: 45,
          exposesLie: true
        },
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: {
            en: 'Dr. Humaira goes dead pale, grasping the table: "You found the lead case? In the laundry hamper? But... Tareq was supposed to take the cart to the catering van at 03:00!"',
            bn: 'ডা. হুমায়রা টেবিল খামচে ধরে ফ্যাকাশে হয়ে পড়ে: "সিসার বাক্সটা পেয়ে গেছেন? লন্ড্রি ট্রলি থেকে? কিন্তু তারেক তো রাত ৩টায় কেটারিং ভ্যানে ওটা তোলার কথা ছিল!"'
          },
          stressIncrease: 60,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-03-cross',
      name: {
        en: 'Nasir Uddin',
        bn: 'নাসির উদ্দিন'
      },
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
        en: 'Bitter over impending pension cuts and budget austerity by the board of trustees.',
        bn: 'ট্রাস্টি বোর্ড তার পেনশন কমানোর সিদ্ধান্ত নেওয়ায় ক্ষুব্ধ ছিল।'
      },
      alibi: {
        en: 'Was in the master security control room on Level 1 monitoring monitors during the blackout.',
        bn: 'ব্ল্যাকআউটের সময় লেভেল ১-এর কন্ট্রোল রুমে বসে মনিটর দেখছিল।'
      },
      personality: {
        en: 'Brusque, sharp military haircut, dark suit, clipboard in hand, irritated.',
        bn: 'সামরিক মেজাজ, ছোট চুল, হাতে ক্লিপবোর্ড, খিটখিটে স্বভাব।'
      },
      secrets: {
        en: 'Was caught sleeping on duty 3 weeks ago; disabled sensor alert sounders to avoid false alarms.',
        bn: 'কয়েক সপ্তাহ আগে অ্যালার্মের শব্দ বন্ধ করে রেখেছিল যাতে মিথ্যা অ্যালার্মে ঘুম না ভাঙে।'
      },
      avatarSeed: 'Nasir',
      avatarColor: '#1e293b',
      dialogueTree: [
        {
          id: 'dlg-c-1',
          prompt: {
            en: 'Why did the backup generators take 4 full minutes to engage?',
            bn: 'ব্যাকআপ জেনারেটর চালু হতে পুরো ৪ মিনিট সময় লাগল কেন?'
          },
          response: {
            en: 'The main electrical transfer switch was hit by a targeted high-voltage power surge. The emergency relays tripped. It took my technician four minutes to manually bypass the surge breakers.',
            bn: 'প্রধান পাওয়ার লাইনে সুপরিকল্পিত হাই-ভোল্টেজ শর্ট সার্কিট ঘটানো হয়েছিল। জরুরি ব্রেকারগুলো ছিটকে পড়েছিল। ওগুলো হাত দিয়ে চালু করতে পুরো ৪ মিনিট লাগে।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-c-2',
          prompt: {
            en: 'Did any alarms trigger when the scarab was stolen?',
            bn: 'চুরির সময় কি কোনো সাইরেন বেজেছিল?'
          },
          response: {
            en: 'None! The display pedestal lid was NEVER lifted during the blackout. The optical sensor log showed a flat reading, as if the laser beam was never broken.',
            bn: 'একটাও না! ব্ল্যাকআউটের সময় কাচের ঢাকনা তো তুলাই হয়নি। লেজার গ্রিডের রিডিং ছিল সম্পূর্ণ স্বাভাবিক, যেন কোনো ছায়াও ওখানে পড়েনি।'
          },
          reactionMood: 'surprised'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-emp-capacitor',
          reactionText: {
            en: 'Nasir examines the capacitor: "This isn\'t amateur work. This is a capacitor array wired directly into the secondary bus bar. Whoever planted this knew the HVAC duct layout."',
            bn: 'নাসির ক্যাপাসিটরটি দেখে বলে: "এটা কোনো আনাড়ির কাজ নয়। বিদ্যুৎ লাইনের সাথে এটা নিখুঁতভাবে টাইমার দিয়ে জোড়া হয়েছিল। যে করেছে সে ভবনের প্রতিটি তারের খবর জানত।"'
          },
          stressIncrease: 10
        }
      ]
    },
    {
      id: 'suspect-03-chloe',
      name: {
        en: 'Sharmin Jahan',
        bn: 'শারমীন জাহান'
      },
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
        en: 'Heavily in debt to crypto exchanges; freelance contract expiring this week.',
        bn: 'ক্রিপ্টো ট্রেডিংয়ে বিপুল দেনায় জর্জরিত; এই সপ্তাহেই চুক্তি শেষ হওয়ার কথা।'
      },
      alibi: {
        en: 'Claims she was in the lobby bar having champagne between 01:30 and 02:45.',
        bn: 'দাবি করে রাত ১:৩০ থেকে ২:৪৫ পর্যন্ত সে লবি বারে ড্রিঙ্ক করছিল।'
      },
      personality: {
        en: 'Nerdy, talkative, fidgeting with an Allen wrench, wearing technician lanyard.',
        bn: 'অতিরিক্ত কথা বলে, হাতে রেঞ্চ নিয়ে নাড়াচাড়া করে, সামান্য চঞ্চল।'
      },
      secrets: {
        en: 'Was paid $5,000 cash by Dr. Humaira yesterday to "align the prisms for a photo shoot".',
        bn: 'গতকাল ডা. হুমায়রা তাকে ছবি তোলার অজুহাতে প্রিজম সেট করে দেওয়ার জন্য ৫০০০ ডলার নগদ দিয়েছিলেন।'
      },
      avatarSeed: 'Sharmin',
      avatarColor: '#06b6d4',
      dialogueTree: [
        {
          id: 'dlg-cd-1',
          prompt: {
            en: 'Did you service the laser grid around the Eye of Osiris yesterday?',
            bn: 'গতকাল কি আপনি ভল্টের লেজার গ্রিড মেরামত করেছিলেন?'
          },
          response: {
            en: 'Yes, standard six-month recalibration. I adjusted the beam sensitivity and replaced the photodiode receivers. Everything was calibrated to 99.98% accuracy.',
            bn: 'হ্যাঁ, প্রতি ছয় মাসের নিয়মিত টেস্ট। আমি সেন্সরগুলো নতুন করে সেট করেছিলাম। সবকিছু ৯৯.৯৮ শতাংশ নিখুঁত কাজ করছিল।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-cd-2',
          prompt: {
            en: 'Who asked you to place optical prisms in front of the laser apertures?',
            bn: 'লেজারের মুখে প্রিজম বসাতে আপনাকে কে বলেছিল?'
          },
          response: {
            en: 'Prisms? Wait... Dr. Humaira asked me yesterday if quartz prisms could diffuse the beam so the glare wouldn\'t ruin high-res documentary photography. I told her it would bypass the alarm if misaligned!',
            bn: 'প্রিজম? দাঁড়ান... গতকাল ডা. হুমায়রা জানতে চেয়েছিলেন প্রিজম বসালে লেজারের আলো বাঁকানো যাবে কিনা যাতে ক্যামেরায় ঝিলিক না মারে। আমি তাকে বলেছিলাম এতে কিন্তু অ্যালার্ম বাইপাস হয়ে যেতে পারে!'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-optical-prism',
          reactionText: {
            en: 'Sharmin inspects the prism: "This is a 45-degree total internal reflection prism! It was slotted right into Pillar 3 to bounce the beam directly into the receiver! That allowed Dr. Humaira to reach in without triggering the alarm!"',
            bn: 'শারমীন আঁতকে ওঠে: "এটা ৪৫ ডিগ্রির অপটিক্যাল প্রিজম! এটা দিয়ে রশ্মিকে সরাসরি রিসিভারে ঘুরিয়ে দেওয়া হয়েছে! এর ফলেই কোনো অ্যালার্ম না বাজিয়ে শোকেসে হাত ঢোকানো সম্ভব হয়েছিল!"'
          },
          stressIncrease: 20
        }
      ]
    },
    {
      id: 'suspect-03-tariq',
      name: {
        en: 'Tareq Al-Mamun',
        bn: 'তারেক আল-মামুন'
      },
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
        en: 'Obsessed with acquiring the Eye of Osiris for his private underground bunker collection.',
        bn: 'নিজের ব্যক্তিগত পাতাল বাংকারের সংগ্রহশালায় রত্নটি রাখার তীব্র নেশা ছিল।'
      },
      alibi: {
        en: 'Was seated at Table 1 in the Grand Ballroom drinking vintage Dom Pérignon throughout the night.',
        bn: 'সারারাত ১ নম্বর ভিআইপি টেবিলে শ্যাম্পেন পান করছিলেন।'
      },
      personality: {
        en: 'Flamboyant, silk tuxedo, gold watch, confident, amused by police questions.',
        bn: 'অভিজাত রেশমি স্যুট, সোনার ঘড়ি, আত্মবিশ্বাসী, পুলিশের প্রশ্নে মুচকি হাসে।'
      },
      secrets: {
        en: 'Agreed to wire $10M to Humaira\'s Swiss account once the scarab was smuggled past customs in the laundry cart.',
        bn: 'লন্ড্রি ভ্যানে রত্নটি বাইরে নিয়ে আসতে পারলে হুমায়রাকে ১০ মিলিয়ন ডলার দেওয়ার চুক্তি হয়েছিল।'
      },
      avatarSeed: 'Tareq',
      avatarColor: '#eab308',
      dialogueTree: [
        {
          id: 'dlg-t-1',
          prompt: {
            en: 'You publicly offered $25M for the Eye of Osiris last year.',
            bn: 'গত বছর আপনি রত্নটির জন্য আড়াই কোটি ডলারের প্রস্তাব দিয়েছিলেন।'
          },
          response: {
            en: 'Indeed. And the trustees foolishly declined. Now look at them: an empty pedestal and egg on their faces. I have the wealth of small nations, detective. I buy treasures legally or at sovereign auctions.',
            bn: 'হ্যাঁ, দিয়েছিলাম। আর ট্রাস্টিরা বোকার মতো তা ফিরিয়ে দিয়েছিল। এখন দেখুন তাদের কী দশা। আমার অনেক সম্পদ আছে, আমি আইনসম্মত নিলামেই জিনিসপত্র কিনি।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-t-2',
          prompt: {
            en: 'Did you communicate with Dr. Humaira prior to the gala?',
            bn: 'অনুষ্ঠানের আগে ডা. হুমায়রার সাথে আপনার কি কোনো যোগাযোগ হয়েছিল?'
          },
          response: {
            en: 'Dr. Humaira is a brilliant Egyptologist. She gives private tours of the catacombs to my foundation. That is the extent of our relationship.',
            bn: 'ডা. হুমায়রা একজন বিদগ্ধ গবেষক। তিনি আমার ফাউন্ডেশনের মেহমানদের মিউজিয়াম ঘুরিয়ে দেখান। এর বাইরে কোনো ব্যক্তিগত সম্পর্ক নেই।'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: {
            en: 'Tareq\'s confident smile freezes: "A lead-lined case in the laundry cart? I... I know nothing of museum laundry logistics. Talk to the cleaning staff."',
            bn: 'তারেকের হাসি নিমেষে মিলিয়ে যায়: "লন্ড্রি ট্রলিতে সিসার বাক্স? আমি... মিউজিয়ামের কাপড় ধোয়ার বিষয়ের আমি কী জানি? ওটা পরিচ্ছন্নতাকর্মীদের জিজ্ঞেস করুন।"'
          },
          stressIncrease: 35
        }
      ]
    },
    {
      id: 'suspect-03-simon',
      name: {
        en: 'Shafiqul Islam',
        bn: 'শফিকুল ইসলাম'
      },
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
        en: 'Daughter\'s medical surgery bills; has universal keycard to freight elevators.',
        bn: 'মেয়ের চিকিৎসার জন্য প্রচুর অর্থের প্রয়োজন ছিল; লিফটের মাস্টার কার্ড তার কাছে থাকত।'
      },
      alibi: {
        en: 'Was buffing the marble floors in the Sub-Level 1 corridor during the blackout.',
        bn: 'ব্ল্যাকআউটের সময় সাব-লেভেল ১-এর মেঝে পলিশ করছিলেন।'
      },
      personality: {
        en: 'Humble, worn hands, timid, wearing blue custodial jumpsuit.',
        bn: 'নম্র, খাঁটুনি খাওয়া হাত, ভয়ার্ত দৃষ্টি, নীল জাম্পস্যুট পরা।'
      },
      secrets: {
        en: 'Found the lead box hidden in his laundry bin 20 minutes ago and was terrified he would be framed.',
        bn: 'ট্রলিতে ভারী সিসার বাক্স দেখে ভয়ে পাথর হয়ে গিয়েছিলেন যেন তাকে চোর না বানানো হয়।'
      },
      avatarSeed: 'Shafiqul',
      avatarColor: '#14b8a6',
      dialogueTree: [
        {
          id: 'dlg-sb-1',
          prompt: {
            en: 'Did you see anyone entering Sub-Level 2 before the blackout?',
            bn: 'ব্ল্যাকআউটের আগে সাব-লেভেল ২-এ কাউকে ঢুকতে দেখেছিলেন?'
          },
          response: {
            en: 'Around 17:50, Dr. Humaira came down with a heavy leather briefcase. She stayed inside the vault room alone for twenty minutes. She told me not to enter because she was handling fragile artifacts.',
            bn: 'বিকেল ৫:৫০ নাগাদ ডা. হুমায়রা বড় ব্রিফকেস নিয়ে নিচে নেমেছিলেন। তিনি প্রায় ২০ মিনিট ভল্টের ভেতর একা ছিলেন। তিনি আমাকে বলেছিলেন ভেতরে কাজ চলছে, আমি যেন না ঢুকি।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-sb-2',
          prompt: {
            en: 'Did you notice anyone near the HVAC junction box?',
            bn: 'এসি আর বিদ্যুৎ বক্সের কাছে কাউকে কিছু করতে দেখেছিলেন?'
          },
          response: {
            en: 'Yesterday morning, I saw Dr. Humaira standing on a step ladder near the ventilation duct with a toolkit. She said the air conditioner was vibrating the display vitrine.',
            bn: 'গতকাল সকালে ডা. হুমায়রাকে আমি মইয়ে চড়ে এসি ভেন্টের কাছে তারের কাজ করতে দেখি। উনি বলেছিলেন এসির কাঁপুনির কারণে কাচ নড়ছে।'
          },
          reactionMood: 'surprised',
          revealsClueId: 'clue-03-janitor-testimony'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: {
            en: 'Shafiqul raises his hands: "Thank God you found it! I swear on my mother\'s grave, someone threw that heavy metal box into my dirty laundry cart right as the alarms went off! I didn\'t touch it!"',
            bn: 'শফিকুল দুই হাত তোলে: "ঈশ্বরকে ধন্যবাদ আপনারা ওটা পেয়েছেন! মায়ের কসম বলছি, সাইরেন বাজার ঠিক মুখে কেউ ওটা আমার ময়লা কাপড়ের ট্রলিতে গুঁজে দিয়েছিল! আমি ওতে হাতও দিইনি!"'
          },
          stressIncrease: 10
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-03-cracked-scarf',
      name: {
        en: 'Cracked Synthetic Polymer Scarab',
        bn: 'ফাটল ধরা নকল পলিমার স্কারাব'
      },
      category: 'Forensic Reports',
      description: {
        en: 'The replica scarab recovered from the display pedestal cushion.',
        bn: 'প্রদর্শন বেদি থেকে উদ্ধারকৃত নকল রেপ্লিকা স্কারাব।'
      },
      discoveryLocation: {
        en: 'Pedestal inside Vault Display Hood',
        bn: 'ভল্টের কাচের শোকেসের ভেতরে'
      },
      relevance: {
        en: 'Proves the swap occurred hours earlier; synthetic resin cracked under display halogen heat.',
        bn: 'প্রমাণ করে চুরির বদলটি ব্ল্যাকআউটের অনেক আগেই ঘটেছে; বাতির তাপে নকল রেজিন ফেটে গেছে।'
      },
      relatedSuspectIds: ['suspect-03-rossi'],
      isCrucial: true,
      details: [
        {
          en: 'Spectroscopic scan: 98% polyurethane resin, copper powder, and cobalt blue synthetic pigment.',
          bn: 'ল্যাব স্ক্যান: ৯৮ শতাংশ পলিউরিথেন রেজিন ও কৃত্রিম রঙের তৈরি প্লাস্টিক।'
        },
        {
          en: 'Zero ancient mineral components (authentic relic is pure lapis lazuli and gold).',
          bn: 'কোনো প্রাচীন খনিজ উপাদান নেই (আসল রত্নটি নিখাদ স্বর্ণ ও লাপিস লাজুলির)।'
        },
        {
          en: 'Thermal stress fracture indicates the fake was exposed to 300W vitrine halogens for over 8 hours (since ~18:00).',
          bn: 'তাপে ফাটল ধরার মাত্রা প্রমাণ করে নকলটি অন্তত ৮ ঘণ্টা ধরে বাতির নিচে ছিল (অর্থাৎ সন্ধ্যা ৬টা থেকে)।'
        }
      ],
      iconKey: 'gem'
    },
    {
      id: 'clue-03-emp-capacitor',
      name: {
        en: 'Timed EMP Surge Capacitor',
        bn: 'টাইমারযুক্ত বৈদ্যুতিক শর্ট-সার্কিট ডিভাইস'
      },
      category: 'Physical',
      description: {
        en: 'A jury-rigged electrical pulse capacitor attached to the emergency relay bus.',
        bn: 'জরুরি বিদ্যুৎ লাইনে জোড়া দেওয়া উচ্চ ভোল্টেজের পালস ক্যাপাসিটর।'
      },
      discoveryLocation: {
        en: 'HVAC Vent beside Breaker Panel',
        bn: 'ব্রেকার প্যানেলের পাশের এসি ভেন্ট'
      },
      relevance: {
        en: 'The diversion device used to create the fake "burglary during blackout" scenario.',
        bn: 'ব্ল্যাকআউটের বিভ্রান্তি তৈরির জন্য ব্যবহৃত কৃত্রিম শর্ট-সার্কিট যন্ত্র।'
      },
      relatedSuspectIds: ['suspect-03-rossi'],
      isCrucial: true,
      details: [
        {
          en: 'Equipped with a digital countdown clock set for 02:15:00.',
          bn: 'রাত ০২:১৫:০০ মিনিটের জন্য ডিজিটাল কাউন্টডাউন টাইমার সেট করা ছিল।'
        },
        {
          en: 'Delivered a 2,000-volt transient surge, knocking out the main bus bar for 240 seconds.',
          bn: '২০০০ ভোল্টের তীব্র স্পাইক তৈরি করে মূল ব্রেকারকে ২৪০ সেকেন্ডের জন্য ট্রিপ করিয়েছিল।'
        },
        {
          en: 'Fingerprints on the casing: Dr. Humaira Rashid.',
          bn: 'যন্ত্রের আবরণে ডা. হুমায়রা রশীদর আঙুলের স্পষ্ট ছাপ পাওয়া গেছে।'
        }
      ],
      iconKey: 'zap'
    },
    {
      id: 'clue-03-vault-access-logs',
      name: {
        en: 'Sub-Level 2 Biometric Access Log',
        bn: 'সাব-লেভেল ২ এর বায়োমেট্রিক লগ'
      },
      category: 'Digital',
      description: {
        en: 'Digital audit trail from the electronic vault security terminal.',
        bn: 'ভল্টের ডিজিটাল প্রবেশ নিয়ন্ত্রণ স্ক্রিনের সার্ভার রেকর্ড।'
      },
      discoveryLocation: {
        en: 'Vault Entrance Terminal',
        bn: 'ভল্টের মূল প্রবেশদ্বার'
      },
      relevance: {
        en: 'Shows the vault was never opened during the 02:15 blackout; Humaira was the sole entrant at 18:00.',
        bn: 'প্রমাণ করে রাত ২:১৫ এর অন্ধকারে ভল্ট খোলাই হয়নি; সন্ধ্যা ৬টায় হুমায়রাই একমাত্র ব্যক্তি ছিলেন।'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-cross'],
      isCrucial: true,
      details: [
        {
          en: '18:00:22 - Dr. Humaira Rashid (Biometric + Retina Approved). Exit at 18:22:15.',
          bn: 'সন্ধ্যা ১৮:০০:২২ - ডা. হুমায়রা রশীদ (রেটিনা স্ক্যান অনুমোদিত)। প্রস্থান ১৮:২২:১৫।'
        },
        {
          en: '02:15 to 02:19 - BLACKOUT: Zero biometric scans registered; acrylic hood remained sealed.',
          bn: '০২:১৫ থেকে ০২:১৯ - ব্ল্যাকআউটের সময় কোনো স্ক্যান হয়নি, কাচ সম্পূর্ণ অবরুদ্ধ ছিল।'
        },
        {
          en: 'Proves the theft was accomplished during the 18:00 window, NOT during the blackout!',
          bn: 'নিঃসন্দেহে প্রমাণ করে আসল চুরিটি সন্ধ্যা ৬টায় হয়েছিল, ব্ল্যাকআউটের সময় নয়!'
        }
      ],
      iconKey: 'lock'
    },
    {
      id: 'clue-03-optical-prism',
      name: {
        en: 'Quartz Deflection Prism on Pillar 3',
        bn: 'পিলার ৩-এ আটকানো কোয়ার্টজ প্রিজম'
      },
      category: 'Physical',
      description: {
        en: 'A 2-inch optical prism slotted into the laser emitter casing.',
        bn: 'লেজার নির্গমন মুখের ভেতরে বসানো ২ ইঞ্চির নিখুঁত প্রিজম।'
      },
      discoveryLocation: {
        en: 'Laser Emitter Pillar #3',
        bn: 'লেজার পিলার ৩'
      },
      relevance: {
        en: 'Enabled the perpetrator to bypass the laser perimeter without sounding alarms.',
        bn: 'লেজার সংকেত বন্ধ না করেই রশ্মি পাশ কাটিয়ে হাত ঢোকানোর কারিগরি ফাঁক।'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-chloe'],
      details: [
        {
          en: 'Bypassed the perimeter tripwire by bending the laser beam directly back into the receiving photocell.',
          bn: 'লেজার রশ্মিকে বাঁকিয়ে সরাসরি রিসিভারে ফেলে অ্যালার্ম ব্যবস্থা বোকা বানানো হয়েছিল।'
        },
        {
          en: 'Installed during the afternoon under the guise of lighting alignment.',
          bn: 'বিকেলে আলো সমন্বয়ের নাম করে গোপনে স্থাপন করা হয়েছিল।'
        }
      ],
      iconKey: 'prism'
    },
    {
      id: 'clue-03-rossi-invoice',
      name: {
        en: 'Replica Commission Invoice (Florence, Italy)',
        bn: 'ইতালির নকল তৈরির ইনভয়েস'
      },
      category: 'Documents',
      description: {
        en: 'An invoice from "Bottega d\'Arte Fiorentina" found in Humaira\'s locker.',
        bn: 'ইতালির ফ্লোরেন্সের আর্ট কর্মশালার ১৮,৫০০ ইউরোর বিল।'
      },
      discoveryLocation: {
        en: 'Curatorial Staff Locker #4',
        bn: 'কিউরেটরদের ৪ নম্বর লকার'
      },
      relevance: {
        en: 'Direct documentary proof that Dr. Humaira commissioned a counterfeit scarab 3 months ago.',
        bn: 'ডা. হুমায়রা যে ৩ মাস আগে থেকেই নিখুঁত নকল তৈরির ব্যবস্থা করেছিলেন তার দালিলিক প্রমাণ।'
      },
      relatedSuspectIds: ['suspect-03-rossi'],
      isCrucial: true,
      details: [
        {
          en: 'Order: 1:1 Scale Exact Replica of Egyptian 18th Dynasty Scarab (The Eye of Osiris).',
          bn: 'অর্ডার: ১৮তম রাজবংশের আই অব ওসাইরিসের হুবহু ১:১ মাপের রেপ্লিকা।'
        },
        {
          en: 'Cost: €18,500 paid via private debit card.',
          bn: 'মূল্য: ১৮,৫০০ ইউরো নিজস্ব ডেবিট কার্ড দিয়ে পরিশোধিত।'
        },
        {
          en: 'Delivery Date: September 22, 2024.',
          bn: 'ডেলিভারি তারিখ: ২২ সেপ্টেম্বর, ২০২৪।'
        }
      ],
      iconKey: 'receipt'
    },
    {
      id: 'clue-03-lead-box',
      name: {
        en: 'Lead-Lined Travel Box with Real Scarab',
        bn: 'সিসার বাক্সে আসল ১৮০ কোটির রত্ন'
      },
      category: 'Physical',
      description: {
        en: 'A radiation-shielded lead box containing the authentic Eye of Osiris.',
        bn: 'এক্স-রে প্রতিরোধক সিসার বাক্স যাতে আসল প্রাচীন রত্নটি অক্ষত অবস্থায় রয়েছে।'
      },
      discoveryLocation: {
        en: 'Janitor\'s Laundry Cart, Freight Elevator',
        bn: 'মালবাহী লিফটের সামনে লন্ড্রি ট্রলি'
      },
      relevance: {
        en: 'The stolen artifact itself, recovered before it could be smuggled out to Tareq Al-Mamun.',
        bn: 'চোরাই মাল পাচারের ঠিক আগমুহূর্তে উদ্ধারকৃত আসল অমূল্য প্রত্নতত্ত্ব।'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-tariq', 'suspect-03-simon'],
      isCrucial: true,
      details: [
        {
          en: 'Lead lining prevents X-ray detection at museum security checkpoints.',
          bn: 'সিসার কারণে গেটের স্ক্যানারে ধরা পড়ত না।'
        },
        {
          en: 'Contains the authentic 3,000-year-old lapis lazuli scarab.',
          bn: 'ভেতরে রয়েছে ৩০০০ বছরের খাঁটি সোনা ও পাথরের আসল আই অব ওসাইরিস।'
        },
        {
          en: 'Stashed in the laundry cart to be wheeled out to the catering dock at 03:00.',
          bn: 'রাত ৩টায় কেটারিং ভ্যানে করে বাইরে পাচার করার জন্য ময়লা কাপড়ে লুকানো ছিল।'
        }
      ],
      iconKey: 'gem'
    },
    {
      id: 'clue-03-janitor-testimony',
      name: {
        en: 'Shafiqul Islam\'s Witness Statement',
        bn: 'শফিকুল ইসলামের জবানবন্দি'
      },
      category: 'Witness Statements',
      description: {
        en: 'Testimony regarding Humaira installing electrical devices by the HVAC vent.',
        bn: 'ডা. হুমায়রা কর্তৃক এসি ভেন্টে ডিভাইস লাগানোর প্রত্যক্ষদর্শীর বিবরণ।'
      },
      discoveryLocation: {
        en: 'Security Holding Room',
        bn: 'নিরাপত্তা কক্ষে নেওয়া সাক্ষ্য'
      },
      relevance: {
        en: 'Links Dr. Humaira directly to the surge capacitor installation.',
        bn: 'ডা. হুমায়রাকে সরাসরি ব্ল্যাকআউটের ক্যাপাসিটর বসানোর সাথে যুক্ত করে।'
      },
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-simon'],
      details: [
        {
          en: 'Witnessed Humaira working on the HVAC vent ladder with wire strippers yesterday morning.',
          bn: 'গতকাল সকালে হুমায়রাকে তার কাটার প্লাস নিয়ে ভেন্টে কাজ করতে দেখেছিলেন।'
        }
      ],
      iconKey: 'message'
    }
  ],
  canonConnections: [
    {
      id: 'c3-conn-01',
      sourceId: 'clue-03-vault-access-logs',
      targetId: 'clue-03-cracked-scarf',
      label: {
        en: 'The Phantom Blackout',
        bn: 'ভুয়া ব্ল্যাকআউট বিভ্রম'
      },
      deductionNotes: {
        en: 'The display vitrine was never opened during the 02:15 blackout! The resin fake was swapped at 18:00 by Dr. Humaira; the blackout was merely a theatrical smoke screen!',
        bn: 'রাত ২:১৫ এর ব্ল্যাকআউটের সময় কাচের শোকেস খোলাই হয়নি! সন্ধ্যা ৬টায় হুমায়রা আগেই আসলটা বদলে ফেলেছিল; ব্ল্যাকআউট ছিল নিছক চোখের ধুলো!'
      },
      isContradiction: true,
      bonusPoints: 200
    },
    {
      id: 'c3-conn-02',
      sourceId: 'clue-03-emp-capacitor',
      targetId: 'suspect-03-rossi',
      label: {
        en: 'Staged Power Cut',
        bn: 'সাজানো বিদ্যুৎ বিভ্রাট'
      },
      deductionNotes: {
        en: 'The surge capacitor on the emergency relay bears Dr. Humaira\'s fingerprints and was planted during her HVAC "inspection" yesterday.',
        bn: 'বিদ্যুৎ লাইনে লাগানো ক্যাপাসিটরে ডা. হুমায়রার আঙুলের ছাপ রয়েছে যা তিনি আগের দিন লুকিয়ে লাগিয়েছিলেন।'
      },
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'c3-conn-03',
      sourceId: 'clue-03-rossi-invoice',
      targetId: 'clue-03-cracked-scarf',
      label: {
        en: 'Premeditated Forgery',
        bn: 'পূর্বপরিকল্পিত নকল তৈরির প্রমাণ'
      },
      deductionNotes: {
        en: 'The invoice in Humaira\'s locker proves she commissioned an identical polymer replica from Florence 3 months ago to execute this exact substitution.',
        bn: 'লকারের হুমায়রাদ প্রমাণ করে ৩ মাস আগেই ইতালি থেকে নকল রেপ্লিকা তৈরি করে রাখা হয়েছিল এই অদলবদলের জন্য।'
      },
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'c3-conn-04',
      sourceId: 'clue-03-lead-box',
      targetId: 'suspect-03-tariq',
      label: {
        en: 'Smuggling Channel',
        bn: 'চোরাচালানের নেটওয়ার্ক'
      },
      deductionNotes: {
        en: 'The lead-lined case was hidden in the custodial cart destined for the catering dock, where Tareq Al-Mamun\'s private transport was waiting to receive it.',
        bn: 'লন্ড্রি ট্রলিতে লুকিয়ে রাখা বাক্সটি কেটারিং ডকে নিয়ে যাওয়ার কথা ছিল যেখানে তারেক আল-মামুনের গাড়ি প্রস্তুত ছিল।'
      },
      isContradiction: false,
      bonusPoints: 175
    }
  ],
  timelineEvents: [
    {
      id: 'tl3-01',
      timestamp: 'Yesterday 10:00',
      timeSortValue: 600,
      title: {
        en: 'Humaira Plants the Surge Capacitor',
        bn: 'হুমায়রা এসি ভেন্টে ক্যাপাসিটর স্থাপন করে'
      },
      description: {
        en: 'Dr. Humaira climbs the HVAC maintenance ladder and clips the timed pulse capacitor into the emergency generator relay bus.',
        bn: 'ডা. হুমায়রা মইয়ে চড়ে এসি ভেন্টের লাইনে টাইমারসহ ক্যাপাসিটর জুড়ে দেয়।'
      },
      source: {
        en: 'Shafiqul Islam\'s Statement & Breaker Forensics',
        bn: 'শফিকুলের সাক্ষ্য ও ব্রেকারের আলামত'
      },
      verifiedLocation: {
        en: 'HVAC Vent / Sub-Level 2',
        bn: 'সাব-লেভেল ২ এর এসি ভেন্ট'
      },
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 0
    },
    {
      id: 'tl3-02',
      timestamp: 'Yesterday 14:00',
      timeSortValue: 840,
      title: {
        en: 'Deflection Prism Placed on Laser Emitter',
        bn: 'লেজারের মুখে প্রিজম লাগিয়ে রশ্মি ঘোরানো'
      },
      description: {
        en: 'Under the pretense of photographic glare reduction, Humaira attaches the quartz optical deflection prism to Pillar 3, looping the laser beam.',
        bn: 'ছবি তোলার অজুহাতে হুমায়রা লেজারের মুখে প্রিজম বসিয়ে রশ্মিকে ঘুরিয়ে দেয়।'
      },
      source: {
        en: 'Sharmin Jahan\'s Technical Audit',
        bn: 'শারমীন জাহানয়ের কারিগরি রিপোর্ট'
      },
      verifiedLocation: {
        en: 'Vault Pillar #3',
        bn: 'ভল্ট পিলার ৩'
      },
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 1
    },
    {
      id: 'tl3-03',
      timestamp: '18:00',
      timeSortValue: 1080,
      title: {
        en: 'The Real Theft: Humaira Swaps the Relic',
        bn: 'আসল চুরি: সন্ধ্যা ৬টায় হুমায়রা রত্ন বদলে ফেলে'
      },
      description: {
        en: 'Dr. Humaira enters the vault for her pre-gala inspection, unlocks the pedestal vitrine, substitutes the Florence resin counterfeit, and hides the genuine scarab in her briefcase.',
        bn: 'হুমায়রা পরিদর্শনের নাম করে ভল্টে ঢুকে কাচ খুলে ইতালির নকলটি বেদিতে রেখে আসল রত্নটি ব্যাগে লুকিয়ে ফেলে।'
      },
      source: {
        en: 'Biometric Access Logs & Thermal Stress Analysis',
        bn: 'বায়োমেট্রিক লগ ও তাপে ফাটলের বিশ্লেষণ'
      },
      verifiedLocation: {
        en: 'Display Pedestal Vault',
        bn: 'মূল ভল্ট'
      },
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 2
    },
    {
      id: 'tl3-04',
      timestamp: '01:45',
      timeSortValue: 1545,
      title: {
        en: 'Humaira Takes the Stage in the Ballroom',
        bn: 'হুমায়রা বলরুমের মঞ্চে বক্তব্য শুরু করে'
      },
      description: {
        en: 'Dr. Humaira begins her keynote speech in the Grand Ballroom upstairs in front of 200 donors, establishing her public alibi.',
        bn: '২০০ অতিথির সামনে বক্তব্য দিতে মঞ্চে উঠে হুমায়রা নিজের প্রকাশ্য অ্যালিবাই তৈরি করে।'
      },
      source: {
        en: 'Ballroom Video & Donor Witnesses',
        bn: 'ভিডিও ফুটেজ ও ২০০ সাক্ষীর জবানবন্দি'
      },
      verifiedLocation: {
        en: 'Main Gala Ballroom',
        bn: 'মূল বলরুম'
      },
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 3
    },
    {
      id: 'tl3-05',
      timestamp: '02:15',
      timeSortValue: 1575,
      title: {
        en: 'The Timed EMP Surge Fires',
        bn: 'টাইমার অনুযায়ী বৈদ্যুতিক শর্ট সার্কিট'
      },
      description: {
        en: 'The countdown capacitor triggers, delivering a 2,000V spike that trips the main power breakers and plunges the museum into a 4-minute blackout.',
        bn: 'টাইমার অন হয়ে ২ হাজার ভোল্টের স্পাইক দিয়ে ব্রেকার ফেলে মিউজিয়ামকে ৪ মিনিটের জন্য অন্ধকারে ডুবিয়ে দেয়।'
      },
      source: {
        en: 'Capacitor Timer & Breaker Log',
        bn: 'টাইমার ডিভাইস ও ব্রেকার লগ'
      },
      verifiedLocation: {
        en: 'Sub-Level 2 Breaker Room',
        bn: 'ব্রেকার রুম'
      },
      correctIndex: 4
    },
    {
      id: 'tl3-06',
      timestamp: '02:19',
      timeSortValue: 1579,
      title: {
        en: 'Power Restored; The "Discovery"',
        bn: 'বিদ্যুৎ ফিরে আসা ও চুরির নাটক আবিষ্কার'
      },
      description: {
        en: 'Emergency generators fire up. Security rushes the vault to find the vitrine untouched, but the scarab on the pedestal has cracked under the heat.',
        bn: 'জেনারেটর চালু হলে সবাই ভল্টে এসে দেখে কাচ অক্ষত কিন্তু রত্নটি তাপে ফেটে গেছে।'
      },
      source: {
        en: 'Security Console Incident Log',
        bn: 'নিরাপত্তা কনসোল লগ'
      },
      verifiedLocation: {
        en: 'Sub-Level 2 Vault',
        bn: 'সাব-লেভেল ২ ভল্ট'
      },
      correctIndex: 5
    },
    {
      id: 'tl3-07',
      timestamp: '02:45',
      timeSortValue: 1605,
      title: {
        en: 'Relic Stashed in Janitor\'s Cart',
        bn: 'রত্নটি লন্ড্রি ট্রলিতে লুকিয়ে রাখা'
      },
      description: {
        en: 'The genuine scarab in its lead-lined box is planted into Shafiqul Islam\'s laundry cart to be wheeled out through the loading bay to Tareq\'s courier.',
        bn: 'আসল রত্নটি সিসার বাক্সে ভরে লন্ড্রি ট্রলিতে রাখা হয় যাতে কেটারিং ডকে পাচার করা যায়।'
      },
      source: {
        en: 'Freight Dock Intercept',
        bn: 'মালবাহী ডকের উদ্ধার অভিযান'
      },
      verifiedLocation: {
        en: 'Sub-Level 1 Elevator Foyer',
        bn: 'লিফটের সামনে'
      },
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 6
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: {
        en: 'Look at the Biometric Log',
        bn: 'বায়োমেট্রিক লগ পরীক্ষা করুন'
      },
      hintText: {
        en: 'Check the biometric access records for the vault vitrine during the blackout. Was the glass hood ever unlocked between 02:15 and 02:19?',
        bn: 'ব্ল্যাকআউটের সময় ভল্টের স্ক্রিনের রেকর্ড দেখুন। রাত ২:১৫ থেকে ২:১৯ এর মধ্যে কি কাচের শোকেস আদৌ একবারও আনলক করা হয়েছিল?'
      }
    },
    {
      level: 2,
      cost: 100,
      title: {
        en: 'The Blackout Was an Illusion',
        bn: 'ব্ল্যাকআউট ছিল চোখের ধুলো'
      },
      hintText: {
        en: 'The theft did not occur during the blackout. The blackout was engineered with a timed capacitor to create a false timeline.',
        bn: 'চুরিটি ব্ল্যাকআউটের সময় ঘটেনি। টাইমার লাগানো ক্যাপাসিটর দিয়ে ইচ্ছা করে বিদ্যুৎ বন্ধ করা হয়েছিল মিথ্যা সময়রেখা তৈরি করার জন্য।'
      }
    },
    {
      level: 3,
      cost: 200,
      title: {
        en: 'The Genuine Swap',
        bn: 'আসল বদলের রহস্য'
      },
      hintText: {
        en: 'Dr. Humaira Rashid swapped the real scarab with an Italian polymer replica during her private 18:00 inspection, eight hours before the gala blackout!',
        bn: 'ডা. হুমায়রা রশীদ গালা ব্ল্যাকআউটের পুরো আট ঘণ্টা আগে, সন্ধ্যা ৬টার ব্যক্তিগত পরিদর্শনের সময় ইতালি থেকে আনা প্লাস্টিকের নকলটি রেখে আসলটি চুরি করে নিয়েছিল!'
      }
    }
  ],
  solution: {
    culpritId: 'suspect-03-rossi',
    culpritName: {
      en: 'Dr. Humaira Rashid (Chief Curator)',
      bn: 'ডা. হুমায়রা রশীদ (প্রধান কিউরেটর)'
    },
    motiveDescription: {
      en: 'Facing personal bankruptcy and $2.4M in excavation debts, she conspired to sell the genuine Eye of Osiris to private buyer Tareq Al-Mamun for $10,000,000.',
      bn: 'ব্যক্তিগত ২৪ লাখ ডলারের খনন ঋণের দেউলিয়া দশা কাটাতে ১০ মিলিয়ন ডলারের বিনিময়ে ধনকুবের তারেক আল-মামুনের কাছে আসল রত্ন বিক্রির ষড়যন্ত্র।'
    },
    methodDescription: {
      en: 'Swapped the real scarab for a Florence resin replica at 18:00 using a deflecting optical prism. Staged the 02:15 blackout with a timed EMP capacitor while she was on stage to establish an unbreakable alibi.',
      bn: 'প্রিজম দিয়ে লেজার ফাঁকি দিয়ে সন্ধ্যা ৬টায় আসল রত্নের বদলে নকল রত্ন রেখে দেয়। এরপর মঞ্চে ভাষণে থাকার সময় যাতে ব্ল্যাকআউট হয় সেজন্য টাইমারযুক্ত ক্যাপাসিটর লাগিয়ে নিশ্ছিদ্র অ্যালিবাই তৈরি করে।'
    },
    approximateTime: {
      en: '18:00 (Theft) / 02:15 (Staged Blackout)',
      bn: 'সন্ধ্যা ১৮:০০ (আসল চুরি) / রাত ০২:১৫ (সাজানো বিদ্যুৎ বিভ্রাট)'
    },
    crucialEvidenceIds: [
      'clue-03-cracked-scarf',
      'clue-03-emp-capacitor',
      'clue-03-vault-access-logs',
      'clue-03-rossi-invoice',
      'clue-03-lead-box'
    ],
    falseAlibiSuspectId: 'suspect-03-rossi',
    fullCaseDebriefing: {
      en: 'Dr. Humaira Rashid executed what seemed like the perfect crime. Plagued by $2.4M in catastrophic excavation debts, she conspired to steal the $18,000,000 Eye of Osiris and sell it to billionaire collector Tareq Al-Mamun.\n\nThree months prior, Humaira commissioned an exact polymer resin replica from an artisan atelier in Florence. Yesterday, she placed a quartz deflection prism over laser Pillar 3 to blind the optical security grid, and wired a timed high-voltage pulse capacitor into the HVAC emergency circuit.\n\nThe real heist took place at 18:00 during her official pre-gala inspection. With the laser deflected, Humaira unlocked the acrylic vitrine, swapped the authentic ancient relic for the polyurethane counterfeit, and walked out with the genuine scarab in her briefcase. At 02:15, while Humaira stood prominently on stage in front of 200 guests delivering her keynote speech, the timer triggered the electrical capacitor, cutting museum power for 4 minutes.\n\nHumaira assumed police would deduce the theft took place during the 4-minute blackout while she had a crowd of 200 witnesses. However, spectroscopic analysis proved the fake scarab had been under the display lights for over 8 hours (causing thermal cracking), and the biometric terminal confirmed the vitrine was never opened during the blackout. When detectives recovered the genuine scarab in the lead box intended for Tareq\'s courier, Humaira\'s master plan collapsed.',
      bn: 'ডা. হুমায়রা রশীদ আপাতদৃষ্টিতে একটি নিখুঁত অপরাধের পরিকল্পনা করেছিল। মিশরের খননকাজে ২৪ লাখ ডলার দেনার দায়ে জর্জরিত হয়ে সে ১৮ মিলিয়ন ডলারের "আই অব ওসাইরিস" চুরি করে ধনকুবের তারেক আল-মামুনের কাছে বিক্রি করার চক্রান্ত করে।\n\nতিন মাস আগেই হুমায়রা ইতালির ফ্লোরেন্স থেকে নিখুঁত এক পলিমার রেপ্লিকা তৈরি করিয়ে আনে। গতকাল সে লেজার পিলারে প্রিজম বসিয়ে অ্যালার্ম বোকা বানানোর ব্যবস্থা করে এবং এসি ভেন্টে একটি টাইমারযুক্ত হাই-ভোল্টেজ ক্যাপাসিটর লাগিয়ে রাখে।\n\nআসল চুরিটি ঘটেছিল সন্ধ্যা ৬টায় আনুষ্ঠানিক পরিদর্শনের সময়। প্রিজমের কারণে লেজার নিষ্ক্রিয় থাকায় হুমায়রা শোকেস খুলে আসল রত্নটি নিজের ব্যাগে পুরে নকলটি রেখে দেয়। রাত ২:১৫-এ যখন সে ২০০ বিশিষ্ট অতিথির সামনে মঞ্চে বক্তব্য দিচ্ছিল, ঠিক তখনই টাইমারটি চালু হয়ে জাদুঘরের বিদ্যুৎ ৪ মিনিটের জন্য বিচ্ছিন্ন করে দেয়।\n\nহুমায়রা ভেবেছিল পুলিশ ধরে নেবে ব্ল্যাকআউটের ৪ মিনিটেই চুরি হয়েছে, যার ফলে তার পক্ষে ২০০ জন চাক্ষুষ সাক্ষীর শক্ত অ্যালিবাই থাকবে। কিন্তু রাসায়নিক পরীক্ষায় দেখা যায় নকল রত্নটি অন্তত ৮ ঘণ্টা ধরে হ্যালোজেন বাতির তাপে থাকার কারণেই ফেটে গেছে, এবং বায়োমেট্রিক লগে দেখা যায় ব্ল্যাকআউটের সময় শোকেস খোলাই হয়নি। পরিশেষে লন্ড্রি ট্রলিতে তারেকের কুরিয়ারের জন্য রাখা সিসার বাক্সে আসল রত্নটি উদ্ধার হওয়ায় হুমায়রার সমস্ত সাজানো নাটক ভেঙে পড়ে।'
    },
    options: {
      motives: [
        {
          id: 'm-rossi-debt',
          label: {
            en: 'Overcoming $2.4M in personal excavation bankruptcy by selling the relic to a private collector',
            bn: 'খননকাজের ২৪ লাখ ডলার দেনা থেকে বাঁচতে গোপনে ব্যক্তিগত সংগ্রাহকের কাছে রত্ন বিক্রি করা'
          }
        },
        {
          id: 'm-security-revenge',
          label: {
            en: 'Security chief retaliating against the museum board for pension cuts',
            bn: 'পেনশন কমানোর ক্ষোভে ট্রাস্টি বোর্ডের ওপর প্রতিশোধ নেওয়া'
          }
        },
        {
          id: 'm-janitor-medical',
          label: {
            en: 'Stealing the relic to pay for urgent family medical surgeries',
            bn: 'মেয়ের জরুরি চিকিৎসার খরচ জোগাতে রত্ন চুরি করা'
          }
        },
        {
          id: 'm-insurance-fraud',
          label: {
            en: 'Museum board seeking an $18,000,000 insurance payout',
            bn: '১৮০ কোটি টাকার ইন্স্যুরেন্সের অর্থ হাতিয়ে নেওয়ার চেষ্টা'
          }
        }
      ],
      methods: [
        {
          id: 'met-rossi-swap',
          label: {
            en: 'Swapped relic at 18:00 with Florence resin replica; staged 02:15 blackout with timed capacitor to fake an alibi',
            bn: 'সন্ধ্যা ৬টায় প্রিজম ব্যবহার করে নকল রত্ন দিয়ে বদলানো; টাইমার দিয়ে রাত ২:১৫-এ ব্ল্যাকআউট সাজিয়ে মিথ্যা অ্যালিবাই তৈরি করা'
          }
        },
        {
          id: 'met-hvac-ninja',
          label: {
            en: 'Infiltrated vault through HVAC shaft during blackout wearing night-vision goggles',
            bn: 'অন্ধকারে নাইট ভিশন গগলস পরে এসি ডাক্ট দিয়ে ভল্টে নেমে চুরি করা'
          }
        },
        {
          id: 'met-cloned-keycard',
          label: {
            en: 'Cloned universal janitorial keycard and grabbed relic in the dark',
            bn: 'ক্লিনারের মাস্টার কার্ড ক্লোন করে অন্ধকারে ঢুকে নিয়ে যাওয়া'
          }
        },
        {
          id: 'met-laser-glitch',
          label: {
            en: 'Remotely disabled laser system from laptop in the lobby bar',
            bn: 'লবি বার থেকে ল্যাপটপ দিয়ে লেজার সিস্টেম হ্যাক করে নিষ্ক্রিয় করা'
          }
        }
      ],
      times: [
        {
          id: 't-1800',
          label: {
            en: 'At 18:00 during the pre-gala curator inspection (with blackout staged at 02:15)',
            bn: 'সন্ধ্যা ১৮:০০ টায় পরিদর্শনের সময় (আর ব্ল্যাকআউট সাজানো হয়েছিল রাত ০২:১৫-এ)'
          }
        },
        {
          id: 't-0215',
          label: {
            en: 'At 02:15 during the 4-minute electrical blackout',
            bn: 'রাত ০২:১৫ মিনিটে ৪ মিনিটের ব্ল্যাকআউটের সময়'
          }
        },
        {
          id: 't-0245',
          label: {
            en: 'At 02:45 after the Gala concluded',
            bn: 'রাত ০২:৪৫ মিনিটে অনুষ্ঠান শেষ হওয়ার পর'
          }
        },
        {
          id: 't-yesterday',
          label: {
            en: 'Yesterday morning during laser calibration',
            bn: 'গতকাল সকালে লেজার টেস্ট করার সময়'
          }
        }
      ]
    }
  }
};
