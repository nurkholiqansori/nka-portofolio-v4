import { css } from "@emotion/css"
import { format, parseISO } from "date-fns"
import { useMediaQuery } from "react-responsive"
import { data } from "../api/data"
import { Card, Text } from "@arwes/core"

type Props = {
  title: string
  coverImage: string
  date: string
  content: string
}

const PostLayout = ({ title, coverImage, date, content }: Props) => {
  const dateConvert = parseISO(date)
  const isDesktopOrLaptop = useMediaQuery({
    minWidth: "768px",
  })
  return (
    <>
      <div className="max-w-2xl mx-auto my-5 p-5">
        <h1 className="text-center mb-5 mt-10">{title}</h1>
        <small>
          <time dateTime={date}>{format(dateConvert, "LLLL d, yyyy")}</time>
        </small>
        <div className="my-5">
          <img
            src={coverImage}
            className="w-full h-full border-l-2 border-[#ffa76c]"
          />
        </div>
        <div className="" dangerouslySetInnerHTML={{ __html: content }} />

        <section className="border-t-2 border-[#7efcf6] py-10">
          <Card
            landscape
            image={{ src: "../mypic.png", alt: "Pic of NKA" }}
            title="Nur Kholiq Ansori"
          >
            <div className="flex">
              {data.socMed.map(
                (
                  slug: { title: string; link: string; icon: { path: string } },
                  i: number,
                ) => {
                  return (
                    <a
                      key={i}
                      href={slug.link}
                      title={slug?.title}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="cursor-pointer hover:text-[#7efcf6] p-2 rounded-full z-10 transition-all duration-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={css({
                          width: "1.4rem",
                        })}
                      >
                        <path className="fill-current" d={slug.icon.path} />
                      </svg>
                    </a>
                  )
                },
              )}
            </div>
          </Card>
        </section>

        <footer className="border-t-2 border-[#7efcf6] pt-5 pb-10 text-right">
          <Text>
            <small>© Nur Kholiq Ansori • all rights reserved</small>
          </Text>
        </footer>
      </div>
    </>
  )
}

export default PostLayout
