import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function LessonReader({ source }: { source: any }) {
  return (
    <div className="prose max-w-none">
      <MDXRemote {...source} />
    </div>
  )
}
