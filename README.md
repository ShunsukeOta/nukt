# nukt / Next.js

Art-directed band website built with Next.js 15, App Router and TypeScript.

## Content editing

All editable data lives in **`src/site-data.ts`**:

- `youtubeVideoId`: Replace `null` with the video ID from a YouTube URL like `https://www.youtube.com/watch?v=YOUR_ID`. A privacy-aware click-to-play YouTube embed will appear.
- `platforms[].url`: Replace `null` with the **band's verified official account/artist URL** for X, Instagram, Spotify and Apple Music. Until then the row says `not linked` and cannot mislead visitors.
- `history`: Add actual events with year, date, title and optional detail. The initial entry (`2026 / 11.02 / nukt`) is the project naming date; edit or remove it as desired.
- `releases`: Replace temporary title, year, and artwork paths with real releases. The bundled SVG covers are placeholders.
- `goods`: Illustrated placeholders are *concept items*, not products offered for purchase. Set up real items and a store/payment checkout before enabling commerce.

## Run / deploy

```sh
npm install
npm run dev
npm run build
```

Deploy the GitHub repository root (`./`) to Vercel as **Next.js**, Node.js 22.x. The existing `nukt` project uses the `nukt-theta.vercel.app` alias. No environment variables are required.

## Design

Palette `#f8f8f8` / `#112233`. Fonts `Space Grotesk` and `IBM Plex Mono`.
Animations are CSS-based for the hero and artwork, with intersection-observer scroll reveals. Reduced-motion users get a static, accessible view.
