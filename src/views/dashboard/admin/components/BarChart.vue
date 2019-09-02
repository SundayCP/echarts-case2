<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
  import {debounce} from '@/utils'

  const animationDuration = 6000

  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart()
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      window.removeEventListener('resize', this.__resizeHandler)
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')

        this.chart.setOption({
          tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            show: false,
            top: '0',
            left: -30,
            bottom: -10,
            containLabel: true
          },
          xAxis: [{
            show: false,
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            show: false,
            type: 'value',
            axisTick: {
              show: false
            }
          }],
          series: [{
            name: 'pageA',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [79, 52, 200, 334, 390, 330, 220, 100, 123, 145, 200, 90, 300, 200, 100, 234, 356, 168],
            animationDuration,
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = [
                    '#0082D5', '#0082D5', '#0082D5', '#0082D5', '#0082D5',
                    '#D2335C', '#D2335C', '#D2335C', '#0082D5', '#0082D5',
                    '#0082D5', '#D2335C', '#0082D5', '#D2335C', '#D2335C', '#0082D5', '#0082D5', '#D2335C'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            }
          }]
        })
      }
    }
  }
</script>
