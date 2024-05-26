<template>
  <br>
      <h3 class="left">首頁 / 店面資訊</h3>
    <v-container>
        <v-row class="box-container">
          <v-col cols="12" md="6" class="img-container"  data-aos="flip-up">
            <v-img  src="https://media.vogue.com.tw/photos/6255364cbe117cf87fa92347/master/w_1600%2Cc_limit/04A6B8AA-C88E-4D8C-BC1B-EF4B2B8A86DF.JPG"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-card data-aos="flip-up"  data-aos-duration="1000">
                <v-card-title>聯系信息</v-card-title>
                <br>
                <v-card-text>地址：台中市南區XXXXXXXX</v-card-text>
                <v-card-text>聯絡電話：03-3333333</v-card-text>
                <v-card-text>電子郵件：info@example.com</v-card-text>
                <hr class="mb-20">
                <v-card-title> 營業時間</v-card-title>
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
}
</style>