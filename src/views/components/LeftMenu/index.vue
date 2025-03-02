<template>
    <div class="left-menu">
        <div class="left-top">
            <img src="~@/assets/image/nav-logo.jpg" alt="logo" />
            <span v-if="!collapse">Vue3+TS</span>
        </div>
        <!-- <el-collapse-transition> -->
        <el-menu
            :collapse="collapse"
            default-active="2"
            text-color="#b7bdc3"
            background-color="#0c2135"
            active-text-color="#0a60bd"
            class="el-menu-vertical"
        >
            <!-- <template v-for="(item, index) in userMenus">
                二级菜单
                <template v-if="item.type === 1">
                    <el-sub-menu :index="item.id + ''" :key="item.id">
                        <template #title>
                            <el-icon v-if="index === 0"><Monitor /></el-icon>
                            <el-icon v-if="index === 1"><Setting /></el-icon>
                            <el-icon v-if="index === 2"><Goods /></el-icon>
                            <el-icon v-if="index === 3"><ChatLineRound /></el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <template v-for="subItem in item.children">
                            <el-menu-item :index="subItem.id + ''" :key="subItem.id">
                                {{ subItem.name }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>

                一级菜单
                <template v-if="item.type === 2">
                    <el-menu-item :index="item.id + ''" :key="item.id + ''">
                        <el-icon><document /></el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </template> -->
        </el-menu>
        <!-- </el-collapse-transition> -->
    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useStore} from '@/store'

export default defineComponent({
    name: 'LeftMenu',
    props: {
        collapse: {type: Boolean, default: false}
    },
    computed: {},
    components: {},
    setup() {
        const store = useStore()
        const userMenus = computed(() => store.state.login.userMenus)
        return {userMenus}
    }
})
</script>

<style scoped lang="less">
.left-menu {
    height: 100%;
    background-color: #001529;

    .left-top {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 48px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
            padding: 4px;
            margin-left: 10px;
        }

        span {
            color: #fff;
            font-size: 20px;
            font-weight: bolder;
        }
    }
    .el-menu {
        border-right: none;
    }

    // 目录
    :deep(.el-sub-menu) {
        background-color: #001529 !important;
        // 二级菜单 ( 默认背景 )
        .el-menu-item {
            padding-left: 50px !important;
            background-color: #0c2135 !important;
        }
    }

    :deep(.el-sub-menu__title) {
        background-color: #001529 !important;
    }

    :deep(.el-menu-item) {
        background-color: #001529 !important;

        // hover 高亮
        &:hover {
            color: #fff !important; // 菜单
        }
    }

    :deep(.el-menu-item.is-active) {
        color: #fff !important;
        background-color: #0a60bd !important;
    }
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
    background-color: #001529 !important;
}
</style>
