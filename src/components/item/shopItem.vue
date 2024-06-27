<template>
  <br />
  <h3 class="left">首頁 / 全部商品 / XXXXX</h3>
  <v-container>
    <v-row class="box-container">
      <v-col cols="12" md="6" class="img-container">
        <v-img
          src="https://img.pchome.com.tw/cs/items/DIACOKA900FH3WQ/000001_1682995490.jpg?width=480"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="mt-6">
        <v-title class="text-h4 word">【藍水晶】Zxc 水行俠獨裁者</v-title>
        <div class="mt-6">
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-text class="star">5.0 (30 評價)</v-text>
        </div>
        <div class="mt-6">NT $16300</div>
        <div class="mt-6">商品訂購後, 開始製作, 需等待30天工作日</div>
        <v-card class="mt-12 pt-6 pl-6 pr-6 pb-6">
          <v-title class="text-h6">手錶介紹</v-title>
          <br />
          <br>
          <v-text class="mb"
            >Perpetual
            1908現提供950鉑金款式，配備冰藍色錶面。冰藍色是我們專為950鉑金腕錶設計的色彩。錶面飾有穀粒紋，立體圖案流轉靈動光澤，舉手投足間光芒四射。新款1908別具匠心，個性鮮明，可謂賞心悅目的傑作。</v-text
          >
          <br />
          <br>
          <ul class="pb-2">
            <li>3285型機芯 一枚機芯，兩個時區</li>
            <li>銀色鋁合金外殼</li>
            <li>950鉑金腕錶 冰藍色錶面</li>
          </ul>
        </v-card>
        <div class="mt-12">數量</div>
        <div class="mt-6 itemCount text-h6">
          <span class="decrease" @click="decreaseCount">-</span>
          {{ count }}
          <span class="increase" @click="increaseCount">+</span>
        </div>
        <div class="mt-6 fz-12" style="color: #C62828" v-show="count > 5"> <v-icon>mdi-alert</v-icon> 此商品為近期熱門 因此每隻帳號限購五隻</div>
        <div class="mt-6 d-flex justify-space-between">
          <v-btn color="error" width="48%" variant="flat" @click.stop='addToCart'>加入購物車</v-btn>
          <v-btn color="success" width="48%" variant="outlined">立即購買</v-btn>
        </div>
        <div class="mt-12 text-center mb-12" style="color: #0d47a1">
          <v-icon>mdi-car</v-icon>
          台灣購物單筆訂單滿NT$1200，免配送費
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--;
      }
    },
    addToCart(){
      
    }
  },
};
</script>