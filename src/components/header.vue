<template>
  <div class="header">
    <div class="content">
      <div class="logo">
        <img src="../assets/logo.svg" alt="" />
        <div class="title">XieBro</div>
      </div>
      <div class="menu">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
      </div>
      <div class="extra">
        <img src="../assets/github.svg" alt="github" @click="gotoGitHub" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";

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
    padding: 0 24px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logo {
      user-select: none;
      height: 36px;
      width: 100px;
      display: flex;
      justify-content: center;
      gap: 2px;
      align-items: center;
      flex-shrink: 0;
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
      flex-shrink: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      a {
        color: #ccc;
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
      }
    }
    .extra {
      flex-shrink: 0;
      img {
        cursor: pointer;
        object-fit: contain;
        height: 24px;
        width: 24px;
      }
    }
  }
}
</style>
