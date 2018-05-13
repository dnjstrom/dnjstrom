import React from "react"

import ButtonLink from "../components/button-link"
import Column from "../components/column"
import PageTitle from "../components/page-title"
import Paragraph from "../components/paragraph"
import Row from "../components/row"
import LinkedinIcon from "../components/linkedin-icon"
import TwitterIcon from "../components/twitter-icon"
import GithubIcon from "../components/github-icon"

const IndexPage = () => (
  <Column spacing="1.5rem">
    <PageTitle animate>Hello.</PageTitle>
    <Paragraph>
      I'm <em>Daniel</em>, a web developer, and this is where I write about{" "}
      <em>thoughts</em> I've had or <em>things</em> I've done.
    </Paragraph>

    <Column spacing=".5rem">
      <ButtonLink to="/about" bg="#F2C94C">
        About
      </ButtonLink>
      <ButtonLink to="/blog" bg="#2D9CDB">
        Blog
      </ButtonLink>
      <ButtonLink to="/code" bg="#27AE60">
        Code
      </ButtonLink>
    </Column>

    <Row>
      <LinkedinIcon />
      <TwitterIcon />
      <GithubIcon />
    </Row>
  </Column>
)

export default IndexPage
