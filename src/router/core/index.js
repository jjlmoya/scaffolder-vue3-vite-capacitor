export default [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import('@/views/Home/Index.vue'),
        meta: { requiresAuth: true }
    }
]
