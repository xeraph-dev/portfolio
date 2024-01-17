import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	sidebar: {
		flexBasis: "33%",
	},
});

export default function Sidebar() {
	return <View style={styles.sidebar}></View>;
}
