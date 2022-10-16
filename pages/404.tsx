import { Text } from '@arwes/core'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-2 ">
      <Text>Oops! You are lost in outer space</Text>
      <a href="/" title="Home">
        Back to Station
      </a>
    </div>
  )
}

export default NotFound
