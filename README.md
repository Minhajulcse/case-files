# CASE FILES

A bilingual English and Bangla detective game for mobile and desktop. React, TypeScript and Tailwind render the archive, crime scenes, interviews, evidence board and final report. The game keeps progress in local storage and synthesises its sound locally with Web Audio.

## Play

Open a case file and read the chief’s briefing. The archive contains three investigations.

- **The Last Alibi** takes place in a locked study at Pendelton Manor.
- **The Missing Witness** follows a missing court witness through Room 404 and the boiler passage below.
- **The Museum Heist** connects a damaged museum exhibit to the freight dispatch room.

Tap an object in the scene to open its field observation. Collect its exhibit or return to the image. The eye control shows optional markers. Zoom enlarges the photograph and its hit regions together, and the enlarged image can be scrolled. The object index also supports keyboard and assistive navigation.

The locker supports search, category filters, pinned exhibits and item-specific lab records. Interview the five suspects, present exhibits, and use **Compare statements** to read two dossiers together. Interviews can produce further records. The timeline admits events as their sources enter the locker.

Draw connections on the evidence board by selecting two pins or using **Link Nodes**. Each case has three lines of inquiry. A recorded link and its independent sources substantiate an inquiry. A supported inquiry lists its exhibits for citation. The notebook, links, interview history, report draft and verdict survive reopening the case. The three optional consultation levels cost 50, 100 and 200 points. Field inspections are free.

File the accusation once the three inquiries have support. A returned report stays open for revision. A supported, accurate report unlocks the reconstruction, grade and career points.

## Development

Use Node 22.12 or newer from a version supported by Vitest 5. The development and production commands are:

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

To exercise the built application in Chromium, run the following after building. The runner starts its own local server and an isolated browser profile. Set `CHROME_BIN` to the Chromium executable if it differs from `google-chrome`.

```sh
npm run test:browser
```

The browser suite plays Case 001 through a verdict, switches languages during the investigation, reopens a legacy save, and checks the two upcoming archive entries. The unit tests cover evidence, solutions and character names in all three case files.

## Android

The Capacitor configuration packages `dist`. Images, fonts and sounds work offline using local assets, system typefaces and Web Audio. This source distribution contains the web application and its Capacitor configuration. For an existing Android host, use its registered application ID and its installed Capacitor major. Build the web application and run `npx cap sync android` in that project.

To create a native host from this checkout on a machine with Android Studio and its Android SDK, use matching Capacitor packages. For example, with Capacitor 7:

```sh
npm install @capacitor/core@7 @capacitor/android@7
npm install --save-dev @capacitor/cli@7
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

The default application ID is `com.casefiles.detective`. Confirm the ID used for an existing Play Store release before creating its host.

## Case authoring

Each file in `src/data/cases` owns its bilingual text, evidence, scene regions, locations, interviews, timeline sources, deductions and solution. Region coordinates are percentages of the complete image. A rectangle uses a centre and dimensions. A polygon uses absolute percentage vertices. Both use the same geometry for interaction and drawing.

Each deduction specifies the supporting exhibit IDs and accepted board connections. Suspect connections can require additional independent evidence before they register as contradictions. The investigation tests check exhibit reachability from an empty save, link references, coverage of the solution, and hotspot hit testing at different sizes and zoom levels.

## Character names

The cast in `src/data/characters.ts` supplies the names for dossiers and case prose. Each locale can refer to a person by their full name, given name, surname or initials. Case logic and saved progress refer to the same IDs in both languages. Players who enter their own detective name see it as entered.

| Case | Character | Stable ID | English | বাংলা |
| --- | --- | --- | --- | --- |
| All | Player detective | `player-detective` | Detective Cole | গোয়েন্দা আদিল হাসান |
| 001 | Manor owner | `victim-01-arthur` | Lord Arthur Pendelton | লর্ড অনিরুদ্ধ রায়চৌধুরী |
| 001 | Nephew | `suspect-01-julian` | Julian Pendelton | অর্ক রায়চৌধুরী |
| 001 | Archivist | `suspect-02-evelyn` | Evelyn Vance | মাধবী বৈদ্য |
| 001 | Family physician | `suspect-03-finch` | Dr. Alistair Finch | ডা. আনিস ফারুক |
| 001 | Housekeeper | `suspect-04-beatrice` | Beatrice Moore | বীণা গোমেজ |
| 001 | Antiquities dealer | `suspect-05-marcus` | Marcus Kane | কামাল করিম |
| 002 | Missing witness | `witness-02-clara` | Clara Thorne | নুসরাত হক |
| 002 | Defendant | `defendant-02-blackwood` | Blackwood | মজুমদার |
| 002 | Protection officer | `suspect-02-navarro` | Detective Ray Nolan | গোয়েন্দা রাশেদ খান |
| 002 | Defense counsel | `suspect-02-sterling` | Thomas Sterling | অমিতাভ সেন |
| 002 | Witness’s half-sister | `suspect-02-maya` | Lily Foster | তুলি দাশ |
| 002 | Syndicate enforcer | `suspect-02-kozlov` | Victor Shaw | বিপ্লব শিকদার |
| 002 | Building superintendent | `suspect-02-isaac` | Isaac Vance | ইদ্রিস মণ্ডল |
| 003 | Curator | `suspect-03-rossi` | Dr. Helena Ross | ড. লাবণী বসু |
| 003 | Security chief | `suspect-03-cross` | Nathan Cross | প্রদীপ পাল |
| 003 | Optical engineer | `suspect-03-chloe` | Chloe Bennett | তন্বী ঘোষ |
| 003 | Collector | `suspect-03-tariq` | Edmund Ashford | মাহবুব সিদ্দিকী |
| 003 | Custodian | `suspect-03-simon` | Simon Bell | হরিপদ নন্দী |
