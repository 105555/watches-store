<template>
    <br>
    <h2 class="left">問題 / 聯絡我們</h2>
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
      </v-form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selected = ref('問題');
  const subject = ref('');
  const title = ref('');
  const items = ['退貨換貨', '回饋金', '會員資格'];
  
  const submitForm = () => {
    alert('完成');
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
    margin-left: 25px;
  }
  </style>
  