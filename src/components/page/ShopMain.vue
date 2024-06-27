<template>
  <div>
    <br />
    <h3 class="left">首頁 / 全部商品</h3>
    <br />
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            single-line
            clearable
            hide-details
            label="搜尋商品..."
            v-model="search"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          v-for="item in displayItem"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          class="mx-auto text-center"
        >
          <v-card height="100%" class="itemData" link>
            <router-link :to="{ name: 'ShopItem', params: { id: item.id } }">
              <v-img :src="item.img"></v-img>
            </router-link>
            <div class="d-flex justify-space-between align-items-center">
              <div>
                  <router-link :to="{ name: 'ShopItem', params: { id: item.id } }" class="d-flex flex-column">
                      <v-card-title class="mt-3 pl-6 text-l" style="color:#000;">{{ item.title }}</v-card-title>
                      <v-card-subtitle class="mt-3 pl-6 text-l" style="color:#000;">{{ item.description }}</v-card-subtitle>
                      <v-card-subtitle class="pb-7 mt-3 pl-6 text-l" style="color:#000">定價: ${{ item.prices }}</v-card-subtitle>
                  </router-link>
              </div>
              <div class="d-flex flex-column justify-end pr-4">
                  <v-btn class="mb-7 textAdd" @click='addToCart'>+加入<v-icon>mdi-shopping-outline</v-icon></v-btn>
              </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <v-pagination
        v-model="page"
        :length="Math.ceil(totalItem / maxitem)"
        class="pb-10"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      search: '',
      page: 1,
      maxitem: 12,
    };
  },
  computed: {
    totalItem() {
      return this.searching.length;
    },
    displayItem() {
      const start = (this.page - 1) * this.maxitem;
      const end = start + this.maxitem;
      return this.searching.slice(start, end);
    },
    searching() {
      const itemData = this.totalItems;

      if (!this.search) return itemData;

      const search = this.search.toLowerCase();
  
      return itemData.filter((item) => {
        const text = item.title.toLowerCase();
        return text.indexOf(search) > -1;
      });
    },
    totalItems(){
      return this.itemList;
    },
    ...mapState("cart",["itemList"])
  },
  watch: {
    page(newVal, oldVal) {
      if (newVal !== oldVal) {
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>
<style scoped></style>