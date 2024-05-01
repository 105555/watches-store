<template> <!--初始介面 view套元件-->
  <v-app>
    <default-bar />
    <default-view />
    <ScrollTop /> 
    <default-footer />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from '@/layouts/default/Footer.vue'
  import ScrollTop from '@/components/scroll/ScrollTop.vue'
</script>
