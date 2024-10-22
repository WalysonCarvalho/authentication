import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:3333', // Backend na porta 3333
        changeOrigin: true,
        secure: false,  // Deixe false se não estiver usando HTTPS
      },
      '/sessions': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        secure: false,
      },
      // Outros endpoints se necessário
    },
  },
})

