<template>
  <div class="login">
    <h1>后台管理系统</h1>
    <div class="content">
      <!-- 切换 -->
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <el-icon :size="14" class="md"><UserFilled /></el-icon>
            <span class="space md">账号登录</span>
          </template>

          <LoginAccount ref="loginAccountRef" />
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <el-icon :size="14" class="md"><Iphone /></el-icon>
            <span class="space md">手机登录</span>
          </template>

          <LoginPhone />
        </el-tab-pane>
      </el-tabs>

      <div class="middle">
        <el-checkbox
          size="large"
          label="记住密码"
          v-model="isRememberPass"
          @change="checkBoxChange"
        />
        <span>忘记密码</span>
      </div>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        size="large"
        class="login-button"
        @click="loginHandle"
      >
        登录
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const isRememberPass = ref(true)
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()

    const loginHandle = () => {
      loginAccountRef.value?.formValidate()
    }

    const checkBoxChange = (visible: boolean) => {
      console.log(visible)
    }

    return { isRememberPass, loginHandle, checkBoxChange, loginAccountRef }
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/image/login-bg.svg');

  .content {
    width: 320px;

    .space {
      margin-left: 5px;
    }

    .md {
      vertical-align: middle;
    }
  }

  .login-button {
    width: 100%;
  }

  .middle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      cursor: pointer;
      color: var(--el-color-primary);
    }
  }
}
</style>
