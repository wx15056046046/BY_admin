import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

import productRouters from './modules/product'

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import {store} from '@/store';

const routes:RouteRecordRaw[] = [
 {
  path:'/',
  component:AppLayout,
  children:[
   {
    path: '',//默认子路由
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta:{title:'首页',requiresAuth:true}
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

router.beforeEach((to,from)=>{
 nprogress.start()//开始加载进度条
 if (to.meta.requiresAuth && !store.state.user_info) {
  // 此路由需要授权，请检查是否已登录
  // 如果没有，则重定向到登录页面
  return {
    path: '/login',
    // 保存我们所在的位置，以便以后再来
    query: { redirect: to.fullPath },
  }
}
})
router.afterEach(()=>{
 nprogress.done()//完成加载
})
export default router