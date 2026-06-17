/* About — the founder's story and organizational origin. Ported verbatim from
   AboutPage.jsx. Server components. PressSlot keeps the architecture in place
   but renders nothing until PRESS_ITEMS is populated. */

import { Photo, Caption, SectionMarker } from "@/components/primitives";
import { SmartLink } from "@/components/SmartLink";

/* ---------- HERO ---------- */
export function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero__grid">
          <div>
            <p className="about-hero__kicker">About</p>
            <h1 className="about-hero__head">Why this exists.</h1>
            <p className="about-hero__byline">
              By Rehaan Chowdhary &nbsp;·&nbsp;{" "}
              <span className="accent">Founder</span>
              <span className="ph-stamp" style={{ marginLeft: 14 }}>
                [ PLACEHOLDER ]
              </span>
            </p>
          </div>
          <div>
            <Photo
              aspect="portrait"
              tone="warm"
              tag="Rehaan Chowdhary · founder"
              stamp="PHOTO · PORTRAIT"
            />
            <Caption meta="Kolkata · 2025 · [ PHOTOGRAPHER ]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOUNDER — long-form first person, dropcap, narrow column ---------- */
export function FounderStory() {
  return (
    <section className="section">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label="The founder" />
            <p className="curr-modules__hint">
              First-person. Placeholder prose, to be edited with Rehaan.
            </p>
            <span id="facilitators"></span>
          </div>
          <div>
            <div className="founder__body">
              <p>
                The first person who taught me about money couldn&rsquo;t open a
                bank account in her own name. Phoolmati looked after me from the
                time I was four, and ran a household budget in her head I&rsquo;ve
                never managed to reproduce on paper — all of it in cash, in a tin,
                none of it with a bank. I grew up assuming this was normal: that
                the people who managed money most carefully were the ones the
                system had least room for.
              </p>
              <p>
                The curriculum began as one long interview with her. I asked the
                questions I&rsquo;d never thought to ask — where do you keep it, who
                do you trust with it, what happens in an emergency. I expected to
                find gaps in what she knew. Instead I found a complete system
                missing one piece: not knowledge, but access.{" "}
                <em>Knowing Your Money</em> is built backwards from that interview —
                ten modules, each answering a question she had already answered for
                herself.
              </p>
              <p>
                The first cohort was twenty-two women in a borrowed hall in Howrah.
                I facilitated it myself, badly, and learned more in ten weeks than
                in the year of planning before it. The slides mattered less than the
                tea. The worksheet that worked was built around a woman&rsquo;s
                lowest-earning month, not her average. Module&nbsp;04 couldn&rsquo;t
                stay on paper, so it ended with all of us walking to the branch and
                queueing together — for most of the room, the first account in their
                own name.
              </p>
              <p>
                None of it scaled past that hall without <strong>Bandhan</strong> —
                their rooms, their relationships, the trust that lets a workshop open
                on day one with a cohort already inside. We bring the curriculum and
                the training; they bring the ground it stands on.
              </p>
              <p>
                The other lesson was to get out of the room. A curriculum carried by
                an outsider is one people listen to politely; carried by a neighbour,
                it&rsquo;s one they argue with and take home. The women who finished
                the early cohorts trained as facilitators — Community Resource
                Persons — and most workshops today are taught by someone who once sat
                in the back row.
              </p>
              <p>
                We&rsquo;re now extending the same curriculum to{" "}
                <strong>blue-collar workers in the UAE</strong> — drivers,
                construction and domestic workers navigating remittance, contracts,
                and end-of-service pay largely alone. The spine holds; the surface
                shifts. The budget worksheet now tracks a remittance window; the walk
                to the bank becomes a walk to the exchange house. The first stories
                from there will be told by the workers themselves.
              </p>
              <p>
                I think about what Phoolmati would have done with an account in her
                own name, thirty years ago. I can&rsquo;t give her that. This is the
                next best thing I know how to build.
                <span className="ph-stamp" style={{ marginLeft: 12 }}>
                  [ PLACEHOLDER PROSE ]
                </span>
              </p>
            </div>

            <figure className="founder__figure">
              <Photo
                aspect="landscape"
                tone="ledger"
                tag="the borrowed hall · first cohort · Howrah"
                stamp="PHOTO · ARCHIVE"
              />
              <Caption meta="Howrah · 2023 · [ PHOTOGRAPHER ]" />
            </figure>

            <figure className="founder__figure founder__figure--wide">
              <Photo
                aspect="cinema"
                tone="warm"
                tag="Module 04 · the first walk to the branch"
                stamp="PHOTO · ARCHIVE"
              />
              <Caption meta="South 24 Parganas · 2024 · [ PHOTOGRAPHER ]" />
            </figure>

            <figure className="founder__figure">
              <Photo
                aspect="square"
                tone="cool"
                tag="the original interview notebook"
                stamp="PHOTO · DETAIL"
              />
              <Caption meta="Kolkata · 2022 · [ PHOTOGRAPHER ]" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- VISION & MISSION — pull-quote treatment ---------- */
export function VisionMission() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label="Vision & mission" />
          </div>
          <p className="vision__text">
            The project exists so that people navigating finance without formal
            access have the tools, and the confidence, to navigate it on their own
            terms.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- ORGANIZATIONS — flexible vertical list ---------- */
const ORGANIZATIONS = [
  {
    name: "Bandhan NGO",
    role: "Delivery partner · West Bengal",
    body:
      "Bandhan brings the halls, the relationships in every block, and the trust that lets a workshop open with a cohort already in the room. We bring the curriculum, the training, and the textbook. Now in its third year, the partnership extends next to four new blocks across Howrah and Hooghly.",
    photo: { tone: "green" as const, tag: "a Bandhan branch hall · after hours", stamp: "PHOTO · PARTNER" },
    link: { label: "More on the partnership", href: "#partners" },
  },
];

export function Organizations() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label="Organizations" />
            <p className="curr-modules__hint">
              The institutions the work is built with.
            </p>
          </div>
          <div>
            <div className="orgs">
              {ORGANIZATIONS.map((o, i) => (
                <article key={i} className={`org${o.photo ? "" : " org--no-photo"}`}>
                  <div>
                    <h3 className="org__name">{o.name}</h3>
                    <p className="org__role">{o.role}</p>
                    <p className="org__body">{o.body}</p>
                    {o.link && (
                      <p className="org__link">
                        <SmartLink className="tertiary" href={o.link.href}>
                          {o.link.label} <span aria-hidden="true">→</span>
                        </SmartLink>
                      </p>
                    )}
                  </div>
                  {o.photo && (
                    <Photo
                      aspect="landscape"
                      tone={o.photo.tone}
                      tag={o.photo.tag}
                      stamp={o.photo.stamp}
                    />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRESS SLOT — architecture in place, not visibly rendered ---------- */
type PressItem = { outlet: string; title: string; date: string; href: string };
const PRESS_ITEMS: PressItem[] = [
  /* populate to surface a press strip */
];

export function PressSlot() {
  if (PRESS_ITEMS.length === 0) return null;
  return (
    <section className="section press-slot" id="press">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="04" label="Press" />
          </div>
          <ul className="reports-list">
            {PRESS_ITEMS.map((p, i) => (
              <li className="report-row" key={i}>
                <span className="report-row__year">{p.date}</span>
                <span className="report-row__title">{p.title}</span>
                <span className="report-row__status">{p.outlet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
