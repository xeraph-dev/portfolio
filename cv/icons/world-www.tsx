import { G, Path } from '@react-pdf/renderer'
import type { IconProps } from './icon'
import Icon from './icon'

export default function WorldWww({ size }: IconProps) {
	return (
		<Icon size={size}>
			<G
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			>
				<Path d="M19.5 7A9 9 0 0 0 12 3a8.991 8.991 0 0 0-7.484 4"></Path>
				<Path d="M11.5 3a16.989 16.989 0 0 0-1.826 4M12.5 3a16.989 16.989 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4a8.991 8.991 0 0 1-7.484-4"></Path>
				<Path d="M11.5 21a16.989 16.989 0 0 1-1.826-4m2.826 4a16.989 16.989 0 0 0 1.828-4M2 10l1 4l1.5-4L6 14l1-4m10 0l1 4l1.5-4l1.5 4l1-4M9.5 10l1 4l1.5-4l1.5 4l1-4"></Path>
			</G>
		</Icon>
	)
}
