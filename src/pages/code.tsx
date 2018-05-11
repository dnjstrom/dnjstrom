import React from "react"

import styled from "styled-components"
import Link from "../components/link"

const Headline = styled.h1`
  font-size: 30px;
`

const Paragraph = styled.p`
  font-size: 16px;
`

const Tiles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  & > * {
    width: 300px;
  }
`

const Playground = () => (
  <div>
    <Headline>Playground</Headline>
    <Paragraph>
      Here you'll be able to see a sample of experiments of varying quality.
    </Paragraph>

    <Tiles>
      <div
        label="Project"
        thumbnail="https://placekitten.com/300/300"
        heading="LMVL"
        link={
          <Link to="http://laboratoriemedicinvastmanland.se/#!/">LMVL</Link>
        }
      >
        Some text here
      </div>
    </Tiles>
  </div>
)

export default Playground
