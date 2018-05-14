module.exports = {
  siteMetadata: {
    title: "Indiscriminate fascination",
  },
  plugins: [
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        disable: true,
        // production: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-external-links",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-smartypants",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,
              class: "emoji-icon",
              size: 64,
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px",
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/icon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Daniel Ström",
        short_name: "dnjstrom",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#F2C94C",
        display: "minimal-ui",
        icon: "src/img/icon.png",
      },
    },
    "gatsby-plugin-offline", // Needs to be after gatsby-plugin-manifest
    "gatsby-plugin-netlify", // make sure to put last in the array
  ],
}
