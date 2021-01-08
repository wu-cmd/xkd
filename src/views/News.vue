<template>
  <div class="bg">
    <div class="bigwhite">
      <div class="bigs "  v-for="(item,index) in list" :key="index">
      <div class="im">
        <img  src="../assets/one/ld.png"/>
      </div>
      <div class="test1">
        <div class="boxa">
             <div class="ctext" >系统消息</div>
             <div class="ctexta">{{item.CreateDate}}</div>
        </div>
        <div class="ctextb">{{item.Message}}</div>
      </div>
      <div class="dyh">
        <img src="../assets/one/dyh.png"/>
      </div>
    </div>
</div>
    <div class="top"></div>
  </div>
</template>

<script>
import {list} from "@/api/user.js"
export default {
  name:"News",
  data() {
    return {
        list:[

        ],
    }
  },
  created(){
    list().then(res =>{
      console.log("res",res)
      this.list=res.data.row;
      // console.log("newa",newa)
      // this.list=newa
     })
     

  },
  methods:{
   
  }

}

</script>

<style>
.bg{
  width: 100%;
  height: 100%;
}
.bigwhite{
  padding-top: 10px;
  width: 100%;
  /* height: 100%; */
  background-color:rgb(245, 245, 245);
 
}
.bigs{
  width: 90%;
  height: 12%;
  margin: 0px auto 15px;
  border-radius:5px ;
  background-color: white;
  display: flex;
}
.im{
  width: 28px;
  height: 35px;
  margin: 20px 0 20px 20px;
}
.im img{
  width: 100%;
  height: 100%;
}
.dyh{
  margin: 27px 0 10px 0px;
  width: 8px;
  height: 15px;
}
.dyh img{
  width: 100%;
  height: 100%;
}

.boxa{
  display: flex;
  justify-content: space-between;
  padding: 13px 18px 0px 19px;
  
}
.test1{ 
  width: 77%;
}
.ctext{ 
  font-weight: bold;
}
.ctexta{
  font-size: 12px;
  padding-top:5px ;

}
.ctextb{

    width: 85%;
    margin: 4px auto;
    height: 33px;
    /* background: red; */
    line-height: 16px;
    font-size: 12px;
    word-break: break-all;
    white-space:normal;
    letter-spacing: 0;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;  /*要显示的行数*/
      -webkit-box-orient: vertical;
      font-size:12px;
}
.top{
  padding-bottom:100px ;background-color: #eee;
}
</style>