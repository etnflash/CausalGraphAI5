import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this app from /<repo>/ (project pages).
  // Override via env for local dev or other hosts.
  base: process.env.BASE_PATH ?? '/',
})
