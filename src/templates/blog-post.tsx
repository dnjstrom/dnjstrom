import React from "react"
import Helmet from "react-helmet"
import "prismjs/themes/prism-solarizedlight.css"
import Img from "gatsby-image"
import BlogLayout from "../components/blog-layout"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <BlogLayout>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <article>
        <Img sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover_image {
          publicURL
          childImageSharp {
            sizes(maxWidth: 1024) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
