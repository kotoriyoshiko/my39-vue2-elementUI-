<template>
<div class="main-container">
  <transition name="fade-transform" mode="out-in">
  <router-view :key="key"></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: "AppMain",
  data(){
    return{}
  },
  computed:{
    key() {
        return this.$route.path
      }
  }
}
</script>

<style lang="scss" scoped>
.main-container{
  //border: 1px solid pink;
  width: 80vw;
  margin: auto;
  padding-top: 100px;
  position: relative;
  font-size: 4.2vw;
  font-weight: 700;
  line-height: 2;
  }
</style>
