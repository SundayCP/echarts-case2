<template>
  <el-table :data="tableData" v-loading="loading" height="198">
    <el-table-column label="类别名称">
      <template slot-scope="scope">
        <span :class="scope.row.className"></span>
        <span style="margin-left: 5px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="占比">
      <template slot-scope="scope">{{ scope.row.percent }}</template>
    </el-table-column>
    <el-table-column label="销售额">
      <template slot-scope="scope">{{ scope.row.amount }}</template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "TabsPieContent",
    props: {
      tableData: {
        type: Array
      },
      loading: {
        type: Boolean
      }
    }
  }
</script>
