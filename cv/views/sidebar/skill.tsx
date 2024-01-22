import { StyleSheet, Text, View } from '@react-pdf/renderer'
import Divider from '#cv/components/divider'
import { FONT_SIZES } from '#cv/utils/constants'

type SkillProps = {
	level: number
	name: string
}

const styles = StyleSheet.create({
	style: {
		fontSize: FONT_SIZES.medium,
		gap: 4,
	},
})

export default function Skill({ level, name }: SkillProps) {
	return (
		<View style={styles.style}>
			<Text>{name}</Text>
			<View style={{ width: `${level}%` }}>
				<Divider size={6} color="#a9b7bb" />
			</View>
		</View>
	)
}
