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
					skills={["HTML / CSS", "JS / TS", "React", "Go", "PHP", "SQL"]}
					actions={[
						"Agile methodologies",
						"Was part of the development of the front-end, back-end and database",
						"Involved in core product development",
						"Made heavy SQL optimizations",
						"Helped to develop and maintain multiple websites",
					]}
				/>
				<Divider />
				<Work
					company="Freelance"
					method="Remote"
					job="Front-end developer"
					start="2022-9"
					end="2022-11"
					skills={["JavaScript", "React", "SAP"]}
					actions={[
						"Agile methodologies",
						"Improved overall site performance by using best practices and advanced React's techniques",
						"Involved in core product development",
					]}
				/>
				<Divider />
				<Work
					company="Divertimento"
					method="Remote"
					job="Front-end developer"
					start="2022-3"
					end="2022-8"
					skills={["HTML / CSS", "JS / TS", "React", "Vue", "Express"]}
					actions={["Helped to develop and maintain multiple websites"]}
				/>
				<Divider />
				<Work
					company="IJP Software"
					method="Remote"
					job="Front-end developer"
					start="2021-7"
					end="2022-7"
					skills={["HTML / CSS", "JS / TS", "React", "Next", "Vue"]}
					actions={[
						"Agile methodologies",
						"Helped in the development of a complex product almost from scratch",
						"Helped to develop and maintain multiple websites",
						"Participated in a hackathon with part of the core team",
					]}
				/>
				<Divider />
				<Work
					company="Xetid"
					method="Havana / Cuba"
					job="Drupal developer"
					start="2019-10"
					end="2021-8"
					skills={["HTML / CSS", "jQuery", "PHP", "Drupal", "Linux"]}
					actions={[
						"Waterfall methodologies",
						"Create the website www.epromap.cu",
						"Create the website www.minjus.gob.cu",
						"Helped to develop and maintain multiple websites",
					]}
				/>
			</View>
		</View>
	);
}
