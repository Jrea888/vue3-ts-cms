<template>
    <div class="top-header">
        <div class="expand" @click="expandHandle">
            <el-icon size="30" v-if="isExpand"><Fold /></el-icon>
            <el-icon size="30" v-else><Expand /></el-icon>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
    name: 'TopHeader',
    emits: ['expandChange'],
    computed: {},
    components: {},
    setup(prop, {emit}) {
        const message = ref('Header 101')
        const isExpand = ref(false)

        const expandHandle = () => {
            isExpand.value = !isExpand.value
            emit('expandChange', isExpand.value)
        }

        return {message, isExpand, expandHandle}
    }
})
</script>

<style scoped lang="less">
.top-header {
}
</style>
