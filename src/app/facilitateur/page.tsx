"use client";

import { useEffect, useState } from "react";
import { PARENTS_SEED, type ParentSeed } from "@/data/seed-dashboard";
import { useLangue } from "@/components/LangueProvider";

const COMMUNES = ["Ngaoundéré", "Tibati", "Meiganga", "Banyo", "Tignère", "Mbé"];
const LANGUES = ["Fulfulde", "Français", "Pidgin"];

export default function FacilitateurPage() {
  const { t } = useLangue();
  const [ajoutes, setAjoutes] = useState<ParentSeed[]>([]);
  const [nom, setNom] = useState("");
  const [commune, setCommune] = useState(COMMUNES[0]);
  const [langue, setLangue] = useState(LANGUES[0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      setAjoutes(JSON.parse(localStorage.getItem("muna:facilitateur:parents") || "[]"));
    } catch {
      setAjoutes([]);
    }
  }, []);

  function enroler(e: React.FormEvent) {
    e.preventDefault();
    if (!nom.trim()) return;
    const p: ParentSeed = {
      id: "loc-" + Date.now(),
      nom: nom.trim(),
      commune,
      langue,
      progression: 0,
    };
    const maj = [p, ...ajoutes];
    setAjoutes(maj);
    try {
      localStorage.setItem("muna:facilitateur:parents", JSON.stringify(maj));
    } catch {}
    setNom("");
    setMessage(`${p.nom} ${t.facilEnroleOk} ${p.commune}.`);
    setTimeout(() => setMessage(""), 2500);
  }

  const tous = [...ajoutes, ...PARENTS_SEED];

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-extrabold text-ink">{t.facilTitre}</h1>
        <p className="mt-1 text-muted">{t.facilIntro}</p>
      </section>

      <section className="rounded-3xl bg-surface p-6 shadow-sm">
        <h2 className="mb-3 font-bold text-ink">{t.facilEnroler}</h2>
        <form onSubmit={enroler} className="flex flex-wrap items-end gap-3">
          <label className="flex flex-col text-sm font-semibold text-muted">
            {t.facilNom}
            <input
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="mt-1 rounded-xl border border-soft bg-cream px-3 py-2 text-ink outline-none focus:border-brand"
              placeholder={t.facilNomPlaceholder}
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-muted">
            {t.facilCommune}
            <select
              value={commune}
              onChange={(e) => setCommune(e.target.value)}
              className="mt-1 rounded-xl border border-soft bg-cream px-3 py-2 text-ink"
            >
              {COMMUNES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-sm font-semibold text-muted">
            {t.langue}
            <select
              value={langue}
              onChange={(e) => setLangue(e.target.value)}
              className="mt-1 rounded-xl border border-soft bg-cream px-3 py-2 text-ink"
            >
              {LANGUES.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-2 font-bold text-white"
          >
            {t.facilBoutonEnroler}
          </button>
        </form>
        {message && <p className="mt-3 text-sm font-semibold text-brand-dark">{message}</p>}
      </section>

      <section>
        <h2 className="mb-3 font-bold text-ink">
          {t.facilParentsSuivis} ({tous.length})
        </h2>
        <div className="flex flex-col gap-2">
          {tous.map((p) => (
            <div
              key={p.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-surface p-4 shadow-sm"
            >
              <div>
                <p className="font-bold text-ink">{p.nom}</p>
                <p className="text-sm text-muted">
                  {p.commune} · {p.langue}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-28 overflow-hidden rounded-full bg-soft">
                  <div
                    className="h-full bg-brand"
                    style={{ width: `${p.progression}%` }}
                  />
                </div>
                <span className="w-10 text-sm font-semibold text-ink">
                  {p.progression}%
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setMessage(`${t.facilRappelOk} ${p.nom}.`);
                    setTimeout(() => setMessage(""), 2500);
                  }}
                  className="rounded-full border border-brand/40 px-3 py-1 text-xs font-bold text-brand-dark hover:bg-brand/10"
                >
                  {t.facilRappeler}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
