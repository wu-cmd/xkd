   <!-- <img class="headerbg" src="../../assets/login/bg.png"/> -->
    <!-- <div>
        <img class="headertext" src="../../assets/login/text.png"/>
      </div> -->
<template>
  <div class="bj">
      <div class="bg">
      <div class="bga"></div>
  </div>
  <div class="whit">
    <div><input type="num" class="inputa" placeholder="请输入分销商手机号"/></div>
    <div><input type="password" class="inputb" placeholder="请输入密码"/></div>
    <button class="logi">登录</button>
  </div>
     
  </div>
</template>

<script>
export default {
  name:'Sy',
  data(){
    return{

    }
  },

}
</script>

<style>
.bj {
  width: 100%;
  height: 100%;

  
}
.bg{
 top: 0px;
 width: 100%;
 height: 350px;
 background-image:url( "../../assets/login/bg.png");
 background-repeat: no-repeat;
 background-size: 100% 100%;
 background-position:center;
}
.bga{ 
    /* background: #000; */
    position: relative;
    top: 20%;
    width: 80%;
    margin: 0px 11%;
    height: 100px;
    background-image:url("../../assets/login/text.png");
    background-repeat: no-repeat;
    background-size: 100% 92%;
    z-index: 5 !important;
}
.whit{
 /* position: absolute; */
    width: 88%;
    height: 38%;
    margin: -36% 6%;
    /* padding: 26% 0%; */
    z-index: 3;
    border-radius: 10px;
    box-shadow: 0px 2px 5px #eee;
    background-color: white;
}
.inputa{
 margin: 22% 0 0 12%;
 padding: 12px 8%;
 border-radius:20px ;
 border: 1px solid #DBDBDB;
 color:#eee;
 /* box-shadow: 1px 1px 10px  #eee; */
}

.inputb{
  margin: 3% 0% 0% 12%;
  padding: 10px 8%;
  border-radius:20px ;
  border:1px solid #eee ;
  color:#eee;
  /* box-shadow: 1px 1px 10px  #eee; */
}
.logi{
  border: none;
  margin: 7% 0% 10% 13%;
  padding: 2% 31% 2% 30%;
  border-radius:20px ;
  background-color:rgba(20, 110, 235);
  color: white;
}
</style>