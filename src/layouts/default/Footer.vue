<script setup>
import { reactive } from 'vue';

const socialMedias = reactive([
    {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/'
    },
    {
        icon: 'mdi-shopping',
        link: 'https://shopee.tw/'
    },
    {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/'
    },
])
</script>


<template>
    <v-footer rounded style="background: linear-gradient(to left, #e2e2e2, #f7f5f5ce);">
        <v-row justify="center" no-gutters>
            <v-col class="text-center mt-4" cols="12">
                <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" :href="media.link"
                    variant="text" target="_blank"></v-btn>
            </v-col>
            <v-col class="text-center mt-4" cols="12">
                <strong>TEL : (03)362-3344</strong>
            </v-col>
            <v-col class="text-center mt-4" cols="12">
                <strong>@2024 Henlex's</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style>
.a{
 color: #f7f5f5ce;   
}
</style>