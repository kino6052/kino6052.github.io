import { defineConfig } from "astro/config";

// GitHub Pages serves the docs folder on main.
export default defineConfig({
  site: "https://kino6052.github.io",
  outDir: "./docs",
  build: { assets: "assets" },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
});
