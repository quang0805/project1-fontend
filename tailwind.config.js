/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'menu-background': "url('assets/wood_background.jpg')",
        'paper-background': "url('assets/paper.jpg')",
        'table-background': "url('assets/tablebg.jpg')"

      }
    },
  },
  plugins: [],
}