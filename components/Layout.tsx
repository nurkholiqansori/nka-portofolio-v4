import React from 'react'
import allIcons from "simple-icons"
import { motion } from "framer-motion"
import { css } from "@emotion/css"
import { createTheme } from "@arwes/design"
import NavMenu from './NavMenu'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {

  const theme = createTheme()

  const icon = {
    hidden: {
      opacity: 0,
      // pathLength: 0,
      fill: "rgba(0, 248, 248, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 248, 248, .2)",
    },
  }

  const iconSlugs = [
    { title: "github", link: "https://github.com/nurkholiqansori" },
    { title: "linkedin", link: "https://www.linkedin.com/in/nurkholiqansori" },
    { title: "sololearn", link: "https://www.sololearn.com/profile/3200321" },
  ]

  return (
    <>
      <div
        className={css({
          position: "fixed",
          top: 50,
          left: 50,
          display: "flex",
          gap: "10px",
        })}
      >
        {iconSlugs.map((slug: { title: string; link: string }, i: number) => {
          const data = allIcons.Get(slug?.title)

          return (
            <a
              href={slug.link}
              title={slug?.title}
              rel="noopener"
              target="_blank"
            >
              <div
                key={i}
                className={css({
                  padding: "5px 10px",
                  cursor: "pointer",

                  "&:hover path": {
                    fill: "rgba(0, 248, 248, 1)",
                    transition: "all .5s linear",
                  },
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={css({
                    width: "2rem",
                    overflow: "visible",
                  })}
                >
                  <motion.path
                    d={data?.path}
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      default: { duration: 3, ease: "easeInOut" },
                      pathLength: { duration: 8, ease: "easeInOut" },
                    }}
                  />
                </svg>
              </div>
            </a>
          )
        })}
      </div>
      <div>{children}</div>
      <div
        className={css({
          position: "fixed",
          bottom: 60,
          left: 60,
          display: "flex",
          gap: "10px",
        })}
      >
        <NavMenu />
      </div>
    </>
  )
}

export default Layout
