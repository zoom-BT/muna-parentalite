"use client";

import Link from "next/link";
import { useLangue } from "@/components/LangueProvider";
import { listeModules } from "@/core/programme";
import type { Langue } from "@/core/types";

const SUGGESTIONS: Record<Langue, string[]> = {
  fr: [
    "Mon enfant fait des colères, je fais quoi ?",
    "Comment féliciter mon enfant ?",
    "Que faire les 1000 premiers jours ?",
  ],
  en: [
    "My child throws tantrums, what do I do?",
    "How do I praise my child?",
    "What matters in the first 1000 days?",
  ],
  pidgin: [
    "My pikin di vex too much, wetin I go do?",
    "How I go praise my pikin?",
    "Wetin important for the first 1000 days?",
  ],
};

export default function ParentPage() {
  const { langue, t } = useLangue();
  const demander = (q: string) =>
    window.dispatchEvent(new CustomEvent("muna:ask", { detail: q }));

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-extrabold text-ink">{t.navParent}</h1>
        <p className="mt-1 text-muted">{t.audienceParents}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SUGGESTIONS[langue].map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => demander(q)}
              className="rounded-full border border-brand/30 bg-surface px-4 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand/10"
            >
              {q}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">💬 {t.poserQuestion}</p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-ink">{t.navApprendre}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {listeModules().map((m) => (
            <Link
              key={m.id}
              href={`/apprendre?module=${m.id}`}
              className="rounded-2xl bg-surface p-4 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <p className="text-xs font-bold uppercase text-accent">
                Module {m.numero}
              </p>
              <p className="font-bold text-ink">{m.titre[langue]}</p>
              <p className="mt-1 text-sm text-muted">{m.resume[langue]}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
