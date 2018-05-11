import styled, { keyframes } from "styled-components"

const wiggle = keyframes`
  from {
    transform: rotate(-3deg);
  }

  to {
    transform: rotate(3deg);
  }
`

const PageTitle = styled.h1`
  line-height: 6rem;
  font-size: 6rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  transform-origin: center;
  ${({ animate = false }) =>
    animate &&
    `
      animation: ${wiggle} 100ms alternate;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 5;
    `};
`

export default PageTitle
