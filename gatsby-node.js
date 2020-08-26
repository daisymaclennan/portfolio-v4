exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)
  
    const projectResult = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {fileAbsolutePath: {regex: "/projects/"}}
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (projectResult.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    projectResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: projectTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })

    const postTemplate = require.resolve(`./src/templates/postTemplate.js`)
  
    const postResult = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {fileAbsolutePath: {regex: "/insights/"}}
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (postResult.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    postResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }