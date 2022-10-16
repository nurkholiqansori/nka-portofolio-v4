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

type AppType = {
  allPosts: PostType[]
}

function App({ allPosts }: AppType) {
  return (
    <>
      <Layout>
        {/* 1 */}
        <main
          className={css({
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Home />
        </main>

        {/* 2 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="description">Description</TitleComponents>
          <DescriptionPage />
        </main>

        {/* 3 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="portofolio-wp">
            Portofolio WordPress
          </TitleComponents>
          <PortofolioPage />
        </main>

        {/* 4 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="portofolio">Portofolio</TitleComponents>
          <PrivateProjectPage />
        </main>

        {/* 5 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="certificate">Certificate</TitleComponents>
          <CertificatePage />
        </main>

        {/* 6 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="blog">Blog</TitleComponents>
          <BlogPage allPosts={allPosts} />
        </main>
      </Layout>
    </>
  )
}

export default App

export const getStaticProps = async() => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {
      allPosts
    }
  }
}
