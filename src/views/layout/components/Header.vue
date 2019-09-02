<template>
  <div id="data-demo-header">
    <div class="bx-logo-header">
      <img src="@/assets/header_images/img-logo-bx.png"/>
    </div>
    <!--<div class="line"></div>-->
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">
  #data-demo-header{
    display: flex;
    height: 60px;
    line-height: 60px;
    align-items: center;
    background-color: rgb(84, 92, 100);
    .bx-logo-header{
      height: 47px;
      margin: 0 20px;
    }
  }
</style>
