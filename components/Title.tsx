import React, { useEffect, useState } from "react"
import { gsap } from "gsap"
import { css } from "@emotion/css"
import { AnimatorGeneralProvider, Animator } from "@arwes/animation"
import { FrameLines, Text } from "@arwes/core"
import { createTheme } from "@arwes/design"

const Title = ({
  lineContent,
  lineContent2,
}: {
  lineContent: string
  lineContent2: string
}) => {
  const theme = createTheme()
  const [activate, setActivate] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), activate ? 10000 : 5000)
    return () => clearTimeout(timeout)
  }, [activate])
  const animatorGeneral = { duration: { enter: 200, exit: 500 } }

  return (
    <>
      <AnimatorGeneralProvider animator={animatorGeneral}>
        {/* <FrameLines> */}
        <Animator
          animator={{
            activate,
            manager: "stagger",
            combine: true,
            duration: { stagger: 50 },
          }}
        >
          <Text as="h1" className={css({ textAlign: "center" })}>
            {lineContent}
          </Text>{" "}
          <Text
            as="h1"
            className={css({
              textAlign: "center",
              color: theme.palette.secondary.main,
            })}
          >
            {lineContent2}
          </Text>
        </Animator>
        {/* </FrameLines> */}
      </AnimatorGeneralProvider>
    </>
  )
}

export default Title
