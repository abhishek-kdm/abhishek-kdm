module.exports = {
  siteMetadata: {
    title: `LycuiD`,
    description: `Busy in the matrix.`,
    author: `@lycuid`,
  },
  assetPrefix: 'https://cdn.lycuid.dev',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/Images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Fonts`,
        path: `${__dirname}/src/Fonts`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
