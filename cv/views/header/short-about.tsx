import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { addDays, intervalToDuration } from 'date-fns'
import { useMemo } from 'react'
import { FONT_SIZES } from '#cv/utils/constants'
import { t } from '#i18n'

const styles = StyleSheet.create({
	shortAbout: {
		gap: 5,
		alignItems: 'center',
	},
	shortAboutText: {
		fontSize: FONT_SIZES.medium,
	},
})

export default function ShortAbout() {
	const years = useMemo(() => {
		const duration = intervalToDuration({
			start: new Date('2019-04'),
			end: addDays(Date.now(), 1),
		})

		const yearsText = t('common.years', {
			count: duration.years ?? 0,
		})
		let years = duration.years ? `${duration.years} ${yearsText}` : ''
		if (years && (!duration.months || duration.months > 0)) {
			years = `+${years}`
		}
		return years
	}, [])

	return (
		<View style={styles.shortAbout}>
			<Text style={styles.shortAboutText}>
				{years} {t('cv.header.short-about.front-end-developer')}
			</Text>
			<Text style={styles.shortAboutText}>{t('cv.header.short-about.self-taught-programmer')}</Text>
			<Text style={styles.shortAboutText}>
				{t('cv.header.short-about.functional-programming-lover')}
			</Text>
		</View>
	)
}
