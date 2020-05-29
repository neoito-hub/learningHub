# learningHub | Style Guides and Learning materials for devs, to build lightning fast apps 🚀 

Website link: https://learn.neoito.com/

## To contribute:

Site is built using gatsby and below are the instructions to add content.

To install and run app;

```
yarn install
yarn start
```

There is a content in the root directory in which all the pages / topics are added as Markdown.

To create a new page; add a new file where filename will be assigned as the route / topic.

Still want to edit some config,

```
---
title: "Introduction"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---
```

To create sub category structures, follow same structure as `shell.md and shell directory`

Place the above snippet of code in all MD files to customize title and meta data.

To change description, theming and order of pages: Edit `config.js` file in the root

To change order or to define specific routes

```
forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/newcomers',
      '/linux',
      '/git',
      '/angular',
      '/python',
      '/nativescript'
    ]
```

### Credits

Hasura Team [gitbook] - https://github.com/hasura/gatsby-gitbook-starter
