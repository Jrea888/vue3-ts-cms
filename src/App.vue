<template>
    <div class="app">
        <el-config-provider :locale="zhCn">
            <router-view></router-view>
        </el-config-provider>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ElConfigProvider} from 'element-plus/lib'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default defineComponent({
    name: 'App',
    components: {ElConfigProvider},
    setup() {
        return {zhCn}
    }
})
</script>

<style scoped lang="less">
.app {
    width: 100%;
    height: 100%;
}
</style>
