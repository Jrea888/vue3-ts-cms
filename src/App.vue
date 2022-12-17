<template>
  <div class="app">
    <h1>{{ $store.state.count }}</h1>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>

    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <ElCascader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-cascader.css'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less"></style>
