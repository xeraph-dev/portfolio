import { StyleSheet, Text, View } from '@react-pdf/renderer'
import Divider from '#cv/components/divider'
import { FONT_SIZES } from '#cv/utils/constants'
import { t } from '#i18n'
import Skill from './skill'

const styles = StyleSheet.create({
	skillsTitle: {
		marginBottom: 4,
	},
	skillsContent: {
		marginTop: 12,
		gap: 8,
	},
	represents: {
		color: '#697481',
		fontSize: FONT_SIZES.smallest,
		marginTop: 8,
		alignItems: 'center',
		textAlign: 'center',
		paddingHorizontal: 12,
	},
})

export default function Skills() {
	return (
		<View>
			<Text style={styles.skillsTitle}>{t('cv.sidebar.skills.title')}</Text>
			<Divider size={2} />
			<View style={styles.skillsContent}>
				<Skill level={95} name="HTML / CSS" />
				<Skill level={90} name="JavaScript / TypeScript" />
				<Skill level={85} name="React" />
				<Skill level={75} name="Go" />
				<Skill level={80} name="SQL" />
			</View>

			<View style={styles.represents}>
				<Text>{t('site.about-me.bars-represents-1')}</Text>
				<Text> {t('site.about-me.bars-represents-2')}</Text>
			</View>
		</View>
	)
}
