import { join } from 'node:path'
import { renderToFile } from '@react-pdf/renderer'
import { LOCALES, init, locale } from '#i18n'
import CV from './cv'

console.time('cv generated successfully')
await init()

for await (const _locale of LOCALES) {
	locale.set(_locale)
	await renderToFile(<CV />, join(import.meta.dir, '..', 'public', `cv-${_locale}.pdf`))
}

console.timeEnd('cv generated successfully')
