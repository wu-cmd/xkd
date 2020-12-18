import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
   
     path: '/', 
     name:'Sy2',
     redirect: '/Sy2',
    component: () => import( '../views/sy/Sy.vue'),
  //    meta: {title: '分销商数据中心',
  //          keepAlive: false,
  //                 },
  },
  {
    path: '/Sy2',
    name: 'Sy2222',
    component: () => import( '../views/sy/Sy2.vue')
  },
  {
    path: '/One',
    name: 'One',
    component: () => import( '../views/first/One.vue')
  },
  {
    path: '/ismain',
    name: 'ismain',
    component: () => import('../views/ismain/ismain.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue'),

  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
