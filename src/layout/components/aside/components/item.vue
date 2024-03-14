<template>
  <template v-for="(item, index) in menu" :key="index">
    <el-menu-item
      v-if="!item.children"
      :index="item.path"
      @click="router.push({ path: item.path })"
    >
      <svg-icon :class-name="item.meta.icon"></svg-icon>
      <span class="title">{{ item.meta.name }}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <svg-icon :class-name="item.meta.icon"></svg-icon>
        <span class="title">
          {{ item.meta.name }}
        </span>
      </template>
      <SubMenu :menu="item.children"></SubMenu>
    </el-sub-menu>
  </template>
</template>

<script>
export default {
  name: 'SubMenu'
}
</script>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
span.title {
  padding-left: 10px;
}
</style>
