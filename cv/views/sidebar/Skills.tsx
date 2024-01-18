import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Divider from "#/components/divider";
import Skill from "./skill";

const styles = StyleSheet.create({
	skillsTitle: {
		marginBottom: 4,
	},
	skillsContent: {
		marginTop: 12,
		gap: 8,
	},
});

export default function Skills() {
	return (
		<View>
			<Text style={styles.skillsTitle}>Skills</Text>
			<Divider size={2} />
			<View style={styles.skillsContent}>
				<Skill level={95} name="HTML / CSS" />
				<Skill level={90} name="JavaScript / TypeScript" />
				<Skill level={85} name="React" />
				<Skill level={75} name="Go" />
				<Skill level={80} name="SQL" />
			</View>
		</View>
	);
}
