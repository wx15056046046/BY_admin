
import {CompoComponentCustomProperties} from 'vue'
import {Store} from 'vuex'
import {State} from './store/index'
declare module '@vue/runtime-core'{
 // 声明自己的stroe state
 // interface State{
 //  count:number
 // }

 // 为this.$store 提供类型声明
 interface ComponentCustomProperties{
  $store:Store<State>
 }
}