<template>
<v-container class='bg-teal-lighten-5 fill-height pa-12' fluid>
    <v-card max-width='512' class='ma-auto px-6 py-8 w-100'>
      <v-form @submit="onSubmit" ref='form'>
        <div class="text-center mb-6 text-h4">重設密碼</div>
        <v-row class="align-center mb-2 mt-5">
            <v-text-field label="Email..." class="mr-2" v-model="user.email" :rules="emailRules"></v-text-field>
            <v-btn type="submit" :loading="loading" @click="resend()">寄送</v-btn>
        </v-row>
        <div v-if="emailError" class="text-red text-h7 my-n5">{{ emailError }}</div>
      </v-form>
    </v-card>

  </v-container>
</template>

<script>
import router from '@/router'
import { sendPasswordResetEmail } from "firebase/auth"; 
import { auth } from "@/plugins/firebase"
export default {
    name:'ForgotpwdMain',
    data(){
        return {
            form:false,
            loading:false,
            emailError: '',
            user:{
                email:''
            }
        }
    },
    methods:{
        resend() {
            sendPasswordResetEmail(auth,this.user.email)
                .then(() =>{
                    alert('已寄送信件,請查看您的信箱以重設密碼');
                    this.user = {   
                        email: ''
                    }
                    router.push({name:'Login'});
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    switch(errorMessage){
                        case 'auth/missing-email' :
                            alert('寄送失敗,請輸入電子郵件');
                            break;
                        case 'auth/invalid-email' :
                            alert('請輸入正確的電子郵件格式');
                            break;
                        default:
                            break;
                    }
                    this.emailError = '請輸入Email';
                })
        }
        
    },
    //格式驗證
    watch:{
        'user.email': function(newEmail) {
            if (!(/^\S+@\S+\.\S+$/.test(newEmail))) {
                this.emailError = '請輸入有效的Email格式';
            } else {
                this.emailError = ''; // 清除錯誤訊息
            }
    }
    }
}
</script>

<style>
.text-h7{
    font-size: 12px;
}
</style>