import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/copy";

const c = copy.notFound;

export const metadata: Metadata = {
  title: "Page not found",
};

/* Shown for any address that doesn't exist, inside the normal nav + footer. */
export default function NotFound() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.kicker}</p>
        <h1 className="curr-hero__headline">{c.headline}</h1>
        <p className="curr-hero__standfirst">{c.standfirst}</p>
        <div className="plain-page__links">
          <Link className="tertiary" href="/">
            {c.homeLabel} <span aria-hidden="true">→</span>
          </Link>
          <Link className="tertiary" href="/curriculum">
            {c.curriculumLabel} <span aria-hidden="true">→</span>
          </Link>
          <Link className="tertiary" href="/programmes">
            {c.programmesLabel} <span aria-hidden="true">→</span>
          </Link>
          <Link className="tertiary" href="/contact">
            {c.contactLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
