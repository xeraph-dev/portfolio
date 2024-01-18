import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	shortAbout: {
		gap: 5,
		alignItems: "center",
	},
	shortAboutText: {
		fontSize: 12,
	},
});

export default function ShortAbout() {
	return (
		<View style={styles.shortAbout}>
			<Text style={styles.shortAboutText}>Front-end developer</Text>
			<Text style={styles.shortAboutText}>Self-taught programmer</Text>
			<Text style={styles.shortAboutText}>Functional programming lover</Text>
		</View>
	);
}
