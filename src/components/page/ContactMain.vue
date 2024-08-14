<template>
  <br />
  <v-breadcrumbs :items="items">
    <template v-slot:prepend>
      <v-icon icon="vuetify"></v-icon>
    </template>
  </v-breadcrumbs>
  <div class="ma-5 mb-16">
    <v-card class="form-container" data-aos="zoom-in" data-aos-duration="400">
      <v-form class="form" @submit.prevent="submitForm">
        <v-autocomplete
          v-model="selected"
          :items="contactItems"
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
          label="Email"
          single-line
        ></v-text-field>
        <v-divider></v-divider>
        <v-text-field
          v-model="title"
          hide-details
          label="標題"
          single-line
        ></v-text-field>
        <v-divider></v-divider>
        <v-textarea
          v-model="message"
          counter
          label="訊息"
          maxlength="120"
          single-line
        ></v-textarea>
        <div class="center">
          <v-btn color="primary" type="submit">送出</v-btn>
        </div>
        <br />
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  data() {
    return {
      selected: "問題",
      subject: "",
      title: "",
      message: "",
      contactItems: ["退貨換貨", "回饋金", "會員資格"],
      items: [
        {
          title: "首頁",
          disabled: false,
          href: "",
        },
        {
          title: "聯絡我們",
          disabled: true,
          href: "",
        },
      ],
    };
  },
  methods: {
    submitForm() {
      if (!this.subject || !this.title || !this.selected) {
        alert("請選擇問題,並填寫標題與訊息");
      } else {
        alert("已送出您的問題 將在24小時為您解答");
        this.clearForm();
      }
    },
    clearForm() {
      this.selected = "問題";
      this.subject = "";
      this.title = "";
      this.message = "";
    },
  },
};
</script>
