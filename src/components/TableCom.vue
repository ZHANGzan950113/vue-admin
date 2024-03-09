<template>
  <el-table :data="tableData" border :row-key="rowKey" size="large">
    <slot></slot>
    <el-table-column v-for="(item, index) in columns" :key="index" :prop="item.prop" :label="item.label" row-key="id" align="center" />
  </el-table>
</template>

<script setup>
defineProps({
  columns: Object,
  tableData: Array,
  rowKey: {
    type: String,
    default: null
  }
})
</script>