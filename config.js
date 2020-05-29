const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://learning.neoito.com/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.neoito.com/images/neoito.svg',
    logoLink: '/',
    title:
      "learningHub",
    githubUrl: 'https://github.com/neoito-hub/learningHub',
    // helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/newcomers',
      '/linux',
      '/git',
      '/angular',
      '/python',
      '/nativescript'
    ],
    collapsedNav: [
      '/linu', // add trailing slash if enabled above
    ],
    links: [{ text: 'Neoito', link: 'https://neoito.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='/'>learningHub",
  },
  siteMetadata: {
    title: 'Style guides and learning materials for devs to improve tech skills | learningHub',
    description: 'Style guides and learning materials for devs to improve tech skills | learningHub ',
    ogImage: null,
    docsLocation: 'https://github.com/neoito-hub/learningHub',
    favicon: 'https://www.neoito.com/images/neoito.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'learningHub',
      short_name: 'learningHub',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#ff6e43',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      // icons: [
      //   {
      //     src: 'src/pwa-512.png',
      //     sizes: `512x512`,
      //     type: `image/png`,
      //   },
      // ],
    },
  },
};

module.exports = config;
