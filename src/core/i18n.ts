import type { Langue } from "./types";

export interface Strings {
  brand: string;
  tagline: string;
  heroTitre: string;
  sousTitre: string;
  communauteTitre: string;
  communauteTexte: string;
  navAccueil: string;
  navParent: string;
  navApprendre: string;
  navFacilitateur: string;
  navTableau: string;
  ctaParent: string;
  ctaApprendre: string;
  audienceParentsTitre: string;
  audienceParents: string;
  audienceFacilitateursTitre: string;
  audienceFacilitateurs: string;
  audienceInstitutionTitre: string;
  audienceInstitution: string;
  poserQuestion: string;
  assistantIntro: string;
  suggestions: string[];
  telegram: string;
  ecouter: string;
  envoyer: string;
  sources: string;
  langue: string;
  precedent: string;
  suivant: string;
  valider: string;
  progression: string;
  bonneReponse: string;
  mauvaiseReponse: string;
  dashTitre: string;
  dashPortee: string;
  dashDonnees: string;
  dashParents: string;
  dashLecons: string;
  dashTaux: string;
  dashFacilitateurs: string;
  dashCompletionModule: string;
  dashCommunes: string;
  dashObjectif: string;
  facilTitre: string;
  facilIntro: string;
  facilEnroler: string;
  facilNom: string;
  facilNomPlaceholder: string;
  facilCommune: string;
  facilBoutonEnroler: string;
  facilParentsSuivis: string;
  facilRappeler: string;
  facilEnroleOk: string;
  facilRappelOk: string;
  navPodcast: string;
  podcastTitre: string;
  podcastIntro: string;
}

