<template>
  <div>
    <div class="cat">
      <h1>i like my cats！<br>私は猫が好きです♥<br>我喜欢我的猫咪。</h1>
    </div>
    <img class="bg-img" src="@/assets/intro.png">
    <div class="cat-info">
      <div class="cat-text">
        <h1>i like my cats！</h1>
        <span>Copywriting to be finalized.</span>
      </div>
      <div class="cat-text">
        <h1>私は猫が好きです♥</h1>
        <span>コピーライターは未定です.</span>
      </div>
      <div class="cat-text">
        <h1>我喜欢我的猫咪。</h1>
        <span>文案待定。</span>
      </div>
    </div>
    <div style="height:450px">
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style lang="scss" scoped>
.cat{
  font-size: 4.2vw;
  font-weight: 700;
  line-height: 2;
  padding-bottom: 100px;
}
.bg-img{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
.cat-info{
  //border: 1px solid pink;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .cat-text{
    //border: 1px solid forestgreen;
    width: 30%;
    height: 250px;
    h1{
      font-size: 2vw;
      padding-bottom: 30px;
    }
    h1:hover{
      color: #1a3aff;
    }
    span{
      font-size: 1.5vw;
    }
  }
  @media only screen and (max-width: 500px) {
    .cat-text{
      min-width: 50%;
      margin-top: 0;
    }
  }
}
.my-cat{
  h1{
    font-size: 4.2vw;
    font-weight: 700;
    line-height: 2;
    padding-top: 100px;
  }
}

</style>
