import type { Metadata, Viewport } from "next";

// Order matters: globals (fonts + Tailwind) → design tokens → ported editorial
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

export const metadata: Metadata = {
  title: "The Prosperity Project",
  description:
    "The Prosperity Project — practical financial literacy, taught in Bengali, Hindi, and English, delivered with Bandhan-Konnagar and supported by Bandhan Bank Ltd.",
};

// Explicit viewport (matches Next 14's default output). Do not add
// maximumScale / userScalable — pinch-zoom must stay available.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="page-shell">
            <Nav />
            <main>
              <LanguageGate>{children}</LanguageGate>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
