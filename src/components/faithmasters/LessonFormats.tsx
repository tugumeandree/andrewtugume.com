'use client'

import React, { useRef, useState } from 'react'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import type { LessonFormat } from '@/lib/faithmasters/lessons'

type LessonFormatsProps = {
  title: string
  formats: LessonFormat[]
  audio?: string
  youtubeId?: string
  // The rendered MDX, passed from the server
  children?: React.ReactNode
}

export default function LessonFormats({ title, formats, audio, youtubeId, children }: LessonFormatsProps) {
  const [selected, setSelected] = useState<LessonFormat>(formats[0])
  const tabRefs = useRef<Partial<Record<LessonFormat, HTMLButtonElement | null>>>({})
  const audioRef = useRef<HTMLAudioElement>(null)

  const select = (format: LessonFormat) => {
    // Audio may keep playing while someone reads along, but not under a video
    if (format === 'Watch') audioRef.current?.pause()
    setSelected(format)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const index = formats.indexOf(selected)
    const targets: Record<string, LessonFormat> = {
      ArrowRight: formats[(index + 1) % formats.length],
      ArrowLeft: formats[(index - 1 + formats.length) % formats.length],
      Home: formats[0],
      End: formats[formats.length - 1],
    }
    const target = targets[event.key]
    if (!target) return
    event.preventDefault()
    select(target)
    tabRefs.current[target]?.focus()
  }

  const content: Record<LessonFormat, React.ReactNode> = {
    Listen: audio && (
      <audio ref={audioRef} controls preload="metadata" src={audio} aria-label={`Listen to ${title}`} className="w-full" />
    ),
    // Only mounted while selected, so leaving the tab stops the video
    Watch: youtubeId && selected === 'Watch' && <YouTubeEmbed id={youtubeId} title={title} />,
    Read: <div className="fm-reading">{children}</div>,
  }

  if (formats.length === 1) return <>{content[formats[0]]}</>

  return (
    <div>
      <div role="tablist" aria-label="Choose a format" onKeyDown={handleKeyDown} className="flex gap-2">
        {formats.map((format) => (
          <button
            key={format}
            ref={(element) => {
              tabRefs.current[format] = element
            }}
            type="button"
            role="tab"
            id={`tab-${format}`}
            aria-controls={`panel-${format}`}
            aria-selected={selected === format}
            tabIndex={selected === format ? 0 : -1}
            onClick={() => select(format)}
            className={`min-h-[44px] rounded-lg border border-faith-teal px-5 font-semibold ${
              selected === format ? 'bg-faith-teal text-white' : 'bg-white text-faith-teal hover:bg-faith-sand'
            }`}
          >
            {format}
          </button>
        ))}
      </div>
      {formats.map((format) => (
        <div
          key={format}
          role="tabpanel"
          id={`panel-${format}`}
          aria-labelledby={`tab-${format}`}
          tabIndex={0}
          hidden={selected !== format}
          className="mt-6 rounded-lg"
        >
          {content[format]}
        </div>
      ))}
    </div>
  )
}
