/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDeep:        '#050505',
        primaryGreen:  '#10b981',
        secondaryBlue: '#3b82f6',
        errorRed:      '#ef4444',
      },
      fontFamily: {
        // Barlow Semi Condensed — authoritative condensed display (enterprise/consulting register)
        sans:    ['Manrope', 'sans-serif'],
        display: ['"Barlow Semi Condensed"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
