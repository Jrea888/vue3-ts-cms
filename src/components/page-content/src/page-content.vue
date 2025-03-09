<template>
    <div class="page-content">
        <DataTable :listData="dataList" :listCount="dataCount" v-bind="columnConfig" :page="pageInfo">
            <template #operate>
                <el-button type="primary" @click="createUserHandle">新建用户</el-button>
            </template>

            <!-- 列中的插槽 -->
            <template #status="scope">
                <el-tag v-if="scope.row.enable === 0" type="danger">禁用</el-tag>
                <el-tag v-if="scope.row.enable === 1" type="success">启用</el-tag>
            </template>

            <!-- 操作列 -->
            <template #handler="scope">
                <el-button type="text" @click="editUserHandle(scope.row)">编辑</el-button>
                <el-button type="text" @click="deleteUserHandle(scope.row)">删除</el-button>
            </template>
        </DataTable>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, computed} from 'vue'
import {useStore} from '@/store'
import DataTable from '@/base-ui/data-table/index'
import {ColumnConfigInfo} from '@/base-ui/data-table/types'

export default defineComponent({
    props: {
        columnConfig: {
            type: Object as PropType<ColumnConfigInfo>,
            required: true
        },
        pageName: {
            type: String,
            required: true
        }
    },
    components: {DataTable},
    setup(props) {
        const store = useStore()
        store.dispatch('system/getPageListAction', {
            pageName: props.pageName,
            queryInfo: {
                offset: 0,
                size: 10
            }
        })

        // 获取数据
        const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
        const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName))

        console.log(dataCount)

        const pageInfo = ref({
            currentPage: 1,
            pageSize: 10
        })

        const createUserHandle = () => {
            console.log('新建用户')
        }

        const editUserHandle = (row: any) => {
            console.log('编辑用户----', row)
        }

        const deleteUserHandle = (row: any) => {
            console.log('删除用户----', row)
        }

        return {
            dataList,
            dataCount,
            pageInfo,
            editUserHandle,
            deleteUserHandle,
            createUserHandle
        }
    }
})
</script>

<style scoped lang="less">
.page-content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
}
</style>
