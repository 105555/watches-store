<template>
  <br />
  <v-breadcrumbs :items="items">
    <template v-slot:prepend>
      <v-icon icon="vuetify"></v-icon>
    </template>
  </v-breadcrumbs>
  <v-container>
    <v-row class="box-container">
      <v-col cols="12" md="6" class="img-container">
        <v-img :src="product.img"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="mt-6">
        <v-title class="text-h4 word">{{ product.title }}</v-title>
        <div class="mt-6 d-flex align-center" style="color: #fdd835">
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-icon>mdi-star</v-icon>
          <v-text class="ml-2" style="color: black">5.0 (30 評價)</v-text>
        </div>
        <div class="mt-6">{{ product.price }}</div>
        <div class="mt-6">{{ product.notice[1] }}</div>
        <v-card class="mt-12 pt-6 pl-6 pr-6 pb-6">
          <v-title class="text-h6">{{ $t('Introduce') }}</v-title>
          <br />
          <br />
          <v-text class="mb">{{ product.description }}</v-text>
          <br />
          <br />
          <ul class="pb-2" v-for="item in product.descriptionItem" :key="item.id">
            <li>{{ item.name }}</li>
          </ul>
        </v-card>
        <div class="mt-12">{{ $t('Count') }}</div>
        <div class="mt-6 itemCount text-h6">
          <span class="decrease" @click="decreaseCount">-</span>
          {{ count }}
          <span class="increase" @click="increaseCount">+</span>
        </div>
        <div class="mt-6 fz-12" style="color: #c62828" v-show="count > 5">
          <v-icon>mdi-alert</v-icon> {{ product.notice[0] }}
        </div>
        <div class="mt-6 d-flex justify-space-between">
          <v-btn color="error" width="48%" variant="flat" @click.stop="addToCart(item)"
            >加入{{ $t('Cart') }}</v-btn
          >
          <v-btn color="success" width="48%" variant="outlined">{{ $t('Buy') }}</v-btn>
          <v-snackbar v-model="snackbar" :timeout="1500" color="success">
            <div class="text-center">{{ snackbarText }}</div>
          </v-snackbar>
        </div>
        <div class="mt-12 text-center mb-12" style="color: #0d47a1">
          <v-icon>mdi-car</v-icon>
            {{ $t('Notice') }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Info",
  data() {
    return {
      count: 1,
      snackbar: false,
      snackbarText: "",
      items: [
        {
          title: "首頁",
          disabled: false,
          href: "",
        },
        {
          title: "商品",
          disabled: true,
          href: "",
        },
        {
          title: "Zxc 水行俠獨裁者",
          disabled: true,
          href: "",
        },
      ],
      product: {
        id: 999,
        title: "【藍水晶】Zxc 水行俠獨裁者",
        description:
          "Perpetual1908現提供950鉑金款式，配備冰藍色錶面。冰藍色是我們專為950鉑金腕錶設計的色彩。錶面飾有穀粒紋，立體圖案流轉靈動光澤，舉手投足間光芒四射。新款1908別具匠心，個性鮮明，可謂賞心悅目的傑作。",
        descriptionItem: [
          {
            name: "3285型機芯 一枚機芯，兩個時區",
          },
          {
            name: "銀色鋁合金外殼",
          },
          {
            name: "950鉑金腕錶 冰藍色錶面",
          },
        ],
        notice: [
          "此商品為近期熱門因此每隻帳號限購五隻",
          "商品訂購後, 開始製作, 需等待30天工作日",
        ],
        img:
          "https://img.pchome.com.tw/cs/items/DIACOKA900FH3WQ/000001_1682995490.jpg?width=480",
        prices: "16300",
      },
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
    showSnackbar(text) {
      this.snackbarText = text;
      this.snackbar = true;
    },
    addToCart() {
      const itemToAdd = {
        ...this.product,
        count: this.count,
      };
      this.addItem(itemToAdd);
      this.showSnackbar(`${this.product.title} 已成功加入購物車`);
    },
    ...mapMutations("cart", ["addItem"]),
  },
  computed: {
    ...mapState("cart", ["itemList", "cartItem"]),
  },
};
</script>
