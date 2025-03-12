<template>
    <div class="user-page">
        <PageSearch :searchFormConfig="SearchFormConfig" @search="searchHandle" @reset="resetHandle" />
        <PageContent ref="pageContentRef" :columnConfig="ColumnConfig" pageName="users" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import {useUserPageSearch} from '@/hooks/user-page-search'
import {SearchFormConfig} from './config/search.config'
import {ColumnConfig} from './config/column.config'

export default defineComponent({
    name: 'user',
    components: {PageSearch, PageContent},
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
.user-page {
}
</style>
