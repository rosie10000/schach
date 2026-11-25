# Schach mit Coach

Schach gegen den Computer mit vier Spielstärken, Lektionen, einem Coach mit Sprachausgabe und Zugbewertung. Die App läuft komplett im Browser und funktioniert nach dem ersten Aufruf auch offline.

## Auf GitHub Pages veröffentlichen

1. Auf github.com ein neues Repository anlegen, zum Beispiel `schach`.
2. Alle Dateien aus diesem Ordner hochladen („Add file“ → „Upload files“). Der Ordner `icons` muss mit hochgeladen werden.
3. Unter **Settings → Pages** bei „Source“ den Eintrag **Deploy from a branch** wählen, Branch `main`, Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten ist die App erreichbar unter `https://DEIN-NAME.github.io/schach/`.

## Als App installieren

- **iPhone/iPad:** Link in Safari öffnen → Teilen → **Zum Home-Bildschirm**.
- **Mac (Safari ab macOS Sonoma):** Ablage → **Zum Dock hinzufügen**.
- **Mac/Windows (Chrome oder Edge):** Installieren-Symbol in der Adressleiste anklicken.

Nach dem ersten Öffnen mit Internet läuft die App auch im Flugmodus.

## Updates

Nach einer Änderung an `index.html` in `sw.js` die Zeile `const VERSION='schach-v1';` hochzählen (z. B. `schach-v2`). Geräte laden die neue Fassung dann beim nächsten Öffnen im Hintergrund und zeigen sie beim übernächsten Start an.

## Sprachausgabe

Der Coach nutzt die Stimmen des Geräts. Am natürlichsten klingen „Premium“- oder „Erweitert“-Stimmen:
- **iPhone:** Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Deutsch.
- **Mac:** Systemeinstellungen → Bedienungshilfen → Gesprochene Inhalte → Systemstimme → Stimmen verwalten.

## Datenschutz

Die App lädt keine externen Inhalte, setzt keine Cookies und speichert keine Daten. Der Hosting-Dienst (GitHub) protokolliert beim Aufruf technisch übliche Daten wie die IP-Adresse.
