<template>
    <v-container class='bg-teal-lighten-5 fill-height pa-12' fluid>
        <v-card max-width='512' class='ma-auto px-6 py-8 w-100'>
            <v-form ref='form'>
                <div class="text-center mb-6 text-h4">重設密碼</div>
                <v-row class="align-center mb-2 mt-5">
                    <v-text-field label="Email..." class="mr-2" v-model="user.email"></v-text-field>
                    <v-btn type="submit" :loading="loading" @click="resend">寄送</v-btn>
                </v-row>
                <div v-if="emailError" class="text-red text-h7 my-n5">{{ emailError }}</div>
            </v-form>
        </v-card>
        <!-- 提示視窗-->
        <v-dialog v-model="isShow" max-width="350px" transition="dialog-top-transition" class="mt-n16">
            <div class="text-center">
                <v-card>
                    <div class="mt-7 mb-3">
                        <v-text>{{ dialogtext }}</v-text>
                    </div>
                    <v-card-actions class="mb-3 d-flex  justify-center tonal">
                        <v-btn text="確認" @click="isShow = false" color="#5865f2" variant="flat"></v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>
    </v-container>
</template>

<script>
import router from '@/router'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/plugins/firebase"
export default {
    name: 'ForgotpwdMain',
    data() {
        return {
            form: false,
            loading: false,
            emailError: '',
            user: {
                email: ''
            },
            isShow: false,
            dialogtext: ''
        }
    },
    methods: {
        resend() {
            sendPasswordResetEmail(auth, this.user.email)
                .then(() => {
                    this.dialogtext = '已寄送信件,請查看您的信箱以重設密碼';
                    this.loading = true;
                    this.isShow = true;
                    this.user = {
                        email: ''
                    }
                    setTimeout(() => {
                        router.push({ name: 'Login' });
                    }, 500)
                })
                .catch((error) => {
                    const errorMessage = error.code;
                    switch (errorMessage) {
                        case 'auth/missing-email':
                            this.dialogtext = '請輸入電子郵件';
                            this.isShow = true;
                            this.loading = false;
                            break;
                        case 'auth/invalid-email':
                            this.dialogtext = '請輸入正確的電子郵件格式';
                            this.isShow = true;
                            this.loading = false;
                            break;
                        default:
                            break;
                    }
                })
        }

    },
    //格式驗證
    watch: {
        'user.email': function (newEmail) {
            if (!(/^\S+@\S+\.\S+$/.test(newEmail))) {
                this.emailError = '請輸入有效的Email格式';
            } else {
                this.emailError = ''; // 清除錯誤訊息
            }
        }
    }
}
</script>

<style lang="scss">
.text-h7 {
    font-size: 12px;
}
</style>