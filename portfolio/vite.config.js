import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: 'https://ajpeter9.github.io/AlexPeterson_Portfolio/',
})