import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteImageOptimizer({
    //   png: {
    //     quality: 40,
    //   },
    //   jpg: {
    //     quality: 30,
    //   },
    // }),
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
        japan: resolve(__dirname, 'src/japan/japan.html'),
        collection: resolve(__dirname, 'src/collection/collection.html'),
        contact: resolve(__dirname, 'src/contact/contact.html'),
        exhibition: resolve(__dirname, 'src/exhibition/exhibition.html'),

        womenOfUzbekistan: resolve(__dirname, 'src/exhibition/women-of-uzbekistan/women.html'),
        eastMotives: resolve(__dirname, 'src/exhibition/east-motives/east.html'),
        mirtajiyev: resolve(__dirname, 'src/exhibition/mirtajiyev/mirtajiyev.html'),
        synapse: resolve(__dirname, 'src/exhibition/synapse/synapse.html'),
        tunnelOfMemory: resolve(__dirname, 'src/exhibition/tunnel-of-memory/memory.html'),
        umarRadjabov: resolve(__dirname, 'src/exhibition/umar-radjabov/umar.html'),
        xudoyberganDevonov: resolve(__dirname, 'src/exhibition/xudoybergan-devonov/devonov.html'),

      }
    }
  },
  base: "/art-gallery-of-uzbekistan/",
})
