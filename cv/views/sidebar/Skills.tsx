import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Divider from "#/components/divider";

const styles = StyleSheet.create({
	skillsTitle: {
		marginBottom: 4,
	},
	skillsContent: {
		marginTop: 12,
	},
});

export default function Skills() {
	return (
		<View>
			<Text style={styles.skillsTitle}>Skills</Text>
			<Divider size={2} />
			<View style={styles.skillsContent}></View>
		</View>
	);
}
