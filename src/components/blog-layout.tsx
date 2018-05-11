import React from "react"
import Navbar from "./navbar"
import Column from "./column"
import PageTitle from "./page-title"
import Paragraph from "./paragraph"

const BlogLayout = ({ children }) => (
  <div>
    <Navbar />
    <Column spacing="1rem">
      <PageTitle>Blog.</PageTitle>
      <Paragraph>
        Musings on <em>tech</em>, <em>leadership</em>, <em>culture</em> and
        anything inbetween.
      </Paragraph>

      <div>{children}</div>
    </Column>
  </div>
)

export default BlogLayout
