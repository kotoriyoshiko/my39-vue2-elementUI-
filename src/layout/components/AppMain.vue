<template>
<div class="main-container">
  <transition name="slide-fade" mode="out-in">
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
  margin: 100px auto auto;
  position: relative;
  font-size: 4.2vw;
  font-weight: 700;
  line-height: 2;
  }
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateY(-200px);
  opacity: 0;
}
</style>
