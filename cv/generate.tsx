import { join } from "node:path";
import { renderToFile } from "@react-pdf/renderer";
import { LOCALES, init, locale } from "#i18n";
import CV from "./cv";

await init();

for await (const _locale of LOCALES) {
	locale.set(_locale);
	await renderToFile(
		<CV />,
		join(import.meta.dir, "..", "public", `cv-${_locale}.pdf`),
	);
}
