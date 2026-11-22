import { CaseData } from '../../types/game';

export const case002: CaseData = {
  id: 'case-002',
  caseNumber: 'CASE 002',
  title: {
    en: 'THE MISSING WITNESS',
    bn: 'নিখোঁজ প্রত্যক্ষদর্শী'
  },
  subtitle: {
    en: 'A Compromised Safehouse, a Staged Kidnapping, and a Vanished Whistleblower',
    bn: 'একটি অরক্ষিত সেফহাউস, সাজানো অপহরণ এবং উধাও হওয়া প্রধান সাক্ষী'
  },
  badge: 'ABDUCTION',
  difficulty: 'Hard',
  estimatedTime: '30-40 mins',
  victimOrSubject: {
    en: 'Clara Thorne (Age 31, Chief Forensic Accountant & Crown Whistleblower)',
    bn: 'ক্লারা থর্ন (বয়স ৩১, প্রধান ফরেনসিক হিসাবরক্ষক ও সরকারি হুইসেলব্লোয়ার)'
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
    en: 'Hours before she was scheduled to testify against the ruthless Blackwood Crime Syndicate, key whistleblower Clara Thorne disappeared from her 4th-floor guarded safehouse. The door was forced, furniture overturned, blood splattered on the rug, and her police escort unconscious in the hallway. Did the mob abduct her, or did she execute a daring escape?',
    bn: 'কুখ্যাত ব্ল্যাকউড অপরাধ সিন্ডিকেটের বিরুদ্ধে আদালতে সাক্ষ্য দেওয়ার ঠিক কয়েক ঘণ্টা আগে ৪ তলার সুরক্ষিত সেফহাউস থেকে নিখোঁজ হন প্রধান সাক্ষী ক্লারা থর্ন। দরজা ভাঙা, আসবাবপত্র ওলটপালট, মেঝেতে ছোপ ছোপ রক্ত এবং পুলিশ পাহারাদার করিডোরে অচেতন অবস্থায় পড়ে ছিল। অপরাধীরা কি তাকে অপহরণ করেছে, নাকি সে নিজেই পালিয়ে গেছে?'
  },
  briefing: {
    chiefMemo: {
      en: 'Detective, the Blackwood trial collapses in 10 hours unless we recover Clara Thorne or prove what occurred in that apartment. Officer Ray Navarro claims he was ambushed from behind by masked men. But something smells foul. Search the apartment, examine communication logs, cross-examine the protection detail, and reconstruct the true sequence of events.',
      bn: 'গোয়েন্দা, আগামী ১০ ঘণ্টার মধ্যে ক্লারা থর্নকে খুঁজে না পেলে বা সত্য উন্মোচন না হলে সিন্ডিকেটের বিচার বাতিল হয়ে যাবে। অফিসার রে নাভারোর দাবি মুখোশধারীরা তাকে পেছন থেকে আঘাত করেছে। কিন্তু কিছু একটা গোলমেলে ঠেকছে। অ্যাপার্টমেন্টটি তল্লাশি করুন, কল রেকর্ড ও ডিজিটাল যোগাযোগ পরীক্ষা করুন এবং সত্য উদঘাটন করুন।'
    },
    initialStatus: {
      en: 'Safehouse cordoned off by State Marshals. Syndicate trial scheduled for 10:00 AM.',
      bn: 'সেফহাউস ঘিরে রেখেছে স্টেট মার্শালরা। সকাল ১০টায় আদালতের বিচার শুরু হওয়ার কথা।'
    },
    keyObjectives: [
      {
        en: 'Inspect Safehouse Room 404 for signs of genuine struggle vs staged deception.',
        bn: 'রুম ৪০৪-এ প্রকৃত ধস্তাধস্তির প্রমাণ নাকি সাজানো নাটকের আলামত রয়েছে তা নির্ধারণ করুন।'
      },
      {
        en: 'Investigate the unconscious protection officer and digital communications.',
        bn: 'অচেতন পাহারাদার অফিসার ও তার ডিজিটাল ডিভাইসের আদান-প্রদান তদন্ত করুন।'
      },
      {
        en: 'Examine building entry logs, CCTV footage, and subterranean maintenance tunnels.',
        bn: 'ভবনের সিসিটিভি ফুটেজ এবং ভূগর্ভস্থ কয়লা ও বাষ্প বয়লারের সুড়ঙ্গপথ পরীক্ষা করুন।'
      },
      {
        en: 'Determine who leaked the safehouse location and what truly happened to Clara Thorne.',
        bn: 'কে সেফহাউসের গোপন ঠিকানা ফাঁস করেছিল এবং ক্লারা থর্নের সাথে আসলে কী ঘটেছে তা প্রমাণ করুন।'
      },
      {
        en: 'Submit the final indictment with ironclad physical and digital evidence.',
        bn: 'অকাট্য ডিজিটাল ও শারীরিক প্রমাণসহ চূড়ান্ত অভিযোগপত্র পেশ করুন।'
      }
    ]
  },
  crimeScene: {
    roomTitle: {
      en: 'Safehouse Room 404 — Main Living Quarters',
      bn: 'সেফহাউস রুম ৪০৪ — প্রধান বসবাসের ঘর'
    },
    roomDescription: {
      en: 'A nondescript apartment with reinforced deadbolts, drawn blinds, an overturned floor lamp, broken teacups on the carpet, an unmade cot, a humming radiator, and an open steam vent in the adjacent kitchenette.',
      bn: 'একটি সাধারণ অ্যাপার্টমেন্ট। ভারী দরজার লক, টানা পর্দা, মেঝেতে উল্টে পড়ে থাকা বাতি, ভাঙা চায়ের কাপ, এলোমেলো বিছানা, গর্জন করতে থাকা স্টিম হিটার এবং রান্নাঘরের উন্মুক্ত ডাক্ট প্যানেল।'
    },
    sceneTheme: 'motel_safehouse',
    hotspots: [
      {
        id: 'hs-02-door',
        name: {
          en: 'Apartment Entrance & Door Frame',
          bn: 'দরজার ফ্রেম ও প্রবেশপথ'
        },
        x: 15,
        y: 42,
        radius: 28,
        description: {
          en: 'The steel door has outward splintering on the jamb. Officer Navarro was found slumped in the hallway outside.',
          bn: 'দরজার ফ্রেম বাইরে থেকে ভাঙা। বাইরে করিডোরে অফিসার নাভারোকে অচেতন অবস্থায় পাওয়া যায়।'
        },
        revealsEvidenceId: 'clue-02-forced-door',
        discoveryNote: {
          en: 'Forensic inspection of the strike plate shows pry marks made from the OUTSIDE, but the deadbolt was already unlatched before being struck.',
          bn: 'ফরেনসিক পরীক্ষায় দেখা গেল বাইরে থেকে লাথি মেরে দরজা ভাঙা হয়েছিল, কিন্তু আঘাত করার আগেই ভেতরের লকটি খোলা ছিল।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-02-rug',
        name: {
          en: 'Overturned Lamp & Stained Rug',
          bn: 'উল্টানো বাতি ও রক্তের দাগযুক্ত গালিচা'
        },
        x: 45,
        y: 60,
        radius: 26,
        description: {
          en: 'A shattered porcelain lamp and dark red droplets spattered on the worn linoleum rug.',
          bn: 'ভাঙা চিনামাটির বাতি এবং পুরোনো লিনোলিয়ামের গালিচায় ছিটকে পড়া জমাট রক্ত।'
        },
        revealsEvidenceId: 'clue-02-staged-blood',
        discoveryNote: {
          en: 'Field reagent test confirms the red droplets are synthetic theatrical stage blood mixed with chicken plasma, NOT human hemoglobin!',
          bn: 'রাসায়নিক পরীক্ষায় ধরা পড়েছে এটি মানুষের রক্ত নয়, বরং নাটকে ব্যবহৃত কৃত্রিম লাল সিরাপ ও পশুর রক্ত!'
        },
        iconType: 'flask'
      },
      {
        id: 'hs-02-radiator',
        name: {
          en: 'Cast Iron Steam Radiator',
          bn: 'ঢালাই লোহার স্টিম হিটার'
        },
        x: 75,
        y: 52,
        radius: 24,
        description: {
          en: 'A clanking steam radiator beneath the taped-up window.',
          bn: 'টেপ দিয়ে সিল করা জানালার নিচে শব্দ করতে থাকা হিটার।'
        },
        revealsEvidenceId: 'clue-02-burner-phone',
        discoveryNote: {
          en: 'Concealed in the hollow gap behind the radiator: an active disposable burner phone with text messages coordinates matching Officer Ray Navarro\'s unit.',
          bn: 'রেডিয়েটরের পেছনে লুকিয়ে রাখা একটি সস্তা বার্নার ফোন পাওয়া গেছে, যাতে অফিসার রে নাভারোর সাথে বার্তা আদান-প্রদানের রেকর্ড রয়েছে।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-02-vent',
        name: {
          en: 'Kitchenette Maintenance Hatch',
          bn: 'রান্নাঘরের দেয়ালের ভেন্টিলেশন প্যানেল'
        },
        x: 88,
        y: 35,
        radius: 25,
        description: {
          en: 'A low sheet-metal access panel in the kitchenette wall leading into the building\'s central steam conduit pipe shaft.',
          bn: 'রান্নাঘরের দেয়ালের নিচে একটি টিনের ঢাকনা যা ভবনের মাটির নিচের পুরনো বাষ্প সুড়ঙ্গে চলে গেছে।'
        },
        revealsEvidenceId: 'clue-02-vent-grate',
        discoveryNote: {
          en: 'The screws were removed from the inside and greased with butter. Scratches on the sheet metal indicate someone crawled through into the basement boiler shaft.',
          bn: 'ঢাকনার স্ক্রুগুলো ভেতর থেকে মাখন মাখিয়ে খোলা হয়েছিল। ঘষার দাগ প্রমাণ করে কেউ একজন সুড়ঙ্গ বেয়ে বেসমেন্টে নেমে গেছে।'
        },
        iconType: 'key'
      },
      {
        id: 'hs-02-desk',
        name: {
          en: 'Makeshift Desk & Trash',
          bn: 'ছোট টেবিল ও ময়লার ঝুড়ি'
        },
        x: 35,
        y: 30,
        radius: 24,
        description: {
          en: 'A laminate folding table with an unplugged laptop charger and a shredded notepad.',
          bn: 'একটি ফোল্ডিং টেবিল, যাতে ল্যাপটপ চার্জার এবং টুকরো করা নোটপ্যাড রয়েছে।'
        },
        revealsEvidenceId: 'clue-02-torn-ticket',
        discoveryNote: {
          en: 'Recovered a torn sleeper car train ticket for the 23:45 Night Express to Montreal under the alias "Rachel Campbell".',
          bn: 'মন্ট্রিয়লগামী রাত ১১:৪৫ ট্রেনের একটি ছেঁড়া টিকিট পাওয়া গেছে, যা "র‍্যাচেল ক্যাম্পবেল" ছদ্মনামে কেনা।'
        },
        iconType: 'document'
      },
      {
        id: 'hs-02-coat',
        name: {
          en: 'Hallway Coat Pegs',
          bn: 'করিডোরের জামা ঝুলানোর হুক'
        },
        x: 22,
        y: 25,
        radius: 22,
        description: {
          en: 'A rain slicker hanging from a hook with water still dripping from the hem.',
          bn: 'ভেজা রেইনকোট ঝুলছে, যার কোণা থেকে তখনও ফোঁটা ফোঁটা পানি পড়ছে।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-02-sister-scarf',
        discoveryNote: {
          en: 'Tucked inside the coat pocket: a silk lavender floral scarf smelling of French perfume, belonging to Clara\'s sister Maya Lin.',
          bn: 'কোটের পকেটে ল্যাভেন্ডার ফুলের সুগন্ধি মাখা একটি রেশমি স্কার্ফ পাওয়া গেছে, যা ক্লারার বোন মায়া লিনের।'
        },
        iconType: 'magnifier'
      },
      {
        id: 'hs-02-boiler',
        name: {
          en: 'Basement Boiler Conduit Exit',
          bn: 'বেসমেন্ট বয়লার সুড়ঙ্গের প্রস্থানমুখ'
        },
        x: 60,
        y: 78,
        radius: 25,
        description: {
          en: 'The sub-level tunnel door leading out to the rear alleyway delivery dock.',
          bn: 'পেছনের মালবাহী রেল লাইনের দিকে বের হয়ে যাওয়া মাটির নিচের কয়লা সুড়ঙ্গ।'
        },
        isHidden: true,
        revealsEvidenceId: 'clue-02-tunnel-footprints',
        discoveryNote: {
          en: 'Fresh footprints in boiler coal soot showing two distinct women\'s shoe prints exiting toward the freight dock alley at 23:20.',
          bn: 'কয়লার কালিতে দুজন মহিলার জুতোর তাজা ছাপ যা রাত ১১:২০-এ মালবাহী প্ল্যাটফর্মের দিকে চলে গেছে।'
        },
        iconType: 'footprint'
      }
    ]
  },
  suspects: [
    {
      id: 'suspect-02-navarro',
      name: {
        en: 'Detective Ray Navarro',
        bn: 'ডিটেকটিভ রে নাভারো'
      },
      alias: {
        en: 'The Compromised Guard',
        bn: 'বিকিয়ে যাওয়া পাহারাদার'
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
        en: 'Bank records show a $25,000 cash deposit into his offshore account at 23:00; deep in offshore sports betting debt.',
        bn: 'অনলাইন জুয়ার বিপুল দেনায় ডুবে ছিল; রাত ১১টায় তার গোপন অ্যাকাউন্টে সিন্ডিকেটের ২৫,০০০ ডলার জমা হয়।'
      },
      alibi: {
        en: 'Claims he was struck from behind by two masked syndicate hitmen in the hallway at 00:45 and knocked unconscious.',
        bn: 'দাবি করে রাত ১২:৪৫-এ করিডোরে মুখোশধারীরা তাকে পেছন থেকে রড দিয়ে আঘাত করে অজ্ঞান করে ফেলে।'
      },
      personality: {
        en: 'Defensive, rubbing the back of his neck, aggressive posture, evasive eyes.',
        bn: 'উদ্ধত কিন্তু চোখে ভীতি, ঘাড় চুলকাচ্ছে, বারবার নজর এড়িয়ে যাচ্ছে।'
      },
      secrets: {
        en: 'Sold the safehouse address and access codes to Viktor Kozlov for $50,000.',
        bn: '৫০ হাজার ডলারের বিনিময়ে সেফহাউসের ঠিকানা ও শিফট পরিবর্তনের সময় সিন্ডিকেটের কাছে বিক্রি করেছিল।'
      },
      avatarSeed: 'Navarro',
      avatarColor: '#dc2626',
      dialogueTree: [
        {
          id: 'dlg-n-1',
          prompt: {
            en: 'Describe the ambush in the hallway.',
            bn: 'করিডোরের হামলার বিবরণ দিন।'
          },
          response: {
            en: 'I heard a noise by the fire escape stairs. As I stepped out to investigate, someone clocked me with a pipe. When I woke up, Thorne was gone and the door was kicked in.',
            bn: 'সিঁড়ির কাছে শব্দ শুনে বের হয়েছিলাম। মুহূর্তের মধ্যে কেউ একজন লোহার পাইপ দিয়ে আমার মাথায় মারে। জ্ঞান ফিরলে দেখি দরজা ভাঙা আর ক্লারা উধাও।'
          },
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-n-2',
          prompt: {
            en: 'Why was your personal weapon found unfired in its holster?',
            bn: 'আপনার পিস্তলটি হলস্টারে সম্পূর্ণ অব্যবহৃত অবস্থায় ছিল কেন?'
          },
          response: {
            en: 'It happened in two seconds! They blindsided me! What, are you accusing a decorated fifteen-year veteran of letting a witness get taken?',
            bn: 'সবকিছু চোখের পলকে ঘটেছিল! আমাকে ভাবার সুযোগ দেয়নি! আপনি কি ১৫ বছরের সম্মানিত অফিসারকে সাক্ষী হাতছাড়া করার অপবাদ দিচ্ছেন?'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-n-3',
          prompt: {
            en: 'Whose burner phone was transmitting from behind the radiator?',
            bn: 'হিটারের পেছনে লুকিয়ে রাখা ফোনটি কার সাথে বার্তা আদান-প্রদান করছিল?'
          },
          response: {
            en: 'Burner phone? I know nothing about that. Thorne was forbidden from having electronic devices. If she had a phone, she smuggled it in herself.',
            bn: 'বার্নার ফোন? আমি ওসবের কিছুই জানি না। ক্লারার কোনো ডিভাইস রাখার নিয়ম ছিল না। ওটা থাকলে সে নিজেই লুকিয়ে এনেছে।'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-navarro-deposit',
          reactionText: {
            en: 'Navarro sweats heavily: "That $25,000? That was... a private loan from my brother-in-law to clear casino debts! It has nothing to do with this assignment!"',
            bn: 'নাভারো ঘেমে ওঠে: "ওই ২৫,০০০ ডলার? ওটা আমার শ্যালকের কাছ থেকে নেওয়া ব্যক্তিগত ধার! এই সেফহাউসের সাথে ওর কোনো সম্পর্ক নেই!"'
          },
          stressIncrease: 45,
          exposesLie: true
        },
        {
          evidenceId: 'clue-02-burner-phone',
          reactionText: {
            en: 'Navarro\'s jaw tightens: "The IMEI on that burner matches the phone seized from my locker? I... I need to consult my union attorney immediately."',
            bn: 'নাভারোর চোয়াল শক্ত হয়ে যায়: "ওই ফোনের আইএমইআই আমার লকারের ফোনের সাথে মিলে গেছে? আমি... আমি আমার আইনজীবীর সাথে কথা না বলে আর কিছু বলব না।"'
          },
          stressIncrease: 50,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-02-sterling',
      name: {
        en: 'Thomas Sterling',
        bn: 'টমাস স্টার্লিং'
      },
      alias: {
        en: 'The Syndicate Consigliere',
        bn: 'সিন্ডিকেটের কৌশলী আইনজীবী'
      },
      role: {
        en: 'Chief Defense Counsel for Blackwood',
        bn: 'ব্ল্যাকউডের প্রধান আইনজীবী'
      },
      age: 55,
      occupation: {
        en: 'High-Profile Criminal Defense Attorney',
        bn: 'প্রভাবশালী ফৌজদারি আইনজীবী'
      },
      relationshipToVictim: {
        en: 'Adversary in court; cross-examined Clara in depositions',
        bn: 'আদালতের প্রতিপক্ষ উকিল'
      },
      motive: {
        en: 'If Clara testifies, his billionaire client goes to federal penitentiary for life and Sterling loses his retainer.',
        bn: 'ক্লারা সাক্ষ্য দিলে সিন্ডিকেট প্রধানের যাবজ্জীবন জেল হবে এবং স্টার্লিংয়ের কোটি টাকার ক্যারিয়ার ধ্বংস হবে।'
      },
      alibi: {
        en: 'Claims he was in his downtown penthouse drafting legal motions until 02:00 with his junior associates.',
        bn: 'দাবি করে রাত ২টা পর্যন্ত সে নিজের চেম্বারে জুনিয়রদের নিয়ে মামলার খসড়া তৈরি করছিল।'
      },
      personality: {
        en: 'Suave, condescending, immaculate bespoke suit, sneering smile.',
        bn: 'মার্জিত, দামি স্যুট পরা, মুখে বাঁকা বিদ্রূপের হাসি।'
      },
      secrets: {
        en: 'Communicated with Navarro via encrypted Signal app to coordinate Kozlov\'s breach.',
        bn: 'নাভারোর সাথে গোপন সংকেতে যোগাযোগ করে খুনিদের অভিযানের সময় ঠিক করেছিল।'
      },
      avatarSeed: 'Sterling',
      avatarColor: '#475569',
      dialogueTree: [
        {
          id: 'dlg-s-1',
          prompt: {
            en: 'Where were you between 23:00 and 01:00 tonight?',
            bn: 'রাত ১১:০০ থেকে ০১:০০ টার মধ্যে আপনি কোথায় ছিলেন?'
          },
          response: {
            en: 'In my corner office on the 42nd floor preparing our defense. Three associates and two legal paralegals can verify my presence every single minute.',
            bn: 'আমার ৪২ তলার চেম্বারে শুনানির প্রস্তুতি নিচ্ছিলাম। তিনজন আইনজীবী ও দুজন সহকারী প্রতি মিনিটের সাক্ষ্য দিতে প্রস্তুত।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-s-2',
          prompt: {
            en: 'Did you make financial offers to Detective Navarro?',
            bn: 'আপনি কি অফিসার নাভারোকে কোনো আর্থিক প্রস্তাব দিয়েছিলেন?'
          },
          response: {
            en: 'I don\'t know any Detective Navarro. My dealings are strictly with the Attorney General. If you imply bribery without evidence, I will sue your department for slander.',
            bn: 'আমি নাভারো নামের কাউকে চিনি না। প্রমাণ ছাড়া ঘুষের অভিযোগ আনলে আমি পুরো পুলিশ ডিপার্টমেন্টের বিরুদ্ধে মানহানির মামলা করব।'
          },
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-burner-phone',
          reactionText: {
            en: 'Sterling smiles thinly: "A burner phone? Numbers registered to anonymous offshore shell accounts prove nothing in a court of law, detective."',
            bn: 'স্টার্লিং মুচকি হাসে: "বেনামী বার্নার ফোনের মেসেজ আদালতে কারও অপরাধ প্রমাণ করতে পারে না, গোয়েন্দা।"'
          },
          stressIncrease: 10
        }
      ]
    },
    {
      id: 'suspect-02-maya',
      name: {
        en: 'Maya Lin',
        bn: 'মায়া লিন'
      },
      alias: {
        en: 'The Loyal Sister',
        bn: 'বিশ্বস্ত বোন'
      },
      role: {
        en: 'Clara Thorne\'s Half-Sister',
        bn: 'ক্লারার সৎ বোন'
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
        en: 'Believed the State Police protection was incompetent and that Clara would be assassinated inside the safehouse.',
        bn: 'বিশ্বাস করত পুলিশ পাহারা সম্পূর্ণ ব্যর্থ এবং ক্লারাকে সেফহাউসের ভেতরেই হত্যা করা হবে।'
      },
      alibi: {
        en: 'Claims she was at home in Queens all night watching television alone.',
        bn: 'দাবি করেছিল সে সারারাত নিজের কুইন্সের ফ্ল্যাটে একা টিভি দেখছিল।'
      },
      personality: {
        en: 'Guarded, anxious, highly protective of Clara, sharp-witted.',
        bn: 'উদ্বিগ্ন, ক্লারার প্রতি নিবেদিতপ্রাণ, তীব্র উপস্থিত বুদ্ধি সম্পন্ন।'
      },
      secrets: {
        en: 'Smuggled civilian clothes, fake Canadian passports, and a bug detector to Clara at 19:30.',
        bn: 'সন্ধ্যা ৭:৩০-এ ক্লারার জন্য সাধারণ জামাকাপড় ও জাল কানাডিয়ান পাসপোর্ট লুকিয়ে পৌঁছে দিয়েছিল।'
      },
      avatarSeed: 'Maya',
      avatarColor: '#ec4899',
      dialogueTree: [
        {
          id: 'dlg-ml-1',
          prompt: {
            en: 'Did you visit Clara at Safehouse 404 this evening?',
            bn: 'আজ সন্ধ্যায় কি আপনি ক্লারার সেফহাউসে গিয়েছিলেন?'
          },
          response: {
            en: 'The Marshals strictly forbade me from seeing her! I haven\'t seen my sister in two weeks since they locked her in that cage! I\'ve been worried sick!',
            bn: 'পুলিশ আমাকে ওর সাথে দেখা করতে সম্পূর্ণ নিষেধ করেছিল! দুই সপ্তাহ ধরে আমি বোনের মুখ দেখিনি! আমি ওর চিন্তায় পাগল হয়ে যাচ্ছি!'
          },
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-ml-2',
          prompt: {
            en: 'Did Clara express fear about her police escorts?',
            bn: 'ক্লারা কি তার পুলিশ পাহারাদারদের নিয়ে কোনো আশঙ্কার কথা বলেছিল?'
          },
          response: {
            en: 'Clara told me on a payphone three days ago that Detective Navarro was constantly whispering on a second phone and asking about her encrypted financial backups. She didn\'t trust him!',
            bn: 'তিন দিন আগে পে-ফোন থেকে ক্লারা বলেছিল নাভারো সবসময় চুপিচুপি অন্য ফোনে ফিসফিস করে এবং মূল এভিডেন্স ড্রাইভের পাসওয়ার্ড জানতে চায়। ক্লারা ওকে একদম বিশ্বাস করেনি!'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-sister-scarf',
          reactionText: {
            en: 'Maya\'s breath catches: "My lavender scarf? All right! I went there at 19:30 disguised as a food courier. Clara found Navarro\'s burner wiretap. She knew the mob was coming for her tonight!"',
            bn: 'মায়ার দম বন্ধ হয়ে আসে: "আমার স্কার্ফ? ঠিক আছে! আমি খাবার ডেলিভারির ছদ্মবেশে সন্ধ্যা ৭:৩০-এ গিয়েছিলাম। ক্লারা নাভারোর ফোনে সিন্ডিকেটের মেসেজ দেখে ফেলেছিল। সে নিশ্চিত জেনে গিয়েছিল আজ রাতেই ওকে মেরে ফেলা হবে!"'
          },
          stressIncrease: 35,
          exposesLie: true,
          revealsClueId: 'clue-02-escape-plan-memo'
        },
        {
          evidenceId: 'clue-02-tunnel-footprints',
          reactionText: {
            en: 'Maya exhales: "Yes! I helped her escape through the maintenance tunnel! We had to stage the room to buy time until her train crosses the Canadian border!"',
            bn: 'মায়া দীর্ঘশ্বাস ফেলে: "হ্যাঁ! আমিই ওকে মাটির নিচের সুড়ঙ্গ দিয়ে পালিয়ে যেতে সাহায্য করেছি! ওর ট্রেন সীমান্ত পার হওয়ার আগ পর্যন্ত সময় নেওয়ার জন্য আমাদের এই নাটক সাজাতে হয়েছিল!"'
          },
          stressIncrease: 50,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-02-kozlov',
      name: {
        en: 'Viktor Kozlov',
        bn: 'ভিক্টর কজলভ'
      },
      alias: {
        en: 'The Syndicate Enforcer',
        bn: 'সিন্ডিকেটের ভাড়াটে খুনি'
      },
      role: {
        en: 'Blackwood Enforcer',
        bn: 'সিন্ডিকেটের শুটার ও জল্লাদ'
      },
      age: 38,
      occupation: {
        en: 'Private "Security Consultant"',
        bn: 'পেশাদার হিটম্যান'
      },
      relationshipToVictim: {
        en: 'Sent by Syndicate to silence or eliminate the witness',
        bn: 'সাক্ষীকে চিরতরে স্তব্ধ করতে আসা আততায়ী'
      },
      motive: {
        en: 'Under direct orders to eliminate Clara Thorne before 08:00 AM court opening.',
        bn: 'সকাল ৮টার আগে ক্লারাকে পৃথিবী থেকে সরিয়ে দেওয়ার সরাসরি নির্দেশ ছিল।'
      },
      alibi: {
        en: 'Claims he was playing poker at the Red Dragon Club in Chinatown until 02:00.',
        bn: 'দাবি করে রাত ২টা পর্যন্ত সে চায়নাটাউনে তাস খেলছিল।'
      },
      personality: {
        en: 'Scarred cheek, muscular, leather jacket, heavy Russian accent, completely cold.',
        bn: 'গালে কাটা দাগ, সুঠাম দেহ, চামড়ার জ্যাকেট, অত্যন্ত শীতল ও নিষ্ঠুর।'
      },
      secrets: {
        en: 'Arrived at Room 404 at 00:30, found it already empty, and kicked down the door in rage.',
        bn: 'রাত ১২:৩০-এ সেফহাউসের দরজা ভেঙে ঢুকে কাউকে না পেয়ে রাগে আসবাব ভেঙে চলে যায়।'
      },
      avatarSeed: 'Kozlov',
      avatarColor: '#0f766e',
      dialogueTree: [
        {
          id: 'dlg-k-1',
          prompt: {
            en: 'Street cameras put your black Audi outside St. Jude Apartments at 00:25.',
            bn: 'রাস্তার ক্যামেরায় দেখা গেছে রাত ১২:২৫-এ আপনার গাড়ি সেন্ট জুড অ্যাপার্টমেন্টের সামনে ছিল।'
          },
          response: {
            en: 'I like driving at night. St. Jude street is a public thoroughfare. Show me a law that forbids driving down a city street, detective.',
            bn: 'রাতে গাড়ি চালাতে ভালো লাগে। রাস্তা তো কারো বাপের নয়। রাস্তায় গাড়ি চালানো কি অপরাধ?'
          },
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-k-2',
          prompt: {
            en: 'Did you enter Room 404 tonight?',
            bn: 'আজ রাতে কি আপনি রুম ৪০৪-এ ঢুকেছিলেন?'
          },
          response: {
            en: 'I don\'t know any 404. If I had entered that room to do a job, you wouldn\'t be looking for a missing woman — you would be carrying out a corpse in a black bag.',
            bn: 'আমি কোনো ৪০৪ চিনি না। তবে আমি যদি কোনো শিকারের ঘরে ঢুকতাম, তবে আপনারা নিখোঁজ বিজ্ঞপ্তি দিতেন না — কালো ব্যাগে করে লাশ তুলতেন।'
          },
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-forced-door',
          reactionText: {
            en: 'Kozlov sneers: "Look at the door strike! The steel lock was kicked open, yes. But whoever did that found NOTHING inside. The bird had already flown the coop."',
            bn: 'কজলভ ব্যঙ্গ করে: "দরজাটা ভালো করে দেখুন! দরজা লাথি দিয়ে ভাঙা হয়েছিল সত্যি, কিন্তু ভেতরে ঢোকার পর সেখানে কেউ ছিল না। পাখি খাঁচা ভেঙে আগেই উড়ে গিয়েছিল।"'
          },
          stressIncrease: 20
        }
      ]
    },
    {
      id: 'suspect-02-isaac',
      name: {
        en: 'Isaac Vance',
        bn: 'আইজ্যাক ভ্যান্স'
      },
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
        en: 'Paid under the table by both marshals for secrecy and the mob for tenant records.',
        bn: 'উভয় পক্ষের কাছ থেকে গোপনে সুবিধা নিয়ে চলতেন।'
      },
      alibi: {
        en: 'Claims he was asleep in his basement apartment from 22:00 until awakened by police sirens.',
        bn: 'দাবি করেন রাত ১০টা থেকে বেসমেন্টে ঘুমাচ্ছিলেন।'
      },
      personality: {
        en: 'Shabby work overalls, smelling of stale coffee and grease, ring of brass skeleton keys.',
        bn: 'তেলচিটে ওভারঅল পরা, হাতে চাবির গোছা, কাশির আওয়াজ।'
      },
      secrets: {
        en: 'Gave Clara Thorne the master padlock key to the underground boiler steam conduit.',
        bn: 'ক্লারার কান্নাকাটি দেখে তাকে মাটির নিচের বয়লার সুড়ঙ্গের তালা খোলার চাবি দিয়েছিলেন।'
      },
      avatarSeed: 'Isaac',
      avatarColor: '#ca8a04',
      dialogueTree: [
        {
          id: 'dlg-iv-1',
          prompt: {
            en: 'Who has access to the basement steam conduit tunnel?',
            bn: 'বেসমেন্টের বয়লার বাষ্প সুড়ঙ্গে প্রবেশের চাবি কার কার কাছে থাকে?'
          },
          response: {
            en: 'Only me. It\'s an old 1920s coal heating conduit that connects under the street to the old railway freight platform. It\'s kept padlocked with an iron chain.',
            bn: 'শুধু আমার কাছেই থাকে। ১৯২০ সালের কয়লা দিয়ে গরম করার সুড়ঙ্গ, যা মাটির নিচ দিয়ে মালবাহী ট্রেনের ইয়ার্ডে চলে গেছে। ওটা সবসময় তালা মারা থাকে।'
          },
          reactionMood: 'calm'
        },
        {
          id: 'dlg-iv-2',
          prompt: {
            en: 'Was the conduit padlock tampered with tonight?',
            bn: 'আজ রাতে কি সুড়ঙ্গের তালায় কোনো হাত দেওয়া হয়েছিল?'
          },
          response: {
            en: 'Well... now that you ask, the brass padlock wasn\'t cut. It was unlocked with a key. One of my duplicate keys went missing from the pegboard yesterday afternoon.',
            bn: 'সত্যি বলতে কি, তালাটা কিন্তু ভাঙা হয়নি, চাবি দিয়েই খোলা হয়েছিল। গতকাল বিকেলে আমার বোর্ডের একটা ডুপ্লিকেট চাবি পাওয়া যাচ্ছিল না।'
          },
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-tunnel-footprints',
          reactionText: {
            en: 'Isaac scratches his chin: "Miss Thorne... she was a kind girl. She came down to my shop yesterday crying, saying she knew she was going to be killed tonight. I didn\'t stop her from taking the tunnel key. She deserved a fighting chance."',
            bn: 'আইজ্যাক মাথা নিচু করে: "মেয়েটা কাল বিকেলে আমার কাছে এসে কাঁদতে কাঁদতে বলেছিল ওকে আজ রাতে পুলিশ আর গুন্ডারা মিলে মেরে ফেলবে। আমি ওকে চাবি নিতে বারণ করিনি। বাঁচবার একটা সুযোগ ওর প্রাপ্য ছিল।"'
          },
          stressIncrease: 30,
          exposesLie: true
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-02-forced-door',
      name: {
        en: 'Splintered Safehouse Door & Frame',
        bn: 'ভাঙা দরজা ও দরজার ফ্রেম'
      },
      category: 'Physical',
      description: {
        en: 'The exterior entryway of Safehouse Room 404.',
        bn: 'রুম ৪০৪-এর বাইরের প্রবেশপথ।'
      },
      discoveryLocation: {
        en: '4th Floor Corridor Entrance',
        bn: '৪র্থ তলার করিডোরের মুখ'
      },
      relevance: {
        en: 'Proves the violent breach occurred from outside, but the internal deadbolt was disengaged beforehand.',
        bn: 'বাইরে থেকে বলপ্রয়োগের প্রমাণ হলেও, দরজা আগেই ভেতরের দিক থেকে আনলক করা ছিল।'
      },
      relatedSuspectIds: ['suspect-02-navarro', 'suspect-02-kozlov'],
      details: [
        {
          en: 'Boot heel scuff on door panel matches Viktor Kozlov\'s heavy combat boots.',
          bn: 'দরজায় থাকা বুটের ছাপ ভিক্টর কজলভের ভারী কমব্যাট বুটের সাথে মিলে যায়।'
        },
        {
          en: 'Pry marks on the jamb show blunt force entry at approximately 00:30.',
          bn: 'দরজায় রাত ১২:৩০ টার দিকে বলপ্রয়োগের দাগ রয়েছে।'
        },
        {
          en: 'The deadbolt bolt was retracted when the door swung inward; Clara was already gone.',
          bn: 'ভেতরের লকটি আগেই বন্ধমুক্ত ছিল; ক্লারা ইতিপূর্বেই ঘর ছেড়ে পালিয়েছিল।'
        }
      ],
      iconKey: 'door'
    },
    {
      id: 'clue-02-staged-blood',
      name: {
        en: 'Synthetic Plasma Residue on Rug',
        bn: 'গালিচায় কৃত্রিম রক্তের আলামত'
      },
      category: 'Forensic Reports',
      description: {
        en: 'Spattered red fluid sample collected beside the overturned floor lamp.',
        bn: 'উল্টানো বাতির পাশ থেকে সংগৃহীত রক্তের নমুনা।'
      },
      discoveryLocation: {
        en: 'Living room linoleum rug',
        bn: 'ঘরের মেঝের গালিচা'
      },
      relevance: {
        en: 'Demonstrates the violent struggle was staged to fake an abduction.',
        bn: 'অপহরণের নাটক সাজানোর অকাট্য বৈজ্ঞানিক প্রমাণ দেয়।'
      },
      relatedSuspectIds: ['suspect-02-maya'],
      isCrucial: true,
      details: [
        {
          en: 'Forensic analysis: zero human white or red blood cells.',
          bn: 'ফরেনসিক বিশ্লেষণ: মানুষের কোনো রক্তকণিকা পাওয়া যায়নি।'
        },
        {
          en: 'Chemical composition: theatrical syrup base colored with carmine dye and bovine albumin.',
          bn: 'উপাদান: চিনির সিরাপ ও পশুর প্লাজমার মিশ্রণে তৈরি নাটকের কৃত্রিম রক্ত।'
        },
        {
          en: 'Used in theatrical stagecraft to simulate violent hemorrhaging.',
          bn: 'রক্তক্ষরণের বিভ্রম তৈরি করতে নাটক ও সিনেমায় ব্যবহৃত হয়।'
        }
      ],
      iconKey: 'flask'
    },
    {
      id: 'clue-02-burner-phone',
      name: {
        en: 'Burner Phone Behind Radiator',
        bn: 'হিটারের পেছনের গোপন বার্নার ফোন'
      },
      category: 'Digital',
      description: {
        en: 'A prepaid flip phone discovered wedged behind the steam radiator.',
        bn: 'হিটারের পেছনে গোঁজা একটি গোপন ফ্লিপ ফোন।'
      },
      discoveryLocation: {
        en: 'Behind kitchenette radiator',
        bn: 'হিটারের পেছনের ফাঁকা স্থান'
      },
      relevance: {
        en: 'Direct digital link proving Officer Navarro leaked the location to Kozlov.',
        bn: 'নাভারো কর্তৃক খুনিদের কাছে সেফহাউস ফাঁসের ডিজিটাল প্রমাণ।'
      },
      relatedSuspectIds: ['suspect-02-navarro'],
      isCrucial: true,
      details: [
        {
          en: 'Outgoing SMS at 23:10 to Viktor Kozlov\'s device: "Room 404. Shift change at 00:30. Strike fast."',
          bn: 'রাত ১১:১০ মিনিটে কজলভকে পাঠানো মেসেজ: "রুম ৪০৪। রাত ১২:৩০-এ গার্ড পরিবর্তন। দ্রুত আঘাত করো।"'
        },
        {
          en: 'Stored audio recording: Clara Thorne recorded Navarro whispering his bribe demands.',
          bn: 'রেকর্ডিং ক্লারা নিজের ফোনে ধারণ করেছিল যাতে নাভারোর ঘুষের দাবি শোনা যায়।'
        },
        {
          en: 'Confirms the protection detail was compromised.',
          bn: 'নিশ্চিত করে পাহারাদার অফিসার নিজেই বিক্রি হয়ে গিয়েছিল।'
        }
      ],
      iconKey: 'phone'
    },
    {
      id: 'clue-02-vent-grate',
      name: {
        en: 'Unscrewed Maintenance Hatch',
        bn: 'স্ক্রু খোলা ভেন্টিলেশন ঢাকনা'
      },
      category: 'Physical',
      description: {
        en: 'A 2x2 foot sheet-metal duct cover removed and set against the kitchenette wall.',
        bn: 'রান্নাঘরের দেয়াল থেকে খুলে রাখা টিনের ঢাকনা।'
      },
      discoveryLocation: {
        en: 'Kitchenette baseboard',
        bn: 'রান্নাঘরের দেয়ালের নিচে'
      },
      relevance: {
        en: 'Reveals Clara\'s actual escape route out of the locked apartment.',
        bn: 'ক্লারার আসল পলায়নের সুড়ঙ্গপথ উন্মোচন করে।'
      },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        {
          en: 'Screws removed with a butter knife found on the counter.',
          bn: 'টেবিলে থাকা মাখনের ছুরি দিয়ে স্ক্রুগুলো খোলা হয়েছিল।'
        },
        {
          en: 'Dust smeared inside the 30-inch duct heading straight down to the building boiler basement.',
          bn: 'ধুলোবালি ঘষে সরাসরি বেসমেন্টের বয়লার রুমে নামার পরিষ্কার চিহ্ন।'
        }
      ],
      iconKey: 'key'
    },
    {
      id: 'clue-02-torn-ticket',
      name: {
        en: 'Torn Sleeper Car Ticket to Montreal',
        bn: 'মন্ট্রিয়লগামী ট্রেনের ছেঁড়া টিকিট'
      },
      category: 'Documents',
      description: {
        en: 'A boarding pass fragment for the 23:45 Night Express departing Penn Station.',
        bn: 'রাত ১১:৪৫-এর নাইট এক্সপ্রেসের ট্রেনের টিকিট।'
      },
      discoveryLocation: {
        en: 'Wastebasket under folding desk',
        bn: 'ফোল্ডিং টেবিলের নিচের ডাস্টবিন'
      },
      relevance: {
        en: 'Pinpoints Clara Thorne\'s true destination and timeline.',
        bn: 'ক্লারার আসল গন্তব্য ও সময়রেখা নির্ধারণ করে।'
      },
      relatedSuspectIds: ['suspect-02-maya'],
      isCrucial: true,
      details: [
        {
          en: 'Passenger: "Rachel Campbell" (alias confirmed on forged Canadian passport).',
          bn: 'যাত্রীর নাম: "র‍্যাচেল ক্যাম্পবেল" (জাল কানাডিয়ান পাসপোর্টের নাম)।'
        },
        {
          en: 'Departure: 23:45 PM from East Rail Platform 3.',
          bn: 'ছাড়ার সময়: রাত ১১:৪৫ মিনিট, প্ল্যাটফর্ম ৩।'
        },
        {
          en: 'Purchased with Maya Lin\'s credit card 48 hours prior.',
          bn: '৪৮ ঘণ্টা আগে মায়া লিনের ক্রেডিট কার্ড দিয়ে কেনা হয়েছিল।'
        }
      ],
      iconKey: 'document'
    },
    {
      id: 'clue-02-sister-scarf',
      name: {
        en: 'Maya\'s Silk Floral Scarf',
        bn: 'মায়ার রেশমি সুগন্ধি স্কার্ফ'
      },
      category: 'Physical',
      description: {
        en: 'A high-end silk scarf found in the rain slicker pocket.',
        bn: 'রেইনকোটের পকেটে পাওয়া দামী সিল্কের স্কার্ফ।'
      },
      discoveryLocation: {
        en: 'Hallway coat rack inside Room 404',
        bn: 'রুম ৪০৪-এর কোট হ্যাঙ্গার'
      },
      relevance: {
        en: 'Proves Maya Lin was inside the safehouse earlier in the evening helping Clara prepare.',
        bn: 'প্রমাণ করে মায়া সন্ধ্যায় সেফহাউসে এসে ক্লারাকে পলায়নে সাহায্য করেছিল।'
      },
      relatedSuspectIds: ['suspect-02-maya'],
      details: [
        {
          en: 'Scented with distinctive lavender perfume registered to Maya Lin.',
          bn: 'মায়া লিনের ব্যবহৃত ল্যাভেন্ডার পারফিউমের পরিচিত সুবাসযুক্ত।'
        },
        {
          en: 'Refutes Maya\'s initial claim that she had not visited Clara in weeks.',
          bn: 'মায়ার সেই প্রাথমিক দাবি মিথ্যা প্রমাণ করে যে সে দুই সপ্তাহ ধরে আসেনি।'
        }
      ],
      iconKey: 'scissors'
    },
    {
      id: 'clue-02-tunnel-footprints',
      name: {
        en: 'Soot Footprints in Steam Conduit',
        bn: 'সুড়ঙ্গের কয়লার গুঁড়ায় পদচিহ্ন'
      },
      category: 'Forensic Reports',
      description: {
        en: 'Plaster casts of two sets of footwear in the boiler room coal dust.',
        bn: 'সুড়ঙ্গের কয়লার স্তূপে দুজন মহিলার জুতোর স্পষ্ট ছাপ।'
      },
      discoveryLocation: {
        en: 'Sub-basement steam tunnel to rail yard',
        bn: 'রেল ইয়ার্ডে যাওয়া ভূগর্ভস্থ সুড়ঙ্গ'
      },
      relevance: {
        en: 'Shows Clara and Maya evacuated together at 23:20 through the underground conduit.',
        bn: 'প্রমাণ করে ক্লারা ও মায়া রাত ১১:২০-এ সুড়ঙ্গ দিয়ে একসাথে পালিয়ে যায়।'
      },
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        {
          en: 'Track 1: Women\'s size 7 running sneaker (Clara Thorne).',
          bn: 'চিহ্ন ১: মহিলাদের সাইজ ৭ স্নিকার্স (ক্লারা থর্ন)।'
        },
        {
          en: 'Track 2: Women\'s size 8 designer flat (Maya Lin).',
          bn: 'চিহ্ন ২: মহিলাদের সাইজ ৮ ফ্ল্যাট জুতো (মায়া লিন)।'
        },
        {
          en: 'Leads directly through the steam conduit to the rear rail yard platform.',
          bn: 'সুড়ঙ্গ বেয়ে সরাসরি পেছনের রেল স্টেশনের মালবাহী প্ল্যাটফর্মে চলে গেছে।'
        }
      ],
      iconKey: 'footprint'
    },
    {
      id: 'clue-02-navarro-deposit',
      name: {
        en: 'Navarro\'s $25,000 Midnight Wire Slip',
        bn: 'নাভারোর অ্যাকাউন্টে ২৫,০০০ ডলার জমার রসিদ'
      },
      category: 'Documents',
      description: {
        en: 'Financial intelligence intercept of an offshore electronic deposit.',
        bn: 'গোপন আন্তর্জাতিক ব্যাংক অ্যাকাউন্টে রাতারাতি টাকা স্থানান্তরের রেকর্ড।'
      },
      discoveryLocation: {
        en: 'State Police Internal Affairs Intercept',
        bn: 'পুলিশের অভ্যন্তরীণ গোয়েন্দা ইন্টারসেপ্ট'
      },
      relevance: {
        en: 'Direct financial motive for Officer Navarro\'s betrayal of the safehouse.',
        bn: 'অফিসার নাভারোর বিশ্বাসঘাতকতার সরাসরি আর্থিক প্রমাণ।'
      },
      relatedSuspectIds: ['suspect-02-navarro'],
      details: [
        {
          en: 'Deposited at 23:00 into a Grand Cayman account controlled by Navarro.',
          bn: 'রাত ১১টায় নাভারোর কেম্যান আইল্যান্ডসের অ্যাকাউন্টে জমা হয়।'
        },
        {
          en: 'Originated from a Panamanian shell corporation funded by the Blackwood Syndicate.',
          bn: 'ব্ল্যাকউড সিন্ডিকেটের পানামা ভিত্তিক ভুয়া কোম্পানি থেকে পাঠানো হয়েছিল।'
        }
      ],
      iconKey: 'receipt'
    },
    {
      id: 'clue-02-escape-plan-memo',
      name: {
        en: 'Encrypted USB Drive & Escape Note',
        bn: 'এনক্রিপ্টেড পেনড্রাইভ ও ক্লারার গোপন চিঠি'
      },
      category: 'Digital',
      description: {
        en: 'A high-security encrypted USB stick with a handwritten note in Clara\'s handwriting.',
        bn: 'ক্লারার হস্তাক্ষরে লেখা চিঠি সহ একটি এনক্রিপ্ট করা ইউএসবি ড্রাইভ।'
      },
      discoveryLocation: {
        en: 'Under floorboard near steam vent',
        bn: 'রান্নাঘরের মেঝের তক্তা তোলার নিচে'
      },
      relevance: {
        en: 'Clara\'s personal explanation of why she fled and instructions for the federal prosecutor.',
        bn: 'ক্লারা কেন পালিয়ে যেতে বাধ্য হয়েছিল তার নিজস্ব বক্তব্য ও মামলার মূল নথি।'
      },
      relatedSuspectIds: ['suspect-02-navarro'],
      details: [
        {
          en: 'Note reads: "Navarro sold me out. Kozlov is coming tonight. I am taking the evidence drive to the federal courthouse via rail. Do not trust state police."',
          bn: 'চিঠিতে লেখা: "নাভারো আমাকে বিক্রি করে দিয়েছে। আজ রাতেই কজলভ আসছে। আমি প্রমাণ ড্রাইভ নিয়ে ট্রেনে করে সরাসরি ফেডারেল আদালতে যাচ্ছি। স্থানীয় পুলিশকে বিশ্বাস করবেন না।"'
        },
        {
          en: 'Contains complete accounting ledgers proving Blackwood\'s criminal racketeering.',
          bn: 'সিন্ডিকেটের আর্থিক জালিয়াতির সমস্ত মূল লেজার এই ড্রাইভে সংরক্ষিত।'
        }
      ],
      iconKey: 'usb'
    }
  ],
  canonConnections: [
    {
      id: 'c2-conn-01',
      sourceId: 'clue-02-staged-blood',
      targetId: 'suspect-02-maya',
      label: {
        en: 'Staged Kidnapping',
        bn: 'সাজানো অপহরণের নাটক'
      },
      deductionNotes: {
        en: 'The blood in Room 404 is synthetic theatrical prop blood brought in by Maya Lin. Clara was never harmed or kidnapped; she staged the scene to delay pursuit!',
        bn: 'রুম ৪০৪-এ পাওয়া রক্ত কৃত্রিম থিয়েটার প্রপ রক্ত, যা মায়া লিন নিয়ে এসেছিল। ক্লারা অপহৃত হয়নি; সে সময় পাওয়ার জন্য এই নাটক সাজিয়েছিল!'
      },
      isContradiction: true,
      bonusPoints: 200
    },
    {
      id: 'c2-conn-02',
      sourceId: 'clue-02-burner-phone',
      targetId: 'suspect-02-navarro',
      label: {
        en: 'Corrupt Betrayal',
        bn: 'ঘুষ নিয়ে বিশ্বাসঘাতকতা'
      },
      deductionNotes: {
        en: 'The SMS sent to hitman Kozlov came from the burner phone linked to Detective Navarro. Navarro sold the safehouse location to the syndicate for $25,000!',
        bn: 'খুনি কজলভকে পাঠানো মেসেজটি নাভারোর সাথে যুক্ত। নাভারো ২৫ হাজার ডলারের বিনিময়ে সেফহাউসের ঠিকানা অপরাধীদের কাছে বিক্রি করেছিল!'
      },
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'c2-conn-03',
      sourceId: 'clue-02-vent-grate',
      targetId: 'clue-02-tunnel-footprints',
      label: {
        en: 'Subterranean Escape',
        bn: 'সুড়ঙ্গপথে পলায়ন'
      },
      deductionNotes: {
        en: 'Clara crawled through the kitchenette maintenance duct into the basement steam tunnel and escaped with Maya to the rail yard at 23:20.',
        bn: 'ক্লারা রান্নাঘরের ডাক্ট দিয়ে বয়লার রুমে নেমে মায়ার সাথে রাত ১১:২০-এ সুড়ঙ্গ বেয়ে রেল ইয়ার্ডে নিরাপদে পালিয়ে যায়।'
      },
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'c2-conn-04',
      sourceId: 'clue-02-torn-ticket',
      targetId: 'clue-02-escape-plan-memo',
      label: {
        en: 'Destination Albany/Montreal',
        bn: 'আসল গন্তব্য ট্রেন স্টেশন'
      },
      deductionNotes: {
        en: 'Clara boarded the 23:45 Night Express with the master evidence drive to deliver it directly to the Federal District Court, bypassing compromised local officers.',
        bn: 'ক্লারা রাত ১১:৪৫-এর ট্রেনে চড়ে সমস্ত প্রমাণ নিয়ে নিজেই সরাসরি আদালতে সাক্ষ্য দিতে পৌঁছানোর পরিকল্পনা করেছিল।'
      },
      isContradiction: false,
      bonusPoints: 150
    }
  ],
  timelineEvents: [
    {
      id: 'tl2-01',
      timestamp: '19:30',
      timeSortValue: 1170,
      title: {
        en: 'Maya Smuggles Escape Gear to Clara',
        bn: 'মায়া ক্লারার কাছে ছদ্মবেশের পোশাক ও জিনিস পৌঁছে দেয়'
      },
      description: {
        en: 'Maya Lin visits Safehouse 404 disguised as a delivery courier, providing Clara with fake Canadian ID, theatrical blood, and clothes.',
        bn: 'মায়া ডেলিভারি কর্মীর ছদ্মবেশে ক্লারার জন্য কানাডার জাল পাসপোর্ট, থিয়েটারের রক্ত ও পোশাক নিয়ে আসে।'
      },
      source: {
        en: 'Maya\'s Admission & Scarf Discovery',
        bn: 'মায়ার স্বীকারোক্তি ও স্কার্ফের সন্ধান'
      },
      verifiedLocation: {
        en: 'Safehouse 404',
        bn: 'সেফহাউস ৪০৪'
      },
      relatedSuspectId: 'suspect-02-maya',
      correctIndex: 0
    },
    {
      id: 'tl2-02',
      timestamp: '23:00',
      timeSortValue: 1380,
      title: {
        en: 'Navarro Receives $25,000 Wire Deposit',
        bn: 'নাভারোর অ্যাকাউন্টে ঘুষের ২৫,০০০ ডলার জমা'
      },
      description: {
        en: 'Blackwood Syndicate wire transfers $25,000 into Detective Navarro\'s offshore account to betray the safehouse coordinates.',
        bn: 'সিন্ডিকেট নাভারোর গোপন অফশোর অ্যাকাউন্টে সেফহাউসের ঠিকানা পাওয়ার জন্য ২৫,০০০ ডলার পাঠায়।'
      },
      source: {
        en: 'FinCEN Wire Intercept',
        bn: 'ব্যাংক ইন্টারসেপ্ট রেকর্ড'
      },
      verifiedLocation: {
        en: 'Offshore Server / Navarro Mobile',
        bn: 'নাভারোর গোপন অ্যাকাউন্ট'
      },
      relatedSuspectId: 'suspect-02-navarro',
      correctIndex: 1
    },
    {
      id: 'tl2-03',
      timestamp: '23:10',
      timeSortValue: 1390,
      title: {
        en: 'Navarro Texts Coordinates to Kozlov',
        bn: 'নাভারো কজলভকে ঘরের নম্বর ও সময় মেসেজ করে'
      },
      description: {
        en: 'Navarro transmits Room 404 and shift change details to enforcer Viktor Kozlov via burner phone. Clara overhears the transmission.',
        bn: 'নাভারো কজলভকে রুম ৪০৪ এবং গার্ড পরিবর্তনের সময় জানায়। ক্লারা দেয়ালের ওপাশ থেকে তা শুনে ফেলে।'
      },
      source: {
        en: 'Radiator Burner Phone SMS Log',
        bn: 'বার্নার ফোনের এসএমএস রেকর্ড'
      },
      verifiedLocation: {
        en: '4th Floor Hallway',
        bn: '৪র্থ তলার করিডোর'
      },
      relatedSuspectId: 'suspect-02-navarro',
      correctIndex: 2
    },
    {
      id: 'tl2-04',
      timestamp: '23:20',
      timeSortValue: 1400,
      title: {
        en: 'Clara & Maya Flee via Steam Tunnel',
        bn: 'ক্লারা নাটক সাজিয়ে সুড়ঙ্গ দিয়ে পালায়'
      },
      description: {
        en: 'Clara splatters theatrical stage blood, overturns furniture to stage a struggle, and crawls through the kitchenette vent into the basement with Maya.',
        bn: 'ক্লারা কৃত্রিম রক্ত ছড়িয়ে ও আসবাব উল্টে ধস্তাধস্তির নাটক সাজিয়ে রান্নাঘরের ডাক্ট দিয়ে সুড়ঙ্গে পালায়।'
      },
      source: {
        en: 'Synthetic Blood Test & Conduit Footprints',
        bn: 'কৃত্রিম রক্তের রিপোর্ট ও সুড়ঙ্গের পায়ের ছাপ'
      },
      verifiedLocation: {
        en: 'Kitchenette Vent & Boiler Tunnel',
        bn: 'রান্নাঘরের ডাক্ট ও বয়লার সুড়ঙ্গ'
      },
      correctIndex: 3
    },
    {
      id: 'tl2-05',
      timestamp: '23:45',
      timeSortValue: 1425,
      title: {
        en: 'Clara Boards the Night Express',
        bn: 'ক্লারা মন্ট্রিয়লগামী রাতের ট্রেনে ওঠে'
      },
      description: {
        en: 'Clara boards the 23:45 sleeper train to Montreal carrying the master encrypted USB drive to reach federal prosecutors safely.',
        bn: 'ক্লারা মূল প্রমাণের ড্রাইভ নিয়ে নিরাপদে আদালতে পৌঁছাতে রাতের ট্রেনে ওঠে।'
      },
      source: {
        en: 'Torn Train Boarding Pass & Rail Logs',
        bn: 'ট্রেনের টিকিট ও প্ল্যাটফর্মের লগ'
      },
      verifiedLocation: {
        en: 'East Docks Freight Platform',
        bn: 'রেল প্ল্যাটফর্ম'
      },
      correctIndex: 4
    },
    {
      id: 'tl2-06',
      timestamp: '00:30',
      timeSortValue: 1470,
      title: {
        en: 'Kozlov Breaches the Empty Apartment',
        bn: 'কজলভ দরজা ভেঙে ঢুকে শূন্য ঘর পায়'
      },
      description: {
        en: 'Viktor Kozlov kicks down the door of Room 404 to execute the hit, finds the apartment completely vacant, and knocks over the lamp in frustration.',
        bn: 'কজলভ খুনের উদ্দেশ্যে দরজা ভেঙে ঢুকে দেখে ঘর সম্পূর্ণ ফাঁকা, রাগে সে বাতি আছড়ে ফেলে।'
      },
      source: {
        en: 'Door Frame Boot Scuff & Forensic Reagent',
        bn: 'দরজায় বুটের ছাপ ও আসবাব ভাঙার দাগ'
      },
      verifiedLocation: {
        en: 'Room 404 Doorway',
        bn: 'রুম ৪০৪-এর প্রবেশপথ'
      },
      relatedSuspectId: 'suspect-02-kozlov',
      correctIndex: 5
    },
    {
      id: 'tl2-07',
      timestamp: '00:45',
      timeSortValue: 1485,
      title: {
        en: 'Navarro Fakes His Unconscious State',
        bn: 'নাভারো আঘাতের ভান করে অজ্ঞান হয়ে পড়ে থাকে'
      },
      description: {
        en: 'Officer Navarro lies down in the hallway, staging an ambush with a self-inflicted contusion to feign innocence before backup arrives.',
        bn: 'নাভারো নিজেকে নির্দোষ প্রমাণ করতে নিজে নিজেই মাথায় টর্চ দিয়ে সামান্য আঘাত করে করিডোরে পড়ে থাকে।'
      },
      source: {
        en: 'Medical Pathology Report & Hallway Review',
        bn: 'মেডিকেল রিপোর্ট ও করিডোরের প্রমাণ'
      },
      verifiedLocation: {
        en: '4th Floor Hallway',
        bn: '৪র্থ তলার করিডোর'
      },
      relatedSuspectId: 'suspect-02-navarro',
      correctIndex: 6
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: {
        en: 'Check the Blood Chemistry',
        bn: 'রক্তের রাসায়নিক পরীক্ষা দেখুন'
      },
      hintText: {
        en: 'Inspect the forensic reagent results for the blood on the living room rug. Real blood has hemoglobin; theatrical blood has sugar syrup and carmine dye.',
        bn: 'গালিচায় পড়ে থাকা রক্তের ল্যাব রিপোর্ট দেখুন। আসল রক্তে হিমোগ্লোবিন থাকে, কিন্তু কৃত্রিম রক্তে থাকে সুগার সিরাপ আর রঙ।'
      }
    },
    {
      level: 2,
      cost: 100,
      title: {
        en: 'The Officer\'s Secret Phone',
        bn: 'পাহারাদারের গোপন ফোন'
      },
      hintText: {
        en: 'Search behind the steam radiator. The burner phone contains outgoing text messages that reveal who betrayed the safehouse address.',
        bn: 'স্টিম হিটারের পেছনের বার্নার ফোনটির মেসেজ দেখুন। ওখান থেকেই প্রকাশ পাবে কে সেফহাউসের ঠিকানা অপরাধীদের কাছে ফাঁস করেছিল।'
      }
    },
    {
      level: 3,
      cost: 200,
      title: {
        en: 'The Real Escape',
        bn: 'আসল পলায়নের রহস্য'
      },
      hintText: {
        en: 'Clara Thorne was never kidnapped. She discovered Navarro\'s betrayal, staged the scene with sister Maya, and fled via the sub-basement conduit to catch the 23:45 train.',
        bn: 'ক্লারা অপহৃত হয়নি। সে পাহারাদারের বিশ্বাসঘাতকতা ধরে ফেলে বোনের সাহায্যে কৃত্রিম রক্ত দিয়ে নাটক সাজিয়ে সুড়ঙ্গ বেয়ে রাত ১১:৪৫-এর ট্রেনে চড়ে নিরাপদে সরে পড়ে।'
      }
    }
  ],
  solution: {
    culpritId: 'suspect-02-navarro',
    culpritName: {
      en: 'Detective Ray Navarro (Betrayal & Corruption)',
      bn: 'ডিটেকটিভ রে নাভারো (ঘুষ ও বিশ্বাসঘাতকতা)'
    },
    motiveDescription: {
      en: 'Accepted a $25,000 syndicate bribe to pay off gambling debts by leaking the safehouse location to hitman Viktor Kozlov.',
      bn: 'জুয়ার দেনা মেটাতে ব্ল্যাকউড সিন্ডিকেটের কাছ থেকে ২৫,০০০ ডলার ঘুষ নিয়ে খুনিদের কাছে সেফহাউসের গোপন ঠিকানা ফাঁস করেছিল।'
    },
    methodDescription: {
      en: 'Navarro transmitted room coordinates to the syndicate. Clara discovered the betrayal, staged an abduction with theatrical blood, and escaped through the steam conduit to catch the 23:45 Night Express.',
      bn: 'নাভারো গোপন মেসেজে তথ্য ফাঁস করে। ক্লারা বিষয়টি টের পেয়ে কৃত্রিম রক্ত দিয়ে অপহরণের দৃশ্য সাজায় এবং সুড়ঙ্গপথ দিয়ে পালিয়ে ট্রেনে চড়ে রক্ষা পায়।'
    },
    approximateTime: {
      en: '23:20 (Escape) / 00:30 (Breach)',
      bn: 'রাত ১১:২০ (পলায়ন) / ১২:৩০ (দরজা ভাঙা)'
    },
    crucialEvidenceIds: [
      'clue-02-staged-blood',
      'clue-02-burner-phone',
      'clue-02-vent-grate',
      'clue-02-torn-ticket',
      'clue-02-tunnel-footprints'
    ],
    falseAlibiSuspectId: 'suspect-02-navarro',
    fullCaseDebriefing: {
      en: 'Detective Ray Navarro was corrupted by high-stakes sports gambling debts. For $25,000 wired into an offshore Cayman account, he agreed to sell out protected witness Clara Thorne to the Blackwood Syndicate, texting the room number and guard rotation to hitman Viktor Kozlov.\n\nHowever, Clara was sharp. She intercepted Navarro\'s burner radio chatter and realized she was a dead woman if she stayed. With the assistance of her sister Maya Lin and superintendent Isaac Vance, Clara formulated a daring plan: at 23:20, she splattered theatrical prop blood on the carpet, kicked over furniture, and crawled through the kitchenette maintenance vent into the 1920s underground steam conduit. She emerged onto the freight rail platform and boarded the 23:45 Night Express carrying the master encrypted fraud drive to deliver it directly to federal prosecutors.\n\nWhen Kozlov arrived at 00:30, he kicked open the door to find the room empty and fled. Navarro, realizing his bribe scheme had imploded, struck himself in the head with a flashlight and played the unconscious victim in the hallway. Thanks to your deduction of the synthetic blood, the radiator burner phone, and the underground boiler tracks, Navarro was arrested for criminal conspiracy and Clara Thorne\'s testimony was preserved.',
      bn: 'ডিটেকটিভ রে নাভারো জুয়ার দেনার কারণে নীতিভ্রষ্ট হয়েছিল। কেম্যান আইল্যান্ডসের ব্যাংক অ্যাকাউন্টে ২৫,০০০ ডলারের বিনিময়ে সে সরকারি সুরক্ষিত সাক্ষী ক্লারা থর্নকে সিন্ডিকেটের হাতে তুলে দেওয়ার চুক্তি করে এবং খুনি ভিক্টর কজলভকে ঘরের নম্বর ও সময় মেসেজ করে।\n\nকিন্তু ক্লারা অত্যন্ত তীক্ষ্ণ বুদ্ধিসম্পন্ন ছিল। সে নাভারোর কথোপকথন ধরে ফেলে এবং বুঝতে পারে এখানে থাকলে তার নিশ্চিত মৃত্যু। সৎ বোন মায়া লিন ও কেয়ারটেকার আইজ্যাকের সহায়তায় সে এক সাহসী পরিকল্পনা করে: রাত ১১:২০-এ কার্পেটে থিয়েটারের কৃত্রিম রক্ত ছড়িয়ে, আসবাবপত্র ওলটপালট করে সে রান্নাঘরের ডাক্ট বেয়ে মাটির নিচের পুরনো বাষ্প সুড়ঙ্গে নেমে পড়ে। সেখান থেকে রেল প্ল্যাটফর্মে গিয়ে রাত ১১:৪৫-এর নাইট এক্সপ্রেসে চড়ে সে সমস্ত আর্থিক জালিয়াতির মাস্টার ইউএসবি ড্রাইভ নিয়ে আদালতের উদ্দেশ্যে রওয়ানা দেয়।\n\nরাত ১২:৩০-এ খুনি কজলভ দরজা ভেঙে ভেতরে ঢুকে কাউকে না পেয়ে রাগে আসবাব ভেঙে পালায়। নাভারো পরিস্থিতি বেগতিক দেখে নিজের মাথায় নিজেই আঘাত করে করিডোরে অজ্ঞান হওয়ার ভান করে পড়ে থাকে। আপনার নিখুঁত তদন্তে কৃত্রিম রক্তের রহস্য, বার্নার ফোনের এসএমএস এবং মাটির নিচের সুড়ঙ্গের পায়ের ছাপ উদঘাটিত হওয়ায় নাভারো গ্রেপ্তার হয় এবং ক্লারা থর্নের মূল্যবান সাক্ষ্য সুরক্ষিত থাকে।'
    },
    options: {
      motives: [
        {
          id: 'm-syndicate-bribe',
          label: {
            en: 'Accepted $25,000 syndicate bribe to leak safehouse location due to gambling debts',
            bn: 'জুয়ার দেনা মেটাতে সিন্ডিকেটের কাছ থেকে ২৫,০০০ ডলার ঘুষ নিয়ে সেফহাউসের গোপন তথ্য ফাঁস করা'
          }
        },
        {
          id: 'm-revenge',
          label: {
            en: 'Personal vengeance against the Thorne family for prior criminal convictions',
            bn: 'পূর্ববর্তী শত্রুতার জেরে থর্ন পরিবারের ওপর ব্যক্তিগত প্রতিশোধ নেওয়া'
          }
        },
        {
          id: 'm-silence-witness',
          label: {
            en: 'Preventing Clara from exposing police precinct corruption in trial',
            bn: 'থানার নিজস্ব কর্মকর্তাদের দুর্নীতি প্রকাশ ঠেকানো'
          }
        },
        {
          id: 'm-extortion',
          label: {
            en: 'Extorting $500,000 ransom from the Blackwood Syndicate',
            bn: 'সিন্ডিকেটের কাছ থেকে ৫ লাখ ডলার মুক্তিপণ আদায়ের চেষ্টা'
          }
        }
      ],
      methods: [
        {
          id: 'met-staged-escape',
          label: {
            en: 'Navarro leaked location; Clara discovered it, staged kidnapping with prop blood, and escaped via steam tunnel',
            bn: 'নাভারো তথ্য ফাঁস করে; ক্লারা তা ধরে ফেলে কৃত্রিম রক্ত দিয়ে নাটক সাজিয়ে সুড়ঙ্গ বেয়ে পালিয়ে যায়'
          }
        },
        {
          id: 'met-forced-abduction',
          label: {
            en: 'Kozlov stormed room, chloroformed Clara, and carried her out the fire escape',
            bn: 'কজলভ ঘরে ঢুকে ক্লোরোফর্ম দিয়ে অজ্ঞান করে ফায়ার এসকেপ দিয়ে ক্লারাকে তুলে নিয়ে যায়'
          }
        },
        {
          id: 'met-poisoned-vent',
          label: {
            en: 'Pumped carbon monoxide through the air vents to incapacitate the witness',
            bn: 'ভেন্টিলেশন পাইপ দিয়ে বিষাক্ত গ্যাস ছেড়ে সাক্ষীকে কাবু করা হয়'
          }
        },
        {
          id: 'met-corridor-bludgeon',
          label: {
            en: 'Ambushed the protection detail and drove the witness across the border',
            bn: 'পুলিশকে মেরে সাক্ষীকে জোরপূর্বক গাড়িতে করে সীমান্ত পার করে নিয়ে যাওয়া হয়'
          }
        }
      ],
      times: [
        {
          id: 't-2320',
          label: {
            en: 'Between 23:20 and 23:45 (Clara\'s tunnel evacuation and train departure)',
            bn: 'রাত ১১:২০ থেকে ১১:৪৫-এর মধ্যে (সুড়ঙ্গ দিয়ে পলায়ন ও ট্রেনে চড়া)'
          }
        },
        {
          id: 't-0030',
          label: {
            en: 'At 00:30 (when Kozlov breached the empty doorway)',
            bn: 'রাত ১২:৩০ মিনিটে (কজলভ শূন্য ঘরে দরজা ভেঙে ঢোকার সময়)'
          }
        },
        {
          id: 't-0045',
          label: {
            en: 'At 00:45 (when Navarro staged his unconsciousness)',
            bn: 'রাত ১২:৪৫ মিনিটে (নাভারোর অজ্ঞান হওয়ার নাটক সাজানোর সময়)'
          }
        },
        {
          id: 't-0115',
          label: {
            en: 'At 01:15 (when backup police units arrived)',
            bn: 'রাত ০১:১৫ মিনিটে (অতিরিক্ত পুলিশ ফোর্স পৌঁছানোর সময়)'
          }
        }
      ]
    }
  }
};
