import { LoadingBars, Text } from "@arwes/core"
import Error from "next/error"
import { useRouter } from "next/router"
import * as React from "react"
import PostLayout from "../../components/Post"
import PostType from "../../interfaces/posts"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"

type IPostsProps = {
  post: PostType
  preview?: boolean
}

export default function Posts({ post, preview }: IPostsProps) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <div className="w-screen h-screen flex justify-center align-center flex-col text-center select-none pointer-events-none">
          <Text as="p">Loading...</Text>
          <LoadingBars />
        </div>
      ) : (
        <>
          <article>
            <PostLayout
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              content={post.content}
            />
          </article>
        </>
      )}
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage'
  ])

  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
