<script lang="ts" setup>

enum Index {
  application = 'application'
}

const menuMap: {
  [key in keyof typeof Index]: { title: string }
} = {
  application: {
    title: '应用管理'
  }
}

</script>

<template>
  <el-header class="header">
    <el-menu mode="horizontal" :default-active="Index.application">
      <el-menu-item v-for="(item,index) in menuMap" :index="index">{{ item.title }}</el-menu-item>
    </el-menu>
  </el-header>
</template>


<style lang="less" scoped>
.header {
  padding: 0;
}
</style>