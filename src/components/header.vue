<template>
  <div class="header" :style="style">
    <div class="content">
      <div class="logo">
        <img
          v-if="mainTheme === 'bright'"
          src="../assets/logo-bright.svg"
          alt=""
        />
        <img v-else src="../assets/logo-dark.svg" alt="" />
        <div class="title">XieBro</div>
      </div>
      <div class="menu">
        <RouterLink :style="style" to="/">首页</RouterLink>
        <RouterLink :style="style" to="/cv">简历</RouterLink>
        <RouterLink :style="style" to="/game2048">来一局2048</RouterLink>
      </div>
      <div class="extra">
        <img
          v-if="mainTheme === 'bright'"
          src="../assets/dark.svg"
          @click="changeTheme"
        />
        <img
          v-if="mainTheme === 'dark'"
          src="../assets/bright.svg"
          @click="changeTheme"
        />

        <img
          v-if="mainTheme === 'bright'"
          src="../assets/juejin-bright.svg"
          alt="github"
          @click="gotoJuejin"
        />
        <img
          v-if="mainTheme === 'dark'"
          src="../assets/juejin-dark.svg"
          alt="github"
          @click="gotoJuejin"
        />

        <img
          v-if="mainTheme === 'bright'"
          src="../assets/github-bright.svg"
          alt="github"
          @click="gotoGitHub"
        />
        <img
          v-if="mainTheme === 'dark'"
          src="../assets/github-dark.svg"
          alt="github"
          @click="gotoGitHub"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { mainTheme, style, changeTheme } from "../hooks/useTheme";

function gotoGitHub() {
  window.open("https://github.com/XXXXXie1997");
}
function gotoJuejin() {
  window.open("https://juejin.cn/user/958429872790680");
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid #ddd;
  height: 40px;

  .content {
    height: 100%;
    max-width: 960px;
    padding: 0 24px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .logo {
      user-select: none;
      height: 100%;
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
        font-weight: bold;
      }
    }
    .menu {
      flex-shrink: 1;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      z-index: 10;
      a {
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
      }
    }
    .extra {
      flex-shrink: 0;
      display: flex;
      height: 100%;
      gap: 16px;
      justify-content: center;
      align-items: center;
      z-index: 10;

      img {
        cursor: pointer;
        object-fit: contain;
        height: 24px;
        width: 24px;
      }
    }
  }
}
@media (max-width: 500px) {
  .header {
    .content {
      padding: 0 8px;
      .menu {
        justify-content: space-around;
        gap: 0;
      }
    }
  }
}
</style>
