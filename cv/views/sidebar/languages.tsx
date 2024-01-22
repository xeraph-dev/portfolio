import { StyleSheet, Text, View } from '@react-pdf/renderer'
import Divider from '#cv/components/divider'
import { FONT_SIZES } from '#cv/utils/constants'
import { t } from '#i18n'

const styles = StyleSheet.create({
	languagesTitle: {
		marginBottom: 4,
	},
	languagesContent: {
		marginTop: 12,
		gap: 4,
	},
	language: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		fontSize: FONT_SIZES.medium,
		alignItems: 'center',
	},
	languageKnowledge: {
		color: '#343a40',
		fontSize: FONT_SIZES.small,
	},
})

export default function Languages() {
	return (
		<View>
			<Text style={styles.languagesTitle}>{t('cv.sidebar.languages.title')}</Text>
			<Divider size={2} />
			<View style={styles.languagesContent}>
				<View style={styles.language}>
					<Text>{t('cv.sidebar.languages.spanish')}</Text>
					<Text style={styles.languageKnowledge}>{t('cv.sidebar.languages.native')}</Text>
				</View>
				<View style={styles.language}>
					<Text>{t('cv.sidebar.languages.english')}</Text>
					<Text style={styles.languageKnowledge}>{t('cv.sidebar.languages.intermediate')}</Text>
				</View>
			</View>
		</View>
	)
}
