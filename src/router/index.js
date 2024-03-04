// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

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
        component: () => import(/* webpackChunkName: "home" */ '@/views/Shop.vue'),
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
        component: () => import(/* webpackChunkName: "home" */ '@/views/ContactInfo.vue'),
      },
      
    ],
  },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
