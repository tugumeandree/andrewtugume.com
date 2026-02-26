import React from 'react'

export default function LessonReader({ content }: { content: React.ReactNode }) {
  return (
    <div className="prose max-w-none">
      {content}
    </div>
  )
}
