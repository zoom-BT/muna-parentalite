"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Langue } from "@/core/types";
import { T, type Strings } from "@/core/i18n";

interface Ctx {
  langue: Langue;
  setLangue: (l: Langue) => void;
  t: Strings;
}

const LangueContext = createContext<Ctx | null>(null);
const CLES: Langue[] = ["fr", "en", "pidgin"];

export function LangueProvider({ children }: { children: React.ReactNode }) {
  const [langue, setLangueState] = useState<Langue>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("muna:langue");
    if (saved && CLES.includes(saved as Langue)) setLangueState(saved as Langue);
  }, []);

  const setLangue = (l: Langue) => {
    setLangueState(l);
    localStorage.setItem("muna:langue", l);
    document.documentElement.lang = l === "pidgin" ? "en" : l;
  };

  return (
    <LangueContext.Provider value={{ langue, setLangue, t: T[langue] }}>
      {children}
    </LangueContext.Provider>
  );
}

export function useLangue(): Ctx {
  const ctx = useContext(LangueContext);
  if (!ctx) throw new Error("useLangue doit être utilisé dans <LangueProvider>");
  return ctx;
}
