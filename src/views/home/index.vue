<template>
 <div>首页</div>
<!-- <h1>{{store.state.count}}</h1>
 <h1>{{$store.state.count}}</h1>  -->
<!-- <el-button type="primary">Primary</el-button>
<el-date-picker v-model="value1" type="date" /> -->
</template>

<script setup lang="ts">
  import {useStore} from 'vuex'//用来获取vuex
  import {ref} from 'vue'
  import {key} from '../../store'

  import User from '@/api/user';

console.log(User);
const value1=ref('')
const store = useStore(key)
console.log(store.state);


</script>

<style scoped lang="scss ">
/* // h1{
//   color:$color;
// } */
</style>