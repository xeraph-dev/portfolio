import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Divider from "#/components/divider";
import Work from "./work";

const styles = StyleSheet.create({
	workExperience: {
		flexGrow: 1,
	},
	workExperienceTitle: {
		marginBottom: 4,
	},
	workExperienceBody: {},
});

export default function WorkExperience() {
	return (
		<View style={styles.workExperience}>
			<Text style={styles.workExperienceTitle}>Work experience</Text>
			<Divider size={2} />
			<View style={styles.workExperienceBody}>
				<Work
					company="Divertimento"
					method="Remote"
					job="Web developer"
					start="2022-11"
					actions={[]}
				/>
				<Divider />
				<Work
					company="Freelance"
					method="Remote"
					job="Front-end developer"
					start="2022-9"
					end="2022-11"
					actions={[]}
				/>
				<Divider />
				<Work
					company="Divertimento"
					method="Remote"
					job="Front-end developer"
					start="2022-3"
					end="2022-8"
					actions={[]}
				/>
				<Divider />
				<Work
					company="IJP Software"
					method="Remote"
					job="Front-end developer"
					start="2021-7"
					end="2022-7"
					actions={[]}
				/>
				<Divider />
				<Work
					company="Xetid"
					method="Havana / Cuba"
					job="Drupal developer"
					start="2019-10"
					end="2021-8"
					actions={[
						"Create the website www.epromap.cu",
						"Create the website www.minjus.gob.cu",
						"Technical support to multiple websites",
					]}
				/>
			</View>
		</View>
	);
}
