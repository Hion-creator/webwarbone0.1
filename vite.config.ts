import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/webwarbone0.1/', // Reemplaza con el nombre de tu repositorio de GitHub
})
