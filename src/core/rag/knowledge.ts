import type { Langue } from "../types";

export interface Passage {
  id: string;
  moduleId: string;
  texte: Record<Langue, string>;
  motsCles: string[];
  source: string;
}

// Base de connaissances vérifiée, fondée sur le contenu du programme national
// de parentalité positive (MINPROFF/UNICEF). À enrichir depuis les guides PDF.
export const BASE_CONNAISSANCE: Passage[] = [
  {
    id: "p-enfant-personne",
    moduleId: "m1",
    texte: {
      fr: "Ton enfant est une personne à part entière, avec des droits. Le respecter dès le plus jeune âge l'aide à devenir un adulte équilibré.",
      en: "Your child is a full person, with rights. Respecting them from an early age helps them become a balanced adult.",
      pidgin: "Your pikin na complete person wey get right. If you respect yi from small, e go grow balanced.",
    },
    motsCles: ["personne", "droits", "respect", "respecter", "dignite", "dignité"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 1",
  },
  {
    id: "p-perception-positive",
    moduleId: "m1",
    texte: {
      fr: "Vois d'abord le positif chez ton enfant. Un enfant n'est pas un problème à corriger, mais une personne qui apprend et qui grandit.",
      en: "See the positive in your child first. A child is not a problem to fix, but a person who is learning and growing.",
      pidgin: "See the good thing for your pikin first. Pikin no be problem wey you go correct, na person wey di learn and di grow.",
    },
    motsCles: ["perception", "positif", "regard", "voir", "apprend", "grandir"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 1",
  },
  {
    id: "p-discipline-coleres",
    moduleId: "m3",
    texte: {
      fr: "Face à une colère, garde ton calme, nomme l'émotion de l'enfant et pose une limite claire, sans frapper ni crier. La discipline positive corrige le comportement sans violence.",
      en: "During a tantrum, stay calm, name the child's emotion and set a clear limit, without hitting or shouting. Positive discipline corrects behaviour without violence.",
      pidgin: "When pikin di vex, calm down, tell yi the emotion wey e get, put clear limit, no beat, no shout. Positive discipline di correct without violence.",
    },
    motsCles: [
      "colère", "colères", "colere", "coleres", "discipline", "calme", "limite",
      "violence", "frapper", "crier", "comportement", "tantrum",
    ],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 3",
  },
  {
    id: "p-discipline-sans-violence",
    moduleId: "m3",
    texte: {
      fr: "Frapper ou humilier un enfant lui apprend la peur, pas le bon comportement. La violence éducative laisse des blessures. Explique, montre l'exemple, encourage.",
      en: "Hitting or humiliating a child teaches fear, not good behaviour. Corporal punishment leaves wounds. Explain, model, encourage.",
      pidgin: "If you beat or shame pikin, e go learn fear, no be good behaviour. Beating di leave wound. Explain, show example, encourage.",
    },
    motsCles: ["violence educative", "chatiment", "châtiment", "punir", "punition", "fessée", "fessee", "humilier", "battre"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 3",
  },
  {
    id: "p-encouragement",
    moduleId: "m3",
    texte: {
      fr: "Félicite ton enfant quand il fait bien. L'encouragement et l'attention positive renforcent les bons comportements bien mieux que la punition.",
      en: "Praise your child when they do well. Encouragement and positive attention reinforce good behaviour far better than punishment.",
      pidgin: "Praise your pikin when e do fine. Encouragement and good attention di build good behaviour pass punishment.",
    },
    motsCles: ["féliciter", "feliciter", "encouragement", "encourager", "récompense", "recompense", "attention", "valoriser"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 3",
  },
  {
    id: "p-communication",
    moduleId: "m2",
    texte: {
      fr: "Écoute ton enfant et parle avec lui. Quand un enfant se sent écouté, il a confiance et communique plus facilement ses besoins et ses peurs.",
      en: "Listen to your child and talk with them. When a child feels heard, they trust you and share their needs and fears more easily.",
      pidgin: "Hear your pikin, talk with yi. When pikin sabi say you di hear yi, e go trust you and talk yi need and yi fear.",
    },
    motsCles: ["communication", "écouter", "ecouter", "parler", "dialogue", "confiance", "besoins", "peurs"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 2",
  },
  {
    id: "p-jeu",
    moduleId: "m3",
    texte: {
      fr: "Le jeu est la façon dont l'enfant apprend. Jouer et parler avec ton enfant chaque jour développe son cerveau, son langage et ses émotions.",
      en: "Play is how a child learns. Playing and talking with your child every day develops their brain, language and emotions.",
      pidgin: "Play na how pikin di learn. If you play and talk with your pikin every day, e di build yi brain, yi language and yi emotion.",
    },
    motsCles: ["jeu", "jouer", "apprentissage", "eveil", "éveil", "langage", "developpement", "développement", "cerveau"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 3",
  },
  {
    id: "p-routine",
    moduleId: "m3",
    texte: {
      fr: "Des habitudes régulières (repas, sommeil, jeu) donnent à l'enfant un sentiment de sécurité. La stabilité l'aide à se sentir en confiance.",
      en: "Regular routines (meals, sleep, play) give a child a sense of security. Stability helps them feel safe and confident.",
      pidgin: "Regular routine (chop, sleep, play) di give pikin security. When things dey stable, pikin di feel safe.",
    },
    motsCles: ["routine", "habitude", "sécurité", "securite", "sommeil", "repas", "stabilité", "stabilite"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 3",
  },
  {
    id: "p-1000jours-nutrition",
    moduleId: "m4",
    texte: {
      fr: "Les 1000 premiers jours, de la grossesse aux 2 ans, sont décisifs. L'allaitement et une bonne alimentation posent les bases de la santé et du développement.",
      en: "The first 1000 days, from pregnancy to age two, are decisive. Breastfeeding and good nutrition lay the foundations of health and development.",
      pidgin: "The first 1000 days, from belle reach two years, na the most important. Breast milk and good chop di build the foundation of health and development.",
    },
    motsCles: ["1000 jours", "mille jours", "grossesse", "allaitement", "nutrition", "alimentation", "bebe", "bébé", "nourrisson"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 4",
  },
  {
    id: "p-1000jours-stimulation",
    moduleId: "m4",
    texte: {
      fr: "Dès la naissance, parle, chante et réponds à ton bébé. Cette attention précoce nourrit son cerveau autant que la nourriture nourrit son corps.",
      en: "From birth, talk, sing and respond to your baby. This early attention feeds their brain as much as food feeds their body.",
      pidgin: "From when pikin born, talk, sing, answer yi. This early attention di feed yi brain like how chop di feed yi body.",
    },
    motsCles: ["stimulation", "naissance", "bebe", "bébé", "cerveau", "soins attentifs", "reponse", "réponse", "chanter"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 4",
  },
  {
    id: "p-sante-hygiene",
    moduleId: "m4",
    texte: {
      fr: "Protège la santé de ton enfant : vaccination à jour, eau propre, mains lavées, et consulte vite en cas de fièvre ou de diarrhée.",
      en: "Protect your child's health: keep vaccinations up to date, clean water, washed hands, and seek care quickly for fever or diarrhoea.",
      pidgin: "Protect your pikin health: do all yi vaccine, drink clean water, wash hand, and run go hospital quick if fever or running belle.",
    },
    motsCles: ["santé", "sante", "vaccination", "vaccin", "hygiene", "hygiène", "maladie", "fievre", "fièvre", "diarrhée", "diarrhee"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 4",
  },
  {
    id: "p-protection-violence",
    moduleId: "m2",
    texte: {
      fr: "Un enfant a le droit d'être protégé de toute violence, abus ou négligence. Si un enfant est en danger, il faut agir et demander de l'aide sans tarder.",
      en: "A child has the right to be protected from all violence, abuse or neglect. If a child is in danger, act and seek help without delay.",
      pidgin: "Pikin get right make dem protect yi from any violence, abuse or neglect. If pikin dey danger, act quick and find help.",
    },
    motsCles: ["protection", "abus", "maltraitance", "négligence", "negligence", "danger", "violence", "aide", "sécurité", "securite"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 2",
  },
  {
    id: "p-communaute",
    moduleId: "m2",
    texte: {
      fr: "La protection de l'enfant est l'affaire de toute la famille et de la communauté. Voisins, école et proches ont un rôle pour entourer et protéger l'enfant.",
      en: "Child protection is the whole family's and community's business. Neighbours, school and relatives all have a role in surrounding and protecting the child.",
      pidgin: "To protect pikin na work for the whole family and community. Neighbour, school and family get role for surround and protect the pikin.",
    },
    motsCles: ["communauté", "communaute", "famille", "voisins", "école", "ecole", "entourage", "role", "rôle", "collectif"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 2",
  },
  {
    id: "p-stress-toxique",
    moduleId: "m1",
    texte: {
      fr: "Les cris, les coups et les tensions répétés créent un stress toxique qui nuit au cerveau de l'enfant. Un foyer calme et aimant le protège.",
      en: "Repeated shouting, hitting and tension create toxic stress that harms the child's brain. A calm, loving home protects them.",
      pidgin: "Plenty shout, beating and tension di create toxic stress wey di spoil pikin brain. Calm and loving house di protect yi.",
    },
    motsCles: ["stress toxique", "stress", "tension", "cris", "coups", "cerveau", "foyer", "amour", "climat"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 1",
  },
  {
    id: "p-planification",
    moduleId: "m5",
    texte: {
      fr: "Planifie le temps et les ressources pour ton enfant : santé, école, alimentation. Prioriser ses besoins essentiels, même avec peu de moyens, fait une grande différence.",
      en: "Plan time and resources for your child: health, school, food. Prioritising their essential needs, even with limited means, makes a big difference.",
      pidgin: "Plan time and resource for your pikin: health, school, chop. Even if money no plenty, if you prioritise the important need, e di make big difference.",
    },
    motsCles: ["planification", "planifier", "ressources", "priorisation", "prioriser", "besoins essentiels", "budget", "moyens", "temps"],
    source: "Guide parentalité positive MINPROFF/UNICEF, Module 5",
  },
];
