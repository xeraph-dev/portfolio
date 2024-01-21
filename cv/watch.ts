import { watch } from "node:fs/promises";

const watcher = watch(import.meta.dir, { recursive: true });

for await (const _ of watcher) {
	await Bun.spawn({ cmd: ["bun", "build:cv"] }).exited;
}
