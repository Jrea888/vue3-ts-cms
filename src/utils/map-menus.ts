import {RouteRecordRaw} from 'vue-router'
import {UserMenusInfo, ChildrenInfo} from '@/model'
import {BreadcrumbInfo} from '@/base-ui/nav-breadcrumb/types'

let FirstMenu: RouteRecordRaw | null = null

export function mapMenusToRoutes(userMenus: Array<UserMenusInfo>): Array<RouteRecordRaw> {
    const routes: Array<RouteRecordRaw> = []
    const allRoutes: Array<RouteRecordRaw> = []

    // 1.先去加载默认所有的routes文件 第二个参数：递归查找所有ts文件
    const routeFiles = require.context('../router/main', true, /\.ts/)
    for (const key of routeFiles.keys()) {
        const route = require('../router/main' + key.split('.')[1])
        allRoutes.push(route.default)
    }

    // 2.根据菜单获取当前登录用户需要添加的routes
    const recurseGetRoute = (menus: Array<UserMenusInfo | ChildrenInfo>) => {
        for (const menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find(v => v.path === menu.url)
                if (route) {
                    routes.push(route)
                    // 保存第一个菜单
                    if (!FirstMenu) {
                        FirstMenu = route
                    }
                }
            } else {
                recurseGetRoute(menu.children as Array<ChildrenInfo>)
            }
        }
    }

    recurseGetRoute(userMenus)
    return routes
}

export function pathToMenuItem(
    userMenus: Array<UserMenusInfo | ChildrenInfo>,
    path: string,
    breadcrumbList?: Array<BreadcrumbInfo>
): ChildrenInfo | undefined {
    for (const menu of userMenus) {
        if (menu.type === 1) {
            const findMenu = pathToMenuItem(menu.children as Array<ChildrenInfo>, path)
            if (findMenu) {
                breadcrumbList?.push({name: menu.name})
                breadcrumbList?.push({name: findMenu.name})
                return findMenu
            }
        } else if (menu.type === 2) {
            if (menu.url === path) {
                return menu as ChildrenInfo
            }
        }
    }
}

export function pathMapBreadcrumbList(
    userMenus: Array<UserMenusInfo | ChildrenInfo>,
    path: string
): Array<BreadcrumbInfo> {
    const breadcrumbList: Array<BreadcrumbInfo> = []
    pathToMenuItem(userMenus, path, breadcrumbList)
    return breadcrumbList
}

export {FirstMenu}
