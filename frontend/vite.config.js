import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/css/variables/variables.scss";
          `
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // Add this line to configure the '@' alias
      }
    }
  }
})