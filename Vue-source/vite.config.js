import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // 入口文件名
  //       entryFileNames: 'assets/[name].js',
  //       // 资源文件名 css 图片等等
  //       assetFileNames: 'assets/[name].[ext]',
  //     },
  //   },
  // }
})
