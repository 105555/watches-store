<template>
  <v-app-bar class="px-1">
    <v-app-bar-nav-icon icon="mdi-home"></v-app-bar-nav-icon>
    <v-app-bar-title>H's Watchlex</v-app-bar-title>
    <v-row  >
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/index">Home</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/shop">Shop</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/storeInfo">Store Info</v-btn>
      <v-btn color="block" variant="text" class="mx-2" rounded="xl" to="/contactInfo">Connect us</v-btn>
    </v-row>
    <!-- <v-text-field prepend-icon="mdi-magnify" single-line></v-text-field>
    
    <v-spacer></v-spacer> -->

    <v-btn class="mx-3" icon="mdi-cart-outline"></v-btn>
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
  import {reactive,ref} from 'vue'

  const user = reactive({
    initials:'AH',
    fullName:'Andrew Huang',
    email:'fter2257@gmail.com'
  })

  // const items = ref(['首頁','購物','聯絡我們','門市資訊']);
  
</script>
