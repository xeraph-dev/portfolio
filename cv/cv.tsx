import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import Divider from "./components/divider";
import Body from "./views/body";
import Header from "./views/header/header";

const styles = StyleSheet.create({
	page: {
		padding: 24,
	},
});

export default function CV() {
	return (
		<Document
			title="Adrian's portfolio"
			author="Adrian René López Cintas"
			pdfVersion="1.7"
			language="en-US"
			pageMode="fullScreen"
		>
			<Page size="A4" style={styles.page}>
				<Header />
				<Divider />
				<Body />
			</Page>
		</Document>
	);
}
