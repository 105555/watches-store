<template>
 <transition name="fade">
    <v-btn v-if="isShow"  @click="scrollTop"  class="p">
        <v-icon class="white">mdi-arrow-up</v-icon>
      </v-btn>
 </transition>
</template>

<script>
export default {
    name: 'ScrollTop',
    data() {
        return {
            top: 0, // 初始化滾動條位置變數
            isShow: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrolling);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.scrolling);
    },
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' //平滑效果
            });
        },
        scrolling() {
            const scrollTop = window.pageYOffset; // 獲取垂直滾動條位置
            const scrollLength = scrollTop - this.top;
            this.top = scrollTop;

            // 根據滾動條位置動態顯示或隱藏按鈕
            if (scrollLength < 30 && this.top < 400) {
                this.isShow = false;
            } else {
                this.isShow = true;
            }
        }
    }
}
</script>


<style>
.p{
    position: fixed;
    right: 40px;
    bottom: 40px;
    background-color: #006400;
    border-radius: 30px;
}
.white{
    color: #fff;
}
</style>