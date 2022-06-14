<template>
   <div @click="login">登录</div>
   {{$store.state.user_info.account}}
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { getLoginInfo } from '@/api/common'
import { useRouter,useRoute } from 'vue-router'
import { store } from '@/store';

const router = useRouter()
const route = useRoute()
onMounted(() => {
  
})
const login = ()=>{
      let params ={}
   // getLoginInfo(params).then(res => {
   //    console.log(res.data);
   //    if (res.data.code == 0) {
      // 存储个人信息
      // store.commit('setUserInfo',{...res.data.data.user_info,token:res.data.data.token})
      let redirect =route.query.redirect || '/'
      if(typeof redirect != 'string'){
            redirect ='/'
      }
       router.replace(redirect)
      //    router.replace({
      //          name:'home'
      //    })
   //    }
   // })
}

</script>

<style scoped>
</style>