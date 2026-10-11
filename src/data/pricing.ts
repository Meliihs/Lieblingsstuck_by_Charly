// Preisspannen laut aktueller Preisseite (/preise). Vor Veröffentlichung mit Charly abgleichen.
export const prices = [
  { id: 'tassen', name: 'Tassen', range: '20–35 €' },
  { id: 'teller', name: 'Teller', range: '25–40 €' },
  { id: 'vasen', name: 'Vasen', range: '15–50 €' },
  { id: 'schuesseln-schalen', name: 'Schüsseln & Schalen', range: '15–60 €' },
  { id: 'kannen', name: 'Kannen', range: '45–70 €' },
  { id: 'kueche', name: 'Küche', range: '20–45 €' },
  // Live-Seite nennt „3- 40€“ (vermutlich Tippfehler) – daher nur die gesicherte Obergrenze.
  { id: 'spardosen-figuren', name: 'Spardosen & Figuren', range: 'bis 40 €' },
] as const;

export const pricingIncludes = ['Rohkeramik', 'Farbe', 'Glasur', 'Brand'] as const;
