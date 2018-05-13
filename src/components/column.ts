import styled, { css } from "styled-components"

const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${({ spacing = "1rem" }: { spacing: string }) => css`
    & > * {
      margin-top: 0 !important;
      margin-bottom: ${spacing} !important;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  `};
`

export default Column
