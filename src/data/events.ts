export const offers = [
  {
    id: 'geburtstage',
    title: 'Geburtstage',
    kicker: 'Kindergeburtstag ab 8 Jahren · 3 Stunden',
    text: 'Keramik bemalen mit Spaß und Kreativität!',
    included: [
      'Eine Vorauswahl an Keramiken oder selbst ausgesucht',
      'Bemalen und Brennen der Keramiken',
      'Geschenk für das Geburtstagskind',
      'Snacks dürfen mitgebracht werden (nach Absprache)',
    ],
    note: 'Wir bieten keine privaten Veranstaltungen an – auch während des Geburtstags können andere Gäste bei uns sein. Bei uns steht das gemeinsame Malen im Mittelpunkt, daher ist unser Raum kein Partyraum zum Toben und Spielen.',
    topic: 'Kindergeburtstag',
  },
  {
    id: 'jga-team',
    title: 'JGA & Team-Events',
    kicker: 'Junggesell:innenabschied · Team-Ausflug',
    text: 'Gemeinsam kreativ werden – ob Junggesell:innenabschied oder Team-Ausflug. Einfach anfragen und los geht’s!',
    included: [],
    note: '',
    topic: 'JGA / Team-Event',
  },
] as const;

export const voucher = {
  title: 'Gutscheine',
  text: 'Verschenke kreative Auszeit! Individuelle Beträge möglich und nur vor Ort erhältlich.',
} as const;

// Aus den Flyern der Live-Seite übernommen. Gebucht wird über die Terminbuchung.
// Vergangene Termine blendet die Seite beim Build automatisch aus.
export const seasonal = [
  { title: 'Pumpkin Spice Keramik', date: '2026-10-16', time: '17:00', entry: '10 €', text: 'Herbstliche Deko, viele Kürbisse, Pumpkin Spice Drinks und Cozy Autumn Vibes.' },
  { title: 'Halloween Keramik Party', date: '2026-10-24', time: '17:00', entry: '10 €', text: 'Party, Snacks, Grusel und Keramik bemalen. Kostüme erwünscht!' },
  { title: 'Christmas Special', date: '2026-11-29', time: '12:00', entry: '9 €', text: '1. Advent: weihnachtliche Keramik & Deko, Christmas Drinks und weihnachtliche Snacks.' },
  { title: 'Nikolaus Keramik Special', date: '2026-12-06', time: '12:00', entry: '9 €', text: 'Kleine Nikolaus-Überraschungen, süße Leckereien, warme Winterdrinks und weihnachtliche Keramik & Deko.' },
] as const;

export const upcomingSeasonal = () => {
  const today = new Date().toISOString().slice(0, 10);
  return seasonal.filter((e) => e.date >= today);
};

export const eventDate = (iso: string) => {
  const d = new Date(`${iso}T12:00:00`);
  return {
    day: d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' }),
    weekday: d.toLocaleDateString('de-DE', { weekday: 'long' }),
  };
};

export const requestChecklist = [
  'Anlass (z. B. Kindergeburtstag, JGA, Team-Event)',
  'Anzahl der Personen – bei Kindern auch das Alter',
  'Wunschtermin und Alternativen',
  'Name und Telefonnummer für Rückfragen',
] as const;
