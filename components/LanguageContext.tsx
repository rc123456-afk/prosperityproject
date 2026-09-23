"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "EN" | "HI" | "BN";

// `script` drives styling (both Indic scripts share the Tiro treatment);
// `htmlLang` + `name` are for screen readers and correct text shaping.
export const LANGS: {
  id: Lang;
  label: string;
  script: "latin" | "deva";
  htmlLang: string;
  name: string;
}[] = [
  { id: "EN", label: "EN", script: "latin", htmlLang: "en", name: "English" },
  { id: "HI", label: "हिं", script: "deva", htmlLang: "hi", name: "Hindi" },
  { id: "BN", label: "বাং", script: "deva", htmlLang: "bn", name: "Bengali" },
];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "EN",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
