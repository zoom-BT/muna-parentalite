import type { Langue } from "./types";

export interface Strings {
  brand: string;
  tagline: string;
  heroTitre: string;
  sousTitre: string;
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
}

export const T: Record<Langue, Strings> = {
  fr: {
    brand: "Muna",
    tagline: "Grandir ensemble",
    heroTitre: "Élever un enfant, ça s'apprend — ensemble.",
    sousTitre:
      "Le programme national de parentalité positive, accessible à tous les parents — même hors ligne, même en langue locale.",
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
  },
  en: {
    brand: "Muna",
    tagline: "Growing up together",
    heroTitre: "Raising a child is something you learn — together.",
    sousTitre:
      "The national positive-parenting programme, within reach of every parent — even offline, even in a local language.",
    navAccueil: "Home",
    navParent: "Parent space",
    navApprendre: "Learn",
    navFacilitateur: "Facilitator",
    navTableau: "Dashboard",
    ctaParent: "Ask a question",
    ctaApprendre: "Start a lesson",
    audienceParentsTitre: "For parents",
    audienceParents:
      "Simple, caring advice in French, English or Pidgin — to read or to listen to.",
    audienceFacilitateursTitre: "For facilitators",
    audienceFacilitateurs:
      "A tool to enroll parents and track their progress, even without a connection.",
    audienceInstitutionTitre: "For MINPROFF & UNICEF",
    audienceInstitution:
      "A dashboard to track the programme's reach at national scale.",
    poserQuestion: "Ask your question…",
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
  },
  pidgin: {
    brand: "Muna",
    tagline: "Make we grow together",
    heroTitre: "To raise pikin na thing wey we fit learn — together.",
    sousTitre:
      "The national positive-parenting programme for all parents — even without net, even for your own language.",
    navAccueil: "Home",
    navParent: "Parent place",
    navApprendre: "Learn",
    navFacilitateur: "Facilitator",
    navTableau: "Dashboard",
    ctaParent: "Ask question",
    ctaApprendre: "Start lesson",
    audienceParentsTitre: "For parents",
    audienceParents:
      "Simple, good advice for French, English or Pidgin — you fit read or listen.",
    audienceFacilitateursTitre: "For facilitators",
    audienceFacilitateurs:
      "Tool to register parents and follow how dem di progress, even without net.",
    audienceInstitutionTitre: "For MINPROFF & UNICEF",
    audienceInstitution:
      "Dashboard to see how the programme di reach for the whole country.",
    poserQuestion: "Ask your question…",
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
  },
};
