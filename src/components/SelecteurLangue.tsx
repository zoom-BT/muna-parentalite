"use client";

import type { Langue } from "@/core/types";
import { useLangue } from "./LangueProvider";

const OPTIONS: { code: Langue; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "pidgin", label: "Pidgin" },
];

export function SelecteurLangue() {
  const { langue, setLangue, t } = useLangue();
  return (
    <div
      className="flex items-center gap-1 rounded-full bg-soft p-1"
      role="group"
      aria-label={t.langue}
    >
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLangue(o.code)}
          aria-pressed={langue === o.code}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            langue === o.code
              ? "bg-brand text-white"
              : "text-ink/70 hover:bg-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
