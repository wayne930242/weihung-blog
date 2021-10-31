require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://blog.wayneh.tw`,
    title: "洪偉筆記 Wei's Note",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sitemap`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+TC\:100,400,700,900`, //思源黑體
          `Noto+Serif+TC\:100,400,700,900`, //思源明體
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WeisNote`,
        short_name: `WeisNote`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/logo.svg`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          'gatsby-remark-numbered-footnotes',
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              showCaptions: true,
              markdownCaptions: true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            },
          },
        ],
      },
    },
  ],
};
