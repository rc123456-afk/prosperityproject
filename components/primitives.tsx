/* Shared editorial primitives, ported from the Claude Design Primitives.jsx.
   Presentational only (no client state) so they work in server components. */

import type { CSSProperties, ReactNode } from "react";
import { SmartLink } from "./SmartLink";

type Aspect = "portrait" | "landscape" | "square" | "cinema" | "hero" | "tall";
type Tone = "warm" | "cool" | "green" | "ledger" | "brick" | "dusk" | "cream";

/* Photo — placeholder documentary photo with bracket tag + scope stamp.
   Renders a tinted gradient panel until real imagery lands. */
export function Photo({
  aspect = "landscape",
  tone = "warm",
  tag,
  stamp = "PHOTO",
  style,
  children,
}: {
  aspect?: Aspect;
  tone?: Tone;
  tag?: ReactNode;
  stamp?: ReactNode | false;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div className={`photo photo--${tone}`} data-aspect={aspect} style={style}>
      {stamp && <span className="photo-stamp">[ {stamp} ]</span>}
      {tag && <span className="photo-tag">[ {tag} ]</span>}
      {children}
    </div>
  );
}

/* Caption — serif description + mono metadata under a photo. */
export function Caption({
  description,
  meta,
  style,
}: {
  description?: ReactNode;
  meta?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div style={{ marginTop: 14, ...style }}>
      {description && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            lineHeight: 1.45,
            color: "var(--ink-70)",
            maxWidth: "38rem",
          }}
        >
          {description}
        </div>
      )}
      {meta && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--ink-55)",
            marginTop: 6,
          }}
        >
          {meta}
        </div>
      )}
    </div>
  );
}

/* Figure — Photo + Caption together. */
export function Figure({
  aspect,
  tone,
  tag,
  stamp,
  description,
  meta,
  style,
}: {
  aspect?: Aspect;
  tone?: Tone;
  tag?: ReactNode;
  stamp?: ReactNode | false;
  description?: ReactNode;
  meta?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <figure style={{ margin: 0, ...style }}>
      <Photo aspect={aspect} tone={tone} tag={tag} stamp={stamp} />
      <Caption description={description} meta={meta} />
    </figure>
  );
}

/* SectionMarker — wide editorial section label: § 02 · TWO CONTEXTS */
export function SectionMarker({
  index,
  label,
  inverse,
}: {
  index: ReactNode;
  label: ReactNode;
  inverse?: boolean;
}) {
  return (
    <p
      className={`section-head__marker ${inverse ? "marker--inverse" : ""}`}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        color: inverse ? "var(--marigold)" : "var(--marigold-deep)",
        margin: 0,
      }}
    >
      § {index} &nbsp;·&nbsp; {label}
    </p>
  );
}

/* TertiaryLink — mono caps marigold underline. */
export function TertiaryLink({
  children,
  href = "#",
  arrow = "→",
}: {
  children: ReactNode;
  href?: string;
  arrow?: ReactNode;
}) {
  return (
    <SmartLink href={href} className="tertiary">
      {children} <span style={{ marginLeft: 4 }}>{arrow}</span>
    </SmartLink>
  );
}

/* StatusDot — solid for active / hollow for in-development. */
export function StatusDot({ kind }: { kind: "active" | "dev" }) {
  return (
    <span className={`cohort__status cohort__status--${kind === "active" ? "active" : "dev"}`}>
      <span className={`dot ${kind === "active" ? "" : "dot--dev"}`} />
      {kind === "active" ? "In active use" : "In development"}
    </span>
  );
}

/* PlaceholderStamp — small marigold-bordered mono tag, "[ PLACEHOLDER ]". */
export function PlaceholderStamp({ children = "PLACEHOLDER" }: { children?: ReactNode }) {
  return <span className="ph-stamp">[ {children} ]</span>;
}
