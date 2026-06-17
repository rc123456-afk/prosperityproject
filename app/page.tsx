/* Homepage — the eight regions:
   01 Hero · 02 What this is · 03 Two cohorts · 04 Numbers ·
   05 Workshops · 06 Stories · 07 Gallery. (Nav + Footer come from the layout.)
   Ported from the Claude Design Homepage.jsx. */

import Link from "next/link";
import {
  Photo,
  Figure,
  SectionMarker,
  TertiaryLink,
  StatusDot,
  PlaceholderStamp,
} from "@/components/primitives";

/* ---------- 01 · HERO ---------- */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo" aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__inner">
        <p className="hero__kicker">
          <span className="dot" aria-hidden="true" />
          Knowing Your Money &nbsp;·&nbsp; ten modules, three languages
        </p>
        <h1 className="hero__headline">
          Practical financial literacy for the people who build the world.
          <PlaceholderStamp>HEADLINE · PLACEHOLDER</PlaceholderStamp>
        </h1>
        <p className="hero__standfirst">
          Workshops in Bengali, Hindi, and English — taught by people from the
          communities they serve, in partnership with Bandhan NGO.
        </p>
        <div className="hero__actions">
          <Link href="/curriculum/women" className="btn btn--primary">
            Read the curriculum <span aria-hidden="true">→</span>
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
          <SectionMarker index="01" label="What this is" />
        </div>
        <div
          className="prose"
          style={{ maxWidth: "40rem", fontSize: 20, lineHeight: 1.65 }}
        >
          <p>
            The Prosperity Project teaches practical money skills — bank
            accounts, budgeting, debt, savings, scam protection, digital
            payments, emergency planning — to people the financial system has
            historically ignored. The flagship curriculum,{" "}
            <em>Knowing Your Money</em>, is ten modules grounded in real
            interviews. We began with women in <strong>West Bengal</strong> and
            are now extending the work to{" "}
            <strong>blue-collar workers in the UAE</strong>: construction
            workers, drivers, factory hands, and others in informal-sector
            labour.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 · TWO COHORTS (centerpiece) ---------- */
