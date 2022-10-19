import { Button, Card, Text } from '@arwes/core'
import { css } from '@emotion/css'
import { data } from '../api/data'
import { motion } from "framer-motion"
import Total from './Total'

type Props = {
  screen: boolean
}

const PrivateProjectPage = ({ screen }: Props) => {
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
        {data.personalProjects.map((project, i) => (
          <Card
            image={{ src: project.img, alt: project.title }}
            // style={{
            //   minWidth: screen ? 400 : "100%",
            //   scrollSnapAlign: "center",
            // }}
            className="min-w-full md:min-w-[400px] snap-center opacity-40 hover:opacity-100"
            title={
              project?.title.length > 30
                ? project?.title.slice(0, 30) + "..."
                : project?.title
            }
            key={i}
            options={
              <a
                href={project.address}
                title={project.title}
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
              <Text>Develop at {project.date}</Text>
              <br />
              <Text>Build with:</Text>
              <br />
              <div className="flex gap-5 flex-wrap mt-1">
                {project.build.map((build, i) => (
                  <div key={i} title={build.name.title}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={css({
                        width: "1.5rem",
                        overflow: "visible",
                      })}
                    >
                      <motion.path
                        d={build.name.path}
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
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Total>{`Total ${data.personalProjects.length}`}</Total>
    </>
  )
}

export default PrivateProjectPage
