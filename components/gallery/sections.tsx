/* Gallery — single-page photo dump. ~17 documentary photographs in mixed
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
// shown; add real locations/dates in `meta` when known. Portraits sit in
// small slots so they don't dominate the page.
const GALLERY_PHOTOS: GalleryPhoto[] = [
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "workshop in session",  src: "/photos/gallery/g-workshop-room.jpg",       alt: "Women seated around long tables at a Knowing Your Money workshop", desc: "A Knowing Your Money workshop in session." },
  { width: "half",  aspect: "landscape", tone: "ledger", tag: "the worksheet",        src: "/photos/gallery/g-the-worksheet.jpg",       alt: "Participants writing in their budget worksheets",                  desc: "Working through the budget worksheet." },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "budgeting module",     src: "/photos/gallery/g-module-budgeting.jpg",    alt: "The budgeting module on screen — needs, wants and savings",        desc: "The budgeting module — needs, wants, savings." },
  { width: "small", aspect: "portrait",  tone: "warm",   tag: "a participant",        src: "/photos/gallery/g-portrait-smiling.jpg",    alt: "A participant smiling as she speaks into the microphone" },
  { width: "third", aspect: "landscape", tone: "cool",   tag: "three participants",   src: "/photos/gallery/g-three-women.jpg",         alt: "Three participants seated together at the workshop" },
  { width: "half",  aspect: "landscape", tone: "warm",   tag: "passing the mic",      src: "/photos/gallery/g-passing-the-mic.jpg",     alt: "A facilitator passing the microphone to a participant as others applaud", desc: "Passing the microphone to a participant." },
  { width: "wide",  aspect: "cinema",    tone: "warm",   tag: "the cohort",           src: "/photos/gallery/g-the-cohort.jpg",          alt: "The full cohort gathered together at a workshop",                  desc: "The cohort together." },
  { width: "third", aspect: "landscape", tone: "green",  tag: "a participant speaks", src: "/photos/gallery/g-a-participant-speaks.jpg", alt: "A participant standing to speak during the session" },
  { width: "third", aspect: "square",    tone: "ledger", tag: "note-taking",          src: "/photos/gallery/g-notes-detail.jpg",        alt: "Participants writing notes under the programme banner" },
  { width: "half",  aspect: "landscape", tone: "brick",  tag: "scam-shield",          src: "/photos/gallery/g-module-scamshield.jpg",   alt: "The scam-shield module on screen, on spotting fraud",              desc: "Spotting fraud — the scam-shield module." },
  { width: "small", aspect: "portrait",  tone: "warm",   tag: "a participant",        src: "/photos/gallery/g-portrait-orange.jpg",     alt: "Portrait of a participant in a bright orange and red sari" },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "taking notes",         src: "/photos/gallery/g-taking-notes.jpg",        alt: "A row of participants taking notes during the session",            desc: "Taking notes." },
  { width: "wide",  aspect: "landscape", tone: "cool",   tag: "heads down",           src: "/photos/gallery/g-heads-down.jpg",          alt: "Participants writing in their worksheets during a session" },
  { width: "third", aspect: "square",    tone: "warm",   tag: "joining in",           src: "/photos/gallery/g-joining-in.jpg",          alt: "A participant joining the discussion",                             desc: "Joining the discussion." },
  { width: "half",  aspect: "landscape", tone: "dusk",   tag: "how money grows",      src: "/photos/gallery/g-module-grows.jpg",        alt: "A facilitator presenting the how-money-grows module on screen",     desc: "How money grows." },
  { width: "wide",  aspect: "cinema",    tone: "warm",   tag: "the room",             src: "/photos/gallery/g-cohort-saris.jpg",        alt: "A wide view of the cohort in colourful saris during a workshop" },
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "the full cohort",      src: "/photos/gallery/g-cohort-banner.jpg",       alt: "The full cohort together under the programme banner",              desc: "The full cohort, under the programme banner." },
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
