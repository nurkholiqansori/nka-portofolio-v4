import Home from "../components/Home.page"
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
import axios from "axios"
import { format, parseISO } from "date-fns"

type AppType = {
  allPosts: PostType[]
}

function App({ allPosts }: AppType) {
  const [screen, setScreen] = useState<boolean>(true)
  const [lastUpdate, setLastUpdate] = useState<string>("")

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: "768px",
  })
  useEffect(() => {
    setScreen(isDesktopOrLaptop)
  }, [isDesktopOrLaptop])

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/nurkholiqansori/nka-portofolio-v4/branches/master",
      )
      .then((res) => {
        const parseDate = parseISO(res.data?.commit.commit.author.date)

        setLastUpdate(format(parseDate, "LLLL d, yyyy"))
      })
  }, [])

  return (
    <>
      <Layout screen>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll z-0">
          {/* 1 */}
          <section className="h-screen flex flex-col justify-center items-center snap-center">
            <Home />
          </section>

          {/* 2 */}
          <section className="min-h-screen pt-20 px-10 snap-start relative">
            <TitleComponents id="description">Description</TitleComponents>
            <DescriptionPage screen={screen} />
          </section>

          {/* 3 */}
          <section className="min-h-screen pt-20 px-10 relative snap-center">
            <TitleComponents id="portofolio-wp">
              Portofolio WordPress
            </TitleComponents>
            <PortofolioPage screen={screen} />
          </section>

          {/* 4 */}
          <section className="min-h-screen pt-20 px-10 relative snap-center">
            <TitleComponents id="portofolio">Portofolio</TitleComponents>
            <PrivateProjectPage screen={screen} />
          </section>

          {/* 5 */}
          <section className="min-h-screen pt-20 px-10 relative snap-start">
            <TitleComponents id="certificate">Certificate</TitleComponents>
            <CertificatePage screen={screen} />
          </section>

          {/* 6 */}
          <section className="min-h-screen pt-20 px-10 relative snap-start">
            <TitleComponents id="blog">Blog</TitleComponents>
            <BlogPage screen={screen} allPosts={allPosts} />
          </section>

          {/* Last Update */}
          <div className="p-5 mb-16">Last Update at {lastUpdate}</div>
        </div>
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
