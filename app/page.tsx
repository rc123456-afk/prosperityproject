/* Homepage — the seven regions:
   01 Hero · 02 What this is · 03 Where we work · 04 Numbers ·
   05 Workshops · 06 Stories · 07 Gallery. (Nav + Footer come from the layout.)
   Ported from the Claude Design Homepage.jsx. */

import Link from "next/link";
import {
  Photo,
  Figure,
  SectionMarker,
  TertiaryLink,
  PlaceholderStamp,
} from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.home;

/* ---------- 01 · HERO ---------- */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo" aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__inner">
        <p className="hero__kicker">
          <span className="dot" aria-hidden="true" />
          {c.hero.kicker}
        </p>
        <h1 className="hero__headline">
          {c.hero.headline}
          <PlaceholderStamp>HEADLINE · PLACEHOLDER</PlaceholderStamp>
        </h1>
        <p className="hero__standfirst">{c.hero.standfirst}</p>
        <div className="hero__actions">
          <Link href="/curriculum" className="btn btn--primary">
            {c.hero.ctaLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <span className="hero__meta" aria-hidden="true">
        <span className="bar" />[ HERO PHOTO PLACEHOLDER ]
      </span>
      <div className="hero__credit">
        Workshop &nbsp;·&nbsp; Module 04 &nbsp;·&nbsp; South 24 Parganas, West
        Bengal
        <span className="sep">·</span>
        2025
      </div>
    </section>
  );
}

/* ---------- 02 · WHAT THIS IS ---------- */
function WhatThisIs() {
  return (
    <section className="section">
      <div className="container--narrow">
        <div className="section-head" style={{ marginBottom: 56 }}>
          <SectionMarker index="01" label={c.whatThisIs.sectionLabel} />
        </div>
        <div
          className="prose"
          style={{ maxWidth: "40rem", fontSize: 20, lineHeight: 1.65 }}
        >
          <p>{renderInline(c.whatThisIs.body)}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 · WHERE WE WORK ---------- */
function WhereWeWork() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <SectionMarker index="02" label={c.whereWeWork.sectionLabel} />
          <h2 className="h2 head" style={{ maxWidth: "22ch" }}>
            {c.whereWeWork.heading}
          </h2>
        </div>

        <div className="cohorts">
          <Photo
            aspect="portrait"
            tone="warm"
            src="/photos/home/where.jpg"
            alt="A participant in West Bengal during a workshop"
          />
          <div className="cohort__body">
            <div className="cohort__row">
              <span className="cohort__region">{c.whereWeWork.region}</span>
            </div>
            <h3 className="cohort__title">{c.whereWeWork.cardTitle}</h3>
            <p className="cohort__copy">{renderInline(c.whereWeWork.cardCopy)}</p>
            <div className="cohort__links">
              <TertiaryLink href="/curriculum">
                {c.whereWeWork.curriculumLinkLabel}
              </TertiaryLink>
              <TertiaryLink href="/stories">
                {c.whereWeWork.storiesLinkLabel}
              </TertiaryLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 · NUMBERS ---------- */
function Numbers() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 48 }}>
          <SectionMarker index="03" label={c.numbers.sectionLabel} />
        </div>
        <p className="number-prose">
          Across <span className="ph">[ YEAR ]</span>,{" "}
          <span className="num">[ N ]</span> students completed all ten modules
          of <em>Knowing Your Money</em> across <span className="num">[ N ]</span>{" "}
          villages in <span className="ph ph--ink">[ DISTRICTS ]</span>.{" "}
          <span className="num">[ N%&nbsp;]</span> opened a savings account
          during Module&nbsp;04. <span className="num">[ N ]</span> graduates
          have returned as facilitators under the&nbsp;CRP&nbsp;Model. The next
          cohort begins in <span className="ph">[ MONTH&nbsp;YEAR ]</span>.
        </p>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          <TertiaryLink href="/impact">Full impact report</TertiaryLink>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--ink-55)",
            }}
          >
            Final 2025 figures audited by{" "}
            <span style={{ color: "var(--ink-70)" }}>[ AUDITOR ]</span> · January
            2026
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 · WORKSHOPS PREVIEW ---------- */
function WorkshopsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="workshops">
          <Figure
            aspect="landscape"
            tone="green"
            src="/photos/home/workshops.jpg"
            alt="A facilitator leading the cohort through a module"
            description="A facilitator leads the cohort through a module, the curriculum on screen behind."
          />

          <div>
            <div className="section-head" style={{ marginBottom: 32 }}>
              <SectionMarker index="04" label={c.workshopsPreview.sectionLabel} />
              <h2 className="h2 head" style={{ maxWidth: "20ch" }}>
                {c.workshopsPreview.heading}
              </h2>
            </div>

            <div className="prose" style={{ maxWidth: "32rem" }}>
              <p>{renderInline(c.workshopsPreview.body)}</p>
            </div>

            <div className="crp-callout">
              <div className="crp-callout__label">
                <span className="num-prefix">{c.workshopsPreview.crpLabel}</span>
                {c.workshopsPreview.crpTitle}
              </div>
              <p className="crp-callout__body">
                {renderInline(c.workshopsPreview.crpBody)}
              </p>
            </div>

            <div style={{ marginTop: 36 }}>
              <TertiaryLink href="/workshops">
                {c.workshopsPreview.linkLabel}
              </TertiaryLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 · STORIES PREVIEW ---------- */
