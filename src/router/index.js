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
      hidden:true,
      requireAuth:false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/login.vue'),
    meta:{
      hidden: false,
      requireAuth:true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/login/register.vue'),
    meta:{
      hidden: false,requireAuth:false
    }
  },
  {
    path: '/yzmLogin',
    name: 'yzmLogin',
    component: () => import( '../views/login/yzmLogin.vue'),
    meta:{
      hidden: false,requireAuth:false
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import( '../views/login/forget.vue'),
    meta:{
      hidden: false,requireAuth:false
    }
  },
  // {
  //   path: '/One',
  //   name: 'One',
  //   component: () => import( '../views/first/One.vue'),
  //   meta:{
  //     hidden:true,requireAuth:false
  //   }
  // },
  {
    path: '/ismain',
    name: 'ismain',
    component: () => import('../views/ismain/ismain.vue'),
    meta:{
      hidden:true,requireAuth:true
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
      hidden:true,requireAuth:true
    }
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/News.vue'),
    meta:{
      hidden:true,requireAuth:true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta:{
      hidden:true,requireAuth:true
    }
  }
]
// 挂载路由导航守卫

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})
// router.beforeEach((to, from, next)=>{
//   console.log("to",to);
//   if(to.path === "/login" && "/register")return next();
//   const tokenStr = window.localStorage.getItem('token')
//   console.log("localStorage.getItem('token')",localStorage.getItem('token'));
//   if(!tokenStr) return next('/login')
//   next()
// })
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(localStorage.getItem('token')){ //判断本地是否存在access_token
      next();
    }else {
     if(to.path === '/login'){
        next();
      }else {
        next({
          path:'/login'
        })
      }
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  // if(to.fullPath == "/login"){
  //   if(localStorage.getItem('token')){
  //     next({
  //       path:from.fullPath
  //     });
  //   }else {
  //     next();
  //   }
  // }
});
export default router
