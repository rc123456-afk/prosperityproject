/* Gallery — single-page photo dump, grouped by shoot. Mixed aspect ratios and
   widths, captions on roughly half. Add a group by adding a block to
   GALLERY_GROUPS. Server component. */

import { Photo } from "@/components/primitives";
import { renderInline } from "@/components/Rich";
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

type GalleryGroup = {
  id: string;
  label: string;
  note: string;
  photos: GalleryPhoto[];
};

// Grouped by shoot. Captions are honest to what's shown; add real dates in
// `meta` when known. Portraits sit in small slots so they don't dominate the
// page. Kolhapur frames are all 3:2 — never give one the `tall` (3/5) aspect.
const BARUIPUR_PHOTOS: GalleryPhoto[] = [
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

const KOLHAPUR_PHOTOS: GalleryPhoto[] = [
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "the room",             src: "/photos/kolhapur/k-room-wide.jpg",          alt: "The founder addressing rows of participants seated at desks",      desc: "The room, mid-module." },
  { width: "half",  aspect: "landscape", tone: "warm",   tag: "the opening",          src: "/photos/kolhapur/k-title-slide.jpg",        alt: "A participant standing beside the projected title slide at the start of a session", desc: "The workshop opens — the title slide, in Marathi." },
  { width: "half",  aspect: "landscape", tone: "cool",   tag: "module one",           src: "/photos/kolhapur/k-slide-marathi.jpg",      alt: "Module one, Your Money Your Name, projected in Marathi",           desc: "Module one — *Your Money, Your Name* — in Marathi." },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "module five",          src: "/photos/kolhapur/k-slide-money.jpg",        alt: "A slide comparing long-term savings schemes, in Marathi",          desc: "Where money can safely sit, and what it becomes." },
  { width: "small", aspect: "portrait",  tone: "brick",  tag: "a participant",        src: "/photos/kolhapur/k-portrait-maroon.jpg",    alt: "A participant standing to speak during the session" },
  { width: "third", aspect: "landscape", tone: "warm",   tag: "hands up",             src: "/photos/kolhapur/k-hands-up.jpg",           alt: "Participants raising their hands to answer during a session",      desc: "Hands up." },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "one to one",           src: "/photos/kolhapur/k-crouching.jpg",          alt: "The founder crouching to talk with seated participants",           desc: "Working through a question one to one." },
  { width: "half",  aspect: "landscape", tone: "cool",   tag: "a question answered",  src: "/photos/kolhapur/k-one-to-one.jpg",         alt: "The founder answering a participant's question beside her desk" },
  { width: "wide",  aspect: "cinema",    tone: "ledger", tag: "at the desks",         src: "/photos/kolhapur/k-cohort-desks.jpg",       alt: "Participants writing at their desks during a session" },
  { width: "third", aspect: "landscape", tone: "dusk",   tag: "a question",           src: "/photos/kolhapur/k-participant-mic.jpg",    alt: "A participant standing to ask a question" },
  { width: "third", aspect: "square",    tone: "ledger", tag: "note-taking",          src: "/photos/kolhapur/k-writing.jpg",            alt: "Participants writing notes in their notebooks",                    desc: "Notes." },
  { width: "half",  aspect: "landscape", tone: "warm",   tag: "the facilitator",      src: "/photos/kolhapur/k-at-the-desk.jpg",        alt: "A facilitator leaning in to help a participant at her desk" },
  { width: "small", aspect: "portrait",  tone: "cool",   tag: "a participant",        src: "/photos/kolhapur/k-portrait-desk.jpg",      alt: "A participant at her desk, listening" },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "outside the unit",     src: "/photos/kolhapur/k-group-tob-unit.jpg",     alt: "A group with their certificates outside the unit where they work", desc: "Outside the unit where many of them work." },
  { width: "wide",  aspect: "landscape", tone: "cool",   tag: "the stitching floor",  src: "/photos/kolhapur/k-stitching-floor.jpg",     alt: "A wide view of the mill's stitching line",                         desc: "The stitching floor — where most of the room works." },
  { width: "wide",  aspect: "landscape", tone: "dusk",   tag: "between the desks",    src: "/photos/kolhapur/k-walking-desks.jpg",      alt: "The founder walking between the desks during an exercise" },
  { width: "third", aspect: "landscape", tone: "warm",   tag: "the handover",         src: "/photos/kolhapur/k-certificate.jpg",        alt: "A participant receiving her certificate of participation",         desc: "A certificate of participation, handed over in the room." },
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "certificates",         src: "/photos/kolhapur/k-certificates-wide.jpg",  alt: "A large group of participants holding their certificates",         desc: "The end of a sitting, certificates in hand." },
];

const GALLERY_GROUPS: GalleryGroup[] = [
  {
    id: "baruipur",
    label: "Baruipur, West Bengal",
    note: "With Bandhan-Konnagar. In Bengali and Hindi.",
    photos: BARUIPUR_PHOTOS,
  },
  {
    id: "kolhapur",
    label: "Kolhapur, Maharashtra",
    note: "With Indo Count Industries. In Marathi.",
    photos: KOLHAPUR_PHOTOS,
  },
];

export function PhotoDump() {
  return (
    <section>
      <div className="container">
        {GALLERY_GROUPS.map((g) => (
          <div className="photo-dump__group" key={g.id} id={g.id}>
            <div className="photo-dump__group-head">
              <h2 className="photo-dump__group-label">{g.label}</h2>
              <p className="photo-dump__group-note">{g.note}</p>
            </div>
            <div className="photo-dump">
              {g.photos.map((p, i) => (
                <figure key={i} className={`photo-dump__item photo-dump__item--${p.width}`}>
                  <Photo aspect={p.aspect} tone={p.tone} src={p.src} alt={p.alt} tag={p.tag} stamp={false} />
                  {(p.desc || p.meta) && (
                    <figcaption>
                      {p.desc && <span className="desc">{renderInline(p.desc)}</span>}
                      {p.meta}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        ))}
        <p className="photo-dump__consent">{copy.stories.consentNote}</p>
      </div>
    </section>
  );
}
