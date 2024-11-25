<template>
  <div class="footer">
    <div class="content">
      <div class="right">©2024 · Xie Tianyu</div>
      <a href="https://beian.miit.gov.cn/" target="_blank">
        蒙ICP备2024018901号
      </a>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  height: 32px;
  width: 100%;
  background: #181818;

  .content {
    height: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    .right {
      color: #ddd;
      font-size: 12px;
    }
    a {
      color: #ddd;
      text-decoration: none;
      font-size: 12px;
    }
  }
}
</style>
