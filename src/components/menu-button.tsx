import React from "react"
import styled from "styled-components"

const Button = styled.button`
  border: 0;
  background: none;
  padding: none;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  outline: none;

  &:focus {
    background: #eee;
  }
`

const MenuButton = props => (
  <Button {...props}>
    <svg
      width="4"
      height="18"
      viewBox="0 0 4 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 6, height: 27 }}
    >
      <g id="Group 3">
        <rect id="Rectangle" width="4" height="4" fill="#F2C94C" />
        <rect
          id="Rectangle_2"
          width="4"
          height="4"
          transform="translate(0 6.85715)"
          fill="#2D9CDB"
        />
        <rect
          id="Rectangle_3"
          width="4"
          height="4"
          transform="translate(0 13.7143)"
          fill="#27AE60"
        />
      </g>
    </svg>
  </Button>
)

export default MenuButton
