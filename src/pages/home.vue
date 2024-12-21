<template>
  <div class="container">
    <strong class="hello">{{
      `${curTime}好，我小谢，简单介绍一下自己 🙋`
    }}</strong>
    <div>不过要怎么介绍还在想...</div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const curTime = computed(() => {
  if (new Date().getHours() > 6 && new Date().getHours() < 9) {
    return "早上";
  } else if (new Date().getHours() >= 9 && new Date().getHours() < 12) {
    return "上午";
  } else if (new Date().getHours() >= 12 && new Date().getHours() < 14) {
    return "中午";
  } else if (new Date().getHours() >= 14 && new Date().getHours() <= 18) {
    return "下午";
  } else {
    return "晚上";
  }
});
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 48px;
  color: #ccc;
  font-size: 14px;
  .hello {
    display: block;
    margin-bottom: 36px;
  }
}
</style>
