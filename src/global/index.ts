import {App} from 'vue'
import registerIcon from './register-icon'
import registerElementPlus from './register-element-plus'

export function globalRegister(app: App): void {
    app.use(registerIcon)
    app.use(registerElementPlus)
}
