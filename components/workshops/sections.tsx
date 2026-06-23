/* Workshops — all seven sections.
   Hero · Format · Three pillars · CRP Model · In the room · What changed ·
   Bandhan partnership. Ported from WorkshopsPage.jsx + WorkshopsCRP.jsx.
   All presentational (server components). */

import type { ReactNode } from "react";
import Link from "next/link";
import { Photo, Figure, SectionMarker } from "@/components/primitives";

type Tone = "warm" | "cool" | "green" | "ledger" | "brick" | "dusk" | "cream";
type Aspect = "portrait" | "landscape" | "square" | "cinema" | "hero" | "tall";

/* ================================================================
   01 HERO + 02 FORMAT + 03 PILLARS
   ================================================================ */
const WORKSHOPS_COPY = {
  kicker: "Workshops",
  headline: "How a workshop runs.",
  standfirst:
    "Twice a week, for ten weeks, in the rooms the community already trusts — across the Sundarbans, Howrah, and South 24 Parganas, in Bengali with Hindi translation.",
  heroTag: "Module 04 · Howrah cohort · 2025",
  heroStamp: "PHOTO · WORKSHOP",
  heroTone: "warm" as const,
  heroMeta: "South 24 Parganas · 2025 · [ PHOTOGRAPHER ]",
  format: (
    <>
      <p>
        Workshops run <strong>twice a week for ten weeks</strong>, in spaces a
        community already trusts — a Self-Help Group hall in Howrah, a
        livelihood room in the Sundarbans, the back of a Bandhan branch after
        hours. Sessions are ninety minutes; cohorts cap at{" "}
        <strong>twenty-four students</strong> so every voice is heard.
      </p>
      <p>
        <strong>Bengali</strong> is the working language, with{" "}
        <strong>Hindi</strong> in live translation; most facilitators move
        between the two in a sentence. Each student gets the{" "}
        <em>Knowing Your Money</em> textbook in her own script on day one, and a
        notebook to track her household.
      </p>
      <p>
        By Module 04 — Banks and how they work — the cohort walks together to
        the nearest branch and opens accounts. For many, it's the first account
        in their own name. The work ends with a graduation, a meal, and an
        invitation: those who want to come back as facilitators are recruited
        for the next cohort.
      </p>
    </>
  ),
};

