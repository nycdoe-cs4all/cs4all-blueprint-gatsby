const { graphql } = require('gatsby')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/post-template.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    {
        allWordpressPost {
        edges {
            node {
            id
            slug
            title
            content
            date
            }
        }
        }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allWordpressPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
          title: `${edge.node.title}`,
          content: `${edge.node.content}`,
          id: `${edge.node.id}`,
          date: `${edge.node.date}`
        },
      })
    })
  })
}
