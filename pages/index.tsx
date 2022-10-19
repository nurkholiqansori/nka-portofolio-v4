import { gsap } from "gsap"
import Home from "../components/Home.page"
import { css } from "@emotion/css"
import DescriptionPage from "../components/Description.page"
import PortofolioPage from "../components/Portofolio.page"
import PrivateProjectPage from "../components/PrivateProject.page"
import CertificatePage from "../components/Certificate.page"
import BlogPage from "../components/Blog.page"
import Layout from "../components/Layout"
import TitleComponents from "../components/TitleComponents"
import { getAllPosts } from "../lib/api"
import PostType from "../interfaces/posts"
import { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react"

type AppType = {
  allPosts: PostType[]
}


function App({ allPosts }: AppType) {
  const [screen, setScreen] = useState<boolean>(true)
  
  const isDesktopOrLaptop = useMediaQuery({
    minWidth: "768px",
  })
  useEffect(() => {
    setScreen(isDesktopOrLaptop)
  }, [isDesktopOrLaptop])
  return (
    <>
      <Layout>
        {/* 1 */}
        <section className="h-screen flex flex-col justify-center items-center snap-center">
          <Home />
        </section>

        {/* 2 */}
        <section className="min-h-screen pt-20 px-10 snap-center relative">
          <TitleComponents id="description">Description</TitleComponents>
          <DescriptionPage screen={screen} />
        </section>

        {/* 3 */}
        <section className="min-h-screen pt-20 px-10 relative">
          <TitleComponents id="portofolio-wp">
            Portofolio WordPress
          </TitleComponents>
          <PortofolioPage screen={screen} />
        </section>

        {/* 4 */}
        <section className="min-h-screen pt-20 px-10 relative">
          <TitleComponents id="portofolio">Portofolio</TitleComponents>
          <PrivateProjectPage screen={screen} />
        </section>

        {/* 5 */}
        <section className="min-h-screen pt-20 px-10 relative">
          <TitleComponents id="certificate">Certificate</TitleComponents>
          <CertificatePage screen={screen} />
        </section>

        {/* 6 */}
        <section className="min-h-screen pt-20 px-10 relative">
          <TitleComponents id="blog">Blog</TitleComponents>
          <BlogPage screen={screen} allPosts={allPosts} />
        </section>
      </Layout>
    </>
  )
}

export default App

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ])

  return {
    props: {
      allPosts,
    },
  }
}
