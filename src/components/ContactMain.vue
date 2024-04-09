<template>
    <br>
    <h3 class="left">首頁 / 聯絡我們</h3>
    <div class="form-container">
      <v-form class="form" @submit.prevent="submitForm">
        <v-autocomplete
          v-model="selected"
          :items="items"
          chips
          hide-details
          hide-no-data
          hide-selected
          label="問題"
          :multiple="false"
          single-line
        ></v-autocomplete>
  
        <v-divider></v-divider>
  
        <v-text-field
          v-model="subject"
          hide-details
          label="標題"
          single-line
        ></v-text-field>
  
        <v-divider></v-divider>
  
        <v-textarea
          v-model="title"
          counter
          label="訊息"
          maxlength="120"
          single-line
        ></v-textarea>
        <div class="center">
          <v-btn color="primary" type="submit">送出</v-btn>
        </div>
        <br>
      </v-form>
    </div>
  </template>
  
  <script>
  export default {
    name:'ContactInfo',
    data() {
      return {
        selected: '問題',
        subject: '',
        title: '',
        items: ['退貨換貨', '回饋金', '會員資格']
      };
    },
    methods: {
      submitForm() {
        if(!this.subject || !this.title || !this.selected){
          alert('請選擇問題,並填寫標題與訊息');
        }
        else{
          alert('已送出您的問題 將在24小時為您解答');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px; /* 設置最大寬度 */
    margin: 0 auto; /* 將其置中 */
    margin-top: 50px;
  }
  
  .center {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .left{
    margin-left: 45px;
  }
  </style>
  