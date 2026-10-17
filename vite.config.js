import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // User site: https://bb-one1996.github.io/
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    watch: {
      ignored: ['**/*.zip', '**/stitch_personal_portfolio_webpage_prototype/**'],
    },
  },
})
