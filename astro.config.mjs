import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shimamatz.github.io",
  base: "/notes",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
