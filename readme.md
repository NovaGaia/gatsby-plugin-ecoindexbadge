# gatsby-plugin-ecoindexbadge

https://github.com/NovaGaia/gatsby-plugin-ecoindexbadge

## Description

C'est un plugin GatsbyJS permetant d'afficher sur page un badge donnant les informations de l'impact écologique de la page consultée.

### Learning Resources

C'est simplement un plugin qui va charger un javascript créé et hébergé par **Simon Vandaele**.

Les fonctions de calcul viennent de GreenIT-Analysis. `GNU Affero General Public License AGPL v3 / Copyright (C) 2019 didierfred@gmail.com`

## How to install

Install via npm or yarn

`npm install gatsby-plugin-ecoindexbadge --save`

`yarn add gatsby-plugin-ecoindexbadge`

Just add the plugin to the plugins array in your `gatsby-config.js`

```json
plugins: {
    [`gatsby-plugin-ecoindexbadge`],
    ...
}
```

or

```json
plugins: {
    {
        resolve: 'gatsby-plugin-ecoindexbadge',
        options: {
            useExternalLibrary: false, // default:true
        },
    },
    ...
},
```

## Available options

`useExternalLibrary` indique au plugin de charger la library JavaScript de la communauté GreenIT plutôt que d'utiliser le composant interne `EcoindexBadge`.

## Examples of usage

### En utilisant la library GreenIT

Simplement dans votre fichier de configuration `gatsby-config.js` charger le plugin ainsi :

```json
plugins: {
    [`gatsby-plugin-ecoindexbadge`],
    ...
}
```

### En utilisant le composant interne `<EcoindexBadge lang="EN|FR" />`

1. Configurez le plugin ainsi (sinon vous aurez plusieurs badges !) :

```json
plugins: {
    {
        resolve: 'gatsby-plugin-ecoindexbadge',
        options: {
            useExternalLibrary: false, // default:true
        },
    },
    ...
},
```

2. Faite l'import du composant :

```javascript
import EcoindexBadge from 'gatsby-plugin-ecoindexbadge'
```

3. Dans votre code insérer le composant avec la langue à afficher :

```javascript
<EcoindexBadge lang="EN|FR" />
```
