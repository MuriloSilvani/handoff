import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from './types'

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.neutral[90]};
    color: ${({ theme }) => theme.colors.neutral.white};
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    margin: 0;
  }

  ol, ul {
    list-style: none;
  }

  p {
    margin: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    max-width: 100%;
  }
`
