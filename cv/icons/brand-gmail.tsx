import { G, Path } from '@react-pdf/renderer'
import type { IconProps } from './icon'
import Icon from './icon'

export default function BrandGMail({ size }: IconProps) {
	return (
		<Icon size={size}>
			<G
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			>
				<Path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3zM5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1M16 4l-4 4l-4-4" />
				<Path d="m4 6.5l8 7.5l8-7.5" />
			</G>
		</Icon>
	)
}
