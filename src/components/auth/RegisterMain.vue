<template>
  <v-container
    class="fill-height pa-5"
    style="background: linear-gradient(to right, #e2e2e2, #d7f0e5)"
    fluid
  >
    <v-form
      v-model="form"
      class="mx-auto bg-white rounded-lg pa-10 mb-16 mt-16"
      max-width="500"
      title="註冊"
      data-aos="flip-right"
      data-aos-duration="1000"
    >
      <v-container>
        <div class="text-h4 text-center mb-5">註冊會員</div>
        <div class="text-center mb-8">
          <a href="#" @click.prevent="Login" class="text-caption"
            >已經是會員？
            <span style="color: red; text-decoration: underline">登入</span></a
          >
        </div>
        <v-text-field
          v-model="user.name"
          color="primary"
          label="暱稱..."
          variant="underlined"
          style="caret-color: pink"
          placeholder="your username"
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          v-model="user.email"
          color="primary"
          label="Email..."
          variant="underlined"
          style="caret-color: pink"
          placeholder="your email"
          :rules="emailRules"
        ></v-text-field>

        <v-text-field
          v-model="user.pwd"
          color="primary"
          label="密碼..."
          variant="underlined"
          style="caret-color: pink"
          placeholder="your password"
          :rules="passwordRules"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'password' : 'text'"
          @click:append-inner="toggleVisibility"
        ></v-text-field>

        <v-text-field
          v-model="user.confirm"
          color="primary"
          label="密碼確認..."
          :rules="confirmRules"
          style="caret-color: pink"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'password' : 'text'"
          placeholder="Re-Enter your password"
          variant="underlined"
          @click:append-inner="toggleVisibility"
        ></v-text-field>
        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
          class="ml-n5 text-caption"
        ></v-checkbox>
      </v-container>
      <hr />
      <v-card-actions class="mt-5">
        <v-btn block class="bg-success" :disabled="!formValid" @click="register">
          註冊
        </v-btn>
      </v-card-actions>
    </v-form>
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
  </v-container>
</template>

<script>
import router from "@/router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/plugins/firebase";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        pwd: "",
        confirm: "",
      },
      terms: false, //checkbox
      visible: true,
      isShow: false,
      dialogtext: "",
    };
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(auth, this.user.email, this.user.pwd)
        .then((userCredential) => {
          const user = userCredential.user;
          // 更新用戶的 displayName
          updateProfile(user, {
            displayName: this.user.name,
          });
          this.dialogtext = "註冊成功";
          this.isShow = true;
          setTimeout(() => {
            router.push({ name: "Login" });
          }, 500);
        })
        .catch((error) => {
          const errorMsg = error.code;
          console.log(errorMsg);
          switch (errorMsg) {
            case "auth/invalid-email":
              this.dialogtext = "Email格式不正確";
              this.isShow = true;
              break;
            case "auth/email-already-in-use":
              this.dialogtext = "Email已存在";
              this.isShow = true;
              break;
            default:
              break;
          }
        });
    },
    toggleVisibility() {
      this.visible = !this.visible;
    },
    Login() {
      router.push({ name: "Login" });
    },
  },
  computed: {
    required(v) {
      return !!v || "必填項目";
    },
    emailRules() {
      return [
        (v) => !!v || "Email必須填寫",
        (v) => /.+@.+\..+/.test(v) || "請輸入有效格式",
      ];
    },
    passwordRules() {
      return [
        (v) => !!v || "密碼必須填寫",
        (v) => (v && v.length >= 8) || "密碼須至少包含8個字符",
        (v) => /[A-Z]/.test(v) || "密碼須包含至少一個大寫字母",
        (v) => /[a-z]/.test(v) || "密碼須包含至少一個小寫字母",
        (v) => /\d/.test(v) || "密碼須包含至少一個數字",
        (v) => /[@#$%^&+=]/.test(v) || "密碼須包含至少一個特殊字符 (@#$%^&+=)",
      ];
    },
    confirmRules() {
      return [(v) => !!v || "必須填寫", (v) => v === this.user.pwd || "密碼不匹配"];
    },
    formValid() {
      return (
        !!this.user.name &&
        !!this.user.email &&
        !!this.user.pwd &&
        !!this.user.confirm &&
        !!this.terms
      );
    },
  },
};
</script>

<style></style>
