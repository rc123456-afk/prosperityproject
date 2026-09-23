import type { Metadata } from "next";
import { SectionMarker } from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.privacy;

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What this site does with your information: no tracking, videos that load only when you press play, and photographs used with permission.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="curr-hero">
        <div className="container">
          <p className="curr-hero__kicker">{c.kicker}</p>
          <h1 className="curr-hero__headline">{c.headline}</h1>
          <p className="curr-hero__standfirst">{c.standfirst}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="curr-origin__grid">
            <div className="curr-origin__label">
              <SectionMarker index="01" label="In plain language" />
            </div>
            <div className="plain-page__sections">
              {c.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="plain-page__heading">{s.heading}</h2>
                  <p className="plain-page__body">{renderInline(s.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
