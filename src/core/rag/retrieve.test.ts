import { describe, it, expect } from "vitest";
import { rechercher } from "./retrieve";

describe("rechercher", () => {
  it("retrouve le passage sur les colères / discipline positive", () => {
    const res = rechercher("mon enfant fait des colères, je fais quoi", "fr", 3);
    expect(res.length).toBeGreaterThan(0);
    expect(res[0].texte.fr.toLowerCase()).toMatch(/col[eè]re|discipline|calme/);
  });
  it("retourne [] quand rien ne correspond vraiment", () => {
    expect(rechercher("cours de la bourse bitcoin", "fr", 3)).toHaveLength(0);
  });
});
