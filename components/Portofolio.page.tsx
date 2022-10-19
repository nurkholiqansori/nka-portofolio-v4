import { Button, Card, Text } from "@arwes/core"
import { data } from "../api/data"
import { motion } from "framer-motion"
import Total from "./Total"

type Props = {
  screen: boolean
}

const PortofolioPage = ({ screen }: Props) => {
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
      <div className="flex overflow-x-scroll max-w-7xl mx-auto space-x-4 pb-5 snap-x">
        {data.experience.map((project, i) => (
          <Card
            image={{ src: project.img, alt: project.com }}
            // style={{
            //   minWidth: screen ? 400 : "100%",
            //   scrollSnapAlign: "center",
            // }}
            className="min-w-full md:min-w-[400px] snap-center opacity-40 hover:opacity-100"
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
