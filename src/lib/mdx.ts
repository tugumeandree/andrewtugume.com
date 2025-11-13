import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/rsc'

export type MdxResult = {
  frontmatter: Record<string, any>
  mdxSource: any
}

export async function getMdxByRelativePath(relPath: string): Promise<MdxResult | null> {
  const fullPath = path.join(process.cwd(), 'content', relPath)
  if (!fs.existsSync(fullPath)) return null
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-gfm')],
      rehypePlugins: [require('rehype-slug'), require('rehype-autolink-headings')]
    }
  })
  return { frontmatter: data, mdxSource }
}

export function listMdxFiles(dir = 'content') {
  const full = path.join(process.cwd(), dir)
  function walk(directory: string) {
    const entries = fs.readdirSync(directory, { withFileTypes: true })
    let files: string[] = []
    for (const e of entries) {
      const res = path.resolve(directory, e.name)
      if (e.isDirectory()) files = files.concat(walk(res))
      else if (res.endsWith('.mdx') || res.endsWith('.md')) files.push(res)
    }
    return files
  }
  return walk(full).map((f) => path.relative(process.cwd(), f))
}
