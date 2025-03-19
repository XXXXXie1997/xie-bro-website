<template>
  <div class="container">
    <strong class="hello">{{ `${curTime}好，我小谢 🙋` }}</strong>
    <div>首页的内容、样式和排版还在设计中，还请不要嫌弃🙇</div>
    <br />

    <strong class="hello">简单说说我</strong>
    <div>
      我是一名拥有4年+开发经验的前端工程师，专注于企业级中后台系统与移动端应用的开发。技术栈以Vue生态为核心，熟练掌握Vue2/Vue3，能够高效完成复杂组件封装与性能优化。擅长通过TypeScript增强代码健壮性。
    </div>
    <br />
    <div>
      在多个项目中实践Uniapp跨端开发，并参与过移动端APP、微信小程序从需求分析到上线的全流程开发。
    </div>
    <br />
    <div>
      对数据可视化也有一定经验，基于ECharts开发过动态数据看板，利用AntV/S2封装交叉分析表格组件，通过AntV/X6实现ER关系图的展示交互，以及开发业务/审批流程画布等。
    </div>
    <br />
    <div></div>
    <br />

    <div>
      四年来少有时间做自己想做的东西，希望2025能有一个新的开始，同时也希望你开心🎉
    </div>
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
  font-size: 14px;
  .hello {
    display: block;
    margin-bottom: 36px;
  }
  div {
    line-height: 2em;
  }
}
</style>
