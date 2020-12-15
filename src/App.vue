<template>
  <div id="app">
    <isshow/>
    <router-view/>
  </div>
</template>
<script>
import isshow from '@/views/ismain/ismain.vue'
export default {
  name:'App',
  components: {
      isshow
  },
   data () {
    return {
     
    }
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
