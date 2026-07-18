/* Stories — photo-essay sections. Ported verbatim from StoriesPage.jsx.
   Presentational only (no client state); the play-button overlays are pure
   CSS, so every section stays a server component. Editable copy lives in
   content/copy.ts; names, Hindi/Bengali originals, and photo specs stay here. */

import { Photo, SectionMarker } from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.stories;

/* ---------- STORY DATA (crp + beneficiary) ---------- */
type PhotoSpec = {
  tone: "warm" | "cool" | "green" | "ledger" | "dusk";
  aspect?: "portrait" | "landscape" | "square";
  tag: string;
  stamp: string;
  src?: string;
  alt?: string;
};

type StoryItem = {
  name: string;
  roleAccent: string;
  role: string;
  portrait: PhotoSpec;
  quoteOrig: string;
  quoteEn: string;
  citeName: string;
  citeMeta: string;
  body: string;
};

type StoryBlock = {
  marker: string;
  label: string;
  hint: string;
  intro: string;
  stories: StoryItem[];
};

const STORY_DATA: { crp: StoryBlock; beneficiary: StoryBlock } = {
  crp: {
    marker: "02",
    label: c.crp.sectionLabel,
    hint: c.crp.sectionHint,
    intro: c.crp.intro,
    stories: [
      {
        name: "Shankari Purkait Mondal",
        roleAccent: "Community Resource Person",
        role: "Baruipur, West Bengal",
        portrait: { tone: "warm", tag: "A facilitator, in the hall where she now teaches", stamp: "PHOTO · CRP", src: "/photos/stories/anjali-portrait.jpg", alt: "A Community Resource Person at a workshop" },
        quoteOrig: "মানুষকে আর্থিক পরিস্থিতির মোকাবেলা করতে হবে, তাদের কাছে টাকা থাকতে হবে।",
        quoteEn: c.people.crp1.quoteEn,
        citeName: "Shankari Purkait Mondal",
        citeMeta: "spoken in Bengali",
        body: c.people.crp1.body,
      },
    ],
  },
  beneficiary: {
    marker: "03",
    label: c.beneficiary.sectionLabel,
    hint: c.beneficiary.sectionHint,
    intro: c.beneficiary.intro,
    stories: [
      {
        name: "Lakshmi Mondal",
        roleAccent: "Community Resource Person",
        role: "Baruipur, West Bengal",
        portrait: { tone: "ledger", tag: "A facilitator, back among the women she teaches", stamp: "PHOTO · CRP", src: "/photos/stories/lakshmi-portrait.png", alt: "Lakshmi Mondal, a Community Resource Person, at a workshop in Baruipur" },
        quoteOrig: "শেখার কোনো বয়স হয় না।",
        quoteEn: c.people.student1.quoteEn,
        citeName: "Lakshmi Mondal",
        citeMeta: "spoken in Bengali",
        body: c.people.student1.body,
      },
    ],
  },
};

/* ---------- HERO ---------- */
export function StoriesHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.hero.kicker}</p>
        <h1 className="curr-hero__headline">{c.hero.headline}</h1>
        <p className="curr-hero__standfirst">{c.hero.standfirst}</p>
      </div>
    </section>
  );
}

