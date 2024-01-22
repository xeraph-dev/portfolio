import { G, Path } from '@react-pdf/renderer'
import type { IconProps } from './icon'
import Icon from './icon'

export default function BrandGithub({ size }: IconProps) {
	return (
		<Icon size={size}>
			<G
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			>
				<Path d="M15.172 15.299c1.202-.25 2.293-.682 3.14-1.316c1.448-1.084 2.188-2.758 2.188-4.411c0-1.16-.44-2.243-1.204-3.16c-.425-.511.819-3.872-.286-3.359c-1.105.514-2.725 1.198-3.574.947c-.909-.268-1.9-.416-2.936-.416c-.9 0-1.766.111-2.574.317c-1.174.298-2.296-.363-3.426-.848c-1.13-.484-.513 3.008-.849 3.422C4.921 7.38 4.5 8.44 4.5 9.572c0 1.653.895 3.327 2.343 4.41c.965.722 2.174 1.183 3.527 1.41" />
				<Path d="M10.37 15.391c-.58.637-.869 1.24-.869 1.813V21m5.671-5.701c.549.719.823 1.364.823 1.936V21M3.5 15.668c.45.054.783.26 1 .618c.326.537 1.537 2.526 2.913 2.526H9.5" />
			</G>
		</Icon>
	)
}
