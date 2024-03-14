<template>
  <el-aside :width="width" class="aside">
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']" background-color="$bg-100" :collapse="isCollapse">
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
</style>
