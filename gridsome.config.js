// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config
const settings = require('./config/site.json')

module.exports = {
  siteName: settings.siteName,
  siteUrl: settings.siteUrl,
  siteDescription: settings.siteDescription,
  plugins: [
    'gridsome-plugin-pug',
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: settings.googleAnalyticsId
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "content",
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "content",
        path: "posts/**/*.md",
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
