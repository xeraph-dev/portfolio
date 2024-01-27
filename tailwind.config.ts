import { addDynamicIconSelectors } from '@iconify/tailwind'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
		},
	},
	plugins: [forms({ strategy: 'class' }), typography(), addDynamicIconSelectors()],
}
