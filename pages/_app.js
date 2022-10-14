import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const themeSettings = {}
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif'
  const FONT_FAMILY_CODE = '"Source Code Pro", monospace'

  return (
    <>
      <Head>
        <title>NKA Portofolio</title>
      </Head>
      <ArwesThemeProvider themeSettings={themeSettings}>
        <StylesBaseline
          styles={{
            "html, body": { fontFamily: FONT_FAMILY_ROOT },
            "code, pre": { fontFamily: FONT_FAMILY_CODE },
          }}
        />
        <Component {...pageProps} />
      </ArwesThemeProvider>
    </>
  )
}

export default MyApp
