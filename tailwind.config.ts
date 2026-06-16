import type { Config } from "tailwindcss";

/**
 * Tailwind is wired to the same design tokens defined in styles/tokens.css.
 * Utilities resolve to the CSS custom properties so there is a single source
 * of truth — the editorial component styles still live in styles/site.css and
 * styles/pages.css, ported verbatim from the Claude Design output.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-deep": "var(--paper-deep)",
        ink: "var(--ink)",
        "ink-90": "var(--ink-90)",
        "ink-70": "var(--ink-70)",
        "ink-55": "var(--ink-55)",
        "ink-30": "var(--ink-30)",
        "ink-15": "var(--ink-15)",
        "ink-08": "var(--ink-08)",
        marigold: "var(--marigold)",
        "marigold-deep": "var(--marigold-deep)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        deva: "var(--font-deva)",
        mono: "var(--font-mono)",
      },
      spacing: {
        "s-1": "var(--s-1)",
        "s-2": "var(--s-2)",
        "s-3": "var(--s-3)",
        "s-4": "var(--s-4)",
        "s-5": "var(--s-5)",
        "s-6": "var(--s-6)",
        "s-7": "var(--s-7)",
        "s-8": "var(--s-8)",
        "s-9": "var(--s-9)",
        "s-10": "var(--s-10)",
        "s-11": "var(--s-11)",
      },
      maxWidth: {
        "measure-narrow": "var(--measure-narrow)",
        "measure-body": "var(--measure-body)",
        "measure-wide": "var(--measure-wide)",
        "measure-page": "var(--measure-page)",
      },
      borderRadius: {
        "r-1": "var(--r-1)",
        "r-2": "var(--r-2)",
      },
      transitionTimingFunction: {
        "ease-out-editorial": "var(--ease-out)",
        "ease-in-editorial": "var(--ease-in)",
      },
    },
  },
  plugins: [],
};

export default config;
