<template>
  <div>
    <el-container>
      <el-header><GlobalHeader></GlobalHeader></el-header>
      <el-main
        ><div class="basicContent"><RouterView></RouterView></div
      ></el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import { useUserStore } from "@/store";
const userStore = useUserStore();
userStore.getLoginUser();
</script>

<style scoped lang="scss">
.basicContent {
  min-height: 90vh;
}
</style>
