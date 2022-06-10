<template>
<el-row class="header-container">
  <el-col :span="12" class="header-left">
    <div class="logo" @click="goHome">
      <div class="logo-icon">
        <el-image class="logo-img" fit="fill" :src="logo"  ></el-image>
        <el-image class="logo-img2" fit="fill" :src="logo2"  ></el-image>
      </div>
      <div class="logo-text">
        NEKO
      </div>
    </div>
  </el-col>
  <el-col :span="12" class="header-right">
    <div class="header-menu">
      <div class="login nav">
        <el-link @click="login">
        <i class="fa fa-user" aria-hidden="true"></i>
        <span>Login</span>
        </el-link>
      </div>
      <div class="lang nav">
        <el-link>
        <i class="fa fa-globe" aria-hidden="true"></i>
        <span>Language</span>
        </el-link>
      </div>
      <div class="search nav">
        <el-link>
        <i class="fa fa-search" aria-hidden="true"></i>
        <span>Search</span>
        </el-link>
      </div>
      <div class="menu nav">
        <el-link @click="menu">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <span>Menu</span>
        </el-link>
      </div>
    </div>
  </el-col>
</el-row>
</template>

<script>
import logoCat from '@/assets/logocat.png'
import logoCat2 from '@/assets/logocat2.png'
export default {
  name: "Header",
  data(){
    return{
      logo:logoCat,
      logo2:logoCat2
    }
  },
  methods:{
    menu(){
      this.$router.push({ path: '/menu' });
    },
    goHome(){
      this.$router.push({ path: '/home' });
    },
    login(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container{
  width: 80vw;
  margin: auto;
}
.header-left{
  height: 150px;
  position: relative;
  .logo{
    display: flex;
    width: 130px;
    position: absolute;
    top: 50px;
  }
  .logo-icon{
    display: flex;
  }
  .logo-img{
    width: 50px;
    height: 50px;
    left: 0;
    Opacity:1;
    transition: Opacity 50ms linear,left 100ms ease;
  }
  .logo-img2{
    width: 50px;
    height: 50px;
    left: 0;
    transition: Opacity 50ms linear,left 100ms ease;
    Opacity:0;
  }
  .logo-text{
    position: absolute;
    left: 50px;
    font-size: 30px;
    line-height: 50px;
    font-weight: bold;
    padding-left: 10px;
  }
  .logo:hover{
    .logo-img{
      left: -20px;
      Opacity:0;
    }
    .logo-img2{
      left: -50px;
      Opacity:1;
    }
    color: #1a3aff;
  }
  @media only screen and (max-width: 500px) {
       .logo-text{
         font-size: 10px;
         margin-left: -10px;
       }
  }
}

.header-right{
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  .header-menu{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    .nav{
      .el-link.el-link--default{
        color: #000000;
        font-size: 25px;
        margin-left: 30px;
        font-weight: bold;
        span{
          padding-left: 10px;
        }
      }
      .el-link.el-link--default:hover{
        color: #1a3aff;
      }
      .el-link.el-link--default:after, .el-link.el-link--primary.is-underline:hover:after, .el-link.el-link--primary:after {
        border-color: white;
      }
    }
    @media only screen and (max-width: 1500px) {
      .nav{
        .el-link.el-link--default{
          font-size: 20px;
        }
      }
    }
    @media only screen and (max-width: 1270px) {
      .nav{
        .el-link.el-link--default{
          font-size: 20px;
          margin-left: 5px;
        }
      }
    }
    @media only screen and (max-width: 1020px) {
      .nav{
        .el-link.el-link--default{
          font-size: 40px;
          margin-left: 20px;
          span{
            display: none;
          }
        }
      }
    }
  }
}
</style>
