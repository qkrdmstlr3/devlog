module.exports = {
  siteMetadata: {
    title: `조개소년 개발블로그`,
    description: `개발자 조개소년의 개발블로그`,
    author: `shellboy`,
    siteUrl: 'https://shellboylog.com',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-vanilla-extract`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'shellboy devlog',
        short_name: 'shellboy devlog',
        start_url: '/',
        icon: 'posts/icon/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/posts/contents`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/posts/fonts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://shellboylog.com',
        sitemap: 'https://shellboylog.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: false,
        minimum: 0.5,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/v3/Layout/index.tsx'),
      },
    },
  ],
};