export const T: Record<Langue, Strings> = {
  fr: {
    brand: "Muna",
    tagline: "Grandir ensemble",
    heroTitre: "Élever un enfant, ça s'apprend.",
    sousTitre:
      "Le programme national de parentalité positive, accessible à tous les parents, même hors ligne, même en langue locale.",
    communauteTitre: "Construit avec les familles et les communautés",
    communauteTexte:
      "Muna prolonge le travail des facilitateurs et des acteurs communautaires, pour que chaque parent, même loin, soit accompagné.",
    navAccueil: "Accueil",
    navParent: "Espace parent",
    navApprendre: "Apprendre",
    navFacilitateur: "Facilitateur",
    navTableau: "Tableau de bord",
    ctaParent: "Poser une question",
    ctaApprendre: "Commencer une leçon",
    audienceParentsTitre: "Pour les parents",
    audienceParents:
      "Des conseils simples et bienveillants, en français, anglais ou pidgin, à lire ou à écouter.",
    audienceFacilitateursTitre: "Pour les facilitateurs",
    audienceFacilitateurs:
      "Un outil pour enrôler des parents et suivre leurs progrès, même sans connexion.",
    audienceInstitutionTitre: "Pour MINPROFF & UNICEF",
    audienceInstitution:
      "Un tableau de bord pour suivre la portée du programme à l'échelle nationale.",
    poserQuestion: "Pose ta question…",
    assistantIntro:
      "Bonjour 👋 Je suis Muna. Pose-moi une question sur ton enfant, ou choisis un sujet ci-dessous.",
    suggestions: [
      "Mon enfant fait des colères",
      "Comment le féliciter ?",
      "Les 1000 premiers jours",
    ],
    telegram: "Continuer sur Telegram",
    ecouter: "Écouter",
    envoyer: "Envoyer",
    sources: "Sources",
    langue: "Langue",
    precedent: "Précédent",
    suivant: "Suivant",
    valider: "Valider",
    progression: "Progression",
    bonneReponse: "Bonne réponse !",
    mauvaiseReponse: "Pas tout à fait.",
    dashTitre: "Tableau de bord : suivi et évaluation",
    dashPortee: "Portée du programme · pilote",
    dashDonnees: "Données illustratives.",
    dashParents: "Parents touchés",
    dashLecons: "Leçons complétées",
    dashTaux: "Taux de complétion",
    dashFacilitateurs: "Facilitateurs actifs",
    dashCompletionModule: "Complétion par module",
    dashCommunes: "communes couvertes en",
    dashObjectif: "Objectif : passage à l'échelle nationale.",
    facilTitre: "Espace facilitateur",
    facilIntro:
      "Enrôle des parents et suis leur progression, l'outil qui démultiplie le programme sur le terrain, même hors ligne.",
    facilEnroler: "Enrôler un parent",
    facilNom: "Nom",
    facilNomPlaceholder: "Nom du parent",
    facilCommune: "Commune",
    facilBoutonEnroler: "Enrôler",
    facilParentsSuivis: "Parents suivis",
    facilRappeler: "Rappeler",
    facilEnroleOk: "enrôlé·e à",
    facilRappelOk: "Rappel de leçon envoyé à",
    navPodcast: "Podcast",
    podcastTitre: "Podcast Muna",
    podcastIntro:
      "Des épisodes courts à écouter, en français, anglais, pidgin et fulfulde, pour apprendre même sans savoir lire.",
  },
  en: {
    brand: "Muna",
    tagline: "Growing up together",
    heroTitre: "Raising a child is something you learn.",
    sousTitre:
      "The national positive-parenting programme, within reach of every parent, even offline, even in a local language.",
    communauteTitre: "Built with families and communities",
    communauteTexte:
      "Muna extends the work of facilitators and community actors, so every parent, even far away, gets support.",
    navAccueil: "Home",
    navParent: "Parent space",
    navApprendre: "Learn",
    navFacilitateur: "Facilitator",
    navTableau: "Dashboard",
    ctaParent: "Ask a question",
    ctaApprendre: "Start a lesson",
    audienceParentsTitre: "For parents",
    audienceParents:
      "Simple, caring advice in French, English or Pidgin, to read or to listen to.",
    audienceFacilitateursTitre: "For facilitators",
    audienceFacilitateurs:
      "A tool to enroll parents and track their progress, even without a connection.",
    audienceInstitutionTitre: "For MINPROFF & UNICEF",
    audienceInstitution:
      "A dashboard to track the programme's reach at national scale.",
    poserQuestion: "Ask your question…",
    assistantIntro:
      "Hi 👋 I'm Muna. Ask me anything about your child, or pick a topic below.",
    suggestions: [
      "My child throws tantrums",
      "How do I praise them?",
      "The first 1000 days",
    ],
    telegram: "Continue on Telegram",
    ecouter: "Listen",
    envoyer: "Send",
    sources: "Sources",
    langue: "Language",
    precedent: "Previous",
    suivant: "Next",
    valider: "Check",
    progression: "Progress",
    bonneReponse: "Correct!",
    mauvaiseReponse: "Not quite.",
    dashTitre: "Dashboard: monitoring & evaluation",
    dashPortee: "Programme reach · pilot",
    dashDonnees: "Illustrative data.",
    dashParents: "Parents reached",
    dashLecons: "Lessons completed",
    dashTaux: "Completion rate",
    dashFacilitateurs: "Active facilitators",
    dashCompletionModule: "Completion by module",
    dashCommunes: "communities covered in",
    dashObjectif: "Goal: national scale-up.",
    facilTitre: "Facilitator space",
    facilIntro:
      "Enroll parents and track their progress, the tool that scales the programme in the field, even offline.",
    facilEnroler: "Enroll a parent",
    facilNom: "Name",
    facilNomPlaceholder: "Parent's name",
    facilCommune: "Locality",
    facilBoutonEnroler: "Enroll",
    facilParentsSuivis: "Parents tracked",
    facilRappeler: "Remind",
    facilEnroleOk: "enrolled in",
    facilRappelOk: "Lesson reminder sent to",
    navPodcast: "Podcast",
    podcastTitre: "Muna Podcast",
    podcastIntro:
      "Short episodes to listen to, in French, English, Pidgin and Fulfulde, to learn even without reading.",
  },
  pidgin: {
    brand: "Muna",
    tagline: "Make we grow together",
    heroTitre: "To raise pikin na thing wey we fit learn.",
    sousTitre:
      "The national positive-parenting programme for all parents, even without net, even for your own language.",
    communauteTitre: "We build am with families and communities",
    communauteTexte:
      "Muna di continue the work of facilitators and community people, so every parent, even far, go get support.",
    navAccueil: "Home",
    navParent: "Parent place",
    navApprendre: "Learn",
    navFacilitateur: "Facilitator",
    navTableau: "Dashboard",
    ctaParent: "Ask question",
    ctaApprendre: "Start lesson",
    audienceParentsTitre: "For parents",
    audienceParents:
      "Simple, good advice for French, English or Pidgin, you fit read or listen.",
    audienceFacilitateursTitre: "For facilitators",
    audienceFacilitateurs:
      "Tool to register parents and follow how dem di progress, even without net.",
    audienceInstitutionTitre: "For MINPROFF & UNICEF",
    audienceInstitution:
      "Dashboard to see how the programme di reach for the whole country.",
    poserQuestion: "Ask your question…",
    assistantIntro:
      "Hello 👋 Na me Muna. Ask me anything about your pikin, or choose one topic for down.",
    suggestions: [
      "My pikin di vex plenty",
      "How I go praise yi?",
      "The first 1000 days",
    ],
    telegram: "Continue for Telegram",
    ecouter: "Listen",
    envoyer: "Send",
    sources: "Sources",
    langue: "Language",
    precedent: "Back",
    suivant: "Next",
    valider: "Check",
    progression: "Progress",
    bonneReponse: "Correct!",
    mauvaiseReponse: "No be so.",
    dashTitre: "Dashboard: monitoring & evaluation",
    dashPortee: "How the programme di reach · pilot",
    dashDonnees: "Na example data.",
    dashParents: "Parents wey we don reach",
    dashLecons: "Lessons wey dem finish",
    dashTaux: "Completion rate",
    dashFacilitateurs: "Facilitators wey dey active",
    dashCompletionModule: "Completion for each module",
    dashCommunes: "communities wey we cover for",
    dashObjectif: "Goal: reach the whole country.",
    facilTitre: "Facilitator place",
    facilIntro:
      "Register parents and follow how dem di progress, the tool wey di scale the programme for ground, even without net.",
    facilEnroler: "Register one parent",
    facilNom: "Name",
    facilNomPlaceholder: "Parent name",
    facilCommune: "Locality",
    facilBoutonEnroler: "Register",
    facilParentsSuivis: "Parents wey we di follow",
    facilRappeler: "Remind",
    facilEnroleOk: "register for",
    facilRappelOk: "Lesson reminder don go to",
    navPodcast: "Podcast",
    podcastTitre: "Muna Podcast",
    podcastIntro:
      "Short episodes wey you fit listen, for French, English, Pidgin and Fulfulde, to learn even if you no sabi read.",
  },
};
