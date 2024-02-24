import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        depel: resolve(__dirname, 'depel.html'),
        face: resolve(__dirname, 'face.html'),
        hair: resolve(__dirname, 'hair.html'),
        makeup: resolve(__dirname, 'makeup.html'),
        nail: resolve(__dirname, 'nail.html'),
        priceBody: resolve(__dirname, 'priceBody.html')
      }
    }
  }
})