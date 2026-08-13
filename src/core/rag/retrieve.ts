import type { Langue } from "../types";
import { BASE_CONNAISSANCE, type Passage } from "./knowledge";

const STOPWORDS = new Set([
  "le", "la", "les", "un", "une", "de", "des", "du", "je", "mon", "ma", "mes",
  "est", "et", "au", "aux", "pour", "que", "qui", "quoi", "fais", "fait",
  "comment", "the", "an", "of", "my", "is", "and", "to", "for", "what", "do",
  "how",
]);

const normaliser = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const tokens = (s: string) =>
  normaliser(s)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));

export function rechercher(question: string, langue: Langue, n = 3): Passage[] {
  const q = tokens(question);
  if (q.length === 0) return [];
  const scored = BASE_CONNAISSANCE.map((p) => {
    const cles = p.motsCles.map(normaliser);
    const corpus = tokens(p.texte[langue] + " " + p.texte.fr);
    let score = 0;
    for (const t of q) {
      if (cles.some((c) => c.split(/\s+/).includes(t))) score += 3;
      if (corpus.includes(t)) score += 1;
    }
    return { p, score };
  })
    .filter((x) => x.score >= 3)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, n).map((x) => x.p);
}
