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
      pieData: {
        type: Array,
        required: true
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
          legend: {show: false},
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['50%', '70%'],
              hoverAnimation: false,
              avoidLabelOverlap: false,
              label: {show: false},
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.pieData
            }
          ],
          color: ['#FF7725', '#E5E5E5']
        })
      }
    }
  }
</script>
