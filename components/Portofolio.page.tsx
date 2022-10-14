import { Button, Card, Text } from "@arwes/core"
import { css } from "@emotion/css"
import { data } from "../api/data"
import { motion } from "framer-motion"

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

  return (
    <>
      <div
        className={css({
          display: "flex",
          gap: "30px",
          // maxWidth: "90vw",
          maxHeight: "600px",
          overflowX: "scroll",
          // overflowY: "visible",
          margin: "0rem 5rem",
          // padding: "1rem"
        })}
      >
        {data.experience.map((project, i) => (
          <Card
            image={{ src: project.img, alt: project.com }}
            // style={{ minWidth: "35%", paddingBottom: "-200px" }}
            className={css({
              minWidth: "40%",
              overflow: "visible",
              height: "500px",
            })}
            title={
              project?.com.length > 30
                ? project?.com.slice(0, 30) + "..."
                : project?.com
            }
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
            <>
              <Text>Develop at {project.date}</Text>
              <br />
              <Text>Build with:</Text>
              <br/>
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
            </>
          </Card>
        ))}
      </div>
    </>
  )
}

export default PortofolioPage
