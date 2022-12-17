import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerElement } from './global'

const app = createApp(App)

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

app.use(registerElement)
app.use(router)
app.use(store)

app.mount('#app')
