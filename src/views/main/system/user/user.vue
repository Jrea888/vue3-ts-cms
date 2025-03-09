<template>
    <div class="user">
        <PageSearch :searchFormConfig="searchFormConfig" @search="searchHandle" @reset="resetHandle" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PageSearch from '@/components/page-search'
import {searchFormConfig} from './config/search.config'

export default defineComponent({
    name: 'user',
    components: {PageSearch},
    setup() {
        const searchHandle = () => {
            console.log('查询')
        }

        const resetHandle = () => {
            console.log('重置')
        }
        return {
            searchFormConfig,
            searchHandle,
            resetHandle
        }
    }
})
</script>

<style scoped></style>
