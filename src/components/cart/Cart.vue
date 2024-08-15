<template>
  <div class="overlay" v-if="isCartOpen" @click.prevent="hideCart"></div>
  <div class="cartContainer">
    <section>
      <div class="mt-3 d-flex justify-space-between align-center">
        <span class="text-h4 ml-3">{{ $t("Cart") }}</span>
        <v-btn @click="hideCart"><v-icon>mdi-close</v-icon></v-btn>
      </div>
      <div class="mx-auto text-center pt-6" :style="{ height: 'auto', width: '100%' }">
        <div
          class="d-flex justify-space-between mb-3 item_title"
          style="background: #fff"
        >
          <span>{{ $t("Item") }}</span>
          <span>{{ $t("SinglePrice") }}</span>
          <span>{{ $t("Count") }}</span>
          <span>{{ $t("Total") }}</span>
          <span>{{ $t("Operate") }}</span>
        </div>
        <div
          v-for="(item, index) in this.cartItem"
          :key="index"
          class="d-flex justify-space-between align-center item_border mb-2 text-caption"
          style="background: #fff"
        >
          <div class="item">
            <v-img :src="item.img" class="imgBox"></v-img>
            <span>{{ item.title }}</span>
          </div>
          <div>
            <span>${{ item.prices }}</span>
          </div>
          <div class="count d-flex justify-center align-center">
            <button @click="decrease(item)">–</button>
            <span>{{ item.count }}</span>
            <button @click="increase(item)">＋</button>
          </div>
          <span
            ><span>{{ item.prices * item.count }}</span></span
          >
          <span @click="handledelete(index)"
            ><v-icon color="error" style="cursor: pointer">mdi-delete</v-icon></span
          >
        </div>
        <div
          v-if="this.cartItem.length === 0"
          class="d-flex justify-center align-end"
          style="color: #666"
        >
          <v-icon>mdi-shopping-outline</v-icon> {{ $t("EmptyCart") }}
        </div>
      </div>
    </section>
    <v-snackbar v-model="snackbar" :timeout="1500" color="red-darken-2">
      <div class="text-center">{{ snackbarText }}</div>
    </v-snackbar>
    <section class="d-md-flex justify-space-between line">
      <div class="mb-6">
        <span class="fw-4">( {{ totalCount }}項商品 )</span>
        <span class="text-caption ml-1" style="color: red">{{ discount }}</span>
      </div>
      <div class="button-group">
        <v-btn
          class="mr-1 fw-4 l-space"
          color="#fff"
          style="background: red"
          @click="backToShop"
        >
          <v-icon>mdi-arrow-left</v-icon>{{ $t("Back") }}
        </v-btn>
        <v-btn class="fw-4 l-space" color="#fff" style="background: #000"
          >{{ `${$t("Checkout")} .NT $${totalAmount}`
          }}<v-icon> mdi-chevron-right</v-icon></v-btn
        >
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import router from "@/router";
export default {
  name: "Cart",
  data() {
    return {
      isCartOpen: false,
      discount: this.$t("Free"),
      snackbar: false,
      snackbarText: "",
    };
  },
  expose: ["showCart"],
  methods: {
    decrease(item) {
      if (item.count > 1) {
        item.count--;
      }
    },
    increase(item) {
      item.count++;
    },
    handledelete(index) {
      this.cartItem.splice(index, 1);
      this.showSnackbar(`${this.$t("Remove")}`);
    },
    showSnackbar(text) {
      this.snackbarText = text;
      this.snackbar = true;
    },
    hideCart() {
      let selector = document.querySelector(".cartContainer");
      selector.style.right = "-1000px";
      this.isCartOpen = false;
      document.querySelector("html").classList.remove("no-scroll");
    },
    backToShop() {
      this.hideCart();
      router.push({ name: "Shop" });
      document.querySelector("html").classList.remove("no-scroll");
    },
    showCart() {
      let selector = document.querySelector(".cartContainer");
      document.querySelector("html").classList.add("no-scroll");
      selector.style.right = "0px";
      this.isCartOpen = true;
    },
    ...mapMutations("cart", ["removeItem"]),
  },
  computed: {
    totalCount() {
      return this.cartItem.reduce((total, item) => total + item.count, 0);
    },
    totalAmount() {
      const totalAmount = this.cartItem.reduce(
        (total, item) => total + item.prices * item.count,
        0
      );
      return totalAmount.toLocaleString();
    },
    ...mapState("cart", ["itemList", "cartItem"]),
  },
};
</script>
