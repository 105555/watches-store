<template>
  <v-app-bar class="px-1" style="background:linear-gradient(to right, #1a6040, #197149); color:#eee">
    <v-app-bar-nav-icon icon="mdi-home" to="/index"></v-app-bar-nav-icon>
    <v-app-bar-title class="mr-10"><a href="#" to="/Home" style="color:#eee; text-decoration-line: none;">Henlex's</a></v-app-bar-title>
    <v-row class="d-xl-none d-xl-flex justify-center">
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
    <v-row class="d-md-none d-md-flex justify-center">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-icon v-bine="props">ttttttt</v-icon>
        </template>
          <v-list>
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
          </v-list>

      </v-menu>
    </v-row>

    <v-menu max-width="600px" v-model="menu" rounded>
      <template v-slot:activator="{ props }" >
        <v-btn class="mx-3" icon="mdi-cart-outline" v-bind="props"></v-btn>
      </template>
      <v-card style="background:#e2e2e2; padding:5px">
        <div class="mt-1 d-flex justify-end" @click.stop="toggleOpenOnClear"><v-icon style="cursor:pointer;">mdi-close</v-icon></div>
        <div
          class="mx-auto text-center"
          :style="{ height: 'auto', width: '500px' }"
        >
          <v-divider class="my-2"></v-divider>
          <v-card-text class="d-flex justify-space-between mb-2" style="background:#FFF">
            <v-text>商品</v-text>
            <v-text>單價</v-text>
            <v-text>數量</v-text>
            <v-text>總計</v-text>
            <v-text>操作</v-text>
          </v-card-text>
          <v-card-text v-for="(item, index) in this.itemList" :key="index"  class="d-flex justify-space-between align-center item_border mb-1" style="background:#FFF" >
              <div class="item">
                <v-img src="https://watchesbysjx.com/wp-content/uploads/2023/06/Seiko-King-Seiko-SJE091-black-dial-lifestyle.jpg" class="img"></v-img>
                <v-text>{{ item.title }}</v-text>
              </div>
            <div>
              <span>${{ item.prices }}</span>
            </div>
            <div class="count">
              <button @click="decrease">–</button>
              <span>{{ count }}</span>
              <button @click="increase">＋</button>
          </div> 
            <v-text><span>{{item.prices * count}}</span></v-text>
            <v-text><v-icon color="error" style="cursor:pointer">mdi-delete</v-icon></v-text>
          </v-card-text>
        </div>
      </v-card>
    </v-menu>

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
import { signOut, onAuthStateChanged } from "firebase/auth";
import { setStatus, getStatus } from '@/plugins/localStorage'
import router from '@/router'
export default {  
  name: "AppBar",
  data() {
    return {
      isShow: false,
      dialogtext: '',
      count:1,
      status: true
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
        setStatus("false");
        router.push( { name:'Home'} );
      })
    },
    checkUserAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user !== null) {
          setStatus("true");
        } else {
          this.user = {};
          this.setLoginState(false);
        }
      })
    },
    increase(){
      this.count++
    },
    decrease(){
      if (this.count > 0) {
        this.count--;
      }
    },
    toggleOpenOnClear() {
      this.status = !this.status;
      console.log(this.status);
    },
    ...mapMutations("user", ["setUser", "setLoginState"]),
  },
  computed: {
    loginState(){
      return getStatus();
    },
    ...mapState("user", ["loginState"]),
    ...mapState("cart", ["itemList"]),
  },
  mounted(){
    this.checkUserAuth();
  }
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
.height350 {
  height: 350px;
}
.count {
  button{
    border:solid 1px #000;
    padding-left:5px;
    padding-right:5px;
    border-radius: 2px;
    font-size: 1rem;
  }
  span{
    margin:0px 8px;
  }
}
.item_border{
  border: solid 1px #dad1d1;
}
.item v-img{
  width: 500px;
}
</style>
