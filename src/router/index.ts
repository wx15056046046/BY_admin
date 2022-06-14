import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

import productRouters from './modules/product'

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'


const routes:RouteRecordRaw[] = [
 {
  path:'/',
  component:AppLayout,
  children:[
   {
    path: '',//默认子路由
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta:{title:'首页'}
   },
   productRouters
  ]
 },

 {
  path: '/login',
  name: 'login',
  component: () => import('../views/login/index.vue')
 }
]

const router = createRouter({
 history: createWebHashHistory(),//路由模式
 routes
})

router.beforeEach(()=>{
 nprogress.start()//开始加载进度条
})
router.afterEach(()=>{
 nprogress.done()//完成加载
})
export default router