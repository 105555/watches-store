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
  {
    path: '/login',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
      {
        path: 'ForgotPwd',
        name: 'ForgotPwd',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ForgotPwd.vue'),
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
        component: () => import(/* webpackChunkName: "home" */ '@/views/Register.vue'),
      },
    ]
  }
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
