import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import { ElButton, ElCascader, ElAlert } from 'element-plus'

const components = [ElButton, ElCascader, ElAlert]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
