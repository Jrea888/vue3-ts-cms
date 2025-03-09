<template>
    <div class="page-search">
        <DynamicForm v-bind="searchFormConfig" v-model="formData">
            <template #footer>
                <el-button icon="el-icon-refresh" @click="resetHandle">重置</el-button>
                <el-button icon="el-icon-search" type="primary" @click="searchHandle">查询</el-button>
            </template>
        </DynamicForm>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, PropType} from 'vue'
import DynamicForm from '@/base-ui/dynamic-form/src/dynamic-form.vue'
import {IForm} from '@/base-ui/dynamic-form/types'

export default defineComponent({
    name: 'page-search',
    props: {
        searchFormConfig: {
            type: Object as PropType<IForm>,
            required: true
        }
    },
    emits: ['search', 'reset'],
    components: {DynamicForm},
    setup(props, {emit}) {
        const formOriginData: Record<string, string> = {}
        const formItems = props.searchFormConfig?.formItems ?? []
        for (const element of formItems) {
            formOriginData[element.field] = ''
        }

        const formData = ref(formOriginData)
        const resetHandle = () => {
            formData.value = formOriginData
            emit('reset')
        }

        const searchHandle = () => {
            emit('search', formData.value)
        }

        return {
            formData,
            resetHandle,
            searchHandle
        }
    }
})
</script>

<style scoped lang="less">
.page-search {
    :deep(.form-footer) {
        display: flex;
        justify-content: flex-end;
        padding: 0 38px 24px 0;
    }
}
</style>
