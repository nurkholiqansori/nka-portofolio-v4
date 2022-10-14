import React, { useEffect, useState } from 'react'
import { AnimatorGeneralProvider, Animator } from "@arwes/animation"
import { FrameUnderline, Text, List } from "@arwes/core"
import { createTheme } from "@arwes/design"
import styled from "styled-components"
import { useHeading } from '../utils/useHeading'

type Props = {}

const NavMenu = (props: Props) => {
    const [activate, setActivate] = useState(true)
    const animatorGeneral = { duration: { enter: 200, exit: 200 } };

    const headings = useHeading()

    console.log(headings)
  
  return (
    <>
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <FrameUnderline>
          {/* <div style={{ width: 200, height: 50 }} /> */}
          <ul style={{ listStyle: "none" }} className="marker:content-[''] -ml-7">
            {headings.map(
              (heading: { id: string; text: string }, i: number) => (
                // <List key={i}>
                //   <li>
                //     <a href={`#${heading.id}`}>
                //       <Text>{heading.text}</Text>
                //     </a>
                //   </li>
                // </List>

                <li style={{ listStyle: "none" }}>
                  <a href={`#${heading.id}`}>
                    <Text>{heading.text}</Text>
                  </a>
                </li>
              ),
            )}
          </ul>
        </FrameUnderline>
      </AnimatorGeneralProvider>
    </>
  )
}

export default NavMenu
