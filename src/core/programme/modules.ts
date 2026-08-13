import type { Module } from "../types";

export const MODULES: Module[] = [
  {
    id: "m1",
    numero: 1,
    titre: {
      fr: "La perception de l'enfance",
      en: "How we see childhood",
      pidgin: "How we di see pikin",
    },
    resume: {
      fr: "Comprendre l'enfant comme une personne à part entière, avec des droits.",
      en: "Understanding the child as a full person, with rights.",
      pidgin: "Sabi say pikin na person wey get right.",
    },
    lecons: [
      {
        id: "m1-l1",
        titre: {
          fr: "L'enfant est une personne",
          en: "A child is a person",
          pidgin: "Pikin na person",
        },
        messages: {
          fr: [
            "Ton enfant n'est pas un petit adulte, ni un objet : c'est une personne qui grandit.",
            "Il a besoin d'amour, de sécurité et d'écoute pour bien se développer.",
            "Le respecter dès petit, c'est l'aider à devenir un adulte équilibré.",
          ],
          en: [
            "Your child is not a small adult, nor an object: a growing person.",
            "They need love, safety and to be heard to develop well.",
            "Respecting them early helps them become a balanced adult.",
          ],
          pidgin: [
            "Your pikin no be small adult, no be thing: na person wey di grow.",
            "E need love, safety and say you hear yi, for grow fine.",
            "If you respect yi early, e go grow balanced.",
          ],
        },
        audio: { ff: "/audio/m1-l1-ff.mp3" },
        quiz: {
          question: {
            fr: "Un enfant qui pleure cherche surtout à…",
            en: "A crying child mostly wants to…",
            pidgin: "Pikin wey di cry di look for…",
          },
          options: {
            fr: ["t'embêter", "communiquer un besoin", "être puni"],
            en: ["annoy you", "communicate a need", "be punished"],
            pidgin: ["worry you", "talk say e need something", "make you punish yi"],
          },
          bonneReponse: 1,
          explication: {
            fr: "Les pleurs sont un langage : l'enfant exprime un besoin, pas une provocation.",
            en: "Crying is a language: the child expresses a need, not provocation.",
            pidgin: "Cry na language: pikin di talk say e need something, no be provocation.",
          },
        },
      },
    ],
  },
  {
    id: "m2",
    numero: 2,
    titre: {
      fr: "Le rôle des familles et des communautés",
      en: "The role of families and communities",
      pidgin: "Wetin family and community di do",
    },
    resume: {
      fr: "L'enfant grandit avec le soutien de sa famille élargie et de sa communauté, pas seulement ses parents.",
      en: "A child grows with support from the extended family and community, not only the parents.",
      pidgin: "Pikin di grow with help from big family and community, no be only papa and mama.",
    },
    lecons: [
      {
        id: "m2-l1",
        titre: {
          fr: "Ensemble pour l'enfant",
          en: "Together for the child",
          pidgin: "We togeda for pikin",
        },
        messages: {
          fr: [
            "Élever un enfant n'est pas l'affaire d'une seule personne : toute la famille peut aider.",
            "Grands-parents, oncles, tantes et voisins ont aussi un rôle à jouer.",
            "La communauté peut protéger l'enfant et donner de bons conseils aux parents.",
            "Demander de l'aide n'est pas une faiblesse, c'est une force.",
          ],
          en: [
            "Raising a child is not one person's job: the whole family can help.",
            "Grandparents, uncles, aunties and neighbours also have a role to play.",
            "The community can protect the child and give good advice to parents.",
            "Asking for help is not weakness, it is strength.",
          ],
          pidgin: [
            "For born pikin no be one person yi work: all di family fit helep.",
            "Grand papa, grand mama, uncle, auntie and neighbor sef get role for play.",
            "Community fit protect pikin and give parents fine advice.",
            "For ask helep no be weakness, na strength.",
          ],
        },
      },
    ],
  },
  {
    id: "m3",
    numero: 3,
    titre: {
      fr: "Développement de l'enfant et pratiques parentales",
      en: "Child development and parenting practices",
      pidgin: "How pikin di grow and how for be fine parent",
    },
    resume: {
      fr: "Chaque âge a ses besoins : connaître le développement de l'enfant aide à mieux l'accompagner.",
      en: "Every age has its needs: knowing child development helps you support them better.",
      pidgin: "Every age get yi own need: if you sabi how pikin di grow, you go helep yi well well.",
    },
    lecons: [
      {
        id: "m3-l1",
        titre: {
          fr: "Comprendre chaque étape",
          en: "Understanding each stage",
          pidgin: "Sabi every stage",
        },
        messages: {
          fr: [
            "Un bébé apprend en touchant, goûtant et observant tout autour de lui.",
            "Un enfant qui grandit a besoin de règles claires, mais dites avec douceur.",
            "Les punitions violentes font peur, mais n'apprennent rien de bon à l'enfant.",
            "Féliciter un enfant pour ses efforts l'encourage à continuer.",
          ],
          en: [
            "A baby learns by touching, tasting and watching everything around.",
            "A growing child needs clear rules, but said with gentleness.",
            "Violent punishment brings fear, but teaches the child nothing good.",
            "Praising a child's effort encourages them to keep trying.",
          ],
          pidgin: [
            "Small pikin di learn as e di touch, taste and watch evritin around yi.",
            "Pikin wey di grow need clear rules, but you must tok yi soft soft.",
            "For beat pikin hard di bring fear, but e no di teach yi anytin good.",
            "If you praise pikin for yi effort, e go continue try.",
          ],
        },
      },
    ],
  },
  {
    id: "m4",
    numero: 4,
    titre: {
      fr: "Les 1000 premiers jours de l'enfant",
      en: "The first 1000 days",
      pidgin: "Di first 1000 days",
    },
    resume: {
      fr: "De la grossesse aux 2 ans de l'enfant, ces 1000 jours posent les bases de sa santé et de son cerveau.",
      en: "From pregnancy to age 2, these 1000 days lay the foundation for the child's health and brain.",
      pidgin: "From wen woman carry belle reach wen pikin do 2 years, dis 1000 days na foundation for yi health and brain.",
    },
    lecons: [
      {
        id: "m4-l1",
        titre: {
          fr: "Une période décisive",
          en: "A decisive period",
          pidgin: "Very important time",
        },
        messages: {
          fr: [
            "Une bonne alimentation de la mère pendant la grossesse aide le cerveau du bébé à bien se former.",
            "L'allaitement maternel exclusif jusqu'à 6 mois protège la santé du bébé.",
            "Parler, chanter et jouer avec le bébé stimule son développement dès la naissance.",
            "Les vaccins et les consultations médicales régulières évitent beaucoup de maladies.",
          ],
          en: [
            "Good nutrition for the mother during pregnancy helps the baby's brain form well.",
            "Exclusive breastfeeding until 6 months protects the baby's health.",
            "Talking, singing and playing with the baby stimulates development from birth.",
            "Vaccines and regular check-ups prevent many illnesses.",
          ],
          pidgin: [
            "If mama chop fine fine food wen e carry belle, e go helep pikin brain form well.",
            "If you breastfeed pikin only, only, reach 6 months, e go protect yi health.",
            "For tok, sing and play with pikin from wen e born di helep yi grow yi brain.",
            "Vaccine and regular hospital check di prevent plenty sickness.",
          ],
        },
      },
    ],
  },
  {
    id: "m5",
    numero: 5,
    titre: {
      fr: "La planification des ressources familiales",
      en: "Planning family resources",
      pidgin: "How for plan family resources",
    },
    resume: {
      fr: "Bien planifier le temps, l'argent et l'énergie de la famille aide à mieux répondre aux besoins de l'enfant.",
      en: "Planning the family's time, money and energy well helps meet the child's needs better.",
      pidgin: "If you plan your time, moni and energy well well, e go helep you meet pikin yi needs.",
    },
    lecons: [
      {
        id: "m5-l1",
        titre: {
          fr: "Prévoir pour bien s'occuper de l'enfant",
          en: "Planning ahead to care for the child",
          pidgin: "Plan before before so you fit take care pikin",
        },
        messages: {
          fr: [
            "Faire un petit budget pour la santé, l'école et la nourriture de l'enfant évite les mauvaises surprises.",
            "Espacer les naissances permet de mieux s'occuper de chaque enfant.",
            "Partager les tâches et les dépenses entre les deux parents allège la charge de chacun.",
            "Épargner un peu chaque mois aide à faire face aux urgences de l'enfant.",
          ],
          en: [
            "Making a small budget for the child's health, school and food avoids bad surprises.",
            "Spacing births helps you take better care of each child.",
            "Sharing tasks and expenses between both parents lightens the load for everyone.",
            "Saving a little each month helps you face the child's emergencies.",
          ],
          pidgin: [
            "If you make small budget for pikin health, school and chop, e go stop bad surprise.",
            "If you space how you di born pikin, you go fit take care of each one well well.",
            "If papa and mama share work and money, di load go light for both of dem.",
            "If you di save small moni evri month, e go helep wen pikin get emergency.",
          ],
        },
      },
    ],
  },
];
