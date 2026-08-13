# 🌱 Muna — *grandir ensemble*

Plateforme inclusive et multicanale pour **passer à l'échelle le programme national
de parentalité positive** du Cameroun (MINPROFF · UNICEF).

> Candidature au **Concours d'Innovation « Parentalité Positive »** (UNICEF Cameroon / MINPROFF).

## Le problème

Le programme de parentalité positive fonctionne — mais il repose sur des **formations
en présentiel** qui touchent peu de parents. L'éloignement, la faible connectivité et
les langues locales limitent sa portée. **Muna démultiplie le programme** en le rendant
accessible à chaque parent, même hors ligne, même en langue locale.

## Le principe : un cerveau, plusieurs portes

Un **cœur** unique (`src/core`) — contenu du programme, assistant ancré (RAG),
micro-apprentissage, garde-fou enfant, multilingue — servi par **plusieurs canaux** :
le **web/PWA**, un **bot Telegram**, et (en phase pilote) **WhatsApp, IVR vocal, SMS/USSD**.

## Fonctionnalités

- 🤖 **Assistant de parentalité** ancré sur le contenu **vérifié** du programme (jamais d'invention), en **français / anglais / pidgin**, à lire ou à **écouter**.
- 🎓 **Micro-apprentissage** : les 5 modules découpés en messages courts + quiz + suivi de progression.
- 🧑🏾‍🏫 **Espace facilitateur** : enrôler des parents et suivre leur progression (le levier de mise à l'échelle).
- 📊 **Tableau de bord MINPROFF** : suivi & évaluation à distance (pilote Adamaoua).
- 💬 **Bot Telegram** : la même intelligence, sur un canal grand public.
- 📴 **PWA installable & hors ligne** · 🔊 **accessibilité** (voix pour non-lecteurs/non-voyants, langage simple).
- 🛟 **Garde-fou enfant** : en cas de danger détecté, escalade vers **117 · 113**.

## Comment chaque critère est couvert

| Critère | Réponse Muna |
|---|---|
| Innovation | Assistant RAG multilingue + « un cerveau, plusieurs portes » |
| Accessibilité | Telegram/SMS/USSD/IVR + PWA offline + voix (low-tech) |
| Impact | Facilitateur-multiplicateur + canaux de masse |
| Réplicabilité | Cœur channel-agnostic + langues extensibles + auto-hébergeable |
| Coût & durabilité | Open-source / free-tier, quasi 0 FCFA |
| Pertinence locale | fr/en/pidgin + audio fulfulde + pilote Adamaoua |
| Handicap | Voix (visuel/illettrisme) + texte/pictos (auditif) + langage simple |

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · PWA (service worker) ·
Groq (LLM, free-tier) pour l'assistant, avec **repli local** sans réseau · Vitest · Node (bot Telegram, zéro dépendance).

## Lancer

```bash
npm install
npm run dev        # http://localhost:3000
```

Variables d'environnement (voir [`.env.example`](.env.example)) — créer `.env.local` :

```
GROQ_API_KEY=...     # optionnel : sans clé, l'assistant répond via le repli local
```

Tests & build :

```bash
npm test
npm run build
```

Bot Telegram : voir [`bot/README.md`](bot/README.md).

## Structure

```
src/core/     le cerveau : programme · rag (base + récupération + génération) · microlearning · securité · i18n
src/app/      pages (accueil, parent, apprendre, facilitateur, tableau-de-bord) + /api/assistant
src/components/  provider de langue, assistant, nav, audio…
bot/          bot Telegram (même cerveau via HTTP)
docs/         cahier des charges, plan, sources, démo
```

---

*Muna — programme national de parentalité positive · MINPROFF · UNICEF Cameroun. Prototype de démonstration ; les données du tableau de bord sont illustratives.*
