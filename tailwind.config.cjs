module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/components/**/*.{ts,tsx,js,jsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        accent: '#C7A14B',
        // Per-initiative accents — typographic treatments, not logos
        work: { DEFAULT: '#16233E', accent: '#E87722', text: '#B0561A', light: '#FBF1E8' },
        influence: { DEFAULT: '#7A2E3A', light: '#F3E8EA' },
        scripture: { DEFAULT: '#4F5D3A', warm: '#8A6A3B', light: '#F4EDE1' }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Sora', 'serif']
      },
      screens: {
        // Custom desktop-first breakpoints used by the /mastermind page only.
        // Order matters: 'mm' must come before 'ms' so 'ms' wins when both match.
        mm: { max: '900px' },
        ms: { max: '620px' }
      }
    }
  },
  plugins: []
}
