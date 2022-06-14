<template>
<div class="menu">
  <div class="nav-container">
    <div class="nav1 nav">
      <p>Home</p>
      <p>Work</p>
      <P>Services</P>
      <p>Company</p>
      <p>Careers</p>
    </div>
    <div class="nav2 nav">
      <p>Brand</p>
      <p>Culture</p>
      <p>Events</p>
      <p>Learn</p>
      <p>Press</p>
      <p>Branches</p>
      <p>Blog</p>
    </div>
    <div class="nav3 nav">
      <div>
        <h1>Academy</h1>
        <p>Learning paths in design, business, development and technology.</p>
      </div>
      <div>
        <h1>Labs</h1>
        <p>Get a closer look into what’s cooking inside Baianat.</p>
      </div>
      <div>
        <h1>Resources</h1>
        <p>From Icons to UI mockups, explore and download whatever you need.</p>
      </div>
    </div>
    <div class="nav4 nav">
      <div class="help">
        <h1>Help?</h1>
        <p>care</p>
        <p>ordering</p>
        <p>Feedback</p>
        <p>Contact</p>
      </div>
      <div class="email">
        <h2>Email</h2>
        <p>kotoriyoshiko@outlook.com</p>
      </div>
      <div class="phone">
        <h2>Phone</h2>
        <p>13322173473</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "menu"
}
</script>

<style lang="scss" scoped>
.menu{
  background: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-container{
    //border: 1px solid pink;
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    .nav{
      //border: 1px solid blue;
      width: 25%;
      height: 500px;
    }
    .nav1{
      font-weight: 700;
      color: white;
      font-size: 300%;
      line-height: 1.6;
    }
    .nav2{
      font-weight: 600;
      color: white;
      font-size: 250%;
      line-height: 1.8;
      padding-left: 30px;
    }
    .nav3{
      color: white;
      h1{
        font-size: 250%;
      }
      p{
        padding-top: 10px;
        padding-bottom: 50px;
        font-size: 120%
      }
      padding-left: 30px;
    }
    .nav4{
      color: white;
      padding-left: 50px;
      h1{
        font-weight: 700;
        font-size: 300%;
      }
      p{
        line-height: 2.5;
        font-size: 120%;
      }
      .email{
        margin-top: 30px;
      }
      .phone{
        margin-top: 30px;
      }
    }
  }
}
</style>
