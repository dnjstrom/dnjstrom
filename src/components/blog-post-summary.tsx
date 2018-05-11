import React, { SFC } from "react"
import Img from "gatsby-image"
import Link from "./link"

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
}) =>
  console.log(image) || (
    <article>
      <Img title={title} alt={title} sizes={image.sizes} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{tags}</p>
      <p>{excerpt}</p>
      <Link to={path}>Read more</Link>
    </article>
  )

export default BlogPostSummary
