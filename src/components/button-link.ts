import Link from "gatsby-link"
import { darken, saturate } from "polished"
import styled, { css } from "styled-components"

const ButtonLink = styled(Link)`
  display: block;
  font-weight: bold;
  padding: 1.4rem 2rem;
  outline: none;
  ${({ bg = "#333" }: { bg: string }) => css`
    background: ${bg};
    transition: background-color 200ms ease-in-out;

    &:hover,
    &:focus {
      background: ${saturate(0.4, bg)};
    }

    &:focus {
      box-shadow: #33333333 1px 4px 0;
    }

    &:active {
      background: ${darken(0.1, bg)};
    }
  `};

  color: ${({ fg = "white" }: { fg: string }) => fg};
  text-decoration: none;
  text-align: center;
`

export default ButtonLink