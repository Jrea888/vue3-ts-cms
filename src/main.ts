import {createApp} from 'vue'
import App from './App.vue'
import store, {setupStore} from './store'
import router from './router'
import {globalRegister} from './global'

// 初始化样式
import 'normalize.css'
import './assets/style/index.less'

const app = createApp(App)

// 注册第三方库
app.use(globalRegister)
app.use(router)
app.use(store)

setupStore()

app.mount('#app')
