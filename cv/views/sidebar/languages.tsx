import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Divider from "#/components/divider";
import { FONT_SIZES } from "#/utils/constants";

const styles = StyleSheet.create({
	languagesTitle: {
		marginBottom: 4,
	},
	languagesContent: {
		marginTop: 12,
		gap: 4,
	},
	language: {
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: FONT_SIZES.medium,
		alignItems: "center",
	},
	languageKnowledge: {
		color: "#343a40",
		fontSize: FONT_SIZES.small,
	},
});

export default function Languages() {
	return (
		<View>
			<Text style={styles.languagesTitle}>Languages</Text>
			<Divider size={2} />
			<View style={styles.languagesContent}>
				<View style={styles.language}>
					<Text>Spanish</Text>
					<Text style={styles.languageKnowledge}>native</Text>
				</View>
				<View style={styles.language}>
					<Text>English</Text>
					<Text style={styles.languageKnowledge}>intermediate</Text>
				</View>
			</View>
		</View>
	);
}
