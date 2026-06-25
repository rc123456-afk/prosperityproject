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
        name: "Anjali Saha",
        roleAccent: "CRP · since 2024",
        role: "Bara Kachari, Howrah",
        flip: false,
        portrait: { tone: "warm", tag: "Anjali, in the hall where she now teaches", stamp: "PHOTO · CRP" },
        quoteOrig:
          "पहले मैं सिर्फ़ सुनती थी। अब मेरे हाथ में चॉक है और कमरा मेरी बात सुनता है।",
        quoteEn: c.people.anjali.quoteEn,
        citeName: "Anjali Saha",
        citeMeta: "spoken in Hindi",
        body: c.people.anjali.body,
        detail: { tone: "ledger", aspect: "square", tag: "her facilitator's notebook · margin notes", stamp: "PHOTO · DETAIL" },
        group: { tone: "green", aspect: "landscape", tag: "the 2025 Howrah cohort she leads", stamp: "PHOTO · WORKSHOP" },
      },
      {
        name: "Sabita Halder",
        roleAccent: "CRP · since 2023",
        role: "Gosaba, South 24 Parganas",
        flip: true,
        portrait: { tone: "green", tag: "Sabita, before a Sundarbans session", stamp: "PHOTO · CRP" },
        quoteOrig:
          "जो बात मेरी माँ को कोई नहीं समझा पाया, वह मैं अब पूरे गाँव को समझा रही हूँ।",
        quoteEn: c.people.sabita.quoteEn,
        citeName: "Sabita Halder",
        citeMeta: "spoken in Hindi",
        body: c.people.sabita.body,
        detail: { tone: "cool", aspect: "square", tag: "the boat crossing to the next village", stamp: "PHOTO · DETAIL" },
        group: { tone: "warm", aspect: "landscape", tag: "Module 04 · the walk to the branch", stamp: "PHOTO · WORKSHOP" },
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
        name: "Rekha Mondal",
        roleAccent: "Graduate · 2024 cohort",
        role: "Salkia, Howrah",
        flip: false,
        portrait: { tone: "ledger", tag: "Rekha, with her household notebook", stamp: "PHOTO · STUDENT", anon: false },
        quoteOrig:
          "पहले समझ नहीं थी कि पैसा कहाँ जा रहा है। अब नोटबुक है, और हर हफ़्ते मैं देखती हूँ।",
        quoteEn: c.people.rekha.quoteEn,
        citeName: "Rekha Mondal",
        citeMeta: "spoken in Hindi",
        body: c.people.rekha.body,
        detail: { tone: "warm", aspect: "square", tag: "the sewing machine · her front room", stamp: "PHOTO · DETAIL" },
        group: { tone: "green", aspect: "landscape", tag: "her graduation · 2024", stamp: "PHOTO · WORKSHOP" },
      },
      {
        name: "Pictured by her hands",
        roleAccent: "Graduate · 2025 cohort · anonymous",
        role: "Sundarbans",
        flip: true,
        portrait: { tone: "cool", aspect: "portrait", tag: "her hands · counting the week's savings", stamp: "PHOTO · DETAIL", anon: true },
        quoteOrig:
          "मैंने किसी को नहीं बताया कि मैं बचत कर रही हूँ। यह मेरा है।",
        quoteEn: c.people.anonymous.quoteEn,
        citeName: "Anonymous",
        citeMeta: "pictured by request · spoken in Hindi",
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
        <p className="curr-hero__credit">Howrah · 2025 · [ PHOTOGRAPHER ]</p>
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
          tag={s.detail.tag}
          stamp={s.detail.stamp}
        />
        <Figure
          aspect={s.group.aspect}
          tone={s.group.tone}
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
  { tone: "warm" as const, tag: "Anjali · on becoming a facilitator", stamp: "VIDEO · 02:40", caption: "Anjali Saha on the first cohort she taught.", meta: "Howrah · 2025 · Bengali, English subtitles" },
  { tone: "green" as const, tag: "Rekha · on the notebook", stamp: "VIDEO · 01:55", caption: "Rekha Mondal on the week she opened her account.", meta: "Salkia · 2024 · Hindi, English subtitles" },
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
