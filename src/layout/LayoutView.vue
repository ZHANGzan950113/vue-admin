<script setup>
import asideCom from './components/aside/index.vue'
import navbarCom from './components/NavCom.vue'
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores'
import { ref } from 'vue'
const appStore = useAppStore()
const isCollapse = ref(false)
</script>

<template>
  <main class="app_container">
    <!-- 侧边栏 -->
    <asideCom :menu="appStore.menu" :isCollapse="isCollapse" />
    <!-- 主要内容 -->
    <div class="main_container">
      <!-- 页眉 -->
      <navbarCom />
      <!-- 业务页面 -->
      <section class="main">
        <el-button @click="isCollapse = !isCollapse">collapse</el-button>
        <RouterView />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
