<template>
  <div>
    <table-com :columns="columns" :tableData="tableData">
      <el-table-column type="selection"></el-table-column>
    </table-com>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { getUser } from '@/api/user.js'
onMounted(()=>{
  getUser().then(res => {
    console.log(res)
    tableData.push(...res.data)
  })
})
  const columns = [
    {prop:'id',label:'id'},
    {prop:'name',label:'用户名'},
    {prop:'email',label:'邮箱'},
    {prop:'role',label:'角色'},
    {prop:'date',label:'修改时间'},
  ]
  const tableData = reactive([])
</script>

<style lang='scss' scoped>

</style>