"use client";

import { useEffect, useRef, useState } from "react";
import { useLangue } from "./LangueProvider";

const TELEGRAM = "https://t.me/MunaParent_bot";

interface Msg {
  role: "user" | "muna";
  texte: string;
  sources?: string[];
  danger?: boolean;
}

export function Assistant() {
  const { langue, t } = useLangue();
  const [ouvert, setOuvert] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [saisie, setSaisie] = useState("");
  const [charge, setCharge] = useState(false);
  const finRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, charge]);

  async function envoyer(question: string) {
    const q = question.trim();
    if (!q || charge) return;
    setMessages((m) => [...m, { role: "user", texte: q }]);
    setSaisie("");
    setCharge(true);
    try {
      const r = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, langue }),
      });
      const d = await r.json();
      setMessages((m) => [
        ...m,
        { role: "muna", texte: d.reponse, sources: d.sources, danger: d.danger },
      ]);
    } catch {
      setMessages((m) => [...m, { role: "muna", texte: "…" }]);
    } finally {
      setCharge(false);
    }
  }

  // Permet aux pages (chips de suggestions) d'ouvrir l'assistant avec une question
  useEffect(() => {
    const h = (e: Event) => {
      const q = (e as CustomEvent<string>).detail;
      setOuvert(true);
      envoyer(q);
    };
    window.addEventListener("muna:ask", h as EventListener);
    return () => window.removeEventListener("muna:ask", h as EventListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langue, charge]);

  function ecouter(texte: string) {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = langue === "en" || langue === "pidgin" ? "en-US" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOuvert((o) => !o)}
        aria-label="Assistant Muna"
        aria-expanded={ouvert}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-extrabold text-ink shadow-lg transition-transform hover:scale-105"
      >
        {ouvert ? (
          <span aria-hidden className="text-lg">
            ✕
          </span>
        ) : (
          <>
            <span aria-hidden className="text-xl">
              🗣️
            </span>
            <span>Muna</span>
          </>
        )}
      </button>

      {ouvert && (
        <div className="fixed bottom-24 right-5 z-40 flex h-[70vh] max-h-[560px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-soft bg-surface shadow-2xl">
          <div className="flex items-center gap-2 bg-brand px-4 py-3 text-white">
            <span className="text-xl" aria-hidden>
              🌱
            </span>
            <span className="font-bold">Muna</span>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-semibold hover:bg-white/30"
            >
              ✈️ Telegram
            </a>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-ink">{t.assistantIntro}</p>
                <div className="flex flex-wrap gap-2">
                  {t.suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => envoyer(s)}
                      className="rounded-full border border-soft bg-cream px-3 py-1 text-xs font-semibold text-brand-dark hover:bg-soft"
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[#229ed9] px-4 py-2 text-sm font-bold text-white hover:opacity-90"
                >
                  ✈️ {t.telegram}
                </a>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    m.role === "user" ? "bg-brand text-white" : "bg-soft text-ink"
                  }`}
                >
                  {m.danger && (
                    <p className="mb-1 rounded-lg bg-danger px-2 py-1 text-xs font-bold text-white">
                      ⚠️ 117 · 113
                    </p>
                  )}
                  <span className="whitespace-pre-line">{m.texte}</span>
                  {m.sources && m.sources.length > 0 && (
                    <p className="mt-1 text-[11px] text-muted">
                      {t.sources} : {m.sources.join(" · ")}
                    </p>
                  )}
                </div>
                {m.role === "muna" && (
                  <button
                    type="button"
                    onClick={() => ecouter(m.texte)}
                    className="mt-1 block text-xs font-semibold text-brand-dark hover:underline"
                  >
                    🔊 {t.ecouter}
                  </button>
                )}
              </div>
            ))}
            {charge && <p className="text-sm text-muted">Muna…⏳</p>}
            <div ref={finRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              envoyer(saisie);
            }}
            className="flex gap-2 border-t border-soft p-3"
          >
            <input
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder={t.poserQuestion}
              aria-label={t.poserQuestion}
              className="flex-1 rounded-full border border-soft bg-cream px-4 py-2 text-sm outline-none focus:border-brand"
            />
            <button
              type="submit"
              disabled={charge}
              className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
            >
              {t.envoyer}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
