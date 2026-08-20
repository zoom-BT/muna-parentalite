# Dossier de candidature — Muna
### Concours d'Innovation « Parentalité Positive » · UNICEF Cameroon × MINPROFF

**Solution :** Muna — grandir ensemble
**Porteur :** Balbino Tchoutzine · balbino.tchoutzine@enspy-uy1.cm · +237 651 815 457
**Région d'intervention :** Adamaoua
**Démo :** https://muna-parentalite.vercel.app · Code : https://github.com/zoom-BT/muna-parentalite · Bot : @MunaParent_bot

---

## 1. Présentation de l'équipe

Équipe de jeunes innovateurs (≤ 35 ans), profil université / labo d'innovation (ENSPY — Polytechnique Yaoundé).

| Membre | Rôle | Compétences |
|---|---|---|
| **Balbino Tchoutzine** | Porteur de projet · développement | IA appliquée, développement full-stack, conception produit |
| **[À COMPLÉTER]** | Contenu & pédagogie | *(idéalement un profil sciences sociales / éducation / santé communautaire)* |
| **[À COMPLÉTER]** | Terrain & langues locales | *(relais Adamaoua, locuteur fulfulde — production audio & mobilisation)* |

> 💡 *Le concours encourage les candidatures féminines : intégrer au moins une co-équipière renforce le dossier et la légitimité du projet (conçu avec et pour les familles).*

**Motivation collective :** mettre la technologie au service de la protection de l'enfant et de l'accompagnement des parents, là où le présentiel n'arrive pas.

---

## 2. Description détaillée de la solution

**Le problème.** Le programme national de parentalité positive (MINPROFF/UNICEF) améliore réellement les pratiques parentales et réduit la violence éducative — mais il repose sur des **formations en présentiel** qui touchent peu de parents. Éloignement, faible connectivité, langues locales et disponibilité limitent sa portée à l'échelle nationale.

**La solution — Muna.** Une plateforme digitale **inclusive et multicanale** qui démultiplie le programme selon un principe simple : **un cerveau, plusieurs portes.** Un cœur intelligent unique (contenu vérifié du programme + assistant IA ancré + micro-apprentissage + garde-fou enfant, multilingue) est servi par plusieurs canaux, du plus riche au plus accessible.

**Trois audiences, un même système :**
- **Parents / aidants** — reçoivent le programme en **micro-leçons** (messages courts + quiz + audio) et posent leurs questions à un **assistant de parentalité** bienveillant, en **français, anglais ou pidgin**, à lire **ou à écouter**.
- **Facilitateurs** — un espace pour **enrôler** des parents et **suivre** leur progression sur le terrain, même hors ligne : le levier qui démultiplie la portée.
- **MINPROFF / UNICEF** — un **tableau de bord** de suivi & évaluation à distance (portée, complétion, couverture régionale).

**Canaux :** web/PWA installable (hors ligne) + **bot Telegram** aujourd'hui ; **WhatsApp, IVR vocal, SMS/USSD** en phase pilote (le statut institutionnel de MINPROFF débloque l'API WhatsApp officielle et les partenariats opérateurs).

**Intelligence artificielle responsable.** L'assistant est un **RAG** : il répond **uniquement** à partir du contenu **vérifié** du programme (jamais d'invention de loi, de diagnostic ou de médicament), sur un ton non-jugeant. **Garde-fou enfant** : en cas de danger détecté (violence, détresse), il **escalade** vers les numéros d'urgence (Police **117** · Gendarmerie **113**) et un facilitateur.

