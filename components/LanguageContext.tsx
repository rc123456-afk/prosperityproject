"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "EN" | "HI" | "BN";

export const LANGS: { id: Lang; label: string; script: "latin" | "deva" }[] = [
  { id: "EN", label: "EN", script: "latin" },
  { id: "HI", label: "हिं", script: "deva" },
  { id: "BN", label: "বাং", script: "deva" },
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
