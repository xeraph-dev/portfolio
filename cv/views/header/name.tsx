import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FONT_SIZES } from "#cv/utils/constants";

const styles = StyleSheet.create({
	name: {
		fontSize: FONT_SIZES.giant,
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
