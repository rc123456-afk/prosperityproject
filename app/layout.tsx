import type { Metadata } from "next";

// Order matters: globals (fonts + Tailwind) → design tokens → ported editorial
// styles → app-only additions. The bespoke CSS intentionally wins over preflight.
import "./globals.css";
import "../styles/tokens.css";
import "../styles/site.css";
import "../styles/pages.css";
import "../styles/app.css";

import { LanguageProvider } from "@/components/LanguageContext";
import { LanguageGate } from "@/components/LanguageGate";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Prosperity Project",
  description:
    "The Prosperity Project — practical financial literacy, taught in Bengali, Hindi, and English, in partnership with Bandhan NGO.",
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
