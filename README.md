## Prérequis

Assurez-vous d'avoir Node.js version 20.9.0 installé sur votre ordinateur avant de suivre les étapes ci-dessous.

## Installation

Git clone le projet avec la commande :

```bash
 Git clone
```

Installation des dépendances : 

```bash
npm i
```

## Environment Variables

Créer un fichier .env à la racine du projet.

`MONGO_URI=<lien_vers_votre_base_de_donnees_MongoDB>
`

Remplacez <lien_vers_votre_base_de_donnees_MongoDB> par le lien réel vers votre base de données NoSQL MongoDB.


## Démmarage du server


```bash
npm start
```

## Génération de données pour la base de données

Pour générer des données dans la base de données, taper la commande suivante :

```bash
npx ts-node src/services/seed.ts
```


