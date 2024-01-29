import { StyleSheet, Text, View } from '@react-pdf/renderer'
import Divider from '#cv/components/divider'
import { FONT_SIZES } from '#cv/utils/constants'
import { t } from '#i18n'

const styles = StyleSheet.create({
	aboutMeTitle: {
		marginBottom: 4,
	},
	aboutMeContent: {
		fontSize: FONT_SIZES.small,
		marginTop: 12,
		textAlign: 'justify',
		lineHeight: 1.2,
		gap: 8,
	},
})

export default function AboutMe() {
	return (
		<View>
			<Text style={styles.aboutMeTitle}>{t('cv.sidebar.about-me.title')}</Text>
			<Divider size={2} />
			<View style={styles.aboutMeContent}>
				<Text>{t('cv.sidebar.about-me.paragraph-1')}</Text>
				<Text>{t('cv.sidebar.about-me.paragraph-2')}</Text>
			</View>
		</View>
	)
}
