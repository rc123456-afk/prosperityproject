/* Shared editorial primitives, ported from the Claude Design Primitives.jsx.
   Presentational only (no client state) so they work in server components. */

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { SmartLink } from "./SmartLink";

type Aspect = "portrait" | "landscape" | "square" | "cinema" | "hero" | "tall";
type Tone = "warm" | "cool" | "green" | "ledger" | "brick" | "dusk" | "cream";

/* Photo — documentary photo panel.

   • Pass `src` (a path under /public, e.g. "/photos/cohort-2023.jpg") to show a
     real photograph. It fills the panel, cropped to the chosen `aspect`, with
     the tinted gradient showing only while it loads. Always pass `alt`.
   • Omit `src` to keep the placeholder: a tinted gradient with the bracket
     `tag` + scope `stamp` burned on, so the layout is reviewable before the
     real imagery lands.

   `objectPosition` nudges the crop (e.g. "center top") when a face or detail
   sits off-centre. `priority` should be true only for an above-the-fold hero. */
export function Photo({
  aspect = "landscape",
  tone = "warm",
  tag,
  stamp = "PHOTO",
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 1100px",
  priority,
  objectPosition,
  style,
  children,
}: {
  aspect?: Aspect;
  tone?: Tone;
  tag?: ReactNode;
  stamp?: ReactNode | false;
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const hasImage = Boolean(src);
  return (
    <div
      className={`photo photo--${tone}${hasImage ? " photo--img" : ""}`}
      data-aspect={aspect}
      style={style}
    >
      {hasImage ? (
        <Image
          src={src as string}
          alt={alt ?? (typeof tag === "string" ? tag : "")}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", objectPosition }}
        />
      ) : (
        <>
          {stamp && <span className="photo-stamp">[ {stamp} ]</span>}
          {tag && <span className="photo-tag">[ {tag} ]</span>}
        </>
      )}
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

/* Figure — Photo + Caption together. Pass `src` (+ `alt`) to show a real
   photograph; omit it to keep the labeled placeholder. */
export function Figure({
  aspect,
  tone,
  tag,
  stamp,
  src,
  alt,
  objectPosition,
  priority,
  description,
  meta,
  style,
}: {
  aspect?: Aspect;
  tone?: Tone;
  tag?: ReactNode;
  stamp?: ReactNode | false;
  src?: string;
  alt?: string;
  objectPosition?: string;
  priority?: boolean;
  description?: ReactNode;
  meta?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <figure style={{ margin: 0, ...style }}>
      <Photo
        aspect={aspect}
        tone={tone}
        tag={tag}
        stamp={stamp}
        src={src}
        alt={alt}
        objectPosition={objectPosition}
        priority={priority}
      />
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

/* PlaceholderStamp — small marigold-bordered mono tag, "[ PLACEHOLDER ]". */
export function PlaceholderStamp({ children = "PLACEHOLDER" }: { children?: ReactNode }) {
  return <span className="ph-stamp">[ {children} ]</span>;
}
