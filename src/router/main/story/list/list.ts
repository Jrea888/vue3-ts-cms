const list = (): Promise<any> => import('@/views/main/story/list/list.vue')
export default {
    path: '/main/story/list',
    name: 'list',
    component: list,
    children: []
}
