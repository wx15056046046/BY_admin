<template>
 <el-space size="large">
   <ToggleSidebar />
   <Breadcrumb />
 </el-space>
  <el-space size="large">
   <!-- <ToggleSidebar /> -->
   <MenuSearch />
   <FullScreen />
   <Notification />
   <UserInfo />
 </el-space>
</template>

<script setup lang="ts">
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue';
import MenuSearch from './MenuSearch.vue';
import FullScreen from './FullScreen.vue';
import Notification from './Notification.vue';
import UserInfo from './UserInfo.vue';
</script>

<style  scoped>
i{
 font-size: 19px;
 cursor: pointer;
}
</style>