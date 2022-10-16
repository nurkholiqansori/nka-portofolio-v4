import { Text } from '@arwes/core'
import { ReactNode } from "react"
import { data } from '../api/data'

type Props = {
  children: string | ReactNode
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
