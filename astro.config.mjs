  import { defineConfig } from 'astro/config';
  import starlight from '@astrojs/starlight';

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'docs';
  const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'user';
  const siteUrl = process.env.MDDOCS_PREVIEW_SITE ?? `https://${owner}.github.io`;
  const basePath = process.env.MDDOCS_PREVIEW_BASE ?? `/${repo}`;

  export default defineConfig({
    site: siteUrl,
    base: basePath,
    integrations: [
      starlight({
        title: 'My Docs',
        description: 'Documentation, edited with AI.',
      }),
    ],
  });