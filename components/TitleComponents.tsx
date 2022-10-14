import { Text } from '@arwes/core'
import React from 'react'

type Props = {
  children: string,
  id: string
}

const TitleComponents = ({ children, id }: Props) => {
  return (
    <div className="w-full text-center mb-10" id={id}>
      <Text as="div">
        <h2 id={id}>{children}</h2>
      </Text>
    </div>
  )
}

export default TitleComponents
