<template>
  <v-app-bar
    class="px-1"
    style="background: linear-gradient(to right, #1a6040, #197149); color: #eee"
  >
    <!--手機尺寸-->
    <v-app-bar-nav-icon
      class="d-md-none"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <!--大尺寸菜單-->
    <v-app-bar-title class="mr-10"
      ><a href="#" to="/Home" style="color: #eee; text-decoration-line: none">Henlex's</a>
    </v-app-bar-title>
    <v-row class="d-none d-md-flex justify-xl-center align-center flex-grow-1">
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/shop"
        >{{ $t('Shop') }}</v-btn
      >
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/storeInfo"
        >{{ $t('StoreInfomation') }}</v-btn
      >
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/contactInfo"
        >{{ $t('Contact') }}</v-btn
      >
    </v-row>

    <Cart ref="cartComponentRef" />

    <div class="cartBox">
      <span class="cartCount fw-400">{{ totalCount }}</span>
      <v-btn class="mx-3" icon="mdi-cart-outline" @click="toggleCart"></v-btn>
    </div>
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="#2E7D32" size="large">
            <v-icon v-if="loginState === true">mdi-account-circle</v-icon>
            <v-icon v-else>mdi-login</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center d-flex flex-column">
            <v-btn v-if="loginState === false" rounded variant="text" to="/Register">
             {{ $t('Register') }}
            </v-btn>
            <v-btn v-else rounded variant="text" to="/Dashboard"> 我的帳戶 </v-btn>
            <hr class="mt-2 mb-2" />
            <v-btn v-if="loginState === false" rounded variant="text" to="/login">
              {{ $t('Login') }}
            </v-btn>
            <v-btn v-else rounded variant="text" @click.stop="showDialog"> 登出 </v-btn>
          </div>
        </v-card-text>
      </v-card>

      <!-- 提示視窗-->
      <v-dialog
        v-model="isShow"
        max-width="350px"
        transition="dialog-top-transition"
        class="mt-n16"
      >
        <div class="text-center">
          <v-card>
            <div class="mt-7 mb-5">
              <div>{{ dialogtext }}</div>
            </div>
            <v-card-actions class="mb-3 d-flex justify-center tonal">
              <v-btn
                text="確認"
                @click.stop="logout"
                color="#5865f2"
                variant="flat"
              ></v-btn>
              <v-btn
                text="取消"
                @click="isShow = false"
                color="#5865f2"
                variant="flat"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-dialog>
    </v-menu>
  </v-app-bar>

  <!--手機平板-->
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item to="/shop" title="購物"></v-list-item>
      <v-list-item to="/storeInfo" title="店面資訊"></v-list-item>
      <v-list-item to="/contactInfo" title="聯絡我們"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { auth } from "@/plugins/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { setStatus, getStatus } from "@/plugins/localStorage";
import router from "@/router";
import Cart from "@/components/cart/Cart.vue";
export default {
  name: "AppBar",
  components: {
    Cart,
  },
  emits: ["showCart"],
  data() {
    return {
      isShow: false,
      dialogtext: "",
      count: 1,
      status: true,
      itemCount: 0,
      drawer: false,
      droup: null,
      items: [
        {
          title: "Foo",
          value: "foo",
        },
        {
          title: "Bar",
          value: "bar",
        },
        {
          title: "Fizz",
          value: "fizz",
        },
        {
          title: "Buzz",
          value: "buzz",
        },
      ],
    };
  },
  methods: {
    showDialog() {
      this.isShow = true;
      this.dialogtext = "是否登出？";
    },
    logout() {
      signOut(auth).then(() => {
        this.isShow = false;
        this.setUser(null);
        this.setLoginState(false);
        setStatus("false");
        router.push({ name: "Home" });
      });
    },
    checkUserAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user !== null) {
          setStatus("true");
        } else {
          this.user = {};
          this.setLoginState(false);
        }
      });
    },
    toggleCart() {
      // 記得引入子組件需要上 ref
      this.$nextTick(() => {
        this.$refs.cartComponentRef.showCart();
      });
    },
    ...mapMutations("user", ["setUser", "setLoginState"]),
  },
  computed: {
    loginState() {
      return getStatus();
    },
    totalCount() {
      return this.cartItem.reduce((total, item) => total + item.count, 0);
    },
    ...mapState("user", ["loginState"]),
    ...mapState("cart", ["cartItem"]),
  },
  mounted() {
    this.checkUserAuth();
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.search {
  padding-top: 20px;
  padding-right: 70px;
  margin-left: -100px;
}
</style>
