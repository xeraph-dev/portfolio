import { G, Path } from "@react-pdf/renderer";
import type { IconProps } from "./icon";
import Icon from "./icon";

export default function BrandLinkedIn({ size }: IconProps) {
	return (
		<Icon size={size}>
			<G
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			>
				<Path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5" />
				<Path d="M16 16v-3a2 2 0 0 0-4 0" />
			</G>
		</Icon>
	);
}
