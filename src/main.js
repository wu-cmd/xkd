import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
// 此路径开启全局Mock
import "./mock_utils/index"


Vue.use(Vant);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url:'http://frontdev.youqimei.com/plat/v1/login',
//   method:"post"
// }).then(res =>{
//   console.log(res)
// })