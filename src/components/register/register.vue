<template>
  <div class="R_background">
    <div class="R_outer_label">
      <img class="R_inner_label" src="../../assets/LandR/logo2.png">
    </div>

    <form>
      <div class="register_form">
        <input type="text"  class="R_ic_nickname R_icon"  placeholder="昵称" v-model="R_nickname"  v-on:blur="R_check_nickname">
        <input type="text"  class="R_ic_user R_icon"  placeholder="账号" v-model="R_username" v-on:blur="R_check_username">
        <input type="password"  class="R_ic_password R_icon"  placeholder="密码" v-model="R_password" v-on:blur="R_check_password">
        <input type="password"  class="R_ic_confirm_password R_icon"  placeholder="确认密码" v-model="R_confirm_password" v-on:blur="R_check_confirm_password">
      </div>

      <el-button class="register_btn" @click.native="register" type="primary " round :loading="Btnregistering">注册</el-button>
    </form>

    <div class="signin">
      <div>已有账号？</div>
      <a class="signin_a" href="#/Login">登录</a>
    </div>
  </div>
</template>



<script>
import axios from 'axios'

  export default {
    data() {
      return {
        R_nickname: '',
        R_confirm_password: '',
        R_username: '',
        R_password: '',
        Btnregistering: false,
      }
    },
    computed: {
      
    },
    methods: {

      R_check_nickname() {
        if (/^[\d\w\u4e00-\u9fa5,\.;\:"'?!\-]{2,6}$/.test(this.R_nickname)) {
          // this.$message.error('duile');
          this.nickname_ready='1'
          }
        else {
          if (this.R_nickname === "") {
            this.$message({message: '昵称不能为空！',type: 'warning'});
          }
          else {
            this.$message.error('昵称应为2~6位中、英、数字组合！');
            
          }
          }
},

      R_check_username() {
        if (/^[1-9][0-9]{5,15}$/.test(this.R_username)) {
          // this.$message.error('duile')
          this.username_ready='1'
          }
        else {
          if (this.R_username === "") {
            this.$message({message: '账号不能为空！',type: 'warning'});
          }
          else {
            this.$message.error('账号应为6~16位数字！');
          }
          }
},
      R_check_password() {
        if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,15}$/.test(this.R_password)) {
          // this.$message.error('duile')
          this.password_ready='1'
          }
        else {
          if (this.R_password === "") {
            this.$message({message: '密码不能为空！',type: 'warning'});
          }
          else {
            this.$message.error('密码应为6~16位英文数字组合！');
          }
          }
},

      R_check_confirm_password() {
        if (this.R_password === this.R_confirm_password) {
          this.confirm_password_ready='1'
        }
        else {
          this.$message.error('两次密码不一致');
        }
      },

      register() {
        const self = this;
        if (self.nickname_ready == "1" && self.password_ready == "1" && self.username_ready == "1" && self.confirm_password_ready == "1")
        {
          this.Btnregistering=true
          var formData=new FormData();
          formData.append('nickname',self.R_nickname);
          formData.append('passport',self.R_username);
          formData.append('password',self.R_password);
          formData.append('password2',self.R_password);
          axios.post("/api/user/sign-up",formData)
          .then(res=> {
              console.log(res)

              switch(res.data.code){
							case 0: 
                this.$message({message: '注册成功！',type: 'success'});
                let _this = this;
                setTimeout(function(){ _this.$router.push({path: '/Login'});},2000)
                break
							case 1:
                this.$message.error(res.data.message);
                this.Btnregistering=false;
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
input:focus{outline:none;}

  .R_background{
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: 100% 100%;
  }
	
	.R_outer_label {
  height: 30vh !important;
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	height: 150px;
	text-align: center;
	}

	.R_inner_label {
	position: absolute;
	left:0;
	right: 0;
	bottom: 0;
	/* top:8%; */
	margin: auto;
	height: 120px;
  width: 120px;
  }


.R_ic_nickname {
  background: url("../../assets/LandR/ic_nickname.png") no-repeat;
  background-size: 22px 22px;
  background-position: 1%;
}
  
	.R_icon {
    color: rgb(255,255,255);
    font-size: 15px;
	  height: 30px;
	  width: 80%;
	  margin-bottom: 10px;
	  padding-left: 15%;
	  border: 0;
	  border-bottom: solid 2px lavender;
  }
    .R_ic_user {
    background: url("../../assets/LandR/ic_user.png") no-repeat;
    background-size: 22px 22px;
    background-position: 1%;
  }
    .R_ic_confirm_password{
    background: url("../../assets/LandR/ic_confirm_password.png") no-repeat;
    background-size: 22px 22px;
    background-position: 1%;
    }

  .register_form {
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }

  .R_ic_password {
    background: url("../../assets/LandR/ic_password.png") no-repeat;
    background-size: 22px 22px;
    background-position: 1%;
  }

  .register_btn {
    position: absolute !important;
    left:50%;
    top:74%;
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

  .signin {
  position: absolute;
  left:50%;
  top:85%;
  transform: translate(-50%, -50%);

  font-size: 13px !important;
  color: rgba(241, 240, 240, 0.801);
  text-align: center;

  width: 60%;
  font-size: 15px;
  font-weight: lighter;

}
.signin_a{
  text-decoration: none;
  color: white;
  font-weight: bolder;
}

</style>

