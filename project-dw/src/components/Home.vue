<template>
  <div class="home-all">
    <div class="home-bg"></div>
    <div class="home-btn">
      <router-link  to="/sign">
        <div class="home-btn-set">
          党员信息填写
        </div>
      </router-link>
      <router-link  to="/manage">
      <div class="home-btn-set">
        后台管理
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-all {
    width: 100%;
    height: 100%;
  }
  .home-bg {
    width: 100%;
    height: 100%;
    background-color: rgb(211, 117, 117);
    position: relative;
  }
  .home-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .home-btn a {
    text-decoration: none;
  }
  .home-btn-set {
    width: 10vw;
    height: 10vh;
    background-color: rgb(235, 255, 122);
    display: inline-block;
    border-radius: 10px;
    margin: 3vw;
    line-height: 10vh;
    text-align: center;
    color: rgb(7, 7, 7);
    font-size: 1vw;
  }
  .home-btn-set:hover {
    background-color: aquamarine;
  }


</style>
