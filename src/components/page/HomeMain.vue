<script setup>
import { reactive } from "vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const items = ref([]);
const loading = ref(true);

async function fetchImg() {
  try {
    loading.value = true;
    const res = await axios.get(
      "https://api.unsplash.com/photos/?client_id=dD3MhsFtrsZzl0-OLQLzCY-qKnG-UpNsn4Fv2oQKhWU"
    );
    const photoData = res.data;
  
    items.value = photoData.map((item) => ({ imagePath: item.urls.regular }));
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchImg);

const metal = reactive([
  {
    description: 'SPB381',
    imageName:'Home1.jpeg',
  },
  {
    description: 'SPB417',
    imageName:'Home2.jpeg'
  },
  {
    description: 'SSJ013',
    imageName:'Home3.jpeg'
  },
  {
    description: 'SJE089',
    imageName:'Home1.jpeg',
  },
]);

const leather = reactive([
  {
    description: 'SUR472',
    imageName:'Home4.jpeg',
  },
  {
    description: 'SUR461',
    imageName:'Home5.jpeg',
  },
  {
    description: 'SPB329',
    imageName:'Home6.webp'
  },
]);

const nylon = reactive([
  {
    description: 'SSB401',
    imageName:'Home7.jpeg'
  },
  {
    description: 'SSA426',
    imageName:'Home8.jpeg'
  }
]);
function getImageUrl(name) {
    return `/img/${name}`;
}


</script>

<template>
  <v-carousel height="620" hide-delimiters="true" :cycle="true" interval="1700"  progress="#eee" :show-arrows="false">
    <v-carousel-item
      cover
      v-for="(item, index) in items"
      :key="index"
      :src="item.imagePath"
    >
    </v-carousel-item>
  </v-carousel>
  <v-container>
    <br />
    <h3 class="ml-3 pt-10">熱門款項 / 錶帶材質</h3>
    <br />
    <h3 class="ml-3" style="text-decoration: underline;">金屬</h3>
    <br />
    <v-row class="mb-10"> 
      <v-col v-for="(material, index) in metal" :key="index" cols="12" md="3" target="_blank" class="mr-5">
        <v-card class="pic">
          <v-img :src="getImageUrl(material.imageName)"></v-img>
          <div class="info">
            <button class="mb-1" @click.stop='navigateToItem'>View More</button>
            <p>{{ material.description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container >
    <h3 class="ml-3" style="text-decoration: underline;">尼龍</h3>
    <br />
    <v-row class="mb-10">
      <v-col v-for="(material, index) in nylon" :key="index" cols="12" md="3" class="mr-5">
        <v-card class="pic">
          <v-img :src="getImageUrl(material.imageName)"></v-img>
          <div class="info">
              <button class="mb-1" @click.stop='navigateToItem'>View More</button>
            <p>{{ material.description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="mb-250">
    <h3 class="ml-3" style="text-decoration: underline;">皮革</h3>
    <br />
    <v-row>
      <v-col v-for="(material, index) in leather" :key="index" cols="12" md="3" class="mr-5">
        
          <v-card class="pic">
            <v-img  :src="getImageUrl(material.imageName)"></v-img>
            <div class="info">
              <button class="mb-2" @click.stop='navigateToItem'>View More</button>
              <p>{{ material.description }}</p>
            </div>
          </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    navigateToItem() {
      this.$router.push({ name: 'ShopItem'});
    }
  },
}
</script>

