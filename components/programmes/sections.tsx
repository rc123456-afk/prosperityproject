/* Programmes — where the curriculum has actually run.

   Every programme renders through the SAME component, so the two with
   photographs and the two without get identical structural treatment. The only
   difference is that an entry with no photos simply ends after its words —
   never an empty grey panel, which is what made them read as unfinished.

   All content lives in copy.programmes.items. Server components. */

import Link from "next/link";
import { Photo, Figure, SectionMarker } from "@/components/primitives";
import { RichText, renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.programmes;

type Programme = (typeof c.items)[number];

/* Mode · language · when · scale — in that fixed order, with the empty ones
   dropped. The reader learns the shape of this line once and then reads it the
   same way on every programme. */
function metaLine(p: Programme) {
  return [p.mode, p.language, p.when, p.scale].filter(Boolean).join("  ·  ");
}

const KIND_LABEL: Record<Programme["kind"], string> = {
  corporate: "Company",
  ngo: "Nonprofit",
};

export function ProgrammesHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">Programmes</p>
        <h1 className="curr-hero__headline">{c.heading}</h1>
        <p className="curr-hero__standfirst">{renderInline(c.intro)}</p>
      </div>
    </section>
  );
}

function ProgrammeSection({ prog, index }: { prog: Programme; index: string }) {
  return (
    <article className="prog" id={prog.id}>
      <div className="prog__grid">
        <div className="prog__aside">
          <SectionMarker index={index} label={prog.region} />
          <p className="prog__kind">
            {prog.partner}
            <span className="prog__kind-tag">{KIND_LABEL[prog.kind]}</span>
          </p>
        </div>

        <div className="prog__main">
          <h2 className="prog__place">{prog.city}</h2>
          <p className="prog__meta">{metaLine(prog)}</p>

          <div className="prog__body">
            <RichText items={prog.body} />
          </div>

          {prog.photos.length > 0 && (
            <div className="prog__photos">
              {prog.photos.map((photo) => (
                <Photo key={photo.src} {...photo} />
              ))}
            </div>
          )}

          {prog.closer && (
            <Figure
              aspect="cinema"
              tone="warm"
              src={prog.closer.src}
              alt={prog.closer.alt}
              description={prog.closer.description}
              style={{ marginTop: 24 }}
            />
          )}
        </div>
      </div>
    </article>
  );
}

export function ProgrammeList() {
  return (
    <section className="section prog-list">
      <div className="container">
        {c.items.map((prog, i) => (
          <ProgrammeSection
            key={prog.id}
            prog={prog}
            index={String(i + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}

export function ProgrammesClosing() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="—" label="What holds across them" />
          </div>
          <div>
            <p className="prog-closing">
              {renderInline(
                "A textile mill, a self-help group hall, an infrastructure developer and a grassroots nonprofit want different things from a workshop. The **ten modules have held up in all four** — which is the strongest argument that this travels."
              )}
            </p>
            <p className="prog-closing__note">{c.figuresNote}</p>
            <div className="prog-closing__links">
              <Link className="tertiary" href="/workshops">
                How a workshop runs <span aria-hidden="true">→</span>
              </Link>
              <Link className="tertiary" href="/contact">
                Run one with us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
