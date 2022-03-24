import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/Global'

import { Light } from '../themes/Light'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
