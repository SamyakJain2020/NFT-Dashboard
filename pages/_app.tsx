import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import './app.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MoralisProvider
     appId="94wxzdawRJag36V1yRzl0gFElmWVTXB3FnyJpSxe"
    serverUrl="https://mcwdg3fsxlbu.usemoralis.com:2053/server"
  >
   <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp
