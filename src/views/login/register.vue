<template>
  <div class="bj2">
    <div class="headerbg">
      <div class="zc" @click="logina">登录</div>
      <div class="box">
        <div class="wt">
          
        </div>
        </div>
         <div class="whites">
          <div class="topin">
            <div class="suo"><img src="../../assets/login/sj.png"/></div>
            <input type="email" class="topina" v-model="loginForm.username" placeholder="请输入手机号" @blur="check_count($event)">
          </div>
          <!-- <div>请输入正确的手机号</div> -->
          <div class="topinb">
            <div class="suoa"><img src="../../assets/login/yzm.png" /></div>
            <!-- @blur="check_phone($event)" -->
            <input type="num" v-model="loginForm.yzm" class="topinc" placeholder="请输入验证码" >
            <div class="djs"  v-if="seem"  @click="changeyzm">获取验证码</div>
            <div class="yzms" v-else >再次获取({{count}}s)</div>
          </div>
          
           <div class="topin">
            <div class="suo"><img src="../../assets/login/suo.png" /></div>
            <input type="password" v-model="loginForm.password" class="topina" placeholder="请设置6-20位密码" @blur="check_phone($event)">
            
          </div>
          <div class="sumita">
            <div class="bt" @click="login">注册</div>
          </div>
          <!-- <div class="forgout">
            <a  class="fp" >忘记密码?</a>
            <span class="yzm">验证码登录</span>
          </div> -->
      </div>
       <van-loading type="spinner"
                 v-show="loading"
                 color="#1989fa"
                 class="loads" />
 
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
// import { postAction } from "../../api/manage"
export default {
  name: 'register',
  data() {
    return {
      loginForm:{
        username:"",
        yzm:"",
        password:""
      },
      isfalse1:false,
      isfalse:false,
      loading: false,
      seem:true,
      count:'',
      time:null
    }
  },
  created(){
  
  },
  methods:{
    check_count(e){
      // 手机号校验
      // var re = /^1[3456789]\d{9}$/;
      var re =/^ [1-9]\d{7,10}@qq\.com/;
      let usernames = this.loginForm.username;
      // console.log(88888,e.target.value,this.username);
       if (re.test(usernames)) {
        // alert('成功');
       console.log("成功");
       this.isfalse = true

       }else {
         this.isfalse = false
        //  alert("请输入正确的手机号")
         console.log("请输入正确的手机号")
       }
    },
      // 密码校验
    check_phone(e){
      var rc = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      console.log(88888,e.target.value);
       if (rc.test(e.target.value)) {
      //  alert("成功");
       console.log("成功");
          this.isfalse1 = true

        // event.target.value = '';
       }else {
          this.isfalse1 = false
          console.log('请输入6~18位字母＋数字组合的手机格式');
       }
    },
    // 点击登录

    login(even){
      let _this = this;
      // console.log('this.loginForm',this.loginForm);
      // if (this.isfalse1 && this.isfalse) {
        // console.log("this.isfalse1",this.isfalse1,this.isfalse);
        // // console.log('账号或密码不能为空')
        // //  postAction("/login",{}).then(res =>{
        //     console.log("jieguo",res);
        //     localStorage.setItem("token",res.data.result.token)
        //     // console.log("res.data.result.token",res.data.result.token);
        //     if (res.data.code == 200) {
        //       this.$message.success("登录成功");
        //       this.$router.push('/ismain')
        //       // console.log("this.$router.push('/Home')",this.$router.push('/Home'))
        //     }else{
        //       this.$message.error("登录失败");
        //     }
        //  })
        console.log("a112");
         axios({
       url:'http://frontdev.youqimei.com/plat/v1/register',
       method:'post',
       data:{
           UserName:"daming002",
           Email:this.loginForm.username,
           Code:this.loginForm.yzm,
           UserPassword:this.loginForm.password
      },  
       }).then(res =>{
        //  console.log(res)
       })
      // }else{
      //   alert('账号或密码不能为空')
      // }
       },
      //  切换登录
      logina(){
        this.loading=true;
        console.log("222");
        this.$router.push("/login")
      },


      
      // 获取验证码
      changeyzm(){
          axios({
      url:'http://frontdev.youqimei.com/plat/v1/ecode',
      method:'post',
      data:{
        Email:this.loginForm.username,
      },  
    }).then(res =>{
      // if(res.status = 200 ){
       const TIME_COUNT = 60;
        if (!this.time) {
       this.count = TIME_COUNT;
       this.seem = !this.seem;
       this.time = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.seem = true;
         clearInterval(this.time);
         this.time = null;
        }
       }, 1000)
      }
      // }
    }).catch(err => {
      console.log(err)
       alert("失败")
    })
        console.log("点击获取验证码");
      }
      }
}
  

