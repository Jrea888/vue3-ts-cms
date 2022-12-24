<template>
  <div class="login-account">
    <el-form
      :rules="rules"
      :model="loginInfo"
      ref="loginFormRef"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginInfo.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginInfo.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

export default defineComponent({
  computed: {},
  components: {},
  setup() {
    const loginFormRef = ref<InstanceType<typeof ElForm>>()
    const rules = {
      name: [
        { required: true, message: '账号不能为空~', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '账号必须是5~10个字母或者数字~',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: '密码不能为空~', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{6,}$/,
          message: '密码必须是3位以上的字母或者数字~',
          trigger: 'blur'
        }
      ]
    }
    const loginInfo = reactive({
      name: '',
      password: ''
    })

    const formValidate = () => {
      loginFormRef.value?.validate((valid) => {
        if (valid) {
          console.log('验证通过')
        }
      })
    }

    return { rules, loginInfo, loginFormRef, formValidate }
  }
})
</script>

<style scoped lang="less">
.login-account {
}
</style>
