import type { Module, Lecon, Quiz, Langue } from "./types";

export type Progression = Record<string, { leconsFaites: string[] }>;

export function leconSuivante(module: Module, prog: Progression): Lecon | null {
  const faites = new Set(prog[module.id]?.leconsFaites ?? []);
  return module.lecons.find((l) => !faites.has(l.id)) ?? null;
}

export function pourcentageModule(module: Module, prog: Progression): number {
  const faites = (prog[module.id]?.leconsFaites ?? []).filter((id) =>
    module.lecons.some((l) => l.id === id),
  );
  return Math.round((faites.length / module.lecons.length) * 100);
}

export function evaluerQuiz(quiz: Quiz, choix: number, langue: Langue) {
  return { correct: choix === quiz.bonneReponse, explication: quiz.explication[langue] };
}
