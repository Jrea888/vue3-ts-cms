<template>
    <div class="left-menu">
        <div class="left-top">
            <img src="~@/assets/image/nav-logo.jpg" alt="logo" />
            <span v-if="!collapse">Vue3+TS</span>
        </div>

        <el-menu
            :collapse="collapse"
            :default-active="defaultActive"
            text-color="#b7bdc3"
            class="el-menu-vertical"
            background-color="#0c2135"
            active-text-color="#0a60bd"
        >
            <template v-for="(item, index) in userMenus" :key="index">
                <!-- 二级菜单 -->
                <template v-if="item.type === 1">
                    <el-sub-menu :index="item.id + ''" :key="item.id">
                        <template #title>
                            <el-icon :size="18" v-if="index === 0"><Monitor /></el-icon>
                            <el-icon :size="18" v-if="index === 1"><Setting /></el-icon>
                            <el-icon :size="18" v-if="index === 2"><Goods /></el-icon>
                            <el-icon :size="18" v-if="index === 3"><ChatLineRound /></el-icon>
                            <span class="title">{{ item.name }}</span>
                        </template>
                        <template v-for="subItem in item.children" :key="subItem.id">
                            <el-menu-item :index="subItem.id + ''" @click="subMenuToPageHandle(subItem)">
                                {{ subItem.name }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>

                <!-- 一级菜单 -->
                <template v-if="item.type === 2">
                    <el-menu-item :index="item.id + ''" :key="item.id + ''">
                        <el-icon><document /></el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from '@/store'
import {ChildrenInfo} from '@/model'
import {pathToMenuItem} from '@/utils/map-menus'

export default defineComponent({
    name: 'LeftMenu',
    props: {
        collapse: {
            type: Boolean,
            default: false
        }
    },
    computed: {},
    components: {},
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const userMenus = computed(() => store.state.login.userMenus)

        const defaultActive = ref<string>('')

        const subMenuToPageHandle = (item: ChildrenInfo) => {
            console.log(item.id)
            router.push({
                path: item.url ?? '/not-found'
            })
        }

        const currentMenu = pathToMenuItem(userMenus.value, route.path)
        console.log(currentMenu)
        defaultActive.value = currentMenu?.id + ''

        return {
            userMenus,
            defaultActive,
            subMenuToPageHandle
        }
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

    .title {
        font-size: 14px;
        color: #fff;
        margin-left: 10px;
    }

    :deep(.el-icon) {
        margin-top: -6px;
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
