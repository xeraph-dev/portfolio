import { Svg } from '@react-pdf/renderer'
import type { PropsWithChildren } from 'react'

export type IconProps = { size?: number }

export default function Icon({ children, size = 16 }: PropsWithChildren<IconProps>) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			{children}
		</Svg>
	)
}
