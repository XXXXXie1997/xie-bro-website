<template>
  <div class="main-container" :style="mainStyle">
    <Header></Header>
    <main>
      <RouterView />
    </main>
    <!-- <div class="mask">还在施工中{{ pointStr }}</div> -->

    <Footer></Footer>

    <svg v-show="mainTheme === 'dark'" id="sky">
      <circle
        v-for="(_, index) in num"
        :key="index"
        :cx="getRandomX()"
        :cy="getRandomY()"
        :r="randomRadius()"
        stroke="none"
        stroke-width="0"
        fill="white"
        class="star"
      />
    </svg>
    <div v-show="mainTheme === 'dark'" id="shootingstars">
      <div
        v-for="(_, index) in 60"
        :key="index"
        class="wish"
        :style="{
          left: `${getRandomY()}px`,
          top: `${getRandomX()}px`,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import { RouterView } from "vue-router";
import { mainStyle, mainTheme } from "./hooks/useTheme";

import { ref, onMounted } from "vue";
import anime from "animejs";

// 响应式数据
const num = ref(60);
const vw = ref(
  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
);
const vh = ref(
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
);

// 方法
const randomRadius = () => Math.random() * 0.7 + 0.6;
const getRandomX = () => Math.floor(Math.random() * vw.value);
const getRandomY = () => Math.floor(Math.random() * vh.value);

const starryNight = () => {
  anime({
    targets: "#sky .star",
    opacity: [
      { duration: 700, value: "0" },
      { duration: 700, value: "1" },
    ],
    easing: "linear",
    loop: true,
    delay: (el, i) => 50 * i,
  });
};

const shootingStars = () => {
  anime({
    targets: "#shootingstars .wish",
    easing: "linear",
    loop: true,
    delay: (el, i) => 1000 * i,
    opacity: [{ duration: 700, value: "1" }],
    width: [{ value: "150px" }, { value: "0px" }],
    translateX: 350,
  });
};

// 生命周期
onMounted(() => {
  starryNight();
  shootingStars();
});

const pointStr = ref("");
setInterval(() => {
  pointStr.value = pointStr.value === "..." ? "" : pointStr.value + ".";
}, 700);
</script>

<style scoped lang="less">
.main-container {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  z-index: 3;
  main {
    height: calc(100% - 72px);
    overflow-y: scroll;
    position: relative;
    z-index: 10;
  }
  #sky {
    width: 100%;
    height: calc(100% - 72px);
    position: absolute;
    overflow: hidden;
    margin: 0;
    padding: 0;
    top: 40px;
    z-index: 1;
  }
  #shootingstars {
    margin: 0;
    padding: 0;
    width: 150vh;
    height: 200vh;
    position: absolute;
    top: 0;
    overflow: hidden;
    transform: translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%))
      rotate(108deg);
    z-index: 2;
    .wish {
      height: 2px;
      top: 300px;
      width: 100px;
      margin: 0;
      opacity: 0;
      padding: 0;
      background-color: white;
      position: absolute;
      background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));
      filter: drop-shadow(0 0 6px white);
      overflow: hidden;
    }
  }
}
</style>
