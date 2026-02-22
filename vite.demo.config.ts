import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This config is used purely to build the playground (demo) as a static site 
// for hosting on Vercel, Render.com, GitHub Pages, etc.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-demo',
    emptyOutDir: true,
  }
})
