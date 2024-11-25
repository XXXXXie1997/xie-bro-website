<template>
  <div class="header">
    <div class="content">
      <div class="logo">
        <img src="../assets/logo.svg" alt="" />
        <div class="title">XieBro</div>
      </div>
      <div class="menu">
        <!-- <div class="item">
          <a to="/">Home</a>
        </div>
        <div class="item">
          <a to="/about">About</a>
        </div> -->
      </div>
      <div class="extra">
        <img src="../assets/github.svg" alt="" @click="gotoGitHub" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
function gotoGitHub() {
  window.open("https://github.com/XXXXXie1997");
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  background: #181818;
  .content {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logo {
      height: 36px;
      width: 100px;
      display: flex;
      justify-content: center;
      gap: 2px;
      align-items: center;
      img {
        height: 24px;
        width: 24px;
      }
      .title {
        color: #ddd;
        font-weight: bold;
      }
    }
    .menu {
      display: flex;
      .item {
        color: #ccc;
      }
    }
    .extra {
      img {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
