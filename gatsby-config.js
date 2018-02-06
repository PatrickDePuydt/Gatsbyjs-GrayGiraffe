module.exports = {
  siteMetadata: {
	name: `Pat DePuydt`,
  tagline: `Just a Front-End Dev Trying to Make it`,
  current_role: `Front-End Developer at`,
  current_company: `ID.me`,
  dev_skills: `The usual suspects: HTML5/CSS3 (Scss/LESS) with a penchant for Web Animations(CSS3 & Snap SVG), plain ol' ES6 and good ol' jQuery. Productivty boosters via Bash/Shell Scripting. Project Management through Git/Github/Jira. Fancy OOP Frameworks: Gatsby.js/React (plus a little Redux). Chores with Grunt/Gulp/Webpack.`,
  design_skills: `Adobe Creative Suite (All of them), Sketch, inVISION`,
  email: `prdepuydt@gmail.com`,
  media: ``,
  phone: `505.917.5971`,
  github: `github.com/patrickdepuydt`,
  linkedin: `linkedin.com/in/patrickdepuydt`
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