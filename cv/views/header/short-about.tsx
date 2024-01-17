import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	shortAbout: {
		display: "flex",
		gap: 5,
	},
	shortAboutText: {
		fontSize: 13,
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
