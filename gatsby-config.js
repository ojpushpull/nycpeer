/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My FIrst Gatsby Site",
    menuLinks:[
            {
               name:'tres',
               link:'/'
            },
            {
               name:'crpares',
               link:'/cresource'
            },
            {
              name:'sares',
              link:'/page-3'
           }
          ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    
    
    "gatsby-plugin-mdx",
  ],
  
};
