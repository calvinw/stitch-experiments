import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this project from a subfolder; local preview stays at /.
  base: process.env.GITHUB_ACTIONS ? '/stitch-experiments/' : '/',
  server: { host: true, port: 5173, allowedHosts: true },
})
