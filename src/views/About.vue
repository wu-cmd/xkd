<template>
  <div class="about">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
<van-button type="primary" @click="change">主要按钮</van-button>
  </div>


  
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    change(){
      this.$router.push('/Home')
    }
  }
}
</script>

<style>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
