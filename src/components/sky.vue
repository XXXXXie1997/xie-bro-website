<template>
  <div id="sky-container">
    
  </div>
</template>

<script setup>
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
</script>

<style scoped>

</style>
