<template>
  <div class="wode">
    <div class="head">
      <div class="heada">
        <img src="../assets/one/header.png" />
      </div>
      <span class="spans">福建嗨知了科技有限公司</span>
    </div>
    <!-- **********第二层********** -->
    <div class="doublea">
      <div class="da">
        <p class="ten"> 10</p>
        <p class="tem">本周剩余推广数</p>
      </div>
      <div class="da">
        <p class="ten">10</p>
        <p class="tem">已发布活动数</p>
      </div>
    </div>
    <!-- *****************第三层 -->
   <div class="bs">
      <div class="bg">
        <div class="vip">
          <img src="../assets/one/vip.png"/>   
        </div>
       <div class="viptext">会员中心</div>
       <div class="butt">开通会员</div>
      </div>
    </div>


    <!-- ********************第四层 -->
<div class="zwf">
  <div class="lb">
    <ul>
      <li class="lia">
        <img class="ai" src="../assets/one/dp.png">
        <span>我的邀请码</span>
        <img class="bi" src="../assets/one/dyh.png">
      </li>
       <li class="lia">
        <img class="ai" src="../assets/one/bj.png">
        <span>我的会员订购纪录</span>
        <img class="bi" src="../assets/one/dyh.png">
      </li>
       <li class="lia">
        <img class="ai" src="../assets/one/xx.png">
        <span>联系客服</span>
        <img class="bi" src="../assets/one/dyh.png">
      </li>
       <li class="lia">
        <img class="ai" src="../assets/one/cl.png">
        <span>设置</span>
        <img class="bi" src="../assets/one/dyh.png">
      </li>
    </ul>

    </div>
     </div>
    
    </div>
</template>

<script>
export default {
    name:"Cart"
}
</script>

<style>
.wode{
  width: 100%;
  height: 100%;
}
.head{ 
  
  padding-top: 11%;
  padding-left: 21px;
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.heada{
 border:1px solid rgb(246, 127, 97);
  border-radius:50px;
  width: 50px;
  height: 50px;
}

.head img{
  width: 100%;
  height: 100%;
 }
 .spans{
      width: 80%;
    padding-top: 15px;
    padding-left: 10px;
    font-weight: bold;   
    font-family: PingFang SC;
 }
 .doublea{
   /* margin-top: 5%; */
   padding-top: 15px;
   width: 70%;
   height: 10%;
   margin: 0 auto;
   display: flex;
   justify-content:space-around;
 }
 .doublea >div{
   padding-top: 20px;
   text-align: center;
 }
 .ten{
   font-weight: bold;
   font-size: 24px;
 }
 .tem{
   font-size: 12px;
   color: #999;
   padding-top: 5px;
 }
  .bs{
   
   width: 90%;
   height: 10%;
   margin:0 auto;
 }
 .bg{
    margin-top: 24px;
   width: 100%;
   height: 100%;
   background-image: url(../assets/one/mb.png);
   background-size: 100% 100%;
   display: flex;
 }
.vip{
  padding: 20px;
  width: 40px;
  height:25px;
}
.vip img{
  height: 100%;
  width: 100%;
}
.viptext{
  color: white;
  font-weight: bold;
  line-height: 68px;
}

.butt{
    height: 30px;
    width: 100px;
    border-radius: 50px;
    text-align: center;
    line-height: 30px;
    background-color: white;
    margin: 20px 19px 20px 73px;
    font-weight: bold;
    font-size: 14px;
}
.zwf{
  margin-top:22px;
}
.lb{
  margin: 0 auto;
  width: 92%;
}
.lia{
  padding-top:10px ;
  width: 100%;
  display: flex;
}

.lb .ai {
  padding: 4px 10px 4px 10px;
  width: 6%;
  height: 22px;
}
.lb span {
  line-height: 30px;
  width: 88%;
  padding-left:5px;
  font-size: 12px;
  border-bottom:1px solid #000 ;
}
.bi{
  margin: 8px 10px 4px 12px;
  width: 3%;
  height: 19px;
}
</style>