<template>
  <table-com
    :columns="columns"
    :tableData="tableData"
    @handle-edit="handleEdit"
    @handle-del="handleDel"
    @selection-change="selectionChange"
  >
    <el-table-column type="selection"></el-table-column>
  </table-com>
</template>

<script>
export default {
  name: 'UserView'
}
</script>
<script setup>
import { onMounted, reactive } from 'vue'
import { getUser } from '@/api/auth/user.js'
onMounted(() => {
  getUser().then((res) => {
    console.log(res)
    tableData.push(...res.data)
  })
})
const columns = [
  { prop: 'id', label: 'id' },
  { prop: 'name', label: '用户名' },
  { prop: 'email', label: '邮箱' },
  { prop: 'role', label: '角色' },
  { prop: 'date', label: '修改时间' }
]
const tableData = reactive([])

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

<style lang="scss" scoped></style>
