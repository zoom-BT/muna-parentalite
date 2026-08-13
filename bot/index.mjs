// Bot Telegram Muna — la même intelligence que le web, via /api/assistant.
// Node pur (long polling, fetch intégré), zéro dépendance.

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const API = (process.env.MUNA_API || "http://localhost:3000").replace(/\/$/, "");
if (!TOKEN) {
  console.error("TELEGRAM_BOT_TOKEN manquant (voir .env.example).");
  process.exit(1);
}
const TG = `https://api.telegram.org/bot${TOKEN}`;
const langues = new Map(); // chatId -> "fr" | "en" | "pidgin"
const LANGUES = ["fr", "en", "pidgin"];

const ACCUEIL =
  "🌱 Bonjour, je suis *Muna*, ton assistant de parentalité positive.\n\n" +
  "Pose-moi une question (ex. « mon enfant fait des colères, je fais quoi ? »).\n" +
  "Change de langue : /langue fr · /langue en · /langue pidgin";

async function tg(methode, corps) {
  return fetch(`${TG}/${methode}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(corps),
  });
}

async function envoyer(chatId, texte) {
  await tg("sendMessage", { chat_id: chatId, text: texte, parse_mode: "Markdown" });
}

async function repondre(chatId, question) {
  const langue = langues.get(chatId) || "fr";
  try {
    const r = await fetch(`${API}/api/assistant`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, langue }),
    });
    const d = await r.json();
    let txt = d.reponse || "…";
    if (d.danger) txt = "⚠️ *Danger — Police 117 · Gendarmerie 113*\n\n" + txt;
    if (d.sources?.length) txt += `\n\n📚 _${d.sources.join(" · ")}_`;
    await envoyer(chatId, txt);
  } catch (e) {
    console.error("Erreur /api/assistant:", e.message);
    await envoyer(chatId, "Désolé, je n'arrive pas à répondre pour le moment.");
  }
}

async function traiter(update) {
  const msg = update.message;
  if (!msg || !msg.text) return;
  const chatId = msg.chat.id;
  const texte = msg.text.trim();

  if (texte === "/start") return envoyer(chatId, ACCUEIL);
  if (texte.startsWith("/langue")) {
    const l = texte.split(/\s+/)[1];
    if (LANGUES.includes(l)) {
      langues.set(chatId, l);
      return envoyer(chatId, `✅ Langue : ${l}`);
    }
    return envoyer(chatId, "Langues : /langue fr · /langue en · /langue pidgin");
  }
  return repondre(chatId, texte);
}

async function boucle() {
  let offset = 0;
  console.log(`Muna bot démarré. API = ${API}. En attente de messages…`);
  while (true) {
    try {
      const r = await fetch(`${TG}/getUpdates?timeout=30&offset=${offset}`);
      const d = await r.json();
      if (!d.ok) {
        console.error("getUpdates:", d.description);
        await new Promise((res) => setTimeout(res, 3000));
        continue;
      }
      for (const u of d.result) {
        offset = u.update_id + 1;
        await traiter(u);
      }
    } catch (e) {
      console.error("Boucle:", e.message);
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
}

boucle();
