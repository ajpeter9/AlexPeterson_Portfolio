/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./projects.html",
    "./main.js",
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
};