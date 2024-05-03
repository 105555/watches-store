<template>
    <main class="pb-16 pt-16 bg-teal-lighten-5">
        <v-card class="mx-auto pa-13 pb-8 " elevation="8" max-width="448" rounded="lg">
            <div class="text-h4 mb-5">登入</div>
            <div class="text-subtitle-1 text-medium-emphasis ">帳號</div>
            <v-text-field density="compact" placeholder="Email..." prepend-inner-icon="mdi-email-outline"
                variant="outlined" v-model="user.account"></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                密碼
                <a @click.prevent="ForgotPwd()" class="text-caption text-decoration-none text-blue" href="#"
                    rel="noopener noreferrer" target="_blank">
                    忘記密碼 ?</a>
            </div>
            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'password' : 'text'"
                density="compact" placeholder="password..." prepend-inner-icon="mdi-lock-outline" variant="outlined"
                v-model="user.pwd" @click:append-inner="toggleVisibility"></v-text-field>
            <v-card class="mt-2 mb-14" color="surface-variant" variant="tonal">

                <v-card-text class="text-medium-emphasis">
                    <v-icon color="red">mdi-information</v-icon>
                    警告：錯誤三次會暫停登入 30 分鐘<br>
                    如果真的忘記密碼請立即點選忘記密碼選項
                </v-card-text>
            </v-card>
            <div class="mb-10">
                <v-btn block class="" color="blue" size="large" variant="outlined" @click="loginBtn">登入</v-btn>
            </div>
            <div class="text-center mb-5">
                <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank"
                    @click.prevent="Register()">
                    尚未註冊？ 註冊去 <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </div>
        </v-card>
        <!-- 提示視窗-->
        <v-dialog v-model="isShow" max-width="350px" transition="dialog-top-transition" class="mt-n16">
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
import router from '@/router' //引入後不需使用 this
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/plugins/firebase";
import { mapMutations } from 'vuex';
export default {
    name: 'LoginMain',
    data() {
        return {
            user: {
                account: '',
                pwd: '',
            },
            visible: true,
            dialogtext: '',
            isShow: false
        }
    },
    methods: {
        loginBtn() {
            signInWithEmailAndPassword(auth, this.user.account, this.user.pwd)
                .then(() => {
                    this.$nextTick(() => {
                        this.dialogtext = '登入成功';
                        this.setLoginState(true)
                        this.isShow = true;
                        setTimeout(() => {
                            router.push({ name: 'DashBoard' });
                        }, 500)
                    })
                })
                .catch((error) => {
                    const errorMessage = error.code;
                    switch (errorMessage) {
                        case 'auth/invalid-email':
                            this.dialogtext = '請輸入正確的電子郵件';
                            this.isShow = true;
                            break;
                        case 'auth/missing-password':
                            this.dialogtext = '密碼請勿留白';
                            this.isShow = true;
                            break;
                        case 'auth/invalid-credential':
                            this.dialogtext = '密碼錯誤';
                            this.isShow = true;
                            break;
                        default:
                            break;
                    }
                })
        },
        ForgotPwd() {
            router.push({ name: 'ForgotPwd' })
        },
        Register() {
            router.push({ name: 'Register' })
        },
        toggleVisibility() {
            this.visible = !this.visible;
        },
        ...mapMutations("user", ["setUser", "setLoginState"]),
    }

}
</script>

<style></style>