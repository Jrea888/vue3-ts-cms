const menu = (): Promise<any> => import('@/views/main/system/menu/menu.vue')
export default {
    path: '/main/system/menu',
    name: 'menu',
    component: menu,
    children: []
}
