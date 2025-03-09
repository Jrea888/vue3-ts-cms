import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import localCache from '@/utils/cache'
import {FirstMenu} from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        redirect: '/main'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/main/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/not-found/index.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach(to => {
    if (to.path !== '/login') {
        const token = localCache.getCache('token')
        if (!token) {
            return '/login'
        }
    }

    // 如果访问的是main页面，就跳转到第一个菜单的页面
    if (to.path === '/main') {
        return FirstMenu?.path
    }
})

export default router
