"use client";

/* VideoCurriculum — ten module rows. Each has three language tabs
   (हिं · বাং · EN); clicking a tab expands the row inline and loads an
   embedded YouTube player in that language. Clicking the open tab closes it.
   Ported from ResourcesVideos.jsx. */

import { useState } from "react";
import { SectionMarker } from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { WOMEN_MODULES, type Module } from "@/lib/modules";
import { copy } from "@/content/copy";

const VIDEO_LANGS = [
  { id: "hi", script: "हिं", label: "Hindi" },
  { id: "bn", script: "বাং", label: "Bengali" },
  { id: "en", script: "EN", label: "English" },
] as const;
type LangId = (typeof VIDEO_LANGS)[number]["id"];

/* ─── REAL VIDEOS GO HERE ──────────────────────────────────────────────────
   One YouTube video per module, per language. The value is a YouTube *video
   ID* — the part of the URL after "watch?v=". For
       https://www.youtube.com/watch?v=dQw4w9WgXcQ
   the ID is  "dQw4w9WgXcQ"  (also the last path segment of a youtu.be link).

   To set Module 02's Hindi video, replace its `hi` value with the real ID.
   Any slot still left as PLACEHOLDER_YT plays the neutral placeholder, so you
   can fill these in gradually, in any order — every row stays usable.

   `hi` = Hindi (हिं) · `bn` = Bengali (বাং) · `en` = English (EN)            */
const PLACEHOLDER_YT = "aqz-KE-bpKQ"; // Big Buck Bunny — neutral stand-in

const MODULE_VIDEO_IDS: Record<string, Record<LangId, string>> = {
  "01": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "02": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "03": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "04": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "05": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "06": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "07": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "08": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "09": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
  "10": { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT },
};

function videoIdsFor(num: string): Record<LangId, string> {
  return (
    MODULE_VIDEO_IDS[num] ?? {
      hi: PLACEHOLDER_YT,
      bn: PLACEHOLDER_YT,
      en: PLACEHOLDER_YT,
    }
  );
}

function langMeta(id: LangId) {
  return VIDEO_LANGS.find((l) => l.id === id)!;
}

/* ---------- ONE MODULE ROW (interactive) ---------- */
function VideoRow({
  module,
  videos,
  openLang,
  onOpen,
  onClose,
}: {
  module: Module;
  videos: Record<LangId, string>;
  openLang: LangId | null;
  onOpen: (lang: LangId) => void;
  onClose: () => void;
}) {
  const expanded = !!openLang;
  return (
    <li className={"vid-row " + (expanded ? "is-open" : "")}>
      <div className="vid-row__head">
        <span className="vid-row__num">{module.num}</span>
        <span className="vid-row__title-wrap">
          <span className="vid-row__title">{module.title}</span>
          <span className="vid-row__teaser">{module.teaser}</span>
        </span>
        <span
          className="vid-row__tabs"
          role="tablist"
          aria-label={`Language for module ${module.num}`}
        >
          {VIDEO_LANGS.map((l) => (
            <button
              key={l.id}
              type="button"
              role="tab"
              data-script={l.id === "en" ? "latin" : "deva"}
              aria-selected={openLang === l.id}
              className={"vid-tab " + (openLang === l.id ? "is-active" : "")}
              onClick={() => (openLang === l.id ? onClose() : onOpen(l.id))}
              title={`Play in ${l.label}`}
            >
              {l.script}
            </button>
          ))}
        </span>
      </div>

      <div className="vid-row__player-clip" aria-hidden={!expanded}>
        {expanded && openLang && (
          <div className="vid-row__player">
            <div className="vid-row__player-meta">
              <span className="vid-row__player-lang">
                {langMeta(openLang).label}
                <span
                  className="vid-row__player-script"
                  data-script={openLang === "en" ? "latin" : "deva"}
                >
                  {langMeta(openLang).script}
                </span>
              </span>
              <button
                type="button"
                className="vid-row__close"
                onClick={onClose}
                aria-label="Close video"
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="vid-row__frame">
              <iframe
                key={`${module.num}-${openLang}`}
                src={`https://www.youtube-nocookie.com/embed/${videos[openLang]}?rel=0&autoplay=1&modestbranding=1`}
                title={`Module ${module.num} — ${module.title} (${langMeta(openLang).label})`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="vid-row__caption">
              <span className="vid-row__caption-stamp">[ VIDEO COMING ]</span>{" "}
              The recording for Module {module.num} in {langMeta(openLang).label}{" "}
              will play here once its video link is added.
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

/* ---------- THE VIDEO CURRICULUM SECTION ---------- */
export function VideoCurriculum() {
  const modules = WOMEN_MODULES;
  // { "01": "hi" | "bn" | "en" } — which language each module row is open to.
  const [openMap, setOpenMap] = useState<Record<string, LangId>>({});

  const open = (num: string, lang: LangId) => {
    // Close any other open row, open this one to the chosen language.
    setOpenMap({ [num]: lang });
  };
  const close = (num: string) => {
    setOpenMap((m) => {
      const next = { ...m };
      delete next[num];
      return next;
    });
  };

  return (
    <section className="section res-videos">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label={copy.resources.videos.sectionLabel} />
            <p className="curr-modules__hint">
              {copy.resources.videos.sectionHint}
            </p>
          </div>

          <div>
            <p
              className="curr-premise__body"
              style={{ marginBottom: 56, maxWidth: "42rem" }}
            >
              {renderInline(copy.resources.videos.intro)}
            </p>

            <ul className="vid-list">
              {modules.map((m) => (
                <VideoRow
                  key={m.num}
                  module={m}
                  videos={videoIdsFor(m.num)}
                  openLang={openMap[m.num] ?? null}
                  onOpen={(lang) => open(m.num, lang)}
                  onClose={() => close(m.num)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
