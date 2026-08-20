import { NextResponse } from "next/server";
import { genererReponse } from "@/core/rag/generer";
import type { Langue } from "@/core/types";

// Webhook Telegram serverless : Telegram appelle cette route à chaque message.
// Toujours disponible (pas de processus à maintenir). Même cerveau que le web.

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const SECRET = process.env.TELEGRAM_WEBHOOK_SECRET; // optionnel
const TG = TOKEN ? `https://api.telegram.org/bot${TOKEN}` : "";
const LANGUES: Langue[] = ["fr", "en", "pidgin"];
const langues = new Map<number, Langue>(); // best-effort (instance chaude)

const ACCUEIL =
  "Bonjour, je suis Muna, ton assistant de parentalité positive.\n\n" +
  "Pose-moi une question (ex. « mon enfant fait des colères, je fais quoi ? »).\n" +
  "Changer de langue : /langue fr · /langue en · /langue pidgin";

async function envoyer(chatId: number, texte: string) {
  await fetch(`${TG}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: texte }),
  });
}

export async function POST(req: Request) {
  if (!TOKEN) return NextResponse.json({ ok: false });
  if (SECRET && req.headers.get("x-telegram-bot-api-secret-token") !== SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const update = await req.json().catch(() => null);
  const msg = update?.message;
  if (!msg?.chat?.id || typeof msg.text !== "string") {
    return NextResponse.json({ ok: true });
  }
  const chatId: number = msg.chat.id;
  const texte: string = msg.text.trim();

  if (texte === "/start") {
    await envoyer(chatId, ACCUEIL);
    return NextResponse.json({ ok: true });
  }
  if (texte.startsWith("/langue")) {
    const l = texte.split(/\s+/)[1] as Langue;
    if (LANGUES.includes(l)) {
      langues.set(chatId, l);
      await envoyer(chatId, `Langue : ${l}`);
    } else {
      await envoyer(chatId, "Langues : /langue fr · /langue en · /langue pidgin");
    }
    return NextResponse.json({ ok: true });
  }

  const langue = langues.get(chatId) || "fr";
  const res = await genererReponse(texte, langue);
  let out = res.reponse;
  if (res.danger) out = "Danger — Police 117 · Gendarmerie 113\n\n" + out;
  if (res.sources?.length) out += `\n\nSources : ${res.sources.join(" · ")}`;
  await envoyer(chatId, out);
  return NextResponse.json({ ok: true });
}
