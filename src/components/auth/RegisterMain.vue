<template>
  <main class="pb-16 pt-16 bg-teal-lighten-5 fill-height">
    <v-container>

    </v-container>
  </main>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "@/plugins/firebase"
export default {
  data(){
    return{
      user:{
        name:'',
        email:'',
        pwd:''
      }  
    }
  },
}
</script>

<style>

</style>