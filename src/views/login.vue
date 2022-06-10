<template>
<div class="login">
  <div class="close" @click="close">
    <i class="fa fa-times" aria-hidden="true"></i>
  </div>
  <div class="login-container">
    <h1>Login</h1>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
      <el-form-item prop="phone">
        <el-row>
          <label class="label">Your phone</label>
        </el-row>
        <el-row>
          <el-input v-model="loginForm.phone"></el-input>
        </el-row>
      </el-form-item>
      <el-form-item prop="email">
        <el-row>
          <label class="label">Your password</label>
        </el-row>
        <el-row>
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-row>
      </el-form-item>
      <el-form-item>
        <div class="login-button" @click="submitForm('loginForm')">
          Login
        </div>
      </el-form-item>
      <el-form-item>
        <div class="register">
          <span class="register1">No account? </span>
          <span class="register2">Register</span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      loginForm:{
        phone:'',
        password:''
      },
      rules:{
      }
    }
  },
  methods:{
    close(){
      this.$router.push({ path: '/home' });
    },
    submitForm(){
      let param={
        phone: this.loginForm.phone,
        password: this.loginForm.password
      }
      this.$store.dispatch('setPhone',param)
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  position: relative;
  .close{
    position: absolute;
    left: 90%;
    top: -10%;
    font-size: 3vw;
  }
  .login-container{
    //border: 1px solid black;
    width: 35vw;
    height: 50vh;
    margin: 200px auto auto;
    h1{
      font-size: 2.8vw;
      font-weight: 700;
      padding-bottom: 50px;
    }
  }
}

</style>
