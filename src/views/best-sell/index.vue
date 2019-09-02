<template>
  <div class="bestSell-container">
    <div class="bestSell-content">
      <div class="bestSell-top">
        <p class="title-wrapper">销量前100商品</p>
        <div class="btn-group">
          <el-button :class="{active: type === 'week'}" type="text" @click="searchData('week')">本周</el-button>
          <el-button :class="{active: type === 'month'}" type="text" @click="searchData('month')">本月</el-button>
          <el-button :class="{active: type === 'year'}" type="text" @click="searchData('year')">本年</el-button>
        </div>
      </div>
      <div class="bestSell-list">
        <el-table :data="sellData" height="485" border v-loading="loading">
          <el-table-column prop="rank" label="排名"></el-table-column>
          <el-table-column prop="number" label="款号"></el-table-column>
          <el-table-column prop="name" label="商品名称" width="270"></el-table-column>
          <el-table-column prop="volume" label="总销量"></el-table-column>
          <el-table-column prop="storeNum" label="总库存数"></el-table-column>
          <el-table-column prop="storeMoney" label="总库存金额"></el-table-column>
        </el-table>
        <div class="block">
          <el-pagination :class="{hide: loading}" background layout="prev, pager, next" :total="total"
                         @current-change="changePage"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tableData from './index'

  export default {
    name: "index",
    data() {
      return {
        type: 'year',
        allData: [],
        start: 1,
        end: 10,
        size: 10,
        sellData: [],
        total: 100,
        loading: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.sellData = tableData[this.type].slice(this.start - 1, this.end);
        this.loading = false;
      }, 1000);

    },
    methods: {
      changePage(page) {
        this.start = this.size * (page - 1);
        this.end = this.size * page;
        this.sellData = tableData[this.type].slice(this.start, this.end);
      },

      searchData(type) {
        if (type === this.type) return;
        this.type = type;
        switch (type) {
          case 'week':
            this.total = 10;
            this.sellData = tableData[type];
            break;
          case 'month':
            this.total = 17;
            this.sellData = tableData[type].slice(0, 10);
            break;
          case 'year':
            this.total = 100;
            this.sellData = tableData[this.type].slice(0, 10);
            break;
        }
      }
    }
  }
</script>

<style lang="scss">
  .bestSell-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .bestSell-content {
      background-color: #ffffff;
      .bestSell-top {
        position: relative;
        .btn-group {
          position: absolute;
          right: 15px;
          top: 0;
          .el-button {
            &.active {
              color: #e6a23c;
            }
            &:hover {
              color: rgba(230, 162, 60, .8);
            }
          }
        }
      }
      .title-wrapper {
        padding: 10px 15px;
        margin: 0;
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        background-color: #ffffff;
      }
      .bestSell-list {
        padding: 10px 15px;
        .block {
          text-align: right;
          margin-top: 20px;
          .el-pagination.hide {
            display: none;
          }
        }
      }
    }
  }
</style>
