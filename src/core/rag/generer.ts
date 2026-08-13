import type { Langue } from "../types";
import { rechercher } from "./retrieve";
import type { Passage } from "./knowledge";
import { analyserDanger, RESSOURCES_URGENCE } from "../securite";

export interface ResultatAssistant {
  reponse: string;
  sources: string[];
  danger: boolean;
}

export function reponseLocale(passages: Passage[], langue: Langue): string {
  if (passages.length === 0) {
    const m: Record<Langue, string> = {
      fr: "Je ne suis pas sûr de bien comprendre. Peux-tu reformuler ? Pour une situation précise, un facilitateur Muna peut t'aider.",
      en: "I'm not sure I understand. Could you rephrase? For a specific situation, a Muna facilitator can help.",
      pidgin:
        "I no sure say I understand. You fit talk am another way? For serious matter, Muna facilitator fit help you.",
    };
    return m[langue];
  }
  return passages.map((p) => p.texte[langue]).join("\n\n");
}

const SYSTEME = (langue: Langue) =>
  `Tu es Muna, un assistant de parentalité positive au Cameroun, bienveillant et non-jugeant. ` +
  `Réponds en ${
    langue === "fr"
      ? "français simple"
      : langue === "en"
        ? "simple English"
        : "pidgin camerounais"
  }, phrases courtes. ` +
  `Réponds UNIQUEMENT à partir du CONTEXTE fourni. N'invente jamais de loi, de médicament ou de diagnostic. ` +
  `Si le contexte ne suffit pas, dis-le et oriente vers un facilitateur.`;

export async function genererReponse(
  question: string,
  langue: Langue,
): Promise<ResultatAssistant> {
  const danger = analyserDanger(question);
  const passages = rechercher(question, langue, 3);
  const sources = [...new Set(passages.map((p) => p.source))];
  const cle = process.env.GROQ_API_KEY;

  if (!cle) {
    let reponse = reponseLocale(passages, langue);
    if (danger) reponse = RESSOURCES_URGENCE[langue] + "\n\n" + reponse;
    return { reponse, sources, danger: !!danger };
  }

  const contexte = passages
    .map((p, i) => `[${i + 1}] ${p.texte[langue]}`)
    .join("\n");
  try {
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cle}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "openai/gpt-oss-20b",
        temperature: 0.3,
        messages: [
          { role: "system", content: SYSTEME(langue) },
          {
            role: "user",
            content: `CONTEXTE:\n${contexte || "(vide)"}\n\nQUESTION: ${question}`,
          },
        ],
      }),
    });
    if (!r.ok) throw new Error(`groq ${r.status}`);
    const data = await r.json();
    let reponse =
      data.choices?.[0]?.message?.content?.trim() ||
      reponseLocale(passages, langue);
    if (danger) reponse = RESSOURCES_URGENCE[langue] + "\n\n" + reponse;
    return { reponse, sources, danger: !!danger };
  } catch {
    let reponse = reponseLocale(passages, langue);
    if (danger) reponse = RESSOURCES_URGENCE[langue] + "\n\n" + reponse;
    return { reponse, sources, danger: !!danger };
  }
}
