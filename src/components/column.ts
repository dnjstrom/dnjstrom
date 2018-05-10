import styled, { css } from "styled-components"

const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${({ spacing = "0.5rem" }: { spacing: string }) => css`
    & > * {
      margin-top: ${spacing} !important;
      margin-bottom: ${spacing} !important;

      &:first-child {
        margin-top: 0 !important;
      }

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  `};
`

export default Column
