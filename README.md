# Trainingslog

Offline-fähige Trainings-App (PWA) mit vier Trainingstagen, Gewichts- und Knie-Tracking.
Alle Daten bleiben lokal im Browser des Geräts – im Repo liegt nur der Code.

## Dateien
- `index.html` – die App
- `plan.js` – Übungen und Warm-up (hier ändern; `id` einer Übung nie ändern)
- `sw.js` – Offline-Cache (nach jeder Änderung `CACHE`-Version hochzählen, z. B. `trainingslog-v2`)
- `manifest.webmanifest`, `icon-*.png` – App-Icon und Name für den Home-Bildschirm

## Veröffentlichen
Settings → Pages → Source: *Deploy from a branch* → Branch `main`, Ordner `/ (root)` → Save.
