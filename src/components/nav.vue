<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="title">XieBro</div>
  </div>
</template>
<style lang="less" scoped>
.header {
  position: relative;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;

  .logo {
    height: 48px;
    width: 48px;
    padding-left: 12px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .title {
    color: #ddd;
    padding-left: 8px;
    height: 32px;
    line-height: 32px;
  }
}
.header::after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  filter: blur(3);
}
</style>
