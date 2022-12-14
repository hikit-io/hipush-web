import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/application',
            component: () => import("../views/Application.vue")
        },
        {
            path: '/login',
            component: () => import("../views/Login.vue")
        }
    ]
})

export default router