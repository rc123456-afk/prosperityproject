/* Workshops — all seven sections.
   Hero · Format · Three pillars · CRP Model · In the room · What changed ·
   Bandhan partnership. Ported from WorkshopsPage.jsx + WorkshopsCRP.jsx.
   All presentational (server components). Copy lives in content/copy.ts. */

import Link from "next/link";
import { Photo, Figure, SectionMarker } from "@/components/primitives";
import { renderInline, RichText } from "@/components/Rich";
import { copy } from "@/content/copy";

type Tone = "warm" | "cool" | "green" | "ledger" | "brick" | "dusk" | "cream";
type Aspect = "portrait" | "landscape" | "square" | "cinema" | "hero" | "tall";

const c = copy.workshops;

/* ================================================================
   01 HERO + 02 FORMAT + 03 PILLARS
   ================================================================ */
export function WorkshopsHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.hero.kicker}</p>
        <h1 className="curr-hero__headline">{c.hero.headline}</h1>
        <p className="curr-hero__standfirst">{c.hero.standfirst}</p>
      </div>
      <div className="container">
        <Photo
          aspect="cinema"
          tone="warm"
          src="/photos/workshops/hero.jpg"
          alt="A wide view of a workshop in session, the cohort seated around the tables"
          priority
          style={{ marginTop: 64 }}
        />
        <p className="curr-hero__credit">
          South 24 Parganas · 2025 · [ PHOTOGRAPHER ]
        </p>
      </div>
    </section>
  );
}

export function WorkshopsFormat() {
  return (
    <section className="section curr-origin">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label={c.format.sectionLabel} />
            <p className="curr-modules__hint">{c.format.sectionHint}</p>
          </div>
          <div className="ws-format__body">
            <RichText items={c.format.body} />
          </div>
        </div>
      </div>
    </section>
  );
}

type PillarDatum = {
  name: string;
  description: string;
  modules: { num: string; title: string }[];
};

const PILLAR_DATA: Record<string, PillarDatum> = {
  control: {
    name: "Control",
    description: c.pillars.control,
    modules: [
      { num: "01", title: "Your Money, Your Name" },
      { num: "02", title: "Budgeting" },
      { num: "03", title: "Get Paid What You're Worth" },
    ],
  },
  protect: {
    name: "Protect",
    description: c.pillars.protect,
    modules: [
      { num: "06", title: "Scam Shield" },
      { num: "07", title: "Debt" },
      { num: "10", title: "Emergency Plan" },
    ],
  },
  grow: {
    name: "Grow",
    description: c.pillars.grow,
    modules: [
      { num: "04", title: "How Money Grows" },
      { num: "05", title: "Safe Places for Your Money" },
      { num: "08", title: "Your First Real Investment" },
      { num: "09", title: "Digital Money" },
    ],
  },
};

const PILLAR_ORDER = ["control", "protect", "grow"];

