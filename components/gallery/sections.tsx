/* Gallery — single-page photo dump. ~20 documentary photographs in mixed
   aspect ratios and widths, captions on roughly half. Real images live in
   /public/photos/gallery. Server component. */

import { Photo } from "@/components/primitives";
import { copy } from "@/content/copy";

export function GalleryHero() {
  return (
    <section className="gallery-hero">
      <div className="container">
        <p className="gallery-hero__kicker">{copy.gallery.kicker}</p>
        <h1 className="gallery-hero__head">{copy.gallery.heading}</h1>
        <p className="gallery-hero__sub">{copy.gallery.sub}</p>
      </div>
    </section>
  );
}

type Width = "full" | "wide" | "half" | "third" | "small";
type Aspect = "portrait" | "landscape" | "square" | "cinema" | "tall";
type Tone = "warm" | "cool" | "green" | "ledger" | "brick" | "dusk";

type GalleryPhoto = {
  width: Width;
  aspect: Aspect;
  tone: Tone;
  tag: string;
  src?: string;
  alt?: string;
  desc?: string;
  meta?: string;
};

// Real photos live in /public/photos/gallery. Captions are honest to what's
// shown; add real locations/dates in `meta` when known.
const GALLERY_PHOTOS: GalleryPhoto[] = [
  { width: "wide",  aspect: "cinema",    tone: "warm",   tag: "workshop in session",      src: "/photos/gallery/hall-wide.jpg",            alt: "Women seated around long tables at a Knowing Your Money workshop", desc: "A Knowing Your Money workshop in session." },
  { width: "third", aspect: "square",    tone: "ledger", tag: "working the worksheet",    src: "/photos/gallery/worksheet-writing.jpg",    alt: "Four participants writing in their budget worksheets",            desc: "Working through the budget worksheet." },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "the day's lesson",         src: "/photos/gallery/teaching-slide.jpg",       alt: "A facilitator presenting the curriculum on screen to the cohort", desc: "Walking the cohort through the day's lesson." },
  { width: "half",  aspect: "landscape", tone: "cool",   tag: "budgeting module",         src: "/photos/gallery/budgeting-slide.jpg",      alt: "The budgeting module on screen — needs, wants and savings",        desc: "The budgeting module — needs, wants, savings." },
  { width: "third", aspect: "portrait",  tone: "warm",   tag: "a participant speaks",     src: "/photos/gallery/participant-mic.jpg",      alt: "A participant smiling as she speaks into the microphone" },
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "the cohort",               src: "/photos/gallery/cohort-group.jpg",         alt: "The full cohort gathered together at a workshop",                  desc: "The cohort together at the end of a session." },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "taking notes",             src: "/photos/gallery/cohort-notes.jpg",         alt: "A row of participants taking notes during the session",            desc: "The cohort, taking notes." },
  { width: "half",  aspect: "landscape", tone: "cool",   tag: "passing the mic",          src: "/photos/gallery/mic-handoff.jpg",          alt: "A facilitator passing the microphone to a participant as others applaud", desc: "Passing the microphone to a participant." },
  { width: "third", aspect: "square",    tone: "ledger", tag: "a participant stands",     src: "/photos/gallery/participant-standing.jpg", alt: "A participant standing to speak during the session" },
  { width: "third", aspect: "portrait",  tone: "warm",   tag: "a portrait",               src: "/photos/gallery/portrait-sari.jpg",        alt: "Portrait of a participant in a bright sari" },
  { width: "third", aspect: "square",    tone: "ledger", tag: "note-taking",              src: "/photos/gallery/note-taking.jpg",          alt: "Participants writing notes under the programme banner" },
  { width: "wide",  aspect: "landscape", tone: "green",  tag: "heads down",               src: "/photos/gallery/women-writing.jpg",        alt: "Participants writing in their worksheets during a session" },
  { width: "half",  aspect: "landscape", tone: "warm",   tag: "income changes",           src: "/photos/gallery/income-chart.jpg",         alt: "A facilitator explaining a chart on managing changing monthly income", desc: "How to budget when income changes month to month." },
  { width: "half",  aspect: "landscape", tone: "brick",  tag: "scam-shield",              src: "/photos/gallery/scam-shield.jpg",          alt: "The scam-shield module on screen, on spotting fraud",              desc: "The scam-shield module — spotting fraud." },
  { width: "third", aspect: "landscape", tone: "cool",   tag: "three participants",       src: "/photos/gallery/three-participants.jpg",   alt: "Three participants seated together at the workshop" },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "listening",                src: "/photos/gallery/cohort-listening.jpg",     alt: "Participants listening during the session beneath the banner",     desc: "Listening during the session." },
  { width: "third", aspect: "square",    tone: "warm",   tag: "joining in",               src: "/photos/gallery/discussion.jpg",           alt: "A participant joining the discussion" },
  { width: "half",  aspect: "landscape", tone: "ledger", tag: "a story",                  src: "/photos/gallery/story-slide.jpg",          alt: "A facilitator telling a story from the curriculum",                desc: "A story from the curriculum." },
  { width: "wide",  aspect: "cinema",    tone: "warm",   tag: "the room",                 src: "/photos/gallery/cohort-wide.jpg",          alt: "A wide view of the cohort in colourful saris during a workshop" },
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "the full cohort",          src: "/photos/gallery/cohort-banner.jpg",        alt: "The full cohort together under the programme banner",              desc: "The full cohort, under the programme banner." },
];

export function PhotoDump() {
  return (
    <section>
      <div className="container">
        <div className="photo-dump">
          {GALLERY_PHOTOS.map((p, i) => (
            <figure key={i} className={`photo-dump__item photo-dump__item--${p.width}`}>
              <Photo aspect={p.aspect} tone={p.tone} src={p.src} alt={p.alt} tag={p.tag} stamp={false} />
              {(p.desc || p.meta) && (
                <figcaption>
                  {p.desc && <span className="desc">{p.desc}</span>}
                  {p.meta}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
