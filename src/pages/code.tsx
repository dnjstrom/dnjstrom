import React from "react"
import Navbar from "../components/navbar"
import Column from "../components/column"
import PageTitle from "../components/page-title"
import Paragraph from "../components/paragraph"

const CodePage = ({}) => (
  <div>
    <Navbar />
    <Column spacing="1rem">
      <PageTitle>Code.</PageTitle>
      <Paragraph>
        Things I’ve <em>built</em> that I feel is neat in some way.
      </Paragraph>
      <Paragraph>
        This section is currently <em>under construction</em>. Do check back in
        a while!
      </Paragraph>
    </Column>
  </div>
)

export default CodePage
