# Lieblingsstück by Charly – Website

Statische Website (Astro 7, TypeScript, reines CSS) für das Keramikstudio in Dormagen.
Kein Tracking, keine externen Schriften, kein Cookie-Banner nötig. Die einzige Drittanbieter-Verbindung
ist der Buchungskalender (Acuity Scheduling) – und der lädt erst nach Klick.

```bash
npm install
npm run dev        # Entwicklung auf http://localhost:4321
npm run build      # Typecheck (astro check) + Build nach dist/
npm run preview    # gebauten Stand ansehen
```

## Seiten & URLs

| Pfad | Inhalt |
| --- | --- |
| `/` | Startseite |
| `/ablauf` | Keramik bemalen – So funktioniert’s (neu) |
| `/preise` | Preisübersicht (bestehender Pfad) |
| `/events` | Events, Gutscheine, saisonale Termine, Anfrage (früher `/allgemein-2-1`, leitet weiter) |
| `/about` | Über uns (bestehender Pfad) |
| `/faq` | FAQ mit Kategorien (neu; bisher auf `/contact`) |
| `/appointments` | Terminbuchung (bestehender Pfad, Acuity) |
| `/contact` | Kontakt, Öffnungszeiten, Anfahrt (bestehender Pfad) |
| `/impressum`, `/datenschutzerklrung`, `/nutzungsbedingungen-1` | Rechtstexte, Pfade unverändert |

Weiterleitungen: `/allgemein-2-1 → /events`, `/home → /` (Meta-Refresh-Seiten aus `astro.config.mjs`
plus 301er in `public/_redirects` für Netlify). Bei anderem Hosting dort entsprechende 301er einrichten.

## Inhalte pflegen

Alle Fakten liegen in `src/data/` – keine Texte in den Komponenten verstreut:

- `site.ts` – Adresse, Telefon, E-Mail, Öffnungszeiten, Social-Links, Buchungs-URL
- `pricing.ts` – Preisspannen
- `events.ts` – Angebote, Gutscheine, saisonale Events (`seasonal`; vergangene Termine verschwinden beim nächsten Build)
- `faq.ts` – Fragen & Antworten (speisen auch das FAQ-Schema)
- `src/legal/*.md` – Datenschutz und AGB, 1:1 von der alten Seite übernommen
- Fotos: `src/assets/photos/` (werden beim Build in AVIF/WebP + `srcset` umgewandelt)

Design-Tokens (Farben, Schrift, Abstände, Radien, Easing) stehen oben in `src/styles/global.css`.

## Funktionsweise der Integrationen

- **Buchung:** `/appointments` bettet den bestehenden Acuity-Kalender (`owner=36378224`) ein – erst nach Klick auf
  „Kalender laden“ (vorher keine Verbindung zu Acuity). Direktlink als Fallback und ohne JavaScript.
- **Event-Anfragen:** Es gab kein Formular/Backend, daher `mailto:`-Links mit vorausgefüllter Vorlage und `tel:`-Links.
  Es wird kein Erfolgszustand vorgetäuscht.
- **Strukturierte Daten:** `LocalBusiness` (nur verifizierte Adresse, Telefon, E-Mail, Öffnungszeiten) und `FAQPage`.

## Vor dem Livegang klären (Abweichungen & offene Punkte)

1. **Preise:** Verwendet sind die Werte der *aktuell veröffentlichten* Preisseite. Sie weichen vom Briefing ab
   (Tassen 20–35 statt 15–35 €, Teller 25–40 statt 14–40 €, Vasen 15–50 statt 15–48 €, Schalen 15–60 statt 15–30 €,
   Kannen 45–70 statt 45 €, Spardosen: Live-Seite zeigt „3- 40€“ → angezeigt wird nur „bis 40 €“). Bitte mit Charly abgleichen.
2. **Dauer:** Live-Seite nennt **3 Stunden** Malzeit (nicht „2–3 Stunden“) und **2–3 Wochen** bis zur Abholung – so übernommen.
3. **Keramikboxen:** Auf der Live-Seite nicht auffindbar (weder Navigation, Sitemap noch Seitentexte). Die Preise aus dem Briefing
   (60 / 75 / ab 35 €) ließen sich nicht verifizieren – deshalb **keine** Box-Seite. Falls das Angebot existiert: Inhalte/Preise/Bestell­weg liefern.
4. **AGB (Originaltext, unverändert):** §3(3) enthält noch die Platzhalterklammer „[Barzahlung, EC-Karte, Kreditkarte, ggf. PayPal]“;
   §5(2) nennt „5–7 Werktage“ Fertigstellung, die Website sagt 2–3 Wochen. Bitte rechtlich prüfen lassen.
5. **Datenschutz (Originaltext, unverändert):** Beschreibt Hosting bei Squarespace und einen Cookie-Hinweis. Nach dem Umzug auf ein anderes
   Hosting muss der Abschnitt „Website-Hosting“ aktualisiert werden (Hoster eintragen, ggf. AV-Vertrag).
6. **Saisonale Events** (Pumpkin Spice 16.10., Halloween 24.10., Christmas Special 29.11., Nikolaus 6.12.) stammen aus den Flyern der alten Seite.
7. **Farben:** Das Marken-Logo ist rosé/oliv – deshalb ersetzt „Rosé“ (#B9697C) das Terrakotta des Briefings.

## Benötigte Originalbilder

Vorhanden sind nur die Fotos der alten Seite (Eigentum des Studios – Nutzungsrecht bitte bestätigen). Es fehlen:

- Produktfotos je Kategorie auf ruhigem Hintergrund (Tasse, Teller, Schale, Vase, Kanne, Küchenartikel, Spardose/Figur), Hochformat 4:5
- Hero-Motiv in hoher Auflösung (fertiges Stück, ≥ 2000 px); das Malfoto (`malen-schale.jpg`) hat nur 934 px
- Porträt von Charly und ihrer Mutter / Studio-Team (nur mit Einwilligung)
- Echte Eventfotos (Kindergeburtstag, JGA, Team-Event) statt der Frosch-Illustrationen
- Außenansicht/Eingang Florastraße 4
- Logo als Vektor (SVG); Favicon ist aktuell ein Ausschnitt aus dem JPG-Logo
- Fotos der Keramikboxen, falls das Angebot existiert

## Bekannte Einschränkungen

- Ohne JavaScript fehlt auf Mobilgeräten das Menü-Overlay (Footer-Navigation bleibt nutzbar); der Kalender lässt sich über den Direktlink öffnen.
- Kein automatisierter Testlauf (keine Tests im Projekt); geprüft wurden Typecheck, Build, Layout-Überlauf und Kernfunktionen manuell im Browser.
