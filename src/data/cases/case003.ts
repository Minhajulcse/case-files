import { CaseData } from '../../types/game';

export const case003: CaseData = {
  id: 'case-003',
  caseNumber: 'CASE 003',
  title: 'THE MUSEUM HEIST',
  subtitle: 'A Sapphire Relic, an EMP Pulse, and the Curator\'s Swap',
  badge: 'GRAND HEIST',
  difficulty: 'Master',
  estimatedTime: '35-45 mins',
  victimOrSubject: 'The Eye of Osiris (3,000-Year-Old Sapphire & Lapis Lazuli Scarab Amulet, Valued at $18,000,000)',
  incidentDate: 'November 18, 2024 — 02:15 Hours',
  location: 'Metropolitan Museum of Antiquities, Sub-Level 2 High-Security Vault',
  synopsis:
    'During the museum\'s annual VIP Gala, a sudden 4-minute blackout plunged Sub-Level 2 into pitch darkness. When the auxiliary generators kicked in at 02:19, the glass display case was intact, but the pedestal held only a cracked resin counterfeit! With biometric seals, laser grids, and 24/7 armed security, how did an $18,000,000 ancient relic vanish into thin air?',
  briefing: {
    chiefMemo:
      'Detective, the Board of Trustees and Interpol are breathing down our necks. The Eye of Osiris is the crown jewel of world antiquities. The vault was protected by biometric keycards, thermal sensors, and an optical laser grid. The power went dead for exactly 240 seconds. When power returned, the scarab was a fake. The thief had to be someone with intimate insider knowledge of the sensors and access codes.',
    initialStatus: 'Sub-Level 2 sealed by SWAT. All 5 persons with vault clearance detained on site.',
    keyObjectives: [
      'Examine the Sub-Level 2 Vault, display pedestal, and thermal laser grid.',
      'Analyze the cracked counterfeit scarab using forensic spectroscopy.',
      'Investigate the cause of the electrical blackout in the breaker control room.',
      'Interrogate the chief curator, head of security, laser engineer, private collector, and janitor.',
      'Determine when the real swap occurred and unmask the mastermind behind the heist.'
    ]
  },
  crimeScene: {
    roomTitle: 'Sub-Level 2 — Egyptian Antiquities Vault',
    roomDescription:
      'A subterranean reinforced vault with polished granite floors, optical laser emitter pillars, a central temperature-controlled display pedestal under reinforced acrylic glass, an HVAC ventilation shaft overhead, and a wall-mounted electronic access terminal.',
    sceneTheme: 'museum_vault',
    hotspots: [
      {
        id: 'hs-03-pedestal',
        name: 'Central Display Pedestal & Acrylic Case',
        x: 50,
        y: 45,
        radius: 30,
        description: 'The reinforced acrylic display hood sits locked over the black velvet pedestal. Resting on the cushion is the cracked blue scarab.',
        revealsEvidenceId: 'clue-03-cracked-scarf',
        discoveryNote: 'Forensic inspection of the acrylic cover: the biometric lock was never opened during the 02:15 blackout! The scarab inside is a polymer fake that cracked from UV display heat.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-03-breaker',
        name: 'HVAC Air Shaft & Electrical Junction',
        x: 82,
        y: 22,
        radius: 26,
        description: 'An open metal vent grate beside the primary breaker junction box.',
        revealsEvidenceId: 'clue-03-emp-capacitor',
        discoveryNote: 'Found a scorched high-voltage pulse capacitor connected with alligator clips to the backup power relay, programmed on a digital kitchen timer.',
        iconType: 'flask'
      },
      {
        id: 'hs-03-terminal',
        name: 'Biometric RFID Access Terminal',
        x: 22,
        y: 48,
        radius: 25,
        description: 'The digital touch-panel recording keycard entries and retina scans into the vault chamber.',
        revealsEvidenceId: 'clue-03-vault-access-logs',
        discoveryNote: 'Terminal audit log shows only ONE person accessed the pedestal lock today: Chief Curator Dr. Helena Rossi at 18:00 for "curatorial inspection".',
        iconType: 'document'
      },
      {
        id: 'hs-03-lasers',
        name: 'Optical Laser Emitter Pillar #3',
        x: 35,
        y: 65,
        radius: 24,
        description: 'One of the six infrared laser emitters guarding the perimeter around the pedestal.',
        revealsEvidenceId: 'clue-03-optical-prism',
        discoveryNote: 'Tucked into the laser aperture: a miniature optical quartz prism designed to deflect the laser beam into the sensor continuously, spoofing an uninterrupted grid.',
        iconType: 'magnifier'
      },
      {
        id: 'hs-03-lockers',
        name: 'Curatorial Staff Locker Room',
        x: 12,
        y: 75,
        radius: 24,
        description: 'A row of steel employee lockers in the airlock foyer outside the vault.',
        isHidden: true,
        revealsEvidenceId: 'clue-03-rossi-invoice',
        discoveryNote: 'Inside Dr. Helena Rossi\'s locker: an invoice from an artisan resin casting workshop in Florence, Italy, for a "museum-grade lapis lazuli scarab replica".',
        iconType: 'document'
      },
      {
        id: 'hs-03-janitor-cart',
        name: 'Janitorial Waste Trolley',
        x: 72,
        y: 72,
        radius: 22,
        description: 'A gray plastic cleaning cart parked near the freight elevator doors.',
        isHidden: true,
        revealsEvidenceId: 'clue-03-lead-box',
        discoveryNote: 'Concealed at the bottom of the laundry hamper: a lead-lined jewelry travel case containing the authentic 3,000-year-old Eye of Osiris!',
        iconType: 'magnifier'
      }
    ]
  },
  suspects: [
    {
      id: 'suspect-03-rossi',
      name: 'Dr. Helena Rossi',
      alias: 'The Disgraced Curator',
      role: 'Chief Curator of Egyptian Antiquities',
      age: 48,
      occupation: 'Egyptologist & Senior Curator',
      relationshipToVictim: 'Sole conservator with physical access to the relic',
      motive: 'Her archaeological excavation company in Cairo went bankrupt with $2.4M in debt; university cancelled her research tenure.',
      alibi: 'Claims she was delivering her keynote speech on Egyptian mythology in the Main Gala Hall upstairs from 01:45 to 02:30.',
      personality: 'Sophisticated, haughty, immaculate evening gown, condescending tone.',
      secrets: 'Had a master replica fabricated in Florence 3 months ago and swapped it hours before the gala.',
      avatarSeed: 'Rossi',
      avatarColor: '#8b5cf6',
      dialogueTree: [
        {
          id: 'dlg-r-1',
          prompt: 'When was the last time you handled the Eye of Osiris?',
          response: 'At 18:00 sharp, during my mandatory pre-gala condition inspection. The scarab was pristine. I sealed the case, activated the biometric lock, and joined our donors on the terrace.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-r-2',
          prompt: 'Where were you during the 4-minute blackout at 02:15?',
          response: 'On stage in the Grand Ballroom under emergency candlelight, addressing over 200 high-society benefactors. I have 200 witnesses, detective. My alibi is unshakeable.',
          reactionMood: 'calm',
          revealsContradictionId: 'contra-rossi-time'
        },
        {
          id: 'dlg-r-3',
          prompt: 'Why was an invoice for an artisan resin scarab found in your locker?',
          response: 'That was... for our educational traveling exhibition in Chicago! Museums routinely commission replicas for child hands-on workshops!',
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-cracked-scarf',
          reactionText: 'Dr. Rossi stumbles: "The counterfeit cracked from the display lighting? That... that is impossible, the artisan guaranteed it withstood 40 degrees Celsius!" She instantly catches herself and falls silent.',
          stressIncrease: 45,
          exposesLie: true
        },
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: 'Dr. Rossi goes dead pale, grasping the table: "You found the lead case? In the laundry hamper? But... Tariq was supposed to take the cart to the catering van at 03:00!"',
          stressIncrease: 60,
          exposesLie: true
        }
      ]
    },
    {
      id: 'suspect-03-cross',
      name: 'Nathan Cross',
      alias: 'The Security Chief',
      role: 'Head of Museum Security & Surveillance',
      age: 50,
      occupation: 'Former Secret Service, Chief Security Officer',
      relationshipToVictim: 'Responsible for vault security protocols',
      motive: 'Bitter over impending pension cuts and budget austerity by the board of trustees.',
      alibi: 'Was in the master security control room on Level 1 monitoring monitors during the blackout.',
      personality: 'Brusque, sharp military haircut, dark suit, clipboard in hand, irritated.',
      secrets: 'Was caught sleeping on duty 3 weeks ago; disabled sensor alert sounders to avoid false alarms.',
      avatarSeed: 'Cross',
      avatarColor: '#1e293b',
      dialogueTree: [
        {
          id: 'dlg-c-1',
          prompt: 'Why did the backup generators take 4 full minutes to engage?',
          response: 'The main electrical transfer switch was hit by a targeted high-voltage power surge. The emergency relays tripped. It took my technician four minutes to manually bypass the surge breakers.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-c-2',
          prompt: 'Did any alarms trigger when the scarab was stolen?',
          response: 'None! The display pedestal lid was NEVER lifted during the blackout. The optical sensor log showed a flat reading, as if the laser beam was never broken.',
          reactionMood: 'surprised'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-emp-capacitor',
          reactionText: 'Cross examines the capacitor: "This isn\'t amateur work. This is a capacitor array wired directly into the secondary bus bar. Whoever planted this knew the HVAC duct layout."',
          stressIncrease: 10
        }
      ]
    },
    {
      id: 'suspect-03-chloe',
      name: 'Chloe Dupuis',
      alias: 'The Laser Systems Engineer',
      role: 'Contract Optical Security Technician',
      age: 32,
      occupation: 'Optoelectronic Systems Specialist',
      relationshipToVictim: 'Installed and calibrated the vault laser defense grid',
      motive: 'Heavily in debt to crypto exchanges; freelance contract expiring this week.',
      alibi: 'Claims she was in the lobby bar having champagne between 01:30 and 02:45.',
      personality: 'Nerdy, talkative, fidgeting with an Allen wrench, wearing technician lanyard.',
      secrets: 'Was paid $5,000 cash by Dr. Rossi yesterday to "align the prisms for a photo shoot".',
      avatarSeed: 'Chloe',
      avatarColor: '#06b6d4',
      dialogueTree: [
        {
          id: 'dlg-cd-1',
          prompt: 'Did you service the laser grid around the Eye of Osiris yesterday?',
          response: 'Yes, standard six-month recalibration. I adjusted the beam sensitivity and replaced the photodiode receivers. Everything was calibrated to 99.98% accuracy.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-cd-2',
          prompt: 'Who asked you to place optical prisms in front of the laser apertures?',
          response: 'Prisms? Wait... Dr. Rossi asked me yesterday if quartz prisms could diffuse the beam so the glare wouldn\'t ruin the high-res documentary photography. I told her it would bypass the alarm if misaligned!',
          reactionMood: 'nervous'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-optical-prism',
          reactionText: 'Chloe inspects the prism: "This is a 45-degree total internal reflection prism! It was slotted right into Pillar 3 to bounce the beam directly into the receiver! That allowed Dr. Rossi to reach in without triggering the alarm!"',
          stressIncrease: 20
        }
      ]
    },
    {
      id: 'suspect-03-tariq',
      name: 'Tariq Al-Mansoor',
      alias: 'The Billionaire Collector',
      role: 'Private Antiquities Collector & Gala Sponsor',
      age: 44,
      occupation: 'Private Equity Titan & Relic Collector',
      relationshipToVictim: 'Offered $25M private purchase last year, rejected by board',
      motive: 'Obsessed with acquiring the Eye of Osiris for his private underground bunker collection.',
      alibi: 'Was seated at Table 1 in the Grand Ballroom drinking vintage Dom Pérignon throughout the night.',
      personality: 'Flamboyant, silk tuxedo, gold watch, confident, amused by police questions.',
      secrets: 'Agreed to wire $10M to Rossi\'s Swiss account once the scarab was smuggled past customs in the laundry cart.',
      avatarSeed: 'Tariq',
      avatarColor: '#eab308',
      dialogueTree: [
        {
          id: 'dlg-t-1',
          prompt: 'You publicly offered $25M for the Eye of Osiris last year.',
          response: 'Indeed. And the trustees foolishly declined. Now look at them: an empty pedestal and egg on their faces. I have the wealth of small nations, detective. I buy treasures legally or at sovereign auctions.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-t-2',
          prompt: 'Did you communicate with Dr. Rossi prior to the gala?',
          response: 'Dr. Rossi is a brilliant Egyptologist. She gives private tours of the catacombs to my foundation. That is the extent of our relationship.',
          reactionMood: 'defensive'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: 'Tariq\'s confident smile freezes: "A lead-lined case in the laundry cart? I... I know nothing of museum laundry logistics. Talk to the cleaning staff."',
          stressIncrease: 35
        }
      ]
    },
    {
      id: 'suspect-03-simon',
      name: 'Simon Bell',
      alias: 'The Night Janitor',
      role: 'Head Custodian (Sub-Levels)',
      age: 58,
      occupation: 'Museum Janitor for 22 years',
      relationshipToVictim: 'Cleans the vault corridors nightly',
      motive: 'Daughter\'s medical surgery bills; has universal keycard to freight elevators.',
      alibi: 'Was buffing the marble floors in the Sub-Level 1 corridor during the blackout.',
      personality: 'Humble, worn hands, timid, wearing blue custodial jumpsuit.',
      secrets: 'Found the lead box hidden in his laundry bin 20 minutes ago and was terrified he would be framed.',
      avatarSeed: 'Simon',
      avatarColor: '#14b8a6',
      dialogueTree: [
        {
          id: 'dlg-sb-1',
          prompt: 'Did you see anyone entering Sub-Level 2 before the blackout?',
          response: 'Around 17:50, Dr. Rossi came down with a heavy leather briefcase. She stayed inside the vault room alone for twenty minutes. She told me not to enter because she was handling fragile artifacts.',
          reactionMood: 'calm'
        },
        {
          id: 'dlg-sb-2',
          prompt: 'Did you notice anyone near the HVAC junction box?',
          response: 'Yesterday morning, I saw Dr. Rossi standing on a step ladder near the ventilation duct with a toolkit. She said the air conditioner was vibrating the display vitrine.',
          reactionMood: 'surprised',
          revealsClueId: 'clue-03-janitor-testimony'
        }
      ],
      evidenceReactions: [
        {
          evidenceId: 'clue-03-lead-box',
          reactionText: 'Simon raises his hands: "Thank God you found it! I swear on my mother\'s grave, someone threw that heavy metal box into my dirty laundry cart right as the alarms went off! I didn\'t touch it!"',
          stressIncrease: 10
        }
      ]
    }
  ],
  evidence: [
    {
      id: 'clue-03-cracked-scarf',
      name: 'Cracked Synthetic Polymer Scarab',
      category: 'Forensic Reports',
      description: 'The replica scarab recovered from the display pedestal cushion.',
      discoveryLocation: 'Pedestal inside Vault Display Hood',
      relevance: 'Proves the swap occurred hours earlier; synthetic resin cracked under display halogen heat.',
      relatedSuspectIds: ['suspect-03-rossi'],
      isCrucial: true,
      details: [
        'Spectroscopic scan: 98% polyurethane resin, copper powder, and cobalt blue synthetic pigment.',
        'Zero ancient mineral components (authentic relic is pure lapis lazuli and gold).',
        'Thermal stress fracture indicates the fake was exposed to the 300W vitrine halogens for over 8 hours (since ~18:00).'
      ],
      iconKey: 'gem'
    },
    {
      id: 'clue-03-emp-capacitor',
      name: 'Timed EMP Surge Capacitor',
      category: 'Physical',
      description: 'A jury-rigged electrical pulse capacitor attached to the emergency relay bus.',
      discoveryLocation: 'HVAC Vent beside Breaker Panel',
      relevance: 'The diversion device used to create the fake "burglary during blackout" scenario.',
      relatedSuspectIds: ['suspect-03-rossi'],
      isCrucial: true,
      details: [
        'Equipped with a digital countdown clock set for 02:15:00.',
        'Delivered a 2,000-volt transient surge, knocking out the main bus bar for 240 seconds.',
        'Fingerprints on the casing: Dr. Helena Rossi.'
      ],
      iconKey: 'zap'
    },
    {
      id: 'clue-03-vault-access-logs',
      name: 'Sub-Level 2 Biometric Access Log',
      category: 'Digital',
      description: 'Digital audit trail from the electronic vault security terminal.',
      discoveryLocation: 'Vault Entrance Terminal',
      relevance: 'Shows the vault was never opened during the 02:15 blackout; Rossi was the sole entrant at 18:00.',
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-cross'],
      isCrucial: true,
      details: [
        '18:00:22 - Dr. Helena Rossi (Biometric + Retina Approved). Exit at 18:22:15.',
        '02:15 to 02:19 - BLACKOUT: Zero biometric scans registered; acrylic hood remained sealed.',
        'Proves the theft was accomplished during the 18:00 window, NOT during the blackout!'
      ],
      iconKey: 'lock'
    },
    {
      id: 'clue-03-optical-prism',
      name: 'Quartz Deflection Prism on Pillar 3',
      category: 'Physical',
      description: 'A 2-inch optical prism slotted into the laser emitter casing.',
      discoveryLocation: 'Laser Emitter Pillar #3',
      relevance: 'Enabled the perpetrator to bypass the laser perimeter without sounding alarms.',
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-chloe'],
      details: [
        'Bypassed the perimeter tripwire by bending the laser beam directly back into the receiving photocell.',
        'Installed during the afternoon under the guise of lighting alignment.'
      ],
      iconKey: 'prism'
    },
    {
      id: 'clue-03-rossi-invoice',
      name: 'Replica Commission Invoice (Florence, Italy)',
      category: 'Documents',
      description: 'An invoice from "Bottega d\'Arte Fiorentina" found in Rossi\'s locker.',
      discoveryLocation: 'Curatorial Staff Locker #4',
      relevance: 'Direct documentary proof that Dr. Rossi commissioned a counterfeit scarab 3 months ago.',
      relatedSuspectIds: ['suspect-03-rossi'],
      isCrucial: true,
      details: [
        'Order: 1:1 Scale Exact Replica of Egyptian 18th Dynasty Scarab (The Eye of Osiris).',
        'Cost: €18,500 paid via private debit card.',
        'Delivery Date: September 22, 2024.'
      ],
      iconKey: 'receipt'
    },
    {
      id: 'clue-03-lead-box',
      name: 'Lead-Lined Travel Box with Real Scarab',
      category: 'Physical',
      description: 'A radiation-shielded lead box containing the authentic Eye of Osiris.',
      discoveryLocation: 'Janitor\'s Laundry Cart, Freight Elevator',
      relevance: 'The stolen artifact itself, recovered before it could be smuggled out to Tariq Al-Mansoor.',
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-tariq', 'suspect-03-simon'],
      isCrucial: true,
      details: [
        'Lead lining prevents X-ray detection at museum security checkpoints.',
        'Contains the authentic 3,000-year-old lapis lazuli scarab.',
        'Stashed in the laundry cart to be wheeled out to the catering dock at 03:00.'
      ],
      iconKey: 'gem'
    },
    {
      id: 'clue-03-janitor-testimony',
      name: 'Simon Bell\'s Witness Statement',
      category: 'Witness Statements',
      description: 'Testimony regarding Rossi installing electrical devices by the HVAC vent.',
      discoveryLocation: 'Security Holding Room',
      relevance: 'Links Dr. Rossi directly to the surge capacitor installation.',
      relatedSuspectIds: ['suspect-03-rossi', 'suspect-03-simon'],
      details: [
        'Witnessed Rossi working on the HVAC vent ladder with wire strippers yesterday morning.'
      ],
      iconKey: 'message'
    }
  ],
  canonConnections: [
    {
      id: 'c3-conn-01',
      sourceId: 'clue-03-vault-access-logs',
      targetId: 'clue-03-cracked-scarf',
      label: 'The Phantom Blackout',
      deductionNotes: 'The display vitrine was never opened during the 02:15 blackout! The resin fake was swapped at 18:00 by Dr. Rossi; the blackout was merely a theatrical smoke screen!',
      isContradiction: true,
      bonusPoints: 200
    },
    {
      id: 'c3-conn-02',
      sourceId: 'clue-03-emp-capacitor',
      targetId: 'suspect-03-rossi',
      label: 'Staged Power Cut',
      deductionNotes: 'The surge capacitor on the emergency relay bears Dr. Rossi\'s fingerprints and was planted during her HVAC "inspection" yesterday.',
      isContradiction: false,
      bonusPoints: 175
    },
    {
      id: 'c3-conn-03',
      sourceId: 'clue-03-rossi-invoice',
      targetId: 'clue-03-cracked-scarf',
      label: 'Premeditated Forgery',
      deductionNotes: 'The invoice in Rossi\'s locker proves she commissioned an identical polymer replica from Florence 3 months ago to execute this exact substitution.',
      isContradiction: false,
      bonusPoints: 200
    },
    {
      id: 'c3-conn-04',
      sourceId: 'clue-03-lead-box',
      targetId: 'suspect-03-tariq',
      label: 'Smuggling Channel',
      deductionNotes: 'The lead-lined case was hidden in the custodial cart destined for the catering dock, where Tariq Al-Mansoor\'s private transport was waiting to receive it.',
      isContradiction: false,
      bonusPoints: 175
    }
  ],
  timelineEvents: [
    {
      id: 'tl3-01',
      timestamp: 'Yesterday 10:00',
      timeSortValue: 600,
      title: 'Rossi Plants the Surge Capacitor',
      description: 'Dr. Rossi climbs the HVAC maintenance ladder and clips the timed pulse capacitor into the emergency generator relay bus.',
      source: 'Simon Bell\'s Statement & Breaker Forensics',
      verifiedLocation: 'HVAC Vent / Sub-Level 2',
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 0
    },
    {
      id: 'tl3-02',
      timestamp: 'Yesterday 14:00',
      timeSortValue: 840,
      title: 'Deflection Prism Placed on Laser Emitter',
      description: 'Under the pretense of photographic glare reduction, Rossi attaches the quartz optical deflection prism to Pillar 3, looping the laser beam.',
      source: 'Chloe Dupuis\'s Technical Audit',
      verifiedLocation: 'Vault Pillar #3',
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 1
    },
    {
      id: 'tl3-03',
      timestamp: '18:00',
      timeSortValue: 1080,
      title: 'The Real Theft: Rossi Swaps the Relic',
      description: 'Dr. Rossi enters the vault for her pre-gala inspection, unlocks the pedestal vitrine, substitutes the Florence resin counterfeit, and hides the genuine scarab in her briefcase.',
      source: 'Biometric Access Logs & Thermal Stress Analysis',
      verifiedLocation: 'Display Pedestal Vault',
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 2
    },
    {
      id: 'tl3-04',
      timestamp: '01:45',
      timeSortValue: 1545,
      title: 'Rossi Takes the Stage in the Ballroom',
      description: 'Dr. Rossi begins her keynote speech in the Grand Ballroom upstairs in front of 200 donors, establishing her public alibi.',
      source: 'Ballroom Video & Donor Witnesses',
      verifiedLocation: 'Main Gala Ballroom',
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 3
    },
    {
      id: 'tl3-05',
      timestamp: '02:15',
      timeSortValue: 1575,
      title: 'The Timed EMP Surge Fires',
      description: 'The countdown capacitor triggers, delivering a 2,000V spike that trips the main power breakers and plunges the museum into a 4-minute blackout.',
      source: 'Capacitor Timer & Breaker Log',
      verifiedLocation: 'Sub-Level 2 Breaker Room',
      correctIndex: 4
    },
    {
      id: 'tl3-06',
      timestamp: '02:19',
      timeSortValue: 1579,
      title: 'Power Restored; The "Discovery"',
      description: 'Emergency generators fire up. Security rushes the vault to find the vitrine untouched, but the scarab on the pedestal has cracked under the heat.',
      source: 'Security Console Incident Log',
      verifiedLocation: 'Sub-Level 2 Vault',
      correctIndex: 5
    },
    {
      id: 'tl3-07',
      timestamp: '02:45',
      timeSortValue: 1605,
      title: 'Relic Stashed in Janitor\'s Cart',
      description: 'The genuine scarab in its lead-lined box is planted into Simon Bell\'s laundry cart to be wheeled out through the loading bay to Tariq\'s courier.',
      source: 'Freight Dock Intercept',
      verifiedLocation: 'Sub-Level 1 Elevator Foyer',
      relatedSuspectId: 'suspect-03-rossi',
      correctIndex: 6
    }
  ],
  hints: [
    {
      level: 1,
      cost: 50,
      title: 'Look at the Biometric Log',
      hintText: 'Check the biometric access records for the vault vitrine during the blackout. Was the glass hood ever unlocked between 02:15 and 02:19?'
    },
    {
      level: 2,
      cost: 100,
      title: 'The Blackout Was a Illusion',
      hintText: 'The theft did not occur during the blackout. The blackout was engineered with a timed capacitor to create a false timeline.'
    },
    {
      level: 3,
      cost: 200,
      title: 'The Genuine Swap',
      hintText: 'Dr. Helena Rossi swapped the real scarab with an Italian polymer replica during her private 18:00 inspection, eight hours before the gala blackout!'
    }
  ],
  solution: {
    culpritId: 'suspect-03-rossi',
    culpritName: 'Dr. Helena Rossi (Chief Curator)',
    motiveDescription: 'Facing personal bankruptcy and $2.4M in excavation debts, she conspired to sell the genuine Eye of Osiris to private buyer Tariq Al-Mansoor for $10,000,000.',
    methodDescription: 'Swapped the real scarab for a Florence resin replica at 18:00 using a deflecting optical prism. Staged the 02:15 blackout with a timed EMP capacitor while she was on stage to establish an unbreakable alibi.',
    approximateTime: '18:00 (Theft) / 02:15 (Staged Blackout)',
    crucialEvidenceIds: [
      'clue-03-cracked-scarf',
      'clue-03-emp-capacitor',
      'clue-03-vault-access-logs',
      'clue-03-rossi-invoice',
      'clue-03-lead-box'
    ],
    falseAlibiSuspectId: 'suspect-03-rossi',
    fullCaseDebriefing:
      'Dr. Helena Rossi executed what seemed like the perfect crime. Plagued by $2.4M in catastrophic excavation debts, she conspired to steal the $18,000,000 Eye of Osiris and sell it to billionaire collector Tariq Al-Mansoor.\n\nThree months prior, Rossi commissioned an exact polymer resin replica from an artisan atelier in Florence. Yesterday, she placed a quartz deflection prism over laser Pillar 3 to blind the optical security grid, and wired a timed high-voltage pulse capacitor into the HVAC emergency circuit.\n\nThe real heist took place at 18:00 during her official pre-gala inspection. With the laser deflected, Rossi unlocked the acrylic vitrine, swapped the authentic ancient relic for the polyurethane counterfeit, and walked out with the genuine scarab in her briefcase. At 02:15, while Rossi stood prominently on stage in front of 200 guests delivering her keynote speech, the timer triggered the electrical capacitor, cutting museum power for 4 minutes.\n\nRossi assumed police would deduce the theft took place during the 4-minute blackout while she had a crowd of 200 witnesses. However, spectroscopic analysis proved the fake scarab had been under the display lights for over 8 hours (causing thermal cracking), and the biometric terminal confirmed the vitrine was never opened during the blackout. When detectives recovered the genuine scarab in the lead box intended for Tariq\'s courier, Rossi\'s master plan collapsed.',
    options: {
      motives: [
        { id: 'm-rossi-debt', label: 'Overcoming $2.4M in personal excavation bankruptcy by selling the relic to a private collector' },
        { id: 'm-security-revenge', label: 'Security chief retaliating against the museum board for pension cuts' },
        { id: 'm-janitor-medical', label: 'Stealing the relic to pay for urgent family medical surgeries' },
        { id: 'm-insurance-fraud', label: 'Museum board seeking an $18,000,000 insurance payout' }
      ],
      methods: [
        { id: 'met-rossi-swap', label: 'Swapped relic at 18:00 with Florence resin replica; staged 02:15 blackout with timed capacitor to fake an alibi' },
        { id: 'met-hvac-ninja', label: 'Infiltrated vault through HVAC shaft during blackout wearing night-vision goggles' },
        { id: 'met-cloned-keycard', label: 'Cloned universal janitorial keycard and grabbed relic in the dark' },
        { id: 'met-laser-glitch', label: 'Remotely disabled laser system from laptop in the lobby bar' }
      ],
      times: [
        { id: 't-1800', label: 'At 18:00 during the pre-gala curator inspection (with blackout staged at 02:15)' },
        { id: 't-0215', label: 'At 02:15 during the 4-minute electrical blackout' },
        { id: 't-0245', label: 'At 02:45 after the Gala concluded' },
        { id: 't-yesterday', label: 'Yesterday morning during laser calibration' }
      ]
    }
  }
};
