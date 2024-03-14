<script setup>
import asideCom from './components/aside/index.vue'
import navbarCom from './components/NavCom.vue'
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
</script>

<template>
  <main class="app_container">
    <!-- 侧边栏 -->
    <asideCom :menu="appStore.menu" />
    <!-- 主要内容 -->
    <div class="main_container">
      <!-- 页眉 -->
      <navbarCom />
      <!-- 业务页面 -->
      <section class="main">
        <RouterView />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
