<template>
    <div class="overlay" v-if="isCartOpen" @click.prevent="hideCart"></div>
    <div class="cartContainer">
        <section>
            <div class="mt-3 d-flex justify-space-between">
                <v-text class="text-h4 ml-3">購物車</v-text>
                <v-btn @click="hideCart"><v-icon>mdi-close</v-icon></v-btn>
            </div>
            <div class="mx-auto text-center pt-6" :style="{ height: 'auto', width: '100%' }">
                <div class="d-flex justify-space-between mb-3 item_title" style="background: #fff">
                    <span>商品</span>
                    <span>單價</span>
                    <span>數量</span>
                    <span>總計</span>
                    <span>操作</span>
                </div>
                <div v-for="(item, index) in this.cartItem" :key="index"
                    class="d-flex justify-space-between align-center item_border mb-2 text-caption"
                    style="background: #fff">
                    <div class="item">
                        <v-img
                            :src=item.img
                            class="img"></v-img>
                        <v-text>{{ item.title }}</v-text>
                    </div>
                    <div>
                        <span>${{ item.prices }}</span>
                    </div>
                    <div class="count d-flex">
                        <button @click="decrease(item)">–</button>
                        <span>{{ item.count }}</span>
                        <button @click="increase(item)">＋</button>
                    </div>
                    <v-text><span>{{ item.prices * item.count }}</span></v-text>
                    <v-text @click="handledelete(index)"><v-icon color="error"
                            style="cursor: pointer">mdi-delete</v-icon></v-text>
                </div>
                <div v-if="this.cartItem.length === 0" class="d-flex justify-center align-end" style="color: #666">
                   <v-icon>mdi-shopping-outline</v-icon> 您購物車目前是空的
                </div>
            </div>
        </section>
        <section class="d-flex justify-space-between line">
            <div>
                <v-text class="fw-4 l-space">( {{ totalCount }}項商品 )</v-text>
                <v-text class="text-caption ml-1" style="color: red">{{
        discount
    }}</v-text>
            </div>
            <div class="button-group">
                <v-btn class="mr-1 fw-4 l-space" color="#fff" style="background: red"
                    @click="backToShop"><v-icon>mdi-arrow-left</v-icon>回去選購</v-btn>
                <v-btn class="fw-4 l-space" color="#fff" style="background: #000">結帳 . NT ${{ totalAmount }}
                    <v-icon> mdi-chevron-right</v-icon></v-btn>
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
            discount: "滿 NT$5000即享免運",
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
        },
        hideCart() {
            let selector = document.querySelector(".cartContainer");
            selector.style.right = "-1000px";
            this.isCartOpen = false;
            document.querySelector('html').classList.remove('no-scroll');
        },
        backToShop() {
            this.hideCart();
            router.push({ name: "Shop" });
            document.querySelector('html').classList.remove('no-scroll');
        },
        showCart() {
            let selector = document.querySelector(".cartContainer");
            document.querySelector('html').classList.add('no-scroll');
            selector.style.right = "0px";
            this.isCartOpen = true;
        },
        ...mapMutations("cart",['removeItem'])
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
        ...mapState("cart", ["itemList", "cartItem"])
    },
};
</script>
