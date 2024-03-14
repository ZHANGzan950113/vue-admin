<template>
  <el-aside :width="width" class="aside">
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']" background-color="$bg-100">
        <el-sub-menu index="1">
          <template #title>
            <el-icon> <message /> </el-icon>Navigator One
          </template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
          <el-menu-item index="1-3">Option 3</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            Navigator Two
          </template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
          <el-menu-item index="2-3">Option 3</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <setting />
            </el-icon>
            Navigator Three
          </template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-sub-menu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <template v-if="menu.length > 0">
          <el-sub-menu v-for="(item, index) in menu" :key="index" :index="index">
            <template #title>
              <svg-icon :className="item.meta.icon" />
              <span class="title">{{ item.meta.name }}</span>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
defineProps({
  menu: {
    type: Array,
    default: () => []
  },
  width: {
    type: String,
    default: '200px'
  }
})
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
  span.title {
    padding-left: 10px;
  }
}
</style>
