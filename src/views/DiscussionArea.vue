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
        <el-main>
          <div>
            <CodeEditor
              :value="codeValue"
              :handle-change="onCodeChange"
            ></CodeEditor>
            <MdEditor :value="mdValue" :handle-change="onMdChange"></MdEditor>
          </div>
        </el-main>
      </el-container>
    </div>
    <a-layout> </a-layout>
  </div>
</template>

<script setup lang="ts">
import CodeEditor from "@/components/CodeEditor.vue";
import MdEditor from "@/components/MdEditor.vue";
import { useUserStore } from "@/store";
import { ref } from "vue";

const userStore = useUserStore();
userStore.getLoginUser();

const mdValue = ref("");
const onMdChange = (v: string) => {
  mdValue.value = v;
};
const codeValue = ref("");
const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>

<style scoped lang="scss">
.logo {
  img {
    width: 38px;
    height: 38px;
    margin-right: 15px;
  }
  display: flex;
  align-items: center;
}

.content {
  min-height: 100vh;
}
</style>
