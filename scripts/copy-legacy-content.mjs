import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
const legacyDirectories = ["questions", "styles", "images"];

await mkdir(output, { recursive: true });

for (const directory of legacyDirectories) {
  await cp(resolve(root, directory), resolve(output, directory), {
    recursive: true,
    force: true,
  });
}

console.log(`Copied legacy content: ${legacyDirectories.join(", ")}`);
