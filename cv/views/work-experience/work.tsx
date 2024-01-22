import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { addDays, intervalToDuration } from 'date-fns'
import { useMemo } from 'react'
import { FONT_SIZES } from '#cv/utils/constants'

const styles = StyleSheet.create({
	work: {
		flexDirection: 'row',
		paddingVertical: 12,
		gap: 24,
	},
	info: {
		gap: 5,
		flexBasis: '20%',
	},
	duration: {
		fontSize: FONT_SIZES.small,
		color: '#343a40',
	},
	location: {
		fontSize: FONT_SIZES.small,
		color: '#343a40',
		flexGrow: 1,
	},
	company: {
		fontSize: FONT_SIZES.large,
	},
	skills: {
		flexDirection: 'row',
		gap: 4,
		fontSize: FONT_SIZES.small,
		flexWrap: 'wrap',
		marginTop: 4,
	},
	skill: {
		backgroundColor: '#dfe5e3',
		borderRadius: 3,
		padding: 2,
	},
	title: {
		fontSize: FONT_SIZES.medium,
		marginBottom: 5,
	},
	actions: {
		fontSize: FONT_SIZES.small,
		gap: 2,
		flexBasis: '35%',
	},
	action: {
		flexDirection: 'row',
		gap: 4,
	},
})

type WorkProps = {
	company: string
	location: string
	job: string
	start: string
	end?: string
	actions: string[]
	skills: string[]
}

export default function Work({ company, location, job, start, end, actions, skills }: WorkProps) {
	const duration = useMemo(() => {
		const startDate = new Date(start)
		const endDate = new Date(end ?? Date.now())
		const startYear = startDate.getFullYear()
		const endYear = endDate.getFullYear()
		const duration = intervalToDuration({
			start: startDate,
			end: addDays(endDate, 1),
		})
		const interval = startYear === endYear ? startYear : `${startYear} - ${endYear}`
		const yearsText = 'year' + ((duration.years ?? 0) > 1 ? 's' : '')
		const monthsText = 'month' + ((duration.months ?? 0) > 1 ? 's' : '')
		let years = duration.years ? `${duration.years} ${yearsText}` : ''
		let months = duration.months ? `${duration.months} ${monthsText}` : ''
		if (years && months) {
			years = `+${years}`
			months = ''
		}
		return `${interval} | ${years}${months}`
	}, [start, end])

	return (
		<View style={styles.work}>
			<View style={styles.info}>
				<Text style={styles.company}>{company}</Text>
				<Text style={styles.duration}>{duration}</Text>
				<Text style={styles.location}>{location}</Text>
				<View style={styles.skills}>
					{skills.map(skill => (
						<Text style={styles.skill} key={skill}>
							{skill}
						</Text>
					))}
				</View>
			</View>
			<View style={styles.actions}>
				<Text style={styles.title}>{job}</Text>
				{actions.map(action => (
					<View key={action} style={styles.action}>
						<Text>•</Text>
						<Text>{action}</Text>
					</View>
				))}
			</View>
		</View>
	)
}