</script>

<style scoped lang="less">
.bj2 {
  width: 100%;
  height: 100%;
}
.headerbg {
  width: 100%;
  height: 60%;
  background-image: url('../../assets/login/bg.png');
  background-repeat: no-repeat;
  background-origin: border-box;
  background-size: 100% 100%;
}
.box {
  width: 90%;
  margin: auto;
  padding-top: 10%;
  height: 30%;
}
.wt {
    width: 100%;
    height: 74%;
    background-image: url(/img/text.9db10217.png);
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: 100% 100%;
}
.whites{
  border: 1px solid #fff;
  margin: 10% 3% 0 3%;
  border-radius:10px ;
  background-color: white;
  box-shadow: 1px 1px 5px #eee;
}
.topin{
  display: flex;
  border: 1px solid #eee;
  width: 85%;
  line-height: 35px;
  border-radius:50px ;
  margin: 12% auto -5% auto;
  box-shadow: -5px 11px 21px #eee
}
.topina{
 border-radius:50px ;
 border: none ;
  width: 100%;
  height: auto;
  padding-left:3% ;
  font-size: 100%;
  line-height: 1%;

}
// --------
.topinb{
  display: flex;
  border: 1px solid #eee;
  width: 85%;
  line-height: 35px;
  border-radius:50px ;
  margin: 12% auto -5% auto;
  box-shadow: -5px 11px 21px #eee
}
.topinc{
  border-radius:50px ;
 border: none ;
  width: 100%;
  height: auto;
  padding-left:3% ;
  font-size: 100%;
  line-height: 1%;
}
.suoa{
   width: 15%;
  z-index: 2;
  margin-left:20px ;
  margin-top:10px ;
}
.suoa img{
  padding-top: 1px;
  padding-left: 1px;
  width:90%;
  height: 70%;
}
.djs{
  // border: 1px solid red;
  background-color: rgb(67, 155, 255);
  width: 75%;
  text-align: center;
  border-radius: 25px;
  padding-top: 4px;
  color: white;
} 
.yzms{
  background-color: rgb(67, 155, 255);
  width: 75%;
  text-align: center;
  border-radius: 25px;
  padding-top: 4px;
  color: white; 
}
// -------------
.suo{
  // border:1px solid #545454;
  width: 12%;
  z-index: 2;
  margin-left:20px ;
  margin-top:10px ;
  // height: auto;
}
.suo img{
  padding-top: 1px;
  padding-left: 1px;
  width:70%;
  height: 70%;
}
.sumita{
  width: 80%;
  border-radius:50px ;
  background-color: rgb(67, 155, 255);
  border: 1px solid #000;
  margin: 15% 6% 7% 6%;
  line-height: 35px;
  border: 1px solid #fff;
}
.bt{
  text-align: center;
  border: 1px solid#fff;
  width: 100%;
  height: 100%;
  color:white;
  padding: 2% 3%;
  border-radius:50px ;
  background-color:rgb(35, 131, 241);
}
.forgout{
  display: flex;
  justify-content:space-between;
  width: 90%;
  // border:1px solid red;
  text-decoration:underline;
  color: #999;
  font-size: 16px;
  margin:5% auto;
}
.zc{
float:right;
color: white;
font-weight: bold;
margin-top: 13px;
margin-right: 13px;
}
</style>