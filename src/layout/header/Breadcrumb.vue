<template>
 <el-breadcrumb :separator-icon="ArrowRight">
  <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
  <el-breadcrumb-item v-for="item in routes" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
 </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router.currentRoute.value.matched, 'ppppp');

const routes = computed(() => {
 return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>

<style scoped>

</style>