require('dotenv').config();
const siteConfigs = require('./site_configs.json');

module.exports = {
  siteMetadata: siteConfigs.metadata,
  assetPrefix: siteConfigs.cdn,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/Images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LycuiD`,
        short_name: `LycuiD`,
        start_url: `/`,
        background_color: `#131313`,
        theme_color: `#131313`,
        display: `minimal-ui`,
        icon: `src/Images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'Github',
        fieldName: 'github',
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_GITHUB_TOKEN}`
        },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
