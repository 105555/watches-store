<template>
  <v-app-bar class="px-1" color="#006400">
    <v-app-bar-nav-icon icon="mdi-home" to="/index"></v-app-bar-nav-icon>
    <v-app-bar-title class="mr-10" >H's Watchlex</v-app-bar-title>
    <v-row >
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/index">首頁</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/shop">購物</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/storeInfo">店面資訊</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/contactInfo">聯絡我們</v-btn>
    </v-row>

    

    
    <v-menu max-width="600px" rounded>
      <template v-slot:activator = "{props}">
        <v-btn class="mx-3" icon="mdi-cart-outline" v-bind="props"></v-btn>
      </template>
      <v-card>
        <div class="mx-auto text-center" :style="{ height: '500px',width:'400px' }">
          <v-divider class="my-3"></v-divider>
        </div>
        
      </v-card>
    </v-menu>

    <v-menu min-width="200px" rounded>
        <template v-slot:activator ="{ props }">
          <v-btn icon v-bind='props'>
          <v-avatar color="green" size="large">
            <v-icon>mdi-login</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center d-flex flex-column">
            <v-btn rounded variant="text" to="/login">
              登入
            </v-btn>
            <hr class="mt-2 mb-2">
            <v-btn rounded variant="text" to="/Register">
              註冊
            </v-btn>
          </div>
        </v-card-text>
      
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name:'AppBar'
}

  
</script>

<style lang="scss">
.size{
  width: 10px;
  height: 5px;
  border: solid 2px #000;
  border-radius: 100%;
  z-index: 99999;
}
.search{
  padding-top: 20px;
  padding-right: 70px;
  margin-left: -100px;
}
.green{
  background-color:linear-gradient(90deg, #0b3e27, #197149)
}
.height350{
  height: 350px;
}
</style>
