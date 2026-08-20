"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLangue } from "@/components/LangueProvider";
import { LecteurAudio } from "@/components/LecteurAudio";
import { getModule, listeModules } from "@/core/programme";
import {
  pourcentageModule,
  evaluerQuiz,
  type Progression,
} from "@/core/microlearning";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCheck,
  IconSparkles,
} from "@/components/icons";

function Contenu() {
  const { langue, t } = useLangue();
  const params = useSearchParams();
  const moduleId = params.get("module") ?? "m1";
  const module = getModule(moduleId) ?? getModule("m1")!;
  const lecon = module.lecons[0];
  const messages = lecon.messages[langue];

  const [prog, setProg] = useState<Progression>({});
  const [idx, setIdx] = useState(0);
  const [rep, setRep] = useState<number | null>(null);
  const [termine, setTermine] = useState(false);

  useEffect(() => {
    try {
      setProg(JSON.parse(localStorage.getItem("muna:progression") || "{}"));
    } catch {
      setProg({});
    }
  }, []);
  useEffect(() => {
    setIdx(0);
    setRep(null);
    setTermine(false);
  }, [moduleId]);

  function marquerFait() {
    setProg((p) => {
      const faites = new Set(p[module.id]?.leconsFaites ?? []);
      faites.add(lecon.id);
      const maj = { ...p, [module.id]: { leconsFaites: [...faites] } };
      try {
        localStorage.setItem("muna:progression", JSON.stringify(maj));
      } catch {}
      return maj;
    });
    setTermine(true);
  }

  const phaseQuiz = idx >= messages.length;

  useEffect(() => {
    if (phaseQuiz && !lecon.quiz && !termine) marquerFait();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phaseQuiz]);

  return (
    <div className="flex flex-col gap-6">
      {/* Choix du module */}
      <div className="flex flex-wrap gap-2">
        {listeModules().map((m) => (
          <Link
            key={m.id}
            href={`/apprendre?module=${m.id}`}
            aria-current={m.id === module.id ? "page" : undefined}
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              m.id === module.id
                ? "bg-brand text-white"
                : "bg-surface text-ink/70 hover:bg-soft"
            }`}
          >
            {m.numero}
          </Link>
        ))}
      </div>

      <div>
        <p className="text-xs font-bold uppercase text-accent">
          Module {module.numero}
        </p>
        <h1 className="text-2xl font-extrabold text-ink">{lecon.titre[langue]}</h1>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-soft">
          <div
            className="h-full bg-brand transition-all"
            style={{ width: `${pourcentageModule(module, prog)}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-muted">
          {t.progression} : {pourcentageModule(module, prog)}%
        </p>
      </div>

      {!phaseQuiz && (
        <div className="rounded-3xl bg-surface p-6 shadow-sm">
          <p className="min-h-24 text-lg leading-relaxed text-ink">
            {messages[idx]}
          </p>
          {lecon.audio?.ff && idx === 0 && (
            <div className="mt-4">
              <LecteurAudio src={lecon.audio.ff} label="Fulfulde" />
            </div>
          )}
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              disabled={idx === 0}
              onClick={() => setIdx((i) => i - 1)}
              className="inline-flex items-center gap-1 rounded-full border border-soft px-5 py-2 font-semibold text-ink disabled:opacity-40"
            >
              <IconChevronLeft className="h-4 w-4" /> {t.precedent}
            </button>
            <span className="text-sm text-muted">
              {idx + 1} / {messages.length}
            </span>
            <button
              type="button"
              onClick={() => setIdx((i) => i + 1)}
              className="inline-flex items-center gap-1 rounded-full bg-brand px-5 py-2 font-semibold text-white"
            >
              {t.suivant} <IconChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {phaseQuiz && lecon.quiz && !termine && (
        <div className="rounded-3xl bg-surface p-6 shadow-sm">
          <p className="mb-4 text-lg font-bold text-ink">
            {lecon.quiz.question[langue]}
          </p>
          <div className="flex flex-col gap-2">
            {lecon.quiz.options[langue].map((opt, i) => {
              const choisi = rep === i;
              const bon = i === lecon.quiz!.bonneReponse;
              const couleur =
                rep === null
                  ? "border-soft hover:bg-soft"
                  : bon
                    ? "border-brand bg-brand/10"
                    : choisi
                      ? "border-danger bg-danger/10"
                      : "border-soft opacity-60";
              return (
                <button
                  key={i}
                  type="button"
                  disabled={rep !== null}
                  onClick={() => setRep(i)}
                  className={`rounded-xl border-2 px-4 py-3 text-left font-medium text-ink ${couleur}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {rep !== null && (
            <div className="mt-4">
              <p className="font-bold text-brand-dark">
                {evaluerQuiz(lecon.quiz, rep, langue).correct
                  ? t.bonneReponse
                  : t.mauvaiseReponse}
              </p>
              <p className="mt-1 text-sm text-muted">
                {evaluerQuiz(lecon.quiz, rep, langue).explication}
              </p>
              <button
                type="button"
                onClick={marquerFait}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-white"
              >
                <IconCheck className="h-5 w-5" /> {t.valider}
              </button>
            </div>
          )}
        </div>
      )}

      {phaseQuiz && (termine || !lecon.quiz) && (
        <div className="rounded-3xl bg-brand/10 p-6 text-center">
          <IconSparkles className="mx-auto h-9 w-9 text-accent" />
          <p className="mt-2 font-bold text-brand-dark">
            {t.progression} : {pourcentageModule(module, prog)}%
          </p>
          <Link
            href="/parent"
            className="mt-4 inline-block rounded-full bg-brand px-6 py-3 font-bold text-white"
          >
            {t.navParent}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function ApprendrePage() {
  return (
    <Suspense fallback={<p className="text-muted">…</p>}>
      <Contenu />
    </Suspense>
  );
}
