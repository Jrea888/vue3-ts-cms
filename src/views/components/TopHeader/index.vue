<template>
    <div class="top-header">
        <div class="left">
            <div class="expand" @click="expandHandle">
                <el-icon :size="30" v-if="isExpand"><Fold /></el-icon>
                <el-icon :size="30" v-else><Expand /></el-icon>
            </div>
            <NavBreadcrumb :breadcrumbs="breadcrumbRoute" />
        </div>
        <div class="right">
            <UserInfo />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from '@/store'
import NavBreadcrumb from '@/base-ui/nav-breadcrumb/src/nav-breadcrumb.vue'
import {pathMapBreadcrumbList} from '@/utils/map-menus'
import UserInfo from './user-info.vue'

export default defineComponent({
    name: 'TopHeader',
    emits: ['expandChange'],
    computed: {},
    components: {NavBreadcrumb, UserInfo},
    setup(prop, {emit}) {
        const isExpand = ref(false)
        const store = useStore()
        const route = useRoute()

        const breadcrumbRoute = computed(() => {
            const userMenus = store.state.login.userMenus
            const currentPath = route.path
            return pathMapBreadcrumbList(userMenus, currentPath)
        })

        const expandHandle = () => {
            isExpand.value = !isExpand.value
            emit('expandChange', isExpand.value)
        }

        return {breadcrumbRoute, isExpand, expandHandle}
    }
})
</script>

<style scoped lang="less">
.top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .expand {
        cursor: pointer;
    }

    .left {
        display: flex;
        align-content: center;

        :deep(.el-breadcrumb) {
            line-height: 28px;
            margin-left: 16px;
        }
    }
}
</style>
