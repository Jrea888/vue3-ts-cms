const dashboard = (): Promise<any> => import('@/views/main/analysis/dashboard/dashboard.vue')
export default {
    path: '/main/analysis/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: []
}
