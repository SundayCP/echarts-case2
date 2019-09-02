<template>
  <div class="monitor-store-container">
    <div class="monitor-title-wrapper">门店转化率</div>
    <div class="monitor-store-content">
      <el-row class="transfor-list">
        <el-col :span="1"><i class="el-icon-arrow-left"></i></el-col>
        <el-col :span="22">
          <el-container>
            <el-header height="30px">下沙一号店</el-header>
            <el-container>
              <el-aside width="60px">
                <p class="percent">20%</p>
                <p class="intro">转化率</p>
              </el-aside>
              <el-main>
                <pie-chart :pie-data="piesData[3]" :style="{height: '120px', width: '140px'}"/>
              </el-main>
            </el-container>
          </el-container>
          <el-container>
            <el-header height="30px">湖滨银泰店</el-header>
            <el-container>
              <el-aside width="60px">
                <p class="percent">10%</p>
                <p class="intro">转化率</p>
              </el-aside>
              <el-main>
                <pie-chart :pie-data="piesData[1]" :style="{height: '120px', width: '140px'}"/>
              </el-main>
            </el-container>
          </el-container>
          <el-container>
            <el-header height="30px">下沙二号店</el-header>
            <el-container>
              <el-aside width="60px">
                <p class="percent">25%</p>
                <p class="intro">转化率</p>
              </el-aside>
              <el-main>
                <pie-chart :pie-data="piesData[2]" :style="{height: '120px', width: '140px'}"/>
              </el-main>
            </el-container>
          </el-container>
          <el-container>
            <el-header height="30px">文一西路店</el-header>
            <el-container>
              <el-aside width="60px">
                <p class="percent">7%</p>
                <p class="intro">转化率</p>
              </el-aside>
              <el-main>
                <pie-chart :pie-data="piesData[0]" :style="{height: '120px', width: '140px'}"/>
              </el-main>
            </el-container>
          </el-container>
          <el-container>
            <el-header height="30px">文二西路店</el-header>
            <el-container>
              <el-aside width="60px">
                <p class="percent">40%</p>
                <p class="intro">转化率</p>
              </el-aside>
              <el-main>
                <pie-chart :pie-data="piesData[4]" :style="{height: '120px', width: '140px'}"/>
              </el-main>
            </el-container>
          </el-container>
        </el-col>
        <el-col :span="1"><i class="el-icon-arrow-right"></i></el-col>
      </el-row>
      <div class="store-total-transfor">
        <div class="total-title-wrapper">门店总转化率</div>
        <line-chart :style="{height: '380px'}"/>
      </div>
    </div>
  </div>
</template>

<script>
  import PieChart from './components/PieChart';
  import LineChart from './components/LineChart';

  export default {
    name: 'StoreTransfor',
    components: {LineChart, PieChart},
    data() {
      return {
        piesData: [
          [{value: 7, name: '转化率'}, {value: 93, name: ''}], [{value: 10, name: '转化率'}, {value: 90, name: ''}],
          [{value: 25, name: '转化率'}, {value: 75, name: ''}], [{value: 20, name: '转化率'}, {value: 80, name: ''}],
          [{value: 40, name: '转化率'}, {value: 60, name: ''}],
        ]
      }
    }
  }
</script>

<style lang="scss">
  .monitor-store-container {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    margin-bottom: 24px;
    .monitor-title-wrapper {
      padding: 10px 15px;
      margin: 0;
      color: #333333;
      font-size: 14px;
      font-weight: bold;
      background-color: #ffffff;
    }
    .monitor-store-content {
      padding: 10px 15px;
      margin-top: 4px;
      height: 610px;
      font-size: 14px;
      background-color: #ffffff;
      .transfor-list {
        margin-bottom: 20px;
        .el-icon-arrow-left, .el-icon-arrow-right {
          font-size: 48px;
          color: #BDBDBD;
        }
        .el-col {
          &:first-child, &:last-child {
            height: 130px;
            i {
              position: relative;
              top: 70px;
              cursor: pointer;
              &:hover {
                color: #999999;
              }
            }
          }
          &:last-child {
            text-align: right;
          }
        }
        .el-container.is-vertical {
          float: left;
          display: inline-block;
          width: 20%;
          height: 160px;
          .el-header {
            padding: 0 0 0 15px;
            color: #54657E;
            line-height: 30px;
          }
          .el-container {
            font-weight: bold;
            p {
              margin: 4px 0;
            }
            .el-aside {
              padding-left: 15px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .percent {
                color: #FF7725;
              }
              .intro {
                color: #999999;
              }
            }
            .el-main {
              padding: 0;
              overflow: hidden;
              .chart {
                div {
                  left: -12px;
                }
              }
            }
          }
        }
      }
      .store-total-transfor{
        height: 410px;
      }
    }
  }
</style>
