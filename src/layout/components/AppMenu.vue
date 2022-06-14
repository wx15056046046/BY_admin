<template>
 <el-menu
 :unique-opened="true"
  default-active="2"
  class="el-menu-vertical-demo"
  background-color="#304156"
  active-text-color="#ffd04b"
  text-color="#fff"
  :collapse="$store.state.isCollapse"
  router
 >
  <!-- @open="handleOpen"
  @close="handleClose"-->
  <el-menu-item index="/">
   <el-icon>
    <icon-menu />
   </el-icon>
   <span>首页</span>
  </el-menu-item>

  <el-sub-menu index="/product">
   <template #title>
    <el-icon>
     <!-- product_list -->
     <location />
    </el-icon>
    <span>商品</span>
   </template>
   <el-menu-item-group >
    <el-menu-item index="/product/product_list">商品</el-menu-item>
    <el-menu-item index="/product/product_list1">商品1</el-menu-item>
    <el-menu-item index="/product/product_list2">商品2</el-menu-item>
    <el-menu-item index="/product/product_list3">商品3</el-menu-item>
   </el-menu-item-group>
  </el-sub-menu>
 </el-menu>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.el-menu{
 border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>