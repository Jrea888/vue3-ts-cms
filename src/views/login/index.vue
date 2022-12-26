<template>
  <div class="login">
    <h1>后台管理系统</h1>
    <div class="content">
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <el-icon :size="14" class="md"><UserFilled /></el-icon>
            <span class="space md">账号登录</span>
          </template>

          <LoginAccount ref="loginAccountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
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
    const currentTab = ref('account')
    const isRememberPass = ref(true)
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()

    const loginHandle = () => {
      if (currentTab.value === 'account') {
        loginAccountRef.value?.formValidate(isRememberPass.value)
      }
      if (currentTab.value === 'phone') {
        console.log('手机验证登录')
      }
    }

    const checkBoxChange = (visible: boolean) => {
      isRememberPass.value = visible
    }

    return {
      currentTab,
      isRememberPass,
      loginAccountRef,
      loginHandle,
      checkBoxChange
    }
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
