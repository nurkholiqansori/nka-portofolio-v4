import { useRef } from "react"
import { AnimatorGeneralProvider } from "@arwes/animation"
import { FrameUnderline, Text, List } from "@arwes/core"
import { useHeading } from "../utils/useHeading"
// import { motion } from "framer-motion"
import { Tween } from "react-gsap"

type Props = {}

const NavMenu = (props: Props) => {
  const svgRef = useRef(null)
  const animatorGeneral = { duration: { enter: 200, exit: 200 } }

  const headings = useHeading()

  return (
    <>
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <FrameUnderline>
          <div className="m-5">
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 574 260.406"
              className="w-52"
            >
              <Tween
                from={{
                  svgDraw: 0,
                }}
                to={{
                  svgDraw: 1,
                }}
                duration={3}
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#7efcf6",
                    strokeWidth: "2px",
                    fillRule: "evenodd",
                  }}
                  d="M230.665,151.37l0.67-.741,285,256.627-0.67.741ZM516.25,152L659,279.812,516.25,407.626H230.75L88,279.812,230.75,152h285.5Zm-1.435,1.294,0.669,0.741L375.479,279.954l-0.669-.742ZM373,279.812h1V408.625h-1V279.812Zm285-.5-0.008,1-139-1,0.008-1Z"
                  transform="translate(-86.5 -149.219)"
                />
              </Tween>
            </svg>
          </div>

          {/* <List key={i}> */}
          {headings.map((heading: { id: string; text: string }, i: number) => (
            <ul
              style={{ listStyle: "none" }}
              // className="marker:content-[''] -ml-7"
            >
              {/* //   <li>
                //     <a href={`#${heading.id}`}>
                //       <Text>{heading.text}</Text>
                //     </a>
                //   </li> */}

              <li style={{ marginBottom: -10 }}>
                <a href={`#${heading.id}`}>
                  <Text>{heading.text}</Text>
                </a>
              </li>
            </ul>
          ))}
          {/* </List> */}
        </FrameUnderline>
      </AnimatorGeneralProvider>
    </>
  )
}

export default NavMenu
