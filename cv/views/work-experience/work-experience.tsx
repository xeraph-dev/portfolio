import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Divider from "../../components/divider";

const styles = StyleSheet.create({
	workExperience: {
		flexGrow: 1,
	},
	workExperienceText: {
		marginBottom: 4,
	},
	workExperienceBody: {
		marginTop: 12,
	},
});

export default function WorkExperience() {
	return (
		<View style={styles.workExperience}>
			<Text style={styles.workExperienceText}>Work experience</Text>
			<Divider size={2} />
			<View style={styles.workExperienceBody}></View>
		</View>
	);
}
