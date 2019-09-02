<template>
  <div class="badSell-container">
    <div class="badSell-content">
      <div class="badSell-top">
        <p class="title-wrapper">前100无销量商品</p>
        <div class="btn-group">
          <el-button :class="{active: type === 'week'}" type="text" @click="searchData('week')">近7天</el-button>
          <el-button :class="{active: type === 'month'}" type="text" @click="searchData('month')">近30天</el-button>
        </div>
      </div>
      <div class="badSell-list">
        <el-table :data="sellData" height="485" border v-loading="loading">
          <el-table-column prop="rank" label="排名" width="80px"></el-table-column>
          <el-table-column prop="number" label="款号"></el-table-column>
          <el-table-column prop="name" label="商品名称"></el-table-column>
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
        type: 'month',
        total: 100,
        start: 1,
        end: 10,
        size: 10,
        sellData: [],
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
            this.total = 34;
            this.sellData = tableData[type].slice(0, 10);
            break;
          case 'month':
            this.total = 100;
            this.sellData = tableData[type].slice(0, 10);
            break;
        }
      }
    }
  }
</script>

<style lang="scss">
  .badSell-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .badSell-content {
      background-color: #ffffff;
      .badSell-top {
        position: relative;
        .btn-group {
          position: absolute;
          top: 0;
          right: 15px;
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
      .badSell-list {
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
