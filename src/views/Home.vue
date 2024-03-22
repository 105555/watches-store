<template>
  <HomeMain />
  <ScrollTop></ScrollTop>
</template>

<script>
  import HomeMain from '@/components/HomeMain.vue'
  import ScrollTop from '@/components/ScrollTop.vue'
  export default {
    name:'Home',
    components:{
      HomeMain,
      ScrollTop
    }
  }
</script>
