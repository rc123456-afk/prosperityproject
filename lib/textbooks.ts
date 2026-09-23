/* The three Knowing Your Money textbook editions — shared by the resources
   download cards (TextbookDownloads) and the curriculum rail (TextbookRail),
   so the two pages can never disagree about titles, pages or availability. */

export type TextbookEdition = {
  id: "bn" | "hi" | "en";
  script: string;
  lang: string;
  lang_native: string;
  title: string;
  meta: string;
  size: string;
  file: string;
  available: boolean;
};

export const TEXTBOOK_EDITIONS: TextbookEdition[] = [
  {
    id: "bn",
    script: "বাং",
    lang: "Bengali",
    lang_native: "বাংলা",
    title: "টাকার পরিচয়",
    meta: "23 pages · PDF",
    size: "466 KB",
    file: "/downloads/knowing-your-money-bn.pdf",
    available: true,
  },
  {
    id: "hi",
    script: "हिं",
    lang: "Hindi",
    lang_native: "हिन्दी",
    title: "पैसा पहचान",
    meta: "23 pages · PDF",
    size: "446 KB",
    file: "/downloads/knowing-your-money-hi.pdf",
    available: true,
  },
  {
    id: "en",
    script: "EN",
    lang: "English",
    lang_native: "English",
    title: "Knowing Your Money",
    meta: "24 pages · PDF",
    size: "366 KB",
    file: "/downloads/knowing-your-money-en.pdf",
    available: true,
  },
];
