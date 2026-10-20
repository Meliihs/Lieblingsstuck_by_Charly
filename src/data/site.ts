// Alle Angaben stammen von der bisherigen Live-Seite (Stand Oktober 2026).
export const site = {
  name: 'Lieblingsstück by Charly',
  short: 'Lieblingsstück',
  url: 'https://meliihs.github.io',
  legalName: 'A.+C. Legouez GbR',
  address: { street: 'Florastraße 4', zip: '41539', city: 'Dormagen' },
  email: 'clegouez@icloud.com',
  phones: [
    { label: '+49 1520 2869683', tel: '+4915202869683' },
    { label: '+49 173 5855545', tel: '+491735855545' },
  ],
  social: {
    instagram: 'https://www.instagram.com/lieblingsstuck_keramik',
    tiktok: 'https://www.tiktok.com/@lieblingsstueck.dormagen',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Florastra%C3%9Fe+4+41539+Dormagen',
  // Ziel des Buchen-Buttons. Platzhalter: bisheriger Acuity-Kalender; hier später die Adresse des neuen Buchungssystems eintragen.
  bookingUrl: 'https://app.acuityscheduling.com/schedule.php?owner=36378224',
} as const;

export const nav = [
  { label: 'Ablauf', href: '/ablauf' },
  { label: 'Preise', href: '/preise' },
  { label: 'Events', href: '/events' },
  { label: 'Über uns', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/contact' },
] as const;

type Slot = readonly [string, string];

export const hours: readonly { day: string; short: string; en: string; slots: readonly Slot[] }[] = [
  { day: 'Montag', short: 'Mo', en: 'Monday', slots: [] },
  { day: 'Dienstag', short: 'Di', en: 'Tuesday', slots: [] },
  { day: 'Mittwoch', short: 'Mi', en: 'Wednesday', slots: [['12:00', '15:00'], ['17:00', '20:00']] },
  { day: 'Donnerstag', short: 'Do', en: 'Thursday', slots: [['12:00', '15:00'], ['17:00', '20:00']] },
  { day: 'Freitag', short: 'Fr', en: 'Friday', slots: [['09:00', '12:00'], ['17:00', '20:00']] },
  { day: 'Samstag', short: 'Sa', en: 'Saturday', slots: [['11:00', '14:00'], ['15:00', '18:00']] },
  { day: 'Sonntag', short: 'So', en: 'Sunday', slots: [] },
];

export const formatSlots = (slots: readonly Slot[]) =>
  slots.length ? slots.map(([a, b]) => `${+a.slice(0, 2)}–${+b.slice(0, 2)} Uhr`).join(' · ') : 'Ruhetag';

export const mailto = (subject: string, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
