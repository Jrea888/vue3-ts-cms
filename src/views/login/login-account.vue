<template>
    <div class="login-account">
        <el-form :rules="rules" :model="loginInfo" ref="loginFormRef" label-width="60px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="loginInfo.name" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginInfo.password" show-password placeholder="请输入密码" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {useStore} from 'vuex'
import {ElForm} from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
    computed: {},
    components: {},
    setup() {
        const store = useStore()
        const loginFormRef = ref<InstanceType<typeof ElForm>>()
        const rules = {
            name: [
                {required: true, message: '账号不能为空~', trigger: 'blur'},
                {
                    pattern: /^[a-z0-9]{5,10}$/,
                    message: '账号必须是5~10个字母或者数字~',
                    trigger: 'blur'
                }
            ],
            password: [
                {required: true, message: '密码不能为空~', trigger: 'blur'},
                {
                    pattern: /^[a-z0-9]{6,}$/,
                    message: '密码必须是6位以上的字母或者数字~',
                    trigger: 'blur'
                }
            ]
        }
        const loginInfo = reactive({
            name: localCache.getCache('username') ?? '',
            password: localCache.getCache('password') ?? ''
        })

        const formValidate = (isRememberPass: boolean) => {
            loginFormRef.value?.validate(valid => {
                if (valid) {
                    // 1. 判断是否需要记住密码
                    if (isRememberPass) {
                        localCache.setCache('username', loginInfo.name)
                        localCache.setCache('password', loginInfo.password)
                    } else {
                        localCache.deleteCache('username')
                        localCache.deleteCache('password')
                    }

                    // 2.开始登录验证
                    store.dispatch('login/accountLogin', {...loginInfo})
                }
            })
        }

        return {rules, loginInfo, loginFormRef, formValidate}
    }
})
</script>
