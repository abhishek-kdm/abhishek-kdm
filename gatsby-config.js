const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: `LycuiD`,
    description: `Simply computers, video games, food etc.`,
    author: `@lycuid`,
  },
  assetPrefix: `https://cdn.lycuid.dev`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: resolve(__dirname, 'src', 'Images'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: resolve(__dirname, 'src', 'Fonts'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LycuiD's personal website.`,
        short_name: `LycuiD`,
        start_url: `/`,
        background_color: `#131313`,
        theme_color: `#131313`,
        display: `minimal-ui`,
        icon: `src/Images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: false,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
