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
        pieData: [
          {value: 100750.00, name: '针织衫'}, {value: 91556.00, name: '连衣裙'},
          {value: 76800.00, name: '风衣'}, {value: 69128.00, name: '衬衫'}, {value: 150659.00, name: '其他'}
        ],
        title: '全部渠道'
      }
    },
    mounted() {
      this.$on('bridge', (data, title) => {
        console.log('求求');
        this.childAction(data, title);
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
      setOptions(data, title) {
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            show: false
          },
          series: [
            {
              name: title,
              type: 'pie',
              radius: ['55%', '70%'],
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                // normal: {
                //   show: false,
                //   position: 'center',
                //   formatter: '{b}: {d}'
                // },
                // emphasis: {
                //   show: true,
                //   textStyle: {
                //     fontSize: '30',
                //     fontWeight: 'bold'
                //   }
                // }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: data
            }
          ],
          color: ['#73CBA7', '#EB4549', '#FFD876', '#3399FF', '#4CD7DC']
        })
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons');
        this.setOptions(this.pieData, this.title);
      },
      childAction(data, title) {
        this.setOptions(data, title);
      }
    }
  }
</script>
