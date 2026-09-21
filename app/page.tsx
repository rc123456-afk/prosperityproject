/* Homepage — the whole story in one scroll, in this order:
     Hero · photo band ·
     01 What this is · 02 Why I built it · 03 The curriculum ·
     04 How a workshop runs · 05 Where it runs · 06 Stories · 07 Gallery.
   The arc is deliberate: the person, then the problem, then what he built,
   then how it is taught, then how far it has reached, then the proof.
   §05 is driven by copy.programmes — the same list /programmes renders — so
   the two can never disagree. (Nav + Footer come from the layout.) */

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

const c = copy.home;

/* ---------- 01 · HERO ---------- */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo" aria-hidden="true" />
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
        </div>
      </div>
      <div className="hero__credit">
        A Knowing Your Money workshop <span className="sep">·</span> West Bengal
        <span className="sep">·</span> Maharashtra
      </div>
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
      <div className="frontier__strip">
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
          {p.items.map((prog) => (
            <article className="place" key={prog.id}>
              <span className="place__region">{prog.region}</span>
              <h3 className="place__name">{prog.city}</h3>
              <p className="place__partner">{prog.partner}</p>
              <p className="place__copy">{renderInline(prog.summary)}</p>
            </article>
          ))}
        </div>

        <p className="places__note">{p.figuresNote}</p>

        <div className="places__links">
          <TertiaryLink href="/programmes">{p.linkLabel}</TertiaryLink>
          <TertiaryLink href="/impact">How we measure it</TertiaryLink>
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
          />

          <div>
            <blockquote className="stories__quote">
              &ldquo;{c.storiesPreview.quote}&rdquo;
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

/* ---------- 07 · GALLERY ---------- */
function GalleryPreview() {
  // Five photos, varied aspect ratios. Heights are set in CSS per data-aspect
  // so the strip has visual rhythm without competing with content.
  const shots = [
    { aspect: "portrait", tone: "warm", src: "/photos/gallery/g-portrait-smiling.jpg", alt: "A participant speaks into the microphone" },
    { aspect: "landscape", tone: "green", src: "/photos/kolhapur/k-crouching.jpg", alt: "The founder crouching to talk with participants in Kolhapur" },
    { aspect: "square", tone: "ledger", src: "/photos/gallery/g-the-worksheet.jpg", alt: "Working through the budget worksheet" },
    { aspect: "tall", tone: "cool", src: "/photos/gallery/g-portrait-orange.jpg", alt: "A participant during the session" },
    { aspect: "landscape", tone: "brick", src: "/photos/kolhapur/k-certificates-staff.jpg", alt: "A Kolhapur group with their certificates at the end of a workshop" },
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
      <StoriesPreview />
      <GalleryPreview />
    </>
  );
}