**Inclusion & handicap.** La **voix** (audio / lecture à voix haute) sert les parents **non-lecteurs et non-voyants** ; le **texte simple + pictogrammes** servent les malentendants ; langage volontairement simple pour tous. **Langues locales** délivrées en **audio humain** (fulfulde en priorité pour l'Adamaoua) — plus authentique et culturellement juste que la voix synthétique.

**Souveraineté & coût.** Architecture **open-source**, hébergeable au Cameroun, s'appuyant sur des services **gratuits / free-tier** → coût de fonctionnement quasi nul, réplicable et durable.

---

## 3. Prototype / démonstration

**Un prototype fonctionnel est déjà en ligne** (pas une maquette) :
- 🌐 **Application web/PWA :** https://muna-parentalite.vercel.app
- 🤖 **Bot Telegram :** @MunaParent_bot (mêmes réponses que le web, via le même cerveau)
- 💻 **Code source :** https://github.com/zoom-BT/muna-parentalite

**Ce qui est démontrable dès maintenant :** assistant multilingue ancré sur le programme (fr/en/pidgin) avec lecture audio et escalade danger ; parcours de micro-apprentissage (leçons + quiz + progression, hors ligne) ; espace facilitateur (enrôlement + suivi) ; tableau de bord MINPROFF (pilote Adamaoua). Scénario de démo détaillé : voir `docs/DEMO.md`.

---

## 4. Plan de mise à l'échelle

**Phase 1 — Pilote Adamaoua (0-3 mois).** Déploiement supervisé avec MINPROFF dans 1 à 3 communautés rurales fulfulophones. Production de l'**audio fulfulde**, formation de **facilitateurs** relais, activation des canaux **bas-débit** (SMS/USSD/IVR via partenariat opérateur) et **WhatsApp** officiel. Mesure d'impact via le tableau de bord.

**Phase 2 — Consolidation & langues (3-9 mois).** Ajout de langues locales (ewondo, etc.) par audio communautaire, vidéos en langue des signes, enrichissement du contenu depuis les guides officiels, itérations selon les retours terrain.

**Phase 3 — Passage à l'échelle nationale (9-24 mois).** Extension aux autres régions via le réseau des facilitateurs et des acteurs communautaires/médiatiques, intégration au dispositif national MINPROFF, partenariats télécoms (accès sans data) et écoles.

**Réplicabilité :** l'architecture « un cerveau, plusieurs portes » et le contenu structuré rendent l'extension à d'autres langues et régions **simple et peu coûteuse** — et transposable à d'autres pays d'Afrique francophone.

---

## 5. Budget prévisionnel (pilote — provisionnel, en FCFA)

| Poste | Montant (FCFA) |
|---|---|
| Production de contenu audio (locuteurs natifs, fulfulde + langues) | 600 000 |
| Formation & mobilisation des facilitateurs | 800 000 |
| Crédits télécom pilote (SMS / USSD / IVR) | 700 000 |
| Kits terrain (smartphones/tablettes, recharge solaire) | 900 000 |
| Hébergement, IA et outils (12 mois) | 300 000 |
| Suivi & évaluation (collecte terrain, tableau de bord) | 500 000 |
| Coordination & gestion de projet | 700 000 |
| Communication & visibilité | 300 000 |
| Imprévus (~8 %) | 450 000 |
| **Total** | **5 250 000** |

> *Budget indicatif du pilote, à ajuster. Le prix du concours amorce le financement ; le complément est recherché via la RSE des télécoms, des subventions ONG et l'appui institutionnel MINPROFF/UNICEF. Le coût de fonctionnement récurrent reste faible (open-source, free-tier).*

---

## 6. Lettre de motivation

*Madame, Monsieur,*

*Au Cameroun, être un bon parent ne devrait pas dépendre de l'endroit où l'on vit ni de la langue que l'on parle. Le programme national de parentalité positive fonctionne — mais il n'atteint encore qu'une fraction des familles. C'est ce fossé que nous voulons combler.*

*Nous avons conçu **Muna** pour mettre ce programme dans la poche de chaque parent : simple, dans sa langue, accessible même sans connexion ni lecture, et toujours respectueux de l'enfant. Nous avons choisi d'intervenir en **Adamaoua**, précisément là où le présentiel peine à arriver, parce que c'est là que l'impact est le plus grand.*

*Ce que nous demandons au concours n'est pas seulement une récompense : c'est un **accompagnement** et une **phase pilote** pour confronter Muna au terrain, aux côtés de MINPROFF et d'UNICEF, et faire la preuve qu'une technologie sobre, inclusive et souveraine peut renforcer la protection de l'enfant à l'échelle nationale.*

*Nous serions honorés de porter cette ambition avec vous.*

*[Prénom NOM], pour l'équipe Muna.*

---

*Muna — grandir ensemble.*
