import { NextResponse } from "next/server";
import { genererReponse } from "@/core/rag/generer";
import type { Langue } from "@/core/types";

export async function POST(req: Request) {
  const { question, langue } = await req.json().catch(() => ({}));
  if (!question || typeof question !== "string") {
    return NextResponse.json({ error: "question requise" }, { status: 400 });
  }
  const lang: Langue = ["fr", "en", "pidgin"].includes(langue) ? langue : "fr";
  const res = await genererReponse(question, lang);
  return NextResponse.json(res);
}
