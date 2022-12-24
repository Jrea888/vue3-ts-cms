import { App } from 'vue'
import registerElementPlus from './register-element-plus'
import registerIcon from './register-icon'

export function register(app: App): void {
  app.use(registerIcon)
  app.use(registerElementPlus)
}
