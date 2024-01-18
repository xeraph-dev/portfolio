import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Divider from "#/components/divider";
import { FONT_SIZES } from "#/utils/constants";

const styles = StyleSheet.create({
	educationTitle: {
		marginBottom: 4,
	},
	educationContent: {
		marginTop: 12,
	},
	educationContentTop: {
		color: "#343a40",
		fontSize: FONT_SIZES.small,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	educationContentBottom: {
		marginTop: 8,
		fontSize: FONT_SIZES.medium,
	},
});

export default function Education() {
	return (
		<View>
			<Text style={styles.educationTitle}>Education</Text>
			<Divider size={2} />
			<View style={styles.educationContent}>
				<View style={styles.educationContentTop}>
					<Text>2014 - 2017</Text>
					<Text>IPU Presencia de Celia</Text>
				</View>
				<Text style={styles.educationContentBottom}>Bachiller general</Text>
			</View>
		</View>
	);
}
