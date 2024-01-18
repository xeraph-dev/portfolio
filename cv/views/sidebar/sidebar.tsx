import { StyleSheet, View } from "@react-pdf/renderer";
import Skills from "./Skills";
import AboutMe from "./about-me";
import Education from "./education";
import Languages from "./languages";

const styles = StyleSheet.create({
	sidebar: {
		flexBasis: "35%",
		gap: 24,
	},
});

export default function Sidebar() {
	return (
		<View style={styles.sidebar}>
			<AboutMe />
			<Education />
			<Skills />
			<Languages />
		</View>
	);
}
