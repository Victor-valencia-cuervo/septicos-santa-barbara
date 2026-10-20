import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en la raíz del dominio de Cloudflare Pages
// (https://septicossantabarbara.pages.dev/), por eso base = '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // Separa las librerías pesadas para que el navegador las cachee aparte
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
