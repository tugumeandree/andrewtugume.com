import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

export type MdxResult = {
  frontmatter: Record<string, any>
  content: React.ReactElement
}

export async function getMdxByRelativePath(relPath: string): Promise<MdxResult | null> {
  const fullPath = path.join(process.cwd(), 'content', relPath)
  if (!fs.existsSync(fullPath)) return null
  const raw = fs.readFileSync(fullPath, 'utf8')
  
  // Parse frontmatter
  const { data: frontmatter, content: source } = matter(raw)
  
  // Dynamic imports to avoid TypeScript plugin type conflicts
  const remarkGfm = (await import('remark-gfm')).default
  const rehypeSlug = (await import('rehype-slug')).default
  const rehypeAutolinkHeadings = (await import('rehype-autolink-headings')).default
  
  // Evaluate MDX content
  const { default: MdxContent } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkGfm as any],
    rehypePlugins: [rehypeSlug as any, rehypeAutolinkHeadings as any],
    format: 'mdx'
  } as any)
  
  // Create React element from evaluated content
  const content = runtime.jsx(MdxContent as any, {})
  
  return { frontmatter, content }
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
