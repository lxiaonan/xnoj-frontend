<template>
  <div class="about">
    <div>
      <span style="color: #2887f3">编程题</span>
    </div>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar height="600px">
          <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
            {{ item }}
          </p>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-table :data="questionList" style="width: 100%">
          <el-table-column prop="id" label="标号" width="180" />
          <el-table-column prop="title" label="标题" width="380" />
          <el-table-column prop="passRate" label="提交通过率" />
          <el-table-column prop="tags" label="标签" width="180" />
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { QuestionVO } from "../../generated";
const questionList = ref<QuestionVO>();
</script>
<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 50px;
  margin: 10px;
  text-align: left;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
