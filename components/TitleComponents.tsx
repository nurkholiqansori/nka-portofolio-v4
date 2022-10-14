import { Text } from '@arwes/core'
import React from 'react'

type Props = {
  children: string
}

const TitleComponents = ({ children }: Props) => {
  return (
    <div className="w-full text-center mb-10">
      <Text as="h2" className="">
        {children}
      </Text>
    </div>
  )
}

export default TitleComponents
