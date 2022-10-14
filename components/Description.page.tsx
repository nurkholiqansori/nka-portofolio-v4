import { AnimatorGeneralProvider } from "@arwes/animation"
import { Card, Text } from "@arwes/core"
import React, { useState, useEffect } from "react"
import { useIntersectionObserver } from "react-intersection-observer-hook"
import { data } from "../api/data"
import tailwindConfig from "../tailwind.config.js"
import resolveConfig from "tailwindcss/resolveConfig"
import { useMediaQuery } from "react-responsive"

const fullConfig = resolveConfig(tailwindConfig)

type Props = {}

const DescriptionPage = (props: Props) => {
  const [activate, setActivate] = useState<boolean>(true)
  const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } }

  const [ref, { entry }] = useIntersectionObserver()
  const isVisible = entry && entry.isIntersecting

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
  }, [isVisible])

  const md = fullConfig.theme.screens

  // console.log(md)

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: "768px",
  })

  return (
    <div className="mx-auto w-full">
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <Card
          image={{
            src: "https://playground.arwes.dev/assets/images/wallpaper.jpg",
            alt: "Profil " + data.myName,
          }}
          landscape={isDesktopOrLaptop}
          style={{
            maxWidth: "60rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text as="p">{data.myName}</Text>
          <Text as="p" style={{ textAlign: "justify" }}>
            {data.description}
          </Text>
        </Card>
      </AnimatorGeneralProvider>
    </div>
  )
}

export default DescriptionPage
