import { AnimatorGeneralProvider } from "@arwes/animation"
import { Card, Text } from "@arwes/core"
import { data } from "../api/data"
import { useMediaQuery } from "react-responsive"

type Props = {}

const DescriptionPage = (props: Props) => {
  const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } }

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: "768px",
  })

  return (
    <div className="mx-auto w-full">
      <AnimatorGeneralProvider animator={animatorGeneral}>
        <Card
          image={{
            src: "./mypic.png",
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
