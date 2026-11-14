/* Trainingsplan – hier Übungen ändern.  Version 3 · Phase IV ab Woche 17 (14.11.2026)
   Felder je Übung:
   id     eindeutige Kennung (NICHT ändern, sonst geht der Verlauf dieser Übung verloren)
   n      Name                      z     Ziel (Text)
   sets   Anzahl Sätze              kg    true = mit Gewicht
   unit   'wdh' (Standard), 's', 'kg', 'cm', 'grad', 'm', 'pkt'
   side   true = getrennt links/rechts
   rest   Pause in Sekunden (optional, sonst Standard aus Einstellungen)
   bfr    true = BFR-Block           cue   Ausführungshinweis
   start  Startgewicht in kg für die erste Einheit im neuen Plan (gilt nur, solange seit 'since' noch nichts eingetragen ist)
   lsi    true = Seitenvergleich rechts/links × 100 anzeigen (Test-Tag)
   diff   true = Differenz rechts − links anzeigen (Umfang)
   label  (je Tag) angezeigter Buchstabe. Interne Schlüssel A–D nie ändern, sonst passen alte Einheiten nicht mehr.
   Übungen, die aus dem Plan fliegen, gehören nach ARCHIV – dann bleiben Verlauf und Fortschritt sichtbar.
*/
window.PLAN = {
  since: '2026-11-14',        // ab diesem Datum gilt dieser Plan
  firstTest: '2026-11-25',    // erster Test-Tag fällig ab
  testEvery: 35,              // danach alle 35 Tage (ca. 6 Zyklen)
  order: ['A', 'C', 'B', 'D'], // on-on-off: Beine 1, Pull, Pause, Beine 2, Push, Pause (angezeigt als A, B, C, D)

  /* Täglich 10–15 min, auch an Pausentagen */
  activation: [
    ['Quadrizeps-Set mit Tastkontrolle', '3 × 10 × 5 s', 'Langsitz, Hand außen auf dem Vastus lateralis. Maximal anspannen, bis er unter der Hand hart wird.'],
    ['Terminal Knee Extension mit Band', '3 × 15 rechts', 'Band in der Kniekehle, aus 30° in volle Streckung, 2 s halten. Fuß leicht außenrotiert.'],
    ['Spanish Squat isometrisch', '3 × 45 s', 'Band hinter beiden Knien an festem Pfosten, Schienbeine senkrecht, 70–90° halten.'],
    ['Einbeinstand rechts', '2 × 45 s', 'Becken waagerecht. Ab Woche 2 Augen zu oder auf Kissen.'],
    ['Monster Walk (Stop-X)', '2 × 15 Schritte je Richtung', 'Miniband über den Knien, Knie fällt nicht nach innen.'],
    ['Ausfallschritt mit Rotation (Stop-X)', '1 × 6 je Seite', 'Oberkörper zur Seite des vorderen Beins drehen.'],
    ['Flexionsmobilisation', '2 × 10 + 10 × 5 s', 'Fersensitz-Schaukeln im Vierfüßlerstand, dann Heel Slide mit Handtuch. Ziehen vorn ok, Einklemmen hinten innen nicht.']
  ],

  warmups: {
    a: [
      ['Rad', '5 min locker', 'Trittfrequenz 85–95.'],
      ['Aktivierung 1–3', 'Quad-Set · TKE · Spanish Squat', 'Wenn heute noch nicht gemacht.'],
      ['Kniehebelauf auf der Stelle (Stop-X)', '2 × 20 s', 'Niedrig, leise, auf dem Vorfuß.'],
      ['Triple Extension (Stop-X)', '2 × 8', 'Sprunggelenk, Knie, Hüfte gleichzeitig strecken.'],
      ['Kniebeuge auf Wackelbrett (Stop-X)', '2 × 8', 'Knie über der 2. Zehe.']
    ],
    b: [
      ['Rad', '5 min locker', ''],
      ['Hamstring Stretch Flow (Stop-X)', '1 × 5', 'Langsam, Entnahmestelle nicht zerren.'],
      ['ShinBox mit Hüftextension (Stop-X)', '1 × 5 je Seite', 'Tiefe Flexion ist jetzt frei.'],
      ['Bosuball Kicks (Stop-X)', '2 × 8', 'Standbein rechts.'],
      ['Catch & Reach (Stop-X)', '2 × 6', 'Becken stabil, Knie über dem Fuß.']
    ],
    c: [
      ['Rudergerät / Crosstrainer', '5 min locker', ''],
      ['Catch & Reach (Stop-X)', '2 × 6', ''],
      ['Band Pull-Apart', '2 × 15', 'Arme gestreckt, Schulterblätter zusammen.'],
      ['Klimmzüge mit Band', '2 × 3 leicht', '']
    ],
    d: [
      ['Rudergerät / Crosstrainer', '5 min locker', ''],
      ['Rotation mit Wurf (Stop-X)', '2 × 8 je Seite', 'Medizinball 3 kg, Rotation aus der Brustwirbelsäule.'],
      ['Liegestütz', '1 × 10', ''],
      ['Leichter Aufwärmsatz Bankdrücken', '1 × 10', 'ca. 50 % Arbeitsgewicht.']
    ],
    t: [
      ['Rad', '8 min locker', 'Ausgeruht testen – nicht nach einem Beintag.'],
      ['Aktivierung 1–3', 'Quad-Set · TKE · Spanish Squat', ''],
      ['2 Aufwärmsätze je Gerät', '10 · 5 Wdh. leicht', 'Vor jedem 10RM-Test.']
    ]
  },

  days: {
    A: { name: 'Beine 1', sub: 'Quadrizeps · einbeinig betont', warmup: 'a', leg: true, ex: [
      { id:'a_plyo', n:'Box Jump + Snap-down', z:'3 × 5 + 2 × 5 · nach Test: Jump Linear 3 × 5', sets:3, kg:false, rest:60, cue:'Box 30–40 cm. Hochspringen, absteigen – nicht abspringen. Landung leise, Knie über 2. Zehe. Nach bestandenem Test-Tag: Jump Linear (Stop-X) beidbeinig.' },
      { id:'a_hack', n:'Hackenschmidt-Kniebeuge', z:'4 × 6–10 · RIR 2–3', sets:4, kg:true, start:40, rest:150, cue:'Startgewicht: Schlitten + ca. 40 kg. Tiefe zunächst bis ca. 100°, volle Tiefe erst bei gemessener Flexion ≥ 130°. 3 s ab. Gewicht = Zusatzlast ohne Schlitten.' },
      { id:'a_presse1', n:'Beinpresse einbeinig', z:'R 4 × 8–12 · L 3 × 8–12', sets:4, kg:true, start:60, side:true, rest:90, cue:'Start ca. 60 kg. Rechts zuerst, links gleiche Last und Wdh. – nie mehr. 4. Satz nur rechts (L leer lassen).' },
      { id:'a_ext1', n:'Beinstrecker einbeinig 90–40°', z:'R 4 × 12–15 · L 2 × 12–15', sets:4, kg:true, side:true, rest:75, cue:'Bewegungsbegrenzer auf 40°. Oben 2 s halten, 3 s ab. Wichtigste Übung für den Vastus lateralis. Ab 17.01.2027 volle Amplitude. Sätze 3–4 nur rechts.' },
      { id:'a_bss', n:'Bulgarian Split Squat', z:'3 × 8–10 je Seite', sets:3, kg:true, start:10, side:true, rest:90, cue:'Start 2 × 10 kg (Gewicht = je Hand). Vorderer Fuß näher an der Bank → mehr Quadrizeps. Knie über der 2. Zehe.' },
      { id:'a_lungepull', n:'Ausfallschritt mit seitlichem Zug (Stop-X)', z:'2 × 8 je Seite', sets:2, kg:true, start:10, side:true, cue:'Kabel 10 kg, Zug kommt von innen – Knie hält gegen das Einknicken.' },
      { id:'a_wade1', n:'Wadenheben einbeinig', z:'3 × 12–15 je Seite', sets:3, kg:true, start:10, side:true, cue:'KH 10 kg. Volle Amplitude, oben 2 s. Einmal pro Zyklus Max-Test ohne Last (Ziel ≥ 25).' }
    ]},
    B: { label:'C', name: 'Beine 2', sub: 'Hüfte, hintere Kette, Beinbeuger', warmup: 'b', leg: true, ex: [
      { id:'b_plyo', n:'Side Hop beidbeinig (Stop-X)', z:'3 × 10 · erst nach Test-Tag', sets:3, kg:false, rest:60, cue:'Über eine Linie, klein und schnell. Vor dem Test-Tag stattdessen seitliche Landestabilisation beidbeinig 3 × 5.' },
      { id:'b_trapbar', n:'Kreuzheben Trap Bar (Stop-X)', z:'4 × 5–6 · RIR 2–3', sets:4, kg:true, start:80, rest:150, cue:'Start 80 kg. Hüfte und Knie gleichzeitig strecken, Rücken neutral. +5 kg pro Zyklus, max. +10 %.' },
      { id:'b_hipthrust', n:'Hip Thrust', z:'3 × 6–10', sets:3, kg:true, start:100, rest:120, cue:'Start 100 kg. Schulterblätter auf der Bank, Kinn zur Brust, oben 1 s Gesäß maximal anspannen.' },
      { id:'b_curl', n:'Beinbeuger sitzend', z:'3 × 10–12 + R 1 × 12', sets:4, kg:true, rest:90, cue:'Zyklus 1–2 bewusst leicht (RPE 6) – Entnahmestelle Semitendinosus. Danach normal steigern. 4. Satz einbeinig rechts.' },
      { id:'b_hampull', n:'Hamstring Pulls einbeinig', z:'3 × 8 je Seite · nur Zyklus 1–2', sets:3, kg:false, side:true, cue:'Rückenlage, Brücke halten, Ferse auf Slider/Ball weg und heran. Ab Zyklus 3 durch Nordics ersetzen.' },
      { id:'b_nordic', n:'Nordic Hamstrings (Stop-X)', z:'ab Zyklus 3: 2 × 4 → 3 × 6', sets:3, kg:false, rest:120, cue:'Nur exzentrisch, so weit kontrolliert möglich, mit Band-Unterstützung. Ziehen an der Entnahmestelle = Abbruch.' },
      { id:'b_stepdown', n:'Step-down frontal / Step-up', z:'3 × 10 je Seite', sets:3, kg:true, side:true, cue:'Im Wechsel: Step-down 25 cm mit 2 × 10 kg (Ferse tippt nur) und Step-up mit 14 → 20 kg. Frontal filmen.' },
      { id:'b_copen', n:'Copenhagen langer Hebel', z:'3 × 6–8 je Seite', sets:3, kg:false, side:true, cue:'Fuß auf der Bank. Gracilis belassen → Adduktoren voll belastbar.' },
      { id:'b_sideplank', n:'Side Plank + Abduktion', z:'2 × 30–45 s je Seite', sets:2, kg:false, unit:'s', side:true, cue:'Gestreckt, oberes Bein heben.' }
    ]},
    C: { label:'B', name: 'Pull', sub: 'Rücken, Bizeps, Core + Quad-Mikrodosis', warmup: 'c', ex: [
      { id:'c_klimmzug', n:'Klimmzug', z:'3–4 × max. sauber · 1 Wdh. Reserve', sets:4, kg:true, rest:120, cue:'Schulterblätter zuerst nach unten-hinten. Unter 4 Wdh. pro Satz: Band. Ziel 4 × 8, dann Zusatzgewicht (kg = Zusatzgewicht, leer = Körpergewicht).' },
      { id:'c_ruderzug', n:'Rudern sitzend (Ruderzug)', z:'3 × 6–10', sets:3, kg:true, rest:120, cue:'Start 93 kg. Brust am Polster, hinten 1 s halten.' },
      { id:'c_1armrow', n:'1-Arm Rudern im Ausfallschritt (Stop-X)', z:'3 × 8–10 je Seite', sets:3, kg:true, start:24, side:true, cue:'Kabel/KH 24 kg. Rechtes Bein vorn, wenn links zieht – Standbeinkontrolle unter Rotation.' },
      { id:'c_latzug', n:'Latzug dual (Back-off)', z:'3 × 8–12 · letzter Satz bis Versagen', sets:3, kg:true, rest:120, cue:'Nach dem Klimmzug, holt das Volumen. Auch einarmig möglich. Ab 3 × 8 Klimmzügen nur noch 2 Sätze.' },
      { id:'c_facepull', n:'Face Pull', z:'3 × 15–20', sets:3, kg:true, cue:'Seil zur Stirn, Ellbogen hoch, Daumen nach hinten drehen.' },
      { id:'c_hammer', n:'Hammer-Curl', z:'3 × 8–12', sets:3, kg:true, start:12, cue:'Start 12 kg. Ellbogen fixiert, kein Schwung.' },
      { id:'a_pallof', n:'Pallof Press', z:'3 × 12 je Seite', sets:3, kg:true, side:true, cue:'Anti-Rotation, Rumpf bleibt ruhig. Im Supersatz mit Suitcase Carry.' },
      { id:'c_carry', n:'Suitcase Carry', z:'3 × 30 m je Seite', sets:3, kg:true, start:24, unit:'m', side:true, cue:'24 kg. Gewicht links tragen fordert die rechte Hüfte. Aufrecht, nicht zur Seite kippen.' },
      { id:'x_quad', n:'Quad-Mikrodosis: Beinstrecker rechts (BFR)', z:'30-15-15-15 · 30 s Pause', sets:4, kg:true, bfr:true, rest:30, cue:'90–40°, 20–30 % 1RM, 50–80 % Verschlussdruck. Ohne Manschette: 3 × 20 mit 2 Wdh. Reserve. Danach Rad 25 min Zone 2 oder Laufeinheit.' }
    ]},
    D: { name: 'Push', sub: 'Brust, Schulter, Trizeps + Quad-Mikrodosis', warmup: 'd', ex: [
      { id:'d_khbank', n:'KH-Bankdrücken flach', z:'4 × 6–10', sets:4, kg:true, rest:120, cue:'Doppelprogression: erst 4 × 10 mit 24 kg, dann 26 kg. Ellbogen ca. 45°.' },
      { id:'d_1armpress', n:'1-Arm Press mit Ausfallschritt (Stop-X)', z:'3 × 8–10 je Seite', sets:3, kg:true, start:14, side:true, rest:90, cue:'Start 14 kg. Rechtes Knie abwechselnd vorn und hinten. Rippen unten.' },
      { id:'d_schraeg', n:'KH-Schrägbankdrücken', z:'3 × 8–12', sets:3, kg:true, cue:'Bank ca. 30°, 18 kg.' },
      { id:'d_kabelrudern', n:'Sitzendes Kabelrudern', z:'3 × 10–15', sets:3, kg:true, cue:'Bleibt für die Balance Zug/Druck. Erst Schulterblätter zurück, dann Arme.' },
      { id:'d_seitheben', n:'Seitheben (Kabel oder KH)', z:'3 × 12–20', sets:3, kg:true, cue:'Bei 3 × 20 mit 8 kg: 10 kg.' },
      { id:'d_trizeps', n:'Trizeps-Pushdown', z:'3 × 10–15', sets:3, kg:true, cue:'Im Supersatz mit Reverse Curl.' },
      { id:'d_revcurl', n:'Reverse Curl', z:'3 × 10–15', sets:3, kg:true, cue:'Obergriff, Handgelenke gerade.' },
      { id:'x_quad', n:'Quad-Mikrodosis: Beinstrecker rechts (BFR)', z:'30-15-15-15 · 30 s Pause', sets:4, kg:true, bfr:true, rest:30, cue:'90–40°, 20–30 % 1RM, 50–80 % Verschlussdruck. Ohne Manschette: 3 × 20 mit 2 Wdh. Reserve. Danach Rad 25 min Zone 2 oder Laufeinheit.' }
    ]},
    T: { name: 'Test', sub: 'Seitenvergleich · alle 6 Zyklen', warmup: 't', leg: true, test: true, ex: [
      { id:'t_flex', n:'Flexion (Goniometer-App)', z:'Rückenlage · Ziel ≥ 90 % der Gegenseite', sets:1, kg:false, unit:'grad', side:true, lsi:true, rest:30, cue:'Ferse Richtung Gesäß ziehen, Winkel per Handy messen. Vor der OP: 140°.' },
      { id:'t_fga', n:'Fersen-Gesäß-Abstand', z:'Bauchlage, passiv', sets:1, kg:false, unit:'cm', side:true, diff:true, rest:30, cue:'Ferse so weit wie möglich zum Gesäß, Abstand messen. Kleiner = besser.' },
      { id:'t_umf10', n:'Umfang 10 cm über Patella', z:'Differenz dokumentieren', sets:1, kg:false, unit:'cm', side:true, diff:true, rest:30, cue:'Vom Oberrand der Kniescheibe aus messen, entspannt im Stand.' },
      { id:'t_umf15', n:'Umfang 15 cm über Patella', z:'Atrophie-Verlaufsmaß', sets:1, kg:false, unit:'cm', side:true, diff:true, rest:30, cue:'Gleiche Bedingungen wie 10 cm.' },
      { id:'t_ext10', n:'Beinstrecker einbeinig 10RM, 90–40°', z:'LSI ≥ 70 % Plyo · ≥ 80 % Laufen', sets:1, kg:false, unit:'kg', side:true, lsi:true, rest:180, cue:'Links zuerst. Gewicht bis genau 10 saubere Wdh. Gleiche Geräteeinstellung beidseits.' },
      { id:'t_press10', n:'Beinpresse einbeinig 10RM', z:'LSI ≥ 80 % · 1RM ≈ 10RM × 1,33 ≥ 109 kg', sets:1, kg:false, unit:'kg', side:true, lsi:true, rest:180, cue:'Gleiche Fußposition beidseits. Ziel absolut: geschätztes 1RM rechts ≥ 1,25 × Körpergewicht.' },
      { id:'t_calf', n:'Wadenheben einbeinig max.', z:'≥ 25 Wdh.', sets:1, kg:false, side:true, lsi:true, rest:120, cue:'Volle Amplitude, Takt 1 s hoch / 1 s ab, ohne Zusatzlast.' },
      { id:'t_sls', n:'Einbeinige Kniebeuge 60° (Video)', z:'saubere Wdh. von 5 · ohne Valgus/Beckenabsinken', sets:1, kg:false, side:true, rest:60, cue:'Frontal filmen. Eintragen, wie viele der 5 Wdh. sauber waren.' },
      { id:'t_hops', n:'10 einbeinige Hüpfer am Ort', z:'nur wenn alles andere erfüllt', sets:1, kg:false, side:true, rest:60, cue:'Schmerzfrei? Erguss am nächsten Morgen im Knie-Check eintragen.' },
      { id:'t_ikdc', n:'IKDC-Fragebogen', z:'≥ 64 Laufstart · ≥ 90 Return to Sport', sets:1, kg:false, unit:'pkt', rest:0, cue:'Online ausfüllen (IKDC Subjective Knee Form), Punktzahl eintragen.' }
    ]}
  },

  /* Nicht mehr im Plan – nur für Verlauf, Fortschritt und Bearbeiten alter Einheiten */
  archive: [
    { id:'a_wallsit', day:'A', n:'Wall Sit', sets:3, kg:false, unit:'s' },
    { id:'a_presse', day:'A', n:'Beinpresse beidbeinig', sets:3, kg:true },
    { id:'a_goblet', day:'A', n:'Goblet Squat', sets:3, kg:true },
    { id:'a_stepup', day:'A', n:'Step-Up', sets:3, kg:true, side:true },
    { id:'a_eccsit', day:'A', n:'Eccentric Sit Down', sets:3, kg:true, side:true },
    { id:'a_waden', day:'A', n:'Wadenheben', sets:3, kg:true },
    { id:'a_bfrpresse', day:'A', n:'BFR Beinpresse', sets:4, kg:true, bfr:true },
    { id:'b_rdl', day:'B', n:'RDL beidbeinig', sets:3, kg:true },
    { id:'b_abd', day:'B', n:'Hüftabduktion Band', sets:3, kg:false, side:true },
    { id:'b_split', day:'B', n:'Split Squat', sets:3, kg:true, side:true },
    { id:'b_bfrht', day:'B', n:'BFR Hip Thrust', sets:4, kg:true, bfr:true },
    { id:'c_khrudern', day:'C', n:'Einarmiges KH-Rudern', sets:3, kg:true, side:true },
    { id:'c_pinch', day:'C', n:'Griff: Plate Pinch', sets:3, kg:true, unit:'s' },
    { id:'c_chop', day:'C', n:'Core: Kabel-Chop', sets:3, kg:true, side:true },
    { id:'c_suitcase', day:'C', n:'Core: Suitcase Hold sitzend', sets:3, kg:true, unit:'s', side:true },
    { id:'d_schulter', day:'D', n:'Schulterdrücken sitzend, KH', sets:3, kg:true },
    { id:'d_ytw', day:'D', n:'Y-T-W / Außenrotation', sets:3, kg:true }
  ]
};
