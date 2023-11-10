import { defineStore } from "pinia";
import {
  UserControllerService,
  User,
  UserRegisterRequest,
} from "../../generated";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import router from "@/router";
// 用户模块
export const useUserStore = defineStore(
  "user",
  () => {
    const loginUser = ref({} as User); // 定义 token
    const getLoginUser = async () => {
      const res = await UserControllerService.getLoginUserUsingGet();
      console.log(res);
      loginUser.value = res.data as User;
    };
    const userLogin = async (data: User) => {
      const res = await UserControllerService.userLoginUsingPost(data);
      console.log(res);
      if (res.code === 0) {
        router.push("/");
      }
    };
    const userRegister = async (data: UserRegisterRequest) => {
      const res = await UserControllerService.userRegisterUsingPost(data);
      if (res.code !== 0) {
        ElMessage.error("注册失败");
      } else {
        ElMessage.success("注册成功");
      }
    };
    const logout = async () => {
      await UserControllerService.userLogoutUsingPost();
    };
    return { loginUser, getLoginUser, userLogin, logout, userRegister };
  },
  {
    persist: true, // 持久化
  }
);
