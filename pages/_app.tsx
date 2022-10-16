import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import { NextSeo } from "next-seo"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const themeSettings = {}
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif'
  const FONT_FAMILY_CODE = '"Source Code Pro", monospace'

  return (
    <>
      <NextSeo
        title="Portofolio of Nur Kholiq Ansori"
        description="My Name is Nur Kholiq Ansori, I'm a Computer Science who likes Javascript Framework"
        openGraph={{
          title: "Portofolio of Nur Kholiq Ansori",
          description:
            "My Name is Nur Kholiq Ansori, I'm a Computer Science who likes Javascript Framework",
          images: [
            {
              url: "/logo.png",
              width: 800,
              height: 600,
              alt: "Logo Nur Kholiq Ansori",
              type: "image/png",
            },
          ],
          site_name: "Portofolio of Nur Kholiq Ansori",
        }}
        additionalMetaTags={[
          {
            name: "application-name",
            content: "My Personal Web Page",
          },
          {
            name: "theme-color",
            content: "#000000",
          },
          {
            name: "google-site-verification",
            content: "LDQrI76atKuVJOouskURaOJiGk6tBm6aNAzLaFn05iI",
          },
          {
            name: "keywords",
            content:
              "Nur Kholiq Ansori, nur, kholiq, ansori, personal web page, personal website",
          },
          {
            name: "author",
            content: "Nur Kholiq Ansori",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/logo.png",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
        robotsProps={{
          noimageindex: true,
        }}
      />
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
