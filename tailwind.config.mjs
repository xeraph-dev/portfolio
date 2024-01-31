import { addDynamicIconSelectors } from '@iconify/tailwind'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},

			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
		},
	},
	plugins: [
		forms({ strategy: 'class' }),
		typography(),
		addDynamicIconSelectors(),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': value => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			)
		}),
	],
}
