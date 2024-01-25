import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { DEFAULT_LOCALE, LOCALES } from './i18n/i18n'

// https://astro.build/config
export default defineConfig({
	site: 'https://xeraph.dev',
	i18n: {
		defaultLocale: DEFAULT_LOCALE,
		locales: LOCALES,
	},
	integrations: [tailwind()],
})
