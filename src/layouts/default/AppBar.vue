<template>
  <v-app-bar class="px-1" color="#006400">
    <v-app-bar-nav-icon icon="mdi-home" to="/index"></v-app-bar-nav-icon>
    <v-app-bar-title class="mr-10" >H's Watchlex</v-app-bar-title>
    <v-row >
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/index">Home</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/shop">Shop</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/storeInfo">Store Info</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/contactInfo">Connect us</v-btn>
    </v-row>

    

    
    <v-menu max-width="600px" rounded>
      <template v-slot:activator = "{props}">
        <v-btn class="mx-3" icon="mdi-cart-outline" :="props"></v-btn>
      </template>
      <v-card>
        <div class="mx-auto text-center" :style="{ height: '500px',width:'400px' }">
          <v-divider class="my-3"></v-divider>
        </div>
        
      </v-card>
    </v-menu>

    <v-menu min-width="200px" rounded>
        <template v-slot:activator ="{ props }">
          <v-btn icon :="props">
          <v-avator color="brown" size="large">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avator>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="blue">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text">
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text">
              Disconnect
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
  import {reactive} from 'vue'

  const user = reactive({
    initials:'AH',
    fullName:'Andrew Huang',
    email:'fter2257@gmail.com'
  })

  
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
