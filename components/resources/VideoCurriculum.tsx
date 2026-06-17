"use client";

/* VideoCurriculum — ten module rows. Each (women's cohort) has three language
   tabs (हिं · বাং · EN); clicking a tab expands the row inline and loads an
   embedded YouTube player in that language. Clicking the open tab closes it.
   Blue-collar rows are non-interactive ("coming soon"). Ported from
   ResourcesVideos.jsx. */

import { useMemo, useState } from "react";
import { SectionMarker } from "@/components/primitives";
import { WOMEN_MODULES, type Module } from "@/lib/modules";

type Cohort = "women" | "blue-collar";

const VIDEO_LANGS = [
  { id: "hi", script: "हिं", label: "Hindi" },
  { id: "bn", script: "বাং", label: "Bengali" },
  { id: "en", script: "EN", label: "English" },
] as const;
type LangId = (typeof VIDEO_LANGS)[number]["id"];

/* Placeholder YouTube ID used for every language of every module.
   Big Buck Bunny (Creative Commons, family-safe) as a neutral placeholder.
   Replace with real IDs once the recordings ship. */
const PLACEHOLDER_YT = "aqz-KE-bpKQ";

function buildVideoMap(modules: Module[]) {
  const out: Record<string, Record<LangId, string>> = {};
  for (const m of modules) {
    out[m.num] = { hi: PLACEHOLDER_YT, bn: PLACEHOLDER_YT, en: PLACEHOLDER_YT };
  }
  return out;
}

/* BCW preview overrides: a few women's-cohort teasers read awkwardly out of
   context. Override only those so the row shape stays identical. */
const BCW_TEASER_OVERRIDES: Record<string, string> = {
  "03": "Fear is the most expensive thing in a worker's life.",
  "08": "From cash under the mattress to a mutual fund SIP — making money work harder.",
};

function applyBcwOverrides(modules: Module[]): Module[] {
  return modules.map((m) =>
    BCW_TEASER_OVERRIDES[m.num]
      ? { ...m, teaser: BCW_TEASER_OVERRIDES[m.num] }
      : m,
  );
}

function langMeta(id: LangId) {
  return VIDEO_LANGS.find((l) => l.id === id)!;
}

/* ---------- ONE MODULE ROW (Women — interactive) ---------- */
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
              <span className="vid-row__caption-stamp">[ PLACEHOLDER VIDEO ]</span>{" "}
              Real recordings replace this player once Module {module.num} is
              filmed in {langMeta(openLang).label}.
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

/* ---------- ONE MODULE ROW (BCW — coming soon, non-interactive) ---------- */
function VideoRowSoon({ module }: { module: Module }) {
  return (
    <li className="vid-row vid-row--soon">
      <div className="vid-row__head">
        <span className="vid-row__num">{module.num}</span>
        <span className="vid-row__title-wrap">
          <span className="vid-row__title">{module.title}</span>
          <span className="vid-row__teaser">{module.teaser}</span>
        </span>
        <span className="vid-row__tabs" aria-disabled="true">
          {VIDEO_LANGS.map((l) => (
            <span
              key={l.id}
              data-script={l.id === "en" ? "latin" : "deva"}
              className="vid-tab vid-tab--soon"
              title={`${l.label} edition — coming soon`}
            >
              {l.script}
            </span>
          ))}
          <span className="vid-row__soon-label">Coming soon</span>
        </span>
      </div>
    </li>
  );
}

/* ---------- THE VIDEO CURRICULUM SECTION ---------- */
export function VideoCurriculum({ cohort }: { cohort: Cohort }) {
  const isWomen = cohort === "women";
  const modules = useMemo(
    () => (isWomen ? WOMEN_MODULES : applyBcwOverrides(WOMEN_MODULES)),
    [isWomen],
  );
  const videos = useMemo(() => buildVideoMap(modules), [modules]);
  // { "01": "hi" | "bn" | "en" }
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
            <SectionMarker index="02" label="Video curriculum" />
            <p className="curr-modules__hint">
              {isWomen
                ? "One short video per module, in Hindi · Bengali · English. Click a script to play."
                : "Ten modules, in three languages. Recordings begin after the first UAE pilot completes."}
            </p>
          </div>

          <div>
            <p
              className="curr-premise__body"
              style={{ marginBottom: 56, maxWidth: "42rem" }}
            >
              {isWomen ? (
                <>
                  Every module of <em>Knowing Your Money</em> has a short
                  companion video — between four and seven minutes — recorded for
                  households where a daughter, son, or husband can sit beside the
                  student and watch together at home. Three language editions per
                  module.
                </>
              ) : (
                <>
                  Every module of the UAE adaptation will have a short companion
                  video — sized to send over WhatsApp from a labour camp, paced
                  for a worker's evening. Three language editions per module,
                  recorded after the first pilot cohort completes.
                  <span className="ph-stamp" style={{ marginLeft: 14 }}>
                    [ PLACEHOLDER ]
                  </span>
                </>
              )}
            </p>

            <ul className="vid-list">
              {modules.map((m) =>
                isWomen ? (
                  <VideoRow
                    key={m.num}
                    module={m}
                    videos={videos[m.num]}
                    openLang={openMap[m.num] ?? null}
                    onOpen={(lang) => open(m.num, lang)}
                    onClose={() => close(m.num)}
                  />
                ) : (
                  <VideoRowSoon key={m.num} module={m} />
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
