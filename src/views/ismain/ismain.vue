<template>
  <div class="mainss">
    <!-- <div class="btns" @click="change(item)" v-for="(item,index) in arrays" :key="index">
        <div class="btnsss">{{item}}</div>
    </div> -->
    <van-tabbar v-model="active"
                @change="onChange">
      <van-tabbar-item icon="home-o">商户中心</van-tabbar-item>
      <van-tabbar-item icon="search">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      <!-- <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'ismain',
  data() {
    return {
      active: 0,
    }
  },
  created() {
    this.active = 0
    this.onChange('/Home')
  },
  methods: {
    onChange(sw) {
      switch (sw) {
        case 0:
          this.$router.push('/Home')
          break
        case 1:
          this.$router.push('/News')
          break
        case 2:
          this.$router.push('/Cart')
          break
        // case 3:
        //    this.$router.push("/About");
        // break;
        default:
          this.$router.push('/Home')
      }
    },
  },
}
</script>

<style scoped lang="less">
.main {
  display: flex;
  height: 98rpx;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
}
.main div {
  flex: 1;
  text-align: center;
}
.mainss {
  width: 100%;
}
.btns {
  width: 100%;
  .btnsss {
    display: inline-block;
    width: 25%;
  }
}
</style>