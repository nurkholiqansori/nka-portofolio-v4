import { AnimatorGeneralProvider } from "@arwes/animation"
import { Card, Text } from "@arwes/core"
import { data } from "../api/data"

type Props = {
  screen: boolean
}

const DescriptionPage = ({ screen }: Props) => {
  const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } }

  return (
    <div className="mx-auto w-full">
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <Card
          image={{
            src: "./mypic.png",
            alt: "Profil " + data.myName,
          }}
          landscape={screen}
          className="max-w-[60rem] mx-auto"
          // style={{
          //   maxWidth: "60rem",
          //   marginLeft: "auto",
          //   marginRight: "auto",
          // }}
        >
          <Text as="p">{data.myName}</Text>
          <Text as="div" style={{ textAlign: "justify" }}>
            {data.description}
          </Text>
        </Card>
      </AnimatorGeneralProvider>
    </div>
  )
}

export default DescriptionPage
