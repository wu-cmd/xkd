<template>
  <div class="bj2">
    <div class="headerbg">
      <div class="zc"
           @click="join">注册</div>
      <div class="box">
        <div class="wt">

        </div>
      </div>
      <div class="whites">
        <div class="topin">
          <div class="suo"><img src="../../assets/login/sj.png" /></div>
          <input type="email"
                 class="topina"
                 v-model="loginForm.username"
                 placeholder="请输入分销商手机号"
                 @blur="check_count($event)">
        </div>
        <!-- <div>请输入正确的手机号</div> -->
        <div class="topin">
          <div class="suo"><img src="../../assets/login/suo.png" /></div>
          <input type="password"
                 v-model="loginForm.password"
                 class="topina"
                 placeholder="请输入密码"
                 @blur="check_phone($event)">
        </div>

        <div class="sumita">
          <div class="bt"
               @click="login">登录</div>
        </div>
        <div class="forgout">
          <a class="fp" @click="forget">忘记密码?</a>
          <span class="yzm" @click="yamLogin">验证码登录</span>
        </div>
      </div>
    </div>
    <van-loading type="spinner"
                 v-show="loading"
                 color="#1989fa"
                 class="loads" />
  </div>
</template>

<script>
import {logins} from "@/api/user.js"
// import {getHomeMultidata} from "@/network/home.js"
// import axios from 'axios'
// import { postAction } from '../../api/manage'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      isfalse1: false,
      isfalse: false,
      loading: false,
      result:null
    }
  },
  created() {
    // sessionStorage.setItem("myparams","noshop")
    // axios({
    //   url:'http://frontdev.youqimei.com/plat/v1/login',
    //   method:'post',
    //   data:{
    //     UserName:this.username,
    //     UserPassword:this.password
    //   },  
    // }).then(res =>{
    //   console.log(res)
    // })
    
  },
  methods: {
    check_count(e) {
      // 手机号校验
      var re = /^1[3456789]\d{9}$/
      let usernames = this.loginForm.username
      console.log(88888,e.target.value,this.username);
      if (re.test(usernames)) {
        console.log('成功')
        this.isfalse = true
      } else {
        this.isfalse = false
        console.log('请输入正确的手机号')
      }
    },
    // 密码校验
    check_phone(e) {
      var rc = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      console.log(88888, e.target.value)
      if (rc.test(e.target.value)) {
        console.log('成功')
        this.isfalse1 = true
      } else {
        this.isfalse1 = false
        console.log('请输入6~18位字母＋数字组合的手机格式')
      }
    },
 

  
       // 点击登录
     login(even) {
      let _this = this
      this.loading = false
      let params = {
        UserName : this.loginForm.username,
        UserPassword : this.loginForm.password,
      }
     
      logins(params).then(res => {
        console.log("res",res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('uid', res.data.params.uid);
      this.$router.push('/ismain')
    })
     },
    //  注册账号
    join() {
      // this.loading=true;
      console.log(123456);
      this.$router.push('/register');
      // console.log(" this.$router.push('/register');", this.$router.push('/register'));
      this.loading=false;
      console.log(789);
    },
    // 验证码登录
    yamLogin(){
      this.$router.push('/yzmLogin')
    },
    // 忘记密码
    forget(){
      this.$router.push('/forget')
    }
  },
}

  // login(even) {
    //   let _this = this
    //   this.loading = true // console.log('this.loginForm', this.loginForm)
    //   // if (this.isfalse1 && this.isfalse) { // console.log('this.isfalse1', this.isfalse1, this.isfalse)
    //     // postAction('/login', {}).then((res) => {  // console.log('jieguo', res)
    //   getHomeMultidata().then(res => {
    //   console.log(res);
    //   this.result = res
    // })
    //     // localStorage.setItem('token', res.data.result.token) // console.log("res.data.result.token",res.data.result.token);
    //     //   if (res.data.code == 200) { // this.$message.success("登录成功");
    //     //     this.$router.push('/ismain')// console.log("this.$router.push('/Home')",this.$router.push('/Home'))
    //     //   } else {
    //     //     this.$message.error('登录失败')
    //     //   }
    //     // })
    //   // } else {
    //   //   alert('账号或密码不能为空')
    //   //   // this.loading = false

    //   // }
    // },
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
.whites {
  border: 1px solid #fff;
  margin: 10% 3% 0 3%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 5px #eee;
}
.topin {
  display: flex;
  border: 1px solid #eee;
  width: 85%;
  line-height: 35px;
  border-radius: 50px;
  margin: 12% auto -5% auto;
  box-shadow: -5px 11px 21px #eee;
}
.topina {
  border-radius: 50px;
  border: none;
  width: 100%;
  height: auto;
  padding-left: 3%;
  font-size: 100%;
  line-height: 1%;
}
.suo {
  // border:1px solid #545454;
  width: 12%;
  z-index: 2;
  margin-left: 20px;
  margin-top: 10px;
  // height: auto;
}

.suo img {
  padding-top: 1px;
  padding-left: 1px;
  width: 70%;
  height: 70%;
}
.sumita {
  width: 80%;
  border-radius: 50px;
  background-color: rgb(67, 155, 255);
  border: 1px solid #000;
  margin: 15% 6% 0% 6%;
  line-height: 35px;
  border: 1px solid #fff;
}
.bt {
  text-align: center;
  border: 1px solid#fff;
  width: 100%;
  height: 100%;
  color: white;
  padding: 2% 3%;
  border-radius: 50px;
  background-color: rgb(35, 131, 241);
}
.forgout {
  display: flex;
  justify-content: space-between;
  width: 90%;
  // border:1px solid red;
  text-decoration: underline;
  color: #999;
  font-size: 16px;
  margin: 5% auto;
}
.zc {
  float: right;
  color: white;
  font-weight: bold;
  margin-top: 13px;
  margin-right: 13px;
}

// .van-loading {
//   margin-top: -100px;
//   margin-left: 50%;
//   transform: translateX(-50%);
// }

.van-loading__spinner  {
   margin-top: -100px;
  margin-left: 45%;
}

// .van-loading__spinner--spinner
</style>