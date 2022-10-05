import { Card, Text } from '@arwes/core'
import { css } from '@emotion/css'
import React from 'react'
import { data } from '../api/data'

type Props = {}

const PortofolioPage = (props: Props) => {
  return (
    <div
      className={css({
        display: "flex",
        gap: "30px",
        maxWidth: "90vw",
        overflowX: "scroll",
      })}
    >
      {data.experience.map((project, i) => (
        <Card image={{ src: project.img, alt: project.com }} style={{ minWidth: 400 }} key={i}>
          <Text as="p">{project?.com}</Text>
        </Card>
      ))}
    </div>
  )
}

export default PortofolioPage