function TwoCohorts() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <SectionMarker index="02" label="Two contexts, one curriculum" />
          <h2 className="h2 head" style={{ maxWidth: "22ch" }}>
            The same ten modules, adapted for the room they&rsquo;re taught in.
          </h2>
        </div>

        <div className="cohorts">
          {/* Cohort A — Women, West Bengal */}
          <article className="stack-block">
            <Photo
              aspect="portrait"
              tone="warm"
              tag="Sundarbans cohort · Module 03"
              stamp="PHOTO · WOMEN · WEST BENGAL"
            />
            <div className="cohort__body">
              <div className="cohort__row">
                <StatusDot kind="active" />
                <span className="cohort__region">
                  West Bengal &nbsp;·&nbsp; India
                </span>
              </div>
              <h3 className="cohort__title">Women in West Bengal</h3>
              <p className="cohort__copy">
                Our first and longest-running cohort. Twice-weekly workshops in{" "}
                <strong>Bengali and Hindi</strong>, run in self-help-group halls
                across <span className="ph ph--ink">[ N&nbsp;villages ]</span> in
                the Sundarbans, Howrah, and South&nbsp;24&nbsp;Parganas. Students
                complete the curriculum and many return as facilitators for the
                next cohort.
              </p>
              <div className="cohort__links">
                <TertiaryLink href="/curriculum/women">
                  Read the curriculum
                </TertiaryLink>
                <TertiaryLink href="/stories/women">
                  Stories from the cohort
                </TertiaryLink>
              </div>
            </div>
          </article>

          {/* Cohort B — Blue-Collar Workers, UAE */}
          <article className="stack-block">
            <Photo
              aspect="portrait"
              tone="dusk"
              tag="Karama cohort · pilot session"
              stamp="PHOTO · UAE · IN DEVELOPMENT"
            />
            <div className="cohort__body">
              <div className="cohort__row">
                <StatusDot kind="dev" />
                <span className="cohort__region">United Arab Emirates</span>
              </div>
              <h3 className="cohort__title">Blue-collar workers in the UAE</h3>
              <p className="cohort__copy">
                Construction workers, drivers, and factory hands — many sending
                money home each month, few with formal access to advice. Pilots
                running in <strong>Hindi and English</strong> in Dubai and
                Sharjah, with the same ten modules reframed for remittance,
                contract literacy, and labour-camp life.
              </p>
              <div className="cohort__links">
                <TertiaryLink href="/curriculum/blue-collar-workers">
                  Read the curriculum
                </TertiaryLink>
                <TertiaryLink href="/workshops/blue-collar-workers">
                  Pilot timeline
                </TertiaryLink>
              </div>
            </div>
          </article>
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
          <SectionMarker index="03" label="The work, in numbers" />
        </div>
        <p className="number-prose">
          Across <span className="ph">[ YEAR ]</span>,{" "}
          <span className="num">[ N ]</span> students completed all ten modules
          of <em>Knowing Your Money</em> across <span className="num">[ N ]</span>{" "}
          villages in <span className="ph ph--ink">[ DISTRICTS ]</span>.{" "}
          <span className="num">[ N%&nbsp;]</span> opened a savings account
          during Module&nbsp;04. <span className="num">[ N ]</span> graduates
          have returned as facilitators under the&nbsp;CRP&nbsp;Model. The next
          cohort begins in <span className="ph">[ MONTH&nbsp;YEAR ]</span>; the
          UAE pilot opens in <span className="ph">[ MONTH&nbsp;YEAR ]</span>.
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
            tag="workshop · Howrah · Module 04"
            stamp="PHOTO · WORKSHOP"
            description="A Howrah cohort works through Module 04 — opening real accounts at the State Bank branch a fifteen-minute walk from the workshop hall."
            meta="West Bengal · 2025 · [ PHOTOGRAPHER ]"
          />

          <div>
            <div className="section-head" style={{ marginBottom: 32 }}>
              <SectionMarker index="04" label="How a workshop runs" />
              <h2 className="h2 head" style={{ maxWidth: "20ch" }}>
                Twice a week, for ten weeks, in the room the community already
                trusts.
              </h2>
            </div>

            <div className="prose" style={{ maxWidth: "32rem" }}>
              <p>
                We work with partners who already have a hall, a livelihood
                programme, or a self-help group running. Facilitators are
                recruited from the same district and trained over four weeks.
                Each cohort caps at <span className="ph">[ 24 ]</span> students.
                Sessions run in Bengali, Hindi, or English, depending on the
                room.
              </p>
            </div>

            <div className="crp-callout">
              <div className="crp-callout__label">
                <span className="num-prefix">A method</span>
                The CRP Model
              </div>
              <p className="crp-callout__body">
                Students complete the curriculum themselves, then return as
                facilitators — so the work travels in a familiar voice and stays
                after the founder leaves the room.
              </p>
            </div>

            <div style={{ marginTop: 36 }}>
              <TertiaryLink href="/workshops/women">
                See a workshop in session
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
          <SectionMarker index="05" label="Stories from the cohort" />
        </div>

        <div className="stories">
          <Figure
            aspect="portrait"
            tone="ledger"
            tag="portrait · Rekha Mondal"
            stamp="PHOTO · STORY"
            meta="Rekha Mondal · South 24 Parganas · 2025 cohort · [ PHOTOGRAPHER ]"
          />

          <div>
            <blockquote className="stories__quote">
              &ldquo;Before, I didn&rsquo;t understand where the money was going.
              Now there is a notebook, and every week I look at it.&rdquo;
              <PlaceholderStamp>QUOTE · TRANSLATION</PlaceholderStamp>
            </blockquote>
            <p className="stories__original">
              पहले समझ नहीं थी कि पैसा कहाँ जा रहा है। अब नोटबुक है, और हर हफ़्ते मैं
              देखती हूँ।
            </p>
            <p className="stories__cite">
              Rekha Mondal &nbsp;·&nbsp; Module 02 graduate &nbsp;·&nbsp;{" "}
              <span style={{ color: "var(--marigold-deep)" }}>
                spoken in Hindi
              </span>
            </p>
            <div style={{ marginTop: 40 }}>
              <TertiaryLink href="/stories/women">Read more stories</TertiaryLink>
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
    { aspect: "portrait", tone: "warm", tag: "Module 01 · ledger work", stamp: "01" },
    { aspect: "landscape", tone: "green", tag: "hall · Howrah", stamp: "02" },
    { aspect: "square", tone: "ledger", tag: "hands · counting change", stamp: "03" },
    { aspect: "tall", tone: "cool", tag: "facilitator · pre-session", stamp: "04" },
    { aspect: "landscape", tone: "brick", tag: "Karama pilot · UAE", stamp: "05" },
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
            <SectionMarker index="06" label="Gallery" />
            <h2 className="h2" style={{ maxWidth: "22ch" }}>
              The classrooms, the materials, the people in the room.
            </h2>
          </div>
          <TertiaryLink href="/gallery">See the full gallery</TertiaryLink>
        </div>

        <div className="gallery">
          {shots.map((s, i) => (
            <Photo
              key={i}
              aspect={s.aspect}
              tone={s.tone}
              tag={s.tag}
              stamp={s.stamp}
            />
          ))}
        </div>

        <p
          style={{
            marginTop: 28,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--ink-55)",
          }}
        >
          [ PHOTOGRAPHY PLACEHOLDERS ] &nbsp;·&nbsp; documentary, warm-toned, not
          stock &nbsp;·&nbsp; subjects with consent
        </p>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <>
      <Hero />
      <WhatThisIs />
      <TwoCohorts />
      <Numbers />
      <WorkshopsPreview />
      <StoriesPreview />
      <GalleryPreview />
    </>
  );
}
