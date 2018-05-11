import React from "react"

import Helmet from "react-helmet"
import styled from "styled-components"

import "./main.css"

const App = styled.main`
  margin: 1.5rem;

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
      <title>Daniel Ström</title>
      <meta name="description" content="Sample" />
      <meta name="keywords" content="sample, something" />
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
