<template>
  <div class="title">
    <h3 v-if="!isRegister">用户登录</h3>
    <h3 v-else>用户注册</h3>
    <div class="btn" style="margin-left: 150px">
      <el-button
        @click="isRegister = !isRegister"
        v-if="!isRegister"
        type="success"
        plain
        >注册</el-button
      >
      <el-button @click="isRegister = !isRegister" v-else type="success" plain
        >登录</el-button
      >
    </div>
  </div>

  <el-main class="center-form">
    <div>
      <el-form
        v-if="!isRegister"
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        label-position="top"
        size="large"
      >
        <el-form-item label="用户名" prop="userAccount">
          <el-input style="width: 400px" v-model="form.userAccount" />
        </el-form-item>
        <el-form-item label="密码" prop="userPassword">
          <el-input
            style="width: 400px"
            type="password"
            show-password="true"
            v-model="form.userPassword"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
      <el-form
        v-else
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        label-position="top"
        size="large"
      >
        <el-form-item label="用户名" prop="userAccount">
          <el-input style="width: 400px" v-model="form.userAccount" />
        </el-form-item>
        <el-form-item label="密码" prop="userPassword">
          <el-input
            style="width: 400px"
            type="password"
            show-password="true"
            v-model="form.userPassword"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input
            style="width: 400px"
            type="password"
            show-password="true"
            v-model="form.checkPassword"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onRegister">注册</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-main>
</template>
<script setup lang="ts">
import { useUserStore } from "@/store";
import { UserRegisterRequest } from "generated";
import { ref, watch } from "vue";
const userStore = useUserStore();
// userStore.getLoginUser();
const form = ref<UserRegisterRequest>({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
});
const formRef = ref();
// 登录
const onSubmit = async () => {
  formRef.value.validate();
  await userStore.userLogin(form.value);
  console.log(form.value);
};
//注册
const isRegister = ref(false);
//当isRegister变化时，重置表单
watch(isRegister, () => {
  reset();
});
const onRegister = async () => {
  await userStore.userRegister(form.value);
  isRegister.value = false;
};

// 重置
const reset = () => {
  form.value = {
    userAccount: "",
    userPassword: "",
    checkPassword: "",
  };
};

const checkPwd = () => {
  return form.value.userPassword === form.value.checkPassword;
};
//校验
const rules = ref({
  userAccount: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 5, max: 10, message: "长度需要在5到10位", trigger: "blur" },
  ],
  userPassword: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 8, max: 16, message: "长度需要在8到16位", trigger: "blur" },
  ],
  checkPassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    { validator: checkPwd, message: "两次输入密码不一致", trigger: "blur" },
  ],
});
</script>
<style scoped lang="scss">
.center-form {
  display: flex;
  justify-content: center; /* 在水平方向上居中 */
  background-color: #eff3f5;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center; /* 在垂直方向上居中 */
}
</style>
