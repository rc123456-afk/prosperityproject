import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Source_Serif_4,
  JetBrains_Mono,
  Tiro_Devanagari_Hindi,
  Tiro_Bangla,
} from "next/font/google";

// Order matters: globals (Tailwind) → design tokens → ported editorial
// styles → app-only additions → phone-only additions (loaded last so its
// ≤880 overrides win). The bespoke CSS intentionally wins over preflight.
import "./globals.css";
import "../styles/tokens.css";
import "../styles/site.css";
import "../styles/pages.css";
import "../styles/app.css";
import "../styles/mobile.css";

import { LanguageProvider } from "@/components/LanguageContext";
import { LanguageGate } from "@/components/LanguageGate";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/* Fonts are self-hosted by next/font: no request to Google, and exposed as
   CSS variables that styles/tokens.css builds its stacks from. None are
   preloaded: preloading every style and subset (~630 KB) made phones wait
   on fonts before the page's main image. Each file now downloads only when
   a page actually uses that style or script, with size-matched fallbacks so
   text doesn't jump when it swaps in. */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});
const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  display: "swap",
  preload: false,
});
// Monospace text falls back to the system's own monospace font (Menlo, SF
// Mono, Consolas), which is nearly the same width as JetBrains Mono, so the
// uppercase labels don't re-wrap when it swaps in. The default size-adjusted
// Arial fallback is proportional and made labels jump.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
});
const tiroDevanagari = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: "400",
  variable: "--font-tiro-deva",
  display: "swap",
  preload: false,
});
const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: "400",
  variable: "--font-tiro-bangla",
  display: "swap",
  preload: false,
});

const SITE_URL = "https://www.theprosperityproject.info";
const DESCRIPTION =
  "Practical financial literacy for women in West Bengal and Maharashtra. Knowing Your Money is a ten-module curriculum built from real interviews and taught in Bengali, Hindi and Marathi, with Bandhan-Konnagar, Indo Count Industries and other partners.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Prosperity Project · Financial literacy for women in India",
    template: "%s · The Prosperity Project",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "The Prosperity Project",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Explicit viewport (matches Next 14's default output). Do not add
// maximumScale / userScalable: pinch-zoom must stay available.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Tells search engines who runs the site. Keep it to facts that are on the page.
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Prosperity Project",
  url: SITE_URL,
  email: "team.prosperityproject@gmail.com",
  description: DESCRIPTION,
  founder: { "@type": "Person", name: "Rehaan Chowdhary" },
  areaServed: ["West Bengal, India", "Maharashtra, India"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = [
    fraunces.variable,
    sourceSerif.variable,
    jetbrainsMono.variable,
    tiroDevanagari.variable,
    tiroBangla.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <LanguageProvider>
          <div className="page-shell">
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <Nav />
            <main id="main" tabIndex={-1}>
              <LanguageGate>{children}</LanguageGate>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
