<template>
    <div class="data-table">
        <div class="header">
            <div class="title">{{ title }}</div>
            <div class="operate">
                <slot name="operate"></slot>
            </div>
        </div>

        <el-table border :data="listData" style="width: 100%" @selection-change="selectionChangeHandle">
            <!-- 复选框 -->
            <el-table-column v-if="showSelectColumn" type="selection" width="60" align="center"></el-table-column>
            <!-- 序号 -->
            <el-table-column
                v-if="showIndexColumn"
                type="index"
                label="序号"
                width="60"
                align="center"
            ></el-table-column>

            <!-- 循环遍历其他列 -->
            <template v-for="propItem in propList" :key="propItem.prop" show-overflow-tooltip>
                <el-table-column v-bind="propItem" align="center">
                    <template #default="scope">
                        <!-- 作用域插槽 -->
                        <slot :name="propItem.slotName" :row="scope.row">
                            <template v-if="propItem.prop">
                                {{ scope.row[propItem.prop] }}
                            </template>
                        </slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>

        <!-- 分页 -->
        <div class="footer" v-if="showFooter">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {PropListInfo} from '../types'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        },
        listData: {
            type: Array,
            required: true
        },
        propList: {
            type: Array as PropType<PropListInfo[]>,
            required: true
        },
        listCount: {
            type: Number,
            required: true
        },
        showIndexColumn: {
            type: Boolean,
            default: false
        },
        showSelectColumn: {
            type: Boolean,
            default: false
        },
        showFooter: {
            type: Boolean,
            default: true
        },
        page: {
            type: Object,
            default: () => ({currentPage: 1, pageSize: 10})
        },
        childrenProps: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['selectionChange'],
    setup() {
        const selectionChangeHandle = (val: any) => {
            console.log(val)
        }
        return {selectionChangeHandle}
    }
})
</script>

<style scoped lang="less">
.data-table {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .title {
            font-size: 18px;
            font-weight: 700;
        }
    }
}
</style>
