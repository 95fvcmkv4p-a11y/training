# Trainingslog

Offline-fähige Trainings-App (PWA) mit vier Trainingstagen, Test-Tag, täglicher Aktivierung, Gewichts- und Knie-Tracking.
Alle Daten bleiben lokal im Browser des Geräts – im Repo liegt nur der Code.

## Dateien
- `index.html` – die App
- `plan.js` – Übungen, Warm-ups, Aktivierung, Test-Tag (hier ändern; `id` einer Übung nie ändern, ausgemusterte Übungen nach `archive` verschieben)
- `sw.js` – Offline-Cache (nach jeder Änderung `CACHE`-Version hochzählen)
- `manifest.webmanifest`, `icon-*.png` – App-Icon und Name für den Home-Bildschirm

## Version 3.0 (14.11.2026)
- Neuer Plan Phase IV: Tag A Beine 1 (Quadrizeps), Tag B Beine 2 (hintere Kette), Tag C Pull, Tag D Push, jeweils mit Stop-X-Warm-up
- Vorschlag im on-on-off-Rhythmus: A → C → Pause → B → D → Pause
- Tägliche Aktivierung als eigene Checkliste mit Serienzähler
- Test-Tag (T) mit Seitenvergleich (LSI bzw. Differenz rechts − links), Hinweis, wenn er fällig ist
- Alte Übungen bleiben in Verlauf, Bearbeiten und Fortschritt („alt“) sichtbar
- Backup enthält jetzt auch die Aktivierung

## Veröffentlichen
Settings → Pages → Source: *Deploy from a branch* → Branch `main`, Ordner `/ (root)` → Save.
