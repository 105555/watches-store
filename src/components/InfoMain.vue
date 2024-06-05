<template>
  <br>
      <h3 class="left">首頁 / 店面資訊</h3>
    <v-container>
        <v-row class="box-container">
          <v-col cols="12" md="6" class="img-container"  data-aos="flip-up">
            <v-img  src="../../public/img/InfoImg.webp"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-card data-aos="flip-up"  data-aos-duration="1000" style="background: linear-gradient(to right, #e2e2e2, #e3ede7);">
                <v-card-title>店內資訊</v-card-title>
                <br>
                <v-card-text>地址：台中市南區XXXXXXXX</v-card-text>
                <v-card-text>聯絡電話：03-3333333</v-card-text>
                <v-card-text>電子郵件：info@example.com</v-card-text>
                <hr class="mb-20">
                <v-card-title>營業時間</v-card-title>
                <br>
                <v-card-text>周一至周五: 9:00 AM - 6:00 PM</v-card-text>
                <v-card-text> 周六至周日: 10:00 AM - 4:00 PM</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
    name:'Info',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.left {
  margin-left: 45px;
}
.box-container{
    padding-top: 30px;
}
.img-container{
    width: 100%;
    padding-bottom: 80px;
}
.mb-20{
    margin-top: 10px;
    margin-bottom: 10px;
    color: #e3ede7;
}
</style>