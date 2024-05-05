// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import { getStatus } from '@/plugins/localStorage'
const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      
    ],
  },
  {
    path: '/shop',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Shop',
        meta: { title: " 商品 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Shop.vue'),
      },
      {
        path: 'shopItem',
        name: 'ShopItem',
        meta: { title: " 【藍水晶】Zxc 水行俠獨裁者 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/item/ShopItem.vue'),
      },
    ],
  },
  {
    path: '/storeInfo',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'StoreInfo',
        meta: { title: " 店鋪資訊 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/StoreInfo.vue'),
      },
      
    ],
  },
  {
    path: '/contactInfo',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'ContactInfo',
        meta: { title: "聯絡 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/ContactInfo.vue'),
      },
      
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        meta: { title: "帳號 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/auth/Login.vue'),
      },
      {
        path: 'ForgotPwd',
        name: 'ForgotPwd',
        meta: { title: "帳號 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/auth/ForgotPwd.vue'),
      },
    ],
  },
  {
    path:'/Register',
    component: () => import('@/layouts/default/Default.vue'),
    children:[
      {
        path: '',
        name: 'Register',
        meta: { title: "建立帳號 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/auth/Register.vue'),
      },
    ]
  },
  {
    path:'/DashBoard',
    component: () => import('@/layouts/default/Default.vue'),
    children:[
      {
        path: '',
        name: 'DashBoard',
        meta: { title: " 帳戶 | Henlex's" },
        component: () => import(/* webpackChunkName: "home" */ '@/views/DashBoard.vue'),
      },
    ]
  }
  
]


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || " Henlex's ";
  next();
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = getStatus();
  if(to.name === 'DashBoard' && !isLoggedIn){
    next({name: 'Login'})
  }else{
    next();
  }
})

export default router
