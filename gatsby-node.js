const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const servicePostTemplate = path.resolve(`src/templates/serviceTemplate.js`);
  const workPostTemplate = path.resolve(`src/templates/worksTemplate.js`);

  function createServicePage(node) {
    createPage({
      path: node.frontmatter.path,
      image: node.frontmatter.image,
      title: node.frontmatter.title,
      info: node.frontmatter.info,
      component: servicePostTemplate,
      context: {},
    })
  }

  function createWorksPage(node) {
    createPage({
      path: node.frontmatter.path,
      image: node.frontmatter.image,
      title: node.frontmatter.title,
      info: node.frontmatter.info,
      component: workPostTemplate,
      context: {},
    })
  }

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___path] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path,
              image,
              title,
              info
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path.indexOf('our-works') !== -1) {
        createWorksPage(node);
      } else {
        createServicePage(node);
      }
    })
  })
}
