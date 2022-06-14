import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // 配置选项
    })
  ],
  resolve: {//配置路径别名
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    host:'0.0.0.0',
    proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // 选项写法
      '/admin': {
        target: 'https://shop.fed.lagou.com/api',//代理的目标地址
        changeOrigin: true,//兼容基于名字的虚拟主机
        // 路径重写  如果接口有 api开头 不需要路径重写
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
