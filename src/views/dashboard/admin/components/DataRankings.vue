<template>
  <div class="data-rankings card-panel">
    <el-tabs v-model="activeName">
      <el-tab-pane label="销售量" name="sales">
        <div class="pane-title">门店销售量排名</div>
        <el-table :data="salesRanking" style="width: 300px">
          <el-table-column label="">
            <template slot-scope="scope">
              <span>{{scope.row.rank}}</span>
              <!--<i class="el-icon-time"></i>-->
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="">
            <template slot-scope="scope">
              <span>￥{{ scope.row.sales }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="门店试用量" name="store">
        <div class="pane-title">门店试用量排名</div>
        <el-table :data="storeRanking" style="width: 300px">
          <el-table-column label="">
            <template slot-scope="scope">
              <span>{{scope.row.rank}}</span>
              <!--<i class="el-icon-time"></i>-->
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="">
            <template slot-scope="scope">
              <span>{{ scope.row.sales }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <sales-area-chart ref="salesChart" class="sales-area-chart" :style="{height:'340px', width:'calc(100% - 340px)'}"/>
    <div class="fun-group">
      <!--<el-button type="text">本日</el-button>-->
      <el-button :class="{active: type === 'week'}" type="text" @click="changeType('week')">近一周</el-button>
      <el-button :class="{active: type === 'month'}" type="text" @click="changeType('month')">近一月</el-button>
      <el-button :class="{active: type === 'year'}" type="text" @click="changeType('year')">近一年</el-button>
      <el-date-picker
        v-model="date" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  import SalesAreaChart from './SalesAreaChart';

  export default {
    name: "DataRankings",
    components: {SalesAreaChart},
    data() {
      return {
        type: 'week',
        axisDate: [],
        chartData: [],
        activeName: 'sales',
        date: [],
        days: 0,
        salesRanking: [
          {rank: 1, name: '文一西路店', sales: '207500.00'},
          {rank: 2, name: '下沙一号店', sales: '195350.48'},
          {rank: 3, name: '下沙二号店', sales: '160221.02'},
          {rank: 4, name: '湖滨银泰店', sales: '145362.49'},
          {rank: 5, name: '西溪印象城店', sales: '123037.80'},
          {rank: 5, name: '文二西路店', sales: '102964.00'}
        ],
        storeRanking: [
          {rank: 1, name: '下沙一号店', sales: '5630'},
          {rank: 2, name: '湖滨银泰店', sales: '5520'},
          {rank: 3, name: '下沙二号店', sales: '5001'},
          {rank: 4, name: '文一西路店', sales: '4892'},
          {rank: 5, name: '文二西路店', sales: '4621'},
          {rank: 5, name: '西溪印象城店', sales: '3708'}
        ],

        staticData: {
          sales: [],
          store: []
        },
        staticMonth: {
          sales: [],
          store: []
        }
      }
    },

    created() {
      this.saveStaticData();
    },

    mounted() {
      this.date = this.nearlyAWeek();
      this.days = 7;
    },

    methods: {
      // 近一周
      nearlyAWeek() {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        return [start, end];
      },

      // 近一月
      nearlyAMonth() {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        return [start, end];
      },

      // 近一年
      nearlyAYear() {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
        return [start, end];
      },

      changeType(value) {
        if (this.type === value) return;

        this.type = value;
        switch (value) {
          case 'week':
            this.date = this.nearlyAWeek();
            break;
          case 'month':
            this.date = this.nearlyAMonth();
            break;
          case 'year':
            this.date = this.nearlyAYear();
            break;
        }
        let
          start = new Date(this.date[0]).getTime(),
          end = new Date(this.date[1]).getTime();
        this.days = (end - start) / (3600 * 1000 * 24);
      },

      // 计算图表数据
      calculateData() {
        if (this.days > 365 || this.days < 7) return;

        let interval = this.getInterval();
        if (interval !== 30) {
          this.calculateDayData(interval);
        } else {
          this.calculateMonthData();
        }
      },


      // 按照日期计算数据
      calculateDayData(interval) {
        let start = new Date(this.date[0]).getTime();
        for (let i = 0; i < this.days;) {
          let
            time = start + 3600 * 1000 * 24 * i,
            strDate = this.getStringDate(time, 'day');
          this.axisDate.push(strDate);
          this.chartData.push(this.staticData[this.activeName][i]);

          if (i !== this.days - 1 && i + interval >= this.days) {
            time = start + 3600 * 1000 * 24 * this.days;
            strDate = this.getStringDate(time);
            this.axisDate.push(strDate);
            this.chartData.push(this.staticData[this.activeName][this.days]);
          }
          i = i + interval;
        }

        console.log(this.axisDate, this.chartData);
        this.$refs.salesChart.$emit('bridge', this.chartData, this.axisDate);
      },

      // 按照月份计算数据
      calculateMonthData() {
        let month = 0;
        let start = new Date(this.date[0]).getTime();
        for (let i = 0; i < this.days;) {
          let
            time = start + 3600 * 1000 * 24 * i,
            strDate = this.getStringDate(time);
          this.axisDate.push(strDate);
          this.chartData.push(this.staticMonth[this.activeName][month]);

          i = i + 30;
          month++;
        }
        this.$refs.salesChart.$emit('bridge', this.chartData, this.axisDate);
      },

      getInterval() {
        let interval = 0; // 间隔
        if (this.days <= 30) {
          interval = 1;
        } else if (this.days > 30 && this.days <= 60) {
          interval = 2;
        } else if (this.days > 60 && this.days <= 90) {
          interval = 4;
        } else if (this.days > 90 && this.days <= 120) {
          interval = 6;
        } else if (this.days > 120 && this.days <= 150) {
          interval = 8;
        } else if (this.days > 150 && this.days <= 365) {
          interval = 30;    // 按照月来显示
        }
        return interval;
      },

      getStringDate(time, type) {
        let
          thDate = new Date(time),
          year = thDate.getYear() - 100,
          month = thDate.getMonth() + 1,
          day = thDate.getDate();

        return type === 'day' ? year + '/' + month + '/' + day : year + '/' + month;
      },

      saveStaticData() {
        for (let i = 0; i < 365; i++) {
          let
            random1 = Math.random(),
            random2 = Math.random();
          this.staticData.sales.push(+((45426 * random1).toFixed(2)));
          this.staticData.store.push(Math.floor(12300 * random2));
        }

        for (let j = 0; j < 12; j++) {
          let
            random3 = Math.random(),
            random4 = Math.random();
          this.staticMonth.sales.push(+((125426 * random3).toFixed(2)));
          this.staticMonth.store.push(Math.floor(52300 * random4));
        }
      }
    },

    watch: {
      days() {
        this.axisDate = [];
        this.chartData = [];
        this.calculateData();
      },

      activeName() {
        this.axisDate = [];
        this.chartData = [];
        this.calculateData();
      }
    }
  }
</script>

<style lang="scss">
  .data-rankings {
    position: relative;
    padding: 10px 15px;
    height: 400px;
    background-color: #ffffff;
    .el-tabs {
      .el-tabs__item {
        font-size: 16px;
      }
      .el-tab-pane {
        position: relative;
        overflow: hidden;
        height: 319px;
        .pane-title {
          width: 300px;
          position: absolute;
          right: 0;
          z-index: 1;
        }
        .el-table {
          position: absolute;
          right: 0;
          top: 7px;
          &::before {
            height: 0;
          }
          td, th.is-leaf {
            border-bottom: 0;
          }
        }
      }
    }
    .sales-area-chart {
      position: absolute;
      top: 50px;
    }
    .fun-group {
      position: absolute;
      top: 6px;
      right: 15px;
      .el-button {
        &.active {
          color: #e6a23c;
          &:hover {
            color: rgba(230, 162, 60, .8);
          }
        }
      }
      .el-date-editor {
        margin-left: 20px;
      }
      .el-range-editor--medium {
        width: 250px;
      }
    }
  }
</style>
