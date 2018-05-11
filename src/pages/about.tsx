import React from "react"
import Img from "gatsby-image"

import Column from "../components/column"
import PageTitle from "../components/page-title"
import Paragraph from "../components/paragraph"
import Row from "../components/row"
import LinkedinIcon from "../components/linkedin-icon"
import TwitterIcon from "../components/twitter-icon"
import GithubIcon from "../components/github-icon"
import Navbar from "../components/navbar"

const AboutPage = ({ data }) => (
  <div>
    <Navbar />
    <Column spacing="1rem">
      <PageTitle>About.</PageTitle>

      <Img
        title="An image of me, Daniel"
        alt="An image of me, Daniel"
        sizes={data.imgAvatar.sizes}
      />

      <Paragraph>
        My full name is <em>Daniel</em>{" "}
        <em style={{ fontSize: "1.2rem" }}>Nils Johan</em> <em>Ström</em> (hence
        dnjstrom) and I’m a software engineer and UX designer based out of
        Uppsala, Sweden. The past years I’ve worked a lot with full stack web
        development using React and Node but enjoy pretty much any topic related
        to software production.
      </Paragraph>

      <Paragraph>
        If you’d like to get in contact you can find me on any of the below
        sites:
      </Paragraph>

      <Row>
        <LinkedinIcon />
        <TwitterIcon />
        <GithubIcon />
      </Row>
    </Column>
  </div>
)

export default AboutPage

export const pageQuery = graphql`
  query AvatarImageQuery {
    imgAvatar: imageSharp(id: { regex: "/avatar/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
