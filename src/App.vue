<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {

  transition: all 0.5s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateY(-200px);
  opacity: 0;
}
</style>
