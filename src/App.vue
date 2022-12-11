<template>
  <div class="app">
    <h1>{{ $store.state.count }}</h1>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less"></style>
