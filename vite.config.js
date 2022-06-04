import { defineConfig } from 'vite'
import postcssNesting from 'postcss-nesting'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-road-to-the-university/',
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ]
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
