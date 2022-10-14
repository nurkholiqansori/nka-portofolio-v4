import { Button, Card, Text } from "@arwes/core"
import { css } from "@emotion/css"
import { data } from "../api/data"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

type Props = {}

const PortofolioPage = (props: Props) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 248, 248, 1)",
    },
  }

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: "640px",
  })

  return (
    <>
      <div className="flex overflow-x-scroll max-w-7xl mx-auto space-x-4 pb-5 snap-x">
        {data.experience.map((project, i) => (
          <Card
            image={{ src: project.img, alt: project.com }}
            style={{
              minWidth: isDesktopOrLaptop ? 400 : "100%",
              scrollSnapAlign: "center",
            }}
            title={project?.com}
            key={i}
            options={
              <a
                href={project.address}
                title={project.com}
                rel="noopener norefferer"
                target="_blank"
              >
                <Button palette="secondary">
                  <Text>Visit</Text>
                </Button>
              </a>
            }
          >
            <div className="h-32">
              <Text as="p">Develop at {project.date}</Text>
              <br />
              <Text>Build with:</Text>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={css({
                  width: "1rem",
                  overflow: "visible",
                })}
              >
                <motion.path
                  d={project.build.path}
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
          </Card>
        ))}
      </div>
    </>
  )
}

export default PortofolioPage
