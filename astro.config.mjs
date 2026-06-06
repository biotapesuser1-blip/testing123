import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'docs';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'user';

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: `/${repo}`,
  integrations: [
    starlight({
      title: 'My Docs',
      description: 'Documentation, edited with AI.',
    }),
  ],
});
