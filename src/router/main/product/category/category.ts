const category = (): Promise<any> => import('@/views/main/product/category/category.vue')
export default {
    path: '/main/product/category',
    name: 'category',
    component: category,
    children: []
}
