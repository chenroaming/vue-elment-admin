<template>
 <div class="dashboard-container">
  <el-scrollbar class="scrollbar">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </el-scrollbar>
  <div style="margin-top: 20px;text-align: right;">
    <el-pagination
      :current-page.sync="currentPage"
      :page-size="10"
      :total="totalPage"
      layout="total, prev, pager, next"
      @current-change="handleCurrentChange"/>
  </div>
 </div>
</template>

<script>
import tableMinxins from '@/utils/tableMinxins'
export default {
  name: 'vueName',
  data () {
    return {
      currentPage: 1,
      totalPage: 1
    }
  },
  mixins: [tableMinxins],
  computed: {

  },
  mounted () {

  },
  methods: {
    handleCurrentChange () {

    }
  }
}
</script>
