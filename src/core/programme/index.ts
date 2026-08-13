import { MODULES } from "./modules";
import type { Module, Lecon } from "../types";

export function listeModules(): Module[] {
  return MODULES;
}

export function getModule(id: string): Module | undefined {
  return MODULES.find(m => m.id === id);
}

export function getLecon(moduleId: string, leconId: string): Lecon | undefined {
  return getModule(moduleId)?.lecons.find(l => l.id === leconId);
}
