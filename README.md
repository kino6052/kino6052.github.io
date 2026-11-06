# kino6052.github.io

Kirill Novik's resume and portfolio in English, Russian and Chinese. Built with Astro, pnpm and Bun.

```bash
pnpm install
pnpm dev
pnpm build
```

`pnpm build` writes the site to `docs/`, which GitHub Pages serves from the `main` branch.

## Architecture

- **Static output:** Astro turns every language and route into its own HTML file in `docs/`. There is no client-side router and no server.
- **Content is data:** text lives in `src/data` and the pages in `src/pages/[lang]` only lay it out, so an edit never touches markup.
- **JavaScript only where needed:** the page ships two small scripts, the background and analytics. Firebase loads on demand, when someone sends a message.
- **Background:** `src/scripts/background.ts` draws instanced rectangles in WebGL 2. Their motion is computed in the vertex shader from a single time value, so the CPU does almost no work. It stops when the tab is hidden, stays still under `prefers-reduced-motion`, and falls back to the CSS gradient without WebGL 2.
- **Readability:** all content sits on one frosted sheet (`main`), so the background never competes with the text.
- **Contact:** messages go straight from the browser to Firestore. `firestore.rules` allows validated writes only, and nothing can be read from the site.

## Content

- `src/data/skills.json`: tags and skills, edit these freely
- `src/data/resume.ts`: resume text
- `src/data/ui.ts`: page labels
- `src/data/projects.json`: project pages
- `src/data/articles.json`: articles

## Firebase

Copy `.env.example` to `.env` and fill in the web app config. Until then the contact form opens an email draft and Firebase Analytics stays off.

Messages are stored in the Firestore `messages` collection. Deploy the rules with `firebase deploy --only firestore:rules`.
