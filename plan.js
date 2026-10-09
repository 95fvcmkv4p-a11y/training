/* Trainingsplan – hier Übungen ändern.
   Felder je Übung:
   id     eindeutige Kennung (NICHT ändern, sonst geht der Verlauf dieser Übung verloren)
   n      Name                     z     Ziel (Text)
   sets   Anzahl Sätze             kg    true = mit Gewicht
   unit   'wdh' oder 's' (Sekunden) side  true = getrennt links/rechts
   rest   Pause in Sekunden (optional, sonst Standard aus Einstellungen)
   bfr    true = BFR-Block           cue   Ausführungshinweis
*/
window.PLAN = {
  warmups: {
    beine: [
      ['Sprunggelenk an der Wand', '2 × 10 je Seite', 'Knie über die 2. Zehe zur Wand, Ferse bleibt am Boden.'],
      ['Heel Slide / Wall Slide', '2 × 10, je 20 s', 'Ferse zum Gesäß.'],
      ['Hüftbeuger-Dehnung', '2 × 30 s je Seite', 'Becken aufrichten, Gesäß anspannen. Knie-Außenseite nicht aggressiv dehnen.'],
      ['Fokus Extension', '3 × 10 × 5 s', 'Bein gestreckt, Kniescheibe nach oben ziehen. Hand am inneren Oberschenkelmuskel.'],
      ['Glute Bridge', '2 × 15', 'Fersen aufgestellt, erst Gesäß anspannen, dann heben. Kein Hohlkreuz.'],
      ['Monster Walk mit Band', '2 × 15 Schritte', 'Halbe Kniebeuge, Band gespannt. Knie fällt nicht nach innen.'],
      ['Einbeinstand', '3 × 45 s je Seite', 'Becken waagerecht. Fest → weich → Augen zu.'],
      ['Gangbild-Check', '2 min', 'Fersenkontakt, volle Kniestreckung in der Standphase, gleiche Schrittlänge.']
    ],
    oberkoerper: [
      ['Rudergerät / Crosstrainer', '5 min locker', 'Puls hoch, Schultern warm.'],
      ['Band Pull-Apart', '2 × 15', 'Arme gestreckt, Schulterblätter zusammen.'],
      ['Schulter-Dislocates mit Band', '2 × 10', 'Breiter Griff, langsam über Kopf nach hinten.'],
      ['Außenrotation Band', '2 × 12 je Seite', 'Ellbogen am Körper.'],
      ['Thorax-Rotation (Vierfüßler)', '2 × 8 je Seite', 'Hand hinter den Kopf, Blick folgt dem Ellbogen.'],
      ['Leichter Aufwärmsatz 1. Übung', '1–2 × 10', 'ca. 50 % Arbeitsgewicht.']
    ]
  },
  days: {
    A: { name: 'Beine', sub: 'Knieextensoren & Standbeinkontrolle', warmup: 'beine', leg: true, ex: [
      { id:'a_wallsit', n:'Wall Sit', z:'3 × 20–40 s', sets:3, kg:false, unit:'s', cue:'Rücken flach an der Wand, Knie über den Füßen. Gewicht gleichmäßig auf beide Beine – im Spiegel prüfen.' },
      { id:'a_presse', n:'Beinpresse beidbeinig', z:'3 × 12–15', sets:3, kg:true, cue:'0–90°. Endstreckung nicht durchdrücken. Exzentrik 3 s.' },
      { id:'a_goblet', n:'Goblet Squat', z:'3 × 12 · max. 90°', sets:3, kg:true, cue:'Hüfte zuerst nach hinten, Knie über der 2. Zehe. Band um die Knie als Rückmeldung.' },
      { id:'a_stepup', n:'Step-Up 15–20 cm', z:'3 × 10 je Seite', sets:3, kg:true, side:true, cue:'Ganzer Fuß auf der Box, Zug aus dem Standbein statt Abdruck vom hinteren Fuß.' },
      { id:'a_eccsit', n:'Eccentric Sit Down', z:'3 × 8 je Seite', sets:3, kg:true, side:true, cue:'Einbeinig 3–4 s auf die Box absetzen, leise. Hoch beidbeinig. Wichtigste Übung des Tages.' },
      { id:'a_waden', n:'Wadenheben', z:'3 × 20 → einbeinig 3 × 15', sets:3, kg:true, cue:'Volle Amplitude, 3 s abwärts. Ziel für die Lauffreigabe: 25 Wdh. einbeinig.' },
      { id:'a_bfrpresse', n:'BFR Beinpresse', z:'30-15-15-15 · 30 s Pause', sets:4, kg:true, bfr:true, rest:30, cue:'LETZTER Block. 20–30 % 1RM, 40–80 % Verschlussdruck. Bei Kribbeln sofort ablassen.' },
      { id:'a_pallof', n:'Pallof Press', z:'3 × 12 je Seite', sets:3, kg:true, side:true, cue:'Anti-Rotation, Rumpf bleibt ruhig.' },
      { id:'a_plank', n:'Unterarmstütz', z:'3 × 30 s', sets:3, kg:false, unit:'s', cue:'Gerade Linie, Gesäß anspannen.' }
    ]},
    B: { name: 'Beine', sub: 'Hüfte, hintere Kette, Frontalebene', warmup: 'beine', leg: true, ex: [
      { id:'b_hipthrust', n:'Hip Thrust', z:'3 × 15 → einbeinig 3 × 10', sets:3, kg:true, cue:'Schulterblätter auf der Bank, Kinn zur Brust, oben Gesäß maximal anspannen.' },
      { id:'b_rdl', n:'RDL beidbeinig', z:'3 × 12', sets:3, kg:true, cue:'Hüfte nach hinten, Wirbelsäule neutral, Knie leicht gebeugt und fixiert.' },
      { id:'b_hampull', n:'Hamstring Pulls', z:'3 × 10', sets:3, kg:false, cue:'Rückenlage, Brücke halten, Fersen auf Slidern/Ball weg und heran.' },
      { id:'b_abd', n:'Hüftabduktion Band', z:'3 × 15 je Seite', sets:3, kg:false, side:true, cue:'Becken waagerecht. Das Standbein arbeitet genauso hart.' },
      { id:'b_sideplank', n:'Side Plank + Abduktion', z:'3 × 30 s je Seite', sets:3, kg:false, unit:'s', side:true, cue:'Erst auf dem Knie, später gestreckt.' },
      { id:'b_copen', n:'Copenhagen kurzer Hebel', z:'3 × 8 je Seite', sets:3, kg:false, side:true, cue:'Knie auf der Bank, langsam.' },
      { id:'b_split', n:'Split Squat', z:'3 × 10 je Seite', sets:3, kg:true, side:true, cue:'Rumpf aufrecht, vorderes Knie über dem Fuß, Tiefe bis 90°.' },
      { id:'b_stepdown', n:'Step-Down 15–25 cm', z:'3 × 10 je Seite', sets:3, kg:true, side:true, cue:'Langsam absteigen, Ferse tippt nur an. Frontal filmen – Einknicken nach innen wird sichtbar.' },
      { id:'b_bfrht', n:'BFR Hip Thrust', z:'30-15-15-15 · 30 s Pause', sets:4, kg:true, bfr:true, rest:30, cue:'LETZTER Block. Manschette am oberen Oberschenkel.' },
      { id:'b_birddog', n:'Bird Dog', z:'3 × 10 je Seite', sets:3, kg:false, side:true, cue:'Rumpfstabilität ohne Kniebelastung.' }
    ]},
    C: { name: 'Pull', sub: 'Rücken, Bizeps, Griff, Nacken, Core', warmup: 'oberkoerper', ex: [
      { id:'c_klimmzug', n:'Klimmzug / Latzug breit', z:'4 × 6–10 · RPE 8', sets:4, kg:true, rest:120, cue:'Schulterblätter zuerst nach unten-hinten, Brust zur Stange. Unten voll strecken. Kontrolliert absteigen statt abspringen. Eintrag: Klimmzug = Zusatzgewicht (KG = nur Körpergewicht), Latzug = Plattengewicht; Variante in die Notiz.' },
      { id:'c_ruderzug', n:'Brustgestützter Ruderzug', z:'4 × 8–12 · RPE 8', sets:4, kg:true, rest:120, cue:'Brust bleibt am Polster, Ellbogen nah am Körper nach hinten, hinten 1 s halten.' },
      { id:'c_khrudern', n:'Einarmiges KH-Rudern', z:'3 × 10–12 je Seite · RPE 8', sets:3, kg:true, side:true, cue:'Bank abgestützt, Rücken flach, KH Richtung Hüfte ziehen. Kniedruck unangenehm → Fuß am Boden, nur Hand abstützen.' },
      { id:'c_facepull', n:'Face Pull', z:'3 × 15–20 · RPE 7', sets:3, kg:true, cue:'Seil zur Stirn, Ellbogen hoch, am Ende Daumen nach hinten drehen.' },
      { id:'c_hammer', n:'Hammer-Curl', z:'3 × 10–12 · RPE 8', sets:3, kg:true, cue:'Neutraler Griff, Ellbogen fixiert, kein Schwung.' },
      { id:'c_deadhang', n:'Griff: Handtuch-Dead-Hang', z:'4 × max. Zeit', sets:4, kg:false, unit:'s', cue:'Handtücher über die Stange, passiv hängen, Schultern leicht aktiv. Kontrolliert absteigen.' },
      { id:'c_pinch', n:'Griff: Plate Pinch', z:'3 × 30 s', sets:3, kg:true, unit:'s', cue:'Zwei Scheiben, glatte Seite außen, zwischen Daumen und Fingern halten.' },
      { id:'c_nacken', n:'Nacken: Isometrie 4 Richtungen', z:'3 × 20 s je Richtung', sets:3, kg:false, unit:'s', cue:'Hand gegen Stirn, Hinterkopf, linke und rechte Schläfe; Kopf bleibt neutral, ca. 50–70 % Kraft.' },
      { id:'c_chop', n:'Core: Kabel-Chop', z:'3 × 10 je Seite · RPE 7', sets:3, kg:true, side:true, cue:'Schräg von oben nach unten, Becken stabil – Rotation aus der Brustwirbelsäule, Knie dreht nicht mit.' },
      { id:'c_suitcase', n:'Core: Suitcase Hold sitzend', z:'3 × 30 s je Seite', sets:3, kg:true, unit:'s', side:true, cue:'Aufrecht auf der Bank, schwere KH auf einer Seite, nicht zur Seite kippen.' }
    ]},
    D: { name: 'Push', sub: 'Brust, Schulter, Trizeps + Zug-Erhalt', warmup: 'oberkoerper', ex: [
      { id:'d_khbank', n:'KH-Bankdrücken flach', z:'4 × 6–12 · RPE 8', sets:4, kg:true, rest:120, cue:'Schulterblätter zusammen und nach unten, KH auf Brusthöhe absenken, Ellbogen ca. 45°.' },
      { id:'d_schulter', n:'Schulterdrücken sitzend, KH', z:'3 × 8–12 · RPE 8', sets:3, kg:true, rest:120, cue:'Rücken an der Lehne, Rippen unten, kein Hohlkreuz.' },
      { id:'d_schraeg', n:'Schrägbank KH / Dips gestützt', z:'3 × 8–12 · RPE 8', sets:3, kg:true, cue:'Schrägbank ca. 30°. Dips nur mit Unterstützung, Schultern weg von den Ohren.' },
      { id:'d_kabelrudern', n:'Sitzendes Kabelrudern', z:'3 × 12–15 · RPE 7', sets:3, kg:true, cue:'Aufrecht, erst Schulterblätter zurück, dann Arme. Knie leicht gebeugt.' },
      { id:'d_seitheben', n:'Seitheben', z:'3 × 12–15 · RPE 8', sets:3, kg:true, cue:'Leicht vorgebeugt, bis Schulterhöhe, langsam ab.' },
      { id:'d_ytw', n:'Y-T-W / Außenrotation', z:'3 × 12–15 · RPE 6', sets:3, kg:true, cue:'Leichtes Gewicht, Schulterblätter führen die Bewegung.' },
      { id:'d_trizeps', n:'Trizeps-Pushdown', z:'3 × 12–15 · RPE 8', sets:3, kg:true, cue:'Ellbogen am Körper, unten voll strecken, 2 s zurück.' },
      { id:'d_revcurl', n:'Griff: Reverse Curl', z:'3 × 15 · RPE 7', sets:3, kg:true, cue:'Obergriff, Handgelenke gerade.' },
      { id:'d_wristcurl', n:'Griff: Handgelenks-Curl', z:'3 × 15 · RPE 7', sets:3, kg:true, cue:'Unterarme auf der Bank, nur das Handgelenk bewegt sich.' },
      { id:'d_hollow', n:'Core: Hollow Hold', z:'3 × 30 s', sets:3, kg:false, unit:'s', cue:'LWS am Boden, Arme und Beine nur so weit raus, wie die LWS unten bleibt.' },
      { id:'d_deadbug', n:'Core: Dead Bug mit Band', z:'3 × 10 je Seite', sets:3, kg:false, side:true, cue:'Band über Kopf gespannt, LWS am Boden, gegenüberliegendes Bein langsam strecken.' },
      { id:'d_kneeraise', n:'Core: Hanging Knee Raise', z:'3 × 12 · RPE 8', sets:3, kg:false, cue:'Knie zur Brust, Becken einrollen, kein Schwung, kontrolliert ab.' }
    ]}
  }
};
