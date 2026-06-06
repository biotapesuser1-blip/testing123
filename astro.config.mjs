import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// After enabling GitHub Pages, set `site` to the public URL the site lives
// at and `base` to the path segment under that URL. The MD Docs editor
// will update these for you on first connection.
//
//   site:  https://<your-username>.github.io
//   base:  /<your-repo-name>
//
// If you wire up a custom domain, set `site` to that domain and drop `base`.

export default defineConfig({
  site: 'https://example.github.io',
  base: '/REPLACE_WITH_REPO_NAME',
  integrations: [
    starlight({
      title: 'My Docs',
      description: 'Documentation, edited with AI.',
      // Sidebar auto-generates from src/content/docs/ by default.
    }),
  ],
});
