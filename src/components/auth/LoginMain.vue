<template>
  <main
    class="pb-16 pt-16"
    style="background: linear-gradient(to right, #e2e2e2, #d7f0e5)"
  >
    <v-card
      class="mx-auto pa-13 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      <div class="text-h4 mb-2 text-center">登入會員</div>
      <div class="text-center mb-16">
        <a
          class="fw-4 text-caption"
          href="#"
          rel="noopener noreferrer"
          @click.prevent="Register()"
        >
          還不是會員？<span style="color: red; text-decoration: underline">
            立即註冊 </span
          >享 $1000 折扣 <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </div>
      <v-text-field
        density="compact"
        placeholder="Email..."
        variant="outlined"
        v-model="user.account"
      ></v-text-field>
      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'password' : 'text'"
        density="compact"
        placeholder="密碼..."
        variant="outlined"
        v-model="user.pwd"
        @click:append-inner="toggleVisibility"
        @keydown.enter="loginBtn"
      ></v-text-field>
      <div class="mb-3">
        <v-btn
          block
          class=""
          color="blue"
          size="large"
          variant="outlined"
          @click="loginBtn"
          >登入</v-btn
        >
      </div>
      <div class="text-center mb-5">
        <a
          @click.prevent="ForgotPwd"
          class="text-caption"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          style="text-decoration: underline"
        >
          忘記密碼 ?</a
        >
      </div>
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
        </v-card>
      </div>
    </v-dialog>
  </main>
</template>

<script>
import router from "@/router"; //引入後不需使用 this
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/plugins/firebase";
import { mapMutations } from "vuex";
import { setStatus, getStatus } from "@/plugins/localStorage";
export default {
  name: "LoginMain",
  data() {
    return {
      user: {
        account: "",
        pwd: "",
      },
      visible: true,
      dialogtext: "",
      isShow: false,
    };
  },
  methods: {
    loginBtn() {
      signInWithEmailAndPassword(auth, this.user.account, this.user.pwd)
        .then(() => {
          this.$nextTick(() => {
            this.dialogtext = "登入成功";
            this.setLoginState(true);
            this.isShow = true;
            setStatus("true");
            router.push({ name: "DashBoard" });
          });
        })
        .catch((error) => {
          const errorMessage = error.code;
          switch (errorMessage) {
            case "auth/invalid-email":
              this.dialogtext = "請輸入正確的電子郵件";
              this.isShow = true;
              break;
            case "auth/missing-password":
              this.dialogtext = "密碼請勿留白";
              this.isShow = true;
              break;
            case "auth/invalid-credential":
              this.dialogtext = "密碼錯誤";
              this.isShow = true;
              break;
            default:
              break;
          }
        });
    },
    ForgotPwd() {
      router.push({ name: "ForgotPwd" });
    },
    Register() {
      router.push({ name: "Register" });
    },
    toggleVisibility() {
      this.visible = !this.visible;
    },
    ...mapMutations("user", ["setUser", "setLoginState"]),
  },
};
</script>
