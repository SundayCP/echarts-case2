<template>
  <div class="dashboard-editor-container">

    <panel-group/>
    <census-group/>
    <data-rankings/>
  </div>
</template>

<script>
  import PanelGroup from './components/PanelGroup'
  import CensusGroup from './components/CensusGroup'
  import DataRankings from './components/DataRankings';

  export default {
    name: 'DashboardAdmin',
    components: {PanelGroup, CensusGroup, DataRankings}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
</style>
