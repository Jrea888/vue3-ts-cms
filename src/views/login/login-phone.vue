<template>
    <div class="login-phone">
        <el-form :model="infoPhone" ref="phoneFormRef" label-width="60px">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="infoPhone.phone" />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <div class="bottom">
                    <el-input v-model="infoPhone.code" />
                    <el-button type="primary" class="code-btn">获取验证码</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'

export default defineComponent({
    computed: {},
    components: {},
    setup() {
        const infoPhone = reactive({phone: '', code: ''})

        return {infoPhone}
    }
})
</script>

<style scoped lang="less">
.login-phone {
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .code-btn {
        margin-left: 5px;
    }
}
</style>
