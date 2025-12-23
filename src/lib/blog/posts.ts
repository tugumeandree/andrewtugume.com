import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export type PostMeta = {
  title: string
  date: string
  summary?: string
  tags?: string[]
  image?: string
  ogImage?: string
  slug: string
}

const POSTS_PATH = path.join(process.cwd(), 'content', 'posts')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_PATH)) return []
  return fs.readdirSync(POSTS_PATH).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
}

export async function getPostBySlug(slug: string): Promise<{ meta: PostMeta; content: string } | null> {
  const filename = `${slug}.mdx`
  const fullPath = path.join(POSTS_PATH, filename)
  if (!fs.existsSync(fullPath)) return null
  const file = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(file)

  // Convert markdown -> sanitized HTML using unified (remark -> rehype -> sanitize -> stringify)
  const processed = await unified()
    .use(parse)
    .use(gfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSanitize)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeStringify)
    .process(content)

  const contentHtml = processed.toString()

  const meta: PostMeta = {
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    summary: data.summary || '',
    tags: data.tags || [],
    image: data.image || null,
    ogImage: data.ogImage || data.image || null,
    slug,
  }
  return { meta, content: contentHtml }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getPostSlugs().map((s) => s.replace(/\.(md|mdx)$/, ''))
  const posts: PostMeta[] = []
  for (const slug of slugs) {
    const post = await getPostBySlug(slug)
    if (post) posts.push(post.meta)
  }
  // sort by date desc
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}
