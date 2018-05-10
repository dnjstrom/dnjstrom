import styled, { css } from "styled-components"

const Row = styled.div`
  display: flex;
  justify-content: space-around;

  ${({ spacing = "0.5rem" }: { spacing: string }) => css`
    & > * {
      margin-left: ${spacing} !important;
      margin-right: ${spacing} !important;

      &:first-child {
        margin-left: 0 !important;
      }

      &:last-child {
        margin-right: 0 !important;
      }
    }
  `};
`

export default Row
