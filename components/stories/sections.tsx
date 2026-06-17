/* Stories — photo-essay sections for the two cohorts. Ported verbatim from
   StoriesPage.jsx. Presentational only (no client state); the play-button
   overlays are pure CSS, so every section stays a server component.

   Composition (per route):
     <StoriesHero cohort />
     <ConsentNote />
     <StorySection kind="crp" cohort />
     <StoryPullQuote cohort />
     <StorySection kind="beneficiary" cohort />
     <VideoTestimonials cohort />
*/

import { Photo, Figure, SectionMarker } from "@/components/primitives";

export type Cohort = "women" | "blue-collar";

/* ---------- COPY (hero + pull quote) ---------- */
type StoryCopy = {
  kicker: string;
  headline: string;
  standfirst: string;
  heroTag: string;
  heroStamp: string;
  heroTone: "warm" | "dusk";
  heroMeta: string;
  placeholderBadge?: string;
  pullquote: {
    placeholder?: boolean;
    mark: string;
    text: string;
    cite: string;
    citeMeta: string;
  };
};

const STORIES_COPY: Record<Cohort, StoryCopy> = {
  women: {
    kicker: "Stories · For Women",
    headline: "The women who carry it.",
    standfirst:
      "Students who finished the curriculum, and the Community Resource Persons who came back to teach it. In their own words.",
    heroTag: "graduation day · Howrah cohort · 2025",
    heroStamp: "PHOTO · STORIES",
    heroTone: "warm",
    heroMeta: "Howrah · 2025 · [ PHOTOGRAPHER ]",
    pullquote: {
      mark: "From a workshop in the Sundarbans",
      text: "I came to learn how to keep my money. I stayed to teach my neighbours how to keep theirs.",
      cite: "Sabita Halder",
      citeMeta: "CRP · South 24 Parganas",
    },
  },
  "blue-collar": {
    kicker: "Stories · For Blue-Collar Workers",
    headline: "The first cohort's stories.",
    standfirst:
      "The UAE pilot is just beginning. The first workers' stories will be published here as they finish — in their words, with their permission.",
    heroTag: "Karama pilot · mock-up · 2025",
    heroStamp: "PHOTO · MOCK-UP · UAE",
    heroTone: "dusk",
    heroMeta: "Dubai · 2025 pilot · [ PHOTOGRAPHER ]",
    placeholderBadge: "IN DEVELOPMENT",
    pullquote: {
      placeholder: true,
      mark: "First testimonial — to be recorded",
      text: "The pull quote that opens this page will be drawn from the first worker who completes the curriculum and agrees to be quoted.",
      cite: "[ FIRST COHORT ]",
      citeMeta: "Pilot underway · UAE",
    },
  },
};

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
  placeholder?: boolean;
  stories?: StoryItem[];
};

const STORY_DATA: Record<Cohort, { crp: StoryBlock; beneficiary: StoryBlock }> = {
  women: {
    crp: {
      marker: "01",
      label: "Community Resource Persons",
      hint: "Students first, facilitators second.",
      intro:
        "Most women teaching today sat in a cohort themselves, a year or two earlier. Two of them:",
      stories: [
        {
          name: "Anjali Saha",
          roleAccent: "CRP · since 2024",
          role: "Bara Kachari, Howrah",
          flip: false,
          portrait: { tone: "warm", tag: "Anjali, in the hall where she now teaches", stamp: "PHOTO · CRP" },
          quoteOrig:
            "पहले मैं सिर्फ़ सुनती थी। अब मेरे हाथ में चॉक है और कमरा मेरी बात सुनता है।",
          quoteEn:
            "Before, I only listened. Now the chalk is in my hand and the room listens to me.",
          citeName: "Anjali Saha",
          citeMeta: "spoken in Hindi",
          body:
            "Anjali finished the 2023 cohort with one question: could she do this herself? She trained that spring. The cohort she leads now meets in the same hall where she once sat in the back row.",
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
          quoteEn:
            "What no one could explain to my mother, I now explain to the whole village.",
          citeName: "Sabita Halder",
          citeMeta: "spoken in Hindi",
          body:
            "Sabita travels by boat to three villages across the Sundarbans, the textbook in a plastic bag against the spray. In two years she has run the curriculum nine times; six women in her current cohort have already asked about training to teach.",
          detail: { tone: "cool", aspect: "square", tag: "the boat crossing to the next village", stamp: "PHOTO · DETAIL" },
          group: { tone: "warm", aspect: "landscape", tag: "Module 04 · the walk to the branch", stamp: "PHOTO · WORKSHOP" },
        },
      ],
    },
    beneficiary: {
      marker: "02",
      label: "Students",
      hint: "Women who finished all ten modules.",
      intro:
        "Most students simply take the curriculum home and put it to work. Two on what changed:",
      stories: [
        {
          name: "Rekha Mondal",
          roleAccent: "Graduate · 2024 cohort",
          role: "Salkia, Howrah",
          flip: false,
          portrait: { tone: "ledger", tag: "Rekha, with her household notebook", stamp: "PHOTO · STUDENT", anon: false },
          quoteOrig:
            "पहले समझ नहीं थी कि पैसा कहाँ जा रहा है। अब नोटबुक है, और हर हफ़्ते मैं देखती हूँ।",
          quoteEn:
            "Before, I didn't understand where the money was going. Now there is a notebook, and every week I look at it.",
          citeName: "Rekha Mondal",
          citeMeta: "spoken in Hindi",
          body:
            "Rekha runs a tailoring business from her front room. Module 02 — budgeting against her lowest-earning month, not her average — stayed with her. She opened her first account, in her own name, on the Module 04 walk.",
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
          quoteEn:
            "I haven't told anyone that I am saving. This is mine.",
          citeName: "Anonymous",
          citeMeta: "pictured by request · spoken in Hindi",
          body:
            "This student asked not to be named or photographed by face. She keeps a private emergency fund the household doesn't know about — the habit Module 10 is built to teach. Her story is hers to tell, on her terms.",
          detail: { tone: "ledger", aspect: "square", tag: "the tin where she keeps it", stamp: "PHOTO · DETAIL" },
          group: { tone: "dusk", aspect: "landscape", tag: "her cohort · faces withheld", stamp: "PHOTO · WORKSHOP" },
        },
      ],
    },
  },

  "blue-collar": {
    crp: {
      marker: "01",
      label: "Community Resource Persons",
      hint: "Pilot facilitators — recruiting now.",
      intro:
        "The first UAE facilitators are being recruited from the pilot cohort. Their stories appear here once they've run a workshop of their own — not before.",
      placeholder: true,
    },
    beneficiary: {
      marker: "02",
      label: "Students",
      hint: "First pilot cohort underway.",
      intro:
        "As workers finish the modules in Karama and Sonapur, those who wish to share what changed will be recorded — name, photo, and quote, all with permission. Until then this section stays empty by design.",
      placeholder: true,
    },
  },
};

