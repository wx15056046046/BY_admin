
<template>
 <div class="common-layout">
  <el-container>
   <el-aside >
    <!-- 侧边栏 -->
    <AppMenu />
   </el-aside>
   <el-container>
    <el-header>
      <Appheader />
    </el-header>
    <el-main>
     <!-- 子路由出口 -->
     <router-view></router-view>
    </el-main>
   </el-container>
  </el-container>
 </div>
</template>


<script setup lang="ts">
// 侧边栏
import AppMenu from './components/AppMenu.vue'
// 头部
import Appheader from './header/index.vue';
</script>

<style scoped>
.el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    /* text-align: center;
    line-height: 60px; */
  }
    .el-header{
          background-color: #fff;
          color: #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
    }
  
  .el-aside {
    width: auto;
    background-color: #304156;
    color: #333;
    /* text-align: center;
    line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }
  
  /* body > .el-container {
    margin-bottom: 40px;
  } */
   .el-container{
   height: 100vh;
  }
  
</style>
