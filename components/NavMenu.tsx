import { useState } from "react"
import { AnimatorGeneralProvider, Animator } from "@arwes/animation"
import { FrameUnderline, Text, List } from "@arwes/core"
import { useHeading } from "../utils/useHeading"

type Props = {}

const NavMenu = (props: Props) => {
  const animatorGeneral = { duration: { enter: 200, exit: 200 } }

  const headings = useHeading()

  return (
    <>
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <FrameUnderline>
          <ul
            style={{ listStyle: "none" }}
            // className="marker:content-[''] -ml-7"
          >
            {/* <List key={i}> */}
            {headings.map(
              (heading: { id: string; text: string }, i: number) => (
                //   <li>
                //     <a href={`#${heading.id}`}>
                //       <Text>{heading.text}</Text>
                //     </a>
                //   </li>

                <li style={{ listStyle: "none" }}>
                  <a href={`#${heading.id}`}>
                    <Text>{heading.text}</Text>
                  </a>
                </li>
              ),
            )}
            {/* </List> */}
          </ul>
        </FrameUnderline>
      </AnimatorGeneralProvider>
    </>
  )
}

export default NavMenu
