import { CaseData } from '../../types/game';

export const case001: CaseData = {
  id: 'case-001',
  caseNumber: 'CASE 001',
  title: 'THE LAST ALIBI',
  subtitle: 'A Locked Manor, Five Suspects, and a Calculated Deception',
  badge: 'MURDER',
  difficulty: 'Standard',
  estimatedTime: '25-35 mins',
  victimOrSubject: 'Lord Arthur Pendelton (Age 64, Industrialist & Rare Antiquities Collector)',
  incidentDate: 'October 14, 2024 — 22:30 Hours',
  location: 'Pendelton Manor, Private Study, Blackthorn Ridge',
  synopsis:
    'Lord Arthur Pendelton was found slumped over his mahogany desk inside his private study, poisoned with potassium cyanide in his vintage brandy. The study door was heavy oak, bolted from the inside. The single bay window was latched shut from inside. Five people were inside the manor during the storm. Each claims an ironclad alibi, but one of them orchestrated an impossible crime.',
  briefing: {
    chiefMemo:
      'Detective, the local precinct is baffled. The coroner confirms Arthur died between 22:00 and 22:30 from rapid cyanide intoxication. The study was locked tight; the servants had to break the lock with a fire axe at 23:05 when Arthur failed to answer. Examine the room meticulously, interrogate all five suspects, connect the physical clues to break the false alibi, and deliver the indictment.',
    initialStatus: 'Study sealed under police tape. Coroner report pending review.',
    keyObjectives: [
      'Investigate Arthur Pendelton\'s locked study for hidden physical anomalies.',
      'Uncover the source and delivery mechanism of the potassium cyanide.',
      'Examine the locked room mechanism — how did the killer seal it from the outside?',
      'Cross-examine the 5 suspects and detect contradictions in their timelines.',
      'Identify the killer, the true motive, the method, and the false alibi.'
    ]
  },
  crimeScene: {
    roomTitle: 'Pendelton Manor — The Private Study',
    roomDescription:
      'A cavernous Victorian study lined with floor-to-ceiling bookshelves, a heavy Persian carpet, a blazing marble fireplace, an antique grandfather clock, a crystal liquor sideboard, and a large mahogany desk where Lord Pendelton drew his last breath.',
    sceneTheme: 'victorian_study',
    hotspots: [
      {
        id: 'hs-01-desk',
        name: 'Mahogany Writing Desk & Victim',
        x: 48,
        y: 52,
        radius: 30,
        description: 'Lord Arthur is slumped over an open leather ledger. An overturned crystal snifter of brandy sits beside his right hand.',
        revealsEvidenceId: 'clue-01-brandy-snifter',
        discoveryNote: 'Recovered the crystal snifter. The amber residue emits an unmistakable bitter almond scent: potassium cyanide.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-01-ledger',
        name: 'Victim\'s Financial Ledger',
        x: 54,
        y: 48,
        radius: 25,
        description: 'A leather-bound estate ledger with freshly annotated audit marks in red ink.',
        revealsEvidenceId: 'clue-02-audited-ledger',
        discoveryNote: 'Found an opened estate ledger with recent audit annotations flagging $450,000 missing from the charity fund.',
        iconType: 'document'
      },
      {
        id: 'hs-01-clock',
        name: 'Antique Grandfather Clock',
        x: 18,
        y: 38,
        radius: 28,
        description: 'A towering brass pendulum grandfather clock. The glass face is fractured, and the brass hands are frozen.',
        revealsEvidenceId: 'clue-03-stopped-clock',
        discoveryNote: 'The clock hands are arrested precisely at 22:14. Inside the casing lies a heavy bronze paperweight knocked from the side table during Arthur\'s violent convulsions.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-01-liquor',
        name: 'Crystal Liquor Sideboard',
        x: 82,
        y: 45,
        radius: 26,
        description: 'A silver tray holding an antique crystal decanter of vintage 1948 Armagnac and several clean glasses.',
        revealsEvidenceId: 'clue-04-poisoned-decanter',
        discoveryNote: 'The crystal decanter contains trace residue of cyanide powder mixed directly into the liquor stock, not just the glass.',
        iconType: 'flask'
      },
      {
        id: 'hs-01-window',
        name: 'Leaded Glass Bay Window',
        x: 32,
        y: 28,
        radius: 26,
        description: 'A leaded mullion window overlooking the rain-swept rose garden. The interior brass cam latch is in the locked horizontal position.',
        revealsEvidenceId: 'clue-05-window-latch',
        discoveryNote: 'Inspection of the window frame reveals fine beeswax residue and micro-grooves along the brass latch axle, suggesting a mechanical trick latch.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-01-fireplace',
        name: 'Marble Fireplace & Hearth',
        x: 68,
        y: 65,
        radius: 25,
        description: 'Dying embers glow in the marble hearth. Among the gray ashes rests a partially charred sheet of parchment.',
        revealsEvidenceId: 'clue-06-burnt-will',
        discoveryNote: 'Extracted a partially burnt legal document: a drafted codicil to Arthur\'s will, cutting off nephew Julian Pendelton and ordering an immediate audit of secretary Evelyn Vance.',
        iconType: 'document'
      },
      {
        id: 'hs-01-garden-sill',
        name: 'Exterior Window Sill (Outside)',
        x: 31,
        y: 68,
        radius: 22,
        description: 'The muddy terrace bed immediately beneath the study window among the rose thorns.',
        isHidden: true,
        revealsEvidenceId: 'clue-07-nylon-thread',
        discoveryNote: 'Trapped on a rose thorn directly below the study window: a 40cm strand of high-tensile waxed nylon monofilament and a size 6 dress shoe print.',
        iconType: 'footprint'
      },
      {
        id: 'hs-01-wastebasket',
        name: 'Under-Desk Wastebasket',
        x: 44,
        y: 72,
        radius: 20,
        description: 'A brass wastebasket tucked beneath the mahogany kneehole desk.',
        isHidden: true,
        revealsEvidenceId: 'clue-08-torn-envelope',
        discoveryNote: 'Found a torn black-market apothecary receipt for photographic toning chemicals (potassium cyanide salt) shipped to a post office box in town.',
        iconType: 'document'
      }
    ]
  },
  suspects: [
    {
      id: 'suspect-01-julian',
      name: 'Julian Pendelton',
      alias: 'The Disinherited Nephew',
      role: 'Nephew & Heir Apparent',
      age: 29,
      occupation: 'Socialite & High-Stakes Gambler',
      relationshipToVictim: 'Estranged nephew and dependent',
      motive: 'Saddled with $300,000 in loan shark debts due at midnight; uncle threatened to disinherit him completely.',
      alibi: 'Claims he was locked in the Manor billiard room from 21:30 to 22:45 practicing his trick shots while drinking whiskey.',
      personality: 'Nervous, arrogant, sweat beads on his brow, chain-smoker.',
      secrets: 'Stole Arthur\'s diamond signet ring earlier that afternoon to pawn it.',
      avatarSeed: 'Julian',
      avatarColor: '#c2410c',
      dialogueTree: [
        {
          id: 'dlg-j-1',
          prompt: 'Where were you between 22:00 and 22:30 tonight?',
          response: 'I already told your deputies! I was in the billiard room alone, playing nine-ball and trying to drown out the thunderstorm with Scotch. I didn\'t leave until Beatrice started screaming at 23:00.',
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-j-2',
          prompt: 'Did your uncle threaten to cut you out of his will today?',
          response: 'He... he was always threatening that! Arthur enjoyed holding the purse strings over my neck. But I wouldn\'t kill him! He was my only lifeline to the estate trustees!',
          reactionMood: 'nervous'
        },
        {
          id: 'dlg-j-3',
          prompt: 'Did you enter Arthur\'s study at any point this evening?',
          response: 'At 17:00, yes. We had a row about my debts. He locked the study door right behind me when I stormed out. I never stepped foot back in that cursed room.',
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-06-burnt-will',
          reactionText: 'Julian bluffs, his hands shaking: "That burnt codicil? Arthur threw it into the hearth right in front of me during our argument at five o\'clock! He said, \'Look what you\'ve brought upon yourself, Julian!\' But the fire wasn\'t hot enough to consume the seal."',
          stressIncrease: 25,
          exposesLie: false
        },
        {
          evidenceId: 'clue-09-pawn-receipt',
          reactionText: 'Julian pales: "Fine! I took his signet ring from the hallway coat! I was desperate for cash! But stealing jewelry doesn\'t make me a poisoner!"',
          stressIncrease: 40,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-02-evelyn',
      name: 'Evelyn Vance',
      alias: 'The Quiet Archivist',
      role: 'Private Secretary & Estate Archivist',
      age: 34,
      occupation: 'Confidential Secretary',
      relationshipToVictim: 'Personal assistant for 7 years',
      motive: 'Arthur discovered Evelyn was systematically siphoning funds from the Pendelton Rare Books Endowment into private Swiss accounts.',
      alibi: 'Claims she was in the library cataloging manuscripts until 22:40, then knocked on Arthur\'s door at 22:30 and heard him cough and grumble inside.',
      personality: 'Composed, articulate, wearing prim spectacles, remarkably calm under pressure.',
      secrets: 'An expert embroiderer who uses waxed nylon monofilament and specialized knotting tools.',
      avatarSeed: 'Evelyn',
      avatarColor: '#0284c7',
      dialogueTree: [
        {
          id: 'dlg-e-1',
          prompt: 'Walk me through your movements around 22:00 to 22:30.',
          response: 'I was in the east library cross-referencing auction receipts. At approximately 22:30, I walked past the study to deliver the evening mail. I tapped on the door. Arthur called out from inside: "Leave me, Evelyn, I am indisposed!" So I placed the letters on the credenza outside.',
          reactionMood: 'calm',
          revealsContradictionId: 'contra-evelyn-time'
        },
        {
          id: 'dlg-e-2',
          prompt: 'Did Lord Pendelton mention anything about the financial audit?',
          response: 'He mentioned standard quarterly audits. Our records are impeccably maintained, detective. I have dedicated seven years of my life to preserving his archives.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-e-3',
          prompt: 'Do you have keys to the study or the garden terrace?',
          response: 'Only Lord Arthur held the master key to the study deadbolt. When he locked himself in, not even Beatrice or I could enter without him opening it.',
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-stopped-clock',
          reactionText: 'Evelyn\'s mask slips for a fraction of a second: "The grandfather clock stopped at 22:14? That... that must be a coincidence or a mechanical fault! I am certain I heard his voice at 22:30!"',
          stressIncrease: 35,
          exposesLie: true
        },
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: 'Evelyn recoils slightly: "High-tensile waxed nylon thread? I... I use that thread for rebinding 18th-century leather folios in the archive. Why would that be on the garden sill?"',
          stressIncrease: 50,
          exposesLie: true
        },
        {
          evidenceId: 'clue-02-audited-ledger',
          reactionText: 'Evelyn tightens her lips: "Arthur was growing paranoid in his old age. Those red annotations are speculative figures, nothing more."',
          stressIncrease: 30
        }
      ]
    },
    {
      id: 'suspect-03-finch',
      name: 'Dr. Alistair Finch',
      alias: 'The Family Physician',
      role: 'Personal Physician',
      age: 58,
      occupation: 'Medical Doctor & Toxicologist',
      relationshipToVictim: 'Lifelong friend and physician',
      motive: 'Arthur threatened to report Dr. Finch to the medical board for illegally prescribing experimental narcotics.',
      alibi: 'Claims he was in the manor guest room reading medical journals from 21:00 onwards until alerted by the commotion.',
      personality: 'Weary, dignified, smell of antiseptic and pipe tobacco, trembling fingers.',
      secrets: 'Keeps a locked travel bag containing pharmaceutical grade toxins and sedatives.',
      avatarSeed: 'Finch',
      avatarColor: '#16a34a',
      dialogueTree: [
        {
          id: 'dlg-f-1',
          prompt: 'What was your professional assessment of Arthur\'s health recently?',
          response: 'Arthur suffered from chronic hypertension and mild angina. I prescribed digitalis and mild sedatives. He was irritable, under great stress from family disputes, but physically resilient.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-f-2',
          prompt: 'Do you carry potassium cyanide in your medical kit?',
          response: 'Heavens, no! Cyanide has no legitimate therapeutic purpose in modern clinical medicine. As a chemist, I know its lethal nature — death occurs within minutes of ingestion via cellular asphyxiation.',
          reactionMood: 'surprised'
        },
        {
          id: 'dlg-f-3',
          prompt: 'Did you prepare or serve Arthur\'s drinks this evening?',
          response: 'Certainly not. Arthur was fiercely ritualistic. Every night at 21:50, Beatrice set the crystal Armagnac decanter on his study sideboard, and Arthur poured his own nightcap.',
          reactionMood: 'calm'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-04-poisoned-decanter',
          reactionText: 'Dr. Finch peers closely: "Remarkable. The poison was dissolved in the decanter itself, not merely smeared on the rim. Whoever did this had advance access to the study before it was sealed."',
          stressIncrease: 10
        },
        {
          evidenceId: 'clue-08-torn-envelope',
          reactionText: 'Dr. Finch inspects the apothecary slip: "This PO box is registered under \'E. V. Antiquarian Books\'. That isn\'t my signature, detective. That is Evelyn Vance\'s handwriting."',
          stressIncrease: 0,
          revealsClueId: 'clue-10-handwriting-sample'
        }
      ]
    },
    {
      id: 'suspect-04-beatrice',
      name: 'Beatrice Morales',
      alias: 'The Devoted Housekeeper',
      role: 'Head Housekeeper',
      age: 52,
      occupation: 'Domestic Supervisor',
      relationshipToVictim: 'Employee for 18 years',
      motive: 'Arthur had recently drafted an amendment requiring all household staff to undergo lie detector tests following theft of antique silverware.',
      alibi: 'Was in the kitchen preparing midnight broth with the kitchen maid between 22:00 and 22:45.',
      personality: 'Fretful, religious, clutches a wooden rosary, speaks in hushed whispers.',
      secrets: 'Knew about the secret escape door behind the hallway tapestry, but insists it was locked with rusted iron bolts.',
      avatarSeed: 'Beatrice',
      avatarColor: '#9333ea',
      dialogueTree: [
        {
          id: 'dlg-b-1',
          prompt: 'Who was the last person you saw entering Lord Pendelton\'s study?',
          response: 'I brought his hot water and Armagnac decanter to the study door at 21:45. Miss Evelyn was standing right outside with a stack of papers. She took the tray from my hands, saying she would set it inside for his Lordship.',
          reactionMood: 'nervous',
          revealsClueId: 'clue-11-tray-handover'
        },
        {
          id: 'dlg-b-2',
          prompt: 'How was the study door locked when you discovered him?',
          response: 'Oh sweet Jesus, the brass deadbolt was turned all the way in! The heavy iron key was sitting on the inside keyhole! We had to strike the frame with the woodcutter\'s axe to breach it!',
          reactionMood: 'surprised'
        },
        {
          id: 'dlg-b-3',
          prompt: 'Did you hear anything from inside the room around 22:15?',
          response: 'Around 22:15, there was a terrible crash — like heavy metal striking the grandfather clock! I knocked and called out, but there was only silence. Then Miss Evelyn came down the hall and told me Arthur had ordered us not to disturb him.',
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-05-window-latch',
          reactionText: 'Beatrice gasps: "The garden window! Miss Evelyn spent hours this morning polishing the brass hardware on that very window! She claimed the storm was causing damp drafts!"',
          stressIncrease: 5
        }
      ]
    },
    {
      id: 'suspect-05-marcus',
      name: 'Marcus Kane',
      alias: 'The Cutthroat Rival',
      role: 'Antiquities Dealer & Commercial Rival',
      age: 46,
      occupation: 'Private Art & Relic Dealer',
      relationshipToVictim: 'Acrimonious business competitor',
      motive: 'Arthur outbid Kane at auction for the Byzantine Codex; Kane faced bankruptcy if he could not acquire the codex.',
      alibi: 'Claims he departed the manor grounds in his Bentley at 21:15 after Arthur refused his buyout offer.',
      personality: 'Pompous, cigar-scented, sharp double-breasted suit, sneering demeanor.',
      secrets: 'Parked his Bentley down the driveway gate until 22:40 waiting to see if Arthur would change his mind.',
      avatarSeed: 'Marcus',
      avatarColor: '#b45309',
      dialogueTree: [
        {
          id: 'dlg-m-1',
          prompt: 'Why were you at Pendelton Manor on the night of the murder?',
          response: 'Pure commerce. I made a generous final offer of £250,000 for the Byzantine Codex. Pendelton laughed in my face and had his butler show me the door at 21:15.',
          reactionMood: 'hostile'
        },
        {
          id: 'dlg-m-2',
          prompt: 'Security gate logs show your car didn\'t exit until 22:42. Explain the gap.',
          response: 'My tire had a slow leak, officer. I pulled over under the cypress trees to inspect the valve. Is having bad rubber a capital crime in this county?',
          reactionMood: 'defensive'
        },
        {
          id: 'dlg-m-3',
          prompt: 'Did you see anyone on the garden terrace while parked?',
          response: 'Now that you mention it... around 22:20, through the rain, I saw a figure in a dark rain slicker slip out from the manor terrace into the rose garden and re-enter through the side conservatory door.',
          reactionMood: 'calm',
          revealsClueId: 'clue-12-terrace-sighting'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-07-nylon-thread',
          reactionText: 'Marcus laughs coldly: "Size 6 woman\'s dress shoes? I wear custom Italian size 11 wingtips, detective. You are looking for a petite woman, not an overweight art dealer."',
          stressIncrease: 0
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-01-brandy-snifter',
      name: 'Overturned Crystal Brandy Snifter',
      category: 'Physical',
      description: 'A heavy lead-crystal glass on Arthur\'s desk with 5ml of spilled amber liquid.',
      discoveryLocation: 'Study Desk, beside victim\'s right arm',
      relevance: 'The immediate ingestion vessel for the lethal toxin.',
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        'Mass spectrometer analysis confirms 120mg of potassium cyanide dissolved in the liquor.',
        'No foreign fingerprints detected on the glass; wiped clean or handled with gloves.',
        'The vintage corresponds exactly to the decanter on the sideboard.'
      ],
      iconKey: 'glass'
    },
    {
      id: 'clue-02-audited-ledger',
      name: 'Audited Estate Ledger with Red Annotations',
      category: 'Documents',
      description: 'Arthur\'s personal estate books, showing forensic audits of the endowment accounts.',
      discoveryLocation: 'Open on Arthur\'s desk under his hands',
      relevance: 'Establishes direct financial embezzlement and motive against the private archivist.',
      relatedSuspectIds: ['suspect-02-evelyn'],
      isCrucial: true,
      details: [
        'Arthur wrote in margin: "Discrepancy of $450,000 between March and September. Evelyn has sole signing authority."',
        'Final entry dated October 14, 21:00: "Will present to the Crown Prosecutor tomorrow morning."',
        'Provides an imminent existential threat to Evelyn Vance.'
      ],
      iconKey: 'book'
    },
    {
      id: 'clue-03-stopped-clock',
      name: 'Fractured Grandfather Clock (22:14)',
      category: 'Physical',
      description: 'Antique clock with smashed glass face, stopped rigidly at 10:14 PM.',
      discoveryLocation: 'Study west corner',
      relevance: 'Fixes the exact time of Arthur\'s terminal convulsions and shatters Evelyn\'s alibi.',
      relatedSuspectIds: ['suspect-02-evelyn'],
      isCrucial: true,
      details: [
        'Pendulum jammed by a heavy bronze paperweight knocked during violent muscle spasms.',
        'Proves Arthur was incapacitated or deceased by 22:14.',
        'Directly contradicts Evelyn Vance\'s statement that she spoke to Arthur at 22:30.'
      ],
      iconKey: 'clock'
    },
    {
      id: 'clue-04-poisoned-decanter',
      name: 'Vintage Armagnac Decanter',
      category: 'Physical',
      description: 'A heavy crystal bottle holding approximately 400ml of vintage brandy.',
      discoveryLocation: 'Study Liquor Sideboard',
      relevance: 'Demonstrates the poison was added to the decanter before Arthur poured his glass.',
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        'The entire decanter volume was laced with 2 grams of potassium cyanide salt.',
        'Whoever poisoned it knew Arthur drank a single snifter every evening at 22:00 sharp.',
        'Placed in the study by Evelyn Vance at 21:45.'
      ],
      iconKey: 'flask'
    },
    {
      id: 'clue-05-window-latch',
      name: 'Rigged Leaded Window Cam-Latch',
      category: 'Forensic Reports',
      description: 'The locking mechanism of the study bay window.',
      discoveryLocation: 'Study Leaded Bay Window',
      relevance: 'Explains how the room was sealed from the exterior.',
      relatedSuspectIds: ['suspect-02-evelyn'],
      isCrucial: true,
      details: [
        'Microscopic traces of beeswax lubricant and rub marks on the pivot arm.',
        'By looping a thin nylon filament around the latch lever through the outer sill gap, a person outside can pull the thread to snap the latch closed, then pull the thread free.',
        'Solves the "impossible" locked room illusion.'
      ],
      iconKey: 'key'
    },
    {
      id: 'clue-06-burnt-will',
      name: 'Charred Codicil to Will',
      category: 'Documents',
      description: 'Fragment of parchment pulled from the dying fireplace embers.',
      discoveryLocation: 'Study Marble Fireplace',
      relevance: 'Presents Julian\'s initial disinheritance motive, but shows Arthur threw it into the hearth earlier in the evening.',
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        'Drafted to strip Julian Pendelton of his trust fund allowance.',
        'The ink had already set hours prior; soot patterns match the 17:00 fire stoking.'
      ],
      iconKey: 'scroll'
    },
    {
      id: 'clue-07-nylon-thread',
      name: 'Waxed Nylon Thread & Size 6 Muddy Print',
      category: 'Physical',
      description: 'A 40cm strand of high-tensile waxed monofilament caught on a rose thorn outside the window.',
      discoveryLocation: 'Rose Garden bed directly beneath study window',
      relevance: 'Physical forensic proof tying the exterior window mechanism to a petite woman.',
      relatedSuspectIds: ['suspect-02-evelyn'],
      isCrucial: true,
      isHidden: true,
      details: [
        'Thread composition: 50-lb test waxed nylon bookbinder\'s thread.',
        'Matches the exact spools kept in Evelyn Vance\'s archival desk.',
        'Footprint matches a woman\'s size 6 Oxford shoe, the exact shoe worn by Evelyn Vance.'
      ],
      iconKey: 'scissors'
    },
    {
      id: 'clue-08-torn-envelope',
      name: 'Torn Black-Market Cyanide Invoice',
      category: 'Documents',
      description: 'A shredded commercial invoice from a chemical supply house.',
      discoveryLocation: 'Under-desk wastebasket',
      relevance: 'Traces the purchase of potassium cyanide to Evelyn\'s registered business address.',
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-03-finch'],
      isHidden: true,
      details: [
        'Billed to: "E. V. Antiquarian Books, PO Box 412".',
        'Item: 100g Potassium Cyanide Reagent Grade (claimed for photograph toning).',
        'Signed: "E. Vance".'
      ],
      iconKey: 'receipt'
    },
    {
      id: 'clue-09-pawn-receipt',
      name: 'Julian\'s Pawn Ticket for Signet Ring',
      category: 'Documents',
      description: 'A pawn ticket for an heirloom gold signet ring stamped at 16:15 today.',
      discoveryLocation: 'Julian\'s coat pocket in billiard room',
      relevance: 'Explains Julian\'s suspicious behavior and theft, but clears him of being the poisoner.',
      relatedSuspectIds: ['suspect-01-julian'],
      details: [
        'Julian pawned the ring hours before the murder to cover a poker debt.',
        'Proves petty theft, not the calculated locked-room murder.'
      ],
      iconKey: 'tag'
    },
    {
      id: 'clue-10-handwriting-sample',
      name: 'Evelyn\'s Archival Catalog Cards',
      category: 'Documents',
      description: 'Archival index cards written in Evelyn Vance\'s neat calligraphic script.',
      discoveryLocation: 'Library Archive Desk',
      relevance: 'Forensic handwriting match to the black-market cyanide order.',
      relatedSuspectIds: ['suspect-02-evelyn'],
      details: [
        'Loop structures and stroke pressure identical to the signature on the chemical invoice.',
        'Indisputable proof that Evelyn Vance procured the poison.'
      ],
      iconKey: 'pen'
    },
    {
      id: 'clue-11-tray-handover',
      name: 'Beatrice\'s Witness Statement: Tray Interception',
      category: 'Witness Statements',
      description: 'Testimony from head housekeeper Beatrice Morales regarding the drink tray.',
      discoveryLocation: 'Kitchen Interrogation',
      relevance: 'Confirms Evelyn Vance had sole custody of the Armagnac decanter before it entered the locked study.',
      relatedSuspectIds: ['suspect-02-evelyn', 'suspect-04-beatrice'],
      details: [
        'At 21:45, Evelyn intercepted the tray from Beatrice in the hallway.',
        'Evelyn carried it into the study under the pretense of delivering evening correspondence.'
      ],
      iconKey: 'message'
    },
    {
      id: 'clue-12-terrace-sighting',
      name: 'Marcus Kane\'s Terrace Witness Statement',
      category: 'Witness Statements',
      description: 'Statement from Marcus Kane regarding a figure slipping into the garden at 22:20.',
      discoveryLocation: 'Driveway Interrogation',
      relevance: 'Corroborates the killer\'s escape route through the study window into the rose garden.',
      relatedSuspectIds: ['suspect-05-marcus', 'suspect-02-evelyn'],
      details: [
        'Kane observed a slim figure in a dark slicker moving from the study window terrace to the conservatory door at 22:20.'
      ],
      iconKey: 'eye'
    }
  ],
  canonConnections: [
    {
      id: 'conn-01',
      sourceId: 'clue-03-stopped-clock',
      targetId: 'suspect-02-evelyn',
      label: 'Alibi Contradiction',
      deductionNotes: 'Arthur died at 22:14 when the clock was smashed by the convulsing victim. Evelyn\'s claim that she spoke to him at 22:30 is a manufactured lie to establish an alibi!',
      isContradiction: true,
      bonusPoints: 150
    },
    {
      id: 'conn-02',
      sourceId: 'clue-05-window-latch',
      targetId: 'clue-07-nylon-thread',
      label: 'Locked Room Mechanism',
      deductionNotes: 'The beeswax and micro-grooves on the window cam latch match the high-tensile waxed nylon thread found outside on the rose thorn. The killer latched the window from outside using a pull-string loop!',
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'conn-03',
      sourceId: 'clue-08-torn-envelope',
      targetId: 'clue-10-handwriting-sample',
      label: 'Poison Acquisition',
      deductionNotes: 'The signature on the chemical supply invoice for potassium cyanide matches Evelyn Vance\'s archival catalog handwriting with 100% forensic precision.',
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'conn-04',
      sourceId: 'clue-02-audited-ledger',
      targetId: 'suspect-02-evelyn',
      label: 'Financial Motive',
      deductionNotes: 'Lord Arthur uncovered that Evelyn embezzled $450,000 from the foundation and wrote that he would turn her in to the Crown Prosecutor the very next morning.',
      isContradiction: false,
      bonusPoints: 125
    },
    {
      id: 'conn-05',
      sourceId: 'clue-04-poisoned-decanter',
      targetId: 'clue-11-tray-handover',
      label: 'Opportunity Window',
      deductionNotes: 'Beatrice handed the fresh decanter to Evelyn at 21:45. Evelyn had total privacy to spike the decanter before placing it on Arthur\'s desk.',
      isContradiction: false,
      bonusPoints: 150
    }
  ],
  timelineEvents: [
    {
      id: 'tl-01',
      timestamp: '17:00',
      timeSortValue: 1020,
      title: 'Julian\'s Violent Argument with Arthur',
      description: 'Julian demands money for his gambling debts. Arthur burns the trust fund codicil in anger and throws Julian out.',
      source: 'Julian\'s Admission & Hearth Soot Analysis',
      verifiedLocation: 'Pendelton Manor Study',
      relatedSuspectId: 'suspect-01-julian',
      correctIndex: 0
    },
    {
      id: 'tl-02',
      timestamp: '21:00',
      timeSortValue: 1260,
      title: 'Arthur Completes Embezzlement Audit',
      description: 'Arthur signs the final red-ink note in the estate ledger, marking $450,000 missing and pledging to call the Crown Prosecutor tomorrow.',
      source: 'Victim\'s Audited Ledger Entry',
      verifiedLocation: 'Study Desk',
      correctIndex: 1
    },
    {
      id: 'tl-03',
      timestamp: '21:15',
      timeSortValue: 1275,
      title: 'Marcus Kane Ejected from Manor',
      description: 'Marcus Kane is rebuffed in his attempt to buy the Byzantine Codex and retreats to his Bentley at the front gates.',
      source: 'Butler Log & Kane Statement',
      verifiedLocation: 'Manor Foyer / Driveway Gate',
      relatedSuspectId: 'suspect-05-marcus',
      correctIndex: 2
    },
    {
      id: 'tl-04',
      timestamp: '21:45',
      timeSortValue: 1305,
      title: 'Evelyn Intercepts the Drink Tray',
      description: 'Evelyn intercepts the Armagnac decanter from Beatrice Morales, poisons the decanter with potassium cyanide, and carries it into the study.',
      source: 'Beatrice\'s Eyewitness Statement',
      verifiedLocation: 'East Corridor / Study Entrance',
      relatedSuspectId: 'suspect-02-evelyn',
      correctIndex: 3
    },
    {
      id: 'tl-05',
      timestamp: '22:00',
      timeSortValue: 1320,
      title: 'Arthur Drinks the Laced Brandy',
      description: 'Arthur locks his study deadbolt for the night, pours a snifter from the decanter, and begins drinking while reviewing the ledger.',
      source: 'Routine Habits & Toxicology Report',
      verifiedLocation: 'Study Desk',
      correctIndex: 4
    },
    {
      id: 'tl-06',
      timestamp: '22:14',
      timeSortValue: 1334,
      title: 'Fatal Convulsions & Clock Arrest',
      description: 'Potassium cyanide induces violent convulsions. Arthur collapses, knocking a bronze weight into the grandfather clock, freezing its hands at 22:14.',
      source: 'Stopped Clock & Forensic Pathology',
      verifiedLocation: 'Study West Corner',
      correctIndex: 5
    },
    {
      id: 'tl-07',
      timestamp: '22:20',
      timeSortValue: 1340,
      title: 'The Killer Rigging the Window Latch',
      description: 'Evelyn Vance slips out the study window into the rose garden, threads her waxed nylon string through the jamb to flip the cam latch locked, and flees to the conservatory.',
      source: 'Window Wax Residue & Marcus Kane\'s Sighting',
      verifiedLocation: 'Garden Rose Terrace',
      relatedSuspectId: 'suspect-02-evelyn',
      correctIndex: 6
    },
    {
      id: 'tl-08',
      timestamp: '22:30',
      timeSortValue: 1350,
      title: 'Evelyn Stages the False Voice Alibi',
      description: 'Evelyn knocks on the locked study door in the corridor and speaks aloud, pretending Arthur responded to create an alibi after he was already dead.',
      source: 'Contradicted Alibi Statement',
      verifiedLocation: 'Study Outer Door',
      relatedSuspectId: 'suspect-02-evelyn',
      correctIndex: 7
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: 'Discrepancy in Time',
      hintText: 'Pay close attention to the grandfather clock in the study. Compare the physical time the clock stopped with the time Evelyn Vance claims she spoke with Arthur through the door.'
    },
    {
      level: 2,
      cost: 100,
      title: 'The Sealed Window Illusion',
      hintText: 'Check the outside rose garden beneath the window. The killer didn\'t use a secret tunnel; they used a common artisan tool that leaves high-tensile waxed thread.'
    },
    {
      level: 3,
      cost: 200,
      title: 'The True Embezzler',
      hintText: 'Match the handwriting on the chemical apothecary receipt with the documents in the archive. The person who ordered the potassium cyanide had $450,000 reasons to silence Arthur tonight.'
    }
  ],
  solution: {
    culpritId: 'suspect-02-evelyn',
    culpritName: 'Evelyn Vance',
    motiveDescription: 'Covering up $450,000 in embezzled endowment funds that Arthur discovered and planned to report to prosecutors the next morning.',
    methodDescription: 'Poisoned the Armagnac decanter before delivering it, then escaped via the study window and locked the latch from outside using a loop of waxed nylon bookbinder\'s thread.',
    approximateTime: '22:14',
    crucialEvidenceIds: [
      'clue-02-audited-ledger',
      'clue-03-stopped-clock',
      'clue-05-window-latch',
      'clue-07-nylon-thread',
      'clue-08-torn-envelope'
    ],
    falseAlibiSuspectId: 'suspect-02-evelyn',
    fullCaseDebriefing:
      'Evelyn Vance spent months systematically transferring $450,000 from the Pendelton Rare Books Endowment into private accounts. When Arthur conducted a surprise quarterly audit on the evening of October 14, he discovered the massive shortfall and wrote in his ledger that he would summon the Crown Prosecutor at dawn.\n\nFaced with prison, Evelyn acted swiftly. Having previously acquired potassium cyanide under her antiquarian front company, she intercepted the evening Armagnac tray from housekeeper Beatrice Morales at 21:45 and stirred the cyanide directly into the decanter. Arthur poured his drink at 22:00 and suffered fatal convulsions at 22:14, his falling body hurling a bronze paperweight into the grandfather clock and stopping it dead.\n\nEvelyn had already prepared her "impossible" locked room trick: she entered the study, ensured Arthur was dead, bolted the corridor door from inside, and slipped out through the ground-floor leaded window into the rainy garden. Using her professional bookbinder\'s waxed nylon thread looped around the window latch arm, she pulled the thread from outside until the brass latch clicked locked, then pulled the string free. At 22:30, she conspicuously staged a conversation outside the study door for Beatrice to hear, fabricating an alibi. But the frozen clock at 22:14, the thread on the rose thorns, and the cyanide purchase receipt irrevocably sealed her guilt.',
    options: {
      motives: [
        { id: 'm-gambling', label: 'Desperation to settle $300,000 in high-stakes gambling debts' },
        { id: 'm-embezzle', label: 'Concealing $450,000 in embezzled foundation funds about to be reported to police' },
        { id: 'm-codex', label: 'Stealing the Byzantine Codex to prevent bankruptcy in the antiquities trade' },
        { id: 'm-silence', label: 'Silencing Arthur regarding an illegal narcotics prescription' }
      ],
      methods: [
        { id: 'met-decanter-thread', label: 'Dissolved cyanide into decanter; escaped window and pulled latch shut with waxed nylon thread' },
        { id: 'met-hypodermic', label: 'Injected lethal dose of morphine through keyhole while victim slept' },
        { id: 'met-cigar', label: 'Laced Arthur\'s Cuban cigars with cyanide gas in the fireplace' },
        { id: 'met-bludgeon', label: 'Struck victim with brass paperweight and staged poisoning afterwards' }
      ],
      times: [
        { id: 't-2115', label: 'Between 21:00 and 21:30' },
        { id: 't-2214', label: 'Precisely at 22:14 (as recorded by the shattered grandfather clock)' },
        { id: 't-2230', label: 'At 22:30 (during the reported corridor conversation)' },
        { id: 't-2300', label: 'After 23:00 during the breaking of the door' }
      ]
    }
  }
};
