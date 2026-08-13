# Muna — Cahier des charges

> *« Muna » = « enfant » en douala.* **Muna — grandir ensemble.**
> Plateforme digitale pour passer à l'échelle le **programme national de parentalité positive**
> (MINPROFF + UNICEF Cameroun).
> Document de référence : rédigé pour qu'une autre IA / un autre dev puisse reprendre le projet.

---

## 1. Contexte & concours

- **Concours** : « Concours d'Innovation Parentalité Positive » — **UNICEF Cameroon + MINPROFF**.
- **Objectif du concours** : identifier des **solutions digitales** facilitant la **mise à l'échelle
  nationale** du programme de parentalité positive (aujourd'hui limité par des formations en
  présentiel touchant peu de parents).
- **Deadline candidature** : **25 août 2026** (soumission en ligne).
- **Prix** : 10 présélectionnés → 50 000 FCFA chacun · 1ᵉ 1 000 000 · 2ᵉ 750 000 · 3ᵉ 500 000 FCFA.
  Les 3 lauréats : incubation/coaching + **phase pilote (1 à 3 communautés)** + intégration possible
  au programme national + visibilité institutionnelle.
- **Objectif de l'équipe** : **top 10 minimum** (les 50k), viser le podium.
- **Éligibilité** : jeune innovateur ≤ 35 ans / startup / OSC / université / dev indépendant.

### Critères d'évaluation (barème officiel)
Innovation · Accessibilité (low-tech) · Impact (toucher un grand nombre) · Réplicabilité
(échelle nationale) · Coût & durabilité · Pertinence locale (culture, langues, ruralité) ·
**Prise en compte du handicap**.

### Résultats attendus des solutions
Formation digitale des **parents ET facilitateurs** · contenus éducatifs **multilingues** ·
**suivi & évaluation à distance** · engagement communautaire · **accessibilité zones rurales/enclavées**.

---

## 2. Le programme à mettre à l'échelle (matière première)

Programme MINPROFF/UNICEF lancé le **3 août 2022**. But : doter parents/aidants de compétences
parentales positives, réduire le **stress toxique**, prévenir violences faites aux enfants, VBG,
mariages précoces, négligence. Délivré aujourd'hui **en présentiel** par des animateurs
(« pionniers de mise en œuvre »).

**5 modules (ossature du contenu Muna) :**
1. Perception de l'enfance
2. Rôle des familles et communautés dans le bien-être et la protection de l'enfant
3. Développement de l'enfant et pratiques parentales appropriées
4. Investir dans le capital humain durant les **1000 premiers jours**
5. Planification des ressources et priorisation

Sources & base de connaissances : voir [`docs/sources/README.md`](sources/README.md).

---

## 3. Vision & positionnement

**Muna n'est pas « une app de parentalité », c'est un moteur de mise à l'échelle** du programme
national, organisé autour d'un principe : **un cerveau, plusieurs portes.**

### 3 audiences
- 👨‍👩‍👧 **Parents / aidants** — reçoivent le contenu du programme par les canaux les plus inclusifs,
  en micro-apprentissage, avec un **assistant conversationnel** bienveillant.
- 🧑‍🏫 **Facilitateurs** (« pionniers ») — outil pour enrôler des parents, animer/suivre à distance,
  fonctionne **hors-ligne** et se synchronise. *Le levier de démultiplication (10× la portée).*
- 🏛️ **MINPROFF / UNICEF** — **tableau de bord** de suivi-évaluation national (participation,
  progression, couverture régionale, indicateurs de changement).

### Le cerveau = l'Assistant Parentalité
Un **RAG** ancré sur le contenu **vérifié** du programme (comme l'assistant juridique de Gardienne,
transposé). Non-jugeant, multilingue, refuse d'inventer, escalade en cas de danger.

---

## 4. Décisions verrouillées

