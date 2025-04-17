<template>
  <div class="game-2048">
    <div class="game-header">
      <div class="score">Score: {{ score }}</div>
      <button @click="resetGame" class="reset-btn">New Game</button>
    </div>
    <div class="game-board" ref="gameBoard">
      <div v-for="(row, i) in board" :key="i" class="row">
        <div
          v-for="(cell, j) in row"
          :key="j"
          class="cell"
          :class="{ [`cell-${cell}`]: cell !== 0 }"
        >
          {{ cell !== 0 ? cell : '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const board = ref<number[][]>([]);
const score = ref(0);
const gameBoard = ref<HTMLElement | null>(null);

const initBoard = () => {
  board.value = Array(4).fill(0).map(() => Array(4).fill(0));
  addNewTile();
  addNewTile();
};

const addNewTile = () => {
  const emptyCells = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board.value[i][j] === 0) {
        emptyCells.push({ x: i, y: j });
      }
    }
  }
  if (emptyCells.length > 0) {
    const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board.value[x][y] = Math.random() < 0.9 ? 2 : 4;
  }
};

const moveLeft = () => {
  let moved = false;
  for (let i = 0; i < 4; i++) {
    const row = board.value[i].filter(cell => cell !== 0);
    for (let j = 0; j < row.length - 1; j++) {
      if (row[j] === row[j + 1]) {
        row[j] *= 2;
        score.value += row[j];
        row.splice(j + 1, 1);
        moved = true;
      }
    }
    const newRow = row.concat(Array(4 - row.length).fill(0));
    if (newRow.join(',') !== board.value[i].join(',')) {
      moved = true;
    }
    board.value[i] = newRow;
  }
  return moved;
};

const moveRight = () => {
  let moved = false;
  for (let i = 0; i < 4; i++) {
    const row = board.value[i].filter(cell => cell !== 0);
    for (let j = row.length - 1; j > 0; j--) {
      if (row[j] === row[j - 1]) {
        row[j] *= 2;
        score.value += row[j];
        row.splice(j - 1, 1);
        moved = true;
      }
    }
    const newRow = Array(4 - row.length).fill(0).concat(row);
    if (newRow.join(',') !== board.value[i].join(',')) {
      moved = true;
    }
    board.value[i] = newRow;
  }
  return moved;
};

const moveUp = () => {
  let moved = false;
  for (let j = 0; j < 4; j++) {
    let column = board.value.map(row => row[j]).filter(cell => cell !== 0);
    for (let i = 0; i < column.length - 1; i++) {
      if (column[i] === column[i + 1]) {
        column[i] *= 2;
        score.value += column[i];
        column.splice(i + 1, 1);
        moved = true;
      }
    }
    column = column.concat(Array(4 - column.length).fill(0));
    for (let i = 0; i < 4; i++) {
      if (board.value[i][j] !== column[i]) {
        moved = true;
      }
      board.value[i][j] = column[i];
    }
  }
  return moved;
};

const moveDown = () => {
  let moved = false;
  for (let j = 0; j < 4; j++) {
    let column = board.value.map(row => row[j]).filter(cell => cell !== 0);
    for (let i = column.length - 1; i > 0; i--) {
      if (column[i] === column[i - 1]) {
        column[i] *= 2;
        score.value += column[i];
        column.splice(i - 1, 1);
        moved = true;
      }
    }
    column = Array(4 - column.length).fill(0).concat(column);
    for (let i = 0; i < 4; i++) {
      if (board.value[i][j] !== column[i]) {
        moved = true;
      }
      board.value[i][j] = column[i];
    }
  }
  return moved;
};

const handleKeydown = (event: KeyboardEvent) => {
  let moved = false;
  switch (event.key) {
    case 'ArrowLeft':
      moved = moveLeft();
      break;
    case 'ArrowRight':
      moved = moveRight();
      break;
    case 'ArrowUp':
      moved = moveUp();
      break;
    case 'ArrowDown':
      moved = moveDown();
      break;
  }
  if (moved) {
    addNewTile();
  }
};

const resetGame = () => {
  score.value = 0;
  initBoard();
};

onMounted(() => {
  initBoard();
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped lang="less">
.game-2048 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #faf8ef;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .game-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    .score {
      font-size: 24px;
      font-weight: bold;
      color: #776e65;
    }

    .reset-btn {
      padding: 8px 16px;
      background: #8f7a66;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background: #7f6a56;
      }
    }
  }

  .game-board {
    background: #bbada0;
    padding: 10px;
    border-radius: 6px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    width: 400px;
    height: 400px;

    .row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .cell {
      background: rgba(238, 228, 218, 0.35);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      color: #776e65;
      aspect-ratio: 1;
      transition: all 0.15s ease;

      &.cell-2 { background: #eee4da; }
      &.cell-4 { background: #ede0c8; }
      &.cell-8 { background: #f2b179; color: white; }
      &.cell-16 { background: #f59563; color: white; }
      &.cell-32 { background: #f67c5f; color: white; }
      &.cell-64 { background: #f65e3b; color: white; }
      &.cell-128 { background: #edcf72; color: white; font-size: 20px; }
      &.cell-256 { background: #edcc61; color: white; font-size: 20px; }
      &.cell-512 { background: #edc850; color: white; font-size: 20px; }
      &.cell-1024 { background: #edc53f; color: white; font-size: 18px; }
      &.cell-2048 { background: #edc22e; color: white; font-size: 18px; }
    }
  }
}
</style> 