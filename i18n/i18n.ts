import { atom } from 'nanostores'
import { extract, flattenTranslations } from './utils'

export type Locale = 'en' | 'es'
export const LOCALES: Locale[] = ['en', 'es']
export const LOCALE_NAMES: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
}
export const DEFAULT_LOCALE = LOCALES[0]

export const locale = atom(DEFAULT_LOCALE)

const cache: Record<Locale, Record<string, string | { one: string; many: string }>> = {
	en: {},
	es: {},
}

export async function init() {
	if (typeof window !== 'undefined') {
		throw new Error('i18n initialization within the browser is not implemented yet')
	} else {
		const { readdir } = await import('node:fs/promises')
		const { join } = await import('node:path')
		const locales = join(process.cwd(), 'locales')
		for await (const _locale of (await readdir(locales)) as Locale[]) {
			if (!LOCALES.includes(_locale)) continue
			const root = join(locales, _locale)
			cache[_locale] = await flattenTranslations(root)
		}
	}
}

export function t<T extends LocaleKeys>(
	...args: LocaleOptions[T] extends void
		? [key: T, locale?: Locale]
		: [key: T, options: LocaleOptions[T], locale?: Locale]
): string
export function t(
	key: LocaleKeys,
	_options?: Locale | LocaleOptions[LocaleKeys],
	_locale?: Locale,
): string {
	const lang = (typeof _options === 'string' ? _options : _locale) ?? locale.get()
	const options: { [key: string]: any } =
		(typeof _options === 'object' ? _options : undefined) ?? {}
	let text = cache[lang][key] ?? cache[DEFAULT_LOCALE][key]

	if (typeof text === 'object') {
		text = options['count'] === 1 ? text.one : text.many
	}

	for (const [param] of extract(text)) {
		if (!options[param]) continue
		text = text.replace(new RegExp(`{{(${param})(:\\w+)?}}`, 'g'), options[param])
	}
	return text
}
