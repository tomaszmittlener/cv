const {
  name,
  siteTitle,
  siteDescription,
  siteKeyword,
  themeColor,
  backgroundColor,
  siteUrl,
  siteLogo,
    googleAnalyticsID
} = require('./site-config');
module.exports = {
    plugins: [
      'gatsby-plugin-react-helmet',
        `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: googleAnalyticsID,
          head: true
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: siteTitle,
          short_name: name,
          start_url: "/",
          background_color: backgroundColor,
          theme_color: themeColor,
          display: "minimal-ui",
          icon: siteLogo,
          icons: [
            {
              src: "/images/me.png",
              sizes: `48x48`,
              type: `image/jpg`
            },
            {
              src: "/images/me.png",
              sizes: `192x192`,
              type: `image/jpg`
            },
            {
              src: "/images/me.png",
              sizes: `512x512`,
              type: `image/jpg`
            },
          ]
        },
    },
    'gatsby-plugin-offline',
    ],
    siteMetadata: {
      title: siteTitle,
      description: siteDescription,
      keywords: siteKeyword,
      url: siteUrl
    }
  };
