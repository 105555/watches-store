<template>
  <router-view />
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  mounted () {
    AOS.init()
  }
}
</script>
