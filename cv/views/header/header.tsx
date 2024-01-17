import { StyleSheet, View } from "@react-pdf/renderer";
import ContactLinks from "./contact-links";
import { Name } from "./name";
import ShortAbout from "./short-about";

const styles = StyleSheet.create({
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 16,
	},
});

export default function Header() {
	return (
		<View style={styles.header}>
			<Name />
			<ShortAbout />
			<ContactLinks />
		</View>
	);
}
