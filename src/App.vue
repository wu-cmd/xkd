<template>
  <div id="app">
    <isshow/>
    <!-- <sy/> -->
    <router-view/>
  </div>
</template>
// <script>
import isshow from '@/views/ismain/ismain.vue'
// import sy from '@/views/sy/Sy.vue'
export default {
  name:'App',
  components: {
      isshow,
  },
   data () {
    return {
     
    }
  }
}
</script>
<style>
@import "./assets/css/base.css";
  #app {
    width: 100%;
    height: 100%;
  }
</style>
