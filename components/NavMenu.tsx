import React, { useEffect, useState } from 'react'
import { AnimatorGeneralProvider, Animator } from "@arwes/animation"
import { FrameUnderline, Text } from "@arwes/core"
import { createTheme } from "@arwes/design"

type Props = {}

const NavMenu = (props: Props) => {
    const [activate, setActivate] = useState(true)
    const animatorGeneral = { duration: { enter: 200, exit: 200 } };
  
  return (
    <>
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <FrameUnderline>
            <div style={{ width: 200, height: 50 }} />
          </FrameUnderline>
        </AnimatorGeneralProvider>
    </>
  )
}

export default NavMenu
