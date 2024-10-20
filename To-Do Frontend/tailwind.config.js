/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    flowbite.content(),
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ],
}

