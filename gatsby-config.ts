const path = require('path');

module.exports = {
  siteMetadata: {
    title: `test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [`gatsby-plugin-styled-components`, 
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`,
  `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:300,400,400i,500,600`],
        display: 'swap'
      }
    },
    {
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: path.resolve(__dirname, 'src/pages'),
				ignore: ['**/sections/*', '**/options/*', '**/elements/*'],
			},
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, 'src/assets/images'),
      },
    },
    {
			resolve: 'gatsby-plugin-resolve-src',
			options: {
				srcPath: path.resolve(__dirname, 'src'),
			},
		},
  ]
};