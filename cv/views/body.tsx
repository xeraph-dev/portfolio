import { StyleSheet, View } from '@react-pdf/renderer'
import Sidebar from './sidebar/sidebar'
import WorkExperience from './work-experience/work-experience'

const styles = StyleSheet.create({
	body: {
		flexDirection: 'row',
		gap: 32,
		marginTop: 28,
	},
})

export default function Body() {
	return (
		<View style={styles.body}>
			<Sidebar />
			<WorkExperience />
		</View>
	)
}
