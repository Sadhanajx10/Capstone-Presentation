import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Capstone-Presentation/',
  plugins: [
    react(),
    mdx(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Capstone Presentation',
        short_name: 'Capstone',
        description: 'Aeropay DevOps Knowledge Hub Capstone Presentation',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone'
      }
    })
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-progress']
        }
      }
    }
  }
}) 