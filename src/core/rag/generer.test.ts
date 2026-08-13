import { describe, it, expect } from "vitest";
import { reponseLocale } from "./generer";
import { rechercher } from "./retrieve";

describe("reponseLocale (fallback)", () => {
  it("compose une réponse à partir des passages trouvés", () => {
    const passages = rechercher("colères de mon enfant", "fr", 2);
    const txt = reponseLocale(passages, "fr");
    expect(txt.length).toBeGreaterThan(20);
    expect(txt.toLowerCase()).toMatch(/calme|limite|discipline/);
  });
  it("répond poliment quand aucun passage", () => {
    const txt = reponseLocale([], "fr");
    expect(txt.toLowerCase()).toMatch(/je ne|facilitateur|reformuler/);
  });
});
