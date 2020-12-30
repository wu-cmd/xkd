import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

return originalPush.call(this, location).catch(err => err)

}

const routes = [
  {
     path: '/', 
     name:'login',
     redirect: '/login',
    component: () => import( '../views/login/Sy.vue'),
    meta:{
      hidden:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/login.vue'),
    meta:{
      hidden: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/login/register.vue'),
    meta:{
      hidden: false
    }
  },
  {
    path: '/yzmLogin',
    name: 'yzmLogin',
    component: () => import( '../views/login/yzmLogin.vue'),
    meta:{
      hidden: false
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import( '../views/login/forget.vue'),
    meta:{
      hidden: false
    }
  },
  {
    path: '/One',
    name: 'One',
    component: () => import( '../views/first/One.vue'),
    meta:{
      hidden:true
    }
  },
  {
    path: '/ismain',
    name: 'ismain',
    component: () => import('../views/ismain/ismain.vue'),
    meta:{
      hidden:true
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( '../views/About.vue'),
  //   mate:{
  //     hidden:true
  //   }
  // },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      hidden:true
    }
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/News.vue'),
    meta:{
      hidden:true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta:{
      hidden:true
    }
  }
]
// 挂载路由导航守卫

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})
router.beforeEach((to, from, next)=>{
  console.log("to",to);
  if(to.path === "/login" && "/register")return next();
  const tokenStr = window.localStorage.getItem('token')
  console.log("localStorage.getItem('token')",localStorage.getItem('token'));
  if(!tokenStr) return next('/login')
  next()
})
export default router
