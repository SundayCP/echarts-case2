<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <p class="card-panel-title-wrapper">线上热搜关键词</p>
        <div class="card-panel-description">
          <div class="card-panel-description-top">
            <el-row>
              <el-col :lg="12" class="top-left">
                <p class="top-title">搜索用户数</p>
                <div class="num-description">
                  <count-to
                    :start-val="searchUserStart" :end-val="searchUserCount" :duration="2600" class="card-panel-num"
                  />
                  <div class="num-trend rise">
                    <i class="el-icon-caret-top"></i>
                    <span>6.31%</span>
                  </div>
                  <icon-chart :style="{height: '50px', width: '80%'}" :chartData="leftIconData"
                              :areaColor="leftAreaColor"/>
                </div>
              </el-col>
              <el-col :lg="12" class="top-right">
                <p class="top-title">人均搜索次数</p>
                <div class="num-description">
                  <count-to :start-val="averageSearchStart" :end-val="averageSearchTimes" :duration="2600"
                            class="card-panel-num"/>
                  <div class="num-trend fall">
                    <i class="el-icon-caret-bottom"></i>
                    <span>1.40%</span>
                  </div>
                  <icon-chart :style="{height: '50px', width: '80%'}" :chartData="rightIconData"
                              :areaColor="rightAreaColor"/>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="card-panel-description-bottom">
            <el-table :data="tableData" border v-loading="loading" height="205" style="width: 100%">
              <el-table-column prop="rank" label="排名"></el-table-column>
              <el-table-column prop="searchKey" label="搜索关键词"></el-table-column>
              <el-table-column prop="number" label="用户数"></el-table-column>
              <el-table-column prop="range" label="周涨幅"></el-table-column>
            </el-table>
            <el-pagination :class="{active: active}" layout="prev, pager, next" :total="50"
                           @current-change="handlePaging"></el-pagination>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <p class="card-panel-title-wrapper">销售额类别占比</p>
        <div class="card-panel-description">
          <div class="pie-chart-content">
            <div class="pie-sales">
              销售额<p><span>￥</span>{{salesCensus}}</p>
            </div>
            <tab-pie-chart ref="all" :style="{height: '310px', width: '100%'}"/>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="全部渠道" name="all">
              <tabs-pie-content :loading="allLoading" :tableData="allData"/>
            </el-tab-pane>
            <el-tab-pane label="线上" name="online">
              <tabs-pie-content :loading="allLoading" :tableData="allData"/>
            </el-tab-pane>
            <el-tab-pane label="门店" name="store">
              <tabs-pie-content :loading="allLoading" :tableData="allData"/>
            </el-tab-pane>
          </el-tabs>
          <!--<count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num"/>-->
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import CountTo from 'vue-count-to';
  import IconChart from './IconChart';
  import TabPieChart from './TabPieChart';
  import TabsPieContent from './TabsPieContent';

  export default {
    components: {CountTo, IconChart, TabPieChart, TabsPieContent},
    data() {
      return {
        searchTimer: '',
        averageTimer: '',
        // 搜索用户数开始数
        searchUserStart: 0,
        // 搜索用户数
        searchUserCount: 0,

        // 人均搜索次数开始数
        averageSearchStart: 0,
        // 人均搜索次数
        averageSearchTimes: 0,


        leftIconData: [6, 4, 3.8, 3, 2.9, 3.2, 3.8, 5, 3.8, 6, 5.8, 8, 2.4, 7.5, 3],
        leftAreaColor: '#73D7D1',
        rightIconData: [8, 6, 6.3, 6.8, 8, 5.2, 5, 5, 6.3, 8, 4, 4.5, 7, 11, 0],
        rightAreaColor: '#FFD876',
        // 分页固定数据
        pageData: {
          '1': [
            {rank: 1, searchKey: '毛呢', number: 10032, range: '2.5%'},
            {rank: 2, searchKey: '粉色牛仔外套', number: 9011, range: '2.6%'},
            {rank: 3, searchKey: '懒人围脖', number: 8475, range: '1.2%'},
            {rank: 4, searchKey: '森女风', number: 8300, range: '0.9%'},
            {rank: 5, searchKey: '毛衣', number: 8256, range: '2.0%'}
          ],
          '2': [
            {rank: 6, searchKey: '女装', number: 8122, range: '1.0%'},
            {rank: 7, searchKey: '内衣', number: 7100, range: '2.3%'},
            {rank: 8, searchKey: '婴幼儿服装', number: 7009, range: '1.9%'},
            {rank: 9, searchKey: '女式针织衫', number: 7001, range: '1.6%'},
            {rank: 10, searchKey: '女式风衣', number: 6902, range: '2.5%'}
          ],
          '3': [
            {rank: 11, searchKey: '女式羽绒服', number: 6868, range: '1.5%'},
            {rank: 12, searchKey: '婚纱礼服', number: 6814, range: '1.2%'},
            {rank: 13, searchKey: '女式休闲裤', number: 6512, range: '0.6%'},
            {rank: 14, searchKey: '女式牛仔裤', number: 6421, range: '0.7%'},
            {rank: 15, searchKey: '男式家居服', number: 6336, range: '1.0%'}
          ],
          '4': [
            {rank: 16, searchKey: '情侣装', number: 6200, range: '0.9%'},
            {rank: 17, searchKey: '运动服', number: 6200, range: '1.7%'},
            {rank: 18, searchKey: '运动裤', number: 6114, range: '1.4%'},
            {rank: 19, searchKey: '打底裤', number: 6102, range: '1.3%'},
            {rank: 20, searchKey: '女式卫衣', number: 6023, range: '0.3%'}
          ],
          '5': [
            {rank: 21, searchKey: '文胸', number: 5999, range: '0.5%'},
            {rank: 22, searchKey: '肩带吊袜', number: 5898, range: '1.4%'},
            {rank: 23, searchKey: '棉衣', number: 5712, range: '1.2%'},
            {rank: 24, searchKey: '童裙', number: 5642, range: '1.1%'},
            {rank: 25, searchKey: '吊带衫', number: 5601, range: '0.8%'}
          ]
        },
        tableData: [],
        loading: true,
        active: false,

        tabsText: {all: '全部渠道', online: '线上', store: '门店'},
        activeName: 'all',
        salesData: {
          all: [
            {className: 'flag flag-1', name: '针织衫', percent: '20.61%', amount: '￥100750.00'},
            {className: 'flag flag-2', name: '连衣裙', percent: '18.73%', amount: '￥91556.00'},
            {className: 'flag flag-3', name: '风衣', percent: '15.71%', amount: '￥76800.00'},
            {className: 'flag flag-4', name: '衬衫', percent: '14.14%', amount: '￥69128.00'},
            {className: 'flag flag-5', name: '其他', percent: '30.81%', amount: '￥150659.00'}
          ],
          online: [
            {className: 'flag flag-1', name: '针织衫', percent: '19.19%', amount: '￥43250.00'},
            {className: 'flag flag-2', name: '连衣裙', percent: '14.47%', amount: '￥32621.00'},
            {className: 'flag flag-3', name: '风衣', percent: '13.89%', amount: '￥31298.00'},
            {className: 'flag flag-4', name: '衬衫', percent: '13.32%', amount: '￥30029.00'},
            {className: 'flag flag-5', name: '其他', percent: '39.13%', amount: '￥88196.00'}
          ],
          store: [
            {className: 'flag flag-1', name: '针织衫', percent: '21.82%', amount: '￥57500.00'},
            {className: 'flag flag-2', name: '连衣裙', percent: '22.37%', amount: '￥58935.00'},
            {className: 'flag flag-3', name: '风衣', percent: '17.27%', amount: '￥45502.00'},
            {className: 'flag flag-4', name: '衬衫', percent: '14.84%', amount: '￥39099.00'},
            {className: 'flag flag-5', name: '其他', percent: '23.70%', amount: '￥62463.00'}
          ]
        },
        pieData: {
          all: [
            {value: 100750.00, name: '针织衫'}, {value: 91556.00, name: '连衣裙'},
            {value: 76800.00, name: '风衣'}, {value: 69128.00, name: '衬衫'}, {value: 150659.00, name: '其他'}
          ],
          online: [
            {value: 43250.00, name: '针织衫'}, {value: 32621.00, name: '连衣裙'},
            {value: 31298.00, name: '风衣'}, {value: 30029.00, name: '衬衫'}, {value: 88196.00, name: '其他'}
          ],
          store: [
            {value: 57500.00, name: '针织衫'}, {value: 58935.00, name: '连衣裙'},
            {value: 45502.00, name: '风衣'}, {value: 39099.00, name: '衬衫'}, {value: 62463.00, name: '其他'}
          ]
        },
        allSalesCensus: {
          all: '488893.00',
          online: '225394.00',
          store: '263499.00'
        },
        salesCensus: '488893.00',
        allData: [],
        allLoading: true
      }
    },

    mounted() {
      let
        stSearchUserCount = sessionStorage.getItem('searchUserCount'),
        stAverageSearch = sessionStorage.getItem('averageSearchTimes');

      this.searchUserCount = !stSearchUserCount || stSearchUserCount === 'undefined' ? 172000 : +stSearchUserCount;
      this.averageSearchTimes = !stAverageSearch || stAverageSearch === 'undefined' ? 45000 : +stAverageSearch;

      setTimeout(() => {
        this.tableData = this.pageData[1];
        this.loading = false;
        this.active = true;

        this.allData = this.salesData['all'];
        this.allLoading = false;
      }, 1000);

      // 每隔十秒，增加搜索用户数
      this.searchTimer = setInterval(() => {
        this.searchUserStart = this.searchUserCount;
        this.searchUserCount += Math.floor(Math.random() * 10 + 1);
      }, 10000);

      // 每隔8秒，增加平均搜索次数
      this.averageTimer = setInterval(() => {
        this.averageSearchStart = this.averageSearchTimes;
        this.averageSearchTimes += Math.floor(Math.random() * 7 + 1);
      }, 8000);
    },
    methods: {
      handlePaging(page) {
        this.tableData = this.pageData[page];
      }
    },

    watch: {
      activeName(val) {
        this.salesCensus = this.allSalesCensus[val];
        this.allData = this.salesData[val];
        console.log(this.$refs.all);
        this.$refs.all.$emit('bridge', this.pieData[val], this.tabsText[val]);
      },

      searchUserCount(value) {
        //存储到sessionStorage中
        sessionStorage.setItem('searchUserCount', value);
      },

      averageSearchTimes(value) {
        sessionStorage.setItem('averageSearchTimes', value);
      }
    },

    beforeDestroy() {
      clearInterval(this.searchTimer);
      clearInterval(this.averageTimer);
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .panel-group {
    .card-panel-col {
      margin-bottom: 32px;
    }
    .card-panel {
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      border-radius: 4px;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      .card-panel-title-wrapper {
        padding: 10px 15px;
        margin: 0;
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        background-color: #ffffff;
      }
      .card-panel-description {
        padding: 10px 15px;
        margin-top: 4px;
        height: 376px;
        font-size: 14px;
        background-color: #ffffff;
        .card-panel-description-top {
          margin-bottom: 15px;
          p.top-title {
            margin: 0 0 4px 0;
            color: #999999;
          }
          .card-panel-num {
            color: #3399FF;
            font-size: 24px;
            font-weight: bold;
          }
          .num-trend {
            display: inline-block;
            margin-left: 4px;
            &.rise {
              color: #2FAD35;
            }
            &.fall {
              color: #EB4549;
            }
          }
        }
        .card-panel-description-bottom {
          .el-table--medium {
            margin-bottom: 6px;
            td, th {
              padding: 5px 0;
            }
          }
          .el-pagination {
            display: none;
            text-align: right;
            font-weight: normal;
            &.active {
              display: block;
            }
          }
        }
        .pie-chart-content {
          position: absolute;
          top: 85px;
          width: 300px;
          height: 310px;
          z-index: 10;
          .pie-sales {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 140px;
            height: 84px;
            top: 114px;
            left: 80px;
            p {
              margin: 8px 0 0 0;
              color: #5DA9FF;
              font-size: 20px;
              font-weight: bold;
              span {
                font-size: 16px;
                font-weight: normal;
              }
            }
          }
        }
        .el-tabs {
          .el-tabs__item {
            height: 24px;
            line-height: 1;
          }
          .el-tabs__content {
            .el-tab-pane {
              height: 310px;
            }
            .el-table--medium {
              td, th {
                padding: 5px 0;
              }
              td {
                .flag {
                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  border-radius: 8px;
                }
                .flag-1 {
                  background-color: #2EC7C9;
                }
                .flag-2 {
                  background-color: #EB4549;
                }
                .flag-3 {
                  background-color: #FFD876;
                }
                .flag-4 {
                  background-color: #3399FF;
                }
                .flag-5 {
                  background-color: #4CD7DC;
                }
              }
            }
            .el-table {
              position: absolute;
              top: 54px;
              right: 0;
              width: 60%;
              background: transparent;
              &::before {
                height: 0;
              }
              th, tr {
                background: transparent;
                &:hover {
                  td {
                    background: transparent;
                  }
                }
              }
              td, th.is-leaf {
                border-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
