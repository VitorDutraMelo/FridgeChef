/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fc-bg': '#0b0f10',
        'fc-bg-2': '#0f1517',
        'fc-card': '#111618',
        'fc-card-2': '#151b1e',
        'fc-border': '#1f2428',
        'fc-border-2': '#232a2e',
        'fc-muted': '#b3b8be',
        'fc-muted-2': '#7a8086',
        'fc-green': '#6cc24a',
        'fc-green-2': '#84cc16',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}