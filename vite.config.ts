import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 30,
      },
      jpg: {
        quality: 65,
      },
    }),
  ],
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.png'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/about/about.html'),
        planVisit: resolve(__dirname, 'src/planVisit/planVisit.html'),
        coins: resolve(__dirname, 'src/coins/coins.html'),
        concept: resolve(__dirname, 'src/concept/concept.html'),
        history: resolve(__dirname, 'src/history/history.html'),
        collection: resolve(__dirname, 'src/collection/collection.html'),
        contact: resolve(__dirname, 'src/contact/contact.html'),
        exhibition: resolve(__dirname, 'src/exhibition/exhibition.html'),
        terms: resolve(__dirname, 'src/terms/terms.html'),


        //Выставки
        //2024
        womenOfUzbekistan: resolve(__dirname, 'src/exhibition/2024/women-of-uzbekistan/women.html'),
        eastMotives: resolve(__dirname, 'src/exhibition/2024/east-motives/east.html'),
        mirtajiyev: resolve(__dirname, 'src/exhibition/2024/mirtajiyev/mirtajiyev.html'),
        synapse: resolve(__dirname, 'src/exhibition/2024/synapse/synapse.html'),
        tunnelOfMemory: resolve(__dirname, 'src/exhibition/2024/tunnel-of-memory/memory.html'),
        umarRadjabov: resolve(__dirname, 'src/exhibition/2024/umar-radjabov/umar.html'),
        xudoyberganDevonov: resolve(__dirname, 'src/exhibition/2024/xudoybergan-devonov/devonov.html'),

        //nbu collection
        nbuCollection: resolve(__dirname, 'src/exhibition/2025/nbu-collection/nbu.html'),


        //2025
        hotira: resolve(__dirname, 'src/exhibition/2025/memory/memory.html'),
        childhood: resolve(__dirname, 'src/exhibition/2025/planet-of-childhood/childhood.html'),

      }
    }
  },
  base: "/art-gallery-of-uzbekistan/",
})
