<template>
    <div class="user-info">
        <el-dropdown>
            <span class="el-dropdown-link">
                <img class="avatar" :src="avatarUrl" alt="" />
                <span class="username">{{ username }}</span>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-circle-close">退出登录</el-dropdown-item>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>系统管理</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from '@/store'
import avatarUrl from '@/assets/image/user-avatar.png'

export default defineComponent({
    setup() {
        const store = useStore()
        const username = store.state.login.userInfo.name

        return {avatarUrl, username}
    }
})
</script>

<style scoped lang="less">
.user-info {
    display: flex;
    align-items: center;

    .el-dropdown-link {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    .username {
        margin-left: 8px;
        font-size: 14px;
        font-weight: 700;
        color: #000;
    }
}
</style>
