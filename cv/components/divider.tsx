import { StyleSheet, View } from '@react-pdf/renderer'

const styles = ({ size = 0.5, color = '#343a40' }) =>
	StyleSheet.create({
		divider: {
			width: '100%',
			backgroundColor: color,
			height: size,
			borderRadius: '50%',
		},
	})

export default function Divider({
	size,
	color,
}: { size?: number; color?: string; rounded?: boolean }) {
	return <View style={{ ...styles({ size, color }).divider }}></View>
}
