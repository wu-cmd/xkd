   <!-- <img class="headerbg" src="../../assets/login/bg.png"/> -->
    <!-- <div>
        <img class="headertext" src="../../assets/login/text.png"/>
      </div> -->
<template>
  <div class="bj2">
    <div class="headerbg">
      <div class="box">
        <div class="wt">
        </div>
        </div>
         <div class="whites">
          <div class="topin">
            <div class="suo"><img src="../../assets/login/sj.png"/></div>
            <input type="number" class="topina" v-model="loginForm.username" placeholder="请输入分销商手机号" @blur="check_count($event)">
          </div>
          <!-- <div>请输入正确的手机号</div> -->
          <div class="topin">
            <div class="suo"><img src="../../assets/login/suo.png" /></div>
            <input type="password" v-model="loginForm.password" class="topina" placeholder="请输入密码" @blur="check_phone($event)">
          </div>
          <div class="sumita">
            <!-- <input type="submit" value="登录" class="bt"/> -->
            <div class="bt" @click="login">登录</div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
import { postAction } from "../../api/manage"
export default {
  
  name: 'Sy2',
  data() {
    return {
      loginForm:{
        username:"",
        password:""
      }
      
    }
  },
  methods:{
    check_count(e){
      // 手机号校验
      var re = /^1[3456789]\d{9}$/;
      let usernames = this.loginForm.username;
      // console.log(88888,e.target.value,this.username);
       if (re.test(usernames)) {
        // alert('成功');
       console.log("成功");

       }else {
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
        // event.target.value = '';
       }else {
          // alert('请输入6~18位字母＋数字组合的手机格式');
          console.log('请输入6~18位字母＋数字组合的手机格式');
       }
    },
    // 点击登录

    login(even){
      let _this = this;
      console.log('this.loginForm',this.loginForm);
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        // alert('账号或密码不能为空')
        console.log('账号或密码不能为空')
      } else {
        //   this.axios({
        //   method: 'post',
        //   url: '/user/login',
        //   data: _this.loginForm
        // }).then(res => {
        //   console.log(res.data);
        //   _this.userToken = 'Bearer ' + res.data.data.body.token;
        //   // 将用户token保存到vuex中
        //   _this.changeLogin({ Authorization: _this.userToken });
        //   _this.$router.push('/home');
        //   alert('登陆成功');
        // }).catch(error => {
        //   alert('账号或密码错误');
        //   console.log(error);
        // });
         postAction("/login",{}).then(res =>{
            // console.log("jieguo",res);
            localStorage.setItem("token",res.data.result.token)
            // console.log("res.data.result.token",res.data.result.token);
            if (res.data.code == 200) {
              this.$message.success("登录成功");
              this.$router.push('/ismain')
            }else{
              this.$message.error("登录失败");
            }
         })
      }
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
  margin: 15% 6%;
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
</style>