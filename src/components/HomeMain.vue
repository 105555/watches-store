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
    // console.log(photoData);
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
    imagePath:'../../public/img/Home_1.jpeg',
  },
  {
    description: 'SPB417',
    imagePath:'../../public/img/Home_2.jpeg'
  },
  {
    description: 'SSJ013',
    imagePath:'../../public/img/Home_3.jpeg'
  },
  {
    description: 'SJE089',
    imagePath:'../../public/img/Home_1.jpeg',
  },
]);

const leather = reactive([
  {
    description: 'SUR472',
    imagePath:'../../public/img/Home_4.jpeg',
  },
  {
    description: 'SUR461',
    imagePath:'../../public/img/Home_5.jpeg',
  },
  {
    description: 'SPB329',
    imagePath:'../../public/img/Home_6.webp'
  },
]);

const nylon = reactive([
  {
    description: 'SSB401',
    imagePath:'../../public/img/Home_7.jpeg'
  },
  {
    description: 'SSA426',
    imagePath:'../../public/img/Home_8.jpeg'
  }
]);
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
    <h3>熱門款項 / 錶帶材質</h3>
    <br />
    <h3>金屬</h3>
    <br />
    <v-row> 
      <v-col v-for="(material, index) in metal" :key="index" cols="12" md="3" target="_blank" @click.stop="">
        <v-card class="pic">
          <v-img :src="material.imagePath"></v-img>
          <div class="info">
            <button class="mb-1" @click.stop='navigateToItem'>View More</button>
            <p>{{ material.description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container >
    <h3>尼龍</h3>
    <br />
    <v-row>
      <v-col v-for="(material, index) in nylon" :key="index" cols="12" md="3">
        <v-card class="pic">
          <v-img :src="material.imagePath"></v-img>
          <div class="info">
              <button class="mb-1" @click.stop='navigateToItem'>View More</button>
            <p>{{ material.description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="pb-100">
    <h3>皮革</h3>
    <br />
    <v-row>
      <v-col v-for="(material, index) in leather" :key="index" cols="12" md="3">
        
          <v-card class="pic">
            <v-img :src="material.imagePath"></v-img>
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
<style lang="scss" scoped>
.pic {
  position: relative;
  width: 100%;
  float: left;
  margin: 10px;
  cursor: pointer;
  .info {
    opacity: 0;
    position: absolute;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    &:hover {
      -webkit-transition: 500ms;
      transition: opacity 0.8s ease-in-out;
      opacity: 1;
    }
  }
}
button {
  border: solid 1px #000;
  color: #000;
  background-color: #eeebeb;
  border-radius: 8px;
  padding: 0px 5px 0px 3px;
  display: flex;
  justify-content: center;
  align-content: center;
}
p {
  color: #eae3e3;
}
.pb-100{
    padding-bottom: 100px;
}
</style>
