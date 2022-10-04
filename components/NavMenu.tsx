import React, { useEffect, useState } from 'react'
import { AnimatorGeneralProvider, Animator } from "@arwes/animation"
import { FrameUnderline, Text, List } from "@arwes/core"
import { createTheme } from "@arwes/design"
import styled from "styled-components"

type Props = {}

const NavMenu = (props: Props) => {
    const [activate, setActivate] = useState(true)
    const animatorGeneral = { duration: { enter: 200, exit: 200 } };
  
  return (
    <>
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <FrameUnderline>
          {/* <div style={{ width: 200, height: 50 }} /> */}
          <List>
            <li>
              <Text>Lorem ipsum lov sit amet.</Text>
            </li>
            <li>
              <Text>Lorem ipsum lov sit amet.</Text>
            </li>
            <li>
              <Text>Lorem ipsum lov sit amet.</Text>
              <List>
                <li>
                  <Text>Lorem ipsum lov sit amet.</Text>
                </li>
                <li>
                  <Text>Lorem ipsum lov sit amet.</Text>
                </li>
                <li>
                  <Text>Lorem ipsum lov sit amet.</Text>
                </li>
              </List>
            </li>
            <li>
              <Text>Lorem ipsum lov sit amet.</Text>
            </li>
          </List>
        </FrameUnderline>
      </AnimatorGeneralProvider>
    </>
  )
}

export default NavMenu
