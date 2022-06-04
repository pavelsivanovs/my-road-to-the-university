import { defineConfig } from 'vite'
import postcssNesting from 'postcss-nesting'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export const basepath = process.env.NODE_ENV === 'production' ? '/my-road-to-the-university/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: [
    '**/*.png',
    '**/*.JPG',
    '**/*.jpg'
  ],
  base: basepath,
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
