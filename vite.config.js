import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Capstone-Presentation/',
  build: {
    outDir: 'docs',
    // Add cache busting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-progress']
        },
        // Ensure unique filenames for cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Add source maps for debugging
    sourcemap: true
  },
  plugins: [
    react(),
    mdx(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // Add cache busting
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.(js|css|png|jpg|jpeg|svg|gif|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              }
            }
          }
        ]
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
  }
}) 