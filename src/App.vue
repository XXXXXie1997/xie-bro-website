<template>
  <div class="container" :style="style">
    <Header></Header>
    <main>
      <RouterView />
    </main>
    <!-- <div class="mask">还在施工中{{ pointStr }}</div> -->

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import { ref } from "vue";
import { RouterView } from "vue-router";
import { style } from "./hooks/useTheme";

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

  main {
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
}
</style>
