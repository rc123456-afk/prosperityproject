/* Headings for copy.programmes — shared by the homepage "Where it runs" cards
   and the /programmes page so both name each programme the same way. */

import { copy } from "@/content/copy";

export type Programme = (typeof copy.programmes.items)[number];

/* A programme is headed by its city. When two programmes share a city (the two
   online sessions into Asansol), the partner joins the heading so the reader
   never meets the same heading twice in a row. */
export function programmeHeading(p: Programme): { text: string; includesPartner: boolean } {
  const shared = copy.programmes.items.filter((o) => o.city === p.city).length > 1;
  return shared
    ? { text: `${p.city} · ${p.partner}`, includesPartner: true }
    : { text: p.city, includesPartner: false };
}