function Pillar({
  pillar,
  romanIndex,
}: {
  pillar: PillarDatum;
  romanIndex: string;
}) {
  return (
    <article className="pillar" data-pillar={pillar.name.toLowerCase()}>
      <div className="pillar__head">
        <span className="pillar__roman">{romanIndex}</span>
        <span className="pillar__label">Pillar</span>
      </div>
      <div className="pillar__body">
        <h3 className="pillar__name">{pillar.name}.</h3>
        <p className="pillar__description">{renderInline(pillar.description)}</p>
        <ul className="pillar__modules">
          {pillar.modules.map((m) => (
            <li key={m.num}>
              <span className="pillar__mod-num">{m.num}</span>
              <span className="pillar__mod-title">{m.title}</span>
              <Link
                className="pillar__mod-link"
                href="/curriculum"
                aria-label={`Read module ${m.num} ${m.title} on the curriculum page`}
              >
                Read module <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function WorkshopsPillars() {
  return (
    <section className="section section--alt curr-pillars">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label={c.pillars.sectionLabel} />
            <p className="curr-modules__hint">{c.pillars.sectionHint}</p>
          </div>
          <div>
            <p className="curr-premise__body" style={{ marginBottom: 64 }}>
              {renderInline(c.pillars.intro)}
            </p>
            <div className="pillars">
              {PILLAR_ORDER.map((id, i) => (
                <Pillar
                  key={id}
                  pillar={PILLAR_DATA[id]}
                  romanIndex={["I", "II", "III"][i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   04 CRP MODEL
   ================================================================ */
type PhotoDatum = {
  aspect: Aspect;
  tone: Tone;
  tag: string;
  stamp: string;
  description?: string;
  meta?: string;
};

const CRP_PHOTOS: PhotoDatum[] = [
  {
    aspect: "portrait",
    tone: "warm",
    tag: "CRP · Anjali Saha · in her village hall",
    stamp: "PHOTO · CRP",
    description:
      "Anjali, a 2023 graduate, now facilitates the Howrah cohort she once sat in.",
    meta: "Howrah · 2025",
  },
  {
    aspect: "landscape",
    tone: "ledger",
    tag: "facilitator training · week 03",
    stamp: "PHOTO · TRAINING",
    description:
      "Week three of the four-week facilitator training — working a budget worksheet line by line with the cohort that will teach next.",
    meta: "Kolkata · 2025",
  },
  {
    aspect: "portrait",
    tone: "green",
    tag: "co-facilitation · Sundarbans",
    stamp: "PHOTO · CRP",
    description:
      "Co-facilitation week. A new CRP runs Module 02 with a senior CRP in the room.",
    meta: "Sundarbans · 2025",
  },
];

export function CRPModel() {
  return (
    <section className="section ws-crp">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label={c.crp.sectionLabel} />
            <p className="curr-modules__hint">{c.crp.sectionHint}</p>
          </div>
          <div>
            <h2 className="ws-crp__head">{c.crp.heading}</h2>
            <p className="ws-crp__sub">{c.crp.sub}</p>
            <div className="ws-crp__body">
              <RichText items={c.crp.body} />
            </div>

            <div className="ws-crp__stat">
              <div className="ws-crp__figure">63%</div>
              <div className="ws-crp__stat-label">{c.crp.statLabel}</div>
            </div>

            <div className="ws-crp__photos" data-count={CRP_PHOTOS.length}>
              {CRP_PHOTOS.map((p, i) => (
                <Figure key={i} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   05 IN THE ROOM
   ================================================================ */
const ROOM_PHOTOS: { aspect: Aspect; tone: Tone; tag: string; stamp: string }[] = [
  { aspect: "portrait", tone: "warm", tag: "founder facilitating · Module 02", stamp: "PHOTO · ROOM" },
  { aspect: "landscape", tone: "green", tag: "cohort circle · Howrah", stamp: "PHOTO · ROOM" },
  { aspect: "square", tone: "ledger", tag: "hands · counting change", stamp: "PHOTO · DETAIL" },
  { aspect: "portrait", tone: "cool", tag: "tea before the session", stamp: "PHOTO · ROOM" },
  { aspect: "landscape", tone: "brick", tag: "walk to the bank · Module 04", stamp: "PHOTO · ROOM" },
  { aspect: "square", tone: "dusk", tag: "textbook · margin notes", stamp: "PHOTO · DETAIL" },
];
const ROOM_CLIPS = [
  { tag: "clip · 02:14 · Bengali · Module 03", stamp: "VIDEO · ROOM" },
  { tag: "clip · 01:48 · Hindi · Module 06", stamp: "VIDEO · ROOM" },
];

export function InTheRoom() {
  return (
    <section className="section section--alt ws-room">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="04" label={c.inTheRoom.sectionLabel} />
            <p className="curr-modules__hint">{c.inTheRoom.sectionHint}</p>
          </div>
          <div>
            <h2 className="ws-room__head">{c.inTheRoom.heading}</h2>

            <div className="ws-room__grid">
              {ROOM_PHOTOS.map((p, i) => (
                <Photo
                  key={i}
                  aspect={p.aspect}
                  tone={p.tone}
                  tag={p.tag}
                  stamp={p.stamp}
                />
              ))}
            </div>

            <div className="ws-room__clips">
              {ROOM_CLIPS.map((clip, i) => (
                <div key={i} className="ws-clip">
                  <Photo
                    aspect="landscape"
                    tone="cool"
                    tag={clip.tag}
                    stamp={clip.stamp}
                  >
                    <span className="ws-clip__play" aria-hidden="true">
                      ▶
                    </span>
                  </Photo>
                </div>
              ))}
            </div>

            <blockquote className="ws-room__quote">
              <p>{renderInline(c.inTheRoom.body)}</p>
              <cite className="ws-room__cite">{c.inTheRoom.attribution}</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   06 WHAT CHANGED BETWEEN COHORTS
   ================================================================ */
export function WhatChanged() {
  return (
    <section className="section ws-changed">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="05" label={c.whatChanged.sectionLabel} />
            <p className="curr-modules__hint">{c.whatChanged.sectionHint}</p>
          </div>
          <div>
            <h2 className="ws-section__head">
              {c.whatChanged.heading}
              <span
                className="ph-stamp"
                style={{ marginLeft: 14, verticalAlign: "middle" }}
              >
                [ PLACEHOLDER · EDITORIAL PROSE ]
              </span>
            </h2>
            <div className="ws-changed__body">
              <RichText items={c.whatChanged.body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   07 BANDHAN PARTNERSHIP
   ================================================================ */
export function BandhanPartnership() {
  return (
    <section className="section section--ink ws-bandhan">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <p className="ws-bandhan__marker">
              § 06 &nbsp;·&nbsp; {c.bandhan.sectionLabel}
            </p>
            <p className="ws-bandhan__hint">{c.bandhan.sectionHint}</p>
          </div>
          <div>
            <h2 className="ws-bandhan__head">{c.bandhan.heading}</h2>
            <div className="ws-bandhan__body">
              <RichText items={c.bandhan.body} />
            </div>
            <div className="ws-bandhan__links">
              <Link href="/about#partners" className="tertiary tertiary--inverse">
                {c.bandhan.linkLabel} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
