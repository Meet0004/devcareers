import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Bundle all vendor dependencies into one chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Keep resource data separate (changes often)
          data: ['./src/data/resourceData/resourceData.js']
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  }
})