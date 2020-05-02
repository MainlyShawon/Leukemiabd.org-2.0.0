module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leukemiabd.org`,
        short_name: `Leukemia Bangladesh`,
        start_url: `/`,
        icon: `src/images/LOGO.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
