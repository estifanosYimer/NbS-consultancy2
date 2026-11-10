// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER: set this to your final address (custom domain or Vercel URL).
const SITE = process.env.SITE_URL || 'https://nbs-consultancy.vercel.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always', assets: 'assets' },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', nl: 'nl', fr: 'fr' } } })],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
