import {createApp} from 'vue'
import ElementPlus from 'element-plus/lib'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
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
app.use(store)

setupStore()
// 先匹配，回调路由导航时，就是那个时刻已经都匹配好了，所以在执行to时就notFound
// path: /user => user
app.use(router)
app.use(ElementPlus, {locale: zhCn})

app.mount('#app')
