<template>
  <div class="container">
    <header>
      <Nav></Nav>
    </header>
    <main></main>
    <div class="mask">施工中(暂时没空){{ pointStr }}</div>
    <footer>
      <a href="https://beian.miit.gov.cn/" target="_blank">
        蒙ICP备2024018901号
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Nav from "./components/nav.vue";
import { ref } from "vue";
const pointStr = ref("");
setInterval(() => {
  pointStr.value = pointStr.value === "..." ? "" : pointStr.value + ".";
}, 700);
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background: #555;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00000077;
    color: #ddd;
    font-weight: bold;
    font-size: 17px;
    z-index: 100;
  }
  header {
    height: 48px;
    position: sticky;
    top: 0;
    left: 0;
    background: #33333333;
  }
  main {
    height: calc(100% - 80px);
  }
  footer {
    height: 32px;
    position: sticky;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #33333333;
    a {
      color: #ddd;
      text-decoration: none;
      font-size: 12px;
    }
  }
}
</style>
