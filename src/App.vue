<template>
  <div id="app">
    <div class="common-layout">
      <el-container>
        <el-main>
          <template v-if="isUserView"><router-view></router-view></template>
          <template v-else><BasicLayout /></template>
        </el-main>
        <el-footer>
          <GlobalFooter></GlobalFooter>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<style>
#app {
  background-color: #f8f8f8;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import GlobalFooter from "./components/GlobalFooter.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const isUserView = ref(false);
router.beforeEach((to, from, next) => {
  if (to.fullPath.startsWith("/user")) {
    isUserView.value = true;
  }
  next();
});

const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let tid: any;
  return function (...args: any[]) {
    const ctx = self;
    tid && clearTimeout(tid);
    tid = setTimeout(() => {
      callback.apply(ctx, args);
    }, delay);
  };
};

const _ = (window as any).ResizeObserver;
(window as any).ResizeObserver = class ResizeObserver extends _ {
  constructor(callback: (...args: any[]) => void) {
    callback = debounce(callback, 20);
    super(callback);
  }
};
</script>
