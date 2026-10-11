import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vorschau auf GitHub Pages unter einem Unterpfad. Für den Livegang auf der eigenen Domain:
// site auf https://lieblingsstueck-keramikdormagen.com setzen (auch in src/data/site.ts),
// base und prefixPageLinks entfernen.
const base = '/Lieblingsstuck_by_Charly';

// Seitenlinks stehen im Quelltext absolut (/preise); nach dem Build bekommen sie den Unterpfad.
const prefixPageLinks = {
  name: 'prefix-page-links',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      for (const file of await readdir(root, { recursive: true })) {
        if (!file.endsWith('.html')) continue;
        const path = join(root, file);
        const html = await readFile(path, 'utf8');
        await writeFile(path, html.replace(/href="\/(?!\/|Lieblingsstuck_by_Charly)/g, `href="${base}/`));
      }
    },
  },
};

export default defineConfig({
  site: 'https://meliihs.github.io',
  base,
  integrations: [sitemap(), prefixPageLinks],
  build: { format: 'directory' },
});
