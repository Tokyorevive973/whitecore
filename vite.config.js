import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/whitecore/',  // <--- Ez kell a GitHub Pages-hez
  plugins: [react()],
})
