import type { Langue } from "./types";

export interface Danger {
  niveau: "urgence";
  motif: string;
}

const normaliser = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

// verbe de violence + cible enfant/famille, ou détresse explicite
const VIOLENCE =
  /\b(frappe|frapper|bat|battre|tape|taper|cogne|brule|viol|abuse|abus|maltraite|tuer)\b/;
const CIBLE = /\b(enfant|enfants|pikin|bebe|fille|fils|petits)\b/;
const DETRESSE =
  /\b(suicide|me tuer|plus envie de vivre|battu|battue|violee)\b/;

export function analyserDanger(texte: string): Danger | null {
  const t = normaliser(texte);
  if (DETRESSE.test(t)) return { niveau: "urgence", motif: "detresse" };
  if (VIOLENCE.test(t) && CIBLE.test(t))
    return { niveau: "urgence", motif: "violence_enfant" };
  return null;
}

export const RESSOURCES_URGENCE: Record<Langue, string> = {
  fr: "⚠️ Si un enfant est en danger, contacte tout de suite : Police 117 · Gendarmerie 113. Tu peux aussi parler à un facilitateur Muna. Tu n'es pas seul·e.",
  en: "⚠️ If a child is in danger, contact now: Police 117 · Gendarmerie 113. You can also talk to a Muna facilitator. You are not alone.",
  pidgin:
    "⚠️ If pikin dey danger, call now: Police 117 · Gendarmerie 113. You fit talk to Muna facilitator too. You no dey alone.",
};
