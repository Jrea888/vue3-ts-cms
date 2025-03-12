<template>
    <div class="role-page">
        <PageSearch :searchFormConfig="SearchFormConfig" @search="searchHandle" @reset="resetHandle" />
        <PageContent ref="pageContentRef" :columnConfig="ColumnConfig" pageName="role" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import {SearchFormConfig} from './config/search.config'
import {ColumnConfig} from './config/column.config'
import {useUserPageSearch} from '@/hooks/user-page-search'

export default defineComponent({
    name: 'role',
    components: {
        PageSearch,
        PageContent
    },
    setup() {
        const [pageContentRef, searchHandle, resetHandle] = useUserPageSearch()

        return {
            pageContentRef,
            ColumnConfig,
            SearchFormConfig,
            searchHandle,
            resetHandle
        }
    }
})
</script>

<style scoped lang="less">
.role-page {
}
</style>
