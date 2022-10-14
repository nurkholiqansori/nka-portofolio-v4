import { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
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
import { useHeading } from "../utils/useHeading"

function App() {
  const onEnter = (node) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      },
    )
  }
  const onExit = (node) => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2,
        },
      },
    )
  }

  const headings = useHeading()

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
          <CSSTransition
            in={true}
            timeout={1200}
            classNames="page"
            onExit={onExit}
            onEntering={onEnter}
            unmountOnExit
          >
            <Home />
          </CSSTransition>
        </main>

        {/* 2 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="description">Description</TitleComponents>
          <CSSTransition
            in={true}
            timeout={1200}
            classNames="page"
            onExit={onExit}
            onEntering={onEnter}
            unmountOnExit
          >
            <DescriptionPage />
          </CSSTransition>
        </main>

        {/* 3 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="portofolio-wp">Portofolio WordPress</TitleComponents>
          <CSSTransition
            in={true}
            timeout={1200}
            classNames="page"
            onExit={onExit}
            onEntering={onEnter}
            unmountOnExit
          >
            <PortofolioPage />
          </CSSTransition>
        </main>

        {/* 4 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="portofolio">Portofolio</TitleComponents>
          <CSSTransition
            in={true}
            timeout={1200}
            classNames="page"
            onExit={onExit}
            onEntering={onEnter}
            unmountOnExit
          >
            <PrivateProjectPage />
          </CSSTransition>
        </main>

        {/* 5 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="certificate">Certificate</TitleComponents>
          <CSSTransition
            in={true}
            timeout={1200}
            classNames="page"
            onExit={onExit}
            onEntering={onEnter}
            unmountOnExit
          >
            <CertificatePage />
          </CSSTransition>
        </main>

        {/* 6 */}
        <main className="min-h-screen pt-20 px-10">
          <TitleComponents id="blog">Blog</TitleComponents>
          <CSSTransition
            in={true}
            timeout={1200}
            classNames="page"
            onExit={onExit}
            onEntering={onEnter}
            unmountOnExit
          >
            <BlogPage />
          </CSSTransition>
        </main>
      </Layout>
    </>
  )
}

export default App
