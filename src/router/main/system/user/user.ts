const user = (): Promise<any> => import('@/views/main/system/user/user.vue')
export default {
    path: '/main/system/user',
    name: 'user',
    component: user,
    children: []
}
