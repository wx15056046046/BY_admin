<template>
 <div>
   <el-icon @click="toggleFullScreen"><full-screen /></el-icon>
 </div>
</template>

<script setup lang="ts">
import { FullScreen } from '@element-plus/icons-vue'

const toggleFullScreen = ()=>{
 if(!document.fullscreenElement){
  document.documentElement.requestFullscreen()
 }else{
  if(document.exitFullscreen){
   document.exitFullscreen()
  }
 }
}
</script>

<style scoped>
i{
 font-size: 19px;
 cursor: pointer;
}
</style>