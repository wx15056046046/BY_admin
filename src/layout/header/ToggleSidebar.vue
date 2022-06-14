<template>
  <div>
    <el-icon v-if="$store.state.isCollapse" @click="$store.commit('setIsCollapse',false)">
      <expand />
    </el-icon>
    <el-icon v-if="!$store.state.isCollapse"  @click="$store.commit('setIsCollapse',true)">
      <fold />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { Expand,  Fold } from "@element-plus/icons-vue";


</script>

<style scoped>
i{
  font-size: 19px;
  cursor:pointer;
}
</style>