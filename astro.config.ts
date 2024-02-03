import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { DEFAULT_LOCALE, LOCALES } from './i18n/i18n'

import sitemap from '@astrojs/sitemap'

const site = 'https://xeraph.dev'

// https://astro.build/config
export default defineConfig({
	site,
	i18n: {
		defaultLocale: DEFAULT_LOCALE,
		locales: LOCALES,
	},
	integrations: [
		tailwind(),
		sitemap({
			i18n: {
				defaultLocale: DEFAULT_LOCALE,
				locales: LOCALES.reduce((acc, code) => ({ ...acc, [code]: code }), {}),
			},
		}),
	],
})
