import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	name: {
		fontSize: 24,
		lineHeight: 1.2,
	},
});

export function Name() {
	return (
		<View style={styles.name}>
			<Text>Adrian René</Text>
			<Text>López Cintas</Text>
		</View>
	);
}
