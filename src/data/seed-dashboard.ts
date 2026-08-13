// Données illustratives du pilote Adamaoua (maquette de démonstration).
// Elles servent l'espace facilitateur et le tableau de bord MINPROFF.

export interface ParentSeed {
  id: string;
  nom: string;
  commune: string;
  langue: string;
  progression: number; // % moyen des modules suivis
}

export const PARENTS_SEED: ParentSeed[] = [
  { id: "p1", nom: "Aïssatou B.", commune: "Ngaoundéré", langue: "Fulfulde", progression: 80 },
  { id: "p2", nom: "Amadou D.", commune: "Tibati", langue: "Fulfulde", progression: 40 },
  { id: "p3", nom: "Fadimatou S.", commune: "Meiganga", langue: "Français", progression: 100 },
  { id: "p4", nom: "Ousmanou H.", commune: "Banyo", langue: "Fulfulde", progression: 20 },
  { id: "p5", nom: "Halimatou N.", commune: "Tignère", langue: "Fulfulde", progression: 60 },
  { id: "p6", nom: "Bouba M.", commune: "Ngaoundéré", langue: "Français", progression: 60 },
  { id: "p7", nom: "Djamila A.", commune: "Mbé", langue: "Fulfulde", progression: 40 },
  { id: "p8", nom: "Saïdou W.", commune: "Meiganga", langue: "Français", progression: 100 },
];

export interface StatModule {
  numero: number;
  titre: string;
  completion: number; // %
}

export const STATS = {
  region: "Adamaoua",
  parentsTouches: 1240,
  facilitateurs: 24,
  leconsCompletees: 5830,
  tauxCompletion: 62,
  communes: 6,
  completionParModule: [
    { numero: 1, titre: "Perception de l'enfance", completion: 78 },
    { numero: 2, titre: "Familles & communautés", completion: 65 },
    { numero: 3, titre: "Pratiques parentales", completion: 58 },
    { numero: 4, titre: "1000 premiers jours", completion: 49 },
    { numero: 5, titre: "Planification", completion: 33 },
  ] as StatModule[],
};
