<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
  import echarts from 'echarts'
  import {debounce} from '@/utils'

  export default {
    name: "SalesAreaChart",
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
        default: '350px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      areaColor: {
        type: String,
        default: '#73D7D1'
      }
    },
    data() {
      return {
        chart: null,
        chartData: [],
        axisDate: []
      }
    },
    mounted() {
      this.$on('bridge', (data, axisDate) => {
        this.childAction(data, axisDate);
      });

      if (this.autoResize) {
        this.__resizeHandler = debounce(() => {
          if (this.chart) {
            this.chart.resize();
          }
        }, 100);
        window.addEventListener('resize', this.__resizeHandler);
      }

      // 监听侧边栏的变化
      const sidebarElm = document.getElementsByClassName('sidebar-container')[0];
      sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler);
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      if (this.autoResize) {
        window.removeEventListener('resize', this.__resizeHandler);
      }

      const sidebarElm = document.getElementsByClassName('sidebar-container')[0];
      sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler);

      this.chart.dispose();
      this.chart = null
    },
    methods: {
      sidebarResizeHandler(e) {
        if (e.propertyName === 'width') {
          this.__resizeHandler();
        }
      },
      setOptions(data, axisDate) { // #73D7D1
        this.chart.setOption({
          grid: {
            left: 50,
            right: 40,
            bottom: 40
          },
          tooltip: {
            show: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: axisDate
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: data,
            type: 'line',
            showSymbol: true,
            lineStyle: {
              color: this.areaColor
            },
            areaStyle: {
              color: this.areaColor
            },
            markPoint: {
              data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
              ]
            }
          }]
        })
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons');
        this.setOptions(this.chartData, this.axisDate);
      },

      childAction(data, axisDate) {
        if (this.chart) {
          this.setOptions(data, axisDate);
        } else {
          this.chartData = data;
          this.axisDate = axisDate;
          this.initChart();
        }
      }
    }
  }
</script>

