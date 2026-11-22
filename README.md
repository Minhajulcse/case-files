# CASE FILES — Detective Investigation Game

A dark noir, logic-driven, story-rich interactive detective investigation game built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Players step into the shoes of a homicide investigator tasked with solving complex fictional criminal cases by examining forensic crime scenes, cross-examining suspects, analyzing contradictions, weaving connections on an evidence board, chronologically sequencing timelines, and submitting formal indictments.

---

## 🔍 Game Overview

### 1. Visual Direction & Atmosphere
- **Cinematic Noir Aesthetic**: Dark charcoal background tones (`#08080a`), blood-red accents (`#dc2638`), antique brass and manila folder textures, CRT scanline overlays, and elegant serif typography.
- **Procedural Web Audio Engine**: 100% synthesized audio via the Web Audio API — low cello sub-bass drone, rain noise, mechanical typewriter keystrokes, camera shutter clicks, pin tack sounds, paper rustles, and dramatic deduction chords. No broken external audio links or dependencies.

---

## 📁 Playable Case Files

### **Case 001: THE LAST ALIBI** (Locked Manor Murder)
- **Victim**: Lord Arthur Pendelton (Industrialist & Rare Antiquities Collector)
- **Setting**: Pendelton Manor, Private Victorian Study, Blackthorn Ridge
- **Premise**: Arthur is found dead at his desk, poisoned with potassium cyanide in his vintage brandy. The door is bolted from the inside; the bay window is latched from the inside.
- **5 Suspects**:
  1. *Julian Pendelton* (Nephew in massive gambling debt)
  2. *Evelyn Vance* (Quiet archivist siphoning foundation funds)
  3. *Dr. Alistair Finch* (Personal physician with toxicological access)
  4. *Beatrice Morales* (Housekeeper who carried the drink tray)
  5. *Marcus Kane* (Ruthless commercial antiquities rival)
- **The Mystery**: How was the room sealed from the outside? The broken grandfather clock at 22:14 shatters Evelyn's claimed 22:30 conversation, and the waxed nylon thread on the rose garden thorn reveals how the latch was pulled from outside.

### **Case 002: THE MISSING WITNESS** (Staged Kidnapping)
- **Subject**: Clara Thorne (Crown whistleblower in the Blackwood Syndicate trial)
- **Setting**: Federal Safehouse Room 404, St. Jude Apartments
- **Premise**: Clara vanishes 12 hours before trial. The door was kicked in, furniture overturned, blood on the rug, and her guard knocked out.
- **5 Suspects**:
  1. *Detective Ray Navarro* (Protection detail leader with $25k offshore deposit)
  2. *Thomas Sterling* (Syndicate defense attorney)
  3. *Maya Lin* (Clara's sister who visited disguised as a courier)
  4. *Viktor Kozlov* (Syndicate hitman caught on street cameras)
  5. *Isaac Vance* (Superintendent who holds steam conduit tunnel keys)
- **The Mystery**: Clara discovered Navarro's betrayal via burner phone radio chatter, staged her own kidnapping with theatrical prop blood, and escaped via the underground boiler conduit to Montreal.

### **Case 003: THE MUSEUM HEIST** (Grand Relic Theft)
- **Subject**: The *Eye of Osiris* ($18,000,000 ancient sapphire scarab)
- **Setting**: Metropolitan Museum of Antiquities, Sub-Level 2 High-Security Vault
- **Premise**: The scarab disappears during a 4-minute electrical blackout during the VIP Gala. The pedestal holds only a cracked synthetic resin fake.
- **5 Suspects**:
  1. *Dr. Helena Rossi* (Chief Egyptology Curator with $2.4M excavation bankruptcy)
  2. *Nathan Cross* (Head of Museum Security who bypassed generator relays)
  3. *Chloe Dupuis* (Laser systems engineer who calibrated optical sensors)
  4. *Tariq Al-Mansoor* (Billionaire private collector at Table 1)
  5. *Simon Bell* (Night custodian with master keycard)
- **The Mystery**: The blackout was an alibi diversion triggered by a timed EMP capacitor. Dr. Rossi swapped the genuine relic 8 hours earlier at 18:00 using a laser-deflecting optical prism.

---

## 🛠️ Investigation Mechanics & Systems

1. **Interactive Crime Scene Exploration**:
   - 2D SVG vector scenes for each case (Victorian Study, Safehouse 404, Sub-Level 2 Vault).
   - Clickable investigation hotspots with pulsing discovery rings.
   - Flashlight spotlight mode, zoom levels (100% to 200%), and macro-photographic evidence modals.
2. **Evidence Locker**:
   - Categorized across: *Physical, Documents, Digital, Witness Statements, Photographs, Forensic Reports*.
   - Search bar and category filters.
   - Reagent & mass spectrometry analysis simulator.
   - Pin key evidence to the top of your locker.
   - Undiscovered clues remain locked without premature spoilers.
3. **Suspect Interrogation & Cross-Examination**:
   - 5 suspects per case with detailed dossiers (motives, alibis, secrets).
   - Real-time psychological stress meter (0% to 100%).
   - Branching dialogue tree with mood reactions (*Calm, Nervous, Defensive, Hostile, Surprised*).
   - **"Present Evidence"** confrontation system: confronting suspects with contradictory clues shatters their defenses and exposes perjuries.
4. **Interactive Evidence Pinboard**:
   - Corkboard surface with polaroids and index cards connected by red yarn.
   - Point-and-click or link builder for desktop and mobile touch devices.
   - Evaluates links against canonical contradictions and unlocks deductive breakthroughs.
5. **Timeline Chronology Reconstruction**:
   - Interactive reordering of timestamps and events.
   - "Verify Sequence" gives contextual investigative guidance.
6. **Final Indictment & Scoring**:
   - 6-part formal indictment: Culprit, Motive, Modus Operandi, Incident Time, Key Evidence, and False Alibi.
   - Evaluated by the deduction engine: accuracy score, points awarded, and performance grades (`S+`, `A`, `B`, `C`, `F`).
   - Detective rank progression from **Rookie Detective** to **Legendary Investigator**.
   - Comprehensive canonical debriefing narrative for each solved case.
7. **3-Tier Hint System**:
   - Subtle clue (Tier 1: -50 pts), Comparative clue (Tier 2: -100 pts), Direct deduction (Tier 3: -200 pts).
8. **Persistence & Autosave**:
   - Real-time autosave to `localStorage`.
   - Resume ongoing investigation from the main menu anytime.

---

## 🚀 Running the Game

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Run Tests
```bash
npm test
```

### Preview Production Build
```bash
npm run preview
```
