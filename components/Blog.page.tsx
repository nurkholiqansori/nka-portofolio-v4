import { Button, Card, Text } from "@arwes/core"
import PostType from "../interfaces/posts"

type Props = {
  allPosts: PostType[]
}

const BlogPage = ({ allPosts }: Props) => {
  return (
    <>
      <div className="flex overflow-x-auto max-w-7xl mx-auto space-x-4 pb-5 snap-x">
        {allPosts.length === 0 ? (
          <div className="w-full h-32 flex justify-center items-center">
            Not Posts Yet
          </div>
        ) : (
          <div>
            {allPosts.map((post: PostType, i: number) => (
              <Card
                image={{ src: post.coverImage, alt: post.title }}
                title={post.title}
                options={
                  <a
                    href={`posts/${post.slug}`}
                    title={post.title}
                  >
                    <Button palette="secondary">
                      <Text>Read</Text>
                    </Button>
                  </a>
                }
              >
                <div className="h-24">
                  <Text>
                    {post.excerpt + "..."}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default BlogPage
