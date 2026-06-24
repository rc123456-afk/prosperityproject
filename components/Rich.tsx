/* Rich — renders the light formatting used in content/copy.ts so the copy can
   stay as plain, editable text.

   Supported inside any string:
     *italic*            -> <em>…</em>      (used for book titles etc.)
     **bold**            -> <strong>…</strong>
     [text](/page)       -> a link ([text](/about), [text](https://…), [text](mailto:…))

   <Rich> renders one string inline. <RichText> renders an array of strings as
   separate <p> paragraphs (for multi-paragraph prose). */

import { Fragment, type ReactNode } from "react";
import { SmartLink } from "./SmartLink";

/* Apply one regex pass over the current node list, replacing matches in string
   nodes with rendered elements and leaving already-rendered nodes untouched. */
function pass(
  nodes: ReactNode[],
  regex: RegExp,
  render: (m: RegExpExecArray, key: number) => ReactNode,
): ReactNode[] {
  const out: ReactNode[] = [];
  let key = 0;
  for (const node of nodes) {
    if (typeof node !== "string") {
      out.push(node);
      continue;
    }
    let last = 0;
    let m: RegExpExecArray | null;
    regex.lastIndex = 0;
    while ((m = regex.exec(node)) !== null) {
      if (m.index > last) out.push(node.slice(last, m.index));
      out.push(render(m, key++));
      last = m.index + m[0].length;
    }
    if (last < node.length) out.push(node.slice(last));
  }
  return out;
}

export function renderInline(text: string): ReactNode {
  let nodes: ReactNode[] = [text];
  // Links first so ** / * inside link text still format.
  nodes = pass(nodes, /\[([^\]]+)\]\(([^)]+)\)/g, (m, key) => (
    <SmartLink key={`l${key}`} href={m[2]}>
      {m[1]}
    </SmartLink>
  ));
  nodes = pass(nodes, /\*\*([^*]+)\*\*/g, (m, key) => (
    <strong key={`b${key}`}>{m[1]}</strong>
  ));
  nodes = pass(nodes, /\*([^*]+)\*/g, (m, key) => <em key={`i${key}`}>{m[1]}</em>);
  return nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}

export function Rich({ children }: { children: string }) {
  return <>{renderInline(children)}</>;
}

export function RichText({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <>
      {items.map((p, i) => (
        <p key={i} className={className}>
          {renderInline(p)}
        </p>
      ))}
    </>
  );
}
