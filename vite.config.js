import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Oppure '0.0.0.0' per compatibilità
    port: 5173, // Cambia se serve
  },
})
