<template>
  <v-app class="bg-teal-lighten-5">
    <v-main class="pb-16 pt-16">
      <v-container >
        <v-card class="mb-4">
          <v-card-title >用戶信息</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-title
                  >用戶名 : {{ userInfo.name }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >電子郵件 : {{ userInfo.email }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >建立日期 : {{ userInfo.created }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-row cols="12" block class="mb-5 mt-5">
          <v-col cols="3">
            <div class="side text-center" @click="toggleCollapse('payments')">待付款</div>
          </v-col>
          <v-col cols="3">
            <div class="side text-center" @click="toggleCollapse('shipments')">待出貨</div>
          </v-col>
          <v-col cols="3">
            <div class="side text-center" @click="toggleCollapse('receipts')">待收貨</div>
          </v-col>
          <v-col cols="3">
            <div class="side text-center" @click="toggleCollapse('list')">歷史清單</div>
          </v-col>
          <v-container>
            <div v-if='isCollapsed.payments' class="" v-expand-transition>
              <v-card cols="12" class="mt-2 d-flex justify-center align-center text-h7" height="250px" style="color:gray"><v-icon>mdi-shopping-outline</v-icon>{{ itemText.one }}</v-card>
            </div>
            <div v-if='isCollapsed.shipments' v-expand-transition>
              <v-card cols="12" class="mt-2 d-flex justify-center align-center text-h7" height="250px" style="color:gray"><v-icon>mdi-truck-delivery</v-icon> {{  itemText.two }}</v-card>
            </div>
            <div v-if='isCollapsed.receipts' v-expand-transition>
              <v-card cols="12" class="mt-2 d-flex justify-center align-center text-h7" height="250px" style="color:gray"><v-icon>mdi-truck-delivery</v-icon>{{ itemText.three}}</v-card>
            </div>
            <div v-if='isCollapsed.list' v-expand-transition>
              <v-card cols="12" class="mt-2 d-flex justify-center align-center text-h7" height="250px" style="color:gray"><v-icon>mdi-account-search</v-icon>{{ itemText.four }}</v-card>
            </div>
          </v-container>
        </v-row>
      </v-container>
      <v-container class="mb-12 pl-12 pr-12">
        <hr>
        <br class="mb-12">
        <v-row cols="12">
          <v-col cols="5" >
            <p class="text-h6">Henlex's 手錶保養方式</p>
            <p class="text-h6">訂購與運送</p>
            <p class="text-h6">服務項目</p>
          </v-col>
          <v-col cols="7">
            <v-expansion-panels variant="Item">
              <v-expansion-panel
                title="注意事項"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
              >
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels variant="Item">
              <v-expansion-panel
                title="優惠券使用方法"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
              >
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels variant="Item">
              <v-expansion-panel
                title="售後服務"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
              >
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels variant="Item">
              <v-expansion-panel
                title="產品保養與維修"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
              >
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/plugins/firebase";
import { mapMutations, mapState } from "vuex";
export default {
  name: "DashBoardMain",
  data() {
    return {
      user: {},
      isCollapsed:{
        payments:false,
        shipments:false,
        receipts:false,
        list:false,
      },
      itemText: {
        one:'您還沒有商品 購物去',
        two:'目前無商品待出貨',
        three:'目前無商品待收貨',
        four:'查無歷史購物清單'
      }
    };
  },
  methods: {
    checkUserAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user !== null) {
          const date = new Date(user.metadata.creationTime);
          const dateFormat = date.toLocaleDateString();
          this.user = {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            created: dateFormat,
          };
          this.setUser(this.user);
          this.setLoginState(true);
        } else {
          this.user = {};
          this.setLoginState(false);
        }
      });
    },
    toggleCollapse(item){
      for (let key in this.isCollapsed) {
        if (key !== item) {
          this.isCollapsed[key] = false;
        }
      }
      this.isCollapsed[item] = !this.isCollapsed[item];
    },
    ...mapMutations("user", ["setUser", "setLoginState"]),
  },
  mounted() {
    this.$nextTick(() => {
      this.checkUserAuth();
    });
  },
  computed: {
    ...mapState("user", ["userInfo", "loginState"]),
  },
};
</script>

<style scoped lang="scss">
v-btn {
  cursor: pointer;
  width: 100%;
}

.v-row > .v-col .side {
  border: 2px solid #000;
  border-radius: 5px;
  cursor: pointer;
}

.v-row > .v-col:nth-child(1) .side {
border-color: #f15151; 
background-color: #eb8080;
}

.v-row > .v-col:nth-child(2) .side {
border-color: #cdca27; 
background-color: #c8d35f;
}

.v-row > .v-col:nth-child(3) .side {
  border-color: #34b726; 
  background-color: #95d613;
}

.v-row > .v-col:nth-child(4) .side {
  border-color: #1f61b3; 
  background-color: #83b7c5;
}

</style>
