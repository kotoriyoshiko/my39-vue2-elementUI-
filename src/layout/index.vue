<template>
<el-container>
  <el-header class="header-index">
    <Header></Header>
  </el-header>
  <el-main class="main-index">
    <AppMain></AppMain>
  </el-main>
  <el-footer>
    <Footer></Footer>
  </el-footer>
</el-container>
</template>

<script>
import Header from "@/layout/components/Header";
import AppMain from "@/layout/components/AppMain";
import Footer from "@/layout/components/Footer";
export default {
  name: "index",
  components:{
    Header,
    AppMain,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.header-index{
  //border: 1px solid red;
  height:auto!important;
}
.main-index{
  //border: 1px solid red;
}

</style>
