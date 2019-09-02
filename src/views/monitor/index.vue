<template>
  <div class="monitor-container">
    <store-transfor/>
    <operate/>
    <!--<component/>-->
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import StoreTransfor from './store-transfor';
  import Operate from './operate';

  export default {
    name: 'Monitor',
    components: {StoreTransfor, Operate},
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    }
  }
</script>

<style lang="scss">
  .monitor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
  }
</style>
