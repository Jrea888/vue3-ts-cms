<template>
    <div class="user">
        <PageSearch :searchFormConfig="SearchFormConfig" @search="searchHandle" @reset="resetHandle" />

        <PageContent :columnConfig="ColumnConfig" pageName="users" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import {SearchFormConfig} from './config/search.config'
import {ColumnConfig} from './config/column.config'

export default defineComponent({
    name: 'user',
    components: {PageSearch, PageContent},
    setup() {
        const searchHandle = () => {
            console.log('查询')
        }

        const resetHandle = () => {
            console.log('重置')
        }
        return {
            ColumnConfig,
            SearchFormConfig,
            searchHandle,
            resetHandle
        }
    }
})
</script>

<style scoped></style>
