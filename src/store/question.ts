import { defineStore } from "pinia";
import { QuestionControllerService } from "../../generated";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import router from "@/router";
// 用户模块
export const useQuestionStore = defineStore(
  "question",
  () => {
    const getQuestionList = async () => {
      // await QuestionControllerService.getQuestionVoPage();
    };
    return {};
  },
  {
    persist: true, // 持久化
  }
);
