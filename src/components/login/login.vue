<template>
  <div class="L_background">
    <div class="L_outer_label">
      <img class="L_inner_label" src="../../assets/LandR/logo1.png">
    </div>

    <form>
      <div class="login_form">
        <input type="text"  class="L_ic_user L_icon"  placeholder="账号" v-model="L_username" v-on:blur="L_check_username">
        <input type="password"  class="L_ic_password L_icon"  placeholder="密码" v-model="L_password" v-on:blur="L_check_password">
      </div>

      <el-button class="login_btn" @click.native="login" type="primary " round :loading="BtnLoading">登录</el-button>
    </form>

    

    <div class="logon">
      <div>没有账号？</div>
      <a class="logon_a" href="#/Register">注册</a>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
  export default {
    data() {
      return {
        L_username: '',
        L_password: '',
        BtnLoading: false
      }
    },
 

    computed: {
     
    },
    methods: {
      L_check_username() {
        if (/^[1-9][0-9]{5,15}$/.test(this.L_username)) {
          // this.$message.error('duile')
          this.username_ready='1'
          }
        else {
          if (this.L_username === "") {
            this.$message({message: '账号不能为空！',type: 'warning'});
          }
          else {
            this.$message.error('账号应为6~16位数字！');
            }
            }},


      L_check_password() {
        if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,15}$/.test(this.L_password)) {
          // this.$message.error('duile')
          this.password_ready='1'
          }
        else {
          if (this.L_password === "") {
            this.$message({message: '密码不能为空！',type: 'warning'});
          }
          else {
            this.$message.error('密码应为6~16位英文数字组合！');
          }
          }},
          
      login() {
        const self = this;
        if (self.password_ready == "1" && self.username_ready == "1") {
          this.BtnLoading=true
          //登录请求
          var formData=new FormData(); 
          formData.append('passport',self.L_username);
          formData.append('password',self.L_password);
          axios.post("/api/user/sign-in",formData)
          .then(res=> {
              console.log(res)

              switch(res.data.code){
							case 0:
                this.$message({message: '登录成功！',type: 'success'});
                let _this = this;
                this.$store.commit('login', {
                  username: this.username,
                  password: this.password})
                  
                setTimeout(function(){ _this.$router.push({path: '/Homepage'});},1000)
                break
							case 1:
                this.$message.error(res.data.message);
                this.BtnLoading=false;
						}
            })

          return;
        }
        else {
          this.$message.error('请完成并确保信息正确填写！');
        }
      }
    }
  }
</script>

<style>
	
	.L_outer_label {
	/* margin-top: 7%; */
  height: 35vh !important;
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	height: 150px;
	text-align: center;
	}

	.L_inner_label {
	position: absolute;
	left:0;
	right: 0;
	bottom: 0;
	/* top:8%; */
	margin: auto;
	height: 140px;
  width: 140px;
  }
  
	.L_icon {
    font-size: 15px;
    color: rgb(255,255,255);
	  height: 35px;
	  width: 80%;
	  margin-bottom: 10px;
	  padding-left: 15%;
	  border: 0px;
	  border-bottom: solid 2px lavender;
  }
    .L_ic_user {
    background: url("../../assets/LandR/ic_user.png") no-repeat;
    background-size: 22px 22px;
    background-position: 1%;
  }


  .login_form {

    position: absolute;
    left:50%;
    top:51%;
    transform: translate(-50%, -50%);

    width: 50%;

  }

  .L_ic_password {
    background: url("../../assets/LandR/ic_password.png") no-repeat;
    background-size: 22px 22px;
    background-position: 1%;
  }

  .login_btn {
    position: absolute !important;
    left:50%;
    top:67%;
    transform: translate(-50%, -50%);

    width: 30%;
    font-size: 15px;
    border: 0px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }
  .logon {
    font-weight: 500;
    position: absolute;
    left:50%;
    top:78%;
    transform: translate(-50%, -50%);

    font-size: 13px !important;
    color: rgba(241, 240, 240, 0.801);
    text-align: center;
    width: 60%;
    font-size: 15px;


  }
  .logon_a{
    text-decoration: none;
    color: white;
    font-weight: bolder;
  }
</style>

