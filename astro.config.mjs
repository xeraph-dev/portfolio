import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://v3.xeraph.dev/',
  experimental: {
    integrations: true,
  },
  integrations: [tailwind(), compress(), sitemap(), robotsTxt()],
})
