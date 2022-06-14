import { RouteRecordRaw, RouterView } from 'vue-router';
const routers:RouteRecordRaw={
   path:'product',
   // name:'product',
   component: RouterView,
     meta:{//自定义路由 元数据
      title:'商品',
      requiresAuth:true
     },
   children:[
    {
     path:'product_list',
     name:'product_list',
     component:()=>import('@/views/product/index.vue'),
     meta:{//自定义路由 元数据
      title:'商品'

     }
    },
    {
     path:'product_list1',
     name:'product_list1',
     component:()=>import('@/views/product/index1.vue'),
     meta:{//自定义路由 元数据
      title:'商品1'
     }
    },
    {
     path:'product_list2',
     name:'product_list2',
     component:()=>import('@/views/product/index2.vue'),
     meta:{//自定义路由 元数据
      title:'商品2'
     }
    },
    {
     path:'product_list3',
     name:'product_list3',
     component:()=>import('@/views/product/index3.vue'),
     meta:{//自定义路由 元数据
      title:'商品3'
     }
    },
   ]
}
export default routers