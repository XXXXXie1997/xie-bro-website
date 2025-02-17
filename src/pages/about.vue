<template>
  <div class="container" :style="style">
    <strong class="hello">{{ `${curTime}好，我小谢，简单说说我 🙋` }}</strong>
    <div>
      2015-2019年就读于天津农学院动物科学与动物医学学院，专业是设施畜牧业（养殖场规划设计一类的）
    </div>
    <br />
    <div>
      2021年初入行成为一名前端开发，至今已从业四年有余，基本是一直跟着公司步调走，少有时间实现自己的想法，现在看来也是有些可惜
    </div>
    <br />
    <div>希望2025能有一个新的开始，于是这个网站便诞生了</div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { style } from "../hooks/useTheme";

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
  font-size: 14px;
  .hello {
    display: block;
    margin-bottom: 36px;
  }
}
</style>
