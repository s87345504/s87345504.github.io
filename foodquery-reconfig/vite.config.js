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

  build: {  
    rollupOptions: {  
      output: {  
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks(id) {  
          if (id.includes('node_modules')) {  
            // 将所有node_modules中的模块打包到vendors.js  
            return 'vendors';  
          }  
  
          // 可以根据需要进一步细分业务代码  
          // 例如，根据文件路径或模块名称来决定打包到哪个chunk  
          // 但这里我们简单地将剩余所有文件打包到main.js  
          return 'main';  
        },  
      },  
    },  
  },  
})
