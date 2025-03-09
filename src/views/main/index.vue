<template>
    <div class="main-view">
        <el-container class="main-content">
            <el-aside :width="isCollapse ? '60px' : '210px'">
                <LeftMenu :collapse="isCollapse" />
            </el-aside>
            <el-container>
                <el-header class="page-header">
                    <TopHeader @expandChange="expandChangeHandle" />
                </el-header>
                <el-main class="page-content">
                    <div class="page-info">
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import LeftMenu from '@/views/components/LeftMenu'
import TopHeader from '@/views/components/TopHeader'

export default defineComponent({
    computed: {},
    components: {LeftMenu, TopHeader},
    setup() {
        const isCollapse = ref(false)
        const expandChangeHandle = (isExpand: boolean) => {
            isCollapse.value = isExpand
        }

        return {isCollapse, expandChangeHandle}
    }
})
</script>

<style scoped lang="less">
.main-view {
    width: 100%;
    height: 100%;

    .main-content {
        height: 100%;

        .el-aside {
            overflow-x: hidden;
            overflow-y: auto;
            line-height: 200px;
            text-align: left;
            cursor: pointer;
            background-color: #001529;
            transition: width 0.3s linear;
            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    .page-header {
        display: flex;
        align-items: center;
        height: 52px;
    }

    .page-content {
        height: calc(100% - 52px);

        .page-info {
            border-radius: 5px;
            background-color: #fff;
        }
    }

    .el-main {
        color: #333;
        text-align: center;
        background-color: #f0f2f5;
    }
}
</style>
