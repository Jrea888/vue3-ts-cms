const role = (): Promise<any> => import('@/views/main/system/role/role.vue')
export default {
    path: '/main/system/role',
    name: 'role',
    component: role,
    children: []
}
