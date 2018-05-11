import React from "react"
import Column from "./column"
import styled, { css } from "styled-components"
import ButtonLink from "./button-link"
import MenuButton from "./menu-button"

const marginOffset = "1.5rem"

const Container = styled.div`
  position: relative;
  z-index: 500;
  margin-top: -${marginOffset};
  margin-left: -${marginOffset};
  margin-right: -${marginOffset};
`

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: white;
  z-index: 1;
`

const MenuContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1.5rem ${marginOffset};
  padding-top: 0;
  box-shadow: #33333333 0 6px 0;
  z-index: -1;
  transform: translateY(-6px);
  transition: transform 300ms ease-in-out;
  ${({ isOpen = false }: { isOpen: boolean }) =>
    isOpen &&
    css`
      transform: translateY(100%);
    `};
`

const Menu = ({ isOpen = false, onClick }) => (
  <MenuContainer isOpen={isOpen}>
    <Column>
      <div onClick={onClick}>
        <ButtonLink to="/" fg="#333" bg="white" tabIndex={isOpen ? 0 : -1}>
          Home
        </ButtonLink>
      </div>
      <div onClick={onClick}>
        <ButtonLink to="/about" bg="#F2C94C" tabIndex={isOpen ? 0 : -1}>
          About
        </ButtonLink>
      </div>
      <div onClick={onClick}>
        <ButtonLink to="/blog" bg="#2D9CDB" tabIndex={isOpen ? 0 : -1}>
          Blog
        </ButtonLink>
      </div>
      <div onClick={onClick}>
        <ButtonLink to="/code" bg="#27AE60" tabIndex={isOpen ? 0 : -1}>
          Code
        </ButtonLink>
      </div>
    </Column>
  </MenuContainer>
)

class Navbar extends React.Component {
  public state = {
    isOpen: false,
  }

  public render() {
    return (
      <Container>
        <Bar>
          <MenuButton onClick={this.toggleOpen}>open</MenuButton>
        </Bar>

        <Menu isOpen={this.state.isOpen} onClick={this.toggleOpen} />
      </Container>
    )
  }

  private toggleOpen = () =>
    this.setState(old => ({
      isOpen: !old.isOpen,
    }))
}

export default Navbar
