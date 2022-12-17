import { App } from 'vue'
import registerElementPlus from './register-element-plus'

export function registerElement(app: App): void {
  app.use(registerElementPlus)
}
