import { describe, it, expect } from "vitest";
import { listeModules, getModule, getLecon } from "./index";

describe("programme", () => {
  it("expose les 5 modules du programme", () => {
    expect(listeModules()).toHaveLength(5);
    expect(listeModules().map(m => m.numero)).toEqual([1, 2, 3, 4, 5]);
  });
  it("chaque module a un titre fr/en/pidgin et au moins une leçon", () => {
    for (const m of listeModules()) {
      expect(m.titre.fr).toBeTruthy();
      expect(m.titre.en).toBeTruthy();
      expect(m.titre.pidgin).toBeTruthy();
      expect(m.lecons.length).toBeGreaterThan(0);
    }
  });
  it("getLecon retourne des messages courts non vides", () => {
    const lecon = getLecon("m1", "m1-l1");
    expect(lecon).toBeDefined();
    expect(lecon!.messages.fr.length).toBeGreaterThan(0);
  });
});
