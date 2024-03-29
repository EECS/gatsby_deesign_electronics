const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    const smpsPost = path.resolve(`./src/templates/smps-post.js`)
    return graphql(
      `
        {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            fullTitle
                            seoTitle
                            date
                        }
                    }
                }
            }
        }
      `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create blog posts pages.
      const posts = result.data.allMdx.edges
  
      posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
  
        createPage({
          path: post.node.fields.slug,
          component: smpsPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    })
  }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}