/* ---------- HERO ---------- */
export function StoriesHero({ cohort }: { cohort: Cohort }) {
  const c = STORIES_COPY[cohort];
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.kicker}</p>
        <h1 className="curr-hero__headline">{c.headline}</h1>
        <p className="curr-hero__standfirst">
          {c.standfirst}
          {c.placeholderBadge && (
            <span className="ph-stamp" style={{ marginLeft: 14 }}>
              [ {c.placeholderBadge} ]
            </span>
          )}
        </p>
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

/* ---------- CONSENT NOTE ---------- */
export function ConsentNote() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="—" label="A note on consent" />
          </div>
          <p className="consent-note">
            Names are used with permission. Some subjects requested anonymity and
            are pictured by their hands or workspace.
          </p>
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
          <p className="story__quote-en">{s.quoteEn}</p>
          <span className="story__cite">
            {s.citeName} &nbsp;·&nbsp;{" "}
            <span className="accent">{s.citeMeta}</span>
          </span>
        </div>
      </div>

      <p className="story__body">{s.body}</p>

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
export function StorySection({
  kind,
  cohort,
}: {
  kind: "crp" | "beneficiary";
  cohort: Cohort;
}) {
  const data = STORY_DATA[cohort][kind];
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
            <p
              className="curr-premise__body"
              style={{ marginBottom: data.placeholder ? 0 : 64 }}
            >
              {data.intro}
              {data.placeholder && (
                <span className="ph-stamp" style={{ marginLeft: 14 }}>
                  [ AWAITING FIRST COHORT ]
                </span>
              )}
            </p>
            {!data.placeholder && data.stories && (
              <div className="story-set">
                {data.stories.map((s, i) => (
                  <Story key={i} s={s} index={String(i + 1).padStart(2, "0")} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FULL-WIDTH PULL QUOTE ---------- */
export function StoryPullQuote({ cohort }: { cohort: Cohort }) {
  const q = STORIES_COPY[cohort].pullquote;
  return (
    <section className="pullquote-section section--ink">
      <div className="container">
        <figure className="pullquote">
          <p className="pullquote__mark">
            {q.mark}
            {q.placeholder && (
              <span className="ph-stamp" style={{ marginLeft: 12 }}>
                [ PLACEHOLDER ]
              </span>
            )}
          </p>
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
type VideoClip = {
  tone: "warm" | "green" | "dusk";
  tag: string;
  stamp: string;
  caption: string;
  meta: string;
};
type VideoBlock = { placeholder?: boolean; intro: string; clips: VideoClip[] };

const VIDEO_COPY: Record<Cohort, VideoBlock> = {
  women: {
    intro: "Two short testimonials, filmed at graduations. Subtitled in English.",
    clips: [
      { tone: "warm", tag: "Anjali · on becoming a facilitator", stamp: "VIDEO · 02:40", caption: "Anjali Saha on the first cohort she taught.", meta: "Howrah · 2025 · Bengali, English subtitles" },
      { tone: "green", tag: "Rekha · on the notebook", stamp: "VIDEO · 01:55", caption: "Rekha Mondal on the week she opened her account.", meta: "Salkia · 2024 · Hindi, English subtitles" },
    ],
  },
  "blue-collar": {
    placeholder: true,
    intro:
      "Video testimonials from the UAE pilot will be added here as the first workshops graduate.",
    clips: [
      { tone: "dusk", tag: "first pilot testimonial", stamp: "VIDEO · TBD", caption: "Reserved for the first worker who completes the curriculum and agrees to film.", meta: "UAE · pilot underway" },
    ],
  },
};

export function VideoTestimonials({ cohort }: { cohort: Cohort }) {
  const v = VIDEO_COPY[cohort];
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label="Video testimonials" />
            <p className="curr-modules__hint">{v.intro}</p>
          </div>
          <div>
            <div
              className={`story-videos${v.clips.length === 1 ? " story-videos--single" : ""}`}
            >
              {v.clips.map((clip, i) => (
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
                    <span className="stamp">[ {v.placeholder ? "PLACEHOLDER" : "CLIP"} ]</span>
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
