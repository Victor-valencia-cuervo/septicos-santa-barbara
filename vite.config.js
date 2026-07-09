import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // El sitio se publica en la raíz del dominio de Cloudflare Pages
  // (https://septicossantabarbara.pages.dev/), por eso base = '/'.
  // Si algún día usas un subdirectorio, cambia esto.
  base: '/',
})
