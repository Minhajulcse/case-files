import { CaseData } from '../../types/game';

export const case002: CaseData = {
  id: 'case-002',
  caseNumber: 'CASE 002',
  title: 'THE MISSING WITNESS',
  subtitle: 'A Compromised Safehouse, a Staged Kidnapping, and a Vanished Whistleblower',
  badge: 'ABDUCTION',
  difficulty: 'Hard',
  estimatedTime: '30-40 mins',
  victimOrSubject: 'Clara Thorne (Age 31, Chief Forensic Accountant & Crown Whistleblower)',
  incidentDate: 'November 03, 2024 — 01:15 Hours',
  location: 'Federal Safehouse 404, St. Jude Apartments, East Docks',
  synopsis:
    'Hours before she was scheduled to testify against the ruthless Blackwood Crime Syndicate, key whistleblower Clara Thorne disappeared from her 4th-floor guarded safehouse. The door was forced, furniture overturned, blood splattered on the rug, and her police escort unconscious in the hallway. Did the mob abduct her, or did she execute a daring escape?',
  briefing: {
    chiefMemo:
      'Detective, the Blackwood trial collapses in 10 hours unless we recover Clara Thorne or prove what occurred in that apartment. Officer Ray Navarro claims he was ambushed from behind by masked men. But something smells foul. Search the apartment, examine the communication logs, cross-examine the protection detail and associates, and reconstruct the true sequence of events.',
    initialStatus: 'Safehouse cordoned off by State Marshals. Syndicate trial scheduled for 10:00 AM.',
    keyObjectives: [
      'Inspect Safehouse Room 404 for signs of genuine struggle vs staged deception.',
      'Investigate the unconscious protection officer and digital communications.',
      'Examine building entry logs, CCTV footage, and subterranean maintenance tunnels.',
      'Determine who leaked the safehouse location and what truly happened to Clara Thorne.',
      'Submit the final indictment with ironclad physical and digital evidence.'
    ]
  },
  crimeScene: {
    roomTitle: 'Safehouse Room 404 — Main Living Quarters',
    roomDescription:
      'A nondescript apartment with reinforced deadbolts, drawn blinds, an overturned floor lamp, broken teacups on the carpet, an unmade cot, a humming radiator, and an open steam vent in the adjacent kitchenette.',
    sceneTheme: 'motel_safehouse',
    hotspots: [
      {
        id: 'hs-02-door',
        name: 'Apartment Entrance & Door Frame',
        x: 15,
        y: 42,
        radius: 28,
        description: 'The steel door has outward splintering on the jamb. Officer Navarro was found slumped in the hallway outside.',
        revealsEvidenceId: 'clue-02-forced-door',
        discoveryNote: 'Forensic inspection of the strike plate shows pry marks made from the OUTSIDE, but the deadbolt was already unlatched before being struck.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-02-rug',
        name: 'Overturned Lamp & Stained Rug',
        x: 45,
        y: 60,
        radius: 26,
        description: 'A shattered porcelain lamp and dark red droplets spattered on the worn linoleum rug.',
        revealsEvidenceId: 'clue-02-staged-blood',
        discoveryNote: 'Field reagent test confirms the red droplets are synthetic theatrical stage blood mixed with chicken plasma, NOT human hemoglobin!',
        iconType: 'flask'
      },
      {
        id: 'hs-02-radiator',
        name: 'Cast Iron Steam Radiator',
        x: 75,
        y: 52,
        radius: 24,
        description: 'A clanking steam radiator beneath the taped-up window.',
        revealsEvidenceId: 'clue-02-burner-phone',
        discoveryNote: 'Concealed in the hollow gap behind the radiator: an active disposable burner phone with text messages coordinates matching Officer Ray Navarro\'s unit.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-02-vent',
        name: 'Kitchenette Maintenance Hatch',
        x: 88,
        y: 35,
        radius: 25,
        description: 'A low sheet-metal access panel in the kitchenette wall leading into the building\'s central steam conduit pipe shaft.',
        revealsEvidenceId: 'clue-02-vent-grate',
        discoveryNote: 'The screws were removed from the inside and greased with butter. Scratches on the sheet metal indicate someone crawled through into the basement boiler shaft.',
        iconType: 'key'
      },
      {
        id: 'hs-02-desk',
        name: 'Makeshift Desk & Trash',
        x: 35,
        y: 30,
        radius: 24,
        description: 'A laminate folding table with an unplugged laptop charger and a shredded notepad.',
        revealsEvidenceId: 'clue-02-torn-ticket',
        discoveryNote: 'Recovered a torn sleeper car train ticket for the 23:45 Night Express to Montreal under the alias "Rachel Campbell".',
        iconType: 'document'
      },
      {
        id: 'hs-02-coat',
        name: 'Hallway Coat Pegs',
        x: 22,
        y: 25,
        radius: 22,
        description: 'A rain slicker hanging from a hook with water still dripping from the hem.',
        isHidden: true,
        revealsEvidenceId: 'clue-02-sister-scarf',
        discoveryNote: 'Tucked inside the coat pocket: a silk lavender floral scarf smelling of French perfume, belonging to Clara\'s sister Maya Lin.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-02-boiler',
        name: 'Basement Boiler Conduit Exit',
        x: 60,
        y: 78,
        radius: 25,
        description: 'The sub-level tunnel door leading out to the rear alleyway delivery dock.',
        isHidden: true,
        revealsEvidenceId: 'clue-02-tunnel-footprints',
        discoveryNote: 'Fresh footprints in boiler coal soot showing two distinct women\'s shoe prints exiting toward the freight dock alley at 23:20.',
        iconType: 'footprint'
      }
    ]
  },
  suspects: [
    {
      id: 'suspect-02-navarro',
      name: 'Detective Ray Navarro',
      alias: 'The Compromised Guard',
      role: 'Assigned Protection Detail Leader',
      age: 41,
      occupation: 'State Police Detective Sergeant',
      relationshipToVictim: 'Sole assigned officer guarding safehouse',
      motive: 'Bank records show a $25,000 cash deposit into his offshore account at 23:00; deep in offshore sports betting debt.',
      alibi: 'Claims he was struck from behind by two masked syndicate hitmen in the hallway at 00:45 and knocked unconscious.',
      personality: 'Defensive, rubbing the back of his neck, aggressive posture, evasive eyes.',
      secrets: 'Sold the safehouse address and access codes to Viktor Kozlov for $50,000.',
      avatarSeed: 'Navarro',
      avatarColor: '#dc2626',
      dialogueTree: [
        {
          id: 'dlg-n-1',
          prompt: 'Describe the ambush in the hallway.',
          response: 'I heard a noise by the fire escape stairs. As I stepped out to investigate, someone clocked me with a pipe. When I woke up, Thorne was gone and the door was kicked in.',
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-n-2',
          prompt: 'Why was your personal weapon found unfired in its holster?',
          response: 'It happened in two seconds! They blindsided me! What, are you accusing a decorated fifteen-year veteran of letting a witness get taken?',
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-n-3',
          prompt: 'Whose burner phone was transmitting from behind the radiator?',
          response: 'Burner phone? I know nothing about that. Thorne was forbidden from having electronic devices. If she had a phone, she smuggled it in herself.',
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-navarro-deposit',
          reactionText: 'Navarro sweats heavily: "That $25,000? That was... a private loan from my brother-in-law to clear casino debts! It has nothing to do with this assignment!"',
          stressIncrease: 45,
          exposesLie: true
        },
        {
          evidenceId: 'clue-02-burner-phone',
          reactionText: 'Navarro\'s jaw tightens: "The IMEI on that burner matches the phone seized from my locker? I... I need to consult my union attorney immediately."',
          stressIncrease: 50,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-02-sterling',
      name: 'Thomas Sterling',
      alias: 'The Syndicate Consigliere',
      role: 'Chief Defense Counsel for Blackwood',
      age: 55,
      occupation: 'High-Profile Criminal Defense Attorney',
      relationshipToVictim: 'Adversary in court; cross-examined Clara in depositions',
      motive: 'If Clara testifies, his billionaire client goes to federal penitentiary for life and Sterling loses his retainer.',
      alibi: 'Claims he was in his downtown penthouse drafting legal motions until 02:00 with his junior associates.',
      personality: 'Suave, condescending, immaculate bespoke suit, sneering smile.',
      secrets: 'Communicated with Navarro via encrypted Signal app to coordinate Kozlov\'s breach.',
      avatarSeed: 'Sterling',
      avatarColor: '#475569',
      dialogueTree: [
        {
          id: 'dlg-s-1',
          prompt: 'Where were you between 23:00 and 01:00 tonight?',
          response: 'In my corner office on the 42nd floor preparing our defense. Three associates and two legal paralegals can verify my presence every single minute.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-s-2',
          prompt: 'Did you make financial offers to Detective Navarro?',
          response: 'I don\'t know any Detective Navarro. My dealings are strictly with the Attorney General. If you imply bribery without evidence, I will sue your department for slander.',
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-burner-phone',
          reactionText: 'Sterling smiles thinly: "A burner phone? Numbers registered to anonymous offshore shell accounts prove nothing in a court of law, detective."',
          stressIncrease: 10
        }
      ]
    },
    {
      id: 'suspect-02-maya',
      name: 'Maya Lin',
      alias: 'The Loyal Sister',
      role: 'Clara Thorne\'s Half-Sister',
      age: 27,
      occupation: 'Graphic Designer & Freelance Pilot',
      relationshipToVictim: 'Close sibling and confidante',
      motive: 'Believed the State Police protection was incompetent and that Clara would be assassinated inside the safehouse.',
      alibi: 'Claims she was at home in Queens all night watching television alone.',
      personality: 'Guarded, anxious, highly protective of Clara, sharp-witted.',
      secrets: 'Smuggled civilian clothes, fake Canadian passports, and a bug detector to Clara at 19:30.',
      avatarSeed: 'Maya',
      avatarColor: '#ec4899',
      dialogueTree: [
        {
          id: 'dlg-ml-1',
          prompt: 'Did you visit Clara at Safehouse 404 this evening?',
          response: 'The Marshals strictly forbade me from seeing her! I haven\'t seen my sister in two weeks since they locked her in that cage! I\'ve been worried sick!',
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-ml-2',
          prompt: 'Did Clara express fear about her police escorts?',
          response: 'Clara told me on a payphone three days ago that Detective Navarro was constantly whispering on a second phone and asking about her encrypted financial backups. She didn\'t trust him!',
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-sister-scarf',
          reactionText: 'Maya\'s breath catches: "My lavender scarf? All right! I went there at 19:30 disguised as a food courier. Clara found Navarro\'s burner wiretap. She knew the mob was coming for her tonight!"',
          stressIncrease: 35,
          exposesLie: true,
          revealsClueId: 'clue-02-escape-plan-memo'
        },
        {
          evidenceId: 'clue-02-tunnel-footprints',
          reactionText: 'Maya exhales: "Yes! I helped her escape through the maintenance tunnel! We had to stage the room to buy time until her train crosses the Canadian border!"',
          stressIncrease: 50,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-02-kozlov',
      name: 'Viktor Kozlov',
      alias: 'The Syndicate Enforcer',
      role: 'Blackwood Enforcer',
      age: 38,
      occupation: 'Private "Security Consultant"',
      relationshipToVictim: 'Sent by Syndicate to silence or intimidate the witness',
      motive: 'Under direct orders to eliminate Clara Thorne before 08:00 AM court opening.',
      alibi: 'Claims he was playing poker at the Red Dragon Club in Chinatown until 02:00.',
      personality: 'Scarred cheek, muscular, leather jacket, heavy Russian accent, completely cold.',
      secrets: 'Arrived at Room 404 at 00:30, found it already empty, and kicked down the door in rage.',
      avatarSeed: 'Kozlov',
      avatarColor: '#0f766e',
      dialogueTree: [
        {
          id: 'dlg-k-1',
          prompt: 'Street cameras put your black Audi outside St. Jude Apartments at 00:25.',
          response: 'I like driving at night. St. Jude street is a public thoroughfare. Show me a law that forbids driving down a city street, detective.',
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-k-2',
          prompt: 'Did you enter Room 404 tonight?',
          response: 'I don\'t know any 404. If I had entered that room to do a job, you wouldn\'t be looking for a missing woman — you would be carrying out a corpse in a black bag.',
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-forced-door',
          reactionText: 'Kozlov sneers: "Look at the door strike! The steel lock was kicked open, yes. But whoever did that found NOTHING inside. The bird had already flown the coop."',
          stressIncrease: 20
        }
      ]
    },
    {
      id: 'suspect-02-isaac',
      name: 'Isaac Vance',
      alias: 'The Building Superintendent',
      role: 'Building Superintendent & Landlord',
      age: 63,
      occupation: 'Building Manager',
      relationshipToVictim: 'Superintendent of safehouse apartment building',
      motive: 'Paid under the table by both the marshals for secrecy and the mob for tenant records.',
      alibi: 'Claims he was asleep in his basement apartment from 22:00 until awakened by police sirens.',
      personality: 'Shabby work overalls, smelling of stale coffee and grease, ring of brass skeleton keys.',
      secrets: 'Gave Clara Thorne the master padlock key to the underground boiler steam conduit.',
      avatarSeed: 'Isaac',
      avatarColor: '#ca8a04',
      dialogueTree: [
        {
          id: 'dlg-iv-1',
          prompt: 'Who has access to the basement steam conduit tunnel?',
          response: 'Only me. It\'s an old 1920s coal heating conduit that connects under the street to the old railway freight platform. It\'s kept padlocked with an iron chain.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-iv-2',
          prompt: 'Was the conduit padlock tampered with tonight?',
          response: 'Well... now that you ask, the brass padlock wasn\'t cut. It was unlocked with a key. One of my duplicate keys went missing from the pegboard yesterday afternoon.',
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-02-tunnel-footprints',
          reactionText: 'Isaac scratches his chin: "Miss Thorne... she was a kind girl. She came down to my shop yesterday crying, saying she knew she was going to be killed tonight. I didn\'t stop her from taking the tunnel key. She deserved a fighting chance."',
          stressIncrease: 30,
          exposesLie: true
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-02-forced-door',
      name: 'Splintered Safehouse Door & Frame',
      category: 'Physical',
      description: 'The exterior entryway of Safehouse Room 404.',
      discoveryLocation: '4th Floor Corridor Entrance',
      relevance: 'Proves the violent breach occurred from outside, but the internal deadbolt was disengaged beforehand.',
      relatedSuspectIds: ['suspect-02-navarro', 'suspect-02-kozlov'],
      details: [
        'Boot heel scuff on door panel matches Viktor Kozlov\'s heavy combat boots.',
        'Pry marks on the jamb show blunt force entry at approximately 00:30.',
        'The deadbolt bolt was retracted when the door swung inward; Clara was already gone.'
      ],
      iconKey: 'door'
    },
    {
      id: 'clue-02-staged-blood',
      name: 'Synthetic Plasma Residue on Rug',
      category: 'Forensic Reports',
      description: 'Spattered red fluid sample collected beside the overturned floor lamp.',
      discoveryLocation: 'Living room linoleum rug',
      relevance: 'Demonstrates the violent struggle was staged to fake an abduction.',
      relatedSuspectIds: ['suspect-02-maya'],
      isCrucial: true,
      details: [
        'Forensic analysis: zero human white or red blood cells.',
        'Chemical composition: theatrical syrup base colored with carmine dye and bovine albumin.',
        'Used in theatrical stagecraft to simulate violent hemorrhaging.'
      ],
      iconKey: 'flask'
    },
    {
      id: 'clue-02-burner-phone',
      name: 'Burner Phone Behind Radiator',
      category: 'Digital',
      description: 'A prepaid flip phone discovered wedged behind the steam radiator.',
      discoveryLocation: 'Behind kitchenette radiator',
      relevance: 'Direct digital link proving Officer Navarro leaked the location to Kozlov.',
      relatedSuspectIds: ['suspect-02-navarro'],
      isCrucial: true,
      details: [
        'Outgoing SMS at 23:10 to Viktor Kozlov\'s device: "Room 404. Shift change at 00:30. Strike fast."',
        'Stored audio recording: Clara Thorne recorded Navarro whispering his bribe demands.',
        'Confirms the protection detail was compromised.'
      ],
      iconKey: 'phone'
    },
    {
      id: 'clue-02-vent-grate',
      name: 'Unscrewed Maintenance Hatch',
      category: 'Physical',
      description: 'A 2x2 foot sheet-metal duct cover removed and set against the kitchenette wall.',
      discoveryLocation: 'Kitchenette baseboard',
      relevance: 'Reveals Clara\'s actual escape route out of the locked apartment.',
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        'Screws removed with a butter knife found on the counter.',
        'Dust smeared inside the 30-inch duct heading straight down to the building boiler basement.'
      ],
      iconKey: 'key'
    },
    {
      id: 'clue-02-torn-ticket',
      name: 'Torn Sleeper Car Ticket to Montreal',
      category: 'Documents',
      description: 'A boarding pass fragment for the 23:45 Night Express departing Penn Station.',
      discoveryLocation: 'Wastebasket under folding desk',
      relevance: 'Pinpoints Clara Thorne\'s true destination and timeline.',
      relatedSuspectIds: ['suspect-02-maya'],
      isCrucial: true,
      details: [
        'Passenger: "Rachel Campbell" (alias confirmed on forged Canadian passport).',
        'Departure: 23:45 PM from East Rail Platform 3.',
        'Purchased with Maya Lin\'s credit card 48 hours prior.'
      ],
      iconKey: 'document'
    },
    {
      id: 'clue-02-sister-scarf',
      name: 'Maya\'s Silk Floral Scarf',
      category: 'Physical',
      description: 'A high-end silk scarf found in the rain slicker pocket.',
      discoveryLocation: 'Hallway coat rack inside Room 404',
      relevance: 'Proves Maya Lin was inside the safehouse earlier in the evening helping Clara prepare.',
      relatedSuspectIds: ['suspect-02-maya'],
      details: [
        'Scented with distinctive lavender perfume registered to Maya Lin.',
        'Refutes Maya\'s initial claim that she had not visited Clara in weeks.'
      ],
      iconKey: 'scissors'
    },
    {
      id: 'clue-02-tunnel-footprints',
      name: 'Soot Footprints in Steam Conduit',
      category: 'Forensic Reports',
      description: 'Plaster casts of two sets of footwear in the boiler room coal dust.',
      discoveryLocation: 'Sub-basement steam tunnel to rail yard',
      relevance: 'Shows Clara and Maya evacuated together at 23:20 through the underground conduit.',
      relatedSuspectIds: ['suspect-02-maya', 'suspect-02-isaac'],
      isCrucial: true,
      details: [
        'Track 1: Women\'s size 7 running sneaker (Clara Thorne).',
        'Track 2: Women\'s size 8 designer flat (Maya Lin).',
        'Leads directly through the steam conduit to the rear rail yard platform.'
      ],
      iconKey: 'footprint'
    },
    {
      id: 'clue-02-navarro-deposit',
      name: 'Navarro\'s $25,000 Midnight Wire Slip',
      category: 'Documents',
      description: 'Financial intelligence intercept of an offshore electronic deposit.',
      discoveryLocation: 'State Police Internal Affairs Intercept',
      relevance: 'Direct financial motive for Officer Navarro\'s betrayal of the safehouse.',
      relatedSuspectIds: ['suspect-02-navarro'],
      details: [
        'Deposited at 23:00 into a Grand Cayman account controlled by Navarro.',
        'Originated from a Panamanian shell corporation funded by the Blackwood Syndicate.'
      ],
      iconKey: 'receipt'
    },
    {
      id: 'clue-02-escape-plan-memo',
      name: 'Encrypted USB Drive & Escape Note',
      category: 'Digital',
      description: 'A high-security encrypted USB stick with a handwritten note in Clara\'s handwriting.',
      discoveryLocation: 'Under floorboard near steam vent',
      relevance: 'Clara\'s personal explanation of why she fled and instructions for the federal prosecutor.',
      relatedSuspectIds: ['suspect-02-navarro'],
      details: [
        'Note reads: "Navarro sold me out. Kozlov is coming tonight. I am taking the evidence drive to the federal courthouse in Albany via rail. Do not trust state police."',
        'Contains complete accounting ledgers proving Blackwood\'s criminal racketeering.'
      ],
      iconKey: 'usb'
    }
  ],
  canonConnections: [
    {
      id: 'c2-conn-01',
      sourceId: 'clue-02-staged-blood',
      targetId: 'suspect-02-maya',
      label: 'Staged Kidnapping',
      deductionNotes: 'The blood in Room 404 is synthetic theatrical prop blood brought in by Maya Lin. Clara was never harmed or kidnapped; she staged the scene to delay pursuit!',
      isContradiction: true,
      bonusPoints: 200
    },
    {
      id: 'c2-conn-02',
      sourceId: 'clue-02-burner-phone',
      targetId: 'suspect-02-navarro',
      label: 'Corrupt Betrayal',
      deductionNotes: 'The SMS sent to hitman Kozlov came from the burner phone linked to Detective Navarro. Navarro sold the safehouse location to the syndicate for $25,000!',
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'c2-conn-03',
      sourceId: 'clue-02-vent-grate',
      targetId: 'clue-02-tunnel-footprints',
      label: 'Subterranean Escape',
      deductionNotes: 'Clara crawled through the kitchenette maintenance duct into the basement steam tunnel and escaped with Maya to the rail yard at 23:20.',
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'c2-conn-04',
      sourceId: 'clue-02-torn-ticket',
      targetId: 'clue-02-escape-plan-memo',
      label: 'Destination Albany/Montreal',
      deductionNotes: 'Clara boarded the 23:45 Night Express with the master evidence drive to deliver it directly to the Federal District Court, bypassing compromised local officers.',
      isContradiction: false,
      bonusPoints: 150
    }
  ],
  timelineEvents: [
    {
      id: 'tl2-01',
      timestamp: '19:30',
      timeSortValue: 1170,
      title: 'Maya Smuggles Escape Gear to Clara',
      description: 'Maya Lin visits Safehouse 404 disguised as a delivery courier, providing Clara with fake Canadian ID, theatrical blood, and clothes.',
      source: 'Maya\'s Admission & Scarf Discovery',
      verifiedLocation: 'Safehouse 404',
      relatedSuspectId: 'suspect-02-maya',
      correctIndex: 0
    },
    {
      id: 'tl2-02',
      timestamp: '23:00',
      timeSortValue: 1380,
      title: 'Navarro Receives $25,000 Wire Deposit',
      description: 'Blackwood Syndicate wire transfers $25,000 into Detective Navarro\'s offshore account to betray the safehouse coordinates.',
      source: 'FinCEN Wire Intercept',
      verifiedLocation: 'Offshore Server / Navarro Mobile',
      relatedSuspectId: 'suspect-02-navarro',
      correctIndex: 1
    },
    {
      id: 'tl2-03',
      timestamp: '23:10',
      timeSortValue: 1390,
      title: 'Navarro Texts Coordinates to Kozlov',
      description: 'Navarro transmits Room 404 and shift change details to enforcer Viktor Kozlov via burner phone. Clara overhears the transmission.',
      source: 'Radiator Burner Phone SMS Log',
      verifiedLocation: '4th Floor Hallway',
      relatedSuspectId: 'suspect-02-navarro',
      correctIndex: 2
    },
    {
      id: 'tl2-04',
      timestamp: '23:20',
      timeSortValue: 1400,
      title: 'Clara & Maya Flee via Steam Tunnel',
      description: 'Clara splatters theatrical stage blood, overturns furniture to stage a struggle, and crawls through the kitchenette vent into the basement with Maya.',
      source: 'Synthetic Blood Test & Conduit Footprints',
      verifiedLocation: 'Kitchenette Vent & Boiler Tunnel',
      correctIndex: 3
    },
    {
      id: 'tl2-05',
      timestamp: '23:45',
      timeSortValue: 1425,
      title: 'Clara Boards the Night Express',
      description: 'Clara boards the 23:45 sleeper train to Montreal carrying the master encrypted USB drive to reach federal prosecutors safely.',
      source: 'Torn Train Boarding Pass & Rail Logs',
      verifiedLocation: 'East Docks Freight Platform',
      correctIndex: 4
    },
    {
      id: 'tl2-06',
      timestamp: '00:30',
      timeSortValue: 1470,
      title: 'Kozlov Breaches the Empty Apartment',
      description: 'Viktor Kozlov kicks down the door of Room 404 to execute the hit, finds the apartment completely vacant, and knocks over the lamp in frustration.',
      source: 'Door Frame Boot Scuff & Forensic Reagent',
      verifiedLocation: 'Room 404 Doorway',
      relatedSuspectId: 'suspect-02-kozlov',
      correctIndex: 5
    },
    {
      id: 'tl2-07',
      timestamp: '00:45',
      timeSortValue: 1485,
      title: 'Navarro Fakes His Unconscious State',
      description: 'Officer Navarro lies down in the hallway, staging an ambush with a self-inflicted contusion to feign innocence before backup arrives.',
      source: 'Medical Pathology Report & Hallway Review',
      verifiedLocation: '4th Floor Hallway',
      relatedSuspectId: 'suspect-02-navarro',
      correctIndex: 6
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: 'Check the Blood Chemistry',
      hintText: 'Inspect the forensic reagent results for the blood on the living room rug. Real blood has hemoglobin; theatrical blood has sugar syrup and carmine dye.'
    },
    {
      level: 2,
      cost: 100,
      title: 'The Officer\'s Secret Phone',
      hintText: 'Search behind the steam radiator. The burner phone contains outgoing text messages that reveal who betrayed the safehouse address.'
    },
    {
      level: 3,
      cost: 200,
      title: 'The Real Escape',
      hintText: 'Clara Thorne was never kidnapped. She discovered Navarro\'s betrayal, staged the scene with sister Maya, and fled via the sub-basement conduit to catch the 23:45 train.'
    }
  ],
  solution: {
    culpritId: 'suspect-02-navarro',
    culpritName: 'Detective Ray Navarro (Betrayal & Corruption)',
    motiveDescription: 'Accepted a $25,000 syndicate bribe to pay off gambling debts by leaking the safehouse location to hitman Viktor Kozlov.',
    methodDescription: 'Navarro transmitted room coordinates to the syndicate. Clara discovered the betrayal, staged an abduction with theatrical blood, and escaped through the steam conduit to catch the 23:45 Night Express.',
    approximateTime: '23:20 (Escape) / 00:30 (Breach)',
    crucialEvidenceIds: [
      'clue-02-staged-blood',
      'clue-02-burner-phone',
      'clue-02-vent-grate',
      'clue-02-torn-ticket',
      'clue-02-tunnel-footprints'
    ],
    falseAlibiSuspectId: 'suspect-02-navarro',
    fullCaseDebriefing:
      'Detective Ray Navarro was corrupted by high-stakes sports gambling debts. For $25,000 wired into an offshore Cayman account, he agreed to sell out protected witness Clara Thorne to the Blackwood Syndicate, texting the room number and guard rotation to hitman Viktor Kozlov.\n\nHowever, Clara was sharp. She intercepted Navarro\'s burner radio chatter and realized she was a dead woman if she stayed. With the assistance of her sister Maya Lin and superintendent Isaac Vance, Clara formulated a daring plan: at 23:20, she splattered theatrical prop blood on the carpet, kicked over furniture, and crawled through the kitchenette maintenance vent into the 1920s underground steam conduit. She emerged onto the freight rail platform and boarded the 23:45 Night Express carrying the master encrypted fraud drive to deliver it directly to federal prosecutors.\n\nWhen Kozlov arrived at 00:30, he kicked open the door to find the room empty and fled. Navarro, realizing his bribe scheme had imploded, struck himself in the head with a flashlight and played the unconscious victim in the hallway. Thanks to your deduction of the synthetic blood, the radiator burner phone, and the underground boiler tracks, Navarro was arrested for criminal conspiracy and Clara Thorne\'s testimony was preserved.',
    options: {
      motives: [
        { id: 'm-syndicate-bribe', label: 'Accepted $25,000 syndicate bribe to leak safehouse location due to gambling debts' },
        { id: 'm-revenge', label: 'Personal vengeance against the Thorne family for prior criminal convictions' },
        { id: 'm-silence-witness', label: 'Preventing Clara from exposing police precinct corruption in trial' },
        { id: 'm-extortion', label: 'Extorting $500,000 ransom from the Blackwood Syndicate' }
      ],
      methods: [
        { id: 'met-staged-escape', label: 'Navarro leaked location; Clara discovered it, staged kidnapping with prop blood, and escaped via steam tunnel' },
        { id: 'met-forced-abduction', label: 'Kozlov stormed room, chloroformed Clara, and carried her out the fire escape' },
        { id: 'met-poisoned-vent', label: 'Pumped carbon monoxide through the air vents to incapacitate the witness' },
        { id: 'met-corridor-bludgeon', label: 'Ambushed the protection detail and drove the witness across the border' }
      ],
      times: [
        { id: 't-2320', label: 'Between 23:20 and 23:45 (Clara\'s tunnel evacuation and train departure)' },
        { id: 't-0030', label: 'At 00:30 (when Kozlov breached the empty doorway)' },
        { id: 't-0045', label: 'At 00:45 (when Navarro staged his unconsciousness)' },
        { id: 't-0115', label: 'At 01:15 (when backup police units arrived)' }
      ]
    }
  }
};
