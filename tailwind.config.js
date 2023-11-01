/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        background2: "#161616",
        primary: "#FFFFFF",
        secondary: "#4185C5",
        "secondary-light": "#5CA6D6"
      }
    },
  },
  plugins: [],
}

