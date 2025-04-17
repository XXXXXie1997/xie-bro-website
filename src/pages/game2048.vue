<template>
  <div class="game-page">
    <h1>2048 Game</h1>
    <Game2048 />
  </div>
</template>

<script setup lang="ts">
import Game2048 from "../extra/Game2048.vue";
</script>

<style lang="less" scoped>
.game-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  
  h1 {
    margin-bottom: 24px;
    color: #776e65;
  }
}
</style> 