/* ---------- CONSENT NOTE (rendered at the foot of the page) ---------- */
export function ConsentNote() {
  return (
    <section className="section">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="—" label="A note on consent" />
          </div>
          <p className="consent-note">{renderInline(c.consentNote)}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- ONE STORY (micro photo essay) ---------- */
function Story({ s, index }: { s: StoryItem; index: string }) {
  return (
    <article className="story">
      <header className="story__head">
        <span className="story__index" aria-hidden="true">
          {index}
        </span>
        <div className="story__id">
          <h3 className="story__name">{s.name}</h3>
          <p className="story__role">
            <span className="accent">{s.roleAccent}</span> &nbsp;·&nbsp; {s.role}
          </p>
        </div>
      </header>

      <div className="story__lead">
        <figure className="story__portrait">
          <Photo
            aspect={s.portrait.aspect || "portrait"}
            tone={s.portrait.tone}
            src={s.portrait.src}
            alt={s.portrait.alt}
            tag={s.portrait.tag}
            stamp={s.portrait.stamp}
          />
        </figure>
        <div className="story__quote-wrap">
          <p className="story__quote-orig">{s.quoteOrig}</p>
          <p className="story__quote-en">{renderInline(s.quoteEn)}</p>
          <span className="story__cite">
            {s.citeName} &nbsp;·&nbsp;{" "}
            <span className="accent">{s.citeMeta}</span>
          </span>
        </div>
      </div>

      <p className="story__body">{renderInline(s.body)}</p>
    </article>
  );
}

/* ---------- STORY SECTION (crp | beneficiary) ---------- */
export function StorySection({ kind }: { kind: "crp" | "beneficiary" }) {
  const data = STORY_DATA[kind];
  const alt = kind === "beneficiary";
  return (
    <section className={`section ${alt ? "section--alt" : ""}`}>
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index={data.marker} label={data.label} />
            <p className="curr-modules__hint">{data.hint}</p>
          </div>
          <div>
            <p className="curr-premise__body" style={{ marginBottom: 64 }}>
              {renderInline(data.intro)}
            </p>
            <div className="story-set">
              {data.stories.map((s, i) => (
                <Story key={i} s={s} index={String(i + 1).padStart(2, "0")} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FULL-WIDTH PULL QUOTE ---------- */
export function StoryPullQuote() {
  const q = c.pullQuote;
  return (
    <section className="pullquote-section section--ink">
      <div className="container">
        <figure className="pullquote">
          <p className="pullquote__mark">{q.mark}</p>
          <p className="pullquote__orig">{q.orig}</p>
          <blockquote className="pullquote__text">&ldquo;{q.text}&rdquo;</blockquote>
          <figcaption className="pullquote__cite">
            {q.cite} &nbsp;·&nbsp; <span className="accent">{q.citeMeta}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- INTERVIEW VIDEOS ----------
   Source-agnostic and NOT tied to Google Drive. Each slot plays from either:
     • youtubeId — an unlisted YouTube video id (preferred), or
     • src       — a web-compressed self-hosted file in /public/videos/
   With neither set, a neutral placeholder renders. Fill in as videos land. */
type StoryVideoSpec = {
  tone: "warm" | "cool" | "green" | "ledger" | "dusk";
  label: string;
  context: string;
  youtubeId?: string;
  src?: string;
};

const STORY_VIDEOS: StoryVideoSpec[] = [
  { tone: "warm", label: "Interview 01", context: "On how much a single session opened up for her, with thanks to Rehaan for teaching so much so young.", youtubeId: "HseT88DHYwo" },
  { tone: "green", label: "Interview 02", context: "Shankari on why every woman needs money of her own to stand on, and her blessing for Rehaan to carry the work further.", youtubeId: "Lh3Qb8OBKa8" },
  { tone: "ledger", label: "Interview 03", context: "Lakshmi on carrying what she learned to the women around her, and her reminder that learning has no age, with thanks to Rehaan.", youtubeId: "Oa7JATommV0" },
  { tone: "cool", label: "Interview 04", context: "Suparna on walking away knowing far more than she came in with, and her thanks to Rehaan for the session.", youtubeId: "vksZ_QKBAQI" },
];

function StoryVideo({ v }: { v: StoryVideoSpec }) {
  return (
    <figure className="story-video">
      {v.youtubeId ? (
        <div className="story-video__frame">
          <iframe
            className="story-video__embed"
            src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
            title={v.label}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : v.src ? (
        <div className="story-video__frame">
          <video
            className="story-video__embed"
            controls
            preload="metadata"
            src={v.src}
          />
        </div>
      ) : (
        <div className="ws-clip">
          <Photo aspect="cinema" tone={v.tone} stamp="VIDEO · COMING">
            <span className="ws-clip__play" aria-hidden="true">
              ▶
            </span>
          </Photo>
        </div>
      )}
      <figcaption className="story-video__cap">
        <span className="story-video__label">{v.label}</span>
        <span className="story-video__context">{v.context}</span>
        <span className="story-video__meta">{c.videos.meta}</span>
      </figcaption>
    </figure>
  );
}

export function VideoTestimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label={c.videos.sectionLabel} />
            <p className="curr-modules__hint">{c.videos.intro}</p>
          </div>
          <div>
            <div className="story-videos">
              {STORY_VIDEOS.map((v, i) => (
                <StoryVideo key={i} v={v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
