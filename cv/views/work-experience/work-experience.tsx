import { StyleSheet, Text, View } from '@react-pdf/renderer'
import Divider from '#cv/components/divider'
import { t } from '#i18n'
import Work from './work'

const styles = StyleSheet.create({
	workExperience: {
		flexGrow: 1,
	},
	workExperienceTitle: {
		marginBottom: 4,
	},
	workExperienceBody: {},
})

export default function WorkExperience() {
	return (
		<View style={styles.workExperience}>
			<Text style={styles.workExperienceTitle}>{t('cv.work.title')}</Text>
			<Divider size={2} />
			<View style={styles.workExperienceBody}>
				<Work
					company="Divertimento"
					location={t('common.remote')}
					job="Web developer"
					start="2022-11"
					skills={['HTML / CSS', 'JS / TS', 'React', 'Go', 'PHP', 'SQL']}
					actions={[
						t('cv.work.jobs.divertimento-2.action-1'),
						t('cv.work.jobs.divertimento-2.action-2'),
						t('cv.work.jobs.divertimento-2.action-3'),
						t('cv.work.jobs.divertimento-2.action-4'),
						t('cv.work.jobs.divertimento-2.action-5'),
					]}
				/>
				<Divider />
				<Work
					company="Freelance"
					location={t('common.remote')}
					job={t('cv.work.front-end-developer')}
					start="2022-9"
					end="2022-11"
					skills={['JavaScript', 'React', 'SAP']}
					actions={[
						t('cv.work.jobs.freelance.action-1'),
						t('cv.work.jobs.freelance.action-2'),
						t('cv.work.jobs.freelance.action-3'),
					]}
				/>
				<Divider />
				<Work
					company="Divertimento"
					location={t('common.remote')}
					job={t('cv.work.front-end-developer')}
					start="2022-3"
					end="2022-8"
					skills={['HTML / CSS', 'JS / TS', 'React', 'Vue', 'Express']}
					actions={[t('cv.work.jobs.divertimento-1.action-1')]}
				/>
				<Divider />
				<Work
					company="IJP Software"
					location={t('common.remote')}
					job={t('cv.work.front-end-developer')}
					start="2021-7"
					end="2022-7"
					skills={['HTML / CSS', 'JS / TS', 'React', 'Next', 'Vue']}
					actions={[
						t('cv.work.jobs.ijp-software.action-1'),
						t('cv.work.jobs.ijp-software.action-2'),
						t('cv.work.jobs.ijp-software.action-3'),
						t('cv.work.jobs.ijp-software.action-4'),
					]}
				/>
				<Divider />
				<Work
					company="Xetid"
					location={`${t('common.havana')} / Cuba`}
					job={t('cv.work.drupal-developer')}
					start="2019-10"
					end="2021-8"
					skills={['HTML / CSS', 'jQuery', 'PHP', 'Drupal', 'Linux']}
					actions={[
						t('cv.work.jobs.xetid.action-1'),
						t('cv.work.jobs.xetid.action-2'),
						t('cv.work.jobs.xetid.action-3'),
						t('cv.work.jobs.xetid.action-4'),
					]}
				/>
			</View>
		</View>
	)
}
