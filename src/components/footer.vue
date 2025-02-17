<template>
  <div class="footer" :style="style">
    <div class="content">
      <div class="right">©2024 · Xie Tianyu</div>
      <a :style="style" href="https://beian.miit.gov.cn/" target="_blank">
        蒙ICP备2024018901号
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { style } from "../hooks/useTheme";
</script>
<style lang="less" scoped>
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  height: 32px;
  width: 100%;
  border-top: 1px solid #ddd;

  .content {
    height: 100%;
    max-width: 960px;
    padding: 0 24px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    .right {
      font-size: 12px;
    }
    a {
      text-decoration: none;
      font-size: 12px;
    }
  }
}
</style>
