<template>
  <el-aside class="aside">
    <el-scrollbar>
      <el-menu background-color="$bg-100" :collapse="isCollapse" class="el-menu-vertical-demo">
        <template v-if="menu.length > 0">
          <menuItem :menu="menu"></menuItem>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script>
export default { name: 'AsideCom' }
</script>
<script setup>
import menuItem from './components/item.vue'
defineProps({
  menu: {
    type: Array,
    default: () => []
  },
  width: {
    type: String,
    default: '200px'
  },
  isCollapse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside {
  transition: width 0.28s;
  width: auto;
}
</style>
