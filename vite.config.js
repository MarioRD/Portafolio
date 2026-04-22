import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: 'https://github.com/MarioRD/Portafolio.git',
  plugins: [react()],
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, 
    hmr: {
      protocol: 'ws', 
      host: 'localhost',
    },
    watch: {
      usePolling: true,
    }
  }
})