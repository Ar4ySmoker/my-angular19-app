/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", 
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--dark)', 
        muted: 'var(--muted)',
      },
      fontFamily: {
        sans: ['"Sofia Sans"', '"Rubik"', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
