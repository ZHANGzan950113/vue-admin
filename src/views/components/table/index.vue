<template>
  <div>
    <table-com :tableData="tableData" :columns="columns" rowKey="id"></table-com>
  </div>
</template>

<script>
export default {
  name: 'TableDemo'
}
</script>

<script setup>
import { reactive } from 'vue'
const tableData = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const columns = reactive([])
const interim = []
Object.keys(tableData[1]).forEach((item) => {
  if (item !== 'children') {
    interim.push({ prop: item, name: item })
  }
})
columns.push(...interim)
</script>

<style lang="scss" scoped></style>
