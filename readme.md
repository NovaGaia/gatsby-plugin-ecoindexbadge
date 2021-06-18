# gatsby-plugin-ecoindexbadge

https://github.com/NovaGaia/gatsby-plugin-ecoindexbadge

## Description

This is a GatsbyJS plugin that displays a badge on the page giving information about the ecological impact of the page consulted.

### Learning Resources

It is simply a plugin that will load a javascript created and hosted by **Simon Vandaele**.

The calculation functions come from GreenIT-Analysis `GNU Affero General Public License AGPL v3 / Copyright (C) 2019 didierfred@gmail.com`

More informations https://github.com/simonvdfr/ecoindex-light-js

### Changelog

**More informations in [`HISTORY.md`](HISTORY.md)**

## How to install

Install via npm or yarn

`npm install gatsby-plugin-ecoindexbadge --save`

`yarn add gatsby-plugin-ecoindexbadge`

Just add the plugin to the plugins array in your `gatsby-config.js`

```javascript
plugins: {
    [`gatsby-plugin-ecoindexbadge`],
    ...
}
```

or

```javascript
plugins: {
    {
        resolve: 'gatsby-plugin-ecoindexbadge',
        options: {
            mode: 'manual', // 'external' / 'manual' default:'external'
        },
    },
    ...
},
```

## Available options

`mode` tells the plugin to load the GreenIT community JavaScript library instead of using the internal `EcoindexBadge` component.

## Examples of usage

### En utilisant la library GreenIT

Simply in your configuration file `gatsby-config.js` load the plugin like this:

```javascript
plugins: {
    [`gatsby-plugin-ecoindexbadge`],
    ...
}
```

### Using the internal component `<EcoindexBadge lang="EN|FR" />`

1. Configurez le plugin ainsi (sinon vous aurez plusieurs badges !) :

```javascript
plugins: {
    {
        resolve: 'gatsby-plugin-ecoindexbadge',
        options: {
            mode: 'manual', // 'external' / 'manual' default:'external'
        },
    },
    ...
},
```

**Mode :**

- `external` calling and using the GreenIT library (default mode)
- `manual` use of internal calculation [loading of GreenIT library disabled(*)] and you have to add the component yourself, see point 2.

(\*) Good practice: The `manual` mode should be used only if the use of the external library causes bugs or conflicts with other libraries.

2. Import the component:

```javascript
import { EcoindexBadge } from 'gatsby-plugin-ecoindexbadge';
```

3. In your code insert the component with the language to be displayed:

```javascript
<EcoindexBadge lang='EN|FR' />
```
