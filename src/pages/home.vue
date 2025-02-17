<template>
  <div class="container" :style="style">
    <strong class="hello">首页还没想好要放什么，总之先祝你开心 🎉</strong>
  </div>
</template>
<script lang="ts" setup>
import { style } from "../hooks/useTheme";
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
