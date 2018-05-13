import React, { SFC } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Link from "gatsby-link"

const Container = styled.div`
  display: flex;
  margin: 2rem 0;
  background: #fafafa;
  border: 1px solid #eee;
  padding: 1rem;
  align-items: center;
`

const Image = styled.div`
  width: 30%;
  flex-shrink: 0;
  margin-right: 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.4rem solid white;
  /* cursor: pointer; */
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.h4`
  margin: 0;
  font-size: 1.3rem;
  /* cursor: pointer; */
`

const Description = styled.p`
  margin: 0;
  margin-top: 0.5rem;
`

interface IAuthorBox {
  name: string
  description: string
  image: any
}

const AuthorBox: SFC<IAuthorBox> = ({ name, description, image }) => (
  <Container>
    <Image>
      <Link to="/about">
        <Img sizes={image.sizes} />
      </Link>
    </Image>
    <Text>
      <Link to="/about">
        <Name>{name}</Name>
      </Link>
      <Description>{description}</Description>
    </Text>
  </Container>
)

export default AuthorBox
