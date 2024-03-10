<template>
  <el-table :data="tableData" border :row-key="rowKey" size="large">
    <slot></slot>
    <template v-for="(item, index) in columns">
      <slot v-if="item.slot" :name="item.slot"></slot>
      <el-table-column
        v-else
        :key="index"
        :prop="item.prop"
        :label="item.label"
        align="center"
        @selection-change="$emit('selectionChange', $event)"
        row-key="id"
        show-overflow-tooltip
      ></el-table-column>
    </template>

    <el-table-column label="操作" align="center" width="150">
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
/**
 * 表格组件
 *
 * @param {Object} columns 表格列配置
 *
 * @param {Array} tableData 表格数据
 *
 * @param {String} rowKey 表格行key
 *
 * @event selectionChange 选中行变化时触发
 *
 * @event handleEdit 编辑操作
 *
 * @event handleDel 删除操作
 *
 * @example <table-com :columns="columns" :tableData="tableData" @selection-change="selectionChange" @handle-edit="handleEdit" @handle-dDel="handleDel" > </table-com>
 *
 */
defineProps({
  columns: Object,
  tableData: Array,
  rowKey: {
    type: String,
    default: null
  }
})
</script>
