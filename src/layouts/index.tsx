import React from "react"

import Helmet from "react-helmet"
import styled from "styled-components"

import "./main.css"

const App = styled.main`
  max-width: 550px;
  padding: 1.5rem;
  margin: 0 auto;

  a {
    color: #2d9cdb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Layout: React.SFC<ILayoutProps> = ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>Daniel Ström</title>
      <meta name="description" content="I'm Daniel, a web developer, and this is where I write about thoughts I've had or things I've done." />
      <meta name="keywords" content="blog, tech, programming, software development, culture, leadership, coaching" />
    </Helmet>

    <App>
      <section>{children()}</section>
    </App>
  </div>
)

export default Layout

interface ILayoutProps {
  children: () => JSX.Element
}
