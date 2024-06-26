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
    {
        icon: 'mdi-youtube',
        link: 'https://www.youtube.com/'
    },
])
</script>


<template>
    <v-footer rounded style="background: linear-gradient(to left, #e2e2e2, #f7f5f5ce);">
        <v-row class="pb-6 pt-6" no-gutters>
            <v-col class="text-center mt-4" cols="12">
                <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" :href="media.link"
                    variant="text" target="_blank"></v-btn>
            </v-col>
            <v-col class="text-center text-caption mt-1" cols="12">
                <strong>TEL : (03)362-3344</strong>
            </v-col>
            <v-col class="text-center text-caption mt-2 mb-5" cols="12">
                <strong>@2024 Henlex's . XXX版股份有限公司版權所有</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>