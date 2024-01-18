import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { addDays, intervalToDuration } from "date-fns";
import { useMemo } from "react";
import BrandGithub from "#/icons/brand-github";
import BrandLinkedIn from "#/icons/brand-linkedin";
import WorldWww from "#/icons/world-www";

const styles = StyleSheet.create({
	work: {
		flexDirection: "row",
		paddingVertical: 12,
		gap: 24,
	},
	info: {
		gap: 5,
		width: "30%",
	},
	duration: {
		fontSize: 10,
		color: "#343a40",
	},
	method: {
		fontSize: 10,
		color: "#343a40",
	},
	company: {
		fontSize: 14,
	},
	skills: {
		flexDirection: "row",
		gap: 2,
	},
	title: {
		fontSize: 12,
		marginBottom: 5,
	},
	actions: {
		fontSize: 10,
		gap: 2,
	},
});

type WorkProps = {
	company: string;
	method: string;
	job: string;
	start: string;
	end?: string;
	actions: string[];
};

export default function Work({
	company,
	method,
	job,
	start,
	end,
	actions,
}: WorkProps) {
	const duration = useMemo(() => {
		const startDate = new Date(start);
		const endDate = new Date(end ?? Date.now());
		const startYear = startDate.getFullYear();
		const endYear = endDate.getFullYear();
		const duration = intervalToDuration({
			start: startDate,
			end: addDays(endDate, 1),
		});
		const interval =
			startYear === endYear ? startYear : `${startYear} - ${endYear}`;
		const yearsText = "year" + ((duration.years ?? 0) > 1 ? "s" : "");
		const monthsText = "year" + ((duration.months ?? 0) > 1 ? "s" : "");
		let years = duration.years ? `${duration.years} ${yearsText}` : "";
		let months = duration.months ? `${duration.months} ${monthsText}` : "";
		if (years && months) {
			years = `+${years}`;
			months = "";
		}
		return `${interval} | ${years}${months}`;
	}, [start, end]);

	return (
		<View style={styles.work}>
			<View style={styles.info}>
				<Text style={styles.company}>{company}</Text>
				<Text style={styles.duration}>{duration}</Text>
				<Text style={styles.method}>{method}</Text>
				<View style={styles.skills}>
					<BrandGithub />
					<BrandLinkedIn />
					<WorldWww />
				</View>
			</View>
			<View style={styles.actions}>
				<Text style={styles.title}>{job}</Text>
				{actions.map((action) => (
					<Text key={action}>- {action}</Text>
				))}
			</View>
		</View>
	);
}
