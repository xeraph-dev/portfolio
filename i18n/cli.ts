import { watch, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { program } from 'commander'
import { generateTypesDefinitions } from './types'
import { flattenTranslationsKeys } from './utils'

const generate = async (cwd: string) => {
	console.time('i18n types generated successfully')
	const definitionsPath = join(import.meta.dir, 'i18n.d.ts')
	const keys = await flattenTranslationsKeys(cwd)
	const definitions = generateTypesDefinitions(keys)
	await writeFile(definitionsPath, definitions)
	console.timeEnd('i18n types generated successfully')
}

program
	.command('generate')
	.option('-w, --watch')
	.action(async (_, options) => {
		const opts = options.opts()

		const locales = resolve(join(import.meta.dir, '..', 'locales'))

		await generate(locales)

		if (opts.watch) {
			const watcher = watch(locales, { recursive: true })
			for await (const _ of watcher) {
				try {
					await generate(locales)
				} catch (error) {
					console.warn('Skipping due to error: ')
					console.error(error)
				}
			}
		}
	})

program.command('check').action(async () => {
	console.warn('TODO!')
})

program.parse()
