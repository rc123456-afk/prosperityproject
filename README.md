# The Prosperity Project

Production website for The Prosperity Project — a financial literacy NGO
delivering the *Knowing Your Money* curriculum in Bengali, Hindi, and English in
partnership with Bandhan NGO.

Built as a **Next.js 14** app (App Router, TypeScript, Tailwind), recreating the
Claude Design output pixel-for-pixel. The editorial design system (colors,
typography, spacing, components) is ported verbatim into `styles/`.

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS (wired to the design tokens in `styles/tokens.css`)
- Fonts: Fraunces, Source Serif 4, Tiro Devanagari Hindi, JetBrains Mono (Google Fonts)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> Note: this machine had no system Node. A local copy lives in `~/.local/node`;
> add `export PATH="$HOME/.local/node/bin:$PATH"` to your shell, or install Node
> 18.17+ (20 LTS recommended) any way you like.

## Structure

```
app/                     App Router routes + root layout
  layout.tsx             page-shell: Nav + main (LanguageGate) + Footer
  globals.css            font @import + Tailwind directives
components/
  Nav.tsx                sticky nav, flat links (+ EN/हिं/বাং switcher)
  Footer.tsx             dark footer, mirrors nav IA
  primitives.tsx         Photo, Caption, Figure, SectionMarker, TertiaryLink, …
  LanguageContext.tsx    EN / HI / BN state
  LanguageGate.tsx       non-EN routes show an honest "Translation in progress"
styles/
  tokens.css             design tokens (colors_and_type.css, verbatim)
  site.css               nav / footer / homepage / curriculum / workshops CSS
  pages.css              stories / gallery / impact / about / contact CSS
  app.css                small app-only additions (documented)
```

## Routes

`/` · `/curriculum` · `/workshops` · `/resources` · `/stories` ·
`/gallery` · `/impact` · `/about` · `/contact`

## Notes

- **Photos** are documentary-warm gradient placeholders (swappable for
  `next/image` later).
- **Language:** English is fully populated; Hindi and Bengali intentionally show
  "Translation in progress" rather than machine-translated copy.
- **Deploy target:** Vercel.
