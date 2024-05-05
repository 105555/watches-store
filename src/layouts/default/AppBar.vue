<template>
  <v-app-bar class="px-1" color="#006400">
    <v-app-bar-nav-icon icon="mdi-home" to="/index"></v-app-bar-nav-icon>
    <v-app-bar-title class="mr-10">Henlex's</v-app-bar-title>
    <v-row>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/index"
        >首頁</v-btn
      >
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/shop"
        >購物</v-btn
      >
      <v-btn
        color="block"
        variant="text"
        class="mx-2"
        rounded="xl"
        to="/storeInfo"
        >店面資訊</v-btn
      >
      <v-btn
        color="block"
        variant="text"
        class="mx-2"
        rounded="xl"
        to="/contactInfo"
        >聯絡我們</v-btn
      >
    </v-row>

    <v-menu max-width="600px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn class="mx-3" icon="mdi-cart-outline" v-bind="props"></v-btn>
      </template>
      <v-card>
        <div
          class="mx-auto text-center"
          :style="{ height: '500px', width: '400px' }"
        >
          <v-divider class="my-3"></v-divider>
        </div>
      </v-card>
    </v-menu>

    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
        <v-avatar color="brown" size="large">
            <v-icon v-if="loginState === true">mdi-account-circle</v-icon>
            <v-icon v-else>mdi-login</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center d-flex flex-column">
            <v-btn v-if="loginState === false" rounded variant="text" to="/Register"> 註冊 </v-btn>
            <v-btn v-else rounded variant="text" to="/Dashboard"> 我的帳戶 </v-btn>
            <hr class="mt-2 mb-2" />
            <v-btn v-if="loginState === false" rounded variant="text" to="/login">
              登入
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
            <v-card-actions class="mb-3 d-flex  justify-center tonal">
              <v-btn text="確認" @click.stop="logout" color="#5865f2" variant="flat"></v-btn>
              <v-btn text="取消" @click="isShow = false " color="#5865f2" variant="flat"></v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-dialog>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { auth } from "@/plugins/firebase"
import { signOut } from "firebase/auth";
import { setStatus } from '@/plugins/localStorage'
import router from '@/router'
export default {
  name: "AppBar",
  data() {
    return {
      isShow: false,
      dialogtext: '',
    };
  },
  methods: {
    showDialog() {
      this.isShow = true;
      this.dialogtext='是否登出？';
    },
    logout(){
      signOut(auth).then(()=>{
        this.isShow = false;
        this.setUser(null);
        this.setLoginState(false);
        setStatus(false);
        router.push( { name:'Home'} );
      })
    },
    ...mapMutations("user", ["setUser", "setLoginState"]),
  },
  computed: {
    loginState(){
      return this.loginState;
    },
    ...mapState("user", ["loginState"]),
  },
};
</script>

<style lang="scss">
.size {
  width: 10px;
  height: 5px;
  border: solid 2px #000;
  border-radius: 100%;
  z-index: 99999;
}
.search {
  padding-top: 20px;
  padding-right: 70px;
  margin-left: -100px;
}
.green {
  background-color: linear-gradient(90deg, #0b3e27, #197149);
}
.height350 {
  height: 350px;
}
</style>
