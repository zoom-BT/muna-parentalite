import type { Langue } from "@/core/types";

export interface Episode {
  id: string;
  titre: Record<Langue, string>;
  desc: Record<Langue, string>;
  duree: string;
  langue: string;
  src: string;
}

// Épisodes courts (audio à enregistrer avec des locuteurs natifs).
// Tant que le fichier audio n'existe pas, le lecteur affiche « audio bientôt disponible ».
export const EPISODES: Episode[] = [
  {
    id: "ep1",
    titre: {
      fr: "Comprendre les colères",
      en: "Understanding tantrums",
      pidgin: "Sabi why pikin di vex",
    },
    desc: {
      fr: "Pourquoi ton enfant fait des colères, et comment garder ton calme.",
      en: "Why your child throws tantrums, and how to stay calm.",
      pidgin: "Why your pikin di vex, and how you go calm down.",
    },
    duree: "4 min",
    langue: "Fulfulde",
    src: "/audio/podcast/ep1-ff.mp3",
  },
  {
    id: "ep2",
    titre: {
      fr: "Féliciter et encourager",
      en: "Praise and encourage",
      pidgin: "Praise and encourage",
    },
    desc: {
      fr: "L'encouragement construit un enfant confiant, mieux que la punition.",
      en: "Encouragement builds a confident child, better than punishment.",
      pidgin: "Encouragement di build confident pikin pass punishment.",
    },
    duree: "5 min",
    langue: "Français",
    src: "/audio/podcast/ep2-fr.mp3",
  },
  {
    id: "ep3",
    titre: {
      fr: "Les 1000 premiers jours",
      en: "The first 1000 days",
      pidgin: "The first 1000 days",
    },
    desc: {
      fr: "De la grossesse à 2 ans : nutrition, allaitement et éveil.",
      en: "From pregnancy to age two: nutrition, breastfeeding and stimulation.",
      pidgin: "From belle reach two years: chop, breast milk and how to wake yi brain.",
    },
    duree: "6 min",
    langue: "Pidgin",
    src: "/audio/podcast/ep3-pdg.mp3",
  },
  {
    id: "ep4",
    titre: {
      fr: "Protéger sans violence",
      en: "Protect without violence",
      pidgin: "Protect without violence",
    },
    desc: {
      fr: "Corriger un comportement sans frapper ni humilier.",
      en: "Correct behaviour without hitting or humiliating.",
      pidgin: "Correct behaviour without beating or shaming.",
    },
    duree: "5 min",
    langue: "Français",
    src: "/audio/podcast/ep4-fr.mp3",
  },
];
