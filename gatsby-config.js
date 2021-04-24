module.exports = {
  siteMetadata: {
    title: `LycuiD`,
    description: `Computers, video games, food and sleep advocate.`,
    author: `@lycuid`,
  },
  assetPrefix: `https://cdn.lycuid.dev`,
  plugins: [
    `gatsby-plugin-react-helmet`,
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
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
