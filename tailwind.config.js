/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", 
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--dark)',
        darkL5: 'var(--dark-l5)',
        primary: 'var(--primary)',
        primaryL: 'var(--primary-l)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        light: 'var(--light)',
        aditional: 'var(--aditional)',
        aditionalL: 'var(--aditional-l)',
      },
      fontFamily: {
        sans: ['Sofia Sans', 'Rubik', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
