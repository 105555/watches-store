<template>
  <div>
    <br />
    <h3 class="left">首頁 / 搜尋商品</h3>
    <br>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            single-line
            clearable
            hide-details
            label="Search Products..."
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
          md="3"
          class="mx-auto text-center"
        >
          <v-card height="100%" class="pic" link>
            <v-img :src="item.img"></v-img>
            <v-card-title class="mt-3">{{ item.title }}</v-card-title>
            <v-card-subtitle>價格 ： {{ item.prices }}</v-card-subtitle>
            <v-btn class="mt-5 mb-7">+ 加入</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <v-pagination
        v-model="page"
        :length="Math.ceil(totalItem / maxitem)" class="pb-10"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      items: [
        {
          id: 1,
          title: "Ga1",
          img: "https://img.58tg.com/up/allimg/1115/011122115920/220111115920-1-1200.jpg",
          prices: "$8800",
        },
        {
          id: 2,
          title: "Ga2",
          img: "https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-pocket-watch-on-the-book-image_864572.jpg",
          prices: "$7800",
        },
        {
          id: 3,
          title: "Gte3",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqq2x-yl531gz1Hm5cYO5E5tcE_0IBTY6k472dwz0mA&s",
          prices: "$7500",
        },
        {
          id: 4,
          title: "Ga3",
          img: "https://revolutionwatch.com/cdn-cgi/image/width=1500,height=1000,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/08/05-Seiko-Prospex-SPB381.jpg",
          prices: "$6800",
        },
        {
          id: 5,
          title: "SUR461",
          img: "https://up.bizhitupian.com/pic_360/f5/2d/05/f52d05e98ed28d8e526269f7e3245460.jpg",
          prices: "$12800",
        },
        {
          id: 6,
          title: "Ga5",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLwD92x9hC1mMir98_N1wK4D31vqJYx1r2l9CPcCwFz_sECiD89J-NMBcC6LfpuxM6gE&usqp=CAU",
          prices: "$5600",
        },
        {
          id: 7,
          title: "Ga6",
          img: "https://revolutionwatch.com/cdn-cgi/image/width=1500,height=1000,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/08/05-Seiko-Prospex-SPB381.jpg",
          prices: "$4999",
        },
        {
          id: 8,
          title: "Az1",
          img: "https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-pocket-watch-on-the-book-image_864572.jpg",
          prices: "$7999",
        },
        {
          id: 9,
          title: "Az3",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqq2x-yl531gz1Hm5cYO5E5tcE_0IBTY6k472dwz0mA&s",
          prices: "$12000",
        },
        {
          id: 10,
          title: "SPB329",
          img: "https://revolutionwatch.com/cdn-cgi/image/width=1500,height=1000,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/08/05-Seiko-Prospex-SPB381.jpg",
          prices: "$14999",
        },
        {
          id: 11,
          title: "Az7",
          img: "https://up.bizhitupian.com/pic_360/f5/2d/05/f52d05e98ed28d8e526269f7e3245460.jpg",
          prices: "$8990",
        },
        {
          id: 12,
          title: "SPB381",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLwD92x9hC1mMir98_N1wK4D31vqJYx1r2l9CPcCwFz_sECiD89J-NMBcC6LfpuxM6gE&usqp=CAU",
          prices: 22,
        },
        {
          id: 13,
          title: "SPB417",
          img: "https://img.58tg.com/up/allimg/1115/011122115920/220111115920-1-1200.jpg",
          prices: "$16300",
        },
        {
          id: 14,
          title: "SSJ013",
          img: "https://img.pikbest.com/origin/10/06/56/71MpIkbEsThiT.png!w700wp",
          prices: 19,
        },
        {
          id: 15,
          title: "SJE089",
          img: "https://img.58tg.com/up/allimg/1115/011122115920/220111115920-1-1200.jpg",
          prices: "$8999",
        },
        {
          id: 16,
          title: "SSB401",
          img: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/31/realtime/26713691.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=800",
          prices: "$19000",
        },
        {
          id: 17,
          title: "SSA426",
          img: "https://up.bizhitupian.com/pic_360/f5/2d/05/f52d05e98ed28d8e526269f7e3245460.jpg",
          prices: "$9000",
        },
        {
          id: 18,
          title: "SUR472",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLwD92x9hC1mMir98_N1wK4D31vqJYx1r2l9CPcCwFz_sECiD89J-NMBcC6LfpuxM6gE&usqp=CAU",
          prices: "$8800",
        },
        {
          id: 15,
          title: "SJE089",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqq2x-yl531gz1Hm5cYO5E5tcE_0IBTY6k472dwz0mA&s",
          prices: "$8999",
        },
        {
          id: 16,
          title: "SSB401",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqq2x-yl531gz1Hm5cYO5E5tcE_0IBTY6k472dwz0mA&s",
          prices: "$19000",
        },
      ],
      page: 1,
      maxitem: 8,
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
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();
      
      return this.items.filter((item) => {
        const text = item.title.toLowerCase();
        return text.indexOf(search) > -1;
      });
    },
  },
};
</script>

<style lang="scss">
.left {
  margin-left: 45px;
}
.pic{
    overflow:hidden;
    img{
        transform:scale(1,1);
        transition: all 1s ease-out;
        &:hover{
            transform:scale(1.2,1.2);
        }
    }
}
</style>
