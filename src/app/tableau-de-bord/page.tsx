import { STATS } from "@/data/seed-dashboard";

export const metadata = { title: "Tableau de bord — Muna" };

function Tuile({ valeur, label }: { valeur: string; label: string }) {
  return (
    <div className="rounded-2xl bg-surface p-5 shadow-sm">
      <p className="text-3xl font-extrabold text-brand-dark">{valeur}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function TableauDeBordPage() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-extrabold text-ink">
          Tableau de bord — suivi & évaluation
        </h1>
        <p className="mt-1 text-muted">
          Portée du programme · pilote <strong>{STATS.region}</strong>. Données
          illustratives.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Tuile valeur={STATS.parentsTouches.toLocaleString("fr-FR")} label="Parents touchés" />
        <Tuile valeur={STATS.leconsCompletees.toLocaleString("fr-FR")} label="Leçons complétées" />
        <Tuile valeur={`${STATS.tauxCompletion}%`} label="Taux de complétion" />
        <Tuile valeur={`${STATS.facilitateurs}`} label="Facilitateurs actifs" />
      </section>

      <section className="rounded-3xl bg-surface p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-ink">Complétion par module</h2>
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

      <p className="text-sm text-muted">
        📍 {STATS.communes} communes couvertes en {STATS.region}. Objectif :
        passage à l'échelle nationale.
      </p>
    </div>
  );
}
