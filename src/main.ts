import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {store,key} from './store'
import elementPlus from './plugins/element-plus'
// 引入样式
import './styles/index.scss'


createApp(App).use(router).use(store,key).use(elementPlus)
 .mount('#app')
