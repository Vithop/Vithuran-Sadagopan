# Vithuran Sadagopan // Portfolio (`vithuran.dev`)

> Personal engineering portfolio showcasing high-availability distributed systems, deterministic frontend architectures, and autonomous AI developer acceleration tooling.

Built with **SolidJS**, **SolidStart**, and **Nitro Static Prerendering (SSG)**, styled with a high-contrast architectural concrete design system, and deployed to **GitHub Pages**.

---

## Tech Stack

- **Framework**: [SolidJS](https://www.solidjs.com/) + [SolidStart](https://start.solidjs.com/) (SSR / Nitro static prerender)
- **Styling**: Vanilla CSS with custom architectural design tokens and WCAG AAA/AA compliant contrast
- **Type Safety & Quality**: TypeScript, ESLint, Prettier, Husky
- **Deployment**: GitHub Actions (`deploy.yml`) prerendering to `./.output/public`

---

## Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript typechecker
npm run typecheck

# Run ESLint
npm run lint

# Format codebase
npm run format

# Build and prerender static production bundle
npm run build
```

---

## Architecture & Directory Structure

```text
├── public/                 # Static assets (fonts, WebP project media, resume, robots.txt, llms.txt)
├── src/
│   ├── components/         # Presentation components (Hero, Experience, Skills, Portfolio, Horizons, ArchivePage, Contact)
│   ├── data/               # Editorial content manifests and domain types
│   ├── routes/             # SolidStart route entries (index.tsx)
│   ├── app.tsx             # Root router shell and HTML metadata providers
│   ├── entry-client.tsx    # Client hydration entry
│   ├── entry-server.tsx    # Nitro server document shell
│   └── index.css           # Core design system tokens, typography, and utility classes
├── vite.config.ts          # Vite + SolidStart + Nitro prerender configuration
└── eslint.config.js        # Modern flat ESLint configuration
```
