# Bot Telegram Muna

Le **même cerveau** que la plateforme web (assistant de parentalité positive),
accessible sur Telegram — un canal ultra-répandu au Cameroun. Le bot ne contient
aucune logique métier : il relaie les questions vers `/api/assistant`.

*Un cerveau, plusieurs portes.*

## Prérequis
1. Créer un bot avec [@BotFather](https://t.me/BotFather) → récupérer le **jeton**.
2. Node 20+ (utilise `fetch` intégré, zéro dépendance).
3. La plateforme Muna accessible (en local `npm run dev`, ou l'URL Vercel).

## Configuration
```bash
cd bot
cp .env.example .env
# renseigner TELEGRAM_BOT_TOKEN et MUNA_API (URL de la plateforme)
```

## Lancer
```bash
node --env-file=.env index.mjs
```

Puis, sur Telegram : `/start`, une question, ou `/langue fr|en|pidgin`.

## Notes
- Le bot fonctionne en *long polling* (pas de serveur public requis).
- Les réponses sont **ancrées** sur le contenu du programme et **escaladent**
  vers les numéros d'urgence (117 · 113) en cas de danger détecté.
- Aucune donnée n'est stockée par le bot.
