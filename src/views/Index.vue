<script lang="ts" setup>
import Header from "../components/Header.vue";

</script>

<template>
  <el-container>
    <Header/>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>

    </el-footer>
  </el-container>
</template>


<style scoped>

</style>