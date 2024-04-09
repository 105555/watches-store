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
    description: "SPB381",
    imagePath:
      "https://revolutionwatch.com/cdn-cgi/image/width=1500,height=1000,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/08/05-Seiko-Prospex-SPB381.jpg",
  },
  {
    description: "SPB417",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr555qXR1EpL6d7x2L5-EZgs3Dn8U3krDptSXEW11eTA&s",
  },
  {
    description: "SSJ013",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHETk0rIU8Qtsd_JnyO-2b4tSNGdpL3U2nuoVyjh67-w&s",
  },
  {
    description: "SJE089",
    imagePath:
      "https://watchesbysjx.com/wp-content/uploads/2023/06/Seiko-King-Seiko-SJE091-black-dial-lifestyle.jpg",
  },
]);

const leather = reactive([
  {
    description: "SUR472",
    imagePath: "https://cf.shopee.tw/file/sg-11134201-22100-7jwj8l1l9fiva1",
  },
  {
    description: "SUR461",
    imagePath:
      "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/31/realtime/26713691.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=800",
  },
  {
    description: "SPB329",
    imagePath:
      "https://img.pchome.com.tw/cs/items/DIACOKA900FH3WQ/000001_1682995490.jpg?width=480",
  },
]);

const nylon = reactive([
  {
    description: "SSB401",
    imagePath:
      "https://media.u-mall.com.tw/BBCont/003098/3098321/ffb5f497-41d2-494f-91c0-865507ad4132.jpg",
  },
  {
    description: "SSA426",
    imagePath:
      "https://media.u-mall.com.tw/BBCont/007284/7284173/ee0141cf-44d5-4ed7-a97e-35a3c6be6ddd.jpg",
  },
]);
</script>

<template>
  <v-carousel height="615" hide-delimiters="true" cycle="true" interval="1700">
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
      <v-col v-for="(material, index) in metal" :key="index" cols="12" md="3">
        <v-card class="pic">
          <v-img :src="material.imagePath"></v-img>
          <div class="info">
            <button class="mb-1">View More</button>
            <p>{{ material.description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <h3>尼龍</h3>
    <br />
    <v-row>
      <v-col v-for="(material, index) in nylon" :key="index" cols="12" md="3">
        <v-card class="pic">
          <v-img :src="material.imagePath"></v-img>
          <div class="info">
            <button class="mb-1">View More</button>
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
            <button class="mb-2">View More</button>
            <p>{{ material.description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

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
