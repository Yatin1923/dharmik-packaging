import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dharmik-packaging/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})