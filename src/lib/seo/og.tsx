import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }

const themes = {
  ink: { background: '#0B0B0B', eyebrow: '#C7A14B', title: '#FFFFFF', body: '#D4D4D4', rule: '#C7A14B' },
  work: { background: '#16233E', eyebrow: '#E87722', title: '#FFFFFF', body: '#D6DCE8', rule: '#E87722' },
  influence: { background: '#7A2E3A', eyebrow: '#F2C9D0', title: '#FFFFFF', body: '#F3E8EA', rule: '#F2C9D0' },
  faith: { background: '#124542', eyebrow: '#F4F6F5', title: '#FFFFFF', body: '#F4F6F5', rule: '#D96B27' },
}

type OgInput = {
  eyebrow: string
  title: string
  subtitle?: string
  theme?: keyof typeof themes
}

// Shared social-share image: brand typography on the initiative's colours.
export function renderOgImage({ eyebrow, title, subtitle, theme = 'ink' }: OgInput) {
  const colour = themes[theme]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: colour.background,
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 6, textTransform: 'uppercase', color: colour.eyebrow }}>
          {eyebrow}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: title.length > 60 ? 58 : 70, lineHeight: 1.1, color: colour.title, maxWidth: 1000 }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ display: 'flex', marginTop: 28, fontSize: 30, lineHeight: 1.35, color: colour.body, maxWidth: 980, fontFamily: 'sans-serif' }}>
              {subtitle}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
          <div style={{ display: 'flex', width: 64, height: 4, background: colour.rule, marginRight: 24 }} />
          <div style={{ display: 'flex', fontSize: 28, color: colour.title }}>Andrew Tugume · andrewtugume.com</div>
        </div>
      </div>
    ),
    ogSize
  )
}

// Monogram for favicons and app icons
export function renderMonogram(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0B0B',
          color: '#C7A14B',
          fontSize: size * 0.48,
          fontFamily: 'serif',
          letterSpacing: -1,
        }}
      >
        AT
      </div>
    ),
    { width: size, height: size }
  )
}
