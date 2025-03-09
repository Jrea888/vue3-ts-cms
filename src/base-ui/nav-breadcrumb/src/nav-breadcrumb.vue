<template>
    <div class="nav-breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.path" :to="{path: item.path}">
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {BreadcrumbInfo} from '../types/index'

export default defineComponent({
    props: {
        breadcrumbs: {
            type: Array as PropType<BreadcrumbInfo[]>,
            default: () => []
        }
    },
    setup() {
        return {}
    }
})
</script>

<style scoped lang="less"></style>
