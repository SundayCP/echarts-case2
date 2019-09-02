<template>
  <div class="monitor-operate-container">
    <div class="monitor-operate-title-wrapper">线上运营活动的实时交易情况</div>
    <div class="monitor-operate-content">
      <el-row class="monitor-operate-data">
        <el-col :span="6">
          <div class="operate-data-title">今日交易总额</div>
          <div class="operate-data-inner">
            ￥
            <count-to :start-val="todaySalesStart" :end-val="todaySales" :duration="2600" class="card-panel-num"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="operate-data-title">销售目标完成率</div>
          <div class="operate-data-inner">
            <count-to :start-val="0" :end-val="50" :duration="2600" class="card-panel-num"/>
            %
          </div>
        </el-col>
        <el-col :span="6">
          <div class="operate-data-title">活动剩余时间</div>
          <div class="operate-data-inner">{{time}}</div>
        </el-col>
        <el-col :span="6">
          <div class="operate-data-title">每秒交易总额</div>
          <div class="operate-data-inner">
            <count-to :start-val="secondSalesStart" :end-val="secondSales" :duration="2600" class="card-panel-num"/>
          </div>
        </el-col>
      </el-row>
      <div class="china-chart-content">
        <china-map :style="{height: '600px', width: '860px'}"/>
        <ul class="china-map-legend">
          <li>
            <div class="color-div"></div>
            <div class="legend-disc">大于300元</div>
            <div>8%</div>
          </li>
          <li>
            <div class="color-div"></div>
            <div class="legend-disc">201~300元</div>
            <div>21%</div>
          </li>
          <li>
            <div class="color-div"></div>
            <div class="legend-disc">101-200元</div>
            <div>32%</div>
          </li>
          <li>
            <div class="color-div"></div>
            <div class="legend-disc">小于100元</div>
            <div>39%</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import CountTo from 'vue-count-to';
  import ChinaMap from './components/ChinaMap';

  export default {
    name: "Operate",
    components: {ChinaMap, CountTo},
    data() {
      return {
        timer: '',
        time: '',
        todayTimer: '',
        secondTimer: '',

        todaySalesStart: 0,
        todaySales: 0,

        secondSalesStart: 0,
        secondSales: 0
      }
    },

    mounted() {
      let
        todaySales = sessionStorage.getItem('todaySales'),
        secondSales = sessionStorage.getItem('secondSales');

      this.todaySales = !todaySales || todaySales === 'undefined' ? 201996 : +todaySales;
      this.secondSales = !secondSales || secondSales === 'undefined' ? 123 : +secondSales;

      this.todayTimer = setInterval(() => {
        this.todaySalesStart = this.todaySales;
        this.todaySales += Math.floor(Math.random() * 100 + 1);
      }, 10000);

      this.todayTimer = setInterval(() => {
        this.secondSalesStart = this.secondSales;
        this.secondSales += Math.floor(Math.random() + 1);
      }, 10000);

      this.time = this.getRemainingTime();
      this.timer = setInterval(() => {
        this.time = this.getRemainingTime();
      }, 1000);
    },

    methods: {
      getRemainingTime() {
        let
          zero = new Date(new Date().toLocaleDateString()).getTime(),
          point24 = zero + (3600 * 1000 * 24),
          current = new Date().getTime(),
          remaining = point24 - current;

        let
          remain = new Date(zero + remaining),
          hours = remain.getHours(),
          minute = remain.getMinutes(),
          seconds = remain.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        minute = minute < 10 ? '0' + minute : minute;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return hours + ':' + minute + ':' + seconds;
      }
    },

    watch: {
      todaySales(value) {
        sessionStorage.setItem('todaySales', value);
      },

      secondSales(value) {
        sessionStorage.setItem('secondSales', value);
      }
    },

    beforeDestroy() {
      clearInterval(this.timer);
      clearInterval(this.todayTimer);
      clearInterval(this.secondTimer);
    }
  }
</script>

<style lang="scss">
  .monitor-operate-container {
    height: 770px;
    .monitor-operate-title-wrapper {
      padding: 15px 15px;
      margin: 0;
      color: #333333;
      font-size: 14px;
      font-weight: bold;
      background-color: #ffffff;
    }
    .monitor-operate-content {
      padding: 20px 15px;
      margin-top: 4px;
      height: 720px;
      background-color: #ffffff;
      .anchorBL, .BMap_cpyCtrl {
        display: none;
      }
      .monitor-operate-data {
        .operate-data-title {
          font-size: 14px;
          color: #999999;
          margin-bottom: 8px;
        }
        .operate-data-inner {
          font-size: 24px;
          color: #3D4D65;
        }
      }
      .china-chart-content {
        margin: 0 auto;
        width: 1080px;
        height: 630px;
        .chart {
          float: left
        }
        ul.china-map-legend {
          position: relative;
          margin-top: 400px;
          float: left;
          font-size: 14px;
          li {
            height: 30px;
            display: flex;
            list-style: none;
            align-items: center;
            div {
              margin: 0 8px;
            }
            .color-div {
              width: 10px;
              height: 10px;
              border-radius: 10px;
            }
            .legend-disc {
              width: 80px;
            }
            &:nth-child(1) {
              .color-div {
                background-color: #1920AC;
              }
            }
            &:nth-child(2) {
              .color-div {
                background-color: #3D46E2;
              }
            }
            &:nth-child(3) {
              .color-div {
                background-color: #6A71FF;
              }
            }
            &:nth-child(4) {
              .color-div {
                background-color: #AECDFF;
              }
            }
          }
        }
      }
    }
  }
</style>
