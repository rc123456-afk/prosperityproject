/* Homepage — the whole story in one scroll, in this order:
     Hero · photo band ·
     01 What this is · 02 Why I built it · 03 The curriculum ·
     04 How a workshop runs · 05 Where it runs · In the press ·
     06 Stories · 07 Gallery.
   The arc is deliberate: the person, then the problem, then what he built,
   then how it is taught, then how far it has reached, then the proof.
   §05 is driven by copy.programmes — the same list /programmes renders — so
   the two can never disagree. The press band is un-numbered and driven by
   copy.press, as is the hero line that points to it. (Nav + Footer come from
   the layout.) */

import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Photo,
  Figure,
  SectionMarker,
  TertiaryLink,
} from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";
import { programmeHeading } from "@/lib/programmes";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const c = copy.home;

/* Press coverage, typed here so an emptied list (which infers as never[])
   still type-checks: the band and the hero line then simply disappear. */
type PressItem = {
  id: string;
  outlet: string;
  edition: string;
  date: string;
  language: string;
  headline: string;
  original: string;
  summary: string;
  clipping: string;
  href: string;
};
const PRESS: PressItem[] = copy.press.items;

// "Lokmat" now; "Lokmat, X and Y" once more outlets are added.
const PRESS_OUTLETS = new Intl.ListFormat("en-GB", { type: "conjunction" }).format(
  Array.from(new Set(PRESS.map((p) => p.outlet).filter(Boolean))),
);

// The article's language, for the lang attribute on the printed headline.
const LANG_CODES: Record<string, string> = { Marathi: "mr", Bengali: "bn", Hindi: "hi" };

/* ---------- 01 · HERO ---------- */
function Hero() {
  return (
    <section className="hero">
      {/* The photo is the page's largest paint, so it is preloaded and served
          at the size the screen needs. Gradient and grain sit on top in CSS. */}
      <div className="hero__photo" aria-hidden="true">
        <Image
          src="/photos/home/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 44%" }}
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__inner">
        {c.hero.kicker && (
          <p className="hero__kicker">
            <span className="dot" aria-hidden="true" />
            {c.hero.kicker}
          </p>
        )}
        <h1 className="hero__headline">{c.hero.headline}</h1>
        {c.hero.standfirst && (
          <p className="hero__standfirst">{c.hero.standfirst}</p>
        )}
        <div className="hero__actions">
          <Link href="/curriculum" className="btn btn--primary">
            {c.hero.ctaLabel} <span aria-hidden="true">→</span>
          </Link>
          {PRESS.length > 0 && (
            <a href="#press" className="tertiary tertiary--inverse hero__press">
              {copy.press.heroLead} {PRESS_OUTLETS} <span aria-hidden="true">↓</span>
            </a>
          )}
        </div>
      </div>
      <p className="hero__credit">{c.hero.credit}</p>
    </section>
  );
}

/* ---------- FRONTIER BAND ----------
   Full-bleed photo strip directly under the hero, alternating between the
   places the work runs. Escapes .container deliberately: it is the one
   edge-to-edge element on the page. Scrolls horizontally on a phone. */
