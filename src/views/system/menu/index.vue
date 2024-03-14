<template>
  <table-com
    :columns="columns"
    :tableData="tableData"
    @handle-edit="handleEdit"
    @handle-del="handleDel"
    @selection-change="selectionChange"
  >
    <el-table-column type="selection" />
    <el-table-column type="index" label="序号" align="center" width="70" />

    <template #role>
      <el-table-column label="权限" align="center" show-overflow-tooltip>
        <template #default="scope">
          <span class="btn_auth" v-for="(item, index) in scope.row.btn" :key="index">{{
            btnRef[item]
          }}</span>
        </template>
      </el-table-column>
    </template>
  </table-com>
</template>

<script>
export default {
  name: 'MenuView'
}
</script>
<script setup>
import { onMounted, reactive } from 'vue'
import { getRole } from '@/api/auth/role.js'
onMounted(() => {
  getRole().then((res) => {
    console.log(res)
    tableData.push(...res.data)
  })
})
const columns = [
  { prop: 'id', label: 'id' },
  { prop: 'role', label: '角色码' },
  { prop: 'btn', label: '按钮权限', slot: 'role' }
]
const tableData = reactive([])

const btnRef = {
  1: '新增',
  2: '修改',
  3: '删除'
}

function handleEdit(index, row) {
  console.log('编辑')
  console.log(index, row)
}
function handleDel(index, row) {
  console.log('删除')
  console.log(index, row)
}
function selectionChange(val) {
  console.log(val, '多选')
}
</script>

<style lang="scss" scoped>
.btn_auth {
  margin: 10px;
}
</style>
