const chat = (): Promise<any> => import('@/views/main/story/chat/chat.vue')
export default {
    path: '/main/story/chat',
    name: 'chat',
    component: chat,
    children: []
}
