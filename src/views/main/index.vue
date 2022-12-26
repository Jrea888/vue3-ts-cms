<template>
  <div class="login-account">
    <h1>{{ message }}</h1>
    <h3>姓名：{{ info.name }}</h3>
    <h3>年龄：{{ info.age }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  computed: {},
  components: {},
  setup() {
    const message = ref('Hello World')
    const info = reactive({ name: 'coder', age: 18 })
    return { message, info }
  }
})
</script>

<style scoped lang="less">
.login-account {
}
</style>
