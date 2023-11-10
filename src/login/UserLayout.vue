<template>
  <div class="layout">
    <div class="common-layout">
      <el-container>
        <el-header
          ><div class="logo">
            <img src="@/assets/logo2.png" />
            <span>CodeReviewMaster</span>
          </div></el-header
        >
        <RouterView></RouterView>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.common-layout {
  height: 88vh; /* 设置高度，让内容垂直居中 */
  .logo {
    background-color: #ffffff;
    img {
      width: 38px;
      height: 38px;
      margin-right: 15px;
    }
    display: flex;
    align-items: center;
  }
}
</style>
