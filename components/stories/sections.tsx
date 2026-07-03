/* Stories — photo-essay sections. Ported verbatim from StoriesPage.jsx.
   Presentational only (no client state); the play-button overlays are pure
   CSS, so every section stays a server component. Editable copy lives in
   content/copy.ts; names, Hindi/Bengali originals, and photo specs stay here. */

import { Photo, Figure, SectionMarker } from "@/components/primitives";
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
  anon?: boolean;
};

type StoryItem = {
  name: string;
  roleAccent: string;
  role: string;
  flip: boolean;
  portrait: PhotoSpec;
  quoteOrig: string;
  quoteEn: string;
  citeName: string;
  citeMeta: string;
  body: string;
  detail: PhotoSpec;
  group: PhotoSpec;
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
    marker: "01",
    label: c.crp.sectionLabel,
    hint: c.crp.sectionHint,
    intro: c.crp.intro,
    stories: [
      {
        name: "[ Name ]",
        roleAccent: "Community Resource Person",
        role: "Baruipur, West Bengal",
        flip: false,
        portrait: { tone: "warm", tag: "A facilitator, in the hall where she now teaches", stamp: "PHOTO · CRP", src: "/photos/stories/anjali-portrait.jpg", alt: "A Community Resource Person at a workshop" },
        quoteOrig: "[ Original-language quote ]",
        quoteEn: c.people.crp1.quoteEn,
        citeName: "[ Name ]",
        citeMeta: "spoken in Bengali",
        body: c.people.crp1.body,
        detail: { tone: "ledger", aspect: "square", tag: "her facilitator's notebook · margin notes", stamp: "PHOTO · DETAIL", src: "/photos/stories/anjali-detail.jpg", alt: "Participants taking notes during a session" },
        group: { tone: "green", aspect: "landscape", tag: "the cohort she now leads", stamp: "PHOTO · WORKSHOP", src: "/photos/stories/anjali-group.jpg", alt: "The cohort gathered for a session" },
      },
    ],
  },
  beneficiary: {
    marker: "02",
    label: c.beneficiary.sectionLabel,
    hint: c.beneficiary.sectionHint,
    intro: c.beneficiary.intro,
    stories: [
      {
        name: "[ Name ]",
        roleAccent: "Graduate",
        role: "Baruipur, West Bengal",
        flip: false,
        portrait: { tone: "ledger", tag: "A graduate, with her household notebook", stamp: "PHOTO · STUDENT", anon: false, src: "/photos/stories/rekha-portrait.jpg", alt: "A graduate of the Knowing Your Money curriculum" },
        quoteOrig: "[ Original-language quote ]",
        quoteEn: c.people.student1.quoteEn,
        citeName: "[ Name ]",
        citeMeta: "spoken in Bengali",
        body: c.people.student1.body,
        detail: { tone: "warm", aspect: "square", tag: "her front room", stamp: "PHOTO · DETAIL", src: "/photos/stories/rekha-detail.jpg", alt: "Notes and worksheets from the session" },
        group: { tone: "green", aspect: "landscape", tag: "her cohort", stamp: "PHOTO · WORKSHOP", src: "/photos/stories/rekha-group.jpg", alt: "The cohort during a workshop" },
      },
      {
        name: "Pictured by her hands",
        roleAccent: "Graduate · anonymous",
        role: "Baruipur, West Bengal",
        flip: true,
        portrait: { tone: "cool", aspect: "portrait", tag: "her hands · counting the week's savings", stamp: "PHOTO · DETAIL", anon: true },
        quoteOrig: "[ Original-language quote ]",
        quoteEn: c.people.anonymous.quoteEn,
        citeName: "Anonymous",
        citeMeta: "pictured by request",
        body: c.people.anonymous.body,
        detail: { tone: "ledger", aspect: "square", tag: "the tin where she keeps it", stamp: "PHOTO · DETAIL" },
        group: { tone: "dusk", aspect: "landscape", tag: "her cohort · faces withheld", stamp: "PHOTO · WORKSHOP" },
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
      <div className="container">
        <Photo
          aspect="cinema"
          tone="warm"
          src="/photos/stories/hero.jpg"
          alt="The full cohort gathered together under the programme banner"
          priority
          style={{ marginTop: 64 }}
        />
        <p className="curr-hero__credit">Baruipur · [ YEAR ] · [ PHOTOGRAPHER ]</p>
      </div>
    </section>
  );
}

/* ---------- CONSENT NOTE ---------- */
export function ConsentNote() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
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

      <div className={`story__lead${s.flip ? " story__lead--flip" : ""}`}>
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

      <div className="story__photos">
        <Figure
          aspect={s.detail.aspect}
          tone={s.detail.tone}
          src={s.detail.src}
          alt={s.detail.alt}
          tag={s.detail.tag}
          stamp={s.detail.stamp}
        />
        <Figure
          aspect={s.group.aspect}
          tone={s.group.tone}
          src={s.group.src}
          alt={s.group.alt}
          tag={s.group.tag}
          stamp={s.group.stamp}
        />
      </div>
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
          <blockquote className="pullquote__text">&ldquo;{q.text}&rdquo;</blockquote>
          <figcaption className="pullquote__cite">
            {q.cite} &nbsp;·&nbsp; <span className="accent">{q.citeMeta}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- VIDEO TESTIMONIALS ---------- */
const VIDEO_CLIPS = [
  { tone: "warm" as const, tag: "[ Name ] · on becoming a facilitator", stamp: "VIDEO · [ TIME ]", caption: "[ A facilitator on the first cohort she taught. ]", meta: "Baruipur · [ YEAR ] · Bengali, English subtitles" },
  { tone: "green" as const, tag: "[ Name ] · on the notebook", stamp: "VIDEO · [ TIME ]", caption: "[ A graduate on the week she opened her account. ]", meta: "Baruipur · [ YEAR ] · Bengali, English subtitles" },
];

export function VideoTestimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label={c.videos.sectionLabel} />
            <p className="curr-modules__hint">{c.videos.intro}</p>
          </div>
          <div>
            <div
              className={`story-videos${VIDEO_CLIPS.length === 1 ? " story-videos--single" : ""}`}
            >
              {VIDEO_CLIPS.map((clip, i) => (
                <figure className="story-video" key={i}>
                  <div className="ws-clip">
                    <Photo
                      aspect="landscape"
                      tone={clip.tone}
                      tag={clip.tag}
                      stamp={clip.stamp}
                    >
                      <span className="ws-clip__play" aria-hidden="true">
                        ▶
                      </span>
                    </Photo>
                  </div>
                  <figcaption>
                    <span className="stamp">[ CLIP ]</span>
                    {clip.caption}
                    <br />
                    {clip.meta}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
