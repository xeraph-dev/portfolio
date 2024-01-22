import * as dom from 'dts-dom'
import type { flattenTranslationsKeys } from './utils'

export const generateTypesDefinitions = (
	keys: Awaited<ReturnType<typeof flattenTranslationsKeys>>,
) => {
	const ns = dom.create.namespace('globalThis')

	ns.members.push(
		dom.create.alias(
			'LocaleKeys',
			dom.create.union(Object.keys(keys).map(key => dom.type.stringLiteral(key))),
		),
		dom.create.alias(
			'LocaleOptions',
			dom.create.objectType(
				Object.entries(keys).map(([key, props]) =>
					dom.create.property(
						key,
						Object.keys(props).length === 0
							? dom.type.void
							: dom.create.objectType(
									Object.entries(props).map(([prop, types]) =>
										dom.create.property(
											prop,
											dom.create.union([...types].map(type => dom.create.typeParameter(type))),
										),
									),
							  ),
					),
				),
			),
		),
	)

	return dom.emit(ns)
}
