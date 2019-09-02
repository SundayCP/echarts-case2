<template>
  <el-row :gutter="40" class="panel-group census">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <p class="card-panel-title-wrapper">总销售额</p>
        <div class="card-panel-census">
          <el-row>
            <el-col :lg="16">&nbsp;</el-col>
            <el-col :lg="4">
              <div class="compare-range rise"><i class="el-icon-caret-top"></i> 5.24%</div>
            </el-col>
            <el-col :lg="4">
              <div class="compare-range fall"><i class="el-icon-caret-bottom"></i> 1.24%</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="16">
              <div class="card-panel-census-total">
                <div class="card-panel-num">
                  <span class="card-money">￥</span>
                  <count-to :start-val="totalSalesStart" :end-val="totalSales" :duration="2600" class="card-count"/>
                </div>
              </div>
            </el-col>
            <el-col :lg="4">
              <div class="compare">周同比</div>
            </el-col>
            <el-col :lg="4">
              <div class="compare">日同比</div>
            </el-col>
          </el-row>
          <gauge-chart ref="gaugeChart" class="gauge-chart" :style="{height: '180px', width: '300px'}"/>
        </div>
        <p class="card-panel-footer">
          日销售额 ￥
          <count-to :start-val="todaySalesStart" :end-val="todaySales" :duration="2600"></count-to>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <p class="card-panel-title-wrapper">总门店试用量</p>
        <div class="card-panel-census">
          <el-row>
            <el-col :lg="16">&nbsp;</el-col>
            <el-col :lg="4">
              <div class="compare-range rise"><i class="el-icon-caret-top"></i> 3.24%</div>
            </el-col>
            <el-col :lg="4">
              <div class="compare-range fall"><i class="el-icon-caret-bottom"></i> 0.80%</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="16">
              <div class="card-panel-census-total">
                <div class="card-panel-num">
                  <count-to :start-val="trialStart" :end-val="trial" :duration="2600"/>
                </div>
              </div>
            </el-col>
            <el-col :lg="4">
              <div class="compare">周同比</div>
            </el-col>
            <el-col :lg="4">
              <div class="compare">日同比</div>
            </el-col>
          </el-row>
          <bar-chart class="bar-chart" :style="{height: '100px', width: '350px'}"/>
        </div>
        <p class="card-panel-footer">
          日试用量
          <count-to :start-val="todayTrialStart" :end-val="todayTrial" :duration="2600"></count-to>
        </p>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <p class="card-panel-title-wrapper">总支付笔数</p>
        <div class="card-panel-census">
          <count-to :start-val="0" :end-val="payTimes" :duration="2600" class="pay-times"/>
          <el-row style="margin-top: 48px">
            <el-col :lg="18">支付宝</el-col>
            <el-col :lg="5">1058</el-col>
          </el-row>
          <el-progress :percentage="30" color="#FFB63A"></el-progress>
          <el-row style="margin-top: 18px">
            <el-col :lg="18">微信</el-col>
            <el-col :lg="5">726</el-col>
          </el-row>
          <el-progress :percentage="25" color="#EB4549"></el-progress>
          <el-row style="margin-top: 18px">
            <el-col :lg="18">现金</el-col>
            <el-col :lg="5">1417</el-col>
          </el-row>
          <el-progress :percentage="48" color="#25D1D7"></el-progress>
        </div>
        <p class="card-panel-footer">&nbsp;</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import CountTo from 'vue-count-to';
  import GaugeChart from './GaugeChart';
  import BarChart from './BarChart';

  export default {
    name: "CensusGroup",
    components: {CountTo, GaugeChart, BarChart},
    data() {
      return {
        salesTimer: '',
        trialTimer: '',

        // 销售总额开始数
        totalSalesStart: 0,
        // 销售总额
        totalSales: 0,
        // 日销售额开始数
        todaySalesStart: 0,
        todaySales: 0,

        // 门店试用总量开始数
        trialStart: 0,
        // 门店试用总量
        trial: 0,
        // 日试用量开始数
        todayTrialStart: 0,
        todayTrial: 0,

        // 支付笔数开始数
        payTimesStart: 0,
        // 支付笔数
        payTimes: 0
      }
    },

    mounted() {
      let
        totalSales = sessionStorage.getItem('totalSales'),
        todaySales = sessionStorage.getItem('todaySales'),
        trial = sessionStorage.getItem('trial'),
        todayTrial = sessionStorage.getItem('todayTrial'),
        payTimes = sessionStorage.getItem('payTimes');

      this.totalSales = !totalSales || totalSales === 'undefined' ? 201596 : +totalSales;
      this.todaySales = !todaySales || todaySales === 'undefined' ? 15963 : +todaySales;
      this.trial = !trial || trial === 'undefined' ? 2936 : +trial;
      this.todayTrial = !todayTrial || todayTrial === 'undefined' ? 63 : +todayTrial;
      this.payTimes = !payTimes || payTimes === 'undefined' ? 3201 : +payTimes;

      this.salesTimer = setInterval(() => {
        let randomNum = Math.floor(Math.random() * 100 + 1);
        this.totalSalesStart = this.totalSales;
        this.totalSales += randomNum;

        this.todaySalesStart = this.todaySales;
        this.todaySales += randomNum;
        this.$refs.gaugeChart.$emit('bridge', this.todaySales);
      }, 10000);

      this.trialTimer = setInterval(() => {
        let trialNum = Math.floor(Math.random() * 5 + 1);
        this.trialStart = this.trial;
        this.trial += trialNum;

        this.todayTrialStart = this.todayTrial;
        this.todayTrial += trialNum;
      }, 6000);
    },

    watch: {
      totalSales(value) {
        sessionStorage.setItem('totalSales', value);
      },

      todaySales(value) {
        sessionStorage.setItem('todaySales', value);
      },

      trial(value) {
        sessionStorage.setItem('trial', value);
      },

      todayTrial(value) {
        sessionStorage.setItem('todayTrial', value);
      }
    },

    beforeDestroy() {
      clearInterval(this.salesTimer);
      clearInterval(this.trialTimer);
    }
  }
</script>

<style lang="scss">
  .census {
    .card-panel {
      .card-panel-title-wrapper {
        color: #999999;
        font-weight: normal;
      }
      .card-panel-census {
        padding: 0 15px 10px 15px;
        height: 200px;
        background-color: #ffffff;
        .pay-times {
          position: relative;
          font-size: 24px;
          top: 16px;
        }
        .card-panel-num {
          display: inline-block;
          font-size: 24px;
          .card-money {
            position: absolute;
            left: -5px;
          }
          .card-count {
            margin-left: 16px;
          }
        }
        .compare {
          display: flex;
          height: 27px;
          align-items: flex-end;
        }
        .compare, .compare-range {
          font-size: 14px;
        }
        .compare-range {
          &.rise {
            color: #2FAD35;
          }
          &.fall {
            color: #EB4549;
          }
        }
        .gauge-chart {
          top: 52px;
          left: -58px;
        }
        .bar-chart {
          top: 56px
        }
        .el-progress__text {
          display: none;
        }
      }
      .card-panel-footer {
        margin: 0;
        padding: 10px 15px;
        font-size: 14px;
        background-color: #ffffff;
      }
    }
  }
</style>
