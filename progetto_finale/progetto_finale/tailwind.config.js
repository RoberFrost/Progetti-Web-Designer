/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
    'sans':['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#2977FF",
        secondary: "#002E80",
        white: {
          light: "#FFFFFF",
          DEFAULT: "#f6f6f6",
          dark: "#f3f3f3",
        }

      }
    },
  },
  plugins: [],
}

