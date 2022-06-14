import { createStore,Store } from "vuex";

import {InjectionKey} from 'vue'

import {setItem,getItem} from '@/utils/storage';

const state={
   isCollapse:false,
  //  user_info:JSON.parse(window.localStorage.getItem('user_info')||'null')  
  user_info:getItem<any>('user_info')
}
export type State = typeof state
// 定义injection key
export const key:InjectionKey<Store<State>> = Symbol()
 
// 创建一个新的store实例
export const store = createStore<State>({

 state,
 mutations: {
  
  setIsCollapse(state, payload){
   state.isCollapse = payload
  },

  setUserInfo(state,payload){
    state.user_info = payload

    setItem('user_info',state.user_info)
    // window.localStorage.setItem('user_info',JSON.stringify(state.user_info))
  }
 }
})
// export default store