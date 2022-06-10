<template>
<div class="main-container">
  <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
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
  }
}
</script>

<style lang="scss" scoped>
.main-container{
  //border: 1px solid pink;
  width: 80vw;
  margin: 100px auto auto;
  position: relative;
  }
@media only screen and (max-width: 500px) {
  .main-container{
    margin-top: 0;
  }
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
