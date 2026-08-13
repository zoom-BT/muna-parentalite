import { describe, it, expect } from "vitest";
import { leconSuivante, evaluerQuiz, pourcentageModule } from "./microlearning";
import { getModule } from "./programme";

describe("microlearning", () => {
  const m = getModule("m1")!;
  it("propose la 1re leçon quand rien n'est fait", () => {
    expect(leconSuivante(m, {})!.id).toBe(m.lecons[0].id);
  });
  it("calcule la progression", () => {
    const prog = { m1: { leconsFaites: [m.lecons[0].id] } };
    expect(pourcentageModule(m, prog)).toBe(Math.round(100 / m.lecons.length));
  });
  it("évalue un quiz", () => {
    const q = m.lecons[0].quiz!;
    expect(evaluerQuiz(q, q.bonneReponse, "fr").correct).toBe(true);
    expect(
      evaluerQuiz(q, (q.bonneReponse + 1) % q.options.fr.length, "fr").correct,
    ).toBe(false);
  });
});
