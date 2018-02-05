module.exports = {
  siteMetadata: {
	title: `Pat DePuydt`,
	},
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};