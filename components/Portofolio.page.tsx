import { Button, Card, Text } from "@arwes/core"
import { css } from "@emotion/css"
import { data } from "../api/data"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import Total from "./Total"

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
            <div className="h-24">
              <Text as="p">Develop at {project.date}</Text>
            </div>
          </Card>
        ))}
      </div>
      <Total>{`Total ${data.experience.length}`}</Total>
    </>
  )
}

export default PortofolioPage
