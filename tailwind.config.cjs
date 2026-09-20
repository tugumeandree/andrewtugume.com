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
        accent: '#C7A14B'
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