| Sujet | Décision |
|---|---|
| **Positionnement** | Système à 3 audiences (parents · facilitateurs · MINPROFF) |
| **Canaux** | Cœur **channel-agnostic** + adaptateurs. Prototype **Telegram** (gratuit/ouvert) + **web/PWA**. WhatsApp + IVR vocal + SMS/USSD = canaux de production activés en **phase pilote** (statut institutionnel MINPROFF = clé pour l'API WhatsApp officielle & partenariat opérateur). |
| **Région d'intervention (pilote)** | **Adamaoua** — choix assumé : région **rurale, enclavée, faible connectivité, fulfulophone** = le profil exact visé par l'appel (ruralité + zones enclavées + pertinence locale). On va « là où le présentiel n'arrive pas ». |
| **Langues** | Socle **fr / en / pidgin** piloté par IA (texte + voix). **Audio humain** pour langues locales : **fulfulde** (langue prioritaire du pilote Adamaoua), puis **ewondo** (Centre) — système extensible. |
| **Inclusion handicap** | P1 : déficience **visuelle + non-lecteurs** → **voix** (IVR / notes vocales). P2 : déficience **auditive** → texte simple + pictogrammes + courtes vidéos **LSF**. Transversal : **langage très simple, faible charge cognitive**. |
| **Coûts** | Free-tier / open-source, **auto-hébergeable** → quasi 0 FCFA (critère Coût & durabilité). |

---

## 5. Architecture technique (Option 1 validée)

**Monorepo Next.js à cœur partagé** (réutilise le savoir-faire Gardienne).

```
muna/
├─ packages/core        # LE CERVEAU (channel-agnostic)
│   ├─ programme         # contenu structuré : 5 modules → leçons → messages courts
│   ├─ rag               # base de connaissances vérifiée + récupération + génération
│   ├─ microlearning     # découpage leçons, quiz, progression
│   ├─ i18n              # fr / en / pidgin (+ mapping audio langues locales)
│   └─ securite          # garde-fous enfant : détection danger + escalade
├─ apps/web             # Next.js / PWA
│   ├─ accueil
│   ├─ espace-parent     # assistant intégré + leçons + audio
│   ├─ espace-facilitateur
│   ├─ dashboard         # suivi-évaluation MINPROFF
│   └─ (service worker : offline)
├─ apps/bot             # Telegram (Node, long polling) — même core
└─ data (Supabase/Postgres, free tier)
    parents · facilitateurs · progression · feedback · agrégats dashboard
```

- **IA** : LLM via **Groq free-tier** (RAG strictement ancré, garde-fous). Configurable.
- **Voix** : **audio humain** (fichiers) pour langues locales ; TTS/STT fr/en optionnels (free/open).
- **Offline** : PWA (service worker) met les leçons en cache → « contenus offline ».
- **Garde-fou enfant (essentiel)** : l'assistant répond **uniquement** selon le programme, jamais
  de conseil médical/inventé, ton non-jugeant ; s'il détecte un **danger** (maltraitance, violence,
  détresse), il **escalade** vers les numéros d'aide (police 117, ligne enfance) et un facilitateur.

---

## 6. Modules fonctionnels

- **Assistant Parentalité** : Q→R ancrées programme, multilingue, option **écouter (audio)**.
- **Micro-apprentissage** : un module = série de messages courts + quiz + suivi de progression + rappels.
- **Espace Facilitateur** : enrôler un parent, assigner un module, voir la progression (offline+sync).
- **Dashboard MINPROFF** : nombre de parents touchés, complétion par module, couverture régionale,
  feedback, indicateurs de changement de pratiques.
- **Canaux** : web/PWA + Telegram (prototype) ; WhatsApp/IVR/SMS-USSD (pilote).

---

## 7. Périmètre prototype (25 août) vs roadmap (pilote)

**Prototype démontrable (fait) :**
1. ✅ **Assistant conversationnel** (Telegram + web) ancré programme, fr/en/pidgin, avec audio (démo inclusion).
2. ✅ **Parcours de micro-apprentissage** : une leçon réelle découpée + quiz + progression.
3. 🟡 **Dashboard MINPROFF** — maquette crédible (données simulées réalistes).
4. 🟡 **Espace facilitateur** — aperçu maquetté (enrôler / suivre).

**Roadmap (phase pilote sept–nov, à décrire dans le dossier) :**
Pilote en **Adamaoua** (communauté(s) rurale(s), fulfulophones) · WhatsApp Business API officielle ·
**IVR vocal + SMS/USSD via opérateur** (priorité vu la faible connectivité) · **audio communautaire en fulfulde** ·
vidéos LSF · déploiement supervisé MINPROFF dans 1–3 communautés.

---

## 8. Mapping critères → fonctionnalités (à réutiliser dans le dossier)

| Critère | Ce qui le coche |
|---|---|
| Innovation | Assistant RAG multilingue + « un cerveau, plusieurs portes » |
| Accessibilité | Telegram/SMS/USSD/IVR + PWA offline + voix (low-tech) |
| Impact | Facilitateur-multiplicateur + canaux de masse |
| Réplicabilité | Core channel-agnostic + langues extensibles + auto-hébergeable |
| Coût & durabilité | Free-tier / open-source, quasi 0 FCFA |
| Pertinence locale | Langues locales + audio communautaire + nom camerounais + ancrage sur LE programme |
| Handicap | Voix (visuel/illettrisme) + texte/pictos/LSF (auditif) + langage simple |

---

## 9. Livrables de candidature (6 pièces exigées)

1. Présentation de l'équipe
2. Description détaillée de la solution
3. Prototype / démonstration (lien + vidéo)
4. Plan de mise à l'échelle
5. Budget prévisionnel
6. Lettre de motivation

*(Chaque pièce sera rédigée à partir de ce cahier des charges. Voir todo « dossier de candidature ».)*

---

## 10. Risques & garde-fous

- **Sécurité enfant** : sujet sensible → contenu strictement ancré, escalade danger, non-jugeant.
- **Langues locales & voix** : pas de TTS fiable → **audio humain** (plus authentique, argument fort).
- **WhatsApp/IVR/SMS** : dépendent d'un partenariat (Meta/opérateur) → **prototype sur Telegram**,
  production débloquée par le statut institutionnel MINPROFF (phase pilote).
- **Chrono** : deadline 25 août → prototype ciblé (assistant + microlearning réels ; reste maquetté).

---

## 11. Stack & modèles

Next.js 16 (App Router, Turbopack) + TypeScript · Tailwind CSS · PWA (service worker) ·
Supabase (Postgres, free tier) · Groq (LLM, free-tier) pour le RAG · Node (bot Telegram) ·
audio humain (langues locales). Déploiement Vercel + GitHub. **Nouveau dépôt, séparé de Gardienne.**
