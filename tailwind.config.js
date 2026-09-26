/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#FAF9F6',
          'primary': '#1E3A34',
          'seafoam': '#489987',
          'chamomile': '#E8A87C',
          'surface': '#FFFFFF',
          'muted': '#4F615D',
          'border': 'rgba(30, 58, 52, 0.08)'
        }
      },
      fontFamily: {
        'display': ['Fraunces', 'serif'],
        'body': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
