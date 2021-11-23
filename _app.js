import '../styles/globals.css'
import * as React from "react"

// 1. imported the `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

function App({ Component }) {
 
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp



