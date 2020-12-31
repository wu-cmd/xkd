<template>
  <div class="about">
    <div class="maina">
      <div class="box">
        <div class="text"></div>
      </div>
      <div class="titlea">
        <p class="texta"><span class="spa">189</span><span>****</span><span>2695</span>分销商，您好！</p>
      </div>
      <div class="contain">
        <div class="con-le">
          <P class="khnum">客户数 ></P>
          <P class="khnuma">{{num0}}</P>
        </div>
        <div class="con-ra">
           <P class="khnum">累计订单数 ></P>
          <P class="khnuma">{{num1}}</P>
        </div>
      </div>
      <div class="bottom">
          <P class="khnum">客户付费总额 ></P>
          <P class="khnuma">{{num2}}</P>
      </div>
     </div>
     <!-- <div @click="tc" >退出</div> -->
  </div>


  
</template>

<script>
import { aData } from "@/api/manage"
import {getCodeDome} from "@/api/user.js"
export default {
  data() {
    return {
    num0:'',
    num1:'',
    num2:'',
    }
  },
  created(){
    // let _this = this;
     aData("/aData",{}).then(res =>{
       console.log("结果",res);
      if(res.data.code == 200){
        this.num0 = res.data.result.data.num0;
        this.num1 = res.data.result.data.num1;
        this.num2 = res.data.result.data.num2;
      }else{
        alert("data error")
      }
     })   
  },
  methods:{
    // 退出
   tc(){
     getCodeDome().then(res =>{
       console.log(111)
       this.$router.push('/login')
     })

     }
   }
  }

</script>

<style>
.about{
  width: 100%;
  height: 100%;
  background-color: rgb(249, 249, 249);
}
 .maina{
   width: 100%;
   height: 32%;
   background-image: url(../assets/one/zm.png);
   background-repeat: no-repeat;
   background-size: 100% 100%;
 }
 .box{

    width: 75%;
    height: 35%;
    z-index: 1;
    padding-top: 10%;
    margin: 0 auto;
 }
 .text{
   z-index: 2;
   width: 100%;
   height: 100%;
   background-image: url(../assets/one/group.png);
   background-repeat: no-repeat;
   background-size: 100% 100%;

 }
 .titlea{
   /* border: 1px solid red; */
   width: 92%;
   /* height: 25%; */
   margin-top: 10% ;
   margin: 10%  auto 0 auto;
   background-color: white;
   border-radius:5px ;
   box-shadow: 1px 7px 6px #eee;
 }
 .texta{
   /* border: 1px solid green; */
   display: inline;
   font-weight: bold;
   line-height: 50px;
   font-size: 18px;
   padding-left: 5%;
 }
 .contain{
   display: flex;
   justify-content: space-between;
   width: 90%;
   height: 33%;
   margin: 5%  auto;
   /* border: 1px solid greenyellow; */
 }
 .con-le{
   width: 47%;
   height: 100%;
   border-radius:5px ;
   background-color: rgb(255, 255, 255);
   box-shadow: 1px 1px 15px #eee;
 }
 .con-ra{
   width:47%;
   border-radius:5px ;
   height: 100%;
   background-color: rgb(255, 255, 255);
   box-shadow: 1px 1px 15px #eee;
 }
 .bottom{
   width: 90%;
   height: 36%;
   border-radius:5px ;
   margin:  0 auto;
   background-color: rgb(255, 255, 255);
   box-shadow: 1px 1px 15px #eee;
 }
 .khnum{
   padding: 11px 0px 7px 18px;
   font-weight: bold;
   font-size: 16px;
 }
 .khnuma{
    padding: 0px 0px 7px 18px;
    font-weight: bold;
    font-size: 16px;
    color: #999;
 }
 .bottom >p{
   text-align: center;
 }
</style>
