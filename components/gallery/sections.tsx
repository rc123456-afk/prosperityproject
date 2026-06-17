/* Gallery — single-page photo dump. ~25 placeholder photographs in mixed
   aspect ratios and widths, loose chronological flow, captions on roughly
   half. Ported verbatim from GalleryPage.jsx. Server component. */

import { Photo } from "@/components/primitives";

export function GalleryHero() {
  return (
    <section className="gallery-hero">
      <div className="container">
        <p className="gallery-hero__kicker">Gallery</p>
        <h1 className="gallery-hero__head">From the rooms where the work happens.</h1>
        <p className="gallery-hero__sub">
          Workshops, graduations, hands, materials, the walk to the bank — across
          the Sundarbans, Howrah, and South 24 Parganas, and the first UAE pilot.
          Loosely in order. Photographers credited where known.
        </p>
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
  desc?: string;
  meta?: string;
};

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { width: "wide",  aspect: "cinema",    tone: "warm",   tag: "the first 2023 cohort · Howrah", desc: "The first cohort, before the first session.", meta: "Howrah · 2023" },
  { width: "third", aspect: "portrait",  tone: "ledger", tag: "registration · day one" },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "Module 02 · budgeting worksheet", desc: "Working a household budget against the lowest-earning month.", meta: "Salkia · 2023" },
  { width: "half",  aspect: "landscape", tone: "cool",   tag: "the room listens" },
  { width: "third", aspect: "square",    tone: "ledger", tag: "hands · counting change", desc: "Counting the week's savings.", meta: "Howrah · 2023" },
  { width: "third", aspect: "portrait",  tone: "warm",   tag: "a student reads aloud" },
  { width: "third", aspect: "square",    tone: "brick",  tag: "the textbook · first edition" },
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "Module 04 · the walk to the branch", desc: "The cohort walks together to open accounts — for many, the first in their own name.", meta: "South 24 Parganas · 2024 · [ PHOTOGRAPHER ]" },
  { width: "half",  aspect: "landscape", tone: "green",  tag: "queue tickets in hand" },
  { width: "half",  aspect: "portrait",  tone: "cool",   tag: "first passbook", desc: "A new account holder with her first passbook.", meta: "Howrah · 2024" },
  { width: "third", aspect: "square",    tone: "ledger", tag: "detail · the ledger page" },
  { width: "third", aspect: "landscape", tone: "warm",   tag: "tea before the session" },
  { width: "third", aspect: "portrait",  tone: "dusk",   tag: "pictured by request · hands only" },
  { width: "wide",  aspect: "landscape", tone: "green",  tag: "facilitator training · week three", desc: "Week three of the four-week facilitator training in Kolkata.", meta: "Kolkata · 2024" },
  { width: "third", aspect: "portrait",  tone: "warm",   tag: "a new CRP practises" },
  { width: "half",  aspect: "square",    tone: "ledger", tag: "margin notes" },
  { width: "half",  aspect: "landscape", tone: "cool",   tag: "boat crossing · Sundarbans", desc: "The boat crossing to the next village in the delta.", meta: "Gosaba · 2024" },
  { width: "third", aspect: "portrait",  tone: "green",  tag: "co-facilitation week" },
  { width: "third", aspect: "square",    tone: "warm",   tag: "the tin where she keeps it" },
  { width: "third", aspect: "landscape", tone: "brick",  tag: "graduation day · the meal", desc: "Graduation ends with a shared meal.", meta: "Howrah · 2024" },
  { width: "full",  aspect: "cinema",    tone: "warm",   tag: "the 2025 cohort · taught by CRPs", desc: "The 2025 cohort — the first taught largely by facilitators who were students in 2023 and 2024.", meta: "Howrah · 2025 · [ PHOTOGRAPHER ]" },
  { width: "half",  aspect: "landscape", tone: "dusk",   tag: "Karama pilot · session one", desc: "The first UAE pilot session, in a Karama cafeteria after hours.", meta: "Dubai · 2025 pilot" },
  { width: "half",  aspect: "portrait",  tone: "cool",   tag: "pocket textbook · mock-up" },
  { width: "third", aspect: "square",    tone: "brick",  tag: "detail · pay slip, line by line" },
  { width: "wide",  aspect: "landscape", tone: "dusk",   tag: "exchange-house visit · Module 04", desc: "A guided walk to the nearest exchange house with the pilot cohort.", meta: "Dubai · 2025 pilot · [ PHOTOGRAPHER ]" },
];

export function PhotoDump() {
  return (
    <section>
      <div className="container">
        <div className="photo-dump">
          {GALLERY_PHOTOS.map((p, i) => (
            <figure key={i} className={`photo-dump__item photo-dump__item--${p.width}`}>
              <Photo aspect={p.aspect} tone={p.tone} tag={p.tag} stamp={false} />
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
