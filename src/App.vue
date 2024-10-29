<template>
  <div class="container">
    <header>
      <Nav></Nav>
    </header>
    <div class="mask">施工中{{ pointStr }}</div>
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
  background: #333;
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
  }
  header {
    position: sticky;
    top: 0;
    left: 0;
  }
}
</style>
