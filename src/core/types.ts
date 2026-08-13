export type Langue = "fr" | "en" | "pidgin";

export interface Quiz {
  question: Record<Langue, string>;
  options: Record<Langue, string[]>;
  bonneReponse: number; // index into options
  explication: Record<Langue, string>;
}
export interface Lecon {
  id: string;
  titre: Record<Langue, string>;
  messages: Record<Langue, string[]>; // short bite-sized messages
  audio?: Record<string, string>;     // langue code (incl. "ff" fulfulde) → /audio/xxx.mp3
  quiz?: Quiz;
}
export interface Module {
  id: string;
  numero: number;
  titre: Record<Langue, string>;
  resume: Record<Langue, string>;
  lecons: Lecon[];
}
