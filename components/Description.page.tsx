import { AnimatorGeneralProvider } from "@arwes/animation"
import { Card, Text } from "@arwes/core"
import React, { useState, useEffect } from "react"
import { useIntersectionObserver } from "react-intersection-observer-hook"
import { css } from "@emotion/css"
import { data } from "../api/data"

type Props = {}

const DescriptionPage = (props: Props) => {
  const [activate, setActivate] = useState<boolean>(true)
  const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } }

  const [ref, { entry }] = useIntersectionObserver()
  const isVisible = entry && entry.isIntersecting

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
  }, [isVisible])

  return (
    <>
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <div
          className={css({
            display: "flex",
            gap: "30px",
            alignItems: "center",
          })}
        >
          <img
            className={css({
              width: "300px",
              borderLeft: "1px solid rgb(0 248 248)",
            })}
            src="https://playground.arwes.dev/assets/images/wallpaper.jpg"
          />
          <div
            className={css({
              maxWidth: 500,
            })}
          >
            <Text as="h2">{data.myName}</Text>
            <Text as="p" style={{ textAlign: "justify" }}>
              {data.description}
            </Text>
          </div>
        </div>
      </AnimatorGeneralProvider>
    </>
  )
}

export default DescriptionPage