function StoriesPreview() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 56 }}>
          <SectionMarker index="05" label={c.storiesPreview.sectionLabel} />
        </div>

        <div className="stories">
          <Figure
            aspect="portrait"
            tone="ledger"
            src="/photos/home/rekha.jpg"
            alt="A graduate of the Knowing Your Money curriculum"
          />

          <div>
            <blockquote className="stories__quote">
              &ldquo;{c.storiesPreview.quote}&rdquo;
              <PlaceholderStamp>QUOTE · TRANSLATION</PlaceholderStamp>
            </blockquote>
            <p className="stories__original">{c.storiesPreview.original}</p>
            <p className="stories__cite">
              {c.storiesPreview.citeName} &nbsp;·&nbsp; {c.storiesPreview.citeMeta}{" "}
              &nbsp;·&nbsp;{" "}
              <span style={{ color: "var(--marigold-deep)" }}>
                {c.storiesPreview.citeLang}
              </span>
            </p>
            <div style={{ marginTop: 40 }}>
              <TertiaryLink href="/stories">
                {c.storiesPreview.linkLabel}
              </TertiaryLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 · GALLERY PREVIEW ---------- */
function GalleryPreview() {
  // Five photos, varied aspect ratios. Heights are set in CSS per data-aspect
  // so the strip has visual rhythm without competing with content.
  const shots = [
    { aspect: "portrait", tone: "warm", src: "/photos/gallery/g-portrait-smiling.jpg", alt: "A participant speaks into the microphone" },
    { aspect: "landscape", tone: "green", src: "/photos/gallery/g-passing-the-mic.jpg", alt: "Passing the microphone to a participant" },
    { aspect: "square", tone: "ledger", src: "/photos/gallery/g-the-worksheet.jpg", alt: "Working through the budget worksheet" },
    { aspect: "tall", tone: "cool", src: "/photos/gallery/g-portrait-orange.jpg", alt: "A participant during the session" },
    { aspect: "landscape", tone: "brick", src: "/photos/gallery/g-the-cohort.jpg", alt: "The cohort together" },
  ] as const;

  return (
    <section className="section">
      <div className="container">
        <div
          className="section-head"
          style={{
            marginBottom: 48,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div className="stack-4">
            <SectionMarker index="06" label={c.galleryPreview.sectionLabel} />
            <h2 className="h2" style={{ maxWidth: "22ch" }}>
              {c.galleryPreview.heading}
            </h2>
          </div>
          <TertiaryLink href="/gallery">{c.galleryPreview.linkLabel}</TertiaryLink>
        </div>

        <div className="gallery">
          {shots.map((s, i) => (
            <Photo
              key={i}
              aspect={s.aspect}
              tone={s.tone}
              src={s.src}
              alt={s.alt}
              stamp={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <>
      <Hero />
      <WhatThisIs />
      <WhereWeWork />
      <Numbers />
      <WorkshopsPreview />
      <StoriesPreview />
      <GalleryPreview />
    </>
  );
}
