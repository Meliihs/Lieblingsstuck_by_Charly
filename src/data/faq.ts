export type FaqItem = { q: string; a: string[] };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

// Antworten stammen von der bisherigen Kontakt-/FAQ- und Buchungsseite.
export const faqGroups: FaqGroup[] = [
  {
    id: 'ablauf',
    title: 'Ablauf',
    items: [
      { q: 'Was genau kann ich bei euch machen?', a: ['Bei uns kannst du vorgefertigte Keramik-Rohlinge (z. B. Tassen, Teller, Figuren) auswählen und nach deinen eigenen Vorstellungen bemalen. Wir glasieren und brennen sie danach für dich.'] },
      { q: 'Brauche ich künstlerische Vorkenntnisse?', a: ['Nein, überhaupt nicht! Das Bemalen ist auch für Anfänger geeignet.'] },
      { q: 'Wie läuft der Besuch ab?', a: ['Du kommst vorbei (am besten mit Reservierung), bekommst eine Einweisung, suchst dir ein Keramikstück aus, bekommst Farben und Werkzeuge, malst es an – und wir kümmern uns anschließend um Glasur & Brennvorgang.'] },
      { q: 'Welche Farben nutzt ihr? Sind sie lebensmittelecht?', a: ['Wir verwenden spezielle Keramikfarben, die ungiftig und lebensmittelecht sind – ideal für Geschirr und Kindersachen.'] },
    ],
  },
  {
    id: 'termin',
    title: 'Terminbuchung',
    items: [
      { q: 'Muss ich einen Termin buchen oder geht auch spontan?', a: ['Spontan geht manchmal, aber wir empfehlen eine Reservierung vor allem an Wochenenden, Events oder in den Ferien.'] },
      { q: 'Wie lange habe ich Zeit zum Malen?', a: ['Für deine Malzeit im Studio hast du 3 Stunden Zeit.'] },
      { q: 'Wie buche ich für mehrere Personen?', a: ['Bitte gib bei der Buchung unter dem Feld „Menge“ die Personenanzahl an. Beim Stornieren bitte alle Personen auswählen.'] },
    ],
  },
  {
    id: 'preise',
    title: 'Preise & Zahlung',
    items: [
      { q: 'Was kostet das Malen und wie kann ich zahlen?', a: ['Die Preise richten sich nach dem gewählten Keramikstück. Sie beinhalten Farben, Materialien, Glasur und Brennen – es gibt keine versteckten Kosten oder Kursgebühr (außer bei Events).', 'Bar, EC-Karte, Kreditkarte oder Gutschein werden akzeptiert.'] },
      { q: 'Gibt es Gutscheine?', a: ['Ja. Individuelle Beträge sind möglich, Gutscheine sind nur vor Ort erhältlich.'] },
    ],
  },
  {
    id: 'abholung',
    title: 'Brennen & Abholung',
    items: [
      { q: 'Wann kann ich mein Lieblingsstück abholen?', a: ['In der Regel nach 2–3 Wochen – je nach Auslastung. Sobald alle Keramiken eines Tages fertig sind, posten wir sie auf Instagram.', 'Abholungen sind nur während unserer Öffnungszeiten möglich. Bitte bring immer den Abholschein oder ein Foto davon sowie Verpackungsmaterial mit.'] },
      { q: 'Was passiert, wenn mein Stück beim Brennen kaputtgeht?', a: ['Das passiert selten, aber sollte es vorkommen, finden wir gemeinsam eine faire Lösung.'] },
    ],
  },
  {
    id: 'gruppen',
    title: 'Gruppen & Events',
    items: [
      { q: 'Kann man auch Kindergeburtstage feiern?', a: ['Ja, sehr gerne! Kindergeburtstage sind ab 8 Jahren und nach vorheriger Anfrage möglich.', 'Wir bieten keine privaten Veranstaltungen an – auch während des Geburtstags können andere Gäste bei uns sein. Bei uns steht das gemeinsame Malen im Mittelpunkt, daher ist unser Raum kein Partyraum zum Toben und Spielen.', 'Plätze bitte nur für Kinder buchen, die auch mitmalen. Snacks sind nach vorheriger Absprache möglich.'] },
      { q: 'Ab welchem Alter können Kinder mitmachen?', a: ['Kinder ab ca. 8 Jahren können mit Hilfe eines Erwachsenen gut mitmachen.'] },
      { q: 'Wie frage ich ein Event an?', a: ['Für Events (z. B. Geburtstage, JGAs, Firmenevents) bitten wir dich, vorab eine Anfrage zu stellen – per E-Mail oder telefonisch während unserer Öffnungszeiten.'] },
    ],
  },
  {
    id: 'kontakt',
    title: 'Kontakt',
    items: [
      { q: 'Wann seid ihr telefonisch erreichbar?', a: ['Bitte beachte immer unsere Öffnungszeiten für Anrufe und Abholungen. Außerhalb dieser Zeiten sind wir telefonisch nicht erreichbar.'] },
    ],
  },
];

// Auswahl für die Startseite
export const homeFaq: FaqItem[] = [
  faqGroups[0]!.items[0]!,
  faqGroups[0]!.items[1]!,
  faqGroups[1]!.items[0]!,
  faqGroups[2]!.items[0]!,
  faqGroups[3]!.items[0]!,
  faqGroups[4]!.items[0]!,
];