export function WorkshopsHero() {
  const c = WORKSHOPS_COPY;
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.kicker}</p>
        <h1 className="curr-hero__headline">{c.headline}</h1>
        <p className="curr-hero__standfirst">{c.standfirst}</p>
      </div>
      <div className="container">
        <Photo
          aspect="cinema"
          tone={c.heroTone}
          tag={c.heroTag}
          stamp={c.heroStamp}
          style={{ marginTop: 64 }}
        />
        <p className="curr-hero__credit">{c.heroMeta}</p>
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
            <SectionMarker index="01" label="The format" />
            <p className="curr-modules__hint">
              Two sessions a week. Ten weeks. Twenty-four students.
            </p>
          </div>
          <div className="ws-format__body">{WORKSHOPS_COPY.format}</div>
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
    description:
      "Modules that put a student in command of her own money — her name on the account, her notebook on the table, her wages negotiated up to what they are worth.",
    modules: [
      { num: "01", title: "Your Money, Your Name" },
      { num: "02", title: "Budgeting" },
      { num: "03", title: "Get Paid What You're Worth" },
    ],
  },
  protect: {
    name: "Protect",
    description:
      "Modules that defend against loss — scams that target the careful saver, debt taken without understanding, and the emergency that arrives unannounced.",
    modules: [
      { num: "06", title: "Scam Shield" },
      { num: "07", title: "Debt" },
      { num: "10", title: "Emergency Plan" },
    ],
  },
  grow: {
    name: "Grow",
    description:
      "Modules that build wealth over time — the compounding habit, the safe place to keep what is saved, the first real investment, and the digital rails that carry it all.",
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
        <p className="pillar__description">{pillar.description}</p>
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
            <SectionMarker index="02" label="The three pillars" />
            <p className="curr-modules__hint">
              Control · Protect · Grow. Every module belongs to one.
            </p>
          </div>
          <div>
            <p className="curr-premise__body" style={{ marginBottom: 64 }}>
              The ten modules are organised under three pillars. Control, then
              protect, then grow — in that order, because you cannot protect or
              grow what you do not yet command.
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

const CRP_COPY: {
  body: ReactNode;
  stat: { figure: string; label: string };
  photos: PhotoDatum[];
} = {
  body: (
    <>
      <p>
        The <strong>CRP Model</strong> — Community Resource Person — is the
        spine of how this work travels. A student completes the ten modules,
        then — if she wants to teach the next cohort — enters a{" "}
        <strong>four-week facilitator training</strong>: deeper work on every
        module, practice in front of a room in Bengali and Hindi, and a week
        co-facilitating alongside a senior CRP.
      </p>
      <p>
        She then returns to her own block, sometimes her own village, and runs
        the workshop in a room that already knows her. A curriculum carried by
        an outside expert is one people listen to politely; carried by a
        neighbour, it's one they argue with, push back on, take home.
      </p>
      <p>
        By the end of 2025, most facilitators teaching active cohorts had
        themselves been students in 2023 or 2024. The work stays in the
        community after the founder leaves the room.
      </p>
    </>
  ),
  stat: {
    figure: "63%",
    label:
      "of facilitators teaching the 2025 cohorts were themselves students in 2023 or 2024.",
  },
  photos: [
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
  ],
};

export function CRPModel() {
  const c = CRP_COPY;
  return (
    <section className="section ws-crp">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label="The CRP Model" />
            <p className="curr-modules__hint">How the work travels — and stays.</p>
          </div>
          <div>
            <h2 className="ws-crp__head">The CRP Model.</h2>
            <p className="ws-crp__sub">
              Community Resource Person — student first, facilitator second.
            </p>
            <div className="ws-crp__body">{c.body}</div>

            <div className="ws-crp__stat">
              <div className="ws-crp__figure">{c.stat.figure}</div>
              <div className="ws-crp__stat-label">{c.stat.label}</div>
            </div>

            <div className="ws-crp__photos" data-count={c.photos.length}>
              {c.photos.map((p, i) => (
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
const IN_THE_ROOM_COPY: {
  body: ReactNode;
  attribution: string;
  photos: { aspect: Aspect; tone: Tone; tag: string; stamp: string }[];
  clips: { tag: string; stamp: string }[];
} = {
  body: (
    <p>
      The first thing facilitating teaches you is how little of it is about the
      slides. The slides are there in case the room needs them. What the room
      wants is for the facilitator to sit on the floor, take the tea, hear the
      story about last month's missing wages — and then, only then, open the
      notebook and work the numbers with the woman beside her. The modules give
      the work its bones; the room gives it its voice. I learned to stop
      arriving early — the half-hour before a workshop became the most
      important part of the day.
    </p>
  ),
  attribution: "— [ FOUNDER ] · first-person, after the 2024 cycle",
  photos: [
    { aspect: "portrait", tone: "warm", tag: "founder facilitating · Module 02", stamp: "PHOTO · ROOM" },
    { aspect: "landscape", tone: "green", tag: "cohort circle · Howrah", stamp: "PHOTO · ROOM" },
    { aspect: "square", tone: "ledger", tag: "hands · counting change", stamp: "PHOTO · DETAIL" },
    { aspect: "portrait", tone: "cool", tag: "tea before the session", stamp: "PHOTO · ROOM" },
    { aspect: "landscape", tone: "brick", tag: "walk to the bank · Module 04", stamp: "PHOTO · ROOM" },
    { aspect: "square", tone: "dusk", tag: "textbook · margin notes", stamp: "PHOTO · DETAIL" },
  ],
  clips: [
    { tag: "clip · 02:14 · Bengali · Module 03", stamp: "VIDEO · ROOM" },
    { tag: "clip · 01:48 · Hindi · Module 06", stamp: "VIDEO · ROOM" },
  ],
};

export function InTheRoom() {
  const c = IN_THE_ROOM_COPY;
  return (
    <section className="section section--alt ws-room">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="04" label="In the room" />
            <p className="curr-modules__hint">
              The founder facilitating. Photos and clips.
            </p>
          </div>
          <div>
            <h2 className="ws-room__head">In the room.</h2>

            <div className="ws-room__grid">
              {c.photos.map((p, i) => (
                <Photo
                  key={i}
                  aspect={p.aspect}
                  tone={p.tone}
                  tag={p.tag}
                  stamp={p.stamp}
                />
              ))}
            </div>

            {c.clips.length > 0 && (
              <div className="ws-room__clips">
                {c.clips.map((clip, i) => (
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
            )}

            <blockquote className="ws-room__quote">
              {c.body}
              <cite className="ws-room__cite">{c.attribution}</cite>
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
const WHAT_CHANGED_COPY: { placeholderBadge?: string; body: ReactNode } = {
  placeholderBadge: "PLACEHOLDER · EDITORIAL PROSE",
  body: (
    <>
      <p>
        The first <strong>2023 cohort</strong> taught us that Module 04 —
        opening a bank account — could not stay theoretical. The session now
        ends with a walk to the nearest branch and a queue ticket in hand.
      </p>
      <p>
        The <strong>2024 cohort</strong> showed that the budgeting module landed
        harder when worked against a woman's lowest-earning month, not her
        average. The worksheet was rewritten.
      </p>
      <p>
        The <strong>2025 cohort</strong> is the first to be taught largely by
        CRPs from the 2023 and 2024 cohorts. The pace and pedagogy shifted
        around them.
      </p>
      <p>
        What's still being adjusted: the order of the digital-money and
        scam-shield modules; the length of the emergency-fund worksheet.{" "}
        <strong>
          The curriculum is fixed in its spine and porous at its surface.
        </strong>{" "}
        We re-edit between cohorts, not during them.
      </p>
    </>
  ),
};

export function WhatChanged() {
  const c = WHAT_CHANGED_COPY;
  return (
    <section className="section ws-changed">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="05" label="What changed between cohorts" />
            <p className="curr-modules__hint">
              Iteration log — what each cycle taught the curriculum.
            </p>
          </div>
          <div>
            <h2 className="ws-section__head">
              The curriculum is fixed in its spine and porous at its surface.
              {c.placeholderBadge && (
                <span
                  className="ph-stamp"
                  style={{ marginLeft: 14, verticalAlign: "middle" }}
                >
                  [ {c.placeholderBadge} ]
                </span>
              )}
            </h2>
            <div className="ws-changed__body">{c.body}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   07 BANDHAN PARTNERSHIP
   ================================================================ */
const BANDHAN_COPY: { body: ReactNode } = {
  body: (
    <>
      <p>
        None of this happens without <strong>Bandhan NGO</strong>. Bandhan
        brings the halls, the institutional relationships in every block we
        operate in, and the trust that lets a workshop open its doors on the
        first day with a cohort already in the room.
      </p>
      <p>
        The Prosperity Project brings the curriculum, the facilitator training,
        the textbook, and the design system that holds it all together. The
        partnership is in its third year; the next phase extends to four new
        blocks across Howrah and Hooghly.
      </p>
    </>
  ),
};

export function BandhanPartnership() {
  const c = BANDHAN_COPY;
  return (
    <section className="section section--ink ws-bandhan">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <p className="ws-bandhan__marker">§ 06 &nbsp;·&nbsp; Partnership</p>
            <p className="ws-bandhan__hint">
              The institutional spine that makes the workshops possible.
            </p>
          </div>
          <div>
            <h2 className="ws-bandhan__head">In partnership with Bandhan NGO.</h2>
            <div className="ws-bandhan__body">{c.body}</div>
            <div className="ws-bandhan__links">
              <Link href="/about#partners" className="tertiary tertiary--inverse">
                Read more about the partnership <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
