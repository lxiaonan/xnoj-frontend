<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20"
        ><div class="grid-content ep-bg-purple" />
        <div class="headerLeft">
          <div class="logo">
            <img src="@/assets/logo2.png" />
            <span>CodeReviewMaster</span>
          </div>
          <el-menu
            :default-active="$route.path"
            background-color="#f8f8f8"
            mode="horizontal"
            router
          >
            <el-menu-item
              :index="item.path"
              v-for="item in visibleRoutes"
              :key="item.path"
              @click="toUrl(item.path)"
              >{{ item.name }}</el-menu-item
            >
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4"
        ><div class="grid-content ep-bg-purple" />
        <div class="user" style="color: #1c80f2">
          {{
            userStore.loginUser?.userName
              ? userStore.loginUser.userName
              : "未登录"
          }}
          <el-button
            type="success"
            v-if="!userStore.loginUser?.userName"
            @click="login"
            style="margin-left: 20px"
            >登录/注册</el-button
          >
          <el-button
            type="danger"
            v-else
            @click="logout"
            style="margin-left: 20px"
            >退出</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { computed } from "vue";
import { routes } from "@/router/routes";
import { useUserStore } from "@/store";
const userStore = useUserStore();
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu === true) {
      return false;
    }
    //如果是管理员页面，并且你不是管理员
    if (
      item.meta?.isAdmin === true &&
      userStore.loginUser?.userRole !== "admin"
    ) {
      return false;
    }
    return true;
  });
});
const toUrl = (url: string) => {
  router.push(url);
};
const login = () => {
  router.push("/user/login");
};
const logout = async () => {
  await userStore.logout();
  await userStore.getLoginUser();
};
</script>

<style scoped lang="scss">
.headerLeft {
  display: flex;
  align-items: center;
  .logo {
    img {
      width: 38px;
      height: 38px;
      margin-right: 15px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
  }
}

.user {
  margin-top: 18px;
}
</style>
