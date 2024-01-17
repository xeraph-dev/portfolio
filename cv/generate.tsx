import { watch } from "node:fs/promises";
import { join } from "node:path";
import { renderToFile } from "@react-pdf/renderer";
import CV from "./cv";

await renderToFile(<CV />, join(import.meta.dir, "..", "public", "cv.pdf"));
