<template>
  <el-aside width="200px" class="aside">
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']" background-color="$bg-100">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <message />
            </el-icon>Navigator One
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
            <el-menu-item index="3-2">Option 2</el-menu-item>
            <el-menu-item index="3-3">Option 1</el-menu-item>
            <el-menu-item index="3-4">Option 2</el-menu-item>
            <el-menu-item index="3-5">Option 1</el-menu-item>
            <el-menu-item index="3-6">Option 2</el-menu-item>
            <el-menu-item index="3-7">Option 1</el-menu-item>
            <el-menu-item index="3-8">Option 2</el-menu-item>
            <el-menu-item index="3-9">Option 1</el-menu-item>
            <el-menu-item index="3-0">Option 2</el-menu-item>
            <el-menu-item index="3-3">Option 3</el-menu-item>
          <el-sub-menu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup></script>

<style lang="scss" scoped>

.el-menu {
  border-right: none;
}
</style>
