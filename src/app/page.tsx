"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLangue } from "@/components/LangueProvider";

const SALUTS = ["Bienvenue", "Welcome", "Wɛlkam", "Jam"]; // fr · en · pidgin · fulfulde

export default function Home() {
  const { t, langue } = useLangue();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % SALUTS.length), 2500);
    return () => clearInterval(id);
  }, []);

  const ecouter = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(t.heroTitre);
    u.lang = langue === "en" ? "en-US" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  const audiences = [
    { emoji: "👨‍👩‍👧", titre: t.audienceParentsTitre, texte: t.audienceParents },
    { emoji: "🧑🏾‍🏫", titre: t.audienceFacilitateursTitre, texte: t.audienceFacilitateurs },
    { emoji: "🏛️", titre: t.audienceInstitutionTitre, texte: t.audienceInstitution },
  ];

  return (
    <div className="flex flex-col gap-12">
      <section className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Colonne texte */}
        <div className="flex flex-col justify-center rounded-3xl bg-surface p-8 shadow-sm sm:p-10">
          <p
            key={i}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-soft px-3 py-1 text-sm font-bold text-brand-dark"
            style={{ animation: "muna-fade 400ms ease-out" }}
          >
            <span aria-hidden>✋🏾</span> {SALUTS[i]}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
            {t.heroTitre}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{t.sousTitre}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={ecouter}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-bold text-ink transition-transform hover:scale-[1.02]"
            >
              <span aria-hidden>▶</span> {t.ecouter}
            </button>
            <Link
              href="/parent"
              className="rounded-full bg-brand px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {t.ctaParent}
            </Link>
            <Link
              href="/apprendre"
              className="rounded-full border-2 border-ink/15 px-6 py-3 text-base font-bold text-ink transition-colors hover:border-ink/40"
            >
              {t.ctaApprendre}
            </Link>
          </div>
        </div>

        {/* Colonne image */}
        <div className="relative min-h-56 overflow-hidden rounded-3xl bg-brand-dark shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.jpg"
            alt="Une mère camerounaise rit tendrement avec son bébé dans les bras."
            className="h-full w-full object-cover"
          />
          <div className="ndop-band absolute inset-x-0 bottom-0" />
          <span className="absolute right-2 top-2 rounded-full bg-ink/60 px-2 py-0.5 text-[10px] font-semibold text-white">
            Photo : UNICEF
          </span>
        </div>
      </section>

      <section>
        <h2 className="mb-1 text-2xl font-bold text-ink">{t.tagline}</h2>
        <hr className="ndop-rule mb-6 w-24" />
        <div className="grid gap-4 sm:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.titre}
              className="rounded-2xl border border-soft bg-surface p-6 shadow-sm"
            >
              <div className="mb-3 text-4xl" aria-hidden>
                {a.emoji}
              </div>
              <h3 className="mb-1 text-lg font-bold text-ink">{a.titre}</h3>
              <p className="text-sm leading-relaxed text-muted">{a.texte}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
