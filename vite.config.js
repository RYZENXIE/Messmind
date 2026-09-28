import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',

    // Cloudflare Tunnel / LAN access
    allowedHosts: true,

    // Frontend API requests -> FastAPI backend
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,

        // /api/demo/predict
        //        ↓
        // /demo/predict
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})