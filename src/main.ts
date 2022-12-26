import { createApp } from 'vue'
import App from './App.vue'
import store, { setupStore } from './store'
import router from './router'
import { register } from './global'

// 初始化样式
import 'normalize.css'
import './assets/style/index.less'

const app = createApp(App)

app.use(register)
app.use(router)
app.use(store)
setupStore()

app.mount('#app')
