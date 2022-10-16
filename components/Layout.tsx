import React from "react"
import { motion } from "framer-motion"
import { css } from "@emotion/css"
import { createTheme } from "@arwes/design"
import NavMenu from "./NavMenu"
import { useMediaQuery } from "react-responsive"
import NavMenuMobile from "./NavMenuMobile"
import { data } from "../api/data"

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

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: "768px",
  })

  return (
    <>
      <div className="fixed md:top-12 top-5 md:left-12 left-5 flex gap-2 z-50">
        {data.socMed.map(
          (
            slug: { title: string; link: string; icon: { path: string } },
            i: number,
          ) => {
            return (
              <a
                key={i}
                href={slug.link}
                title={slug?.title}
                rel="noopener"
                target="_blank"
              >
                <div
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
                      width: isDesktopOrLaptop ? "2rem" : "1.4rem",
                      overflow: "visible",
                    })}
                  >
                    <motion.path
                      d={slug.icon.path}
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
          },
        )}
      </div>
      <div className="mb-10">{children}</div>
      {isDesktopOrLaptop ? (
        <div className="fixed bottom-14 left-14 flex gap-2">
          <NavMenu />
        </div>
      ) : (
        <NavMenuMobile />
      )}
    </>
  )
}

export default Layout
