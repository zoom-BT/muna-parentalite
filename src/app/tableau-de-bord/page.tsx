"use client";

import { STATS } from "@/data/seed-dashboard";
import { IconMapPin } from "@/components/icons";
import { useLangue } from "@/components/LangueProvider";

function Tuile({ valeur, label }: { valeur: string; label: string }) {
  return (
    <div className="rounded-2xl bg-surface p-5 shadow-sm">
      <p className="text-3xl font-extrabold text-brand-dark">{valeur}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function TableauDeBordPage() {
  const { t } = useLangue();
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-extrabold text-ink">{t.dashTitre}</h1>
        <p className="mt-1 text-muted">
          {t.dashPortee} <strong>{STATS.region}</strong>. {t.dashDonnees}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Tuile valeur={STATS.parentsTouches.toLocaleString("fr-FR")} label={t.dashParents} />
        <Tuile valeur={STATS.leconsCompletees.toLocaleString("fr-FR")} label={t.dashLecons} />
        <Tuile valeur={`${STATS.tauxCompletion}%`} label={t.dashTaux} />
        <Tuile valeur={`${STATS.facilitateurs}`} label={t.dashFacilitateurs} />
      </section>

      <section className="rounded-3xl bg-surface p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-ink">{t.dashCompletionModule}</h2>
        <div className="flex flex-col gap-3">
          {STATS.completionParModule.map((m) => (
            <div key={m.numero} className="flex items-center gap-3">
              <span className="w-44 shrink-0 text-sm text-ink">
                <span className="font-bold">M{m.numero}</span> · {m.titre}
              </span>
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-soft">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${m.completion}%` }}
                />
              </div>
              <span className="w-10 text-right text-sm font-semibold text-ink">
                {m.completion}%
              </span>
            </div>
          ))}
        </div>
      </section>

      <p className="inline-flex items-start gap-1 text-sm text-muted">
        <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" /> {STATS.communes} {t.dashCommunes}{" "}
        {STATS.region}. {t.dashObjectif}
      </p>
    </div>
  );
}
