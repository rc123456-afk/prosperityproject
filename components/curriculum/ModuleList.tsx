"use client";

/* ModuleList — the interactive ten-module list (women's cohort).
   Vertical editorial rows; click a row to expand its longer description
   inline (max-height + opacity transition). Ported from CurriculumModules.jsx. */

import { useEffect, useRef, useState } from "react";
import { SectionMarker } from "@/components/primitives";
import { WOMEN_MODULES, type Module } from "@/lib/modules";

function ModuleRow({
  module,
  isOpen,
  onToggle,
}: {
  module: Module;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!bodyRef.current) return;
    setMaxH(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <li className={"mod-row " + (isOpen ? "is-open" : "")}>
      <button
        type="button"
        className="mod-row__head"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="mod-row__num">{module.num}</span>
        <span className="mod-row__title-wrap">
          <span className="mod-row__title">{module.title}</span>
          <span className="mod-row__teaser">{module.teaser}</span>
        </span>
        <span className="mod-row__chev" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className="mod-row__body-clip"
        style={{ maxHeight: maxH, opacity: isOpen ? 1 : 0 }}
        aria-hidden={!isOpen}
      >
        <div className="mod-row__body" ref={bodyRef}>
          <p>{module.body}</p>
        </div>
      </div>
    </li>
  );
}

export function ModuleList() {
  const [openIdx, setOpenIdx] = useState(0); // first module open by default
  return (
    <section className="section curr-modules">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label="The ten modules" />
            <p className="curr-modules__hint">
              Click a row to open the longer description.
            </p>
          </div>
          <div>
            <ul className="mod-list">
              {WOMEN_MODULES.map((m, i) => (
                <ModuleRow
                  key={m.num}
                  module={m}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </ul>
            <p className="curr-modules__close">
              Ten modules. A cohort of fifty or more. One textbook in every
              student&rsquo;s hand, and follow-up that continues after.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
