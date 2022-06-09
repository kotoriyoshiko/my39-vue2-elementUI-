<template>
  <div>
  <h1>i like cats<br>私は猫が好きです<br>我喜欢猫咪。</h1>
  <img class="bg-img" src="@/assets/intro.png">
  <div style="height: 1500px"></div>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style lang="scss" scoped>
.bg-img{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}

</style>
