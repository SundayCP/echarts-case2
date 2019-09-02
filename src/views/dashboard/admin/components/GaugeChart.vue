<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
  import echarts from 'echarts'
  import {debounce} from '@/utils'

  export default {
    name: "TabPieChart",
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
        default: '356px'
      },
      autoResize: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        chart: null,
        data: [],
        percent: 0,
        todaySales: 0
      }
    },
    mounted() {
      let todaySales = sessionStorage.getItem('todaySales');
      this.todaySales = !todaySales || todaySales === 'undefined' ? 15963 : +todaySales;
      this.data = [{value: this.todaySales, name: '日销售额'}];
      this.percent = this.todaySales / 80000;

      this.$on('bridge', (sales) => {
        this.childAction(sales);
      });

      this.initChart();
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
      setOptions(data, percent) {
        this.chart.setOption({
          tooltip: {
            formatter: "{a} <br/>{b} : ￥{c}"
          },
          series: [
            {
              title: {show: false},
              name: '销售额',
              type: 'gauge',
              radius: '100%',
              startAngle: 180,
              endAngle: 0,
              max: 80000,
              axisLine: {
                lineStyle: {width: 28, color: [[percent, '#4CD7DC'], [1, '#ECEFF4']]}
              },
              splitLine: {show: false},
              axisTick: {show: false},
              axisLabel: {show: false},
              pointer: {length: '60%'},
              detail: {show: false},
              data: data  //[{value: 15963, name: '日销售额'}]
            }
          ]
        })
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons');
        this.setOptions(this.data, this.percent);
      },
      childAction(sales) {
        this.data = [{value: sales, name: '日销售额'}];
        this.percent = sales / 80000;
        this.setOptions(this.data, this.percent);
      }
    }
  }
</script>
