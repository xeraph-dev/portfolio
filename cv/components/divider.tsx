import { StyleSheet, View } from "@react-pdf/renderer";

const styles = ({ size = 0.5, color = "gray" }) =>
	StyleSheet.create({
		divider: {
			width: "100%",
			borderBottom: `${size}px solid ${color}`,
		},
	});

export default function Divider({
	size,
	color,
}: { size?: number; color?: string }) {
	return <View style={{ ...styles({ size, color }).divider }}></View>;
}
