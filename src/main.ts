import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { register } from './global'

import 'normalize.css'
import './assets/style/index.less'

const app = createApp(App)

app.use(register)
app.use(router)
app.use(store)

app.mount('#app')
