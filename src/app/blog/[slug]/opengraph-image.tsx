import { renderOgImage, ogSize } from '@/lib/seo/og'
import { getAllPosts, getPostBySlug } from '@/lib/blog/posts'

export const alt = 'Article by Andrew Tugume'
export const size = ogSize
export const contentType = 'image/png'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return renderOgImage({ eyebrow: 'Insights · Andrew Tugume', title: post?.meta.title ?? 'Insights', subtitle: post?.meta.summary })
}
