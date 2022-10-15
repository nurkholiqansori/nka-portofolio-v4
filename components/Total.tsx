import { Text } from '@arwes/core'
import React from 'react'
import { data } from '../api/data'

type Props = {
  children: string | JSX.Element
}

const Total = ({ children }: Props) => {
  return (
    <>
      <div className="w-full text-right italic mt-5 ">
        <Text>
          <div>{children}</div>
        </Text>
      </div>
    </>
  )
}

export default Total
