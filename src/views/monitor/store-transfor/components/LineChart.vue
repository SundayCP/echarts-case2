<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
  import echarts from 'echarts'
  import {debounce} from '@/utils'

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
      this.initChart();
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener('resize', this.__resizeHandler);
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      window.removeEventListener('resize', this.__resizeHandler);
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el);

        this.chart.setOption({
          grid: {
            left: 50,
            right: 40,
            bottom: 40
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
              '00:00 ~ 00:59', '01:00 ~ 01:59', '02:00 ~ 02:59', '03:00 ~ 03:59', '04:00 ~ 00:59', '05:00 ~ 05:59',
              '06:00 ~ 06:59', '07:00 ~ 07:59', '08:00 ~ 08:59', '09:00 ~ 09:59', '10:00 ~ 10:59', '11:00 ~ 11:59',
              '12:00 ~ 12:59', '13:00 ~ 13:59', '14:00 ~ 14:59', '15:00 ~ 15:59', '16:00 ~ 16:59', '17:00 ~ 17:59',
              '18:00 ~ 18:59', '19:00 ~ 19:59', '20:00 ~ 20:59', '21:00 ~ 21:59', '22:00 ~ 22:59', '23:00 ~ 23:59'
            ]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '支付笔数',
              data: [10, 7, 4, 4, 2, 1, 1, 10, 15, 16, 40, 20, 25, 40, 45, 42, 36, 37, 28, 28, 30, 24, 28, 18],
              type: 'line',
              showSymbol: true,
              lineStyle: {color: '#4AD5DA'},
              areaStyle: {color: '#4AD5DA'},
              smooth: true
              // markPoint: {
              //   data: [
              //     {type: 'max', name: '最大值'},
              //     {type: 'min', name: '最小值'}
              //   ]
              // }
            },
            {
              name: '客流量',
              data: [40, 28, 26, 20, 10, 5, 15, 38, 45, 50, 60, 55, 46, 53, 50, 56, 42, 48, 43, 35, 40, 35, 38, 30],
              type: 'line',
              showSymbol: true,
              lineStyle: {color: '#4AD5DA', type: 'dashed'},
              smooth: true
              // areaStyle: {color: this.areaColor},
              // markPoint: {
              //   data: [
              //     {type: 'max', name: '最大值'},
              //     {type: 'min', name: '最小值'}
              //   ]
              // }
            }
          ]
        })
      }
    }
  }
</script>
