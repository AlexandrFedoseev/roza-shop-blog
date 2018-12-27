module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/site/content/`,
                name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-yaml`,
    ],
}
