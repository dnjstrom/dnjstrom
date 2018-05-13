import React, { SFC } from "react"
import Img from "gatsby-image"
import Link from "./link"
import styled from "styled-components"

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 1rem;
`
const Date = styled.p`
  margin: 0;
  font-style: italic;
`

const Tags = styled.p`
  margin: 0;
  margin-bottom: 1rem;
`

const Excerpt = styled.p`
  margin: 1rem 0;
`

interface IBlogPostSummary {
  image?: any
  title: string
  excerpt: string
  tags: string
  path: string
  date: string
}

const BlogPostSummary: SFC<IBlogPostSummary> = ({
  image,
  title,
  excerpt,
  tags,
  path,
  date,
}) => (
  <article>
    <Link to={path}>
      <Title>{title}</Title>
    </Link>
    <Date>{date}</Date>
    <Tags>{tags}</Tags>
    <Link to={path}>
      <Img title={title} alt={title} sizes={image.sizes} />
    </Link>
    <Excerpt>{excerpt}</Excerpt>
    <Link to={path}>Read more</Link>
  </article>
)

export default BlogPostSummary
