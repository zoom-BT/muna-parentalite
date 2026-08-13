import { describe, it, expect } from "vitest";
import { analyserDanger, RESSOURCES_URGENCE } from "./securite";

describe("analyserDanger", () => {
  it("détecte un danger de violence/maltraitance", () => {
    expect(analyserDanger("je frappe mon enfant tous les jours")).not.toBeNull();
    expect(analyserDanger("mon mari bat les enfants")).not.toBeNull();
  });
  it("ne déclenche pas sur une question ordinaire", () => {
    expect(analyserDanger("comment féliciter mon enfant ?")).toBeNull();
  });
  it("fournit des numéros d'urgence en français", () => {
    expect(RESSOURCES_URGENCE.fr).toMatch(/117/);
  });
});
