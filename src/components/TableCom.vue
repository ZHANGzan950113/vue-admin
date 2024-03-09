<template>
  <el-table :data="tableData" border :row-key="rowKey" size="large">
    <slot></slot>
    <el-table-column
      v-for="(item, index) in columns"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      row-key="id"
      show-overflow-tooltip
      align="center"
      @selection-change="$emit('selectionChange', $event)"
    />
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button size="small" text @click="$emit('handleEdit', scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          text
          @click="$emit('handleDel', scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
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
