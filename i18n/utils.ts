export const searchTranslations = (cwd: string) => {
	return new Bun.Glob('**/*.json').scan({
		cwd,
		absolute: true,
		onlyFiles: true,
	})
}

export const extract = (str: string) =>
	str.match(/\{\{(.*?)\}\}/g)?.map((el: string) => el.replace(/[\{\}]/g, '').split(':')) ?? []

export const flattenObject = function (
	obj: object,
	condition?: (value: any, key: string, fullKey: string) => boolean,
	separator = '.',
	baseKey = '',
) {
	const flatten: Record<string, string> = {}

	for (const [key, value] of Object.entries(obj)) {
		if (key === '$schema') continue
		const fullKey = baseKey.concat(baseKey !== '' ? separator : '', key)
		if (value === null || typeof value !== 'object' || condition?.(value, key, fullKey)) {
			flatten[fullKey] = value
		} else {
			for (const [fkey, fvalue] of Object.entries(
				flattenObject(value, condition, separator, fullKey),
			)) {
				flatten[fkey] = fvalue
			}
		}
	}

	return flatten
}

export const isPluralizable = (value: object) =>
	typeof value !== 'object' ? false : Object.keys(value).join(' ') === 'one many'

export const flattenTranslations = async (cwd: string) => {
	const keys: Record<string, string> = {}

	for await (const file of searchTranslations(cwd)) {
		let json = JSON.parse(await Bun.file(file).text())
		json = flattenObject(json, isPluralizable)
		for (const [key, value] of Object.entries<any>(json)) {
			if (!['string', 'object'].includes(typeof value)) continue

			const tkey = file
				.replace(cwd, '')
				.replace(/\.json$/, '')
				.replace(/^\//, '')
				.split('/')
				.join('.')
				.concat('.', key)

			keys[tkey] = value
		}
	}

	return keys
}

export const flattenTranslationsKeys = async (cwd: string) => {
	const keys: Record<string, Record<string, Set<string>>> = {}

	for await (const file of searchTranslations(cwd)) {
		let json = JSON.parse(await Bun.file(file).text())
		json = flattenObject(json, isPluralizable)

		for (const [key, value] of Object.entries<any>(json)) {
			if (!['string', 'object'].includes(typeof value)) continue
			const options: Record<string, Set<string>> = {}

			const pluralizable = isPluralizable(value)

			let extracted = pluralizable ? extract(value.one).concat(extract(value.many)) : extract(value)

			for (const [name, type] of extracted) {
				if (!options[name]) {
					options[name] = new Set([type ?? 'any'])
				} else {
					options[name].add(type ?? 'any')
				}
				if (options[name].size > 1 && options[name].has('any')) {
					options[name].delete('any')
				}
			}

			if (pluralizable) {
				options['count'] = new Set(['number'])
			}

			const tkey = file
				.replace(cwd, '')
				.replace(/\.json$/, '')
				.replace(/^\//, '')
				.split('/')
				.slice(1)
				.join('.')
				.concat('.', key)

			keys[tkey] = options
		}
	}

	return keys
}
