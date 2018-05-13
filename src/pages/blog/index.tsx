import React from "react"
import BlogLayout from "../../components/blog-layout"
import BlogPostSummary from "../../components/blog-post-summary"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <BlogLayout>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <BlogPostSummary
              key={post.id}
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              tags={post.frontmatter.tags}
              image={post.frontmatter.cover_image.childImageSharp}
            />
          )
        })}
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            cover_image {
              publicURL
              childImageSharp {
                sizes(
                  maxWidth: 1024
                  traceSVG: { background: "#dceef9", color: "#2D9CDB" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
