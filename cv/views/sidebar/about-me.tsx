import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Divider from "#/components/divider";
import { FONT_SIZES } from "#/utils/constants";

const styles = StyleSheet.create({
	aboutMeTitle: {
		marginBottom: 4,
	},
	aboutMeContent: {
		fontSize: FONT_SIZES.small,
		marginTop: 12,
		textAlign: "justify",
		lineHeight: 1.2,
	},
});

export default function AboutMe() {
	return (
		<View>
			<Text style={styles.aboutMeTitle}>About me</Text>
			<Divider size={2} />
			<Text style={styles.aboutMeContent}>
				Self-taught front-end web developer, passionate about programming and
				follower to the functional paradigm. Specialized in creating and
				improving digital interfaces, with a focus on maintaining complex
				websites by troubleshooting, implementing new features, and ensuring
				optimal performance. I have a deep understanding of the overall
				front-end web ecosystem, with strong skills in HTML, CSS, and
				JavaScript, backed by significant experience in frameworks like React.
				Beyond the technical realm, my interests extend to philosophy,
				economics, politics, and history, aiming to shape my own worldview.
			</Text>
		</View>
	);
}
