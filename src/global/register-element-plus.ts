import {App} from 'vue'
import {
    ElButton,
    ElTabs,
    ElTabPane,
    ElCheckbox,
    ElForm,
    ElFormItem,
    ElInput,
    ElIcon,
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElCollapseTransition
} from 'element-plus/lib'
import 'element-plus/theme-chalk/index.css'

const components = [
    ElButton,
    ElTabs,
    ElTabPane,
    ElCheckbox,
    ElForm,
    ElFormItem,
    ElInput,
    ElIcon,
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElCollapseTransition
]

export default function (app: App): void {
    for (const component of components) {
        app.component(component.name as string, component)
    }
}
