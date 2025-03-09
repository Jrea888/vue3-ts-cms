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
    ElCollapseTransition,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElTag
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
    ElCollapseTransition,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElTag
]

export default function (app: App): void {
    for (const component of components) {
        app.component(component.name as string, component)
    }
}
