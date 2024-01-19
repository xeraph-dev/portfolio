import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FONT_SIZES } from "#/utils/constants";

const styles = StyleSheet.create({
	shortAbout: {
		gap: 5,
		alignItems: "center",
	},
	shortAboutText: {
		fontSize: FONT_SIZES.medium,
	},
});

export default function ShortAbout() {
	return (
		<View style={styles.shortAbout}>
			<Text style={styles.shortAboutText}>+4 years front-end developer</Text>
			<Text style={styles.shortAboutText}>self-taught programmer</Text>
			<Text style={styles.shortAboutText}>functional programming lover</Text>
		</View>
	);
}