function FrontierBand() {
  return (
    <section className="frontier" aria-label="Where the work runs">
      {/* Focusable so keyboard users can scroll it sideways on a phone. */}
      <div
        className="frontier__strip"
        tabIndex={0}
        role="region"
        aria-label="Photographs from Kolhapur and Baruipur"
      >
        {c.frontier.cells.map((cell) => (
          <figure className="frontier__cell" key={cell.src}>
            <div className="frontier__photo">
              <Image
                src={cell.src}
                alt={cell.alt}
                fill
                sizes="(max-width: 880px) 62vw, 20vw"
                style={{ objectFit: "cover", objectPosition: cell.objectPosition }}
              />
            </div>
            <figcaption className="frontier__label">{cell.place}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- 01 · WHAT THIS IS ---------- */
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

/* ---------- 02 · WHY I BUILT IT ----------
   The short version of the founder's story, in his own voice. The full one is
   on /about; both are driven from copy so they cannot drift apart. */
function WhyIBuiltIt() {
  const f = c.founderShort;
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 48 }}>
          <SectionMarker index="02" label={f.sectionLabel} />
        </div>
        <div className="founder-short">
          <div>
            <div className="founder-short__body">
              {f.story.map((para, i) => (
                <p key={i}>{renderInline(para)}</p>
              ))}
            </div>
            <p className="founder-short__byline">
              {f.bylineName} &nbsp;·&nbsp;{" "}
              <span className="accent">{f.bylineRole}</span>
            </p>
            <div style={{ marginTop: 28 }}>
              <TertiaryLink href="/about">{f.linkLabel}</TertiaryLink>
            </div>
          </div>
          <Photo
            aspect="portrait"
            tone="warm"
            src={f.photo.src}
            alt={f.photo.alt}
            objectPosition={f.photo.objectPosition}
            sizes="(max-width: 880px) 100vw, 480px"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 · THE CURRICULUM ---------- */
function CurriculumPreview() {
  const cp = c.curriculumPreview;
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <SectionMarker index="03" label={cp.sectionLabel} />
          <h2 className="h2 head" style={{ maxWidth: "24ch" }}>
            {renderInline(cp.heading)}
          </h2>
        </div>
        <div className="curr-preview">
          <p className="curr-preview__body">{renderInline(cp.body)}</p>
          <div className="curr-preview__aside">
            <p className="curr-preview__note">{renderInline(cp.note)}</p>
            <div className="curr-preview__links">
              <TertiaryLink href="/curriculum">
                {cp.curriculumLinkLabel}
              </TertiaryLink>
              <TertiaryLink href="/resources">
                {cp.resourcesLinkLabel}
              </TertiaryLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 · WHERE IT RUNS ----------
   All four programmes, driven from the shared copy.programmes list so this
   can never disagree with /programmes. */
function WhereItRuns() {
  const p = copy.programmes;
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <SectionMarker index="05" label={p.sectionLabel} />
          <h2 className="h2 head" style={{ maxWidth: "22ch" }}>
            {p.heading}
          </h2>
        </div>

        <div className="places">
          {p.items.map((prog) => {
            const heading = programmeHeading(prog);
            return (
              <article className="place" key={prog.id}>
                <span className="place__region">{prog.region}</span>
                <h3 className="place__name">{heading.text}</h3>
                {!heading.includesPartner && (
                  <p className="place__partner">{prog.partner}</p>
                )}
                <p className="place__copy">{renderInline(prog.summary)}</p>
              </article>
            );
          })}
        </div>

        <p className="places__note">{p.figuresNote}</p>

        <div className="places__links">
          <TertiaryLink href="/programmes">{p.linkLabel}</TertiaryLink>
          <TertiaryLink href="/reporting">How we measure it</TertiaryLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- IN THE PRESS ----------
   Un-numbered, like the photo band: coverage is a note in the margin of the
   story, not a chapter of it. Each entry opens the site's own copy of the
   clipping first, because e-paper links expire; the source link sits beside
   it for anyone who wants to check. */
function InThePress() {
  const p = copy.press;
  if (PRESS.length === 0) return null;
  return (
    <section className="section press" id="press">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker label={p.label} as="h2" />
          </div>
          <ul className="press__list">
            {PRESS.map((item) => {
              const meta = [item.edition, item.date, item.language].filter(Boolean);
              return (
                <li
                  className={`press-item${item.clipping ? "" : " press-item--text"}`}
                  key={item.id}
                >
                  {item.clipping && (
                    // The same link as "Read the clipping" below, so it is
                    // hidden from screen readers and skipped by the keyboard.
                    <a
                      className="press-item__clip"
                      href={item.clipping}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Image
                        src={item.clipping}
                        alt=""
                        fill
                        sizes="(max-width: 600px) 112px, 132px"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                      />
                    </a>
                  )}
                  <div>
                    {/* Each part wraps as a whole (never "16 / September"),
                        and the dot stays at the end of a line. */}
                    <p className="press-item__meta">
                      {item.outlet && (
                        <span className="press-item__outlet">{item.outlet}</span>
                      )}
                      {meta.map((part, i) => (
                        <Fragment key={part}>
                          {(item.outlet || i > 0) && " · "}
                          <span>{part}</span>
                        </Fragment>
                      ))}
                    </p>
                    <h3 className="press-item__headline">
                      &ldquo;{item.headline}&rdquo;
                    </h3>
                    {item.original && (
                      <p className="press-item__original" lang={LANG_CODES[item.language]}>
                        {item.original}
                      </p>
                    )}
                    {item.summary && (
                      <p className="press-item__summary">{renderInline(item.summary)}</p>
                    )}
                    {(item.clipping || item.href) && (
                      <div className="press-item__links">
                        {item.clipping && (
                          <a
                            className="tertiary"
                            href={item.clipping}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {p.clippingLinkLabel} <span aria-hidden="true">→</span>
                          </a>
                        )}
                        {item.href && (
                          <a
                            className="tertiary"
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {p.sourceLinkLead} {item.outlet} <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 · HOW A WORKSHOP RUNS ---------- */
function WorkshopsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="workshops">
          <Figure
            aspect="landscape"
            tone="green"
            src="/photos/kolhapur/k-cohort-desks.jpg"
            alt="Women at their desks working through a module at Indo Count's training centre in Kolhapur"
            description="A group works through a module at Indo Count's training centre, Kolhapur."
            sizes="(max-width: 880px) 100vw, 600px"
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

/* ---------- 06 · STORIES ---------- */
function StoriesPreview() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 56 }}>
          <SectionMarker index="06" label={c.storiesPreview.sectionLabel} />
        </div>

        <div className="stories">
          <Figure
            aspect="portrait"
            tone="ledger"
            src="/photos/home/shankari.jpg"
            alt="Shankari Purkait Mondal, a Community Resource Person, at a workshop in Baruipur"
            sizes="(max-width: 880px) 100vw, 520px"
          />

          <div>
            <blockquote className="stories__quote">
              &ldquo;{c.storiesPreview.quote}&rdquo;
            </blockquote>
            <p className="stories__original" lang="bn">
              {c.storiesPreview.original}
            </p>
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

/* ---------- 07 · GALLERY ---------- */
function GalleryPreview() {
  // Five photos, alternating Kolhapur and Baruipur, none repeated from the band
  // under the hero or the portrait in §06. Heights are set in CSS per
  // data-aspect so the strip has rhythm. Every source is a 3:2 landscape, so
  // portrait crops are anchored on the person; never use `tall` on these.
  // On phones every cell becomes a short landscape crop.
  const shots = [
    { aspect: "portrait", tone: "warm", src: "/photos/kolhapur/k-portrait-desk.jpg", alt: "A participant in Kolhapur at her desk, listening", objectPosition: "38% center" },
    { aspect: "landscape", tone: "green", src: "/photos/gallery/g-three-women.jpg", alt: "Three participants seated together at a workshop in Baruipur", objectPosition: "center 40%" },
    { aspect: "square", tone: "ledger", src: "/photos/kolhapur/k-certificates-row.jpg", alt: "Participants in Kolhapur standing in a row with their certificates", objectPosition: "center 30%" },
    { aspect: "portrait", tone: "cool", src: "/photos/gallery/g-a-participant-speaks.jpg", alt: "A participant in Baruipur standing to speak into the microphone", objectPosition: "48% 30%" },
    { aspect: "landscape", tone: "brick", src: "/photos/kolhapur/k-crouching.jpg", alt: "The founder crouching to talk with participants in Kolhapur", objectPosition: "center" },
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
            <SectionMarker index="07" label={c.galleryPreview.sectionLabel} />
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
              objectPosition={s.objectPosition}
              sizes="(max-width: 600px) 100vw, (max-width: 880px) 50vw, 20vw"
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
      <FrontierBand />
      <WhatThisIs />
      <WhyIBuiltIt />
      <CurriculumPreview />
      <WorkshopsPreview />
      <WhereItRuns />
      <InThePress />
      <StoriesPreview />
      <GalleryPreview />
    </>
  );
}
