import React from "react"
import Helmet from "react-helmet"
import "prismjs/themes/prism-solarizedlight.css"
import Img from "gatsby-image"
import BlogLayout from "../components/blog-layout"
import styled from "styled-components"
import AuthorBox from "../components/author-box"
import Headline from "../components/headline"

const Cover = styled(Img)`
  margin: 0 -1.5rem;
`

export default function Template({ data }) {
  const { markdownRemark: post, imgAvatar } = data
  return (
    <BlogLayout>
      <Helmet>
        <title>{`Daniel - ${post.frontmatter.title}`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <article>
        <Cover sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
        <Headline>{post.frontmatter.title}</Headline>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <AuthorBox
          name="Daniel Ström"
          description="I'm Daniel, a web developer, and this is where I write about thoughts I've had or things I've done."
          image={imgAvatar}
        />
      </article>
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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
    imgAvatar: imageSharp(id: { regex: "/avatar/" }) {
      sizes(
        maxWidth: 1240
        traceSVG: { background: "#fcf3d9", color: "#F2C94C" }
      ) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
