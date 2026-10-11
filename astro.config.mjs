import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lieblingsstueck-keramikdormagen.com',
  integrations: [sitemap()],
  // Alte Squarespace-Pfade bleiben erreichbar (statische Meta-Refresh-Seiten);
  // auf Netlify greifen zusätzlich die 301er aus public/_redirects.
  redirects: {
    '/allgemein-2-1': '/events',
    '/home': '/',
  },
  build: { format: 'directory' },
});
