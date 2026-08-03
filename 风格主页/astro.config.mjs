import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPages = Boolean(process.env.GITHUB_ACTIONS && repository && !repository.endsWith('.github.io'));
const base = process.env.PUBLIC_BASE_PATH || (isProjectPages ? `/${repository}` : '/');
const site = process.env.SITE_URL || 'https://example.github.io';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
  markdown: { shikiConfig: { theme: 'github-dark' } }
});
